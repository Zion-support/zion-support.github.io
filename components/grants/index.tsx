<<<<<<< HEAD
=======
<<<<<<< HEAD
import type {;
  GrantApplication,;
pr-12243
  GrantCategory,;
  GrantStatus,;
} from '../../types/grants';

const categories: GrantCategory[] = [;'
  'Ecosystem Tools',;'
  'Talent Development',;'
  'Regional Expansion',;'
  'Research Grants',;
];
const statuses: GrantStatus[] = [;'
  'Draft',;'
  'Submitted',;'
  'Under Review',;'
  'Approved',;'
  'Rejected',;
];
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD


import type {;
  GrantApplication,;
  GrantCategory,;}
  GrantStatus,;}
} from '../../types/grants';

;
import type {GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'];

const statuses: GrantStatus[] = [;
  'Draft','Submitted','Under Review','Approved','Rejected'];

export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[] />([])sector?: string;
=======
<<<<<<< HEAD
<<<<<<< HEAD
import type {
  GrantApplication,
pr-12243
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
>>>>>>> merged-prs-20250907-203621
    status?: string;
    region?: string;}
    program?: string;}
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout />      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout />;
  }>({});
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621

      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants']
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected']
export default function GrantsPage() {
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],
export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
  useEffect(() => {

    const params = new URLSearchParams();
    if (filters.sector) params.set('sector', filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then(r => r.json())
      .then(d => setItems(d.items |[]))
      .catch(() => setItems([]));  }, [filters]);
  return (
<<<<<<< HEAD

    <EnhancedLayout />      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
=======
    <EnhancedLayout>      .then((r) => r.json())
      .then((d) => setItems(d.items |[]))
      .catch(() => setItems([]))
>>>>>>> merged-prs-20250907-203621
  }, [filters]);

  return (
    <EnhancedLayout />;
      <div className='flex items-center justify-between mb-6' />;
        <h1 className='text-2xl font-semibold' />Zion Grants & Incubator</h1>;
        <div className='flex gap-2' />;
          <Link href='/grants/apply' />;
            <a className='px-3 py-2 bg-blue-600 text-white rounded' />Apply</a>;
          </Link>;
<<<<<<< HEAD
          <Link href='/incubator' />;
            <a className='px-3 py-2 bg-purple-600 text-white rounded' />;
    <EnhancedLayout />;
      <div className='flex items - center justify - between mb - 6' />;
        <h1 className='text - 2xl font - semibold' />Zion Grants & Incubator</h1>;
        <div className='flex gap - 2' />;
          <Link href='/grants / apply' />;
            <a className='px - 3 py - 2 bg - blue - 600 text - white rounded' />Apply</a>;
=======
          <Link href='/incubator'>;
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>;
    <EnhancedLayout>;
      <div className='flex items - center justify - between mb - 6'>;
        <h1 className='text - 2xl font - semibold'>Zion Grants & Incubator</h1>;
        <div className='flex gap - 2'>;
          <Link href='/grants / apply'>;
            <a className='px - 3 py - 2 bg - blue - 600 text - white rounded'>Apply</a>;
>>>>>>> merged-prs-20250907-203621
          </Link>;
          <Link href='/incubator' />;
            <a className='px - 3 py - 2 bg - purple - 600 text - white rounded' />;Incubator;
            </a>;
          </Link>;
      </div>;value={filters && filters.status || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, status: e && e.target.value || undefined}
}))GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'];

<<<<<<< HEAD
const statuses: GrantStatus[] = [;
  'Draft','Submitted','Under Review','Approved','Rejected',import { useEffect, useState   } from 'react';
import Link from 'next/link';,import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useEffect, useState } from 'react';
import Link from 'next/link';
  GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
import type { GrantApplication, GrantCategory, GrantStatus } from '../../types/grants';

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],

export default function GrantsPage() {
  const [items, setItems] = useState<GrantApplication[]>([]);
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

  useEffect(() => {
=======
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
=======


import type {;
  GrantApplication,;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  GrantCategory,;
  GrantStatus,;
} from '../../types/grants';

<<<<<<< HEAD
  GrantCategory,
  GrantStatus} from '../../types/grants;
=======


import type {;
  GrantApplication,;
  GrantCategory,;}
  GrantStatus,;}
} from '../../types/grants';

;
import type {GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  Talent Development','
  Regional Expansion,'
  'Research Grants];
const statuses: GrantStatus[] = [;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  'Draft','Submitted','Under Review','Approved','Rejected'];
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
  'Draft',
  Submitted','
  Under Review,'
  'Approved,
  'Rejected'];
=======
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
  const [filters, setFilters] = useState<{
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];

  Draft,'Submitted',Under Review,'Approved',Rejected];
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[] />([])sector?: string;
=======
  'Draft','Submitted','Under Review','Approved','Rejected'];

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]    />([])sector?: string;
>>>>>>> origin/chore/fix-lint-and-merge
    status?: string;
    region?: string;}
    program?: string;}
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout    />      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout    />;
  }>({});
<<<<<<< HEAD
=======

>>>>>>> origin/chore/fix-lint-and-merge

<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

      .catch(() => setItems([]))
  }, [filters]);

  return (

<<<<<<< HEAD
    <EnhancedLayout    />      .then((r) => r && r.json());
=======
<<<<<<< HEAD
    <EnhancedLayout>      .then((r) => r && r.json());
=======
    <EnhancedLayout    />      .then((r) => r && r.json());
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);

  return (
<<<<<<< HEAD
=======
<<<<<<< HEAD
    <EnhancedLayout>;
      <div className='flex items-center justify-between mb-6'>;
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>;
        <div className='flex gap-2'>;
          <Link href='/grants/apply'>;
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>;
          </Link>;
=======
>>>>>>> origin/resolved-merge-conflicts
    <EnhancedLayout    />;
      <div className='flex items-center justify-between mb-6'    />;
        <h1 className='text-2xl font-semibold'    />Zion Grants & Incubator</h1>;
        <div className='flex gap-2'    />;
          <Link href='/grants/apply'    />;
            <a className='px-3 py-2 bg-blue-600 text-white rounded'    />Apply</a>;
          </Link>;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          <Link href='/incubator'>;
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>;
pr-12243
    <EnhancedLayout>;
      <div className='flex items - center justify - between mb - 6'>;
        <h1 className=text - 2xl font - semibold>Zion Grants & Incubator</h1>;
        <div className='flex gap - 2'>;
          <Link href=/grants / apply>;
            <a className='px - 3 py - 2 bg - blue - 600 text - white rounded'>Apply</a>;
          </Link>;
          <Link href=/incubator>;
            <a className='px - 3 py - 2 bg - purple - 600 text - white rounded'>;

              Incubator;
=======
          <Link href='/incubator'    />;
            <a className='px-3 py-2 bg-purple-600 text-white rounded'    />;
    <EnhancedLayout    />;
      <div className='flex items - center justify - between mb - 6'    />;
        <h1 className='text - 2xl font - semibold'    />Zion Grants & Incubator</h1>;
        <div className='flex gap - 2'    />;
          <Link href='/grants / apply'    />;
            <a className='px - 3 py - 2 bg - blue - 600 text - white rounded'    />Apply</a>;
          </Link>;
          <Link href='/incubator'    />;
            <a className='px - 3 py - 2 bg - purple - 600 text - white rounded'    />;Incubator;
>>>>>>> origin/chore/fix-lint-and-merge
            </a>;
          </Link>;
      </div>;value={filters && filters.status || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, status: e && e.target.value || undefined}
}))GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';

