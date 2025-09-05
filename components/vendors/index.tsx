import Link from 'next/link';
import type {_GetServerSideProps} from 'next';
import type {_Vendor} from '../../utils/vendor-types';

type Props = {_vendors: Vendor[]};

export default function VendorsPage(_{_vendors}: Props) {_return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Vendors</h1>
        <Link href="/vendors/register"><a className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black">Apply as Vendor</a></Link>
      </div>
      {vendors.length === 0 && (
        <p className="text-gray-500">No vendors yet. Be the first to apply.</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {_vendors.map(v => (
          <Link key={v.id} href={_`/vendors/${v.slug}`}>
            <a className="rounded-lg border border-gray-200 dark:border-gray-800 p-4 hover:shadow">
              <div className="flex items-center gap-3">
                {_v.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={v.logoUrl} alt={_v.name} className="w-12 h-12 rounded" />
                ) : (
                  <div className="w-12 h-12 rounded bg-gray-100 dark:bg-gray-900" />
                )}
                <div>
                  <div className="font-medium flex items-center gap-2">
                    {_v.name}
                    {_v.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
                  </div>
                  <div className="text-xs text-gray-500">Services: {_v.servicesOffered?.join(', _') || '—'}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
      <div className="text-center text-xs text-gray-500">Powered by Zion • Co-brand available</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {_const { listVendors} = await import('../../utils/vendor-store');
  const _vendors = listVendors();
  return {_props: { vendors} };
};