import useSWR from 'swr';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import Link from 'next/link';

const _fetcher = (_url: string) => fetch(url).then(r => r.json());

export default function DisputesIndexPage() {_const { data} = useSWR('/api/disputes', fetcher);
  const _disputes = data?.disputes || [];
  return (_<EnhancedLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">My Disputes</h1>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</a></Link>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {_disputes.map((d: unknown) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2"><Link href={_`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{_d.id}</a></Link></td>
                  <td className="px-3 py-2">{_d.projectId}</td>
                  <td className="px-3 py-2">{_new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{_d.status}</td>
                </tr>
              ))}
              {_disputes.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  );
}