<<<<<<< HEAD
<<<<<<< HEAD
          value={filters && filters.status || }
=======
<<<<<<< HEAD
          value={filters && filters.status || ''}
=======
<<<<<<< HEAD
          value={filters && filters.status || }
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          onChange={e =>;
            setFilters(f => ({ ...f, status: e && e.target.value || undefined }));





<<<<<<< HEAD
=======
<<<<<<< HEAD
const "statuses": GrantStatus[] = [;
  'Draft','Submitted','Under Review','Approved','Rejected'];'

export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])sector?: string;
    }
=======
>>>>>>> origin/resolved-merge-conflicts
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
  GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
import type { GrantApplication, GrantCategory, GrantStatus } from '../../types/grants';
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'];


  GrantApplication,


  GrantCategory,
  GrantStatus} from ../../types/grants;
import type {GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];
  Draft,'Submitted',Under Review,'Approved',Rejected];export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])sector?: string;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    status?: string;
    region?: string;
    program?: string;
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout>      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout>;
  }>({});




      .catch(() => setItems([]));  }, [filters]);
return (;

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

      .catch(() => setItems([]))
  }, [filters]);

return (;

    <EnhancedLayout>      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);

return (;
    <EnhancedLayout>;

            </a>;
          </Link>;
      </div>;value={filters && filters.status || ''}'
          onChange={e =>;


<<<<<<< HEAD
=======
<<<<<<< HEAD
const "statuses": GrantStatus[] = [;
  'Draft','Submitted','Under Review','Approved','Rejected',import { useEffect, useState   } from 'react';'
import Link from 'next/link',import EnhancedLayout from '../../components/layout/EnhancedLayout';'
import { useEffect, useState } from 'react';'
import Link from 'next/link';'
  GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';'
import type { GrantApplication, GrantCategory, GrantStatus } from '../../types/grants';'

const "categories": GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];'

const "statuses": GrantStatus[]  = ['DraftSubmittedUnder ReviewApprovedRejected'];GrantApplication;'
  GrantCategory;
  GrantStatus;
} from '../../types/grants';'

const "categories": GrantCategory[] = [;
  'Ecosystem Tools';'
  'Talent Development';'
  'Regional Expansion';'
  'Research Grants''
];


const "statuses": GrantStatus[] = [;
  'Draft';'
  'Submitted';'
  'Under Review';'
  'Approved';'
  'Rejected''
];


export default function GrantsPage() {export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])const [filters, setFilters] = useState<{sector?: string;
    }
    status?: string;
    region?: string;
    program?: string;
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || []))const "categories": GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];'

const "statuses": GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'];'

