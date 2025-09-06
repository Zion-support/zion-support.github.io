import type { GetServerSideProps } from 'next';
import { FormEvent, useEffect, useState } from 'react';
import type { Vendor } from '../utils/vendor-types';

type Props = { vendor: Vendor | null };

export default function AgencyDashboardPage({ vendor }: Props) {
  const [activeVendor, setActiveVendor] = useState(vendor);
  const [pkgTitle, setPkgTitle] = useState('');
  const [pkgDesc, setPkgDesc] = useState('');
  const [pkgPrice, setPkgPrice] = useState<number | ''>('');

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
        formData.get('servicesOffered') ||
          activeVendor.servicesOffered?.join(',') ||
          ''
      )
        .split(',')
        .map(s => s.trim())
        .filter(Boolean),
    } as Vendor;
    // For MVP, update via direct API not implemented; keep local preview only
    setActiveVendor(updated);  }

  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return;

  }

  function addPackage() {
    if (!pkgTitle || !pkgPrice || !activeVendor) return;

          </div>
        </form>
      </section>

function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]);

  async function fetchItems() {
    const res = await fetch(
      `/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`
    );
    const data = await res.json();
    setItems(data.items || []);  }

  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
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
            <option value='lost'>Lost</option>          </select>
        </div>
      ))}
    </div>
          <select defaultValue={item.status} onChange={e => changeStatus(item.id, e.target.value)} className="border rounded px-2 py-1 bg-transparent text-sm">
            <option value="lead">Lead</option>
            <option value="qualified">Qualified</option>
            <option value="proposal">Proposal</option>
            <option value="in_progress">In Progress</option>
            <option value="complete">Complete</option>
            <option value="lost">Lost</option>

          </select>
        </div>
      ))}
    </div>