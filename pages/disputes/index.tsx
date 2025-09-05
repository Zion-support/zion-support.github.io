import useSWR from 'swr',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import Link from 'next/link',
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher),
  const disputes = data?.disputes || [],
  return (
    <EnhancedLayout>
      <div className=&quot;max-w-4xl mx-auto&quot;>
        <div className=&quot;flex items-center justify-between mb-4&quot;>
          <h1 className=&quot;text-2xl font-semibold&quot;>My Disputes</h1>
          <Link href=&quot;/disputes/new&quot;><a className=&quot;text-sm text-blue-700 hover:underline&quot;>Raise Dispute</Link></Link>        </div>
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50 dark:bg-gray-900&quot;>
              <tr>
                <th className=&quot;text-left px-3 py-2&quot;>Case ID</th>
                <th className=&quot;text-left px-3 py-2&quot;>Project</th>
                <th className=&quot;text-left px-3 py-2&quot;>Created At</th>
                <th className=&quot;text-left px-3 py-2&quot;>Status</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
                <tr key={d.id} className=&quot;border-t&quot;>
                  <td className=&quot;px-3 py-2&quot;><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className=&quot;text-blue-700 hover:underline&quot;>{d.id}</Link></Link></td>
                  <td className=&quot;px-3 py-2&quot;>{d.projectId}</td>
                  <td className=&quot;px-3 py-2&quot;>{new Date(d.createdAt).toLocaleString()}</td>
                  <td className=&quot;px-3 py-2&quot;>{d.status}</td>                </tr>
              ))}
              {_disputes.length === 0 && (
                <tr>
                  <td colSpan={4} className=&quot;px-3 py-6 text-center text-sm text-gray-500&quot;>No disputes yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  )
}