export default function GrantsPage() {const "categories": GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],const "statuses": GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({})useEffect(() => {'
}
const params = new URLSearchParams()if (filters.sector) params.set('sector', filters.sector)if (filters.status) params.set('status', filters.status)if (filters.region) params.set('region', filters.region)if (filters.program) params.set('program', filters.program)fetch(`/api/grants?${params.toString()}`)const "categories": GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],const "statuses": GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])const [filters, setFilters]  =;'  }
  useState<{ sector?: string, status?: string, region?: string, program?: string }>({};
  useEffect(() => ;
  const params = new URLSearchParams()if (filters && filters.sector) params && params.set('sector', filters && filters.sector)if (filters && filters.status) params && params.set('status', filters && filters.status)if (filters && filters.region) params && params.set('region', filters && filters.region)if (filters && filters.program) params && params.set('program', filters && filters.program)fetch(`/api/grants?${params && params.toString()}`).then(r => { return r && r.json()).then(d => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters]; }`  return (.catch(() => setItems([]))<EnhancedLayout>      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])<EnhancedLayout>;
      <div className='flex items-center justify-between mb-6'>;'
  useEffect(() => {
.then(r = > r.json()).then(d => { return setItems(d.items || [])).catch(() => setItems([]))}, [filters]; }
  return (<EnhancedLayout>;
<div className='flex items-center justify-between mb-6'>;'
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>;'
        <div className='flex gap-2'>;'
          <Link href='/grants/apply'>;'
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>;'
          </Link>;
          <Link href='/incubator'>;'
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
export default function GrantsPage() {
=======
const categories: GrantCategory[] = [;
  'Ecosystem Tools','Talent Development','Regional Expansion','Research Grants'];

const statuses: GrantStatus[] = [;
  'Draft','Submitted','Under Review','Approved','Rejected',import { useEffect, useState   } from 'react';
import Link from 'next/link';,import EnhancedLayout from '../../components/layout/EnhancedLayout';
import { useEffect, useState } from 'react';
import Link from 'next/link';
  GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
import type { GrantApplication, GrantCategory, GrantStatus } from '../../types/grants';

const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];

const statuses: GrantStatus[]  = ['DraftSubmittedUnder ReviewApprovedRejected'];GrantApplication;
  GrantCategory;
  GrantStatus;
} from '../../types/grants';

const categories: GrantCategory[] = [;
  'Ecosystem Tools';
  'Talent Development';
  'Regional Expansion';
  'Research Grants'
];


const statuses: GrantStatus[] = [;
  'Draft';
  'Submitted';
  'Under Review';
  'Approved';
  'Rejected'
];


export default function GrantsPage() {export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]    />([])const [filters, setFilters] = useState<{sector?: string;
    status?: string;
    region?: string;}
    program?: string;}
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || []))const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'];

const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'];

export default function GrantsPage() {const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]    />([])const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({})useEffect(() => {}
const params = new URLSearchParams()if (filters.sector) params.set('sector', filters.sector)if (filters.status) params.set('status', filters.status)if (filters.region) params.set('region', filters.region)if (filters.program) params.set('program', filters.program)fetch(`/api/grants?${params.toString()}`)const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]    />([])const [filters, setFilters]  =;}
  useState<{ sector?: string, status?: string, region?: string, program?: string }>({};
  useEffect(() => ;
  const params = new URLSearchParams()if (filters && filters.sector) params && params.set('sector', filters && filters.sector)if (filters && filters.status) params && params.set('status', filters && filters.status)if (filters && filters.region) params && params.set('region', filters && filters.region)if (filters && filters.program) params && params.set('program', filters && filters.program)fetch(`/api/grants?${params && params.toString()}`).then(r => r && r.json()).then(d => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters];
  return (.catch(() => setItems([]))<EnhancedLayout    />      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])<EnhancedLayout    />;
      <div className='flex items-center justify-between mb-6'    />;
  useEffect(() => {}
.then(r = > r.json()).then(d => setItems(d.items || [])).catch(() => setItems([]))}, [filters];
  return (<EnhancedLayout    />;
<div className='flex items-center justify-between mb-6'    />;
        <h1 className='text-2xl font-semibold'    />Zion Grants & Incubator</h1>;
        <div className='flex gap-2'    />;
          <Link href='/grants/apply'    />;
            <a className='px-3 py-2 bg-blue-600 text-white rounded'    />Apply</a>;
          </Link>;
          <Link href='/incubator'    />;
            <a className='px-3 py-2 bg-purple-600 text-white rounded'    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  useEffect(() => {


>>>>>>> merged-prs-20250907-203621
    const params = new URLSearchParams();
    if (filters.sector) params.set(sector, filters.sector);
    if (filters.status) params.set('status', filters.status);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],'
const statuses: GrantStatus[] = [DraftSubmittedUnder ReviewApprovedRejected],
export default function GrantsPage() { return null; }
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

<<<<<<< HEAD
=======
<<<<<<< HEAD
    }


    const params = new URLSearchParams();
    if (filters.sector) params.set('sector', filters.sector);'
    if (filters.status) params.set('status', filters.status);'
    if (filters.region) params.set('region', filters.region);'
    if (filters.program) params.set('program', filters.program);'
    fetch(`/api/grants?${params.toString()}`)`const "categories": GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;'

const "statuses": GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;'

export default function GrantsPage() {;

}

const [items, setItems] = useState<GrantApplication[]>([]);

const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

  useEffect(() => {
;

}

const params = new URLSearchParams();
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);'
    if (filters && filters.status) params && params.set('status', filters && filters.status);'
    if (filters && filters.region) params && params.set('region', filters && filters.region);'
    if (filters && filters.program) params && params.set('program', filters && filters.program);'
    fetch(`/api/grants?${params && params.toString()}`);`      .then(r => { return r && r.json()); }
      .then(d => { return setItems(d && d.items || [])); }
      .catch(() => setItems([]));  }, [filters]);
return (;
      .catch(() => setItems([]))

    <EnhancedLayout>      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);
  return (
    <EnhancedLayout>
      <div className = 'flex items-center justify-between mb-6'>'
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>'
        <div className='flex gap-2'>'
          <Link href='/grants/apply'>'
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>'
          </Link>
          <Link href='/incubator'>'
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>'
              Incubator
            </a>
          </Link>
      </div>
      <div className='grid "md": grid-cols-4 gap-4 mb-6'>'
        <select,
className='border rounded p-2''
          value={filters.sector |','
}
          onChange={e =>
            }
            setFilters(f => ({ ...f, "sector": e.target.value |undefined }))
=======
>>>>>>> origin/resolved-merge-conflicts
  useEffect(() => {;
    const params = new URLSearchParams();
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);
    if (filters && filters.status) params && params.set('status', filters && filters.status);
    if (filters && filters.region) params && params.set('region', filters && filters.region);
    if (filters && filters.program) params && params.set('program', filters && filters.program);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)'
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;'
const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;
export default function GrantsPage() { return null; }
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

const "statuses": GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;'
=======
    if (filters.region) params.set('region', filters.region);}
    if (filters.program) params.set('program', filters.program);}
    fetch(`/api/grants?${params.toString()}`)
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;

const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;
>>>>>>> origin/chore/fix-lint-and-merge

export default function GrantsPage() {;

const [items, setItems] = useState<GrantApplication[]    />([]);}
}
const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

  useEffect(() => {
;

const params = new URLSearchParams();
<<<<<<< HEAD
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);'
    if (filters && filters.status) params && params.set('status', filters && filters.status);'
    if (filters && filters.region) params && params.set('region', filters && filters.region);'
    if (filters && filters.program) params && params.set('program', filters && filters.program);`
=======
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);
    if (filters && filters.status) params && params.set('status', filters && filters.status);
    if (filters && filters.region) params && params.set('region', filters && filters.region);}
    if (filters && filters.program) params && params.set('program', filters && filters.program);}
>>>>>>> origin/chore/fix-lint-and-merge
    fetch(`/api/grants?${params && params.toString()}`);
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
      .catch(() => setItems([]));  }, [filters]);
  return (
<<<<<<< HEAD
  useEffect(() => {
    if (filters.sector) params.set('sector', filters.sector);
    if (filters.status) params.set(status, filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set(program, filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))


  useEffect(() => {
.then(r => r.json())
      .then(d => setItems(d.items || []))
      .catch(() => setItems([]));
>>>>>>> merged-prs-20250907-203621
  }, [filters]);

  return (
    <EnhancedLayout>
<<<<<<< HEAD
=======
  useEffect(() => {
.then(r => r.json())
      .then(d => setItems(d.items || []))
      .catch(() => setItems([]));
  }, [filters]);
  return (
origin/cursor/automate-test-improve-and-merge-code-2533
    <EnhancedLayout>
<div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>
        <div className='flex gap-2'>
          <Link href='/grants/apply'>
    <EnhancedLayout>'
      <div className='flex items-center justify-between mb-6'>'
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>'
        <div className='flex gap-2'>'
          <Link href='/grants/apply'>'
            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>
          </Link>'
          <Link href='/incubator'>'
            <a className='px-3 py-2 bg-purple-600 text-white rounded'>
              Incubator;
            </a>
          </Link>
      </div>'
      <div className='grid md:grid-cols-4 gap-4 mb-6'>
        <select'
          className='border rounded p-2''
          value={filters.sector |''}
          onChange={e =>
            setFilters(f => ({ ...f, sector: e.target.value |undefined }))
            <a className='px-3 py-2 bg-blue-600 text-white rounded>Apply</a>

=======
      .catch(() => setItems([]))

    <EnhancedLayout    />      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);
    <EnhancedLayout    />
      <div className = 'flex items-center justify-between mb-6'    />
        <h1 className='text-2xl font-semibold'    />Zion Grants & Incubator</h1>
        <div className='flex gap-2'    />
          <Link href='/grants/apply'    />
            <a className='px-3 py-2 bg-blue-600 text-white rounded'    />Apply</a>
          </Link>
          <Link href='/incubator'    />
            <a className='px-3 py-2 bg-purple-600 text-white rounded'    />
>>>>>>> origin/chore/fix-lint-and-merge
              Incubator;
            </a>
          </Link>
      </div>
<<<<<<< HEAD
      <div className='grid md:grid-cols-4 gap-4 mb-6'>
        <select
          className=border rounded p-2''
          value={filters.sector |}
          onChange={e =>
            setFilters(f => ({ ...f, sector: e.target.value |undefined }))

=======
      <div className='grid md: grid-cols-4 gap-4 mb-6'    />
        <select;
className='border rounded p-2'
          value={filters.sector |'}
}
          onChange={e =    />}
            setFilters(f => ({ ...f, sector: e.target.value |undefined }))
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          }
        >
          <option value=''    />All Sectors</option>
          {categories.map(c => (}
            <option key={c} value={c}    />
              {c}
            </option>
          ))}
        </select>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <select,
className='border rounded p-2''
          value={filters.status |','
}
          onChange={e =>
            }
            setFilters(f => ({ ...f, "status": e.target.value |undefined
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
        <select
          className='border rounded p-2'
          value={filters.status |''}
          onChange={e =>
            setFilters(f => ({ ...f, status: e.target.value |undefined }))
=======
>>>>>>> origin/chore/fix-lint-and-merge
        <select;
className='border rounded p-2'
          value={filters.status |'}
}
          onChange={e =    />}
            setFilters(f => ({ ...f, status: e.target.value |undefined}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}))
export default /**
 * GrantsPage - Function description;
 */
function GrantsPage() {
 ;
<<<<<<< HEAD
  }
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
=======
>>>>>>> origin/resolved-merge-conflicts
=======
  const [items, set_items] = useState < GrantApplication[]>([]);}
}
const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
  useEffect (() => {
    const params = new URLSearchParams ();
<<<<<<< HEAD

=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  useEffect (() => {
    const params = new URLSearchParams ();
<<<<<<< HEAD
    if (params.set ('sector', filters.sector)) {'
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  $2
=======
    if (params.set ('sector', filters.sector)) {}
  $2}
>>>>>>> origin/chore/fix-lint-and-merge
}
    if (params.set ('status', filters.status)) {}
  $2}
}
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
    if (params.set ('region', filters.region)) {'
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  $2
=======
    if (params.set ('region', filters.region)) {}
  $2}
>>>>>>> origin/chore/fix-lint-and-merge
}
    if (params.set ('program', filters.program)) {}
  $2}
}
    fetch (`/api / grants?${params.to_string ()}`);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
      .catch (() => set_items ([]));  }, [filters]);
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
;
return (;
=======
<<<<<<< HEAD

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
    <EnhancedLayout>      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
  }, [filters]);
