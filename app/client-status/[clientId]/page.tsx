'use client';

import { useEffect, useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, useParams } from 'next/navigation';
import { Activity, Shield, AlertCircle, Clock, BarChart3 } from 'lucide-react';

interface ClientService {
  id: string;
  name: string;
  uptime: number;
  latencyMs: number;
  status: 'operational' | 'degraded' | 'maintenance';
  sla: { uptimePercent: number; breaches: number };
}

interface ClientTrend { date: string; uptime: number; }

interface ClientPayload {
  clientId: string;
  generatedAt: string;
  reportPeriod: { start: string; end: string };
  sla: { uptimePercent: number; incidents: number; meanTimeToResolveMin: number };
  services: ClientService[];
  uptimeTrend: ClientTrend[];
}

function ClientPortalInner() {
  const params = useParams<{ clientId: string }>();
  const search = useSearchParams();
  const clientId = params.clientId;
  const token = search.get('token');

  const [data, setData] = useState<ClientPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!clientId) { setError('Missing client ID'); setLoading(false); return; }

    // Build URL with token param if provided; for demo clientId, allow unauthenticated access
    const url = token
      ? `/api/status?clientId=${encodeURIComponent(clientId)}&token=${encodeURIComponent(token)}`
      : clientId === 'demo'
        ? `/api/status?clientId=demo`
        : `/api/status`;

    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('Invalid token or client not found');
        return r.json();
      })
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [clientId, token]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg animate-pulse">Loading client status…</div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center gap-4">
        <Shield className="w-12 h-12 text-red-400" />
        <p className="text-red-300">Access denied: {error || 'Unknown error'}</p>
        <a href="/status" className="px-4 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">View Public Status</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Zion Client Portal</h1>
              <p className="text-xs text-slate-400">Client ID: {data.clientId}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-emerald-400 text-sm">
            <Shield className="w-4 h-4" />
            Authenticated
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-12 px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Service Health for <span className="text-emerald-400">{data.clientId}</span>
          </h1>
          <p className="text-slate-300 mb-4">
            Personalized SLA metrics and real-time status for your subscribed services.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm">
            Period: {data.reportPeriod.start} – {data.reportPeriod.end}
          </div>
        </motion.div>

        {/* High-level SLA */}
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-emerald-400">{data.sla.uptimePercent}%</div>
            <div className="text-slate-400 text-sm">SLA Uptime</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-blue-400">{data.sla.incidents}</div>
            <div className="text-slate-400 text-sm">Incidents (period)</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="text-3xl font-bold text-amber-400">{data.sla.meanTimeToResolveMin}min</div>
            <div className="text-slate-400 text-sm">Avg Resolution</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <BarChart3 className="w-6 h-6 text-emerald-400" />
            Your Services
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {data.services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{svc.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${svc.status === 'operational' ? 'bg-green-500/20 text-green-400' : 'bg-amber-500/20 text-amber-400'}`}>
                    {svc.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">Uptime: <span className="text-green-400">{svc.uptime}%</span></span>
                  <span className="text-slate-400">Latency: <span className={svc.latencyMs < 100 ? 'text-green-400' : 'text-amber-400'}>{svc.latencyMs}ms</span></span>
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  SLA breaches: {svc.sla.breaches} in period
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Uptime trend */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-emerald-400" />
            30-Day Uptime Trend
          </h2>
          <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <div className="flex items-end justify-between h-40 gap-1">
              {data.uptimeTrend.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-emerald-600/80 rounded-t"
                    style={{ height: `${(d.uptime - 95) * 20}px` }}
                    title={`${d.date}: ${d.uptime}%`}
                  />
                  {i % 5 === 0 && <span className="text-[10px] text-slate-400 rotate-45 origin-left">{d.date.slice(5)}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Questions about your service health?</h2>
            <p className="text-white/80 mb-6">Our support team is available 24/7.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Support <Activity className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 text-slate-400 text-xs py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <span>© {new Date().getFullYear()} Zion Tech Group. All rights reserved.</span>
          <span>📞 +1 302 464 0950 | ✉️ kleber@ziontechgroup.com</span>
        </div>
      </footer>
    </div>
  );
}

export default function ClientStatusPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg animate-pulse">Authenticating…</div>
      </div>
    }>
      <ClientPortalInner />
    </Suspense>
  );
}
