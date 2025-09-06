<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======



=======
<<<<<<< HEAD
=======



=======
import useSWR from 'swr',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import Link from 'next/link',
const fetcher = (url: string) => fetch(url).then(r => r.json()),

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
    <EnhancedLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">My Disputes</h1>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</a></Link>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
              {disputes.map((d: any) => (
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              {disputes.map((d: any) => ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <tr key={d.id} className="border-t">

"
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</Link></Link></td>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
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
                </tr>
              ))}
              {disputes.length === 0 && (
                <tr>
<td
                    colSpan={4}
                    className='px-3 py-6 text-center text-sm text-gray-500'
                  >
                    No disputes yet
                  </td>
                </tr>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  );
};
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

                </tr>

              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

                <tr>;"
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

}

                <tr>;
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
    </EnhancedLayout>);
        </div>
        <div className=&quot;overflow-auto border rounded&quot;>
          <table className=&quot;min-w-full text-sm&quot;>
            <thead className=&quot;bg-gray-50 dark:bg-gray-900&quot;>
              <tr>
                <th className=&quot;text-left px-3 py-2&quot;>Case ID</th>
                <th className=&quot;text-left px-3 py-2&quot;>Project</th>
                <th className=&quot;text-left px-3 py-2&quot;>Created At</th>
                <th className=&quot;text-left px-3 py-2&quot;>Status</th>
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

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
<<<<<<< HEAD
              ))  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
              ))  } catch (error) {}
";
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934




<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
