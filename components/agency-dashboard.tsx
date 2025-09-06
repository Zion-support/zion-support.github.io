import type { GetServerSideProps } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import type { Vendor } from '../utils/vendor-types';
<<<<<<< HEAD

type Props = { vendor: Vendor | null };

=======
type Props = { vendor: Vendor | null },
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
export default function AgencyDashboardPage({ vendor }: Props) {
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');

<<<<<<< HEAD
  if (!activeVendor)
    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>
    );
=======
  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updated = {
<<<<<<< HEAD
      ...activeVendor,
      name: String(formData.get('name') || activeVendor.name),
      about: String(formData.get('about') || activeVendor.about || ''),
      servicesOffered: String(
        formData.get('servicesOffered') ||
          activeVendor.servicesOffered?.join(',') ||
          ''
      )
        .split(',')
        .map(s => s.trim())
        .filter(Boolean),
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only
    setActiveVendor(updated);
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
<<<<<<< HEAD
    const packages = [
      ...(activeVendor.packages || []),
      {
        id: `pkg_${Date.now()}`,
        title: pkgTitle,
        description: pkgDesc,
        priceUsd: Number(pkgPrice),
      },
    ];
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }

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
              defaultValue={activeVendor.about || ''}
              rows={4}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <label className='block text-sm mb-1'>Services Offered</label>
            <input
              name='servicesOffered'
              defaultValue={activeVendor.servicesOffered?.join(', ') || ''}
              className='w-full border rounded px-3 py-2 bg-transparent'
            />
          </div>
          <div className='md:col-span-2'>
            <button className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
              Save
            </button>
=======
    const packages = [...(activeVendor.packages || []), {
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}],
    setActiveVendor({ ...activeVendor, packages });
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('')
  }

  return (
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
            <textarea name="about" defaultValue={activeVendor.about || ''} rows={4} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1" htmlFor="input-Services Offered">Services Offered</label>
            <input name="servicesOffered" defaultValue={activeVendor.servicesOffered?.join() || ''} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <button className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Save</button>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
        </form>
      </section>

<<<<<<< HEAD
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          {(activeVendor.packages || []).map(p => (
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
              onChange={e => setPkgPrice(Number(e.target.value))}
              className='border rounded px-3 py-2 bg-transparent w-full'
            />
            <button
              onClick={addPackage}
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
            >
              Add
            </button>
=======
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Publish Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(activeVendor.packages || []).map(p => (
            <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm text-gray-500">{p.description}</div>
              <div className="mt-2 text-sm">${p.priceUsd}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>

      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );
=======
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>

      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  );
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);

  async function fetchItems() {
<<<<<<< HEAD
    const res = await fetch(
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`
    );
    const data = await res.json();
    setItems(data.items || []);
=======
    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
      body: JSON.stringify({ itemId, status }),
    });
    fetchItems();
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className='space-y-2'>
      {items.length === 0 && (
        <div className='text-sm text-gray-500'>No leads yet.</div>
      )}
      {items.map(item => (
        <div
          key={item.id}
          className='border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between'
        >
          <div>
            <div className='font-medium'>{item.title}</div>
            <div className='text-xs text-gray-500'>
              {new Date(item.createdAt).toLocaleString()} • {item.status}
            </div>
          </div>
          <select
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
=======
      body: JSON.stringify({ itemId, status })});
    fetchItems()
  }

  useEffect(() => { fetchItems() }, []);

  return (
    <div className="space-y-2">
      {items.length === 0 && <div className="text-sm text-gray-500">No leads yet.</div>}
      {items.map(item => (
        <div key={item.id} className="border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{item.title}</div>
            <div className="text-xs text-gray-500">{new Date(item.createdAt).toLocaleString()} • {item.status}</div>
          </div>
          <select defaultValue={item.status} onChange={e => changeStatus(item.id, e.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="in_progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="lost">Lost</option>
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
          </select>
        </div>
      ))}
    </div>
<<<<<<< HEAD
  );

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later
  return { props: { vendor } };
};
=======
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null, // tie to auth later
  return { props: { vendor } }
};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
