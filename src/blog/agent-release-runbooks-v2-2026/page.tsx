import { ListChecks, FileWarning, RefreshCw } from 'lucide-react'
import { Calendar } from 'lucide-react'
import { Clock } from 'lucide-react'

export default function Page
Page.displayName = "Page"() {
  return (
    <main className='min-h-screen bg-gradient-to-br from-fuchsia-50 via-white to-purple-50'>
      <header className='bg-gradient-to-br from-fuchsia-900 via-purple-900 to-slate-900 text-white py-20'>
        <div className='max-w-5xl mx-auto px-6'></div>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6'></div>
            <ListChecks />
            <span className='text-sm font-semibold'>Agent Ops • 2026</span>
          </div>
          <h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-4'>
            Agent Release Runbooks v2 (2026)
          </h1>
          <p className='text-lg md:text-xl text-white/80 max-w-3xl'>
            Ship autonomous agents with budgeted actions, KPI
import {ListChecks, FileWarning, RefreshCw, Calendar} from 'lucide-react';;
export default function Page
Page.displayName = "Page"() {return (
    <mainclassName='min-h-screen bg-gradient-to-br from-fuchsia-5 0 via-white to-purple-5 0'><headerclassName='bg-gradient-to-br from-fuchsia-90 0 via-purple-90 0 to-slate-90 0 text-white py-2 0'><divclassName='max-w-5 xl mx-auto px-6'><divclassName='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/1 0 border border-white/2 0 mb-6'><ListChecks /><spanclassName='text-sm font-semibold'>Agent Ops •2026</spa></di>< className='text-5 xlmd:text-6 xl font-extrabold leading-tight mb-4'></ className='text-5 xlmd:text-6 xl font-extrabold leading-tight mb-4'>Agent Release Runbooks v2 (202 6)
        </h>< className='text-lgmd:text-xl text-white/8 0 max-w-3 xl'></ className='text-lgmd:text-xl text-white/8 0 max-w-3 xl'>Ship autonomous agents with budgeted actions, KPI
            canaries, approvals and one‑click rollback.
        </p><divclassName='flex items-center gap-6 text-white/7 0 mt-8'><divclassName='flex items-center gap-2'><Calendar /><spa n>Jan30,2026</spa></di><divclassName='flex items-center gap-2'><Clock /><spa n>18minread</spa></di></di></di></heade><sectionclassName='py-1 6'><divclassName='max-w-4 xl mx-auto px-6 prose prose-lg'><h 2>ReleaseSafetyModel</h><$2></>Operational safety hinges on threeprimitives: hard;
            budgets, lightweight approvals and KPI-linked canaries that trigger;
            automatic rollback when thresholds are breached.
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
          </p>
        </div>
      </section>
      <section className='py-12 bg-white'></section>
        <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6'></div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-fuchsia-600 mb-2'></div>
              Budgets
            </div>
            <div className='text-slate-600'>Max cost, time, scope per release</div>
          </div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-purple-600 mb-2'></div>
              Canaries
            </div>
            <div className='text-slate-600'></div>
              KPI-linked checks in CI and live
            </div>
          </div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-indigo-600 mb-2'></div>
              Rollback
            </div>
            <div className='text-slate-600'>One click, under 60s MTR</div>
          </div>
        </div>
      </section>
      <section className='py-16'></section>
        <div className='max-w-4xl mx-auto px-6'></div>
          <div className='bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white rounded-2xl p-8 flex items-center justify-between gap-4'></div>
            <div></div>
              <h3 className='text-2xl font-bold flex items-center gap-2'></h3>
                <FileWarning /> Prevent Regressions</h3>
              <p className='text-white/90'>
                We implement v2 runbooks in 4–6 weeks with audits and training.
              </p>
            </div>
            <a href="/contact"
              className="bg-white text-fuchsia-700 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Engage <RefreshCw />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
