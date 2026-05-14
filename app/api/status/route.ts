import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

// ── Mock health data ────────────────────────────────────────────────────────
const SERVICES = [
  { id: 'ai-voice', name: 'Voice AI', category: 'AI Services', uptime: 99.99, latencyMs: 45, status: 'operational' as const },
  { id: 'chatbot-api', name: 'Chatbot API', category: 'AI Services', uptime: 99.98, latencyMs: 32, status: 'operational' as const },
  { id: 'ml-engine', name: 'ML Engine', category: 'AI Services', uptime: 99.95, latencyMs: 120, status: 'operational' as const },
  { id: 'document-ai', name: 'Document AI', category: 'AI Services', uptime: 99.90, latencyMs: 85, status: 'operational' as const },
  { id: 'analytics', name: 'Analytics', category: 'AI Services', uptime: 98.50, latencyMs: 250, status: 'degraded' as const },
  { id: 'translation', name: 'Translation', category: 'AI Services', uptime: 99.85, latencyMs: 95, status: 'operational' as const },
  { id: 'image-recognition', name: 'Image Recognition', category: 'AI Services', uptime: 99.92, latencyMs: 78, status: 'operational' as const },
  { id: 'recommendation', name: 'Recommendation Engine', category: 'AI Services', uptime: 99.99, latencyMs: 25, status: 'operational' as const },
  { id: 'cloud-cost-opt', name: 'Cloud Cost Optimization', category: 'IT Services', uptime: 99.97, latencyMs: 58, status: 'operational' as const },
  { id: 'container-scan', name: 'Container Security', category: 'IT Services', uptime: 99.95, latencyMs: 110, status: 'operational' as const },
  { id: 'zero-trust', name: 'Zero Trust Access', category: 'IT Services', uptime: 99.99, latencyMs: 12, status: 'operational' as const },
  { id: 'sre-platform', name: 'SRE Platform', category: 'IT Services', uptime: 99.96, latencyMs: 38, status: 'operational' as const },
  { id: 'data-catalog', name: 'Data Catalog', category: 'IT Services', uptime: 99.93, latencyMs: 65, status: 'operational' as const },
  { id: 'disaster-recovery', name: 'Disaster Recovery', category: 'IT Services', uptime: 99.99, latencyMs: 22, status: 'operational' as const },
];

const INCIDENTS = [
  { id: 'inc-001', title: 'Analytics latency spike', start: '2026-05-19T14:23:00Z', end: '2026-05-19T15:45:00Z', services: ['analytics'], status: 'resolved' as const, summary: 'Elevated p95 latency due to DB connection pool exhaustion; auto-scaler triggered.' },
  { id: 'inc-002', title: 'Translation API warm-up delay', start: '2026-05-18T08:00:00Z', end: '2026-05-18T09:30:00Z', services: ['translation'], status: 'resolved' as const, summary: 'Cold-start latency in new region; cache预热策略已调整.' },
  { id: 'inc-003', title: 'Scheduled ML Engine maintenance', start: '2026-05-20T02:00:00Z', end: null, services: ['ml-engine'], status: 'scheduled' as const, summary: 'GPU driver upgrade; expected downtime ~15 min.' },
];

// ── Simple token store (in prod, use DB + signed HMAC) ─────────────────────
const CLIENT_TOKENS: Record<string, string> = {
  demo: 'zion-demo-token-2026',
  acme: 'zion-acme-secret',
};

function verifyClientToken(clientId: string, token: string): boolean {
  return CLIENT_TOKENS[clientId] === token;
}

function getUptimeTrend(days: number) {
  // generate smooth uptime curve around current value
  const base = 99.95;
  return Array.from({ length: days }, (_, i) => ({
    date: new Date(Date.now() - (days - i) * 86400000).toISOString().split('T')[0],
    uptime: +(base + (Math.random() * 0.04 - 0.02)).toFixed(2),
  }));
}

// ── Route handlers ────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const clientId = url.searchParams.get('clientId');
  const token = url.searchParams.get('token');

  // If client credentials provided → return per-client SLA snapshot
  if (clientId && token) {
    if (!verifyClientToken(clientId, token)) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
    const clientServices = SERVICES.slice(0, 5); // mock subset
    return NextResponse.json({
      clientId,
      generatedAt: new Date().toISOString(),
      reportPeriod: { start: '2026-05-01', end: '2026-05-22' },
      sla: {
        uptimePercent: 99.94,
        incidents: INCIDENTS.filter(i => i.status !== 'scheduled').length,
        meanTimeToResolveMin: 42,
      },
      services: clientServices.map(s => ({
        ...s,
        sla: { uptimePercent: s.uptime, breaches: Math.floor(Math.random() * 2) },
      })),
      uptimeTrend: getUptimeTrend(30),
    });
  }

  // Default: full admin health payload
  return NextResponse.json({
    generatedAt: new Date().toISOString(),
    overall: {
      operational: SERVICES.filter(s => s.status === 'operational').length,
      degraded: SERVICES.filter(s => s.status === 'degraded').length,
      total: SERVICES.length,
      averageUptime: +(SERVICES.reduce((a, s) => a + s.uptime, 0) / SERVICES.length).toFixed(2),
    },
    services: SERVICES,
    incidents: INCIDENTS,
  });
}
