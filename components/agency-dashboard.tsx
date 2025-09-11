import type { GetServerSideProps } from 'next';

<<<<<<< HEAD
<<<<<<< HEAD
export default function AgencyDashboardPage({ vendor }: Props) {
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function AgencyDashboardPage({ vendor }: Props) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },;
export default function AgencyDashboardPage(): any ({ vendor }: Props) {;


<<<<<<< HEAD
import { FormEvent, useEffect, useState } from 'react';
import type { Vendor } from '../utils/vendor-types';

type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null }
type Props = { vendor: Vendor | null };

type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function AgencyDashboardPage({ vendor }: Props) {;
type Props = { vendor: Vendor | null };

export default function AgencyDashboardPage({ vendor }: Props) {
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function AgencyDashboardPage({ vendor }: Props) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  if (!activeVendor);
    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>;
    );  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


  async function saveProfile(): any (e: FormEvent<HTMLFormElement>) {;
    e && e.preventDefault();
    const formData = new FormData(e && e.currentTarget);
    const updated = {;
      ...activeVendor,;
      name: String(formData && formData.get('name') || activeVendor && activeVendor.name),;
      about: String(formData && formData.get('about') || activeVendor && activeVendor.about || ''),;
      servicesOffered: String(;
        formData && formData.get('servicesOffered') ||;
          activeVendor && activeVendor.servicesOffered?.join(',') ||;
          '';
      );
        .split(',');
        .map(s => s && s.trim());
        .filter(Boolean),;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        .filter(Boolean),

    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }


<<<<<<< HEAD
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  function addPackage() {;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;      name: String(formData && formData.get('name') || activeVendor && activeVendor.name),;
      about: String(formData && formData.get('about') || activeVendor && activeVendor.about || ''),;
      servicesOffered: String(formData && formData.get('servicesOffered') || activeVendor && activeVendor.servicesOffered?.join() || '');
        .split();
        .map(s => s && s.trim());
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated);
  }


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
<<<<<<< HEAD
  if (!activeVendor)
    return (
      <div className='text-gray-500'>No vendor found. Please apply first.</div>
    );  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
    } as Vendor;
<<<<<<< HEAD
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor(updated);  }


  function addPackage() {;
    if (!pkgTitle || !pkgPrice || !activeVendor) return;      name: String(formData && formData.get('name') || activeVendor && activeVendor.name),;
      about: String(formData && formData.get('about') || activeVendor && activeVendor.about || ''),;
      servicesOffered: String(formData && formData.get('servicesOffered') || activeVendor && activeVendor.servicesOffered?.join() || '');
        .split();
        .map(s => s && s.trim());

        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor(updated);
  }


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

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        .filter(Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }
  function addPackage() {

    if (!pkgTitle || !pkgPrice || !activeVendor) return;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <div className='space-y-8'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-2xl font-semibold'>Agency Dashboard</h1>;
        {!activeVendor && activeVendor.verified && (;
          <span className='text-xs px-2 py-0 && 0.5 rounded bg-yellow-100 text-yellow-800'>;
            Pending Verification;
          </span>;
        )}
<<<<<<< HEAD
<<<<<<< HEAD
      </div>;
      <section className='space-y-4'>;
        <h2 className='text-lg font-medium'>Profile</h2>;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      </div>;
      <section className='space-y-4'>;
        <h2 className='text-lg font-medium'>Profile</h2>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
              defaultValue={activeVendor && activeVendor.about || ''}
=======

              defaultValue={activeVendor && activeVendor.about || ''}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

              defaultValue={activeVendor && activeVendor.about || ''}

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Publish Packages</h2>;

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
      <section className='space-y-3'>;
        <h2 className='text-lg font-medium'>Publish Packages</h2>;
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>    setActiveVendor({ ...activeVendor, packages });
      ...activeVendor;

  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>,

  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(),
    const formData = new FormData(e.currentTarget)
    const updated = {
      ...activeVendor,

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
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }
  return (
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
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('')
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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


function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {

    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])

<<<<<<< HEAD
      <section className='space-y-3'>
        <h2 className='text-lg font-medium'>Publish Packages</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
    if (!pkgTitle || !pkgPrice || !activeVendor) return;
=======
=======
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======


function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);
  async function fetchItems() {

    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const data = await res.json();
    setItems(data.items || [])

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          </div>
        </form>
      </section>

=======





  useEffect(() => {
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
              Add;
            </button>          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, status })});
    fetchItems()
  }


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

