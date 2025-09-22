<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import useSWR from 'swr',
import EnhancedLayout from '../../components / layout / EnhancedLayout',
=======

export default function DisputesIndexPage() {}
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
'
import useSWR from 'swr','
import EnhancedLayout from '../../components / layout / EnhancedLayout','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import Link from 'next / link',
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),;
export default /**;
 * DisputesIndexPage - Function description;
 */
function DisputesIndexPage() { return null; }
  const { data } = useSWR ('/api / disputes', fetcher),
  const disputes = data?.disputes || [],
  return (
<<<<<<< HEAD
    <EnhancedLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">My Disputes</h1>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</a></Link>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>

          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>

        </div>"
        <div className="overflow-auto border rounded">"
          <table className="min-w-full text-sm">"
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>"
                <th className="text-left px-3 py-2">Case ID</th>"
                <th className="text-left px-3 py-2">Project</th>"
                <th className="text-left px-3 py-2">Created At</th>"
                <th className="text-left px-3 py-2">Status</th>
=======
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>

=======
const fetcher = (url: string) => fetch(url).then(r => r.json());
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
  return (
    <EnhancedLayout>
<div className='max-w-4xl mx-auto'>
        <div className='flex items-center justify-between mb-4'>
          <h1 className='text-2xl font-semibold'>My Disputes</h1>
          <Link href='/disputes/new'>
            <a className='text-sm text-blue-700 hover:underline'>
              Raise Dispute
            </a>
          </Link>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
        </div>
        <div className='overflow-auto border rounded'>
          <table className='min-w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900'>
              <tr>
                <th className='text-left px-3 py-2'>Case ID</th>
                <th className='text-left px-3 py-2'>Project</th>
                <th className='text-left px-3 py-2'>Created At</th>
                <th className='text-left px-3 py-2'>Status</th>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </tr>
            </thead>
            <tbody>
{disputes.map((d: any) => (

                <tr key={d.id} className="border-t">

"
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</Link></Link></td>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
=======
"
                  <td className="px-3 py-2">{d.projectId}</td>"
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  <td className="px-3 py-2">{d.status}</td>
                </tr>
              ))}
              {disputes.length === 0 && (
<<<<<<< HEAD
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>

  );
};
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

                </tr>

              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <EnhancedLayout>;
      <div className="max - w-4xl mx - auto">;
        <div className="flex items - center justify - between mb - 4">;
          <h1 className="text - 2xl font - semibold">My Disputes</h1>;
=======

    <EnhancedLayout>;"
      <div className="max - w-4xl mx - auto">;"
        <div className="flex items - center justify - between mb - 4">;"
          <h1 className="text - 2xl font - semibold">My Disputes</h1>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <Link href="/disputes / new"><a className="text - sm text - blue - 700 hover:underline">Raise Dispute</a></Link>;
        </div>;"
        <div className="overflow - auto border rounded">;"
          <table className="min - w-full text - sm">;"
            <thead className="bg - gray - 50 dark:bg - gray - 900">;
              <tr>;"
                <th className="text - left px - 3 py - 2">Case ID</th>;"
                <th className="text - left px - 3 py - 2">Project</th>;"
                <th className="text - left px - 3 py - 2">Created At</th>;"
                <th className="text - left px - 3 py - 2">Status</th>;
              </tr>;
            </thead>;
            <tbody>;
              {disputes.map ((d: any) => ("
                <tr key={d.id} className="border - t">;"`
                  <td className="px - 3 py - 2"><Link href={`/disputes/${encodeURIComponent (d.id)}`}><a className="text - blue - 700 hover:underline">{d.id}</a></Link></td>;"
                  <td className="px - 3 py - 2">{d.project_id}</td>;"
                  <td className="px - 3 py - 2">{new Date (d.created_at).toLocaleString ()}</td>;"
                  <td className="px - 3 py - 2">{d.status}</td>;
                </tr>))}
              {disputes.length === 0 && (
<<<<<<< HEAD

                <tr>;"
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

export default function DisputesIndexPage() { return null; }
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]

  return (
    <EnhancedLayout>"
      <div className="max-w-4xl mx-auto">"
        <div className="flex items-center justify-between mb-4">"
          <h1 className="text-2xl font-semibold">My Disputes</h1>

        </div>"
        <div className="overflow-auto border rounded">"
          <table className="min-w-full text-sm">"
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>"
                <th className="text-left px-3 py-2">Case ID</th>"
                <th className="text-left px-3 py-2">Project</th>"
                <th className="text-left px-3 py-2">Created At</th>"
                <th className="text-left px-3 py-2">Status</th>

              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (

"
                  <td className="px-3 py-2">{d.projectId}</td>"
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>"
                  <td className="px-3 py-2">{d.status}</td>
                </tr>
))  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
