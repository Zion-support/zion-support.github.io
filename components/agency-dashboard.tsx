import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
export default function AgencyDashboardPage({ vendor }: Props) {

export default function AgencyDashboardPage({ vendor }: Props) {
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null }
type Props = { vendor: Vendor | null };

type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function AgencyDashboardPage({ vendor }: Props) {;
type Props = { vendor: Vendor | null };

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
=======
import { FormEvent, useEffect, useState } from 'react';
import type { Vendor } from '../utils/vendor-types';
type Props = any;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { FormEvent, useEffect, useState } from 'react';
import type { Vendor } from '../utils/vendor-types';
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
export default function AgencyDashboardPage({ vendor }: Props) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only
    setActiveVendor(updated);  }
  function addPackage() {
    if (!pkgTitle |!pkgPrice |!activeVendor) return;      name: String(formData.get('name') |activeVendor.name)
      about: String(formData.get('about') |activeVendor.about |'')
      servicesOffered: String(formData.get('servicesOffered') |activeVendor.servicesOffered?.join() |'')
        .split()
        .map(s => s.trim())
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }
  function addPackage() {

    const packages = [
      ...(activeVendor.packages |[])
      {
        id: `pkg_${Date.now()}`
        title: pkgTitle
        description: pkgDesc
        priceUsd: Number(pkgPrice)
      }
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated);
  }
<<<<<<< HEAD
  function addPackage() {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    if (!pkgTitle |!pkgPrice |!activeVendor) return;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [
      ...(activeVendor.packages |[])
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508

if (!activeVendor)
    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>
    );

  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updated = {
...activeVendor,
      name: String(formData.get('name') || activeVendor.name),
      about: String(formData.get('about') || activeVendor.about || ''),
      servicesOffered: String(
        formData.get('servicesOffered') |
          activeVendor.servicesOffered?.join(',') |
          ''
      )
        .split(',')
        .map(s => s.trim())
        .filter(Boolean)
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only
    setActiveVendor(updated);
  }
  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
const packages = [
      ...(activeVendor.packages || []),
origin/cursor/automate-test-improve-and-merge-code-2533
      {
        id: `pkg_${Date.now()}`
        title: pkgTitle
        description: pkgDesc
        priceUsd: Number(pkgPrice)
      }
<<<<<<< HEAD
=======

  function addPackage() {;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [;
      ...(activeVendor && activeVendor.packages || []),;
      {;
        id: `pkg_${Date && Date.now()}`,;
        title: pkgTitle,,
  description: pkgDesc,;
        priceUsd: Number(pkgPrice),;
      },;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    ];
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
<<<<<<< HEAD

  return (
    <div className='space-y-8'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Agency Dashboard</h1>
        {!activeVendor.verified && (
          <span className='text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800'>
            Pending Verification
          </span>
        )}
      </div>
      <section className='space-y-4'>
        <h2 className='text-lg font-medium'>Profile</h2>
        <form
          onSubmit={saveProfile}
          className='grid grid-cols-1 md:grid-cols-2 gap-4'
        >
          <div>
            <label className='block text-sm mb-1'>Agency Name</label>
            <input
              name='name'
              defaultValue={activeVendor.name}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <label className='block text-sm mb-1'>About</label>
            <textarea
              name='about'
              defaultValue={activeVendor.about |''}
              rows={4}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <label className='block text-sm mb-1'>Services Offered</label>
            <input
              name='servicesOffered'
              defaultValue={activeVendor.servicesOffered?.join(', ') |''}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <button className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
              Save
            </button>          </div>
        </form>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }
  function addPackage() {

    if (!pkgTitle || !pkgPrice || !activeVendor) return;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              defaultValue={activeVendor && activeVendor.servicesOffered?.join(', ') || ''}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />;
          </div>;
          <div className='md:col-span-2'>;
            <button className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Save;
            </button>          </div>;
        </form>;
      </section>;

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Publish Packages</h2>;

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });

=======
      ...activeVendor;
      name: String(formData.get('name') || activeVendor.name),
      about: String(formData.get('about') || activeVendor.about || ''),
      servicesOffered: String(formData.get('servicesOffered') || activeVendor.servicesOffered?.join() || '')
        .split()
        .map(s => s.trim())
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }

  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const packages = [...(activeVendor.packages || []), {
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}],
    setActiveVendor({ ...activeVendor, packages });

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('')
  }
  return (
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    setPkgTitle('');
    setPkgDesc('');
      <section className='space-y-3'>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              defaultValue={activeVendor.servicesOffered?.join(', ') |''}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <button className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
              Save
            </button>
          </div>
        </form>
      </section>

<section className='space-y-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
        <h2 className='text-lg font-medium'>Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div
              key={p.id}
              className='border border-gray-200 dark:border-gray-800 rounded p-4'
            >
              <div className='font-medium'>{p.title}</div>
              <div className='text-sm text-gray-500'>{p.description}</div>
              <div className='mt-2 text-sm'>${p.priceUsd}</div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 items-end'>
          <input
            placeholder='Title'
            value={pkgTitle}
            onChange={e => setPkgTitle(e.target.value)}
            className='border rounded px-3 py-2 bg-transparent'
          />
          <input
            placeholder='Description'
            value={pkgDesc}
            onChange={e => setPkgDesc(e.target.value)}
            className='border rounded px-3 py-2 bg-transparent'
          />
          <div className='flex gap-2'>

            <input
              placeholder='Price (USD)'
              type='number'
              value={pkgPrice}
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
        </div>
      </section>
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>

      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}

          </div>
        </form>
      </section>

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
              onChange={e => setPkgPrice(Number(e.target.value))}
              className='border rounded px-3 py-2 bg-transparent w-full'
            />
            <button
              onClick={addPackage}
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
            >
              Add
            </button>
          </div>
        </div>
      </section>

<section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
function Pipeline({ vendorId }: { vendorId: string }) {
<<<<<<< HEAD
=======
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
=======
    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
const res = await fetch(
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`
    );
    const data = await res.json();
    setItems(data.items || []);
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
<<<<<<< HEAD
<<<<<<< HEAD

  useEffect(() => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Add;
            </button>          </div>;
        </div>;
      </section>;
<<<<<<< HEAD

=======
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, status })});
    fetchItems()
  }

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



}

function Pipeline(): any ({ vendorId }: { vendorId: string }) {;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function Pipeline({ vendorId }: { vendorId: string }) {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ itemId, status }),
origin/cursor/automate-test-improve-and-merge-code-2533
    });
    fetchItems();
<<<<<<< HEAD

  useEffect(() => {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  useEffect(() => {;

  }
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

<<<<<<< HEAD
  useEffect(() => {
=======
    fetchItems();
  }, []);
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';

=======
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null; // tie to auth later
  return { props: { vendor } }
};  )
}
<<<<<<< HEAD

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later;
  return { props: { vendor } }
};  );
<<<<<<< HEAD
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null, // tie to auth later;
  return { props: { vendor } }
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
            <option value='lost'>Lost</option>
          </select>
        </div>
      ))}
<<<<<<< HEAD
<<<<<<< HEAD
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null; // tie to auth later
  return { props: { vendor } }
};  )
}
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null, // tie to auth later
  return { props: { vendor } }
}
}

    </div>
};
    </div>

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
    </div>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later
  return { props: { vendor } };
};
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
