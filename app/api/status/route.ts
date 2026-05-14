export async function GET() {
  const fs = require('fs');
  const path = require('path');

  const REPORTS_DIR = path.join(process.cwd(), 'automation', 'reports');
  let latestReport = null;

  if (fs.existsSync(REPORTS_DIR)) {
    const files = fs.readdirSync(REPORTS_DIR)
      .filter(f => f.startsWith('health-') && f.endsWith('.json'))
      .sort()
      .reverse();

    if (files.length > 0) {
      const latestPath = path.join(REPORTS_DIR, files[0]);
      latestReport = JSON.parse(fs.readFileSync(latestPath, 'utf8'));
    }
  }

  if (!latestReport) {
    return new Response(JSON.stringify({
      status: 'no_data',
      message: 'No health reports found. Run the health checker first.'
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  }

  const summary = {
    generatedAt: latestReport.generatedAt,
    totalServices: latestReport.total,
    healthy: latestReport.healthy,
    unhealthy: latestReport.unhealthy,
    errors: latestReport.errors,
    uptimePercent: latestReport.uptimePercent,
    avgResponseTimeMs: latestReport.avgResponseTimeMs,
    baseUrl: latestReport.baseUrl,
    topSlowest: latestReport.results
      .filter(r => r.ok)
      .sort((a, b) => b.responseTimeMs - a.responseTimeMs)
      .slice(0, 10)
      .map(r => ({ id: r.id, title: r.title, ms: r.responseTimeMs })),
    recentFailures: latestReport.results
      .filter(r => !r.ok)
      .slice(0, 10)
      .map(r => ({ id: r.id, title: r.title, status: r.status, error: r.error }))
  };

  return new Response(JSON.stringify(summary, null, 2), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
