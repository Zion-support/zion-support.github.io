<<<<<<< HEAD


=======
import type { GetServerSideProps } from 'next';'


import { FormEvent, useState } from 'react';'
import type { Vendor } from '../../utils/vendor-types';'

type Props = any;
  async function submitLead() {
    }
    e.preventDefault();

const formData = new FormData(form);


export default function VendorProfilePage({ vendor }: Props) {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  if (!vendor) return <div className="text-gray-500">Vendor not found.</div>;

  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get('title') || 'New lead');
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch('/api/vendors/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vendorId: vendor.id, title })});
      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset()
    } catch (e: any) {
      setMessage(e.message)
    e.preventDefault();

const form = e.currentTarget;

const formData = new FormData(form);

const title = String(formData.get('title') |'New lead');'
    setLoading(true);
    setMessage(null);
    e.preventDefault($2);
    const form = $2;
    const formData = new FormData($2);
    const title = $2;
    setLoading($2);
    setMessage($2);
    try {

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        {vendor.logoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={vendor.name} className="w-16 h-16 rounded" />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-100 dark:bg-gray-900" />
        )}
        <div>
          <div className="text-2xl font-semibold flex items-center gap-2">
            {vendor.name}
          // eslint-disable-next-line @next/next/no-img-element
          <img src={vendor.logoUrl} alt={vendor.name} className="w-16 h-16 rounded" />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-100 dark: bg-gray-900" />
        )}
        <div>
          <div className="text-2xl font-semibold flex items-center gap-2">
            {vendor.name}
            {vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
export default function VendorProfilePage() { return null; }
type Props = { vendor: Vendor | null };

export default function VendorProfilePage({ vendor }: Props) {};
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function VendorProfilePage() { return null; }
type Props = { vendor: Vendor | null };


export default function VendorProfilePage({ vendor }: Props) {};
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
import { FormEvent, useState } from 'react';
import type { Vendor } from '../../utils/vendor-types';
type Props = any;
origin/cursor/automate-test-improve-and-merge-code-2533
  async function submitLead(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);'
    const title = String(formData.get('title') |'New lead');
    setLoading(true);
    setMessage(null)
    try {}
          // eslint-disable-next-line @next/next/no-img-element;
          <img src={vendor.logoUrl} alt={vendor.name} className="w-16 h-16 rounded" />
        ) : ("
          <div className="w-16 h-16 rounded bg-gray-100 dark: bg-gray-900" />
        )}
        <div>"
          <div className="text-2xl font-semibold flex items-center gap-2">
            {vendor.name}"
            {vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
      const res = await fetch('/api/vendors/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ vendorId: vendor.id, title }),
      });
      if (!res.ok) throw new Error('Failed to submit');'
      setMessage('Thanks! We will contact you soon.');'
      form.reset();
    } catch ("e": any) {
      }
      setMessage(e.message);
    } finally {
      setLoading(false)
    }

>>>>>>> origin/cursor/delete-old-data-records-6bba
type Props = { vendor: Vendor | null };type Props = { vendor: Vendor | null },
export default function VendorProfilePage({ vendor }: Props) {;
type Props = { vendor: Vendor | null };

export default function VendorProfilePage({ vendor }: Props) {
<<<<<<< HEAD

  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

=======
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
>>>>>>> origin/cursor/delete-old-data-records-6bba

    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const title = String(formData.get('title') |New lead);
    setLoading(true);
    setMessage(null)
    try {}
          // eslint-disable-next-line @next/next/no-img-element;
          <img src={vendor.logoUrl} alt={vendor.name} className="w-16 h-16 rounded />
        ) : (
          <div className="w-16 h-16 rounded bg-gray-100 dark: bg-gray-900" />
        )}
        <div>
          <div className=text-2xl font-semibold flex items-center gap-2">
            {vendor.name}"
            {vendor.verified && <span className=text-xs px-2 py-0.5 rounded bg-green-100 text-green-700>Verified</span>}

<<<<<<< HEAD

              <div
          </div>;
          <div className='text-sm text-gray-500'>;
            {vendor.servicesOffered?.join(', ')}</div>;
        </div>;
      </div>;
      <div>;
              <div;
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

