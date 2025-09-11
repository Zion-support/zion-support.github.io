
<<<<<<< HEAD
<<<<<<< HEAD
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components / layout / EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components / admin / ModerationModal';
const fetcher = (url: string) =>: any fetch (url).then (r => r.json ()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split (';').reduce (
    (acc: any, part: string) => {
      const [k, v] = part.trim ().split ('=');
      if (acc[k] = decodeURIComponent (v || '')) {
  $2
}
      return acc;
    },
    {} as Record < string, string>);
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest' } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } },;
  return { props: {}   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export default function ContentReviewPage(req, res) {
  try {
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';

    role = cookies['x - user'] ? JSON.parse (cookies['x - user']).role : 'guest';
  } catch {}
  // Check condition
if (
    return { redirect: { destination: '/', permanent: false } }) {
  $2
}
  return { props: {} }
}
;
export default /**
 * ContentReviewPage - Function description
 */
function ContentReviewPage() {
  const [filters, set_filters] = useState<{
    status?: string;
    reason?: string;
    user_email?: string;
    content_type?: string;
  }>({ status: 'pending' });  const query = useMemo (() => {
    const p = new URLSearchParams ();
    if (p.set ('status', filters.status)) {
  $2
}
    if (p.set ('reason', filters.reason)) {
  $2
}
    if (p.set ('user_email', filters.user_email)) {
  $2
}
    if (p.set ('content_type', filters.content_type)) {
  $2
}
    return p.to_string ();
  }, [filters]);
  const { data, mutate } = useSWR (
    `/api / admin / moderation / flags${query ? `?${query}` : ''}`,
    fetcher);  const flags = data?.flags || [];
;
  const [selected, set_selected] = useState < any | null>(null);
;
  async /**
 * handle_action - Function description
 */
function handle_action() {
    // Check condition
if (return) {
  $2
}
    await fetch (
      `/api / admin / moderation / flags/${encodeURIComponent (selected.id)}/action`,
      {
        method: 'POST',
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ action, admin_notes }),
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
=======
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
=======
    
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    return this.props.children;
  }
}
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      }
    );
    set_selected (null);
    mutate ();  }
  return (
    <EnhancedLayout>;
<<<<<<< HEAD
<<<<<<< HEAD
            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            value={filters && filters.status || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, status: e && e.target.value || undefined }));

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }
            className='border rounded px-2 py-1';
=======
            }
            className='border rounded px-2 py-1';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='max - w-7xl mx - auto'>;
        <div className='flex items - center justify - between mb - 4'>;
          <h1 className='text - 2xl font - semibold'>Admin Content Review</h1>;
        </div>;
        <div className='mb - 4 grid grid - cols - 1 md:grid - cols - 5 gap - 3 text - sm'>;
          <select;
            value={filters.status || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, status: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            <option value=''>All Statuses</option>;
            <option value='pending'>Pending</option>;
            <option value='approved'>Approved</option>;
            <option value='removed'>Removed</option>;
            <option value='warned'>Warned</option>;
            <option value='banned'>Banned</option>;
          </select>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={filters && filters.contentType || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                contentType: e && e.target.value || undefined,;
              }));
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            }
            className='border rounded px-2 py-1';
