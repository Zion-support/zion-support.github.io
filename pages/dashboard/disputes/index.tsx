<<<<<<< HEAD
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../../components/layout/EnhancedLayout',
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const fetcher = null;
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const fetcher = (url: string) => fetch(url).then(r => r.json())
=======

const fetcher = (url: string) => fetch(url).then(r => r.json());
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie |'').split(';').reduce(
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
    }
    {} as Record<string, string>
  );
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
<<<<<<< HEAD
    role = user?.role |'guest';
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } }
  }
  return { props: {} };}
=======
<<<<<<< HEAD
    role = user?.role || 'guest';
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } };
  }
  return { props: {} };
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function AdminDisputesDashboard() {
=======
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split(';').reduce(
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v || '');
      return acc;
    },
    {} as Record<string, string>
  );
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest';
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  return { props: {} };};

export default function AdminDisputesDashboard() {;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<
    'All' | 'Open' | 'Under Review' | 'Resolved'
  >('Open');
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
  if (role !== 'admin') {;
    return { redirect: { destination: '/', permanent: false }   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: {}   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher),
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open'),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  const disputes = useMemo(() => {
<<<<<<< HEAD
    const list = data?.disputes |[];
    if (statusFilter === 'All') return list;
<<<<<<< HEAD
    return list.filter((d: any) => d.status === statusFilter);  }, [data, statusFilter]);
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    return list.filter((d: any) => d.status === statusFilter);
  }, [data, statusFilter]);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
    const list = data?.disputes || [],
    if (statusFilter === 'All') return list,
    return list.filter((d: any) => d.status === statusFilter)
  }, [data, statusFilter]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  return (
    <EnhancedLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {(['OpenUnder ReviewResolvedAll'] as const).map(s => (<option key={s} value={s}>{s}</option>))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </select>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
<<<<<<< HEAD
                <th className='text-left px-3 py-2'>Case ID</th>
                <th className='text-left px-3 py-2'>Talent</th>
                <th className='text-left px-3 py-2'>Client</th>
                <th className='text-left px-3 py-2'>Project</th>
                <th className='text-left px-3 py-2'>Created At</th>
                <th className='text-left px-3 py-2'>Status</th>
<<<<<<< HEAD
                <th className='text-left px-3 py-2'>Actions</th>              </tr>
=======
                <th className='text-left px-3 py-2'>Actions</th>
              </tr>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Talent</th>
                <th className="text-left px-3 py-2">Client</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
              </tr>
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
            </thead>
            <tbody>
              {disputes.map((d: any) => (
                <tr key={d.id} className="border-t">
                  <td className="px-3 py-2 font-medium">{d.id}</td>
                  <td className="px-3 py-2">{d.talentUserId}</td>
                  <td className="px-3 py-2">{d.clientUserId}</td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2 flex gap-2">
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</Link></Link>
                  </td>
<<<<<<< HEAD
                  <td className='px-3 py-2'>{d.status}</td>
                  <td className='px-3 py-2 flex gap-2'>
                    <Link
                      href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}
                    >
                      <a className='text-green-700 hover:underline'>Resolve</a>
                    </Link>
                    <Link
                      href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}
                    >
                      <a className='text-blue-700 hover:underline'>
                        Message Parties
                      </a>
                    </Link>
                    <Link
                      href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}
                    >
                      <a className='text-gray-700 hover:underline'>
                        Download Evidence
                      </a>
<<<<<<< HEAD
                    </Link>                  </td>
=======
                    </Link>
                  </td>
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
                </tr>
<<<<<<< HEAD
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
<<<<<<< HEAD
<<<<<<< HEAD
);
=======
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
);
<<<<<<< HEAD
=======

}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
},;
export default function AdminDisputesDashboard(req, res) {
  try {
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');
  const disputes = useMemo(() => {;
    const list = data?.disputes || [];
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  }, [data, statusFilter]);
  return (;
    <EnhancedLayout>;
      <div className="max-w-6xl mx-auto">;
        <div className="flex items-center justify-between mb-4">;
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>;
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">;
            {(['OpenUnder ReviewResolvedAll'] as const).map(s => (<option key={s} value={s}>{s}</option>))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </select>;
        </div>;
        <div className="overflow-auto border rounded">;
          <table className="min-w-full text-sm">;
            <thead className="bg-gray-50 dark:bg-gray-900">;
              <tr>;
                <th className="text-left px-3 py-2">Case ID</th>;
                <th className="text-left px-3 py-2">Talent</th>;
                <th className="text-left px-3 py-2">Client</th>;
                <th className="text-left px-3 py-2">Project</th>;
                <th className="text-left px-3 py-2">Created At</th>;
                <th className="text-left px-3 py-2">Status</th>;
                <th className="text-left px-3 py-2">Actions</th>;
              </tr>;
            </thead>;
            <tbody>;
              {disputes.map((d: any) => (;
                <tr key={d.id} className="border-t">;
                  <td className="px-3 py-2 font-medium">{d.id}</td>;
                  <td className="px-3 py-2">{d.talentUserId}</td>;
                  <td className="px-3 py-2">{d.clientUserId}</td>;
                  <td className="px-3 py-2">{d.projectId}</td>;
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>;
                  <td className="px-3 py-2">{d.status}</td>;
                  <td className="px-3 py-2 flex gap-2">;
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</a></Link>;
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</a></Link>;
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</a></Link>;
                  </td>;
                </tr>;
              ))  } catch (error) {
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