=======
        </div>
      </div>
      <div>
            {vendor.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
          </div>
          <div className="text-sm text-gray-500">{vendor.servicesOffered?.join()}</div>
        </div>

<h2 className='text-lg font-medium mb-2'>About</h2>'
        <p className='text-sm text-gray-700 "dark": text-gray-300 whitespace-pre-line'>'
          {vendor.about || 'No description provided.'}'
        </p>
origin/cursor/automate-test-improve-and-merge-code-2533
      </div>

      <div>

      </div>

      {vendor.packages && vendor.packages.length > 0 && (
        <div>

const title = String(formData.get('title') |'New lead');'
    setLoading(true);
    setMessage(null);
    e.preventDefault($2);
    const form = $2;
    const formData = new FormData($2);
    const title = $2;
    setLoading($2);
    setMessage($2);
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
    <div className='space - y-8'>;
      <div className='flex items - center gap - 4'>      if (throw new Error ('Failed to submit')) {
  $2
}
      set_message ('Thanks! We will contact you soon.');
      form.reset ();
>>>>>>> origin/cursor/delete-old-data-records-6bba

                key={sp && sp.id}
                className='border border-gray-200 dark:border-gray-800 rounded overflow-hidden'>;
                {sp && sp.imageUrl ? (// eslint-disable-next-line @next/next/no-img-element;
                  <img;
                    src={sp && sp.imageUrl}
                    alt={sp && sp.title}
                    className='w-full h-40 object-cover';
                  />;
                ) : (<div className='w-full h-40 bg-gray-100 dark:bg-gray-900' />;
                )}
                <div className='p-3'>;
                  <div className='font-medium'>{sp && sp.title}</div>;
                  <div className='text-sm text-gray-500'>{sp && sp.description}</div>                </div>            {vendor && vendor.sampleProjects.map(sp => (<div key={sp && sp.id} className="border border-gray-200 dark:border-gray-800 rounded overflow-hidden">;
                {sp && sp.imageUrl ? (// eslint-disable-next-line @next/next/no-img-element;
                  <img src={sp && sp.imageUrl} alt={sp && sp.title} className="w-full h-40 object-cover" />;
<<<<<<< HEAD

                ) : (;
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />;
                )}
                <div className="p-3">;
                  <div className="font-medium">{sp && sp.title}</div>;
                  <div className="text-sm text-gray-500">{sp && sp.description}</div>;
                </div>;
              </div>;

            ))}
          </div>;
        </div>;
      )}


=======
                ) : (<div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />;
                )}</div>;
<h2 className='text-lg font-medium mb-2'>About</h2>;
        <p className='text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line'>;
          {vendor.about || 'No description provided.'}
        </p>;
      </div>;
      <div></div>;
      {vendor.packages && vendor.packages.length > 0 && (<div>;
<h2 className='text-lg font-medium mb-2'>Packages</h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>;
            {vendor.packages.map(p => (<div;
                key={p.id}
                className='border border-gray-200 dark:border-gray-800 rounded p-4';
              >;
                <div className='font-medium'>{p.title}</div>;
                <div className='text-sm text-gray-500'>{p.description}</div>;
                <div className='mt-2 text-sm'>;
                  ${p.priceUsd} {p.timeframe ? `/ ${p.timeframe}` : ''}
          <h2 className="text-lg font-medium mb-2">Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vendor.packages.map(p => (
              <div key={p.id} className="border border-gray-200 dark:border-gray-800 rounded p-4">
                <div className="font-medium">{p.title}</div>
                <div className="text-sm text-gray-500">{p.description}</div>
                <div className="mt-2 text-sm">${p.priceUsd} {p.timeframe ? `/ ${p.timeframe}` : ''}</div>
              </div>
            ))}
          </div>
      )}

      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div>
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
            ))}
          </div>
      )}
                ) : (;
                  <div className="w-full h-40 bg-gray-100 dark:bg-gray-900" />;
                )}

