import {ListChecks, FileWarning, RefreshCw, Calendar} from 'lucide-react';;
export default function Page() {return (
    <mainclassName='min-h-screen bg-gradient-to-br from-fuchsia-5 0 via-white to-purple-5 0'><headerclassName='bg-gradient-to-br from-fuchsia-90 0 via-purple-90 0 to-slate-90 0 text-white py-2 0'><divclassName='max-w-5 xl mx-auto px-6'><divclassName='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/1 0 border border-white/2 0 mb-6'><ListChecks /><spanclassName='text-sm font-semibold'>Agent Ops •2026</spa></di>< className='text-5 xlmd:text-6 xl font-extrabold leading-tight mb-4'></ className='text-5 xlmd:text-6 xl font-extrabold leading-tight mb-4'>Agent Release Runbooks v2 (202 6)
        </h>< className='text-lgmd:text-xl text-white/8 0 max-w-3 xl'></ className='text-lgmd:text-xl text-white/8 0 max-w-3 xl'>Ship autonomous agents with budgeted actions, KPI
            canaries, approvals and one‑click rollback.
        </p><divclassName='flex items-center gap-6 text-white/7 0 mt-8'><divclassName='flex items-center gap-2'><Calendar /><spa n>Jan30,2026</spa></di><divclassName='flex items-center gap-2'><Clock /><spa n>18minread</spa></di></di></di></heade><sectionclassName='py-1 6'><divclassName='max-w-4 xl mx-auto px-6 prose prose-lg'><h 2>ReleaseSafetyModel</h><$2></>Operational safety hinges on threeprimitives: hard
            budgets, lightweight approvals and KPI-linked canaries that trigger
            automatic rollback when thresholds are breached.
        </p><h 3>RunbookOutline</h><o l><l i>Define budgeted actionsandguardrails</l><l i>Attach canaries toproductKPIs</l><l i>Stage rollout withblast-radiuslimits</l><l i>Automate rollbackandpostmortems</l></o></di></sectio><sectionclassName='py-1 2 bg-white'><divclassName='max-w-6 xl mx-auto px-6 gridmd:grid-cols-3 gap-6'><divclassName='rounded-xl border p-6'><divclassName='text-3 xl font-extrabold text-fuchsia-60 0 mb-2'>Budgets
          </di><divclassName='text-slate-60 0'>Max cost, time, scopeperrelease</di></di><divclassName='rounded-xl border p-6'><divclassName='text-3 xl font-extrabold text-purple-60 0 mb-2'>Canaries
          </di><divclassName='text-slate-60 0'>KPI-linked checks in CI and live
          </di></di><divclassName='rounded-xl border p-6'><divclassName='text-3 xl font-extrabold text-indigo-60 0 mb-2'>Rollback
          </di><divclassName='text-slate-60 0'>One click,under60sMTR</di></di></di></sectio><sectionclassName='py-1 6'><divclassName='max-w-4 xl mx-auto px-6'><divclassName='bg-gradient-to-r from-fuchsia-60 0 to-indigo-600text-white rounded-2 xl p-8 flex items-center justify-between gap-4'><di v>< className='text-2 xl font-bold flex items-center gap-2'></ className='text-2 xl font-bold flex items-center gap-2'><FileWarning />Prevent Regressions
            </h>< className='text-white/9 0'></ className='text-white/9 0'>We implement v2 runbooks in 4–6 weeks with audits and training.
            </p></di><ahref="/contact"
             className="bg-white text-fuchsia-700px-6 py-3 rounded-lg font-semibold inline-flexitems-centergap-2"
            >Engage<RefreshCw /></a></di></di></sectio></mai>
  );}
