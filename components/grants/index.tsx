import { useEffect, useState  } from 'react';
import Link from 'next/link',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type {
  GrantApplication,
  GrantCategory,;
  GrantStatus,;
} from '../../types/grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants',;
];
const statuses: GrantStatus[] = [;
  'Draft',;
  'Submitted',;
  'Under Review',;
  'Approved',;
  'Rejected',;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
];

export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{;
=======
import {useEffect, useState} from 'react';
import Link from 'next / link';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type {
  GrantApplication,
  GrantCategory,
  GrantStatus,
} from '../../types / grants';
;
const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  'Talent Development',
  'Regional Expansion',
  'Research Grants',
];
const statuses: GrantStatus[] = [;
  'Draft',
  'Submitted',
  'Under Review',
  'Approved',
  'Rejected',
];
;
export default /**
 * GrantsPage - Function description
 */
function GrantsPage() {
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [filters, set_filters] = useState<{
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected']
export default function GrantsPage() {
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],
export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
  useEffect(() => {


      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

      .catch(() => setItems([]))
=======
export default /**
 * GrantsPage - Function description
 */
function GrantsPage() {
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
;
  useEffect (() => {
    const params = new URLSearchParams ();
    if (params.set ('sector', filters.sector)) {
  $2
}
    if (params.set ('status', filters.status)) {
  $2
}
    if (params.set ('region', filters.region)) {
  $2
}
    if (params.set ('program', filters.program)) {
  $2
}
    fetch (`/api / grants?${params.to_string ()}`);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
      .catch (() => set_items ([]));  }, [filters]);
;
  return (
    <EnhancedLayout>      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  }, [filters]);
;
  return (

    <EnhancedLayout>      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);

  return (
    <EnhancedLayout>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>
        <div className='flex gap-2'>
          <Link href='/grants/apply'>
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>
          </Link>
          <Link href='/incubator'>
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>
              Incubator
            </a>
          </Link>
      </div>
      <div className='grid md:grid-cols-4 gap-4 mb-6'>
        <select
          className='border rounded p-2'
          value={filters.sector |''}
          onChange={e =>
            setFilters(f => ({ ...f, sector: e.target.value |undefined }))
          }
        >;
          <option value=''>All Stages</option>;
          {statuses && statuses.map(s => (;
            <option key={s} value={s}>;
              {s}
            </option>;
          ))}
        </select>;
        <input
          className='border rounded p-2'
          placeholder='Region'

          value={filters && filters.region || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }));

          }
        />;
        <select
          className='border rounded p-2'

      <div className='grid md:grid - cols - 4 gap - 4 mb - 6'>;
        <select;
          className='border rounded p - 2';
          value={filters.sector || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined }));
          }
        >;
          <option value=''>All Sectors</option>;
          {categories.map (c => (
            <option key={c} value={c}>;
              {c}
            </option>))}
        </select>;
        <select;
          className='border rounded p - 2';
          value={filters.status || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, status: e.target.value || undefined }));
          }
        >;
          <option value=''>All Stages</option>;
          {statuses.map (string => (
            <option key={s} value={s}>;
              {s}
            </option>))}
        </select>;
        <input;
          className='border rounded p - 2';
          placeholder='Region';
          value={filters.region || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, region: e.target.value || undefined }));
          }
        />;
        <select;
          className='border rounded p - 2';
          value={filters.program || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, program: e.target.value || undefined }));
          }
        >;
          <option value=''>All Programs</option>;
          <option value='grant'>Grant</option>;
          <option value='incubator'>Incubator</option>;
        </select>;
      </div>;
      <div className='grid gap - 4'>;
        {items.map (g => (
          <div;
            key={g.id}
            className='border rounded p - 4 bg - white / 70 dark:bg - black / 40';
          >;
            <div className='flex items - center justify - between'>;
              <div>;
                <h3 className='text - lg font - medium'>;
                  <Link href={`/grants/${g.id}`}>;
                    <a>{g.project_name}</a>;
                  </Link>;
                </h3>;
                <div className='text - xs text - gray - 600 dark:text - gray - 400'>;
                  {g.sector || 'General'} • {g.region || 'Global'} •{' '}

                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap - 2 items - center'>;
                {g.program === 'incubator' && (

          value={filters && filters.program || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, program: e && e.target.value || undefined }));
          }
        >;
          <option value=''>All Programs</option>;
          <option value='grant'>Grant</option>;
          <option value='incubator'>Incubator</option>;
        </select>;
      </div>;
=======
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2">
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>
        </div>
      </div>
    </EnhancedLayout>
);
}


  return (
    <EnhancedLayout>
    <EnhancedLayout>
