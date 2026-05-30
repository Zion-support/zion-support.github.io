import Link from 'next/link';

export default function HealthDashboard() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-emerald-400 mb-2">📊 Service Health Dashboard</h1>
        <p className="text-gray-400 mb-8">Real-time monitoring of all Zion Tech Group services</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-emerald-400 text-3xl font-bold">1454+</div>
            <div className="text-gray-400">Services Monitored</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-emerald-400 text-3xl font-bold">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className="text-emerald-400 text-3xl font-bold">24/7</div>
            <div className="text-gray-400">Monitoring</div>
          </div>
        </div>
        <Link href="/services" className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Browse All Services →
        </Link>
      </div>
    </main>
  );
}
