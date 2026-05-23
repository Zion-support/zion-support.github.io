// Cookie Policy
'use client';
import Link from 'next/link';
export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link href="/privacy" className="text-emerald-400 hover:text-emerald-300 text-sm mb-6 inline-block">← Privacy</Link>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Cookie Policy</h1>
        <div className="space-y-4 text-slate-300">
          {[
            ['Essential Cookies','Auth tokens, CSRF protection — required, no opt-out'],
            ['Analytics','Usage stats via anonymous event tracking — opt-out available'],
            ['Marketing','Retargeting pixels — opt-out via /privacy'],
            ['Preferences','Language, theme, saved filters'],
          ].map(([name,desc])=>(
            <div key={name} className="bg-slate-900/80 border border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-emerald-300">{name}</h3>
              <p className="text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-500 text-sm mt-6">Last updated: 2025-05-22</p>
      </div>
    </div>
  );
}
