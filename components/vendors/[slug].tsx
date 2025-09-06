import type { GetServerSideProps } from 'next';

export default function VendorProfilePage({ vendor }: Props) {
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },;
export default function VendorProfilePage(): any ({ vendor }: Props) {;
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  if (!vendor) return <div className='text-gray-500'>Vendor not found.</div>;  if (!vendor) return <div className="text-gray-500">Vendor not found.</div>;
  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get('title') |'New lead');
    setLoading(true);
    setMessage(null)
    try {
      const res = await fetch('/api/vendors/lead', {
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
                <div className="p-3">;
                  <div className="font-medium">{sp && sp.title}</div>;
                  <div className="text-sm text-gray-500">{sp && sp.description}</div>;
                </div>;
              </div>;
        </div>
      </div>




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
  );
export const getServerSideProps: GetServerSideProps<Props> = async ctx => {
  const slug = String(ctx.params?.slug |'');
  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) |null : null;
  return { props: { vendor } }
};            {loading ? 'Submitting...' : 'Send'}
          </button>;
          <h2 className="text-lg font-medium mb-2">Sample Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendor.sampleProjects.map(sp => (
              <div key={sp.id} className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden">
                {sp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={sp.imageUrl} alt={sp.title} className="w-full h-40 object-cover" />
                ) : (
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />
                )}
                <div className="p-3">
                  <div className="font-medium">{sp.title}</div>
                  <div className="text-sm text-gray-500">{sp.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
export const getServerSideProps: GetServerSideProps<Props> = async ctx => {;
  const slug = String(ctx && ctx.params?.slug || '');
  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) || null : null;
  return { props: { vendor } };
};            {loading ? 'Submitting...' : 'Send'}
  );
}
export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug |'');
        </form>
      </div>
      <div className='text-center text-xs text-gray-500'>Powered by Zion</div>
    </div>
  );

  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) |null : null;
  return { props: { vendor } }
}

  const vendor = slug ? getVendorBySlug(slug) || null : null;
  return { props: { vendor } };
};
};
