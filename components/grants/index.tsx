

import type {;
  GrantApplication,;  GrantCategory,;
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
    sector?: string;
    status?: string;
    region?: string;
    program?: string;
  }>({});          }
        />
        <select
          className='border rounded p-2'                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                </div>;
              </div>;
              <div className='flex gap - 2 items - center'>;
                {g.program === 'incubator' && (      <div className='grid gap-4'>;
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

  return (
    <EnhancedLayout>
    <EnhancedLayout>
