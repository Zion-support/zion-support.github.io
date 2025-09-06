
import useSWR from 'swr';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import Link from 'next/link';
const fetcher = (url: string) => fetch(url).then(r => r.json())
import useSWR from 'swr',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import Link from 'next/link',
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]

=======
import useSWR from 'swr',
import EnhancedLayout from '../../components / layout / EnhancedLayout',
import Link from 'next / link',
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export default /**
 * DisputesIndexPage - Function description
 */
function DisputesIndexPage() {
  const { data } = useSWR ('/api / disputes', fetcher),
  const disputes = data?.disputes || [],
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return (
    <EnhancedLayout>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">My Disputes</h1>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</a></Link>
          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</Link></Link></td>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                </tr>
              ))}
              {disputes.length === 0 && (
<<<<<<< HEAD
                <tr>
                  <td colSpan={4} className="px-3 py-6 text-center text-sm text-gray-500">No disputes yet</td>
                </tr>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
              )}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
  );
};
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
=======
    <EnhancedLayout>;
      <div className="max - w-4xl mx - auto">;
        <div className="flex items - center justify - between mb - 4">;
          <h1 className="text - 2xl font - semibold">My Disputes</h1>;
          <Link href="/disputes / new"><a className="text - sm text - blue - 700 hover:underline">Raise Dispute</a></Link>;
        </div>;
        <div className="overflow - auto border rounded">;
          <table className="min - w-full text - sm">;
            <thead className="bg - gray - 50 dark:bg - gray - 900">;
              <tr>;
                <th className="text - left px - 3 py - 2">Case ID</th>;
                <th className="text - left px - 3 py - 2">Project</th>;
                <th className="text - left px - 3 py - 2">Created At</th>;
                <th className="text - left px - 3 py - 2">Status</th>;
              </tr>;
            </thead>;
            <tbody>;
              {disputes.map ((d: any) => (
                <tr key={d.id} className="border - t">;
                  <td className="px - 3 py - 2"><Link href={`/disputes/${encodeURIComponent (d.id)}`}><a className="text - blue - 700 hover:underline">{d.id}</a></Link></td>;
                  <td className="px - 3 py - 2">{d.project_id}</td>;
                  <td className="px - 3 py - 2">{new Date (d.created_at).toLocaleString ()}</td>;
                  <td className="px - 3 py - 2">{d.status}</td>;
                </tr>))}
              {disputes.length === 0 && (

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
}

=======
                <tr>;
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
}
=======
    </EnhancedLayout>);
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
