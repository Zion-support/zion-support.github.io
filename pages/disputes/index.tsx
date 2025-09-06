import useSWR from 'swr'
import EnhancedLayout from '../../components/layout/EnhancedLayout'
import Link from 'next/link'
const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher),
  const disputes = data?.disputes || []
  return (
    <EnhancedLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">My Disputes</h1>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</a></Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        </div>
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
                  <td className=&quot;px-3 py-2&quot;>{d.status}</td>
                </tr>
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