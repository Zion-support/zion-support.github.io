// Analytics Dashboard Overview
'use client';
import Link from 'next/link';
export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/services" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">← All Services</Link>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Data Analytics & BI</h1>
        <p className="text-slate-400 text-lg mb-8">From dashboarding to embedded analytics — turn raw data into decisions.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {title:'BI Dashboards',desc:'Executive dashboards with real-time KPI tracking'},
            {title:'Predictive Analytics',desc:'ML-powered forecasting for sales, inventory, and demand'},
            {title:'Embedded Analytics',desc:'Analytics embedded directly into your apps and workflows'},
          ].map((f,i)=>(
            <div key={i} className="bg-slate-900/80 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/60 transition">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-slate-400 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary inline-block">Talk to an Expert</Link>
        </div>
      </div>
    </div>
  );
}
