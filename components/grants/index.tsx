
<<<<<<< HEAD


  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];

  Draft,'Submitted',Under Review,'Approved',Rejected];
export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[] />([])sector?: string;

=======
  'Draft','Submitted','Under Review','Approved','Rejected'];

export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]    />([])sector?: string;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    status?: string;
    region?: string;}
    program?: string;}
  }>({}).catch(() => setItems([]))}, [filters])return (.then((r) => r.json()).then((d) => setItems(d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout    />      .then((r) => r && r.json()).then((d) => setItems(d && d.items || [])).catch(() => setItems([]))}, [filters])return (<EnhancedLayout    />;
  }>({});
<<<<<<< HEAD



=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

      .catch(() => setItems([]));  }, [filters]);
  return (

      .then((r) => r.json())
      .then((d) => setItems(d.items || []))

      .catch(() => setItems([]))
  }, [filters]);

  return (

    <EnhancedLayout    />      .then((r) => r && r.json());
      .then((d) => setItems(d && d.items || []));
      .catch(() => setItems([]));
  }, [filters]);

  return (
    <EnhancedLayout    />;
      <div className='flex items-center justify-between mb-6'    />;
        <h1 className='text-2xl font-semibold'    />Zion Grants & Incubator</h1>;
        <div className='flex gap-2'    />;
          <Link href='/grants/apply'    />;
            <a className='px-3 py-2 bg-blue-600 text-white rounded'    />Apply</a>;
          </Link>;

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
            </a>;
          </Link>;
      </div>;value={filters && filters.status || ''}
          onChange={e =>;}
            setFilters(f => ({ ...f, status: e && e.target.value || undefined}
}))GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';


<<<<<<< HEAD
=======
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


export default function GrantsPage() {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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
<<<<<<< HEAD

  useEffect(() => {



    const params = new URLSearchParams();
    if (filters.sector) params.set(sector, filters.sector);
    if (filters.status) params.set('status', filters.status);


              {s}
            </option>
          ))}
=======
  useEffect(() => {


    const params = new URLSearchParams();
    if (filters.sector) params.set(sector, filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
      .then((r) => r.json())
      .then((d) => setItems(d.items || []))
      .catch(() => setItems([]))
    if (filters.region) params.set('region', filters.region);
    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],'
const statuses: GrantStatus[] = [DraftSubmittedUnder ReviewApprovedRejected],
export default function GrantsPage() { return null; }
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

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
    if (filters.region) params.set('region', filters.region);}
    if (filters.program) params.set('program', filters.program);}
    fetch(`/api/grants?${params.toString()}`)
