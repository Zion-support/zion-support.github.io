import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {_GrantApplication, _GrantCategory, _GrantStatus} from '../../types/grants';

const categories: GrantCategory[] = ['Ecosystem Tools', 'Talent Development', 'Regional Expansion', 'Research Grants'];
const statuses: GrantStatus[] = ['Draft', 'Submitted', 'Under Review', 'Approved', 'Rejected'];

export default function GrantsPage() {_const [items, _setItems] = useState<GrantApplication[]>([]);
  const [filters, _setFilters] = useState<{ sector?: string; status?: string; region?: string; program?: string}>({});

  useEffect__(() => {_const _params = new URLSearchParams();
    if (filters.sector) params.set('sector', _filters.sector);
    if (filters.status) params.set('status', _filters.status);
    if (filters.region) params.set('region', _filters.region);
    if (filters.program) params.set('program', _filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then(_(r) => r.json())
      .then(_(d) => setItems(d.items || []))
      .catch__(() => setItems([]));
  }, [filters]);

  return (_<EnhancedLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2">
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <select className="border rounded p-2" value={_filters.sector || ''} onChange={_(e) => setFilters(_(f) => ({ ...f, _sector: e.target.value || undefined}))}>
          <option value="">All Sectors</option>
          {_categories.map(_(c) => (
            <option key={c} value={_c}>{_c}</option>
          ))}
        </select>
        <select className="border rounded p-2" value={_filters.status || ''} onChange={_(_e) => setFilters(_(f) => ({ ...f, _status: e.target.value || undefined}))}>
          <option value="">All Stages</option>
          {_statuses.map(_(s) => (
            <option key={s} value={_s}>{_s}</option>
          ))}
        </select>
        <input className="border rounded p-2" placeholder="Region" value={_filters.region || ''} onChange={_(_e) => setFilters(_(f) => ({ ...f, _region: e.target.value || undefined}))} />
        <select className="border rounded p-2" value={_filters.program || ''} onChange={_(_e) => setFilters(_(f) => ({ ...f, _program: e.target.value || undefined}))}>
          <option value="">All Programs</option>
          <option value="grant">Grant</option>
          <option value="incubator">Incubator</option>
        </select>
      </div>

      <div className="grid gap-4">
        {_items.map(_(g) => (
          <div key={g.id} className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium"><Link href={_`/grants/${g.id}`}><a>{_g.projectName}</a></Link></h3>
                <div className="text-xs text-gray-600 dark:text-gray-400">{_g.sector || 'General'} • {_g.region || 'Global'} • {_g.program === 'incubator' ? 'Incubator' : 'Grant'}</div>
              </div>
              <div className="flex gap-2 items-center">
                {_g.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span>}
                {_g.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
                <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800">{_g.status}</span>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{_g.proposalSummary}</p>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Budget: {_g.budgetAmount} {_g.budgetCurrency}</div>
          </div>
        ))}
        {_items.length === 0 && <div className="text-sm text-gray-600">No grants found.</div>}
      </div>
    </EnhancedLayout>
  );
}