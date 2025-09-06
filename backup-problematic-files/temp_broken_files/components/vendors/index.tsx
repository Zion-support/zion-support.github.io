import Link from 'next/link',
import type { GetServerSideProps } from 'next',
import type { Vendor } from '../../utils/vendor-types',
type Props = { vendors: Vendor[] },

export default function VendorsPage({ vendors }: Props) {
  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;flex items-center justify-between&quot;>
        <h1 className=&quot;text-2xl font-semibold&quot;>Vendors</h1>
        <Link href=&quot;/vendors/register&quot;><a className=&quot;px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black&quot;>Apply as Vendor</a></a>      </div>
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
                  <img src={v.logoUrl} alt={v.name} className=&quot;w-12 h-12 rounded&quot; />                ) : (
                  <div className=&quot;w-12 h-12 rounded bg-gray-100 dark:bg-gray-900&quot; />
                )}
                <div>
                  <div className=&quot;font-medium flex items-center gap-2&quot;>
                    {v.name}
                    {v.verified && <span className=&quot;text-xs px-2 py-0.5 rounded bg-green-100 text-green-700&quot;>Verified</span>}
                  </div>
                  <div className="text-xs text-gray-500">Services: {v.servicesOffered?.join() || ''}</div>                  <div className="font-medium flex items-center gap-2">
                    {_v.name}
                    {_v.verified && <span className="text-xs px-2 py-0.5 rounded bg-green-100 text-green-700">Verified</span>}
                  </div>
                  <div className="text-xs text-gray-500">Services: {_v.servicesOffered?.join(', _') || ''}</div>
                </div>
              </div>
            </a>
          </a>
        ))}
      </div>
      <div className=&quot;text-center text-xs text-gray-500&quot;>Powered by Zion  Co-brand available</div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const { listVendors } = await import('../../utils/vendor-store'),
  const vendors = listVendors(),
  return { props: { vendors } }
},