>>>>>>> origin/cursor/delete-old-data-records-6bba

      const res = await fetch('/api/vendors/lead', {
        method: 'POST',}
  headers: { 'Content-Type': 'application/json',}
},
body: JSON.stringify({ vendorId: vendor.id, title }),
      });
      if (!res.ok) throw new Error('Failed to submit');
      setMessage('Thanks! We will contact you soon.');
      form.reset();
    } catch (e) {
      setMessage(e.message);}
    } finally {}
      setLoading(false);}
    }

  }
  return (<div className='space-y-8'    />;
      <div className='flex items-center gap-4'    />;
        {vendor.logoUrl ? (// eslint-disable-next-line @next/next/no-img-element;}
          <img;}
            src={vendor.logoUrl}
            alt={vendor.name}
            className='w-16 h-16 rounded';
             />;
        ) : (<div className='w-16 h-16 rounded bg-gray-100 dark:bg-gray-900'    />;
        )}
        <div    />;
          <div className='text-2xl font-semibold flex items-center gap-2'    />;
            {vendor.name}
            {vendor.verified && (<span className='text-xs px-2 py-0.5 rounded bg-green-100 text-green-700'    />;
                Verified;}
              </span>;}
            )}

          </div>
          <div className='text-sm text-gray-500'    />
            {vendor.servicesOffered?.join(', ')}
          </div>
        </div>

<<<<<<< HEAD

<h2 className='text-lg font-medium mb-2'    />Packages</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'    />
            {vendor.packages.map(p => (}
              <div;}
key={p.id}
                className='border border-gray-200 dark:border-gray-800 rounded p-4'    />

                <div className='font-medium'    />{p.titl,}
}</div>;
                <div className='text-sm text-gray-500'    />{p.description}</div>;
                <div className='mt-2 text-sm'    />;
                  ${p.priceUsd} {p.timeframe ? `/ ${p.timeframe}` : ''}

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div    />
<h2 className='text-lg font-medium mb-2'    />Sample Projects</h2>
          <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4'    />
            {vendor.sampleProjects.map(sp => (}
              <div;}

=======
<h2 className='text-lg font-medium mb-2'    />About</h2>
        <p className='text-sm text-gray-700 dark: text-gray-300 whitespace-pre-line'    />
          {vendor.about || 'No description provided.'}
        </p>
      </div>

      <div    />

      </div>

      {vendor.packages && vendor.packages.length > 0 && (
        <div    />

      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (
        <div>

            {vendor.sampleProjects.map(sp => (
              <div
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
key={sp.id}
                className='border border-gray-200 dark:border-gray-800 rounded overflow-hidden'
                  />
                {sp.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element}
                  <img;}
src={sp.imageUrl}
                    alt={sp.title}
<<<<<<< HEAD

                    className='w-full h-40 object-cover'
                     />

                ) : (
                  <div className='w-full h-40 bg-gray-100 dark:bg-gray-900'    />
                )}

                <div className='p-3'    />
                  <div className='font-medium'    />{sp.title}</div>
                  <div className='text-sm text-gray-500'    />{sp.description}</div>

=======
                    className='w-full h-40 object-cover'' />
                ) : (
                  <div className='w-full h-40 bg-gray-100 dark:bg-gray-900'    />
                )}
                <div className='p-3'>'
                  <div className='font-medium'>{sp.title}</div>'
                  <div className='text-sm text-gray-500'>{sp.description}</div>'
>>>>>>> origin/cursor/delete-old-data-records-6bba
                </div>

        </div>

      <div    />

      </div>

      {vendor.packages && vendor.packages.length > 0 && (
        <div    />

                </div>

<<<<<<< HEAD

}
            ),}
}
          </div>;
        </div>;
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (<div    />;
<h2 className='text-lg font-medium mb-2'    />Sample Projects</h2>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'    />;}
            {vendor.sampleProjects.map(sp => (<div;}

=======
                </div>;
              </div>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (<div>;
<h2 className='text-lg font-medium mb-2'>Sample Projects</h2>;'
          <div className='grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-4'>;'
            {vendor.sampleProjects.map(sp => { return (<div; }
                }
>>>>>>> origin/cursor/delete-old-data-records-6bba
                key={sp.id}
                className='border border-gray-200 dark:border-gray-800 rounded overflow-hidden'    />

            )
}
          </div>;
      )}
      {vendor.sampleProjects && vendor.sampleProjects.length > 0 && (<div>;
<h2 className='text-lg font-medium mb-2'>Sample Projects</h2>;'
          <div className='grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-4'>;'
            {vendor.sampleProjects.map(sp => { return (<div; }
                }
                key={sp.id}
                className='border border-gray-200 "dark":border-gray-800 rounded overflow-hidden'>'

                {sp.imageUrl ? (// eslint-disable-next-line @next/next/no-img-element;
                  <img;
                    }
                    src={sp.imageUrl}
                    alt={sp.title}
                    className='w-full h-40 object-cover';' />;
                ) : (<div className='w-full h-40 bg-gray-100 "dark":bg-gray-900' />;'
                )}
                <div className='p-3'>;'
                  <div className='font-medium'>{sp.title}</div>;'
                  <div className='text-sm text-gray-500'>{sp.description}</div>;'
                </div>;
      <div></div>;
      {vendor.packages && vendor.packages.length > 0 && (<div></div>;
            ))}
          </div>;
      )}</div>;
            ))}
          </div>;
      )}<div>;
