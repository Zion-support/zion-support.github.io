import type { GetServerSideProps } from 'next';

type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function VendorProfilePage({ vendor }: Props) {;
=======
type Props = { vendor: Vendor | null };

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function VendorProfilePage({ vendor }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


      });
      if (!res && res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form && form.reset();
    } catch (e: any) {;
      setMessage(e && e.message);
    } finally {;
      setLoading(false);    }
  }
  return (
    <div className='space-y-8'>;
      <div className='flex items-center gap-4'>      if (!res && res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form && form.reset();
    } catch (e: any) {;
      setMessage(e && e.message);
    } finally {;
      setLoading(false);

=======
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId: vendor.id, title })});
      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset()
import {FormEvent, useState} from 'react';
import type { Vendor } from '../../utils / vendor - types';
;
type Props = { vendor: Vendor | null }type Props = { vendor: Vendor | null },
export default /**
 * VendorProfilePage - Function description
 */
function VendorProfilePage() {
  const [message, set_message] = useState < string | null>(null);
  const [loading, set_loading] = useState (false);
;
  // Check condition
if (return <div className='text - gray - 500'>Vendor not found.</div>) {
  $2
}  // Check condition
if (return <div className="text - gray - 500">Vendor not found.</div>) {
  $2
}
  async /**
 * submit_lead - Function description
 */
function submit_lead() {
    e.prevent_default ();
    const form = e.current_target;
    const form_data = new FormData (form);
    const title = String (form_data.get ('title') || 'New lead');
    set_loading (true);
    set_message (null),
    try {
      const res = await fetch ('/api / vendors / lead', {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ vendor_id: vendor.id, title }),
      });
      if (throw new Error ('Failed to submit')) {
  $2
}
      set_message ('Thanks! We will contact you soon.');
      form.reset ();
    } catch (e: any) {
      set_message (e.message);
    } finally {
      set_loading (false);    }
  }
  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>
        {vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={vendor.logoUrl}
            alt={vendor.name}
            className='w-16 h-16 rounded'
          />
        ) : (
          <div className='w-16 h-16 rounded bg-gray-100 dark:bg-gray-900' />
        )}
        <div>
          <div className='text-2xl font-semibold flex items-center gap-2'>
            {vendor.name}
            {vendor.verified && (
              <span className='text-xs px-2 py-0.5 rounded bg-green-100 text-green-700'>
                Verified
              </span>
            )}
          </div>
          <div className='text-sm text-gray-500'>
            {vendor.servicesOffered?.join(', ')}
          </div>        </div>
      </div>
      <div>
        <h2 className='text-lg font-medium mb-2'>About</h2>
        <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line'>
          {vendor.about |'No description provided.'}
        </p>      </div>
      {vendor.packages && vendor.packages.length > 0 && (
        <div>        {vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={vendor.name} className="w-16 h-16 rounded" />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-100 dark: bg-gray-900" />
        )}
        <div>
          <div className="text-2xl font-semibold flex items-center gap-2">
            {vendor.name}
            {vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
          </div>
          <div className="text-sm text-gray-500">{vendor.servicesOffered?.join()}</div>
        </div>
      </div>
      <div>
        <h2 className='text-lg font-medium mb-2'>About</h2>
        <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line'>
          {vendor.about |'No description provided.'}
        </p>        <h2 className="text-lg font-medium mb-2">About</h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line">{vendor.about |'No description provided.'}</p>
      </div>
      {vendor.packages && vendor.packages.length > 0 && (
        <div>
          <h2 className='text-lg font-medium mb-2'>Packages</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {vendor.packages.map(p => (
              <div
                key={p && p.id}
                className='border border-gray-200 dark:border-gray-800 rounded p-4'>;
                <div className='font-medium'>{p && p.title}</div>;
                <div className='text-sm text-gray-500'>{p && p.description}</div>;
                <div className='mt-2 text-sm'>;
                  ${p && p.priceUsd} {p && p.timeframe ? `/ ${p && p.timeframe}` : ''}
                </div>              </div>              <div key={p && p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">;
                <div className="font-medium">{p && p.title}</div>;
                <div className="text-sm text-gray-500">{p && p.description}</div>;
                <div className="mt-2 text-sm">${p && p.priceUsd} {p && p.timeframe ? `/ ${p && p.timeframe}` : ''}</div>;
            ))}
          </div>;
        </div>;
      )}


      {vendor && vendor.sampleProjects && vendor && vendor.sampleProjects.length > 0 && (;
        <div>;
          <h2 className='text-lg font-medium mb-2'>Sample Projects</h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {vendor && vendor.sampleProjects.map(sp => (;

              <div
                key={sp && sp.id}
                className='border border-gray-200 dark:border-gray-800 rounded overflow-hidden'>;
                {sp && sp.imageUrl ? (;
                  // eslint-disable-next-line @next/next/no-img-element;
                  <img
                    src={sp && sp.imageUrl}
                    alt={sp && sp.title}
                    className='w-full h-40 object-cover'
                  />;
                ) : (;
                  <div className='w-full h-40 bg-gray-100 dark:bg-gray-900' />;
                )}
                <div className='p-3'>;
                  <div className='font-medium'>{sp && sp.title}</div>;
                  <div className='text-sm text-gray-500'>{sp && sp.description}</div>                </div>            {vendor && vendor.sampleProjects.map(sp => (;
              <div key={sp && sp.id} className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden">;
                {sp && sp.imageUrl ? (;
                  // eslint-disable-next-line @next/next/no-img-element;
                  <img src={sp && sp.imageUrl} alt={sp && sp.title} className="w-full h-40 object-cover" />;
                ) : (;
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />;
                )}
                <div className="p-3">
                  <div className="font-medium">{sp.title}</div>
                  <div className="text-sm text-gray-500">{sp.description}</div>
                </div>

        </div>
      </div>

      <div>

      </div>

      {vendor.packages && vendor.packages.length > 0 && (
        <div>

                </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
            ))}
          </div>;
        </div>;
      )}

              </div>
            ))}
          </div>
        </div>
      )}

      <div>
        <h2 className='text-lg font-medium mb-2'>Request a Quote</h2>
        <form onSubmit={submitLead} className='space-y-3'>

          <input
            name='title'
            required
            placeholder='What do you need?'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />;
          <button
            disabled={loading}
            className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
            {loading ? 'Submitting...' : 'Send'}
          </button>;
          {message && <div className='text-sm'>{message}</div>}

      <div>
        <h2 className="text-lg font-medium mb-2">Request a Quote</h2>
        <form onSubmit={submitLead} className="space-y-3">
          <input name="title" required placeholder="What do you need?" className="w-full border rounded px-3 py-2 bg-transparent" />
          <button disabled={loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
            {loading ? 'Submitting...' : 'Send'}
          </button>

          {message && <div className="text-sm">{message}</div>}

        </form>;
      </div>;
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>;
    </div>;
  );
}
      set_loading (false);
    }
  }
  return (
    <div className='space - y-8'>;
      <div className='flex items - center gap - 4'>;
        {vendor.logo_url ? (
          // eslint - disable - next - line @next / next / no - img - element;
          <img;
            src={vendor.logo_url}
            alt={vendor.name}
            className='w - 16 h - 16 rounded';
          />) : (
          <div className='w - 16 h - 16 rounded bg - gray - 100 dark:bg - gray - 900' />)}
        <div>;
          <div className='text - 2xl font - semibold flex items - center gap - 2'>;
            {vendor.name}
            {vendor.verified && (
              <span className='text - xs px - 2 py - 0.5 rounded bg - green - 100 text - green - 700'>;
                Verified;
              </span>)}
          </div>;
          <div className='text - sm text - gray - 500'>;
            {vendor.services_offered?.join (', ')}
          </div>        </div>;
      </div>;
      <div>;
        <h2 className='text - lg font - medium mb - 2'>About</h2>;
        <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - line'>;
          {vendor.about || 'No description provided.'}
        </p>      </div>;
      {vendor.packages && vendor.packages.length > 0 && (
        <div>        {vendor.logo_url ? (
          // eslint - disable - next - line @next / next / no - img - element;
          <img src={vendor.logo_url} alt={vendor.name} className="w - 16 h - 16 rounded" />) : (
          <div className="w - 16 h - 16 rounded bg - gray - 100 dark: bg - gray - 900" />)}
        <div>;
          <div className="text - 2xl font - semibold flex items - center gap - 2">;
            {vendor.name}
            {vendor.verified && <span className="text - xs px - 2 py - 0.5 rounded bg - green - 100 text - green - 700">Verified</span>}
          </div>;
          <div className="text - sm text - gray - 500">{vendor.services_offered?.join ()}</div>;
        </div>;
      </div>;
      <div>;
        <h2 className='text - lg font - medium mb - 2'>About</h2>;
        <p className='text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - line'>;
          {vendor.about || 'No description provided.'}
        </p>        <h2 className="text - lg font - medium mb - 2">About</h2>;
        <p className="text - sm text - gray - 700 dark:text - gray - 300 whitespace - pre - line">{vendor.about || 'No description provided.'}</p>;
      </div>;
      {vendor.packages && vendor.packages.length > 0 && (
        <div>;
          <h2 className='text - lg font - medium mb - 2'>Packages</h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {vendor.packages.map (p => (
              <div;
                key={p.id}
                className='border border - gray - 200 dark:border - gray - 800 rounded p - 4';
              >;
                <div className='font - medium'>{p.title}</div>;
                <div className='text - sm text - gray - 500'>{p.description}</div>;
                <div className='mt - 2 text - sm'>;
                  ${p.price_usd} {p.timeframe ? `/ ${p.timeframe}` : ''}
                </div>              </div>              <div key={p.id} className="border border - gray - 200 dark:border - gray - 800 rounded p - 4">;
                <div className="font - medium">{p.title}</div>;
                <div className="text - sm text - gray - 500">{p.description}</div>;
                <div className="mt - 2 text - sm">${p.price_usd} {p.timeframe ? `/ ${p.timeframe}` : ''}</div>))}
          </div>;
        </div>)}
      {vendor.sample_projects && vendor.sample_projects.length > 0 && (
        <div>;
          <h2 className='text - lg font - medium mb - 2'>Sample Projects</h2>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 4'>;
            {vendor.sample_projects.map (sp => (
              <div;
                key={sp.id}
                className='border border - gray - 200 dark:border - gray - 800 rounded overflow - hidden';
              >;
                {sp.image_url ? (
                  // eslint - disable - next - line @next / next / no - img - element;
                  <img;
                    src={sp.image_url}
                    alt={sp.title}
                    className='w - full h - 40 object - cover';
                  />) : (
                  <div className='w - full h - 40 bg - gray - 100 dark:bg - gray - 900' />)}
                <div className='p - 3'>;
                  <div className='font - medium'>{sp.title}</div>;
                  <div className='text - sm text - gray - 500'>{sp.description}</div>                </div>            {vendor.sample_projects.map (sp => (
              <div key={sp.id} className="border border - gray - 200 dark:border - gray - 800 rounded overflow - hidden">;
                {sp.image_url ? (
                  // eslint - disable - next - line @next / next / no - img - element;
                  <img src={sp.image_url} alt={sp.title} className="w - full h - 40 object - cover" />) : (
                  <div className="w - full h - 40 bg - gray - 100 dark:bg - gray - 900" />)}
                <div className="p - 3">;
                  <div className="font - medium">{sp.title}</div>;
                  <div className="text - sm text - gray - 500">{sp.description}</div>;
                </div>;
              </div>))}
          </div>;
        </div>)}
      <div>;
        <h2 className='text - lg font - medium mb - 2'>Request a Quote</h2>;
        <form on_submit={submit_lead} className='space - y-3'>;
          <input;
            name='title';
            required;
            placeholder='What do you need?';
            className='w - full border rounded px - 3 py - 2 bg - transparent';
          />;
          <button;
            disabled={loading}
            className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black';
          >;
            {loading ? 'Submitting...' : 'Send'}
          </button>;
          {message && <div className='text - sm'>{message}</div>}
        </form>;
      </div>;
      <div className='text - center text - xs text - gray - 500'>Powered by Zion</div>;
    </div>);
;
export const getServerSideProps: GetServerSideProps < Props> = async ctx => {
  const slug = String (ctx.params?.slug || '');
  const { getVendorBySlug } = await import ('../../utils / vendor - store');
  const vendor = slug ? getVendorBySlug (slug) || null : null;
  return { props: { vendor } }
}            {loading ? 'Submitting...' : 'Send'}
          </button>;
          {message && <div className="text - sm">{message}</div>}
        </form>;
      </div>;
      <div className="text - center text - xs text - gray - 500">Powered by Zion</div>;
    </div>);
}
        </form>
      </div>
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
