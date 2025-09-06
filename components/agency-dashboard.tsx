import type { GetServerSideProps } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null }
type Props = { vendor: Vendor | null };

type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function AgencyDashboardPage({ vendor }: Props) {;
type Props = { vendor: Vendor | null };

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default function AgencyDashboardPage({ vendor }: Props) {
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');

    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>;
    );  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;
<<<<<<< HEAD
  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updated = {
      ...activeVendor
      name: String(formData.get('name') |activeVendor.name)
      about: String(formData.get('about') |activeVendor.about |'')
      servicesOffered: String(
        formData.get('servicesOffered') |
          activeVendor.servicesOffered?.join(',') |
          ''
      )
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
        .filter(Boolean),
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated);
  }
<<<<<<< HEAD
<<<<<<< HEAD
  function addPackage() {
    if (!pkgTitle |!pkgPrice |!activeVendor) return;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [
      ...(activeVendor.packages |[])
      {
        id: `pkg_${Date.now()}`
        title: pkgTitle
        description: pkgDesc
        priceUsd: Number(pkgPrice)
      }
=======


  function addPackage() {;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [;
      ...(activeVendor && activeVendor.packages || []),;
      {;
        id: `pkg_${Date && Date.now()}`,;
        title: pkgTitle,;
        description: pkgDesc,;
        priceUsd: Number(pkgPrice),;
      },;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
    ];
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }
  function addPackage() {

    if (!pkgTitle || !pkgPrice || !activeVendor) return;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Agency Dashboard</h1>
        {!activeVendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Pending Verification</span>}
      </div>
      <section className="space-y-4">
        <h2 className="text-lg font-medium">Profile</h2>
        <form onSubmit={saveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1" htmlFor="input-Agency Name">Agency Name</label>
            <input name="name" defaultValue={activeVendor.name} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1" htmlFor="input-About">About</label>
            <textarea name="about" defaultValue={activeVendor.about |''} rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1" htmlFor="input-Services Offered">Services Offered</label>
            <input name="servicesOffered" defaultValue={activeVendor.servicesOffered?.join() |''} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save</button>
          </div>
        </form>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
=======

    <div className="space-y-8">;
      <div className="flex items-center justify-between">;
        <h1 className="text-2xl font-semibold">Agency Dashboard</h1>;
        {!activeVendor && activeVendor.verified && <span className="text-xs px-2 py-0 && 0.5 rounded bg-yellow-100 text-yellow-800">Pending Verification</span>}
      </div>;

      <section className="space-y-4">;
        <h2 className="text-lg font-medium">Profile</h2>;
        <form onSubmit={saveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">;
          <div>;
            <label className="block text-sm mb-1" htmlFor="input-Agency Name">Agency Name</label>;
            <input name="name" defaultValue={activeVendor && activeVendor.name} className="w-full border rounded px-3 py-2 bg-transparent" />;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm mb-1" htmlFor="input-About">About</label>;
            <textarea name="about" defaultValue={activeVendor && activeVendor.about || ''} rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />;
          </div>;
          <div className="md:col-span-2">;
            <label className="block text-sm mb-1" htmlFor="input-Services Offered">Services Offered</label>;
            <input name="servicesOffered" defaultValue={activeVendor && activeVendor.servicesOffered?.join() || ''} className="w-full border rounded px-3 py-2 bg-transparent" />;
          </div>;
          <div className="md:col-span-2">;
            <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save</button>;
          </div>;
        </form>;
      </section>;

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Publish Packages</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
            >
              Add
            </button>          </div>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );        <Pipeline vendorId={activeVendor.id} />
      </section>
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}
    if (!pkgTitle || !pkgPrice || !activeVendor) return;



=======
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
            >
              Add
            </button>          </div>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );        <Pipeline vendorId={activeVendor.id} />
      </section>
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}
=======
<<<<<<< HEAD
    if (!pkgTitle || !pkgPrice || !activeVendor) return;

          </div>
        </form>
      </section>

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {

    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])

  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {





  useEffect(() => {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Add;
            </button>          </div>;
        </div>;
      </section>;

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">;
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e && e.target.value)} className="border rounded px-3 py-2 bg-transparent" />;
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e && e.target.value)} className="border rounded px-3 py-2 bg-transparent" />;
          <div className="flex gap-2">;
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e && e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />;
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>;
        </div>;
      </section>;

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  useEffect(() => {;

  }

<<<<<<< HEAD
  useEffect(() => {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
    fetchItems();
  }, []);
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';
          >;
            <option value='lead'>Lead</option>;
            <option value='qualified'>Qualified</option>;
            <option value='proposal'>Proposal</option>;
            <option value='in_progress'>In Progress</option>;
            <option value='complete'>Complete</option>;
            <option value='lost'>Lost</option>          </select>;
            <option value="lead">Lead</option>;
            <option value="qualified">Qualified</option>;
            <option value="proposal">Proposal</option>;
            <option value="in_progress">In Progress</option>;
            <option value="complete">Complete</option>;
            <option value="lost">Lost</option>;

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null; // tie to auth later
  return { props: { vendor } }
};  )
}
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {
=======

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later;
  return { props: { vendor } };
};  );
=======
            defaultValue={item.status}
            onChange={e => changeStatus(item.id, e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm'
          >
            <option value='lead'>Lead</option>
            <option value='qualified'>Qualified</option>
            <option value='proposal'>Proposal</option>
            <option value='in_progress'>In Progress</option>
            <option value='complete'>Complete</option>
            <option value='lost'>Lost</option>          </select>
        </div>
      ))}
    </div>          <select defaultValue={item.status} onChange={e => changeStatus(item.id, e.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="in_progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="lost">Lost</option>
        </div>
      ))}
<<<<<<< HEAD
    </div>
  );
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {
=======

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null; // tie to auth later
  return { props: { vendor } }
};  )
}
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {
=======

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null, // tie to auth later
  return { props: { vendor } }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
  return { props: { vendor } }
<<<<<<< HEAD
<<<<<<< HEAD
}

    </div>
};
    </div>
=======
=======
}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f

};
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