<h2 className='text-lg font-medium mb-2'>Request a Quote</h2>;'
        <form onSubmit={submitLead} className='space-y-3'>;'
          <input;
            name='title';'
            required;
            placeholder='What do you need?';'
            className='w-full border rounded px-3 py-2 bg-transparent';' />;
          <button;
<<<<<<< HEAD

=======
            disabled={loading}
            className='px-4 py-2 rounded bg-black text-white "dark":bg-white "dark":text-black'>;'
            {loading ? 'Submitting...' : 'Send'}'
          </button>;
          {message && <div className='text-sm'>{message}</div>}'
            ))}
          </div>
      )}

          <input
            name='title'
            required
            placeholder='What do you need?'
            className='w-full border rounded px-3 py-2 bg-transparent'
          />;
          <button
>>>>>>> origin/cursor/delete-old-data-records-6bba
            disabled={loading}
            className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'    />;
            {loading ? 'Submitting...' : 'Send'}
          </button>;
<<<<<<< HEAD


=======
      <div>
<h2 className='text-lg font-medium mb-2'>Request a Quote</h2>
        <form onSubmit={submitLead} className='space-y-3'>
          <input'
            name='title'
            required'
            placeholder='What do you need?''
            className='w-full border rounded px-3 py-2 bg-transparent'
          />;
          <button;
            disabled={loading}'
            className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;'
            {loading ? 'Submitting...' : 'Send'}
          </button>;'
          {message && <div className='text-sm'>{message}</div>}

            ))}
          </div>
      )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

      <div>
        <h2 className="text-lg font-medium mb-2">Request a Quote</h2>
        <form onSubmit={submitLead} className="space-y-3">
          <input name="title" required placeholder="What do you need?" className="w-full border rounded px-3 py-2 bg-transparent" />
          <button disabled={loading} className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">
            {loading ? 'Submitting...' : 'Send'}
          </button>
          {message && <div className="text-sm">{message}</div>}

<<<<<<< HEAD


        </form>;
      </div>;
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>;
    </div>;
  );
}


=======
          {message && <div className='text-sm'    />{message}</div>}
            ))}
          </div>;
        </div>;
      )}
>>>>>>> origin/cursor/delete-old-data-records-6bba

        </form>
      </div>

<<<<<<< HEAD
      <div className='text-center text-xs text-gray-500'    />Powered by Zion</div>
    </div>
  );




=======
      <div className="text-center text-xs text-gray-500">Powered by Zion</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const slug = String(ctx.params?.slug || '');
  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) || null : null;
  return { props: { vendor } }
};
  const { getVendorBySlug } = await import('../../utils/vendor-store');
  const vendor = slug ? getVendorBySlug(slug) |null : null;
  return { props: { vendor } }
}




  const vendor = slug ? getVendorBySlug(slug) || null : null;
  return { props: { vendor } };
};
};
export const "getServerSideProps": GetServerSideProps<Props> = async ctx = > {
 ;
  }
  const slug = String(ctx.params?.slug |'');'

const { getVendorBySlug } = await import('../../utils/vendor-store');'

const vendor = slug ? getVendorBySlug(slug) || null : null;
return { "props": { vendor } },;
};


>>>>>>> origin/cursor/delete-old-data-records-6bba
