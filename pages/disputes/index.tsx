import useSWR from 'swr';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import Link from 'next/link';
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher);
  const disputes = data?.disputes || [];
  return (
    <Layout>
      <Head>
        <title>Disputes - Zion Tech Group</title>
        <meta name="description" content="Disputes solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Disputes</h1>
          <p className="text-lg text-gray-600">
            Professional disputes solutions tailored to your business needs.
          </p>
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
              {disputes.map((d: any) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</a></Link></td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                </tr>
              ))}
              {disputes.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
    </EnhancedLayout>
  )
}