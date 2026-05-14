// Quality Dashboard — admin view of service health scores and trends
'use client';

import { useEffect, useState } from 'react';

export default function QualityDashboard() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/quality')
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(e => { console.error(e); setLoading(false); });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-xl text-slate-300">Loading quality data...</div>
      </div>
    );
  }

  if (!data?.latest) {
    return (
      <div className="min-h-screen bg-slate-950 p-8">
        <h1 className="text-3xl font-bold text-white mb-4">Quality Dashboard</h1>
        <p className="text-slate-300">No audit reports yet. Run the quality auditor to generate data.</p>
      </div>
    );
  }

  const { latest, trend } = data;
  const scoreColor = (s: number) => s >= 90 ? 'text-green-400' : s >= 80 ? 'text-yellow-400' : s >= 70 ? 'text-orange-400' : 'text-red-400';

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-2">Service Quality Dashboard</h1>
          <p className="text-slate-400">Autonomous health monitoring for {latest.totalServices} services</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-sm text-slate-400 mb-1">Average Score</div>
            <div className={`text-4xl font-bold ${scoreColor(latest.averageScore)}`}>{latest.averageScore}/100</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-sm text-slate-400 mb-1">Total Services</div>
            <div className="text-4xl font-bold text-white">{latest.totalServices}</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-sm text-slate-400 mb-1">Passing</div>
            <div className="text-4xl font-bold text-green-400">{latest.passed}</div>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <div className="text-sm text-slate-400 mb-1">Needs Attention</div>
            <div className={`text-4xl font-bold ${latest.failed > 0 ? 'text-red-400' : 'text-slate-500'}`}>{latest.failed}</div>
          </div>
        </div>

        {trend?.length > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Quality Trend (Last 10 Runs)</h2>
            <div className="h-64 flex items-end justify-between gap-2">
              {trend.map((p: any, i: number) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-accent to-purple-500 rounded-t" style={{ height: `${Math.max(20, p.score)}%`, minHeight: '8px' }} />
                  <div className="text-xs text-slate-400 mt-2">{p.date.slice(5)}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {latest.failed > 0 && (
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h2 className="text-2xl font-bold text-white mb-6">Services Needing Attention</h2>
            <div className="space-y-4">
              {latest.results
                .filter((r: any) => r.score < 80)
                .sort((a: any, b: any) => a.score - b.score)
                .map((item: any, idx: number) => (
                  <div key={idx} className="border border-slate-700 rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.service.title}</h3>
                        <p className="text-sm text-slate-400">{item.service.href}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.issues.map((iss: string, i: number) => (
                            <span key={i} className="px-2 py-1 bg-red-900/30 text-red-300 text-xs rounded">{iss}</span>
                          ))}
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${scoreColor(item.score)}`}>{item.score}</div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {latest.failed === 0 && (
          <div className="bg-green-900/20 border border-green-700 rounded-xl p-8 text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-400 mb-2">All Services Healthy</h2>
            <p className="text-slate-300">Every service page meets quality standards.</p>
          </div>
        )}
      </div>
    </div>
  );
}
