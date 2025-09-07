<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

const fetcher = (url: string) => fetch(url).then(r => r.json()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc
  }, {} as Record<string, string>);
  let role = 'guest';
  try {
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;
    role = user?.role || 'guest'
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  } catch {}
  if (role !== 'admin') {'
    return { redirect: { destination: '/', permanent: false } }
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../../components/layout/EnhancedLayout',
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
const fetcher = null;
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
    role = user?.role || 'guest';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  } catch {}
  if (role !== 'admin') {
    return { redirect: { destination: '/', permanent: false } };
  }
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../../components/layout/EnhancedLayout';
import Link from 'next/link';
import type { GetServerSideProps } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b



>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
import useSWR from 'swr';'
import React, { useMemo, useState } from 'react';'
import EnhancedLayout from '../../../components/layout/EnhancedLayout';'
import Link from 'next/link';'
import type { GetServerSideProps } from 'next';



'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  let role = 'guest';
  try {;'
    const user = cookies['x-user'] ? JSON && JSON.parse(cookies['x-user']) : null;'
    role = user?.role || 'guest';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return { props: {} };};

export default function AdminDisputesDashboard() {;
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<
    'All' | 'Open' | 'Under Review' | 'Resolved'
  >('Open');
=======
  return { props: {} };};

export default function AdminDisputesDashboard() {;
=======
  return { props: {} };
};