const categories: GrantCategory[] = ['Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],;

const statuses: GrantStatus[] = ['DraftSubmittedUnder ReviewApprovedRejected'],;

export default function GrantsPage() {;

const [items, setItems] = useState<GrantApplication[]    />([]);}
}
const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});

  useEffect(() => {
;

const params = new URLSearchParams();
    if (filters && filters.sector) params && params.set('sector', filters && filters.sector);'
    if (filters && filters.status) params && params.set('status', filters && filters.status);'
    if (filters && filters.region) params && params.set('region', filters && filters.region);'
    if (filters && filters.program) params && params.set('program', filters && filters.program);`
    fetch(`/api/grants?${params && params.toString()}`);
      .then(r => r && r.json());
      .then(d => setItems(d && d.items || []));
      .catch(() => setItems([]));  }, [filters]);
  return (
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
  }, [filters]);

  return (
    <EnhancedLayout>

  const [items, set_items] = useState < GrantApplication[]>([]);}
}
const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
;
  useEffect (() => {
    const params = new URLSearchParams ();

    if (params.set ('sector', filters.sector)) {}
  $2}
}
    if (params.set ('status', filters.status)) {}
  $2}
}

    if (params.set ('region', filters.region)) {}
  $2}
}
    if (params.set ('program', filters.program)) {}
  $2}
}
    fetch (`/api / grants?${params.to_string ()}`);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
      .catch (() => set_items ([]));  }, [filters]);

;
  return (
    <EnhancedLayout    />      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
  }, [filters]);
;
  return (
              Incubator;
            </a>;
          </Link>;
      </div>;


      <div className='grid md:grid-cols-4 gap-4 mb-6'>;

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
              {c}
            </option>;
          ))}
        </select>;
        <select'
          className='border rounded p-2'
          }
        >;'
          <option value=''>All Stages</option>;
          {statuses && statuses.map(s => (;
            <option key={s} value={s}>;
          onChange={e =>;
            setFilters(f => ({ ...f, status: e.target.value |undefined }))export default /**;
        <select;
          className='border rounded p-2';
          value={filters.status |''}
          onChange={e =    />;}
            setFilters(f => ({ ...f, status: e.target.value |undefined}
}))export default /**;
 * GrantsPage - Function description;
 */;
function GrantsPage() {const [items, set_items] = useState < GrantApplication[]>([])const [filters, set_filters]  = useState<{ sector?: string, status?: string, region?: string, program?: string }>({})useEffect (() => {const params = new URLSearchParams ()if (params.set ('sector', filters.sector)) {$2;}
}
    if (params.set ('status', filters.status)) {$2;}
}
    if (params.set ('region', filters.region)) {$2;}
}
    if (params.set ('program', filters.program)) {$2;'

    if (params.set ('program', filters.program)) {$2;}
}
    fetch (`/api / grants?${params.to_string ()}`).then (r = > r.json ()).then (d => set_items (d.items || [])).catch (() => set_items ([]))}, [filters])return (<EnhancedLayout    />      .then ((r) => r.json ()).then ((d) => set_items (d.items || [])).catch (() => set_items ([]))}, [filters];
  return (Incubator;
            </a>;
          </Link>;
      </div>;value={filters && filters.status || ''}

        >
          <option value=''>All Stages</option>
          {statuses.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>;
>>>>>>> origin/cursor/delete-old-data-records-6bba

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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
        />;
        <select;
          className='border rounded p-2';
          }
<<<<<<< HEAD
=======
        >
          <option value=''>All Stages</option>'
>>>>>>> origin/cursor/delete-old-data-records-6bba

            />
          <option value=''    />All Stages</option>
          {statuses.map(s => (}
            <option key={s} value={s}    />
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
              {s}
            </option>
          ))}
        </select>

<<<<<<< HEAD
        </select>
        <input
          className='border rounded p-2'
          placeholder='Region'

          }
        />
=======


          value={filters && filters.region || ''}
          onChange={e =>;
            setFilters(f => ({ ...f, region: e && e.target.value || undefined }));

          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
          value={filters.region |''}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))





          }
        />
        <select;
          className='border rounded p - 2';
          value={filters.sector || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined }))}
            set_filters (function => ({ ...f, sector: e.target.value || undefined }));



          }
        >;
          <option value=''    />All Sectors</option>;
          {categories && categories.map(c => (<option key={c} value={c}    />;
              {c}
            </option>;
          ))}
        </select>;

              {s}
            </option>;
          ))}
        </select>;
        <input
          className='border rounded p-2'
          placeholder='Region'
          }
        />
        <select
          className='border rounded p-2'
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
        <select
          className='border rounded p-2'


<<<<<<< HEAD
                {g.program === 'incubator' && (


        <select;
className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                  {g.program === incubator' ? 'Incubator : Grant'}
=======
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

        <select
          className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;'
              <div className='flex gap - 2 items - center'>;'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>
              </div>
              <div className='flex gap-2 items-center'>
                {g.program === 'incubator' && (
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>;
              </div>;'
              <div className=flex gap - 2 items - center>;'
                {g.program === 'incubator && (


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
<<<<<<< HEAD

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2">
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a></Link>
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a></Link>

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
        </div>
      </div>

      <div className=grid gap-4' />;
        {items.map(g => (<div;}
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40 />



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
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>

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

                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>

      <div className="grid gap-4">
        {items.map((g) => (
          <div key={g.id} className="border rounded p-4 bg-white/70 dark:bg-black/40">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium"><Link href={`/grants/${g.id}`}><a>{g.projectName}</a></Link></h3>
                <div className="text-xs text-gray-600 dark:text-gray-400">{g.sector || 'General'} • {g.region || 'Global'} • {g.program === 'incubator' ? 'Incubator' : 'Grant'}</div>
              </div>
              <div className="flex gap-2 items-center">
                {g.program === 'incubator' && <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-700">Incubated by Zion</span>}
                {g.status === 'Approved' && <span className="px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700">Grant Winner</span>}
                <span className="px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800">{g.status}</span>
              </div>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{g.proposalSummary}</p>
            <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">Budget: {g.budgetAmount} {g.budgetCurrency}</div>
          </div>
>>>>>>> origin/cursor/delete-old-data-records-6bba
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


                )}
                {g && g.status === 'Approved' && (;



                )}'
                {g && g.status === 'Approved' && (;'
                  <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
                )}

                  <span className=px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700>;
                    Grant Winner;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />;
                    Incubated by Zion;
                  </span>;
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
        )}}</div>;
    </EnhancedLayout>;
)</div>;
    </EnhancedLayout>;
  )}ursor/fix-website-loading-errors-and-merge-6662;
      </div>;
    </EnhancedLayout>;
)</div>;
    </EnhancedLayout>;
  )}return (<EnhancedLayout    />;
    <EnhancedLayout    />;
        {items && items.length === 0 && (;}
          <div className='text-sm text-gray-600'    />No grants found.</div>;}
        )}


>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>
    </EnhancedLayout>
);
}

<<<<<<< HEAD



=======
  return (
    <EnhancedLayout />
    <EnhancedLayout />
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700' />;
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

>>>>>>> origin/cursor/delete-old-data-records-6bba
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


=======
      </div>
    </EnhancedLayout>
);
}

  }, [filters]);

  return (
    <EnhancedLayout>
    <EnhancedLayout>

                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
pr-12243
                )}
                {g && g.status === 'Approved' && (<span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;'
                    }
                    Grant Winner;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />;
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
            </div>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3' />;
              {g && g.proposalSummary}
            </p>;
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400' />;
              Budget: {g && g.budgetAmount;} {g && g.budgetCurrenc}
  return (
    <EnhancedLayout    />
    <EnhancedLayout    />
                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'    />;
                    Incubated by Zion;
                  </span>)}
                {g.status === 'Approved' && (<span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700' />;}
                    Grant Winner;}
                  </span>)}
                <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800' />;
                  {g.status}
                </span>;
              </div>;
            </div>;
            <p className='mt - 2 text - sm text - gray - 700 dark:text - gray - 300 line - clamp - 3' />;
              {g.proposal_summary}
            </p>;
            <div className='mt - 3 text - sm text - gray - 600 dark:text - gray - 400' />;
              Budget: {g.budget_amount} {g.budget_currenc}
}
            </div>;
          </div>))}
        {items.length === 0 && (<div className='text - sm text - gray - 600' />No grants found.</div>)}
}
            </div>;
          </div>))}
        {items.length === 0 && (<div className='text - sm text - gray - 600'    />No grants found.</div>)}
>>>>>>> origin/cursor/delete-old-data-records-6bba
      </div>;
    </EnhancedLayout>)})
    </EnhancedLayout>);
}
"

<<<<<<< HEAD
  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243







=======
"
>>>>>>> origin/cursor/delete-old-data-records-6bba
