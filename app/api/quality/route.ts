// GET /api/quality — latest quality audit summary
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const REPORT_DIR = path.join(process.cwd(), 'automation', 'reports', 'quality');

export async function GET(req: NextRequest) {
  try {
    if (!fs.existsSync(REPORT_DIR)) {
      return NextResponse.json({ error: 'No reports yet' }, { status: 404 });
    }

    const files = fs.readdirSync(REPORT_DIR)
      .filter(f => f.startsWith('audit-'))
      .sort()
      .reverse();

    if (files.length === 0) {
      return NextResponse.json({ error: 'No reports found' }, { status: 404 });
    }

    const latest = JSON.parse(fs.readFileSync(path.join(REPORT_DIR, files[0]), 'utf8'));

    const trend = files.slice(0, 10).map(f => {
      const d = JSON.parse(fs.readFileSync(path.join(REPORT_DIR, f), 'utf8'));
      return { date: f.replace('audit-', '').replace('.json', ''), score: d.averageScore, total: d.totalServices, failed: d.failed };
    }).reverse();

    return NextResponse.json({
      latest,
      trend,
      totalReports: files.length,
      lastReport: files[0].replace('audit-', '').replace('.json', '')
    });
  } catch (err: any) {
    console.error('Quality dashboard error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
