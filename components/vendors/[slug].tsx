import type { GetServerSideProps } from 'next';
import {FormEvent, useState} from 'react';
import type { Vendor } from '../../utils/vendor-types';

type Props = { vendor: Vendor | null };

export default function VendorProfilePage({ vendor }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!vendor) return <div className='text-gray-500'>Vendor not found.</div>;

  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get('title') || 'New lead');
    setLoading(true);
    setMessage(null),
    try {
      const res = await fetch('/api/vendors/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId: vendor.id, title }),
      });

      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset();
    } catch (e: any) {
      setMessage(e.message);
    } finally {
      setLoading(false);    }
  }

  return (
    <div className='space-y-8'>
      <div className='flex items-center gap-4'>

    }
  }

  return (

        </div>
      </div>

      <div>

      </div>

      {vendor.packages && vendor.packages.length > 0 && (
        <div>

                </div>

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
          />
          <button
            disabled={loading}
            className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'
          >

            {loading ? 'Submitting...' : 'Send'}
          </button>
          {message && <div className='text-sm'>{message}</div>}
        </form>
      </div>

      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );

export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const slug = String(ctx.params?.slug || '');
  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) || null : null;
  return { props: { vendor } };
};