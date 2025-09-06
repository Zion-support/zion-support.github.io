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
];

export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{
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

  useEffect(() => {

    const params = new URLSearchParams();
    if (filters.sector) params.set('sector', filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then(r => r.json())
      .then(d => setItems(d.items |[]))
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;
export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

  useEffect(() => {;
    const params = new URLSearchParams();
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);
    if (filters && filters.status) params && params.set('status', filters && filters.status);
    if (filters && filters.region) params && params.set('region', filters && filters.region);
    if (filters && filters.program) params && params.set('program', filters && filters.program);
    fetch(`/api/grants?${params && params.toString()}`);
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
      .catch(() => setItems([]));  }, [filters]);
  return (
    <EnhancedLayout>      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))
  }, [filters]);

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
        >
          <option value=''>All Stages</option>
          {statuses.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          className='border rounded p-2'
          placeholder='Region'

          value={filters && filters.region || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }));

          }
        />
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
                </div>
              </div>
              <div className='flex gap-2 items-center'>
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


