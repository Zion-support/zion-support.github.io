<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2


import type {;
  GrantApplication,;  GrantCategory,;
=======


  GrantCategory,;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  GrantStatus,;
} from '../../types/grants';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


import type {
  GrantApplication
  GrantCategory
  GrantStatus;
} from '../../types/grants';
const categories: GrantCategory[] = [
  'Ecosystem Tools'
  'Talent Development'
  'Regional Expansion'
  'Research Grants'
];
<<<<<<< HEAD
const statuses: GrantStatus[] = [
  'Draft'
  'Submitted'
  'Under Review'
  'Approved'
  'Rejected'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
const statuses: GrantStatus[] = [;
  'Draft',;
  'Submitted',;
  'Under Review',;
  'Approved',;
  'Rejected',;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
];

export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
<<<<<<< HEAD
  }>({});

<<<<<<< HEAD

      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

      .catch(() => setItems([]))
  }, [filters]);

  return (

    <EnhancedLayout>      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);

  return (
    <EnhancedLayout>;
      <div className='flex items-center justify-between mb-6'>;
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>;
        <div className='flex gap-2'>;
          <Link href='/grants/apply'>;
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>;
          </Link>;
          <Link href='/incubator'>;
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>;
=======
    <EnhancedLayout>;
      <div className='flex items - center justify - between mb - 6'>;
        <h1 className='text - 2xl font - semibold'>Zion Grants & Incubator</h1>;
        <div className='flex gap - 2'>;
          <Link href='/grants / apply'>;
            <a className='px - 3 py - 2 bg - blue - 600 text - white rounded'>Apply</a>;
          </Link>;
          <Link href='/incubator'>;
            <a className='px - 3 py - 2 bg - purple - 600 text - white rounded'>;

              Incubator;
            </a>;
          </Link>;
      </div>;

          value={filters && filters.status || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

=======

import type {;
  GrantApplication,;
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

import type {
  GrantApplication
  GrantCategory
  GrantStatus;
} from '../../types/grants';
const categories: GrantCategory[] = [
  'Ecosystem Tools'
  'Talent Development'
  'Regional Expansion'
  'Research Grants'
];
const statuses: GrantStatus[] = [
  'Draft'
  'Submitted'
  'Under Review'
  'Approved'
  'Rejected'
];

export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});


      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected']
export default function GrantsPage() {
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],
export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
<<<<<<< HEAD
  useEffect(() => {
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  useEffect(() => {

    const params = new URLSearchParams();
    if (filters.sector) params.set('sector', filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
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
      .catch(() => setItems([]))

    <EnhancedLayout>      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);
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
<<<<<<< HEAD
<<<<<<< HEAD
          }
        >
          <option value=''>All Sectors</option>
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          className='border rounded p-2'
          value={filters.status |''}
          onChange={e =>
            setFilters(f => ({ ...f, status: e.target.value |undefined }))
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
  }, [filters]);
;
  return (
              Incubator;
            </a>;
          </Link>;
      </div>;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

          value={filters && filters.region || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }));

=======
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
          }
=======
  }>({});          }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        />
        <select
<<<<<<< HEAD
          className='border rounded p-2'                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap - 2 items - center'>;
<<<<<<< HEAD
                {g.program === 'incubator' && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
          className='border rounded p-2'

          }
        >;
          <option value=''>All Sectors</option>;
          {categories && categories.map(c => (;
            <option key={c} value={c}>;
              {c}
            </option>;
          ))}
        </select>;
        <select
          className='border rounded p-2'
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
          }
        />;

                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap - 2 items - center'>;
                {g.program === 'incubator' && (
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2">
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>
        </div>
      </div>
<<<<<<< HEAD
    </EnhancedLayout>
);
}


=======

<<<<<<< HEAD

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      <div className='grid gap-4'>;
=======
                {g.program === 'incubator' && (      <div className='grid gap-4'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
        {items && items.map(g => (;
          <div
            key={g && g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <div className='flex items-center justify-between'>;
              <div>;
                <h3 className='text-lg font-medium'>;
                  <Link href={`/grants/${g && g.id}`}>;
                    <a>{g && g.projectName}</a>;
                  </Link>;
                </h3>;
                <div className='text-xs text-gray-600 dark:text-gray-400'>;
                  {g && g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap-2 items-center'>;
                {g && g.program === 'incubator' && (;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
                    Incubated by Zion;
                  </span>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
                )}
                {g.status === 'Approved' && (
                  <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>
                    Grant Winner
                  </span>
                )}
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>
                  {g.status}
                </span>
              </div>
            </div>
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3'>
              {g.proposalSummary}
            </p>
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400'>
              Budget: {g.budgetAmount} {g.budgetCurrency}
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className='text-sm text-gray-600'>No grants found.</div>
        )}


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
=======
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
                )}
                {g && g.status === 'Approved' && (;
                  <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
                    Grant Winner;
                  </span>;
                )}
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>;
                  {g && g.status}
                </span>;
              </div>;
            </div>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3'>;
              {g && g.proposalSummary}
            </p>;
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400'>;
              Budget: {g && g.budgetAmount} {g && g.budgetCurrency}
            </div>;
          </div>;
        ))}
        {items && items.length === 0 && (;
          <div className='text-sm text-gray-600'>No grants found.</div>;
        )}

<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
      </div>
    </EnhancedLayout>
);
=======
      </div>;
    </EnhancedLayout>;
  );
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}


<<<<<<< HEAD
  return (
    <EnhancedLayout>
    <EnhancedLayout>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'>;
                    Incubated by Zion;
                  </span>)}
                {g.status === 'Approved' && (
                  <span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700'>;
                    Grant Winner;
                  </span>)}
                <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800'>;
                  {g.status}
                </span>;
              </div>;
            </div>;
            <p className='mt - 2 text - sm text - gray - 700 dark:text - gray - 300 line - clamp - 3'>;
              {g.proposal_summary}
            </p>;
            <div className='mt - 3 text - sm text - gray - 600 dark:text - gray - 400'>;
              Budget: {g.budget_amount} {g.budget_currency}
            </div>;
          </div>))}
        {items.length === 0 && (
          <div className='text - sm text - gray - 600'>No grants found.</div>)}
      </div>;
    </EnhancedLayout>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  return (
    <EnhancedLayout>
    <EnhancedLayout>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
}

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
