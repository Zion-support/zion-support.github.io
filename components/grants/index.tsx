

  Ecosystem Tools,'Talent Development',Regional Expansion,'Research Grants'];

  Draft,'Submitted',Under Review,'Approved',Rejected];
export default function GrantsPage() {const [items, setItems] = useState<GrantApplication[] />([])sector?: string;






  useEffect(() => {



    const params = new URLSearchParams();
    if (filters.sector) params.set(sector, filters.sector);
    if (filters.status) params.set('status', filters.status);


              {s}
            </option>
          ))}


        </select>
        <input
          className='border rounded p-2'
          placeholder='Region'

          }
        />
                {g.program === 'incubator' && (


        <select;
className='border rounded p-2'
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
                  {g.program === incubator' ? 'Incubator : Grant'}

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






  );
origin/cursor/automate-test-improve-and-merge-code-2533
pr-12243