<<<<<<< HEAD
<<<<<<< HEAD
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, status })}),
    fetchItems()

          </select>
        </div>
      ))}
    </div>
  )
}
function Pipeline(): any ({ vendorId }: { vendorId: string }) {;
=======
function Pipeline(): any ({ vendorId }: { vendorId: string }) {;
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
function Pipeline(): any ({ vendorId }: { vendorId: string }) {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function Pipeline({ vendorId }: { vendorId: string }) {
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
  useEffect(() => {;


<<<<<<< HEAD

  }

  }

  useEffect(() => {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

  useEffect(() => {;

  }

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    fetchItems();
  }, []);
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

<<<<<<< HEAD
<<<<<<< HEAD
            defaultValue={item && item.status}
            onChange={e => changeStatus(item && item.id, e && e.target.value)}
            className='border rounded px-2 py-1 bg-transparent text-sm';
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {FormEvent, useEffect, useState} from 'react';
import type { Vendor } from '../utils / vendor - types';
;
type Props = { vendor: Vendor | null }type Props = { vendor: Vendor | null },
export default /**
 * AgencyDashboardPage - Function description
 */
function AgencyDashboardPage() {
  const [active_vendor, setActiveVendor] = useState (vendor);
  const [pkg_title, setPkgTitle] = useState ('');
  const [pkg_desc, setPkgDesc] = useState ('');
  const [pkg_price, setPkgPrice] = useState < number | ''>('');
;
  // Check condition
if (
    return () {
  $2
}
      <div className='text - gray - 500'>No vendor found. Please apply first.</div>);  // Check condition
if (return <div className="text - gray - 500">No vendor found. Please apply first.</div>) {
  $2
}
  async /**
 * save_profile - Function description
 */
function save_profile() {
    e.prevent_default ();
    const form_data = new FormData (e.current_target);
    const updated = {
      ...active_vendor,
      name: String (form_data.get ('name') || active_vendor.name),
      about: String (form_data.get ('about') || active_vendor.about || ''),
      services_offered: String (
        form_data.get ('services_offered') ||;
          active_vendor.services_offered?.join (', ') ||;
          '');
        .split (', ');
        .map (string => s.trim ());
        .filter (Boolean),
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only;
    setActiveVendor (updated);  }
  /**
 * add_package - Function description
 */
function add_package() {
    // Check condition
if (return) {
  $2
}      name: String (form_data.get ('name') || active_vendor.name),
      about: String (form_data.get ('about') || active_vendor.about || ''),
      services_offered: String (form_data.get ('services_offered') || active_vendor.services_offered?.join () || '');
        .split ();
        .map (string => s.trim ());
        .filter (Boolean)} as Vendor;
    // For MVP, update via direct API not implemented, keep local preview only;
    setActiveVendor (updated);
  }
  /**
 * add_package - Function description
 */
function add_package() {
    // Check condition
if (return) {
  $2
}
    const packages = [;
      ...(active_vendor.packages || []),
      {
        id: `pkg_${Date.now ()}`,
        title: pkg_title,
        description: pkg_desc,
        price_usd: Number (pkg_price),
      },
    ];
    setActiveVendor ({ ...active_vendor, packages });
    setPkgTitle ('');
    setPkgDesc ('');
    setPkgPrice ('');
  }
  return (
    <div className='space - y-8'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 2xl font - semibold'>Agency Dashboard</h1>;
        {!active_vendor.verified && (
          <span className='text - xs px - 2 py - 0.5 rounded bg - yellow - 100 text - yellow - 800'>;
            Pending Verification;
          </span>)}
      </div>;
      <section className='space - y-4'>;
        <h2 className='text - lg font - medium'>Profile</h2>;
        <form;
          on_submit={save_profile}
          className='grid grid - cols - 1 md:grid - cols - 2 gap - 4';
        >;
          <div>;
            <label className='block text - sm mb - 1'>Agency Name</label>;
            <input;
              name='name';
              default_value={active_vendor.name}
              className='w - full border rounded px - 3 py - 2 bg - transparent';
            />;
          </div>;
          <div className='md:col - span - 2'>;
            <label className='block text - sm mb - 1'>About</label>;
            <textarea;
              name='about';
              default_value={active_vendor.about || ''}
              rows={4}
              className='w - full border rounded px - 3 py - 2 bg - transparent';
            />;
          </div>;
          <div className='md:col - span - 2'>;
            <label className='block text - sm mb - 1'>Services Offered</label>;
            <input;
              name='services_offered';
              default_value={active_vendor.services_offered?.join (', ') || ''}
              className='w - full border rounded px - 3 py - 2 bg - transparent';
            />;
          </div>;
          <div className='md:col - span - 2'>;
            <button className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black'>;
              Save;
            </button>          </div>;
        </form>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - lg font - medium'>Publish Packages</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>    setActiveVendor ({ ...active_vendor, packages });
    setPkgTitle ('');
    setPkgDesc ('');
    setPkgPrice ('');
  }
  return (
    <div className="space - y-8">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 2xl font - semibold">Agency Dashboard</h1>;
        {!active_vendor.verified && <span className="text - xs px - 2 py - 0.5 rounded bg - yellow - 100 text - yellow - 800">Pending Verification</span>}
      </div>;
      <section className="space - y-4">;
        <h2 className="text - lg font - medium">Profile</h2>;
        <form on_submit={save_profile} className="grid grid - cols - 1 md:grid - cols - 2 gap - 4">;
          <div>;
            <label className="block text - sm mb - 1" html_for="input - Agency Name">Agency Name</label>;
            <input name="name" default_value={active_vendor.name} className="w - full border rounded px - 3 py - 2 bg - transparent" />;
          </div>;
          <div className="md:col - span - 2">;
            <label className="block text - sm mb - 1" html_for="input - About">About</label>;
            <textarea name="about" default_value={active_vendor.about || ''} rows={4} className="w - full border rounded px - 3 py - 2 bg - transparent" />;
          </div>;
          <div className="md:col - span - 2">;
            <label className="block text - sm mb - 1" html_for="input - Services Offered">Services Offered</label>;
            <input name="services_offered" default_value={active_vendor.services_offered?.join () || ''} className="w - full border rounded px - 3 py - 2 bg - transparent" />;
          </div>;
          <div className="md:col - span - 2">;
            <button className="px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black">Save</button>;
          </div>;
        </form>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - lg font - medium'>Publish Packages</h2>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 4'>;
            <div;
              key={p.id}
              className='border border - gray - 200 dark:border - gray - 800 rounded p - 4';
            >;
              <div className='font - medium'>{p.title}</div>;
              <div className='text - sm text - gray - 500'>{p.description}</div>;
              <div className='mt - 2 text - sm'>${p.price_usd}</div>;
            </div>))}
        </div>;
        <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 2 items - end'>;
          <input;
            placeholder='Title';
            value={pkg_title}
            on_change={e => setPkgTitle (e.target.value)}
            className='border rounded px - 3 py - 2 bg - transparent';
          />;
          <input;
            placeholder='Description';
            value={pkg_desc}
            on_change={e => setPkgDesc (e.target.value)}
            className='border rounded px - 3 py - 2 bg - transparent';
          />;
          <div className='flex gap - 2'>;
            <input;
              placeholder='Price (USD)';
              type='number';
              value={pkg_price}
              on_change={e => setPkgPrice (Number (e.target.value))}
              className='border rounded px - 3 py - 2 bg - transparent w - full';
            />;
            <button;
              on_click={add_package}
              className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black';
            >;
              Add;
            </button>          </div>;
        </div>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - lg font - medium'>Project Pipeline</h2>        <div className="grid grid - cols - 1 md:grid - cols - 3 gap - 2 items - end">;
          <input placeholder="Title" value={pkg_title} on_change={e => setPkgTitle (e.target.value)} className="border rounded px - 3 py - 2 bg - transparent" />;
          <input placeholder="Description" value={pkg_desc} on_change={e => setPkgDesc (e.target.value)} className="border rounded px - 3 py - 2 bg - transparent" />;
          <div className="flex gap - 2">;
            <input placeholder="Price (USD)" type="number" value={pkg_price} on_change={e => setPkgPrice (Number (e.target.value))} className="border rounded px - 3 py - 2 bg - transparent w - full" />;
            <button on_click={add_package} className="px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black">Add</button>;
        </div>;
      </section>;
      <section className='space - y-3'>;
        <h2 className='text - lg font - medium'>Project Pipeline</h2>;
        <Pipeline vendor_id={active_vendor.id} />;
      </section>;
      <div className='text - center text - xs text - gray - 500'>Powered by Zion</div>;
    </div>);        <Pipeline vendor_id={active_vendor.id} />;
      </section>;
      <div className="text - center text - xs text - gray - 500">Powered by Zion</div>;
    </div>);
}
/**
 * Pipeline - Function description
 */
function Pipeline() {
  const [items, set_items] = useState < any[]>([]);
;
  async /**
 * fetch_items - Function description
 */
function fetch_items() {
    const res = await fetch (
      `/api / vendors / pipeline?vendor_id=${encodeURIComponent (vendor_id)}`);
    const data = await res.json ();
    set_items (data.items || []);  }    const res = await fetch (`/api / vendors / pipeline?vendor_id=${encodeURIComponent (vendor_id)}`);
    const data = await res.json ();
    set_items (data.items || []);
  }
  async /**
 * change_status - Function description
 */
function change_status() {
    await fetch ('/api / vendors / update - pipeline', {
      method: 'POST',
      headers: { 'Content - Type': 'application / json' },
      body: JSON.stringify ({ item_id, status }),
    });
    fetch_items ();
;
  useEffect (() => {
    fetch_items ();
  }, []);
;
  return (
    <div className='space - y-2'>;
      {items.length === 0 && (
        <div className='text - sm text - gray - 500'>No leads yet.</div>)}
      {items.map (item => (
        <div;
          key={item.id}
          className='border border - gray - 200 dark:border - gray - 800 rounded p - 3 flex items - center justify - between';
        >;
          <div>;
            <div className='font - medium'>{item.title}</div>;
            <div className='text - xs text - gray - 500'>;
              {new Date (item.created_at).toLocaleString ()} • {item.status}
            </div>;
          </div>;
          <select;
            default_value={item.status}
            on_change={e => change_status (item.id, e.target.value)}
            className='border rounded px - 2 py - 1 bg - transparent text - sm';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            <option value='lead'>Lead</option>;
            <option value='qualified'>Qualified</option>;
            <option value='proposal'>Proposal</option>;
            <option value='in_progress'>In Progress</option>;
            <option value='complete'>Complete</option>;
            <option value='lost'>Lost</option>          </select>;
<<<<<<< HEAD
<<<<<<< HEAD
        </div>))}
    </div>          <select default_value={item.status} on_change={e => change_status (item.id, e.target.value)} className="border rounded px - 2 py - 1 bg - transparent text - sm">;
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <option value="lead">Lead</option>;
            <option value="qualified">Qualified</option>;
            <option value="proposal">Proposal</option>;
            <option value="in_progress">In Progress</option>;
            <option value="complete">Complete</option>;
            <option value="lost">Lost</option>;
<<<<<<< HEAD
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
=======



export const getServerSideProps: GetServerSideProps<Props> = async () => {;

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
=======
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later;
  return { props: { vendor } };
};  );
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
export const getServerSideProps: GetServerSideProps<Props> = async () => {
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null; // tie to auth later
  return { props: { vendor } }
};  )
}
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null; // tie to auth later;
  return { props: { vendor } };
};  );
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] || null, // tie to auth later;
  return { props: { vendor } }
<<<<<<< HEAD
};
}
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

    </div>
};
<<<<<<< HEAD
    </div>
=======
=======

export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../utils/vendor-store');
  const vendor = listVendors()[0] |null, // tie to auth later
  return { props: { vendor } }


    </div>


=======
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