<<<<<<< HEAD
=======
<<<<<<< HEAD
;
return (;
=======
>>>>>>> origin/resolved-merge-conflicts

=======
;
  return (
    <EnhancedLayout    />      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
  }, [filters]);
;
  return (
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              Incubator;
            </a>;
          </Link>;
      </div>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className='grid "md":grid-cols-4 gap-4 mb-6'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD


      <div className='grid md:grid-cols-4 gap-4 mb-6'>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <select;
          className='border rounded p-2';'
          value={filters.sector |''}'
          onChange={e =>;
            }
            setFilters(f => ({ ...f, 'sector': e.target.value |undefined })
}
        >;
          <option value=''>All Sectors</option>;'
          {categories.map(c => (<option key={c} value={c}>;
pr-12243
<<<<<<< HEAD
=======
<<<<<<< HEAD
          }
        >
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts


pr-12243
          }
<<<<<<< HEAD
=======
<<<<<<< HEAD
        >'
          <option value=''>All Stages</option>
=======
>>>>>>> origin/resolved-merge-conflicts
        >

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          }
<<<<<<< HEAD
        >'
          <option value=''>All Stages</option>
          <option value='>All Stages</option>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          {statuses.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input'
          className='border rounded p-2''
          placeholder='Region'
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))


          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined ;}))
pr-12243

<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          }
        />
        <select'
          className=border rounded p-2

      <div className='grid md:grid - cols - 4 gap - 4 mb - 6'>;
        <select;
          className=border rounded p - 2;
          value={filters.sector || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined }));
pr-12243
          }
        >;
          <option value='>All Sectors</option>;
          {categories && categories.map(c => (;
            <option key={c} value={c}>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined ;}));
