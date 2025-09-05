<<<<<<< HEAD
import type { GetServerSideProps } from 'next',
import { FormEvent, useEffect, useState } from 'react',
import type { Vendor } from '../utils/vendor-types',
type Props = { vendor: Vendor | null },

export default function AgencyDashboardPage({ vendor }: Props) {
  const [activeVendor, setActiveVendor] = useState(vendor),
  const [pkgTitle, setPkgTitle] = useState(''),
  const [pkgDesc, setPkgDesc] = useState(''),
  const [pkgPrice, setPkgPrice] = useState<number | ''>(''),
=======
import type {_GetServerSideProps} from 'next';
import type {_Vendor} from '../utils/vendor-types';

type Props = {_vendor: Vendor | null};

export default function AgencyDashboardPage(_{_vendor}: Props) {_const [activeVendor, _setActiveVendor] = useState(vendor);
  const [pkgTitle, _setPkgTitle] = useState('');
  const [pkgDesc, _setPkgDesc] = useState('');
  const [pkgPrice, _setPkgPrice] = useState<number | ''>('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>,
=======
  if (!activeVendor) return <div className=&quot;text-gray-500&quot;>No vendor found. Please apply first.</div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  async function saveProfile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(),
    const formData = new FormData(e.currentTarget),
    const updated = {
      ...activeVendor,
      name: String(formData.get('name') || activeVendor.name),
      about: String(formData.get('about') || activeVendor.about || ''),
      servicesOffered: String(formData.get('servicesOffered') || activeVendor.servicesOffered?.join() || '')
        .split()
=======
  async function saveProfile(_e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const _formData = new FormData(e.currentTarget);
    const _updated = {
      ...activeVendor, _name: String(formData.get('name') || activeVendor.name), _about: String(formData.get('about') || activeVendor.about || ''), _servicesOffered: String(formData.get('servicesOffered') || activeVendor.servicesOffered?.join(', _') || '')
        .split(', _')
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        .map(s => s.trim())
        .filter(Boolean)} as Vendor,
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }

<<<<<<< HEAD
  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return,
    const packages = [...(activeVendor.packages || []), {
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}],
    setActiveVendor({ ...activeVendor, packages }),
    setPkgTitle(''),
    setPkgDesc(''),
    setPkgPrice('')
  }

  return (
    <div className=&quot;space-y-8&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Agency Dashboard</h1>
        {!activeVendor.verified && <span className=&quot;text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800&quot;>Pending Verification</span>}
      </div>

      <section className=&quot;space-y-4&quot;>
        <h2 className=&quot;text-lg font-medium&quot;>Profile</h2>
        <form onSubmit={saveProfile} className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
            <label className=&quot;block text-sm mb-1&quot;>Agency Name</label>
            <input name=&quot;name&quot; defaultValue={activeVendor.name} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
          </div>
          <div className=&quot;md:col-span-2&quot;>
            <label className=&quot;block text-sm mb-1&quot;>About</label>
            <textarea name=&quot;about&quot; defaultValue={activeVendor.about || ''} rows={4} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
=======
  function addPackage() {_if (!pkgTitle || !pkgPrice || !activeVendor) return;
    const _packages = [...(activeVendor.packages || []), _{
      id: `pkg_${Date.now()}`,
      title: pkgTitle,
      description: pkgDesc,
      priceUsd: Number(pkgPrice)}];
    setActiveVendor({_...activeVendor, _packages});
    setPkgTitle('');
    setPkgDesc('');
    setPkgPrice('');
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Agency Dashboard</h1>
        {_!activeVendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-yellow-100 text-yellow-800">Pending Verification</span>}
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-medium">Profile</h2>
        <form onSubmit={_saveProfile} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1">Agency Name</label>
            <input name="name" defaultValue={_activeVendor.name} className="w-full border rounded px-3 py-2 bg-transparent" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">About</label>
            <textarea name="about" defaultValue={_activeVendor.about || ''} rows={_4} className="w-full border rounded px-3 py-2 bg-transparent" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
<<<<<<< HEAD
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Services Offered</label>
<<<<<<< HEAD
            <input name="servicesOffered" defaultValue={activeVendor.servicesOffered?.join() || ''} className="w-full border rounded px-3 py-2 bg-transparent" />
=======
          <div className=&quot;md:col-span-2&quot;>
            <label className=&quot;block text-sm mb-1&quot;>Services Offered</label>
            <input name=&quot;servicesOffered&quot; defaultValue={activeVendor.servicesOffered?.join(', ') || ''} className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
            <input name="servicesOffered" defaultValue={_activeVendor.servicesOffered?.join(', _') || ''} className="w-full border rounded px-3 py-2 bg-transparent" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
          <div className=&quot;md:col-span-2&quot;>
            <button className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>Save</button>
          </div>
        </form>
      </section>

<<<<<<< HEAD
      <section className=&quot;space-y-3&quot;>
        <h2 className=&quot;text-lg font-medium&quot;>Publish Packages</h2>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-4&quot;>
          {(activeVendor.packages || []).map(p => (
            <div key={p.id} className=&quot;border border-gray-200 dark:border-gray-800 rounded p-4&quot;>
              <div className=&quot;font-medium&quot;>{p.title}</div>
              <div className=&quot;text-sm text-gray-500&quot;>{p.description}</div>
              <div className=&quot;mt-2 text-sm&quot;>${p.priceUsd}</div>
            </div>
          ))}
        </div>
        <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-2 items-end&quot;>
          <input placeholder=&quot;Title&quot; value={pkgTitle} onChange={e => setPkgTitle(e.target.value)} className=&quot;border rounded px-3 py-2 bg-transparent&quot; />
          <input placeholder=&quot;Description&quot; value={pkgDesc} onChange={e => setPkgDesc(e.target.value)} className=&quot;border rounded px-3 py-2 bg-transparent&quot; />
          <div className=&quot;flex gap-2&quot;>
            <input placeholder=&quot;Price (USD)&quot; type=&quot;number&quot; value={pkgPrice} onChange={e => setPkgPrice(Number(e.target.value))} className=&quot;border rounded px-3 py-2 bg-transparent w-full&quot; />
            <button onClick={addPackage} className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>Add</button>
=======
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Publish Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {_(activeVendor.packages || []).map(p => (
            <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
              <div className="font-medium">{_p.title}</div>
              <div className="text-sm text-gray-500">{_p.description}</div>
              <div className="mt-2 text-sm">${_p.priceUsd}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-end">
          <input placeholder="Title" value={_pkgTitle} onChange={_e => setPkgTitle(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <input placeholder="Description" value={_pkgDesc} onChange={_e => setPkgDesc(e.target.value)} className="border rounded px-3 py-2 bg-transparent" />
          <div className="flex gap-2">
            <input placeholder="Price (USD)" type="number" value={_pkgPrice} onChange={_e => setPkgPrice(Number(e.target.value))} className="border rounded px-3 py-2 bg-transparent w-full" />
            <button onClick={_addPackage} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Add</button>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className=&quot;space-y-3&quot;>
        <h2 className=&quot;text-lg font-medium&quot;>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
=======
      <section className="space-y-3">
        <h2 className="text-lg font-medium">Project Pipeline</h2>
        <Pipeline vendorId={_activeVendor.id} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </section>

      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  )
}

<<<<<<< HEAD
function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]),

  async function fetchItems() {
    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`),
    const data = await res.json(),
    setItems(data.items || [])
  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ itemId, status })}),
    fetchItems()
  }

  useEffect(() => { fetchItems() }, []),

  return (
    <div className=&quot;space-y-2&quot;>
      {items.length === 0 && <div className=&quot;text-sm text-gray-500&quot;>No leads yet.</div>}
      {items.map(item => (
        <div key={item.id} className=&quot;border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between&quot;>
          <div>
            <div className=&quot;font-medium&quot;>{item.title}</div>
            <div className=&quot;text-xs text-gray-500&quot;>{new Date(item.createdAt).toLocaleString()} • {item.status}</div>
          </div>
          <select defaultValue={item.status} onChange={e => changeStatus(item.id, e.target.value)} className=&quot;border rounded px-2 py-1 bg-transparent text-sm&quot;>
            <option value=&quot;lead&quot;>Lead</option>
            <option value=&quot;qualified&quot;>Qualified</option>
            <option value=&quot;proposal&quot;>Proposal</option>
            <option value=&quot;in_progress&quot;>In Progress</option>
            <option value=&quot;complete&quot;>Complete</option>
            <option value=&quot;lost&quot;>Lost</option>
=======
function Pipeline(_{_vendorId}: {_vendorId: string}) {_const [items, _setItems] = useState<any[]>([]);

  async function fetchItems() {
    const _res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`);
    const _data = await res.json();
    setItems(data.items || []);
  }

  async function changeStatus(_itemId: string, _status: string) {_await fetch('/api/vendors/update-pipeline', _{
      method: 'POST', _headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({_itemId, _status})});
    fetchItems();
  }

  useEffect__(() => {_fetchItems();}, []);

  return (
    <div className="space-y-2">
      {_items.length === 0 && <div className="text-sm text-gray-500">No leads yet.</div>}
      {_items.map(item => (
        <div key={item.id} className="border border-gray-200 dark:border-gray-800 rounded p-3 flex items-center justify-between">
          <div>
            <div className="font-medium">{_item.title}</div>
            <div className="text-xs text-gray-500">{_new Date(item.createdAt).toLocaleString()} • {_item.status}</div>
          </div>
          <select defaultValue={_item.status} onChange={_e => changeStatus(item.id, _e.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="in_progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="lost">Lost</option>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </select>
        </div>
      ))}
    </div>
  )
}

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store'),
  const vendor = listVendors()[0] || null, // tie to auth later
  return { props: { vendor } }
},
=======
export const getServerSideProps: GetServerSideProps<Props> = async () => {_const { listVendors} = await import('../utils/vendor-store');
  const _vendor = listVendors()[0] || null; // tie to auth later
  return {_props: { vendor} };
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
