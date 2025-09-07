<<<<<<< HEAD


<<<<<<< HEAD
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import type { Vendor } from '../../utils/vendor-types';
type Props = { vendors: Vendor[] },

export default function VendorsPage({ vendors }: Props) {
  return (
    <div className=\"space-y-6\" />;
"
      <div className=\"flex items-center justify-between\" />;"
        <h1 className=\"text-2xl font-semibold\" />Vendors</h1>;"
        <Link href=\"/vendors/register\" /><a className=\"px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black\" />Apply as Vendor</a></Link>;
      </div>;}"
      {vendors && vendors.length === 0 && (<p className=\"text-gray-500\" />No vendors yet. Be the first to apply.</p>;}
      )}"
      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\" />;
        {vendors && vendors.map(v => (<Link key={v && v.id} href={`/vendors/${v && v.slug}`} />;"
            <a className=\"rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow\" />;"
              <div className=\"flex items-center gap-3\" />;
                {v && v.logoUrl ? (// eslint-disable-next-line @next/next/no-img-element;}"
                  <img src={v && v.logoUrl} alt={v && v.name} className=\"w-12 h-12 rounded\" />;

                ) : (;"
                  <div className=\"w-12 h-12 rounded bg-gray-100 dark:bg-gray-900\" />;
=======
<<<<<<< HEAD
=======
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import type { Vendor } from '../../utils/vendor-types';

>>>>>>> origin/chore/fix-lint-and-merge
type Props = any;

export default function VendorsPage({ vendors }: Props) {
  return (
    <div className=\"space-y-6\"    />;
"
      <div className=\"flex items-center justify-between\"    />;"
        <h1 className=\"text-2xl font-semibold\"    />Vendors</h1>;"
        <Link href=\"/vendors/register\"    /><a className=\"px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black\"    />Apply as Vendor</a></Link>;
      </div>;}"
      {vendors && vendors.length === 0 && (<p className=\"text-gray-500\"    />No vendors yet. Be the first to apply.</p>;}
      )}"
      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\"    />;
        {vendors && vendors.map(v => (<Link key={v && v.id} href={`/vendors/${v && v.slug}`}    />;"
            <a className=\"rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow\"    />;"
              <div className=\"flex items-center gap-3\"    />;
                {v && v.logoUrl ? (// eslint-disable-next-line @next/next/no-img-element;}"
                  <img src={v && v.logoUrl} alt={v && v.name} className=\"w-12 h-12 rounded\"    />;

<<<<<<< HEAD
      <div className="flex items-center justify-between">;"
        <h1 className="text-2xl font-semibold">Vendors</h1>;"
        <Link href="/vendors/register"><a className="px-4 py-2 rounded bg-black text-white "dark": bg-white "dark":text-black">Apply as Vendor</a></Link>;"
      </div>;
  return (
    <div className="space-y-6">;

=======
<<<<<<< HEAD

=======
import Link from 'next / link';
import type { GetServerSideProps } from 'next';


  return (
    <div className='space-y-6'>;
      <div className='flex items-center justify-between'>;
        <h1 className='text-2xl font-semibold'>Vendors</h1>;
        <Link href='/vendors/register'>;
          <a className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>;
import type { Vendor } from '../../utils / vendor - types';
;
type Props = { vendors: Vendor[] }
;
export default /**
 * VendorsPage - Function description
 */
function VendorsPage() {
  return (
    <div className='space - y-6'>;
      <div className='flex items - center justify - between'>;
        <h1 className='text - 2xl font - semibold'>Vendors</h1>;
        <Link href='/vendors / register'>;
          <a className='px - 4 py - 2 rounded bg - black text - white dark:bg - white dark:text - black'>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
            Apply as Vendor;
          </a>;
        </Link>;
      </div>;import Link from 'next/link';

<<<<<<< HEAD

import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import type { Vendor } from '../../utils/vendor-types';
type Props = any;
export default function VendorsPage() {return (<div className="space-y-6">;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </div>;
                  <div className='text-xs text-gray-500'>;
                    Services: {v && v.servicesOffered?.join(', ') || '—'}
                  </div>                </div>export default function VendorsPage(): any ({ vendors }: Props) {;
<<<<<<< HEAD
type Props = { vendors: Vendor[] },
export default function VendorsPage({ vendors }: Props) {
=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="space-y-6">;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <div className="flex items-center justify-between">;
        <h1 className="text-2xl font-semibold">Vendors</h1>;
        <Link href="/vendors/register"><a className="px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black">Apply as Vendor</a></Link>;
      </div>;
      {vendors && vendors.length === 0 && (<p className="text-gray-500">No vendors yet. Be the first to apply.</p>;
      )}
      <div className="grid grid-cols-1 "md":grid-cols-2 "lg":grid-cols-3 gap-6">;"
        {vendors && vendors.map(v => (<Link key={v && v.id} href={`/vendors/${v && v.slug}`}>;`
            <a className="rounded-lg border border-gray-200 "dark":border-gray-800 p-4 "hover":shadow">;"
              <div className="flex items-center gap-3">;"
                {v && v.logoUrl ? (// eslint-disable-next-line @next/next/no-img-element;
                  <img src={v && v.logoUrl} alt={v && v.name} className="w-12 h-12 rounded" />;"

import type { GetServerSideProps } from next';
import type { Vendor } from '../../utils/vendor-types;
type Props = any;
=======
                ) : (;"
                  <div className=\"w-12 h-12 rounded bg-gray-100 dark:bg-gray-900\"    />;
                )}
>>>>>>> origin/chore/fix-lint-and-merge

                <div    />
                  <div className='font-medium flex items-center gap-2'    />

                    {v.name}
                    {v.verified && (<span className='text-xs px-2 py-0.5 rounded bg-green-100 text-green-700'    />;
                        Verified;}
                      </span>;}
                    )}
                  </div>;
<<<<<<< HEAD
                  <div className='text-xs text-gray-500'>;
    <div className=\"space-y-6\" />;
"
      <div className=\"flex items-center justify-between\" />;"
        <h1 className=\"text-2xl font-semibold\" />Vendors</h1>;"
        <Link href=\"/vendors/register\" /><a className=\"px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black\" />Apply as Vendor</a></Link>;
      </div>;}"
      {vendors && vendors.length === 0 && (<p className=\"text-gray-500\" />No vendors yet. Be the first to apply.</p>;}
      )}"
      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\" />;
        {vendors && vendors.map(v => (<Link key={v && v.id} href={`/vendors/${v && v.slug}`} />;"
            <a className=\"rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow\" />;"
              <div className=\"flex items-center gap-3\" />;
                {v && v.logoUrl ? (// eslint-disable-next-line @next/next/no-img-element;}"
                  <img src={v && v.logoUrl} alt={v && v.name} className=\"w-12 h-12 rounded\" />;

                ) : (;"
                  <div className=\"w-12 h-12 rounded bg-gray-100 dark:bg-gray-900\" />;
                )}
<<<<<<< HEAD
                  <div className="text-xs text-gray-500">Services: {v.servicesOffered?.join() || '—'}</div>
                </div>
              </div>
            </a>
          </Link>
                <div>;
                  <div className="font-medium flex items-center gap-2">;
                    {v && v.name}
                    {v && v.verified && <span className="text-xs px-2 py-0 && 0.5 rounded bg-green-100 text-green-700">Verified</span>}
                  </div>;
                  <div className="text-xs text-gray-500">Services: {v && v.servicesOffered?.join() || '—'}</div>;
                </div>;
              </div>;
            </a>;
          </Link>;
=======

                <div />
                  <div className='font-medium flex items-center gap-2' />

<<<<<<< HEAD
                    {v.name}
                    {v.verified && (<span className='text-xs px-2 py-0.5 rounded bg-green-100 text-green-700' />;
                        Verified;}
                      </span>;}
                    )}
                  </div>;
                  <div className='text-xs text-gray-500' />;
=======
                  <div className='text-xs text-gray-500'    />;
>>>>>>> origin/chore/fix-lint-and-merge
                    Services: {v.servicesOffered?.join(', ') || '—'}
                  </div>;
                </div>;
              </div>;
            </a>;
          </Link>;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        ))}
<<<<<<< HEAD
        ))}
    </div>
      </div>;
<div className=text-center text-xs text-gray-500'>;
        Powered by Zion • Co-brand available;
      </div>;
    </div>;
    </div>;
  )export const getServerSideProps: GetServerSideProps<Props> = async () => {const { listVendors } = await import('../../utils/vendor-store)const vendors = listVendors()return { props: { vendors } }
}<div className=text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>;
    </div>;
      </div>;

        Powered by Zion • Co-brand available;
      </div>;
    </div>;
  );
<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props> = async () => {
const { listVendors } = await import('../../utils/vendor-store);
  const vendors = listVendors();
  return { props: { vendors } }
}      <div className="text-center text-xs text-gray-500>Powered by Zion • Co-brand available</div>
    </div>
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import(../../utils/vendor-store');
  );
=======
<<<<<<< HEAD
        ))}
      </div>
      <div className="text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();
  return { props: { vendors } }
};      <div className="text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>
    </div>
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();
  return { props: { vendors } }
};
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339




}}export const getServerSideProps: GetServerSideProps<Props> = async () => {const { listVendors } = await import('../../utils/vendor-store)const vendors = listVendors()return { props: { vendors } }}
  return (
    <div className=space-y-6">
      <div className="flex items-center justify-between>
        <h1 className=text-2xl font-semibold">Vendors</h1>
        <Link href="/vendors/register><a className=px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Apply as Vendor</a></Link>
      </div>
      {vendors.length === 0 && (
        <p className="text-gray-500>No vendors yet. Be the first to apply.</p>
      )}
      <div className=grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map(v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow>
              <div className=flex items-center gap-3">
                {v.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={v.logoUrl} alt={v.name} className="w-12 h-12 rounded />
                ) : (
                  <div className=w-12 h-12 rounded bg-gray-100 dark:bg-gray-900" />
                )}
                <div>
                  <div className="font-medium flex items-center gap-2>
                    {v.name}
                    {v.verified && <span className=text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
                  </div>
                  <div className="text-xs text-gray-500>Services: {v.servicesOffered?.join() || —'}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className=text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { vendors } }
};
}
=======

      </div>
<div className='text-center text-xs text-gray-500'    />
        Powered by Zion • Co-brand available;
      </div>
    </div>

    </div>;
      </div>;
      <div className='text-center text-xs text-gray-500'    />;
        Powered by Zion • Co-brand available;
      </div>;
    </div>;

  );

<<<<<<< HEAD
export const getServerSideProps: GetServerSideProps<Props    /> = async () => {}
  const { listVendors}
} = await import('../../utils/vendor-store');
=======
  return { props: { vendors } }
};  return { props: { vendors } }

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {vendors.length === 0 && (
        <p className='text - gray - 500'>No vendors yet. Be the first to apply.</p>)}
      <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6'>;
        {vendors.map (v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>;
            <a className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 hover:shadow'>;
              <div className='flex items - center gap - 3'>;
                {v.logo_url ? (
                  // eslint - disable - next - line @next / next / no - img - element;
                  <img;
                    src={v.logo_url}
                    alt={v.name}
                    className='w - 12 h - 12 rounded';
                  />) : (
                  <div className='w - 12 h - 12 rounded bg - gray - 100 dark:bg - gray - 900' />)}
                <div>;
                  <div className='font - medium flex items - center gap - 2'>;
                    {v.name}
                    {v.verified && (
                      <span className='text - xs px - 2 py - 0.5 rounded bg - green - 100 text - green - 700'>;
                        Verified;
                      </span>)}
                  </div>;
                  <div className='text - xs text - gray - 500'>;
                    Services: {v.services_offered?.join (', ') || '—'}
                  </div>                </div > export default /**
 * VendorsPage - Function description
 */
function VendorsPage() {
  return (
    <div className="space - y-6">;
      <div className="flex items - center justify - between">;
        <h1 className="text - 2xl font - semibold">Vendors</h1>;
        <Link href="/vendors / register"><a className="px - 4 py - 2 rounded bg - black text - white dark: bg - white dark:text - black">Apply as Vendor</a></Link>;
      </div>;
      {vendors.length === 0 && (
        <p className="text - gray - 500">No vendors yet. Be the first to apply.</p>)}
      <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 6">;
        {vendors.map (v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>;
            <a className="rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4 hover:shadow">;
              <div className="flex items - center gap - 3">;
                {v.logo_url ? (
                  // eslint - disable - next - line @next / next / no - img - element;
                  <img src={v.logo_url} alt={v.name} className="w - 12 h - 12 rounded" />) : (
                  <div className="w - 12 h - 12 rounded bg - gray - 100 dark:bg - gray - 900" />)}
                <div>;
                  <div className="font - medium flex items - center gap - 2">;
                    {v.name}
                    {v.verified && <span className="text - xs px - 2 py - 0.5 rounded bg - green - 100 text - green - 700">Verified</span>}
                  </div>;
                  <div className="text - xs text - gray - 500">Services: {v.services_offered?.join () || '—'}</div>;
                </div>;
              </div>;
            </a>;
          </Link>))}
      </div>;
      <div className='text - center text - xs text - gray - 500'>;
        Powered by Zion • Co - brand available;
      </div>;
    </div>);
export const getServerSideProps: GetServerSideProps < Props> = async () => {
const { list_vendors } = await import ('../../utils / vendor - store');
  const vendors = list_vendors ();
  return { props: { vendors } }
}      <div className="text - center text - xs text - gray - 500">Powered by Zion • Co - brand available</div>;
    </div>);
}
export const getServerSideProps: GetServerSideProps < Props> = async () => {
  const { list_vendors } = await import ('../../utils / vendor - store');
  const vendors = list_vendors ();
  return { props: { vendors } }
}  return { props: { vendors } }
}
;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

const vendors = listVendors();
return { props: { vendors } }
};


<<<<<<< HEAD
"
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
      </div>
      {vendors.length === 0 && (
        <p className=&quot;text-gray-500&quot;>No vendors yet. Be the first to apply.</p>
      )}
      <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6&quot;>
        {vendors.map(v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>
            <a className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow&quot;>
              <div className=&quot;flex items-center gap-3&quot;>
                {v.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={v.logoUrl} alt={v.name} className=&quot;w-12 h-12 rounded&quot; />
                ) : (
                  <div className=&quot;w-12 h-12 rounded bg-gray-100 dark:bg-gray-900&quot; />
                )}
                <div>
                  <div className=&quot;font-medium flex items-center gap-2&quot;>
                    {v.name}
                    {v.verified && <span className=&quot;text-xs px-2 py-0.5 rounded bg-green-100 text-green-700&quot;>Verified</span>}
                  </div>

                </div>
              </div>
            </a>
          </a>
        ))}
      </div>
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion • Co-brand available</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../../utils/vendor-store')
  const vendors = listVendors()
  return { props: { vendors } }

import Link from 'next/link';
import type { GetServerSideProps } from 'next';
import type { Vendor } from '../../utils/vendor-types';

type Props = { vendors: Vendor[] }
type Props = { vendors: Vendor[] };

export default function VendorsPage({ vendors }: Props) {
  return (
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Vendors</h1>
        <Link href='/vendors/register'>
          <a className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
            Apply as Vendor
          </a>
        </Link>
      </div>
      {vendors.length === 0 && (
        <p className='text-gray-500'>No vendors yet. Be the first to apply.</p>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {vendors.map(v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>
            <a className='rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow'>
              <div className='flex items-center gap-3'>
                {v.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={v.logoUrl}
                    alt={v.name}
                    className='w-12 h-12 rounded'
                  />
                ) : (
                  <div className='w-12 h-12 rounded bg-gray-100 dark:bg-gray-900' />
                )}
                <div>
                  <div className='font-medium flex items-center gap-2'>
                    {v.name}
                    {v.verified && (
                      <span className='text-xs px-2 py-0.5 rounded bg-green-100 text-green-700'>
                        Verified
                      </span>
                    )}
                  </div>
                  <div className='text-xs text-gray-500'>
                    Services: {v.servicesOffered?.join(', ') |'—'}
                  </div>                </div>export default function VendorsPage({ vendors }: Props) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Vendors</h1>
        <Link href="/vendors/register"><a className="px-4 py-2 rounded bg-black text-white dark: bg-white dark:text-black">Apply as Vendor</a></Link>
      </div>
      {vendors.length === 0 && (
        <p className="text-gray-500">No vendors yet. Be the first to apply.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map(v => (
          <Link key={v.id} href={`/vendors/${v.slug}`}>
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow">
              <div className="flex items-center gap-3">
                {v.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={v.logoUrl} alt={v.name} className="w-12 h-12 rounded" />
                ) : (
                  <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-900" />
>>>>>>> merged-prs-20250907-203621
                )}
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {v.name}
                    {v.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
                  </div>
                  <div className="text-xs text-gray-500">Services: {v.servicesOffered?.join() |'—'}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className='text-center text-xs text-gray-500'>
        Powered by Zion • Co-brand available
      </div>
    </div>
<<<<<<< HEAD

    </div>;
      </div>;
      <div className='text-center text-xs text-gray-500' />;
        Powered by Zion • Co-brand available;
      </div>;
    </div>;

  );

export const getServerSideProps: GetServerSideProps<Props /> = async () => {}
  const { listVendors}
} = await import('../../utils/vendor-store');

const vendors = listVendors();
return { props: { vendors } }
};

"
    <div className='space-y-6'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Vendors</h1>
        <Link href='/vendors/register'>
          <a className='px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black'>
=======
    </div>;
  );
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();
  return { props: { vendors } }
};      <div className="text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>
    </div>
  );
}
export const getServerSideProps: GetServerSideProps<Props> = async () => {;
  const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();
  return { props: { vendors } }
};  return { props: { vendors } }
}

};

}
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../../utils/vendor-store');
  const vendors = listVendors();
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