pr-12243
          }
      <div className='grid md:grid-cols-4 gap-4 mb-6 />;
        <select;
          className=border rounded p-2';
          value={filters.sector |'}
          onChange={e = />;}
            setFilters(f => ({ ...f, sector: e.target.value |undefined ;})
}
        >;
          <option value=' />All Sectors</option>;
          {categories.map(c => (<option key={c} value={c} />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
      <div className='grid md:grid-cols-4 gap-4 mb-6'    />;
        <select;
          className='border rounded p-2';
          value={filters.sector |''}
          onChange={e =    />;}
            setFilters(f => ({ ...f, sector: e.target.value |undefined })
}
        >;
          <option value=''    />All Sectors</option>;
          {categories.map(c => (<option key={c} value={c}    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              {c}
            </option>;
          ))}
        </select>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <select'
          className='border rounded p-2'
          }
        >;'
          <option value=''>All Stages</option>;
          {statuses && statuses.map(s => (;
            <option key={s} value={s}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
          onChange={e =>;
            setFilters(f => ({ ...f, status: e.target.value |undefined }))export default /**;
=======
        <select;
          className='border rounded p-2';
          value={filters.status |''}
          onChange={e =    />;}
            setFilters(f => ({ ...f, status: e.target.value |undefined}
}))export default /**;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
 * GrantsPage - Function description;
 */;
function GrantsPage() {const [items, set_items] = useState < GrantApplication[]>([])const [filters, set_filters]  = useState<{ sector?: string, status?: string, region?: string, program?: string }>({})useEffect (() => {const params = new URLSearchParams ()if (params.set ('sector', filters.sector)) {$2;}
}
    if (params.set ('status', filters.status)) {$2;}
}
    if (params.set ('region', filters.region)) {$2;}
}
<<<<<<< HEAD
    if (params.set ('program', filters.program)) {$2;'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

 * GrantsPage - Function description;
 */;
}
    if (params.set ('status, filters.status)) {$2;
}
    if (params.set (region', filters.region)) {$2;
}
    if (params.set ('program, filters.program)) {$2;
=======
    if (params.set ('program', filters.program)) {$2;}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
}
    fetch (`/api / grants?${params.to_string ()}`).then (r = > r.json ()).then (d => set_items (d.items || [])).catch (() => set_items ([]))}, [filters])return (<EnhancedLayout    />      .then ((r) => r.json ()).then ((d) => set_items (d.items || [])).catch (() => set_items ([]))}, [filters];
  return (Incubator;
            </a>;
          </Link>;
<<<<<<< HEAD
      </div>;value={filters && filters.status || ''}
<<<<<<< HEAD
=======
<<<<<<< HEAD
      </div>;value={filters && filters.status || ''}'
=======
      </div>;value={filters && filters.status || ''}
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          onChange={e =>;
            }
            setFilters(f => ({ ...f, 'status': e && e.target.value || undefined })
}
        >;
          <option value=''>All Stages</option>;'
          {statuses.map(s => (<option key={s} value={s}>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          onChange={e =>;}
            setFilters(f => ({ ...f, status: e && e.target.value || undefined ;})
}
        >;
          <option value='' />All Stages</option>;
          {statuses.map(s => (<option key={s} value={s} />;
=======
=======
>>>>>>> origin/resolved-merge-conflicts
          onChange={e =>;}
            setFilters(f => ({ ...f, status: e && e.target.value || undefined })
}
        >;
          <option value=''    />All Stages</option>;
          {statuses.map(s => (<option key={s} value={s}    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
        >
          <option value=''>All Stages</option>
          {statuses.map(s => (
            <option key={s} value={s}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              {s}
            </option>
          ))}
<<<<<<< HEAD
        </select>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        <input'
          className='border rounded p-2''
          placeholder='Region'
          }
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
        />;
          onChange={e =>;
            }
            setFilters(f => ({ ...f, 'region': e && e.target.value || undefined }))value={filters.region |','
}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e.target.value |undefined }))}
=======
        <input;
          className='border rounded p-2';
          placeholder='Region';
          value={filters && filters.region || ''}
          onChange={e =    />;}
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }))value={filters.region |'}
}
          onChange={e =>;}
            setFilters(f => ({ ...f, region: e.target.value |undefined })
}
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        />;
        <select;
          className='border rounded p-2';
          }
<<<<<<< HEAD
        >
          <option value=''>All Stages</option>'
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts

        />;
        <select;
          className='border rounded p-2;



          }
        >
          <option value='>All Stages</option>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          {statuses.map(s => (
            <option key={s} value={s}>
=======
            />
          <option value=''    />All Stages</option>
          {statuses.map(s => (}
            <option key={s} value={s}    />
>>>>>>> origin/chore/fix-lint-and-merge
              {s}
            </option>
          ))}
        </select>
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <input,
className='border rounded p-2''
          placeholder='Region''

          value={filters && filters.region || ''}'
          onChange={e =>;
            }
            setFilters(f => ({ ...f, "region": e && e.target.value || undefined
}));

          }
        />
        <select,
className='border rounded p-2''

      <div className='grid "md":grid - cols - 4 gap - 4 mb - 6'>;'
        <select;
          className='border rounded p - 2';'
          value={filters.sector || ''}'
          on_change={e =>;
            }
            set_filters (function => ({ ...f, "sector": e.target.value || undefined })
}
            set_filters (function => ({ ...f, "sector": e.target.value || undefined
}));
          }
        >;
          <option value=''>All Sectors</option>;'
          {categories && categories.map(c => (<option key={c} value={c}>;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD


=======
        </select>
        <input
          className='border rounded p-2'
          placeholder='Region'
<<<<<<< HEAD
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

          value={filters && filters.region || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }));

<<<<<<< HEAD
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))




=======
        <input;
className='border rounded p-2'
          placeholder='Region'

          value={filters && filters.region || ''}
          onChange={e =    />;}
            setFilters(f => ({ ...f, region: e && e.target.value || undefined}
}));
>>>>>>> origin/chore/fix-lint-and-merge

          }
        />
        <select;
<<<<<<< HEAD
          className='border rounded p - 2';
          value={filters.sector || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined }))}
            set_filters (function => ({ ...f, sector: e.target.value || undefined }));



=======
className='border rounded p-2'

      <div className='grid md:grid - cols - 4 gap - 4 mb - 6'    />;
        <select;
          className='border rounded p - 2';
          value={filters.sector || ''}
          on_change={e =    />;}
            set_filters (function => ({ ...f, sector: e.target.value || undefined })
}
            set_filters (function => ({ ...f, sector: e.target.value || undefined}
}));
>>>>>>> origin/chore/fix-lint-and-merge
          }
        >;
          <option value=''    />All Sectors</option>;
          {categories && categories.map(c => (<option key={c} value={c}    />;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              {c}
            </option>;
          ))}
        </select>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <select;
          className='border rounded p-2';'
          }
        >;
          <option value=''>All Stages</option>;'
          {statuses && statuses.map(s => (<option key={s} value={s}>;
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD

=======
        <select;
          className='border rounded p-2';
          }
            />;
          <option value=''    />All Stages</option>;
          {statuses && statuses.map(s => (<option key={s} value={s}    />;
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
              {s}
            </option>;
          ))}
        </select>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <input;
          className='border rounded p-2';'
          placeholder='Region';'
          } />;<select;
          className='border rounded p-2';' />;
        <select;
          className='border rounded p - 2';'
          value={filters.program || ''}'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
        <input
          className='border rounded p-2'
          placeholder='Region'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          }
        />
        <select
          className='border rounded p-2'
