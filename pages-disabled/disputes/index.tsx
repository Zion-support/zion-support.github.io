<<<<<<< HEAD:pages-disabled/disputes/index.tsx
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]

=======



import useSWR from 'swr',
import EnhancedLayout from '../../components/layout/EnhancedLayout',
import Link from 'next/link',
const fetcher = (url: string) => fetch(url).then(r => r.json()),

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default function DisputesIndexPage() {
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
import useSWR from 'swr',
import EnhancedLayout from '../../components / layout / EnhancedLayout',

import Link from 'next / link',
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),;
export default /**;
 * DisputesIndexPage - Function description;
 */
function DisputesIndexPage() { return null; }
  const { data } = useSWR ('/api / disputes', fetcher),
  const disputes = data?.disputes || [],
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

          <Link href="/disputes/new"><a className="text-sm text-blue-700 hover:underline">Raise Dispute</Link></Link>

<<<<<<< HEAD:pages-disabled/disputes/index.tsx
        </div>"
        <div className="overflow-auto border rounded">"
          <table className="min-w-full text-sm">"
=======

        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>"
                <th className="text-left px-3 py-2">Case ID</th>"
                <th className="text-left px-3 py-2">Project</th>"
                <th className="text-left px-3 py-2">Created At</th>"
                <th className="text-left px-3 py-2">Status</th>

        </div>
        <div className='overflow-auto border rounded'>
          <table className='min-w-full text-sm'>
            <thead className='bg-gray-50 dark:bg-gray-900'>
              <tr>
                <th className='text-left px-3 py-2'>Case ID</th>
                <th className='text-left px-3 py-2'>Project</th>
                <th className='text-left px-3 py-2'>Created At</th>
                <th className='text-left px-3 py-2'>Status</th>

              </tr>
            </thead>
            <tbody>

                <tr key={d.id} className="border-t">

"
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</Link></Link></td>

<<<<<<< HEAD:pages-disabled/disputes/index.tsx
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>

                  <td className="px-3 py-2">{d.status}</td>
                </tr>
              ))}
              {disputes.length === 0 && (
<<<<<<< HEAD:pages-disabled/disputes/index.tsx

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

                </tr>

              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
<<<<<<< HEAD
  return (
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
    <EnhancedLayout>;
      <div className="max - w-4xl mx - auto">;
        <div className="flex items - center justify - between mb - 4">;
          <h1 className="text - 2xl font - semibold">My Disputes</h1>;

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
}

}
=======

<<<<<<< HEAD:pages-disabled/disputes/index.tsx
                <tr>;"
=======
=======
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <tr>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
                  <td col_span={4} className="px - 3 py - 6 text - center text - sm text - gray - 500">No disputes yet</td>;
                </tr>)}

            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD:pages-disabled/disputes/index.tsx
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
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</a></Link></td>
                  <td className="px-3 py-2"><Link href={`/disputes/${encodeURIComponent(d.id)}`}><a className="text-blue-700 hover:underline">{d.id}</Link></Link></td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                </tr>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


              {disputes.length === 0 && (
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
};
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </tbody>;
          </table>;
        </div>;
      </div>;
    </EnhancedLayout>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx

export default function DisputesIndexPage() { return null; }
  const { data } = useSWR('/api/disputes', fetcher)
  const disputes = data?.disputes |[]

<<<<<<< HEAD:pages-disabled/disputes/index.tsx
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

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/disputes/index.tsx
