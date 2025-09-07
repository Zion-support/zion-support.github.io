import type {
  GrantApplication,
pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  GrantCategory,
  GrantStatus} from '../../types/grants;

const categories: GrantCategory[] = [;
  'Ecosystem Tools',
  Talent Development','
  Regional Expansion,'
  'Research Grants];
const statuses: GrantStatus[] = [;
  'Draft',
  Submitted','
  Under Review,'
  'Approved,
  'Rejected'];

  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];

  Draft,'Submitted',Under Review,'Approved',Rejected];
export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[] />([])sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});

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
            </a>;
          </Link>;
      </div>;

          value={filters && filters.status || }
          onChange={e =>;
            setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a






  GrantApplication,


  GrantCategory,
  GrantStatus} from ../../types/grants;
import type {GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';
  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];
  Draft,'Submitted',Under Review,'Approved',Rejected];export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[]>([])sector?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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
            }
            setFilters(f => ({ ...f, "status": e && e.target.value || undefined
}))GrantApplication,GrantCategory,GrantStatus} from '../../types/grants';'


>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
  useEffect(() => {

    const params = new URLSearchParams();
    if (filters.sector) params.set(sector, filters.sector);
    if (filters.status) params.set('status', filters.status);
    if (filters.region) params.set(region, filters.region);

    if (filters.program) params.set('program', filters.program);
    fetch(`/api/grants?${params.toString()}`)
const categories: GrantCategory[] = [Ecosystem ToolsTalent DevelopmentRegional ExpansionResearch Grants'],'
const statuses: GrantStatus[] = [DraftSubmittedUnder ReviewApprovedRejected],
export default function GrantsPage() { return null; }
  const [filters, setFilters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});


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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
      .catch(() => setItems([]))


    <EnhancedLayout>
<div className='flex items-center justify-between mb-6'>
        <h1 className=text-2xl font-semibold>Zion Grants & Incubator</h1>
        <div className='flex gap-2'>
          <Link href=/grants/apply>
=======
    <EnhancedLayout>'
      <div className='flex items-center justify-between mb-6>
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>
        <div className=flex gap-2'>'
          <Link href=/grants/apply>'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <a className='px-3 py-2 bg-blue-600 text-white rounded>Apply</a>

              Incubator;
            </a>
          </Link>
      </div>
      <div className='grid md:grid-cols-4 gap-4 mb-6'>
        <select
          className=border rounded p-2''
          value={filters.sector |}
          onChange={e =>
            setFilters(f => ({ ...f, sector: e.target.value |undefined }))

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          }
        >
          <option value=''>All Sectors</option>'
          {categories.map(c => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default /**
 * GrantsPage - Function description
 */
function GrantsPage() {
 ;
  }
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
  useEffect (() => {
    }
    const params = new URLSearchParams ();

  $2
}
    if (params.set ('status', filters.status)) {'
  $2
}

  $2
}
    if (params.set ('program', filters.program)) {'
  $2
}
    fetch (`/api / grants?${params.to_string ()}`);`      .then (r => { return r.json ()); }
      .then (d => { return set_items (d.items || [])); }
      .catch (() => set_items ([]));  }, [filters]);

    <EnhancedLayout>      .then ((r) => r.json ());
      .then ((d) => set_items (d.items || []));
      .catch (() => set_items ([]));
  }, [filters]);

              Incubator;
            </a>;
          </Link>;
      </div>;

=======

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          }
        >
=======

          }
        >
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <option value='>All Stages</option>
          {statuses.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input'
          className=border rounded p-2'
          placeholder='Region




          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined }))
          value={filters.region |'}
          onChange={e =>
            setFilters(f => ({ ...f, region: e.target.value |undefined ;}))
pr-12243

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          }
        />
        <select'
          className=border rounded p-2


=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      <div className='grid md:grid - cols - 4 gap - 4 mb - 6'>;
        <select;
          className=border rounded p - 2;
          value={filters.sector || ''}
          on_change={e =>;
            set_filters (function => ({ ...f, sector: e.target.value || undefined }));

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          }
        >;
          <option value='>All Sectors</option>;
          {categories && categories.map(c => (;
            <option key={c} value={c}>;
=======
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {c}
            </option>;
          ))}
        </select>;

 * GrantsPage - Function description;
 */;
function GrantsPage() {const [items, set_items] = useState < GrantApplication[]>([])const [filters, set_filters]  = useState<{ sector?: string, status?: string, region?: string, program?: string }>({})useEffect (() => {const params = new URLSearchParams ()if (params.set ('sector', filters.sector)) {$2;'
}
    if (params.set ('status', filters.status)) {$2;'
}
    if (params.set ('region', filters.region)) {$2;'
}
    if (params.set ('program', filters.program)) {$2;'
=======

 * GrantsPage - Function description;
 */;
}
    if (params.set ('status, filters.status)) {$2;
}
    if (params.set (region', filters.region)) {$2;
}
    if (params.set ('program, filters.program)) {$2;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
}
    fetch (`/api / grants?${params.to_string ()}`).then (r = > r.json ()).then (d => { return set_items (d.items || [])).catch (() => set_items ([]))}, [filters])return (<EnhancedLayout>      .then ((r) => r.json ()).then ((d) => set_items (d.items || [])).catch (() => set_items ([]))}, [filters]; }`  return (Incubator;
            </a>;
          </Link>;

=======
      </div>;value={filters && filters.status || '}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
              {s}
            </option>;
          ))}
        </select>;

        />;
        <select;
          className='border rounded p-2';'
          }
        >
          <option value=''>All Stages</option>'
=======

        />;
        <select;
          className='border rounded p-2;



          }
        >
          <option value='>All Stages</option>
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          {statuses.map(s => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

              {c}
            </option>;
          ))}
        </select>;

              {s}
            </option>;
          ))}
        </select>;

        <select
          className='border rounded p-2
        <select;
          className=border rounded p - 2';
          value={filters.program || '}

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
value={filters.program |'}
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          value={filters.program |'}
          onChange={e =>
            setFilters(f => ({ ...f, program: e.target.value |undefined ;}))
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
                <div className=text-xs text-gray-600 dark:text-gray-400'>
                  {g.sector |'General} • {g.region |Global'} •{' }

=======
=======
        <select;
          className=border rounded p - 2';
          value={filters.program || '}
          on_change={e =>;
            set_filters (function => ({ ...f, program: e.target.value || undefined }));
          }
        >;
          <option value='>All Programs</option>;
          <option value='grant>Grant</option>;
          <option value=incubator'>Incubator</option>;
        </select>;
      </div>;
      <div className='grid gap - 4>;
        {items.map (g => (
          <div;
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
                  {g.sector || General'} • {g.region || 'Global} •{ '}

        <select
          className='border rounded p-2
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                  {g.program === incubator' ? 'Incubator : Grant'}
                </div>;
              </div>;'
              <div className=flex gap - 2 items - center>;'
                {g.program === 'incubator && (


=======
        <select;
className=border rounded p-2'
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
                  {g.program === 'incubator ? Incubator' : 'Grant}
                </div>;
              </div>;
              <div className=flex gap - 2 items - center'>;
                {g.program === 'incubator && (


          value={filters && filters.program || '}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
          onChange={e =>;}
            setFilters(f => ({ ...f, program: e.target.value |undefined ;})
}
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        >;

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      <div className="flex items-center justify-between mb-6>
        <h1 className=text-2xl font-semibold">Zion Grants & Incubator</h1>
        <div className="flex gap-2>
          <Link href=/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded>Apply</a></Link>

          <Link href=/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded>Incubator</a></Link>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      <div className=\flex items-center justify-between mb-6\" />"
        <h1 className=\text-2xl font-semibold\ />Zion Grants & Incubator</h1>"
        <div className=\"flex gap-2\ />
          <Link href=\"/grants/apply\" /><a className=\px-3 py-2 bg-blue-600 text-white rounded\ />Apply</a></Link>"
          <Link href=\"/incubator\ /><a className=\px-3 py-2 bg-purple-600 text-white rounded\" />Incubator</a></Link>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
        </div>
      </div>

      <div className=grid gap-4' />;
        {items.map(g => (<div;}
            key={g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40 />




>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              <div>;
                <h3 className='text-lg font-medium'>;'
                  <Link href={`/grants/${g && g.id}`}>;`
                    <a>{g && g.projectName}</a>;
                  </Link>;
                </h3>;

                    Incubated by Zion
                  </span>
                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>



                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>





                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>
>>>>>>> origin/main

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
=======
<span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                    Incubated by Zion
                  </span>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
origin/cursor/automate-test-improve-and-merge-code-382a
                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700>
                    Incubated by Zion
                  </span>
pr-12243

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
                )}

                  <span className=px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700>;
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
                    Grant Winner;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700' />;
                    Incubated by Zion;
                  </span>;


      </div>
    </EnhancedLayout>
);
      </div>;
    </EnhancedLayout>;
  );
}



=======
=======
=======
                  <span className=px-2 py-1 text-xs rounded bg-purple-100 text-purple-700 />;
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
}
            </div>;
          </div>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        ))}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
>>>>>>> origin/main
=======

=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243
"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