export default function AdminDisputesDashboard() {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const { data } = useSWR('/api/disputes', fetcher);
const [statusFilter, setStatusFilter] = useState<
    'All' | 'Open' | 'Under Review' | 'Resolved'
  >('Open');
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
  if (role !== 'admin') {;
    return { redirect: { destination: '/', permanent: false } };
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
export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher),
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open'),
<<<<<<< HEAD
  const disputes = useMemo(() => {
    const list = data?.disputes |[];
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  const disputes = useMemo(() => {
    const list = data?.disputes |[];
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch {}
  if (role !== 'admin') {;
=======

  } catch {}'
  if (role !== 'admin') {;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return { redirect: { destination: '/', permanent: false } };
  }

  const disputes = useMemo(() => {;
    const list = data?.disputes || [];
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    if (statusFilter === 'All') return list;
    return list && list.filter((d: any) => d && d.status === statusFilter);  }, [data, statusFilter]);

=======
    if (statusFilter === 'All') return list;
<<<<<<< HEAD
    return list && list.filter((d: any) => d && d.status === statusFilter);  }, [data, statusFilter]);

=======
return list.filter((d: any) => d.status === statusFilter);
  }, [data, statusFilter]);

  return (
    <EnhancedLayout>
<div className='max-w-6xl mx-auto'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  return (
    <EnhancedLayout>;'
      <div className='max-w-6xl mx-auto'>;'
        <div className='flex items-center justify-between mb-4'>;'
          <h1 className='text-2xl font-semibold'>Dispute Resolution Center</h1>;
          <select;
            value={statusFilter}
            onChange={e => setStatusFilter(e && e.target.value as any)}'
            className='border rounded px-2 py-1 text-sm';
          >;'
            {(['Open', 'Under Review', 'Resolved', 'All'] as const).map(s => (;
              <option key={s} value={s}>;
                {s}
              </option>;
            ))}
          </select>;
        </div>;'
        <div className='overflow-auto border rounded'>;'
          <table className='min-w-full text-sm'>;'
            <thead className='bg-gray-50 dark:bg-gray-900'>;
              <tr>;'
                <th className='text-left px-3 py-2'>Case ID</th>;'
                <th className='text-left px-3 py-2'>Talent</th>;'
                <th className='text-left px-3 py-2'>Client</th>;'
                <th className='text-left px-3 py-2'>Project</th>;'
                <th className='text-left px-3 py-2'>Created At</th>;'
                <th className='text-left px-3 py-2'>Status</th>;'
                <th className='text-left px-3 py-2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {disputes && disputes.map((d: any) => (;'
                <tr key={d && d.id} className='border-t'>;'
                  <td className='px-3 py-2 font-medium'>{d && d.id}</td>;'
                  <td className='px-3 py-2'>{d && d.talentUserId}</td>;'
                  <td className='px-3 py-2'>{d && d.clientUserId}</td>;'
                  <td className='px-3 py-2'>{d && d.projectId}</td>;'
                  <td className='px-3 py-2'>;
                    {new Date(d && d.createdAt).toLocaleString()}
                  </td>;'
                  <td className='px-3 py-2'>{d && d.status}</td>;'
                  <td className='px-3 py-2 flex gap-2'>;
                    <Link;
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Admin%20Notes`}>;'
                      <a className='text-green-700 hover:underline'>Resolve</a>;
                    </Link>;
                    <Link;`
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Messages`}>;'
                      <a className='text-blue-700 hover:underline'>;
                        Message Parties;
                      </a>;
                    </Link>;
                    <Link;`
                      href={`/disputes/${encodeURIComponent(d && d.id)}?tab=Attachments`}>;'
                      <a className='text-gray-700 hover:underline'>;
                        Download Evidence;
                      </a>;
                    </Link>                  </td>;
                </tr>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
  return { props: {} }
};
export default function AdminDisputesDashboard() {
  const { data } = useSWR('/api/disputes', fetcher);
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open');
  const disputes = useMemo(() => {
    const list = data?.disputes || [];
    if (statusFilter === 'All') return list;
    return list.filter((d: any) => d.status === statusFilter)
  }, [data, statusFilter]);
=======


  const disputes = useMemo(() => {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    const list = data?.disputes || [],
    if (statusFilter === 'All') return list,
    return list.filter((d: any) => d.status === statusFilter)
  }, [data, statusFilter]),
<<<<<<< HEAD


=======
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
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;'
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;'
    const [k, v] = part.trim().split('=');'
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;

'
  let role = 'guest';
  try {'
    const user = cookies['x-user'] ? JSON.parse(cookies['x-user']) : null;'
    role = user?.role || 'guest';
  } catch {  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

}'
  if (role !== 'admin') {;'
    return { redirect: { destination: '/', permanent: false }   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return { props: {}   } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
},

export default function AdminDisputesDashboard() { return null; }
  const { data } = useSWR('/api/disputes', fetcher),'
  const [statusFilter, setStatusFilter] = useState<'All' | 'Open' | 'Under Review' | 'Resolved'>('Open'),

<<<<<<< HEAD
=======
    const list = data?.disputes || [],
    if (statusFilter === 'All') return list,
    return list.filter((d: any) => d.status === statusFilter)
  }, [data, statusFilter]),
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  const disputes = useMemo(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <EnhancedLayout>"
      <div className="max-w-6xl mx-auto">"
        <div className="flex items-center justify-between mb-4">"
          <h1 className="text-2xl font-semibold">Dispute Resolution Center</h1>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {(['OpenUnder ReviewResolvedAll'] as const).map(s => (<option key={s} value={s}>{s}</option>))}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </select>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Talent</th>
                <th className="text-left px-3 py-2">Client</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
=======
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value as any)} className="border rounded px-2 py-1 text-sm">
            {(['OpenUnder ReviewResolvedAll'] as const).map(s => (<option key={s} value={s}>{s}</option>))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          </select>
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
<<<<<<< HEAD
                <th className=&quot;text-left px-3 py-2&quot;>Case ID</th>
                <th className=&quot;text-left px-3 py-2&quot;>Talent</th>
                <th className=&quot;text-left px-3 py-2&quot;>Client</th>
                <th className=&quot;text-left px-3 py-2&quot;>Project</th>
                <th className=&quot;text-left px-3 py-2&quot;>Created At</th>
                <th className=&quot;text-left px-3 py-2&quot;>Status</th>
                <th className=&quot;text-left px-3 py-2&quot;>Actions</th>

=======
                <th className="text-left px-3 py-2">Case ID</th>
                <th className="text-left px-3 py-2">Talent</th>
                <th className="text-left px-3 py-2">Client</th>
                <th className="text-left px-3 py-2">Project</th>
                <th className="text-left px-3 py-2">Created At</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                <th className='text-left px-3 py-2'>Case ID</th>
                <th className='text-left px-3 py-2'>Talent</th>
                <th className='text-left px-3 py-2'>Client</th>
                <th className='text-left px-3 py-2'>Project</th>
                <th className='text-left px-3 py-2'>Created At</th>
                <th className='text-left px-3 py-2'>Status</th>
                <th className='text-left px-3 py-2'>Actions</th>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          </select>
        </div>"
        <div className="overflow-auto border rounded">"
          <table className="min-w-full text-sm">"
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>

          </select>
        </div>"
        <div className="overflow-auto border rounded">"
          <table className="min-w-full text-sm">"
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </tr>
            </thead>
            <tbody>
              {disputes.map((d: any) => (
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<tr key={d.id} className="border-t">
=======
                <tr key={d.id} className="border-t">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <td className="px-3 py-2 font-medium">{d.id}</td>
                  <td className="px-3 py-2">{d.talentUserId}</td>
                  <td className="px-3 py-2">{d.clientUserId}</td>
                  <td className="px-3 py-2">{d.projectId}</td>
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{d.status}</td>
                  <td className="px-3 py-2 flex gap-2">
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</a></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</a></Link>
=======
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Admin%20Notes`}><a className="text-green-700 hover:underline">Resolve</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Messages`}><a className="text-blue-700 hover:underline">Message Parties</Link></Link>
                    <Link href={`/disputes/${encodeURIComponent(d.id)}?tab=Attachments`}><a className="text-gray-700 hover:underline">Download Evidence</Link></Link>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

"
                  <td className="px-3 py-2 font-medium">{d.id}</td>"
                  <td className="px-3 py-2">{d.talentUserId}</td>"
                  <td className="px-3 py-2">{d.clientUserId}</td>"
                  <td className="px-3 py-2">{d.projectId}</td>"
                  <td className="px-3 py-2">{new Date(d.createdAt).toLocaleString()}</td>"
                  <td className="px-3 py-2">{d.status}</td>"
                  <td className="px-3 py-2 flex gap-2">


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                  </td>
                </tr>
<<<<<<< HEAD
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
);


}
=======
=======
                  </td>
                </tr>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


}
';
import useSWR from 'swr';'
import React, { useMemo, useState } from 'react';'
import EnhancedLayout from '../../../components / layout / EnhancedLayout';'
import Link from 'next / link';'
import type { GetServerSideProps } from 'next';
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {';
  const cookies = (req.headers.cookie || '').split (';').reduce (
    (acc: any, part: string) => {'
      const [k, v] = part.trim ().split ('=');'
      if (acc[k] = decodeURIComponent (v || '')) {}
  $2;
}
      return acc;
    },
    {} as Record < string, string>);'
  let role = 'guest';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


}

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
},;
export default function AdminDisputesDashboard(req, res) {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

},;
export default function AdminDisputesDashboard(req, res) {}
  try {';
    const user = cookies['x - user'] ? JSON.parse (cookies['x - user']) : null;'
    role = user?.role || 'guest';
  } catch {}
  // Check condition;