<<<<<<< HEAD
        <select;
          className='border rounded p - 2';
          value={filters.program || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, program: e.target.value || undefined }))}
        >;
          <option value='>All Programs</option>;
          <option value='grant>Grant</option>;
          <option value=incubator'>Incubator</option>;
        </select>;
      </div>;
      <div className='grid gap - 4>;
        {items.map (g => (<div;
            key={g.id}
            className=border rounded p - 4 bg - white / 70 dark:bg - black / 40';
          >;
            <div className='flex items - center justify - between>;
              <div>;
                <h3 className=text - lg font - medium'>;
                  <Link href={`/grants/${g.id}`}>;
                    <a>{g.project_name}</a>;
                  </Link>;
                </h3>;
                <div className='text - xs text - gray - 600 dark:text - gray - 400>;
                  {g.sector || General'} • {g.region || 'Global} •{ '}value={filters.program |'}
                  {g.sector || General'} • {g.region || 'Global} •{ '}
=======
<<<<<<< HEAD
          value={filters.program |''}
          onChange={e =>
            setFilters(f => ({ ...f, program: e.target.value |undefined }))
          }
        >
          <option value=''>All Programs</option>
          <option value='grant'>Grant</option>
          <option value='incubator'>Incubator</option>
        </select>
      </div>
      <div className='grid gap-4'>
        {items.map(g => (
          <div
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-medium'>
                  <Link href={`/grants/${g.id}`}>
                    <a>{g.projectName}</a>
                  </Link>
                </h3>
                <div className='text-xs text-gray-600 dark:text-gray-400'>
                  {g.sector |'General'} • {g.region |'Global'} •{' '}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

        <select
          className='border rounded p-2'
          value={filters.program |''}
          onChange={e =>
            setFilters(f => ({ ...f, program: e.target.value |undefined }))
pr-12243
value={filters.program |''}
pr-12243
          value={filters.program |''}
          onChange={e =>
            setFilters(f => ({ ...f, program: e.target.value |undefined ;}))
          }
        >
          <option value=''>All Programs</option>
          <option value='grant'>Grant</option>
          <option value='incubator'>Incubator</option>
        </select>
      </div>
      <div className='grid gap-4'>
        {items.map(g => (
          <div
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'
          >
            <div className='flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-medium'>
          value={filters.program |'}
          onChange={e =>
            setFilters(f => ({ ...f, program: e.target.value |undefined ;}))
          }
        >
          <option value='>All Programs</option>
          <option value=grant'>Grant</option>
          <option value='incubator>Incubator</option>
        </select>
      </div>
      <div className=grid gap-4'>
        {items.map(g => (
          <div
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40
          >
            <div className=flex items-center justify-between'>
              <div>
                <h3 className='text-lg font-medium>
                  <Link href={`/grants/${g.id}`}>
                    <a>{g.projectName}</a>
                  </Link>
                </h3>
                <div className='text-xs text-gray-600 dark:text-gray-400'>
                  {g.sector |'General'} • {g.region |'Global'} •{' '}

        <select
          className='border rounded p-2'


        <select
          className='border rounded p-2'

        <select
          className='border rounded p-2'


        <select'
          className='border rounded p-2'
'
        <select;
          className='border rounded p - 2';
          value={filters.program || ''}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
          on_change={e =>;
            set_filters (function => ({ ...f, program: e.target.value || undefined }));
          }
        >;
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <option value=''>All Programs</option>;'
          <option value='grant'>Grant</option>;'
          <option value='incubator'>Incubator</option>;'
        </select>;
      </div>;
      <div className='grid gap - 4'>;'
        {items.map (g => { return (<div; }
            }
            key={g.id}
            className='border rounded p - 4 bg - white / 70 "dark":bg - black / 40'>'

            <div className='flex items - center justify - between'>;'
              <div>;
                <h3 className='text - lg font - medium'>;'
                  <Link href={`/grants/${g.id}`}>;`                    <a>{g.project_name}</a>;
                  </Link>;
                </h3>;
                <div className='text - xs text - gray - 600 "dark":text - gray - 400'>;'
                  {g.sector || 'General'} • {g.region || 'Global'} •{' '}value={filters.program |''}'
                  {g.sector || 'General'} • {g.region || 'Global'} •{' '}'

        <select,
className='border rounded p-2''
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}'
=======
>>>>>>> origin/resolved-merge-conflicts
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

<<<<<<< HEAD
        <select
          className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;'
              <div className='flex gap - 2 items - center'>;'
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>
              </div>
              <div className='flex gap-2 items-center'>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                {g.program === 'incubator' && (
<<<<<<< HEAD
=======

        <select;
className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                  {g.program === incubator' ? 'Incubator : Grant'}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                </div>;
              </div>;'
              <div className=flex gap - 2 items - center>;'
                {g.program === 'incubator && (


<<<<<<< HEAD
=======
<<<<<<< HEAD
          value={filters && filters.program || ''}'
          onChange={e =>;
            }
            setFilters(f => ({ ...f, "program": e.target.value |undefined })
}
          value={filters && filters.program || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, program: e.target.value |undefined ;})
}
        >;
          <option value=''>All Programs</option>;'
          <option value='grant'>Grant</option>;'
          <option value='incubator'>Incubator</option>;'
        </select>;
      </div>;
      <div className="flex items-center justify-between mb-6">"
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>"
        <div className="flex gap-2">"
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>"
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>"
=======
>>>>>>> origin/resolved-merge-conflicts
        <select;
className=border rounded p-2'
                  {g.program === 'incubator ? Incubator' : 'Grant}
                </div>;
              </div>;
              <div className=flex gap - 2 items - center'>;
                {g.program === 'incubator && (



          value={filters && filters.program || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, program: e.target.value |undefined }))}
=======
        <input;
          className='border rounded p-2';
          placeholder='Region';
          }
           />;<select;
          className='border rounded p-2';
           />;
        <select;
          className='border rounded p - 2';
          value={filters.program || ''}
          on_change={e =    />;}
            set_filters (function => ({ ...f, program: e.target.value || undefined })
}
        >;
          <option value=''    />All Programs</option>;
          <option value='grant'    />Grant</option>;
          <option value='incubator'    />Incubator</option>;
        </select>;
      </div>;
<<<<<<< HEAD
      <div className='grid gap - 4'    />;
        {items.map (g => (<div;}
            key={g.id}
            className='border rounded p - 4 bg - white / 70 dark:bg - black / 40'    />

            <div className='flex items - center justify - between'    />;
              <div    />;
                <h3 className='text - lg font - medium'    />;
                  <Link href={`/grants/${g.id}`}    />;
                    <a    />{g.project_name}</a>;
                  </Link>;
                </h3>;
                <div className='text - xs text - gray - 600 dark:text - gray - 400'    />;
                  {g.sector || 'General'} • {g.region || 'Global'} •{' '}value={filters.program |''}
                  {g.sector || 'General'} • {g.region || 'Global'} •{' '}

        <select;
className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div    />;
              </div>;
              <div className='flex gap - 2 items - center'    />;
                {g.program === 'incubator' && (}
}
>>>>>>> origin/chore/fix-lint-and-merge
          value={filters && filters.program || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, program: e.target.value |undefined })
}
        >;
          <option value=''    />All Programs</option>;
          <option value='grant'    />Grant</option>;
          <option value='incubator'    />Incubator</option>;
        </select>;
      </div>;
<<<<<<< HEAD


pr-12243
pr-12243
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2">
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>
<<<<<<< HEAD
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <select className="border rounded p-2" value={filters.sector || ''} onChange={(e) => setFilters((f) => ({ ...f, sector: e.target.value || undefined }))}>
          <option value="">All Sectors</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select className="border rounded p-2" value={filters.status || ''} onChange={(e) => setFilters((f) => ({ ...f, status: e.target.value || undefined }))}>
          <option value="">All Stages</option>
          {statuses.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <input className="border rounded p-2" placeholder="Region" value={filters.region || ''} onChange={(e) => setFilters((f) => ({ ...f, region: e.target.value || undefined }))} />
        <select className="border rounded p-2" value={filters.program || ''} onChange={(e) => setFilters((f) => ({ ...f, program: e.target.value || undefined }))}>
          <option value="">All Programs</option>
          <option value="grant">Grant</option>
          <option value="incubator">Incubator</option>
        </select>
      </div>
=======
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>
      <div className=\"flex items-center justify-between mb-6\" />"
        <h1 className=\"text-2xl font-semibold\" />Zion Grants & Incubator</h1>"
        <div className=\"flex gap-2\" />"
          <Link href=\"/grants/apply\" /><a className=\"px-3 py-2 bg-blue-600 text-white rounded\" />Apply</a></Link>"
          <Link href=\"/incubator\" /><a className=\"px-3 py-2 bg-purple-600 text-white rounded\" />Incubator</a></Link>
pr-12243
      <div className="flex items-center justify-between mb-6>
        <h1 className=text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2>
          <Link href=/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded>Apply</a></Link>

          <Link href=/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded>Incubator</a></Link>
      <div className=\flex items-center justify-between mb-6\" />"
        <h1 className=\text-2xl font-semibold\ />Zion Grants & Incubator</h1>"
        <div className=\"flex gap-2\ />
          <Link href=\"/grants/apply\" /><a className=\px-3 py-2 bg-blue-600 text-white rounded\ />Apply</a></Link>"
          <Link href=\"/incubator\ /><a className=\px-3 py-2 bg-purple-600 text-white rounded\" />Incubator</a></Link>
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        </div>
      </div>

      <div className=grid gap-4' />;
        {items.map(g => (<div;}
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40 />



<<<<<<< HEAD
=======
<<<<<<< HEAD
      <div className='grid gap-4'>;'
        {items.map(g => { return (<div; }
            }
            key={g.id}
            className='border rounded p-4 bg-white/70 "dark":bg-black/40'>'

            <div className='flex items-center justify-between'>;'
              <div>;
                <h3 className='text-lg font-medium'>;'
                  <Link href={`/grants/${g.id}`}>;`                    <a>{g.projectName}</a>;
                  </Link>;
                </h3>;'
                <div className='text-xs text-gray-600 dark:text-gray-400'>;'
                  {g && g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;'
              <div className='flex gap-2 items-center'>;'
                {g && g.program === 'incubator' && (;'
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
=======
>>>>>>> origin/resolved-merge-conflicts
      <div className='grid gap-4'>;
        {items && items.map(g => (;
          <div
pr-12243


pr-12243
      <div className='grid gap-4'>;
        {items && items.map(g => (;
          <div;
            key={g && g.id}'
            className='border rounded p-4 bg-white/70 dark:bg-black/40'>;'
            <div className='flex items-center justify-between'>;
              <div>;'
                <h3 className='text-lg font-medium'>;`
                  <Link href={`/grants/${g && g.id}`}>;
                    <a>{g && g.projectName}</a>;
            <div className='flex items-center justify-between' />;
              <div />;
                <h3 className='text-lg font-medium' />;
                  <Link href={`/grants/${g.id}`} />;
                    <a />{g.projectName}</a>;
                  </Link>;
                </h3>;'
                <div className='text-xs text-gray-600 dark:text-gray-400'>;'
                  {g && g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;'
              <div className='flex gap-2 items-center'>;'
                {g && g.program === 'incubator' && (;'
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
pr-12243
      <div className='grid gap-4>;
        {items && items.map(g => (;
          <div;
            key={g && g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <div className=flex items-center justify-between'>;
              <div>;'
                <h3 className=text-lg font-medium>;`
                  <Link href={`/grants/${g && g.id}`}>;
                    <a>{g && g.projectName}</a>;
            <div className='flex items-center justify-between' />;
              <div />;
                <h3 className=text-lg font-medium />;
                  <Link href={`/grants/${g.id}`} />;
                    <a />{g.projectName}</a>;
                  </Link>;

            key={g && g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <div className=flex items-center justify-between>;
              <div>;
                <h3 className='text-lg font-medium'>;'
                  <Link href={`/grants/${g && g.id}`}>;`
                    <a>{g && g.projectName}</a>;
=======
      <div className=\"flex items-center justify-between mb-6\"    />"
        <h1 className=\"text-2xl font-semibold\"    />Zion Grants & Incubator</h1>"
        <div className=\"flex gap-2\"    />"
          <Link href=\"/grants/apply\"    /><a className=\"px-3 py-2 bg-blue-600 text-white rounded\"    />Apply</a></Link>"
          <Link href=\"/incubator\"    /><a className=\"px-3 py-2 bg-purple-600 text-white rounded\"    />Incubator</a></Link>
        </div>
      </div>


      <div className='grid gap-4'    />;
        {items.map(g => (<div;}
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'    />

            <div className='flex items-center justify-between'    />;
              <div    />;
                <h3 className='text-lg font-medium'    />;
                  <Link href={`/grants/${g.id}`}    />;
                    <a    />{g.projectName}</a>;
                  </Link>;
                </h3>;
                <div className='text-xs text-gray-600 dark:text-gray-400'    />;
                  {g.sector |'General'} • {g.region |'Global'} •{' '}<select;
          className='border rounded p-2';
        <select;
          className='border rounded p-2';
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div    />;
              </div>;
              <div className='flex gap - 2 items - center'    />;
                {g.program === 'incubator' && (value={filters && filters.program || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, program: e && e.target.value || undefined })
}
        >;
          <option value=''    />All Programs</option>;
          <option value='grant'    />Grant</option>;
          <option value='incubator'    />Incubator</option>;
        </select>;
      </div>;"
      <div className=\"flex items-center justify-between mb-6\"    />;"
        <h1 className=\"text-2xl font-semibold\"    />Zion Grants & Incubator</h1>;"
        <div className=\"flex gap-2\"    />;"
          <Link href=\"/grants/apply\"    /><a className=\"px-3 py-2 bg-blue-600 text-white rounded\"    />Apply</a></Link>;"
          <Link href=\"/incubator\"    /><a className=\"px-3 py-2 bg-purple-600 text-white rounded\"    />Incubator</a></Link>;
        </div>;
      </div>;
      <div className='grid gap-4'    />;
        {items && items.map(g => (<div;}
            key={g && g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'    />;
            <div className='flex items-center justify-between'    />;
              <div    />;
                <h3 className='text-lg font-medium'    />;
                  <Link href={`/grants/${g && g.id}`}    />;
                    <a    />{g && g.projectName}</a>;
>>>>>>> origin/chore/fix-lint-and-merge
                  </Link>;
                </h3>;
                <div className='text-xs text-gray-600 dark:text-gray-400'    />;
                  {g && g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap-2 items-center'    />;
                {g && g.program === 'incubator' && (<span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'    />;
                    Incubated by Zion;
                  </span>;<span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'    />;
                    Incubated by Zion;
                  </span>;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
<<<<<<< HEAD
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>



                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>





                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
=======
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts

      <div className="grid gap-4>
        {items.map((g) => (
          <div key={g.id} className=border rounded p-4 bg-white/70 dark:bg-black/40">
            <div className="flex items-center justify-between>
              <div>
                <h3 className=text-lg font-medium"><Link href={`/grants/${g.id}`}><a>{g.projectName}</a></Link></h3>
                <div className="text-xs text-gray-600 dark:text-gray-400>{g.sector || 'General'} • {g.region || Global} • {g.program === 'incubator' ? Incubator : 'Grant'}</div>
              </div>
              <div className=flex gap-2 items-center">
                {g.program === incubator && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>Incubated by Zion</span>}
                {g.status === 'Approved' && <span className=px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
                <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800>{g.status}</span>
              </div>
            </div>
            <p className=mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{g.proposalSummary}</p>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Budget: {g.budgetAmount} {g.budgetCurrency}</div>
          </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
        ))}
        {items.length === 0 && <div className="text-sm text-gray-600">No grants found.</div>}
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
<span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
origin/cursor/automate-test-improve-and-merge-code-382a
                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>
pr-12243
<<<<<<< HEAD
=======
<<<<<<< HEAD
                )}
                {g && g.status === 'Approved' && (<span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;'
                    }
=======
>>>>>>> origin/resolved-merge-conflicts



                )}
                {g && g.status === 'Approved' && (;



                )}'
                {g && g.status === 'Approved' && (;'
                  <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
                )}

                  <span className=px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700>;
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    Grant Winner;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />;
                    Incubated by Zion;
                  </span>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
                )}
                <span className='px-2 py-1 text-xs rounded bg-gray-100 "dark":bg-gray-800'>;'
                  {g && g.status}
                </span>;
              </div>;
            <p className='mt-2 text-sm text-gray-700 "dark":text-gray-300 line-clamp-3'>;'
              {g && g.proposalSummary}
            </p>;
            <div className='mt-3 text-sm text-gray-600 "dark":text-gray-400'>;'
              "Budget": {g && g.budgetAmount} {g && g.budgetCurrenc
}
            </div>;
        ))}
        {items && items.length === 0 && (<div className='text-sm text-gray-600'>No grants found.</div>;'
=======
>>>>>>> origin/resolved-merge-conflicts
                )}'
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>;
=======
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'    />;
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'    />;
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'    />
                    Incubated by Zion}
                  </span>}
                )}
                {g && g.status === 'Approved' && (<span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'    />;
                    Grant Winner;}
                  </span>;}
                )}
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                  {g && g.status}
                </span>;
              </div>;
            </div>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3'    />;
              {g && g.proposalSummary}
            </p>;
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400'    />;
              Budget: {g && g.budgetAmount} {g && g.budgetCurrenc}
}
            </div>;
          </div>;
        ))}
        {items && items.length === 0 && (<div className='text-sm text-gray-600'    />No grants found.</div>;}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        )}}</div>;
    </EnhancedLayout>;
)</div>;
    </EnhancedLayout>;
  )}ursor/fix-website-loading-errors-and-merge-6662;
      </div>;
    </EnhancedLayout>;
)</div>;
    </EnhancedLayout>;
<<<<<<< HEAD
=======
<<<<<<< HEAD
  )}return (<EnhancedLayout>;
    <EnhancedLayout>;
        {items && items.length === 0 && (;
          <div className='text-sm text-gray-600'>No grants found.</div>;'
=======
>>>>>>> origin/resolved-merge-conflicts
  )}return (<EnhancedLayout    />;
    <EnhancedLayout    />;
        {items && items.length === 0 && (;}
          <div className='text-sm text-gray-600'    />No grants found.</div>;}
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
        )}


>>>>>>> merged-prs-20250907-203621
      </div>
    </EnhancedLayout>
);
}

<<<<<<< HEAD
  return (
    <EnhancedLayout />
    <EnhancedLayout />
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700' />;
=======

<<<<<<< HEAD
=======
<<<<<<< HEAD
return (;
    <EnhancedLayout>
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'>;'
=======
>>>>>>> origin/resolved-merge-conflicts
<<<<<<< HEAD
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />;
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />
                    Incubated by Zion}
                  </span>}
                )}
                {g && g.status === 'Approved' && (<span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700' />;
                    Grant Winner;}
                  </span>;}
                )}
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800' />;
                  {g && g.status}
                </span>;
              </div>;
            </div>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3' />;
              {g && g.proposalSummary}
            </p>;
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400' />;
              Budget: {g && g.budgetAmount;} {g && g.budgetCurrenc}
}
            </div>;
          </div>;
        ))}
        {items.length === 0 && <div className="text-sm text-gray-600">No grants found.</div>}
      </div>
    </EnhancedLayout>
  )
}

=======
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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


<<<<<<< HEAD
      </div>
    </EnhancedLayout>
);
}

  }, [filters]);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  return (
    <EnhancedLayout>
    <EnhancedLayout>
<<<<<<< HEAD
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'>;'
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
                    Incubated by Zion;
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />
                    Incubated by Zion}
                  </span>}
                )}
                {g && g.status === Approved && (<span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700' />;
                    Grant Winner;}
                  </span>;}
                )}
                <span className=px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800 />;
                  {g && g.status}
                </span>;
              </div>;
<<<<<<< HEAD
            </div>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3' />;
              {g && g.proposalSummary}
            </p>;
=======
            <p className='mt - 2 text - sm text - gray - 700 "dark":text - gray - 300 line - clamp - 3'>;'
              {g.proposal_summary}
            </p>;
<<<<<<< HEAD
            <div className='mt - 3 text - sm text - gray - 600 "dark":text - gray - 400'>;'
              "Budget": {g.budget_amount} {g.budget_currenc
}
            </div>;
          </div>))}
        {items.length === 0 && (<div className='text - sm text - gray - 600'>No grants found.</div>)}'
=======
>>>>>>> origin/resolved-merge-conflicts
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400' />;
              Budget: {g && g.budgetAmount;} {g && g.budgetCurrenc}
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
=======
  return (
    <EnhancedLayout    />
    <EnhancedLayout    />
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'    />;
                    Incubated by Zion;
                  </span>)}
<<<<<<< HEAD
                {g.status === 'Approved' && (<span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700' />;}
                    Grant Winner;}
                  </span>)}
                <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800' />;
=======
                {g.status === 'Approved' && (<span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700'    />;}
                    Grant Winner;}
                  </span>)}
                <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800'    />;
>>>>>>> merged-prs-20250907-203621
                  {g.status}
                </span>;
              </div>;
            </div>;
<<<<<<< HEAD
            <p className='mt - 2 text - sm text - gray - 700 dark:text - gray - 300 line - clamp - 3' />;
              {g.proposal_summary}
            </p>;
            <div className='mt - 3 text - sm text - gray - 600 dark:text - gray - 400' />;
              Budget: {g.budget_amount} {g.budget_currenc}
}
            </div>;
          </div>))}
        {items.length === 0 && (<div className='text - sm text - gray - 600' />No grants found.</div>)}
=======
            <p className='mt - 2 text - sm text - gray - 700 dark:text - gray - 300 line - clamp - 3'    />;
              {g.proposal_summary}
            </p>;
            <div className='mt - 3 text - sm text - gray - 600 dark:text - gray - 400'    />;
              Budget: {g.budget_amount} {g.budget_currenc}
>>>>>>> origin/chore/fix-lint-and-merge
}
            </div>;
          </div>))}
        {items.length === 0 && (<div className='text - sm text - gray - 600'    />No grants found.</div>)}
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      </div>;
    </EnhancedLayout>)})
    </EnhancedLayout>);
}
"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243


  );
origin/cursor/automate-test-improve-and-merge-code-2533
=======
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243


<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
        ))}



  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
"
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