=======

            }
            className='border rounded px-2 py-1';
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <select;
            value={filters.content_type || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                content_type: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            <option value=''>All Types</option>;
            <option value='listing'>Listing</option>;
            <option value='message'>Message</option>;
            <option value='cv'>CV</option>;
            <option value='job'>Job Post</option>;
          </select>;
<<<<<<< HEAD
<<<<<<< HEAD
            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            value={filters && filters.reason || ''}
            onChange={e =>;
              setFilters(f => ({ ...f, reason: e && e.target.value || undefined }));

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
            className='border rounded px-2 py-1';
          />;
          <input
            placeholder='User email'
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            value={filters && filters.userEmail || ''}
            onChange={e =>;
              setFilters(f => ({;
                ...f,;
                userEmail: e && e.target.value || undefined,;
              }));
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            }
            className='border rounded px-2 py-1';
          />;
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1';
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <input;
            placeholder='Reason contains...';
            value={filters.reason || ''}
            on_change={e =>;
              set_filters (function => ({ ...f, reason: e.target.value || undefined }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <input;
            placeholder='User email';
            value={filters.user_email || ''}
            on_change={e =>;
              set_filters (function => ({
                ...f,
                user_email: e.target.value || undefined,
              }));
            }
            className='border rounded px - 2 py - 1';
          />;
          <button;
            on_click={() => set_filters ({ status: 'pending' })}
            className='border rounded px - 2 py - 1';
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            Reset;
          </button>;
        </div>;
<<<<<<< HEAD
<<<<<<< HEAD
const fetcher = (url: string) => fetch(url).then(r => r.json()),
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc
  }, {} as Record<string, string>);
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest' } catch {}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } },
  return { props: {} }
};
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{ status?: string, reason?: string, userEmail?: string, contentType?: string }>({ status: 'pending' }),
  const query = useMemo(() => {
import useSWR from 'swr',
import React, { useMemo, useState } from 'react',
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';

const fetcher = (url: string) => fetch(url).then(r => r.json())
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = (req.headers.cookie |'').split(';').reduce(
const fetcher = (url: string) => fetch(url).then(r => r.json()),

export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split(';').reduce(
    (acc: any, part: string) => {
      const [k, v] = part.trim().split('=');
      if (k) acc[k] = decodeURIComponent(v |'');
      return acc;
    }
    {} as Record<string, string>
  );
  let role = 'guest';
  try {
    role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest';
  } catch {}
  if (role !== 'admin')
    return { redirect: { destination: '/', permanent: false } }
  return { props: {} }
}
export default function ContentReviewPage() {
  const [filters, setFilters] = useState<{;
    status?: string;
    reason?: string;
    userEmail?: string;
    contentType?: string;
  }>({ status: 'pending' });  const query = useMemo(() => {
import useSWR from 'swr';
import React, { useMemo, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';
import type { GetServerSideProps } from 'next';
import ModerationModal from '../../components/admin/ModerationModal';
const fetcher = (url: string) => fetch(url).then(r => r.json());
export const getServerSideProps: GetServerSideProps = async ({ req }) => {;
  const cookies = (req.headers.cookie || '').split().reduce((acc: any, part: string) => {;
    const [k, v] = part.trim().split('=');
    if (k) acc[k] = decodeURIComponent(v || '');
    return acc;
  }, {} as Record<string, string>),;
  let role = 'guest';
  try { role = cookies['x-user'] ? JSON.parse(cookies['x-user']).role : 'guest' } catch {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  if (role !== 'admin') return { redirect: { destination: '/', permanent: false } },;
  return { props: {}   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
},;
export default function ContentReviewPage(req, res) {
  try {
  const [filters, setFilters] = useState<{ status?: string, reason?: string, userEmail?: string, contentType?: string }>({ status: 'pending' }),;
  const query = useMemo(() => {;
    const p = new URLSearchParams();
    if (filters.status) p.set('status', filters.status);
    if (filters.reason) p.set('reason', filters.reason);
    if (filters.userEmail) p.set('userEmail', filters.userEmail);
    if (filters.contentType) p.set('contentType', filters.contentType);
    return p.toString();
  }, [filters]);
  const { data, mutate } = useSWR(
    `/api/admin/moderation/flags${query ? `?${query}` : ''}`
    fetcher
  );  const flags = data?.flags |[];
  const [selected, setSelected] = useState<any | null>(null);
  async function handleAction(
    action: 'approve' | 'remove' | 'warn' | 'ban'
    adminNotes?: string
  ) {
    if (!selected) return;
    await fetch(
      `/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`
      {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ action, adminNotes })
      }
    );
    setSelected(null);
    mutate();  }

  }, [filters]),;
  const { data, mutate } = useSWR(`/api/admin/moderation/flags${query ? `?${query}` : ''}`, fetcher);
  const flags = data?.flags || [];
  const [selected, setSelected] = useState<any | null>(null);
  async function handleAction(action: 'approve'|'remove'|'warn'|'ban', adminNotes?: string) {;
    if (!selected) return,;
    await fetch(`/api/admin/moderation/flags/${encodeURIComponent(selected.id)}/action`, {;
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action, adminNotes });
    });
    setSelected(null);
    mutate();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  return (
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <EnhancedLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-semibold">Admin Content Review</h1>
        </div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className='mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm'>
          <select
            value={filters.status |''}
            onChange={e =>
              setFilters(f => ({ ...f, status: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Statuses</option>
            <option value='pending'>Pending</option>
            <option value='approved'>Approved</option>
            <option value='removed'>Removed</option>
            <option value='warned'>Warned</option>
            <option value='banned'>Banned</option>
          </select>
          <select
            value={filters.contentType |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                contentType: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          >
            <option value=''>All Types</option>
            <option value='listing'>Listing</option>
            <option value='message'>Message</option>
            <option value='cv'>CV</option>
            <option value='job'>Job Post</option>
          </select>
          <input
            placeholder='Reason contains...'
            value={filters.reason |''}
            onChange={e =>
              setFilters(f => ({ ...f, reason: e.target.value |undefined }))
            }
            className='border rounded px-2 py-1'
          />
          <input
            placeholder='User email'
            value={filters.userEmail |''}
            onChange={e =>
              setFilters(f => ({
                ...f
                userEmail: e.target.value |undefined
              }))
            }
            className='border rounded px-2 py-1'
          />
          <button
            onClick={() => setFilters({ status: 'pending' })}
            className='border rounded px-2 py-1'
          >
            Reset
          </button>
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <div className="mb-4 grid grid-cols-1 md:grid-cols-5 gap-3 text-sm">
          <select value={filters.status || ''} onChange={e => setFilters(f => ({ ...f, status: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="removed">Removed</option>
            <option value="warned">Warned</option>
            <option value="banned">Banned</option>
          </select>
          <select value={filters.contentType || ''} onChange={e => setFilters(f => ({ ...f, contentType: e.target.value || undefined }))} className="border rounded px-2 py-1">
            <option value="">All Types</option>
            <option value="listing">Listing</option>
            <option value="message">Message</option>
            <option value="cv">CV</option>
            <option value="job">Job Post</option>
          </select>
          <input placeholder="Reason contains..." value={filters.reason || ''} onChange={e => setFilters(f => ({ ...f, reason: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <input placeholder="User email" value={filters.userEmail || ''} onChange={e => setFilters(f => ({ ...f, userEmail: e.target.value || undefined }))} className="border rounded px-2 py-1" />
          <button onClick={() => setFilters({ status: 'pending' })} className="border rounded px-2 py-1">Reset</button>
<<<<<<< HEAD
<<<<<<< HEAD
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
        <div className="overflow-auto border rounded">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="text-left px-3 py-2">ID</th>
                <th className="text-left px-3 py-2">Type</th>
                <th className="text-left px-3 py-2">User</th>
                <th className="text-left px-3 py-2">Reason</th>
                <th className="text-left px-3 py-2">AI Scores</th>
                <th className="text-left px-3 py-2">Created</th>
                <th className="text-left px-3 py-2">Status</th>
                <th className="text-left px-3 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {flags.map((f: any) => (
                <tr key={f.id} className="border-t hover:bg-gray-50/50">
                  <td className="px-3 py-2 font-mono text-xs">{f.id}</td>
                  <td className="px-3 py-2">{f.contentType}</td>
                  <td className="px-3 py-2">{f.userEmail}</td>
                  <td className="px-3 py-2 truncate max-w-xs" title={f.reason}>{f.reason}</td>
                  <td className="px-3 py-2 text-xs">T{Math.round(f.aiScores?.toxicity*100)}% / N{Math.round(f.aiScores?.nsfw*100)}% / S{Math.round(f.aiScores?.scam*100)}%</td>
                  <td className="px-3 py-2">{new Date(f.createdAt).toLocaleString()}</td>
                  <td className="px-3 py-2">{f.status}</td>
                  <td className="px-3 py-2">
                    <button onClick={() => setSelected(f)} className="px-2 py-1 rounded border">Review</button>
                  </td>
                </tr>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
              ))}
              {flags.length === 0 && (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



}

                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
<<<<<<< HEAD
<tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )}
              ))  } catch (error) {
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              ))}
              {flags.length === 0 && (


=======


}

=======
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
              {flags.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className='px-3 py-6 text-center text-gray-500'
                  >
                    No results
                  </td>
                </tr>              )}
            </tbody>
          </table>
        </div>
      </div>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
      {selected && (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {selected && (
=======

      {selected && (;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <ModerationModal
          flag={selected}
          onClose={() => setSelected(null)}
          onAction={handleAction}
        />;
      )}
<<<<<<< HEAD
<<<<<<< HEAD
    </EnhancedLayout>;
  );
    </EnhancedLayout>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


=======
        <div className='overflow - auto border rounded'>;
          <table className='min - w-full text - sm'>;
            <thead className='bg - gray - 50 dark:bg - gray - 900'>;
              <tr>;
                <th className='text - left px - 3 py - 2'>ID</th>;
                <th className='text - left px - 3 py - 2'>Type</th>;
                <th className='text - left px - 3 py - 2'>User</th>;
                <th className='text - left px - 3 py - 2'>Reason</th>;
                <th className='text - left px - 3 py - 2'>AI Scores</th>;
                <th className='text - left px - 3 py - 2'>Created</th>;
                <th className='text - left px - 3 py - 2'>Status</th>;
                <th className='text - left px - 3 py - 2'>Actions</th>              </tr>;
            </thead>;
            <tbody>;
              {flags.map ((function: any) => (
                <tr key={f.id} className='border - t hover:bg - gray - 50 / 50'>;
                  <td className='px - 3 py - 2 font - mono text - xs'>{f.id}</td>;
                  <td className='px - 3 py - 2'>{f.content_type}</td>;
                  <td className='px - 3 py - 2'>{f.user_email}</td>;
                  <td className='px - 3 py - 2 truncate max - w-xs' title={f.reason}>;
                    {f.reason}
                  </td>;
                  <td className='px - 3 py - 2 text - xs'>;
                    T{Math.round (f.ai_scores?.toxicity * 100)}% / N;
                    {Math.round (f.ai_scores?.nsfw * 100)}% / S;
                    {Math.round (f.ai_scores?.scam * 100)}%;
                  </td>;
                  <td className='px - 3 py - 2'>;
                    {new Date (f.created_at).toLocaleString ()}
                  </td>;
                  <td className='px - 3 py - 2'>{f.status}</td>;
                  <td className='px - 3 py - 2'>;
                    <button;
                      on_click={() => set_selected (f)}
                      className='px - 2 py - 1 rounded border';
                    >;
                      Review;
                    </button>                  </td>;
                </tr>))}
              {flags.length === 0 && (
                <tr>;
                  <td;
                    col_span={8}
                    className='px - 3 py - 6 text - center text - gray - 500';
                  >;
                    No results;
                  </td>;
                </tr>              )}
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
);

}
                <tr><td colSpan={8} className="px-3 py-6 text-center text-gray-500">No results</td></tr>
              )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </tbody>;
          </table>;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
      {selected && (;
        <ModerationModal;
          flag={selected  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onClose={() => setSelected(null)  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          onAction={handleAction  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        />;
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </EnhancedLayout>;
  );
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {selected && (
        <ModerationModal;
          flag={selected}
          on_close={() => set_selected (null)}
          on_action={handle_action}
        />)}
    </EnhancedLayout>);
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
