import type { GetServerSideProps } from 'next';

export default function AgencyDashboardPage({ vendor }: Props) {
=======
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },;
export default function AgencyDashboardPage(): any ({ vendor }: Props) {;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');

  if (!activeVendor);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>;
    );  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated);
  }
    ];
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
  return (
    <div className='space-y-8'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-2xl font-semibold'>Agency Dashboard</h1>;
        {!activeVendor && activeVendor.verified && (;
          <span className='text-xs px-2 py-0 && 0.5 rounded bg-yellow-100 text-yellow-800'>;
            Pending Verification;
          </span>;
        )}
        <form
          onSubmit={saveProfile}
          className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm mb-1'>Agency Name</label>;
            <input
              name='name'
              defaultValue={activeVendor && activeVendor.name}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm mb-1'>About</label>;
            <textarea
              name='about'
              rows={4}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <label className='block text-sm mb-1'>Services Offered</label>;
            <input
              name='servicesOffered'
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
  return (
            <div
              key={p && p.id}
              className='border border-gray-200 dark:border-gray-800 rounded p-4'>;
              <div className='font-medium'>{p && p.title}</div>;
              <div className='text-sm text-gray-500'>{p && p.description}</div>;
              <div className='mt-2 text-sm'>${p && p.priceUsd}</div>;
            </div>;
          ))}
        </div>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 items-end'>;
          <input
            placeholder='Title'
            value={pkgTitle}
            onChange={e => setPkgTitle(e && e.target.value)}
            className='border rounded px-3 py-2 bg-transparent';
          />;
          <input
            placeholder='Description'
            value={pkgDesc}
            onChange={e => setPkgDesc(e && e.target.value)}
            className='border rounded px-3 py-2 bg-transparent';
          />;
          <div className='flex gap-2'>;
            <input
              placeholder='Price (USD)'
              type='number'
              value={pkgPrice}
              onChange={e => setPkgPrice(Number(e && e.target.value))}
              className='border rounded px-3 py-2 bg-transparent w-full';
            />;
            <button
              onClick={addPackage}
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
      </section>
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}
function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {
  }
  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Add;
            </button>          </div>;
        </div>;
      </section>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">;
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e && e.target.value)} className="border rounded px-3 py-2 bg-transparent" />;
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e && e.target.value)} className="border rounded px-3 py-2 bg-transparent" />;
          <div className="flex gap-2">;
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e && e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />;
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>;
        </div>;
      </section>;

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Project Pipeline</h2>;
        <Pipeline vendorId={activeVendor && activeVendor.id} />;
      </section>;

      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>;
    </div>;
  );        <Pipeline vendorId={activeVendor && activeVendor.id} />;
      </section>;

      <div className="text-center text-xs text-gray-500">Powered by Zion</div>;
    </div>;
  );
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

function Pipeline(): any ({ vendorId }: { vendorId: string }) {;
  const [items, setItems] = useState<any[]>([]);

  async function fetchItems() {;
    const res = await fetch(;
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`;
    );
    const data = await res && res.json();
    setItems(data && data.items || []);  }    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res && res.json();
    setItems(data && data.items || []);
  }

  async function changeStatus(): any (itemId: string, status: string) {;
    await fetch('/api/vendors/update-pipeline', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON && JSON.stringify({ itemId, status }),;
    });
    fetchItems();

  useEffect(() => {;
    fetchItems();
  }, []);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  return (
    <div className='space-y-2'>;
      {items && items.length === 0 && (;
        <div className='text-sm text-gray-500'>No leads yet.</div>;
      )}
      {items && items.map(item => (;
        <div
          key={item && item.id}
          className='border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between'>;
          <div>;
            <div className='font-medium'>{item && item.title}</div>;
            <div className='text-xs text-gray-500'>;
              {new Date(item && item.createdAt).toLocaleString()} • {item && item.status}
            </div>;
          </div>;
          <select
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          >;
            <option value='lead'>Lead</option>;
            <option value='qualified'>Qualified</option>;
            <option value='proposal'>Proposal</option>;
            <option value='in_progress'>In Progress</option>;
            <option value='complete'>Complete</option>;
            <option value='lost'>Lost</option>          </select>;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            <option value="lead">Lead</option>;
            <option value="qualified">Qualified</option>;
            <option value="proposal">Proposal</option>;
            <option value="in_progress">In Progress</option>;
            <option value="complete">Complete</option>;
            <option value="lost">Lost</option>;
        </div>;
      ))}
    </div>;
  );

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later;
  return { props: { vendor } };
};  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null, // tie to auth later;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return { props: { vendor } }
}

=======
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        </div>))}
    </div>);
;
export const getServerSideProps: GetServerSideProps < Props> = async () => {
  const { list_vendors } = await import ('../utils / vendor - store');
  const vendor = list_vendors ()[0] || null; // tie to auth later;
  return { props: { vendor } }
}  );
}
export const getServerSideProps: GetServerSideProps < Props> = async () => {
  const { list_vendors } = await import ('../utils / vendor - store');
  const vendor = list_vendors ()[0] || null, // tie to auth later;
  return { props: { vendor } }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
