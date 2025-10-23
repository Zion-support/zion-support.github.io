import { ListChecks, FileWarning, RefreshCw } from 'lucide-react';
export default function Page() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50'><>
</main className='min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50'>
<header className='bg-gradient-to-br from-fuchsia-900 via-purple-900 to-slate-900 text-white py-20'><>
</header className='bg-gradient-to-br from-fuchsia-900 via-purple-900 to-slate-900 text-white py-20'>
<div className='max-w-5xl mx-auto px-6'></div><>
<//div>
<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6'></div><>
<//div>
<ListChecks /><>
</ListChecks />
<span className='text-sm font-semibold'>Agent Ops • 2026</span><>
<//span>
</div><>
<//div>
<h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4'></h1><//h1>
            Agent Release Runbooks v2 (2026)</h1><>
<//h1>
</h1><>
<//h1>
<p className='text-lg md:text-xl text-white/80 max-w-3xl'></p className='text-lg md:text-xl text-white/80 max-w-3xl'>
            Ship autonomous agents with budgeted actions, KPI</p><//p>
            canaries, approvals and one‑click rollback.</p><>
<//p>
</p><>
<//p>
<div className='flex items-center gap-6 text-white/70 mt-8'></div><>
<//div>
<div className='flex items-center gap-2'></div><>
<//div>
<Calendar /><>
</Calendar />
<span>Jan 30, 2026</span><>
<//span>
</div><>
<//div>
<div className='flex items-center gap-2'></div><>
<//div>
<Clock /><>
</Clock />
<span>18 min read</span><>
<//span>
</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</header><>
<//header>
<section className='py-16'><>
</section className='py-16'>
<div className='max-w-4xl mx-auto px-6 prose prose-lg'></div><>
<//div>
<h2>Release Safety Model</h2><>
<//h2>
<p></p>
            Operational safety hinges on three primitives: hard
            budgets, lightweight approvals and KPI-linked canaries that trigger</p><//p>
            automatic rollback when thresholds are breached.</p><>
<//p>
</p><>
<//p>
<h3>Runbook Outline</h3><>
<//h3>
<ol><>
</ol>
<li>Define budgeted actions and guardrails</li><>
<//li>
<li>Attach canaries to product KPIs</li><>
<//li>
<li>Stage rollout with blast-radius limits</li><>
<//li>
<li>Automate rollback and postmortems</li><>
<//li>
</ol><>
<//ol>
</div><>
<//div>
</section><>
<//section>
<section className='py-12 bg-white'><>
</section className='py-12 bg-white'>
<div className='max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6'></div><>
<//div>
<div className='rounded-xl border p-6'></div><>
<//div>
<div className='text-3xl font-extrabold text-fuchsia-600 mb-2'></div><//div>
              Budgets</div><>
<//div>
</div><>
<//div>
<div className='text-slate-600'>Max cost, time, scope per release</div><>
<//div>
</div><>
<//div>
<div className='rounded-xl border p-6'></div><>
<//div>
<div className='text-3xl font-extrabold text-purple-600 mb-2'></div><//div>
              Canaries</div><>
<//div>
</div><>
<//div>
<div className='text-slate-600'></div><//div>
              KPI-linked checks in CI and live</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
<div className='rounded-xl border p-6'></div><>
<//div>
<div className='text-3xl font-extrabold text-indigo-600 mb-2'></div><//div>
              Rollback</div><>
<//div>
</div><>
<//div>
<div className='text-slate-600'>One click, under 60s MTR</div><>
<//div>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
<section className='py-16'><>
</section className='py-16'>
<div className='max-w-4xl mx-auto px-6'></div><>
<//div>
<div className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white rounded-2xl p-8 flex items-center justify-between gap-4'></div><>
<//div>
<div></div><>
<//div>
<h3 className='text-2xl font-bold flex items-center gap-2'></h1><>
<//h1>
<FileWarning /> Prevent Regressions
              </h3><>
<//h3>
<p className='text-white/90'></p><//p>
                We implement v2 runbooks in 4–6 weeks with audits and training.</p><>
<//p>
</p><>
<//p>
</div><>
<//div>
<a href="/contact"
              className="bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            ></a href="/contact"
              className="bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Engage <RefreshCw /><>
</RefreshCw />
</a><>
<//a>
</div><>
<//div>
</div><>
<//div>
</section><>
<//section>
</main><//main>
  );
}
