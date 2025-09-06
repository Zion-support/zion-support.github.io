import type { GetServerSideProps } from 'next'
import { FormEvent, useEffect, useState } from 'react',
import type { Vendor } from '../utils/vendor-types'
type Props = { vendor: Vendor | null },

export default function AgencyDashboardPage({ vendor }: Props) {
  const [activeVendor, setActiveVendor] = useState(vendor),
  const [pkgTitle, setPkgTitle] = useState(''),
  const [pkgDesc, setPkgDesc] = useState(''),
  const [pkgPrice, setPkgPrice] = useState<number | ''>(''),

  if (!activeVendor) return <div className="text-gray-500">No vendor found. Please apply first.</div>,

export default function AgencyDashboardPage(_{_vendor}: Props) {_const [activeVendor, _setActiveVendor] = useState(vendor);
  const [pkgTitle, _setPkgTitle] = useState('');
  const [pkgDesc, _setPkgDesc] = useState('');
  const [pkgPrice, _setPkgPrice] = useState<number | ''>('');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
        .filter(Boolean)} as Vendor,
    // For MVP, update via direct API not implemented, keep local preview only
    setActiveVendor(updated)
  }

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
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-1">Services Offered</label>
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
          </div>
          <div className=&quot;md:col-span-2&quot;>
            <button className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>Save</button>
          </div>
        </form>
      </section>

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
          </div>
        </div>
      </section>

      <section className=&quot;space-y-3&quot;>
        <h2 className=&quot;text-lg font-medium&quot;>Project Pipeline</h2>
        <Pipeline vendorId={activeVendor.id} />
      </section>

      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  )
}

function Pipeline({ vendorId }: { vendorId: string }) {
  const [items, setItems] = useState<any[]>([]),

  async function fetchItems() {
    const res = await fetch(`/api/vendors/pipeline?vendorId=${encodeURIComponent(vendorId)}`)
    const data = await res.json()
    setItems(data.items || [])
  }

  async function changeStatus(itemId: string, status: string) {
    await fetch('/api/vendors/update-pipeline', {
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

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../utils/vendor-store')
  const vendor = listVendors()[0] || null, // tie to auth later
  return { props: { vendor } }
