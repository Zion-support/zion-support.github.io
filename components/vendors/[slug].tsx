<<<<<<< HEAD
import type { GetServerSideProps } from 'next',
import { FormEvent, useState } from 'react',
import type { Vendor } from '../../utils/vendor-types',
type Props = { vendor: Vendor | null },

export default function VendorProfilePage({ vendor }: Props) {
  const [message, setMessage] = useState<string | null>(null),
  const [loading, setLoading] = useState(false),
=======
import type {_GetServerSideProps} from 'next';
import type {_Vendor} from '../../utils/vendor-types';

type Props = {_vendor: Vendor | null};

export default function VendorProfilePage(_{_vendor}: Props) {_const [message, _setMessage] = useState<string | null>(null);
  const [loading, _setLoading] = useState(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
  if (!vendor) return <div className="text-gray-500">Vendor not found.</div>,
=======
  if (!vendor) return <div className=&quot;text-gray-500&quot;>Vendor not found.</div>;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

<<<<<<< HEAD
  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(),
    const form = e.currentTarget,
    const formData = new FormData(form),
    const title = String(formData.get('title') || 'New lead'),
    setLoading(true),
    setMessage(null),
    try {
      const res = await fetch('/api/vendors/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId: vendor.id, title })}),
      if (!res.ok) throw new Error('Failed to submit'),
      setMessage('Thanks! We will contact you soon.'),
      form.reset()
    } catch (e: any) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=&quot;space-y-8&quot;>
      <div className=&quot;flex items-center gap-4&quot;>
        {vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={vendor.name} className=&quot;w-16 h-16 rounded&quot; />
=======
  async function submitLead(_e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const _form = e.currentTarget;
    const _formData = new FormData(form);
    const _title = String(formData.get('title') || 'New lead');
    setLoading(true);
    setMessage(null);
    try {
      const _res = await fetch('/api/vendors/lead', _{
        method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_vendorId: vendor.id, _title})});
      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset();
    } catch (e: unknown) {_setMessage(e.message);} finally {_setLoading(false);}
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        {_vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={_vendor.name} className="w-16 h-16 rounded" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        ) : (
          <div className=&quot;w-16 h-16 rounded bg-gray-100 dark:bg-gray-900&quot; />
        )}
        <div>
<<<<<<< HEAD
          <div className=&quot;text-2xl font-semibold flex items-center gap-2&quot;>
            {vendor.name}
            {vendor.verified && <span className=&quot;text-xs px-2 py-0.5 rounded bg-green-100 text-green-700&quot;>Verified</span>}
          </div>
<<<<<<< HEAD
          <div className="text-sm text-gray-500">{vendor.servicesOffered?.join()}</div>
=======
          <div className=&quot;text-sm text-gray-500&quot;>{vendor.servicesOffered?.join(', ')}</div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
          <div className="text-2xl font-semibold flex items-center gap-2">
            {_vendor.name}
            {_vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
          </div>
          <div className="text-sm text-gray-500">{_vendor.servicesOffered?.join(', _')}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
      </div>

      <div>
<<<<<<< HEAD
        <h2 className=&quot;text-lg font-medium mb-2&quot;>About</h2>
        <p className=&quot;text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line&quot;>{vendor.about || 'No description provided.'}</p>
=======
        <h2 className="text-lg font-medium mb-2">About</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{_vendor.about || 'No description provided.'}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      </div>

      {_vendor.packages && vendor.packages.length > 0 && (
        <div>
          <h2 className=&quot;text-lg font-medium mb-2&quot;>Packages</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {vendor.packages.map(p => (
<<<<<<< HEAD
              <div key={p.id} className=&quot;border border-gray-200 dark:border-gray-800 rounded p-4&quot;>
                <div className=&quot;font-medium&quot;>{p.title}</div>
                <div className=&quot;text-sm text-gray-500&quot;>{p.description}</div>
                <div className=&quot;mt-2 text-sm&quot;>${p.priceUsd} {p.timeframe ? `/ ${p.timeframe}` : ''}</div>
=======
              <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
                <div className="font-medium">{_p.title}</div>
                <div className="text-sm text-gray-500">{_p.description}</div>
                <div className="mt-2 text-sm">${_p.priceUsd} {_p.timeframe ? `/ ${p.timeframe}` : ''}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </div>
            ))}
          </div>
        </div>
      )}

      {_vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div>
          <h2 className=&quot;text-lg font-medium mb-2&quot;>Sample Projects</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4&quot;>
            {vendor.sampleProjects.map(sp => (
<<<<<<< HEAD
              <div key={sp.id} className=&quot;border border-gray-200 dark:border-gray-800 rounded overflow-hidden&quot;>
                {sp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sp.imageUrl} alt={sp.title} className=&quot;w-full h-40 object-cover&quot; />
=======
              <div key={sp.id} className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                {_sp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sp.imageUrl} alt={_sp.title} className="w-full h-40 object-cover" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ) : (
                  <div className=&quot;w-full h-40 bg-gray-100 dark:bg-gray-900&quot; />
                )}
<<<<<<< HEAD
                <div className=&quot;p-3&quot;>
                  <div className=&quot;font-medium&quot;>{sp.title}</div>
                  <div className=&quot;text-sm text-gray-500&quot;>{sp.description}</div>
=======
                <div className="p-3">
                  <div className="font-medium">{_sp.title}</div>
                  <div className="text-sm text-gray-500">{_sp.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div>
<<<<<<< HEAD
        <h2 className=&quot;text-lg font-medium mb-2&quot;>Request a Quote</h2>
        <form onSubmit={submitLead} className=&quot;space-y-3&quot;>
          <input name=&quot;title&quot; required placeholder=&quot;What do you need?&quot; className=&quot;w-full border rounded px-3 py-2 bg-transparent&quot; />
          <button disabled={loading} className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>
            {loading ? 'Submitting...' : 'Send'}
          </button>
          {message && <div className=&quot;text-sm&quot;>{message}</div>}
=======
        <h2 className="text-lg font-medium mb-2">Request a Quote</h2>
        <form onSubmit={_submitLead} className="space-y-3">
          <input name="title" required placeholder="What do you need?" className="w-full border rounded px-3 py-2 bg-transparent" />
          <button disabled={_loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
            {_loading ? 'Submitting...' : 'Send'}
          </button>
          {_message && <div className="text-sm">{message}</div>}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </form>
      </div>

      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion</div>
    </div>
  )
}

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || ''),
  const { getVendorBySlug } = await import('../../utils/vendor-store'),
  const vendor = slug ? getVendorBySlug(slug) || null : null,
  return { props: { vendor } }
},
=======
export const getServerSideProps: GetServerSideProps<Props> = async (_ctx) => {_const _slug = String(ctx.params?.slug || '');
  const { getVendorBySlug} = await import('../../utils/vendor-store');
  const _vendor = slug ? getVendorBySlug(slug) || null : null;
  return {_props: { vendor} };
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
