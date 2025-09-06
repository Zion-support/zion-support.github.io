<<<<<<< HEAD
import useSWR from 'swr',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import Link from 'next/link';
const fetcher = null;
=======
import useSWR from 'swr';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import Link from 'next/link';
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json())
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return (
    <EnhancedLayout>
<<<<<<< HEAD
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
=======
      <div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-semibold'>My Disputes</h1>
          <Link href='/disputes/new'>
            <a className='text-sm text-blue-700 hover:underline'>
              Raise Dispute
            </a>
          </Link>
        </div>
        <div className='overflow-auto border rounded'>
          <table className='min-w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900'>
              <tr>
                <th className='text-left px-3 py-2'>Case ID</th>
                <th className='text-left px-3 py-2'>Project</th>
                <th className='text-left px-3 py-2'>Created At</th>
                <th className='text-left px-3 py-2'>Status</th>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
<<<<<<< HEAD
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</a></Link></td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
=======
                <tr key={d.id} className='border-t'>
                  <td className='px-3 py-2'>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}`}>
                      <a className='text-blue-700 hover:underline'>{d.id}</a>
                    </Link>
                  </td>
                  <td className='px-3 py-2'>{d.projectId}</td>
                  <td className='px-3 py-2'>
                    {new Date(d.createdAt).toLocaleString()}
                  </td>
                  <td className='px-3 py-2'>{d.status}</td>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </tr>
              ))}
              {disputes.length === 0 && (
                <tr>
<<<<<<< HEAD
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
=======
                  <td
                    colSpan={4}
                    className='px-3 py-6 text-center text-sm text-gray-500'
                  >
                    No disputes yet
                  </td>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
  )
}
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
