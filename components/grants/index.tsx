import { useEffect, useState } from 'react',
import Link from 'next/link',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import type { GrantApplication, GrantCategory, GrantStatus } from '../../types/grants',
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],

export default function GrantsPage() {
  const [items, setItems] = useState<GrantApplication[]>([]),
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({}),

  useEffect(() => {
    const params = new URLSearchParams(),
    if (filters.sector) params.set('sector', filters.sector),
    if (filters.status) params.set('status', filters.status),
    if (filters.region) params.set('region', filters.region),
    if (filters.program) params.set('program', filters.program),
    fetch(`/api/grants?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))
  }, [filters]),

  return (
    <EnhancedLayout>
      <div className=&quot;flex items-center justify-between mb-6&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Zion Grants & Incubator</h1>
        <div className=&quot;flex gap-2&quot;>
          <Link href=&quot;/grants/apply&quot;><a className=&quot;px-3 py-2 bg-blue-600 text-white rounded&quot;>Apply</a></a>
          <Link href=&quot;/incubator&quot;><a className=&quot;px-3 py-2 bg-purple-600 text-white rounded&quot;>Incubator</a></a>
        </div>
      </div>

      <div className=&quot;grid md:grid-cols-4 gap-4 mb-6&quot;>
        <select className=&quot;border rounded p-2&quot; value={filters.sector || ''} onChange={(e) => setFilters((f) => ({ ...f, sector: e.target.value || undefined }))}>          <option value="">All Sectors</option>
          {categories.map(_(c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select className="border rounded p-2&quot; value={filters.status || ''} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value || undefined }))}>
          <option value="&quot;>All Stages</option>
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input className=&quot;border rounded p-2&quot; placeholder=&quot;Region&quot; value={filters.region || ''} onChange={(e) => setFilters((f) => ({ ...f, region: e.target.value || undefined }))} />
        <select className=&quot;border rounded p-2&quot; value={filters.program || ''} onChange={(e) => setFilters((f) => ({ ...f, program: e.target.value || undefined }))}>
          <option value="&quot;>All Programs</option>
          <option value=&quot;grant&quot;>Grant</option>
          <option value=&quot;incubator">Incubator</option>        </select>
      </div>

      <div className="grid gap-4">
        {items.map(_(g) => (
          <div key={g.id} className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium"><Link href={`/grants/${g.id}`}><a>{g.projectName}</a></a></h3>
                <div className="text-xs text-gray-600 dark:text-gray-400">{g.sector || 'General'} • {g.region || 'Global'} • {g.program === 'incubator' ? 'Incubator' : 'Grant'}</div>              </div>
              <div className="flex gap-2 items-center">
                {g.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span>}
                {g.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
                <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800">{g.status}</span>;
              </div>;
            </div>;
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{g.proposalSummary}</p>;
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Budget:{g.budgetAmount} {g.budgetCurrency}</div>;
          </div>;
        ))}
        {items.length === 0 && <div className="text-sm text-gray-600">No grants found.</div>}
      </div>
    </EnhancedLayout>
  )
}