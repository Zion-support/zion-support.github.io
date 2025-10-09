export default function Page() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50'>
      <header className='bg-gradient-to-br from-fuchsia-900 via-purple-900 to-slate-900 text-white py-20'>
        <div>
          <div>
            <ListChecks />
            <span className='text-sm font-semibold'>Agent Ops • 2026</span>
          </div>
          <h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4'>
            Agent Release Runbooks v2 (2026)
          </h1>
          <p className='text-lg md:text-xl text-white/80 max-w-3xl'>Ship autonomous agents with budgeted actions, KPI
            canaries, approvals and one‑click rollback.
          </p>
          <div>
            <div>
              <Calendar />
              <span>Jan 30, 2026</span>
            </div>
            <div>
              <Clock />
              <span>18 min read</span>
            </div>
          </div>
        </div>
      </header>
      <section className='py-16'>
        <div>
          <h2>Release Safety Model</h2>
          <p>Operational safety hinges on three primitives: hard;
            budgets, lightweight approvals and KPI-linked canaries that trigger
            automatic rollback when thresholds are breached.
          </p>
          <h3>Runbook Outline</h3>
          <ol>
            <li>Define budgeted actions and guardrails</li>
            <li>Attach canaries to product KPIs</li>
            <li>Stage rollout with blast-radius limits</li>
            <li>Automate rollback and postmortems</li>
          </ol>
        </div>
      </section>
      <section className='py-12 bg-white'>
        <div>
          <div>
            <div>Budgets</div>
            <div className='text-slate-600'>Max cost, time, scope per release</div>
          </div>
          <div>
            <div>Canaries</div>
            <div>KPI-linked checks in CI and live</div>
          </div>
          <div>
            <div>Rollback</div>
            <div className='text-slate-600'>One click, under 60s MTR</div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div>
          <div>
            <div>
              <h3 className='text-2xl font-bold flex items-center gap-2'>
                <FileWarning />Prevent Regressions</h3>
              <p className='text-white/90'>
                We implement v2 runbooks in 4–6 weeks with audits and training.
              </p>
            </div>
            <Link
              href='/contact'
              className='bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2'
            >
              Engage <RefreshCw />
            </Link>
          </div>
        </div>
      </section>
    </main>)
}