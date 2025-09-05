import React, {_useEffect, _useState} from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

type ProposalListItem = {_id: string;
  title: string;
  targetInstitution: string;
  regionalScope: string;
  type: string;
  status: 'Draft' | 'Submitted' | 'Under Review' | 'Accepted';
  createdAt: string;};

export default function InternationalProposalsPage() {_const [items, _setItems] = useState<ProposalListItem[]>([]);
  const [filter, _setFilter] = useState('All');

  useEffect__(() => {
    fetch('/api/proposals')
      .then(_(r) => r.json())
      .then(_(d) => setItems(d.items || []))
      .catch__(() => setItems([]));}, []);

  const _filtered = items.filter(_(i) => (filter === 'All' ? true : i.regionalScope === filter));

  return (_<EnhancedLayout>
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold">International Proposals</h1>
        <div className="flex items-center gap-2 text-sm">
          <span>Filter by region:</span>
          <select className="border rounded px-2 py-1" value={_filter} onChange={_(e) => setFilter(e.target.value)}>
            <option>All</option>
            <option>Global</option>
            <option>Africa</option>
            <option>LATAM</option>
            <option>APAC</option>
            <option>EU</option>
          </select>
        </div>
        <div className="divide-y border rounded">
          {_filtered.map(_(i) => (
            <div key={i.id} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="font-medium">{_i.title}</div>
                <div className="text-sm text-gray-600">{_i.targetInstitution} • {_i.type} • {_i.regionalScope}</div>
                <div className="text-xs text-gray-500">Created {_new Date(i.createdAt).toLocaleString()}</div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800">{_i.status}</span>
                <a className="text-blue-600 underline" href={_`/api/proposals?id=${i.id}`} target="_blank" rel="noreferrer">JSON</a>
                <a className="text-blue-600 underline" href={_`/proposals/${i.id}.md`} target="_blank" rel="noreferrer">Markdown</a>
                <a className="text-blue-600 underline" href={_`/proposals/${i.id}.pdf`} target="_blank" rel="noreferrer">PDF</a>
              </div>
            </div>
          ))}
          {_filtered.length === 0 && <div className="p-4 text-sm text-gray-600">No proposals yet.</div>}
        </div>
        <div className="text-sm text-gray-600">Community commentary per region coming next. For now, proposals expose a comments API endpoint.</div>
      </div>
    </EnhancedLayout>
  );
}