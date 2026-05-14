'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, AlertCircle, Clock, Shield } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  category: string;
  uptime: number;
  latencyMs: number;
  status: 'operational' | 'degraded' | 'maintenance';
}

interface Incident {
  id: string;
  title: string;
  start: string;
  end: string | null;
  services: string[];
  status: 'resolved' | 'scheduled' | 'investigating';
  summary: string;
}

interface HealthPayload {
  generatedAt: string;
  overall: { operational: number; degraded: number; total: number; averageUptime: number };
  services: Service[];
  incidents: Incident[];
}

export default function StatusPage() {
  const [data, setData] = useState<HealthPayload | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/status')
      .then(r => r.json())
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  const getStatusColor = (status: Service['status']) => {
    switch (status) {
      case 'operational': return 'bg-green-500';
      case 'degraded': return 'bg-amber-500';
      case 'maintenance': return 'bg-blue-500';
    }
  };

  const getStatusTextColor = (status: Service['status']) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-amber-400';
      case 'maintenance': return 'text-blue-400';
    }
  };

  const getLatencyColor = (ms: number) => (ms < 100 ? 'text-green-400' : ms < 200 ? 'text-amber-400' : 'text-red-400');

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-white text-lg animate-pulse">Loading system health…</div>
      </div>
    );
  }

  if (!data) {
    return <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">Unable to load status.</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-600/20 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-300 px-4 py-2 rounded-full text-sm mb-4">
              <Activity className="w-4 h-4" />
              <span>Live System Health</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Zion <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Status</span>
            </h1>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Real-time operational metrics, uptime, and incident history for all AI & IT services.
            </p>
            <p className="text-slate-400 text-sm mt-2">
              Last refreshed: {new Date(data.generatedAt).toLocaleString()}
            </p>
          </motion.div>

          {/* Summary stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-green-400">{data.overall.operational}/{data.overall.total}</div>
              <div className="text-slate-400 text-sm">Services Healthy</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-amber-400">{data.overall.degraded}</div>
              <div className="text-slate-400 text-sm">Degraded</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-emerald-400">{data.overall.averageUptime}%</div>
              <div className="text-slate-400 text-sm">Avg Uptime</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-blue-400">{data.incidents.length}</div>
              <div className="text-slate-400 text-sm">Active Incidents</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Active incidents */}
      {data.incidents.length > 0 && (
        <section className="px-6 py-8 border-t border-slate-700/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-amber-400" />
              Incidents
            </h2>
            <div className="space-y-4">
              {data.incidents.map(inc => (
                <div key={inc.id} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-white font-semibold">{inc.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      inc.status === 'resolved' ? 'bg-green-500/20 text-green-400' :
                      inc.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      {inc.status}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{inc.summary}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> Started: {new Date(inc.start).toLocaleString()}</span>
                    {inc.end && <span>Resolved: {new Date(inc.end).toLocaleString()}</span>}
                    <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Impact: {inc.services.join(', ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services grid */}
      <section className="px-6 py-8 border-t border-slate-700/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Activity className="w-6 h-6 text-emerald-400" />
            Service Health
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03 }}
                className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-emerald-500/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                    <span className="text-white font-medium">{service.name}</span>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${getStatusTextColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">
                    Latency: <span className={getLatencyColor(service.latencyMs)}>{service.latencyMs}ms</span>
                  </span>
                  <span className="text-slate-400">
                    Uptime: <span className="text-green-400">{service.uptime}%</span>
                  </span>
                </div>
                <div className="mt-2 text-xs text-slate-500">{service.category}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need a Custom SLA Report?</h2>
            <p className="text-white/80 mb-6">Get a personalized health dashboard for your deployment.</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 rounded-full font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Us <Zap className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
