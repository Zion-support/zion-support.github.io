

import type {;
  GrantApplication,;
  GrantCategory,;
  GrantStatus,;
} from '../../types/grants';
const categories: GrantCategory[] = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants',;']
];
const statuses: GrantStatus[] = [;
  'Draft',;
  'Submitted',;
  'Under Review',;
  'Approved',;
  'Rejected',;']

export default function GrantsPage() {;
  const [items, setItems] = useState<GrantApplication[]>([]);

    <EnhancedLayout>      .then((r) => r && r.json());

    <EnhancedLayout>;

      <div className='flex items-center justify-between mb-6'>;
</div>
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>;
        <div className='flex gap-2'>;
          <Link href='/grants/apply'>;


            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>;
          ;
          <Link href='/incubator'>;

            <a className='px-3 py-2 bg-purple-600 text-white rounded'>;
</a>


      .catch(() => setItems([]));  }, [filters]);
  return ()
      .catch(() => setItems([]))


    <EnhancedLayout>

      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-semibold'>Zion Grants & Incubator</h1>
        <div className='flex gap-2'>
          <Link href='/grants/apply'>

            <a className='px-3 py-2 bg-blue-600 text-white rounded'>Apply</a>
          
          <Link href='/incubator'>

            <a className='px-3 py-2 bg-purple-600 text-white rounded'>
          
      <div className='grid md:grid-cols-4 gap-4 mb-6'>
        <select;
          className='border rounded p-2
          value={filters.sector |}
          onChange={e =>
</select>
          <option value=>All Sectors</option>
            <option key={c} value={c}>
</option>
          value={filters.status |}
  const [items, set_items] = useState < GrantApplication[]>([]);
  const [filters, set_filters] = useState<{ sector?: string, status?: string, region?: string, program?: string }>({});
  useEffect (() => {
    const params = new URLSearchParams ();
    if (params.set ('sector', filters.sector)) {
  $2;
    if (params.set ('status', filters.status)) {
    if (params.set ('region', filters.region)) {
    if (params.set ('program', filters.program)) {
  $2;`;
    fetch (`/api / grants?${params.to_string ()}`);
      .then (r => r.json ());
      .then (d => set_items (d.items || []));
      .catch (() => set_items ([]));  }, [filters]);
    <EnhancedLayout>      .then ((r) => r.json ());

            </a>;
      </div>;
          <option value=>All Stages</option>
            <option key={s} value={s}>
        <input;
          placeholder='Region
          value={filters && filters.region || }
          onChange={e =>;
</input>
      <div className='grid md:grid - cols - 4 gap - 4 mb - 6'>;
          className='border rounded p - 2';
          value={filters.sector || }
          on_change={e =>;
          <option value=>All Sectors</option>;
            <option key={c} value={c}>;
            </option>;
        </select>;
        >;
          <option value=>All Stages</option>;
            <option key={s} value={s}>;
        />;
          value={filters.program || }
          <option value=>All Programs</option>;
          <option value='grant'>Grant</option>;
          <option value='incubator'>Incubator</option>;
      <div className='grid gap - 4'>;
          <div;
            key={g.id}
            className='border rounded p - 4 bg - white / 70 dark:bg - black / 40';
            <div className='flex items - center justify - between'>;
              <div>;
                <h3 className='text - lg font - medium'>;
</h3>`;
                  <Link href={`/grants/${g.id}`}>;

                    <a>{g.project_name}</a>;
                </h3>;
                <div className='text - xs text - gray - 600 dark:text - gray - 400'>;
                  {g.program === 'incubator' ? 'Incubator' : 'Grant'}
              <div className='flex gap - 2 items - center'>;
      <div className="flex items-center justify-between mb-6">"
</div>"
        <h1 className="text-2xl font-semibold">Zion Grants & Incubator</h1>""
        <div className="flex gap-2">"
          <Link href="/grants/apply"><a className="px-3 py-2 bg-blue-600 text-white rounded">Apply</a>""
          <Link href="/incubator"><a className="px-3 py-2 bg-purple-600 text-white rounded">Incubator</a>"
"
      <div className='grid gap-4'>;
            key={g && g.id}
            className='border rounded p-4 bg-white/70 dark:bg-black/40'>;
            <div className='flex items-center justify-between'>;
                <h3 className='text-lg font-medium'>;
                  <Link href={`/grants/${g && g.id}`}>;

                    <a>{g && g.projectName}</a>;
                <div className='text-xs text-gray-600 dark:text-gray-400'>;
              <div className='flex gap-2 items-center'>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>;
</span>
                  </span>;
                  <span className='px-2 py-1 text-xs rounded bg-purple-100 text-purple-700'>
                  <span className='px-2 py-1 text-xs rounded bg-emerald-100 text-emerald-700'>;
                <span className='px-2 py-1 text-xs rounded bg-gray-100 dark:bg-gray-800'>;
            <p className='mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3'>;
</p>
            </p>;
            <div className='mt-3 text-sm text-gray-600 dark:text-gray-400'>;
          <div className='text-sm text-gray-600'>No grants found.</div>;
    


                  <span className='px - 2 py - 1 text - xs rounded bg - purple - 100 text - purple - 700'>;
                  </span>)}
                  <span className='px - 2 py - 1 text - xs rounded bg - emerald - 100 text - emerald - 700'>;
                <span className='px - 2 py - 1 text - xs rounded bg - gray - 100 dark:bg - gray - 800'>;
            <p className='mt - 2 text - sm text - gray - 700 dark:text - gray - 300 line - clamp - 3'>;
            <div className='mt - 3 text - sm text - gray - 600 dark:text - gray - 400'>;
          </div>))}
          <div className='text - sm text - gray - 600'>No grants found.</div>)}
    );`;