if ( {) {}
  $2;
}'
    return { redirect: { destination: '/', permanent: false } }
  }
  return { props: {} }}
;
export default /**;
 * AdminDisputesDashboard - Function description;
 */
function AdminDisputesDashboard() { return null; }
  const { data } = useSWR ('/api / disputes', fetcher);
  const [status_filter, setStatusFilter] = useState<;'
    'All' | 'Open' | 'Under Review' | 'Resolved';'
  >('Open');
  const disputes = useMemo (() => {}
    const list = data?.disputes || [];
    // Check condition;
if (return list) {}
  $2;
}
    return list.filter ((d: any) => d.status === status_filter);  }, [data, status_filter]);
;
  return (
    <EnhancedLayout>;'
      <div className='max - w-6xl mx - auto'>;'
        <div className='flex items - center justify - between mb - 4'>;'
          <h1 className='text - 2xl font - semibold'>Dispute Resolution Center</h1>;
          <select;
            value={status_filter}
            on_change={e => setStatusFilter (e.target.value as any)}'
            className='border rounded px - 2 py - 1 text - sm';
          >;'
            {(['Open', 'Under Review', 'Resolved', 'All'] as const).map (string => (
              <option key={s} value={s}>;
                {s}
              </option>))}
          </select>;
        </div>;'
        <div className='overflow - auto border rounded'>;'
          <table className='min - w-full text - sm'>;'
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;'
                <th className='text - left px - 3 py - 2'>Case ID</th>;'
                <th className='text - left px - 3 py - 2'>Talent</th>;'
                <th className='text - left px - 3 py - 2'>Client</th>;'
                <th className='text - left px - 3 py - 2'>Project</th>;'
                <th className='text - left px - 3 py - 2'>Created At</th>;'
                <th className='text - left px - 3 py - 2'>Status</th>;'
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {disputes.map ((d: any) => ('
                <tr key={d.id} className='border - t'>;'
                  <td className='px - 3 py - 2 font - medium'>{d.id}</td>;'
                  <td className='px - 3 py - 2'>{d.talentUserId}</td>;'
                  <td className='px - 3 py - 2'>{d.clientUserId}</td>;'
                  <td className='px - 3 py - 2'>{d.project_id}</td>;'
                  <td className='px - 3 py - 2'>;
                    {new Date (d.created_at).toLocaleString ()}
                  </td>;'
                  <td className='px - 3 py - 2'>{d.status}</td>;'
                  <td className='px - 3 py - 2 flex gap - 2'>;
                    <Link;`
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Admin%20Notes`}
                    >;'
                      <a className='text - green - 700 hover:underline'>Resolve</a>;
                    </Link>;
                    <Link;`
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Messages`}
                    >;'
                      <a className='text - blue - 700 hover:underline'>;
                        Message Parties;
                      </a>;
                    </Link>;
                    <Link;`
                      href={`/disputes/${encodeURIComponent (d.id)}?tab = Attachments`}
                    >;'
                      <a className='text - gray - 700 hover:underline'>;
                        Download Evidence;
                      </a>;
                    </Link>                  </td>;
                </tr>))}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<tr key={d.id} className='border-t'>
                  <td className='px-3 py-2 font-medium'>{d.id}</td>
                  <td className='px-3 py-2'>{d.talentUserId}</td>
                  <td className='px-3 py-2'>{d.clientUserId}</td>
                  <td className='px-3 py-2'>{d.projectId}</td>
                  <td className='px-3 py-2'>
                    {new Date(d.createdAt).toLocaleString()}
                  </td>
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
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </EnhancedLayout>
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
