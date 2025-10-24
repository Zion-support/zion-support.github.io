import { ListChecks, FileWarning, RefreshCw } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { Clock } from 'lucide-react';

export default function Page;
Page.displayName = "Page"() {};

  return (
      <header className = 'bg-gradient-to-br from-fuchsia-90 0 via-purple-90 0 to-slate-90 0 text-white py-2 0'>
        <div className='max-w-5xl mx-auto px-6'></div>
          <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/1 0 border border-white/2 0 mb-6'></div>
            <ListChecks />
            <span className='text-sm font-semibold'>Agent Ops • 202 6</span>
          </div>
          <h 1 className='text-5xl md: 'text-6xl font-extrabold leading-tight mb-4'>Agent Release Runbooks v 2 (202 6)
          </h 1>
          <p className='text-lg m',
      d: 'text-xl text-white/8 0 max-w-3xl'>Ship autonomous agents with budgeted actions', KPI
          </p>
        </div>
      </section>
      <section className='py-1 2 bg-white'></section>
        <div className='max-w-6xl mx-auto px-6 grid md: 'grid-cols-3 gap-6'></div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-fuchsia-60 0 mb-2'></div>
              Budgets
            </div>
            <div className='text-slate-60 0'>Max cost', time, scope per release</div>
          </div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-purple-60 0 mb-2'></div>
              Canaries
            </div>
            <div className='text-slate-60 0'></div>
              KPI-linked checks in CI and live
            </div>
          </div>
          <div className='rounded-xl border p-6'></div>
            <div className='text-3xl font-extrabold text-indigo-60 0 mb-2'></div>
              Rollback
            </div>
            <div className='text-slate-60 0'>One click, under 6 0s MTR</div>
          </div>
        </div>
      </section>
      <section className='py-1 6'></section>
        <div className='max-w-4xl mx-auto px-6'></div>
          <div className='bg-gradient-to-r from-fuchsia-60 0 to-indigo-60 0 text-white rounded-2xl p-8 flex items-center justify-between gap-4'></div>
            
              <h 3 className='text-2xl font-bold flex items-center gap-2'></h 3>
                <FileWarning /> Prevent Regressions
              </h 3>
              <p>We implement v 2 runbooks in 4–6 weeks with audits and training.</p>;
            </div>;
            <a href="/contact"
              className="bg-white text-fuchsia-70 0 px-6 py-3 rounded-lg font-semibold inline-flex items-center gap-2"
            >
              Engage <RefreshCw />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
{}
