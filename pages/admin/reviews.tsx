<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import type { NextPage } from 'next',;
import type { Review } from '../../types/reviews',;
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key'),

const AdminReviewsPage: NextPage = () => {
  const [pending, setPending] = useState<Review[]>([]),
  const [all, setAll] = useState<Review[]>([]),
  const [adminKey, setAdminKey] = useState(''),

  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews'),
    const data = await res.json(),
    if (res.ok) {
      setAll(data.reviews),
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { Review } from '../../types/reviews';

const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') |'dev-admin-key')
const AdminReviewsPage: NextPage = () => {
  const [pending, setPending] = useState<Review[]>([])
  const [all, setAll] = useState<Review[]>([])
  const [adminKey, setAdminKey] = useState('')
  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews')
    const data = await res.json()
    if (res.ok) {
      setAll(data.reviews)
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
  }
  useEffect(() => { refresh() }, [])
  async function moderate(action: 'approve' | 'remove', reviewId: string) {
    const res = await fetch('/api/reviews/moderate', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'
    },
    body: JSON.stringify({ action, reviewId })});
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    if (res.ok) refresh()
  }
<<<<<<< HEAD
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');
const AdminReviewsPage: NextPage = () => {;
  const [pending, setPending] = useState<Review[]>([]);
  const [all, setAll] = useState<Review[]>([]);
  const [adminKey, setAdminKey] = useState('');
  async function refresh() {;
    const res = await fetch('/api/admin/debug/reviews');
    const data = await res.json();
    if (res.ok) {;
      setAll(data.reviews);
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed));
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======


    if (res.ok) refresh()
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  useEffect(() => { refresh() }, []),;
  async function moderate(action: 'approve' | 'remove', reviewId: string) {;
    const res = await fetch('/api/reviews/moderate', {;
      method: 'POST',;
      headers: {;
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'},;
      body: JSON.stringify({ action, reviewId })}),;
    if (res.ok) refresh();
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

    if (res.ok) refresh()


  }
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <main className="max-w-5xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Review Moderation</h1>
      <div className="enhanced-card">
        <label className="block text-sm mb-2">Admin Key</label>
        <input className="border p-2 rounded w-full" value={adminKey} onChange={(e) => setAdminKey(e.target.value)} placeholder="Enter admin key" />
      </div>
      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-4">Pending Reviews</h2>
        <div className="space-y-4">
          {pending.map((r) => (
            <div key={r.id} className="border rounded p-3">
              <div className="text-sm text-gray-600 mb-1">Project: {r.projectId} • To: {r.toRole} {r.toId}</div>
              <div className="font-medium">{r.rating}★ — {r.text}</div>
              <div className="mt-2 flex gap-2">
                <button className="enhanced-button enhanced-button-primary" onClick={() => moderate('approve', r.id)}>Approve</button>
                <button className="enhanced-button enhanced-button-secondary" onClick={() => moderate('remove', r.id)}>Remove</button>
              </div>
            </div>
<<<<<<< HEAD
          ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          {!pending.length && <div>No pending reviews.</div>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </section>
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
          ))}
          {!pending.length && <div>No pending reviews.</div>}
        </div>
      </section>


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )


<<<<<<< HEAD
<<<<<<< HEAD
},
export default AdminReviewsPage,

=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

},
export default AdminReviewsPage,

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
},

export default AdminReviewsPage,

<<<<<<< HEAD
}
export default AdminReviewsPage;
import React, { useEffect, useState } from 'react',
import type { NextPage } from 'next',
import type { Review } from '../../types / reviews',
const ADMIN_KEY = typeof window === 'undefined' ? '' : (local_storage.get_item ('ADMIN_KEY') || 'dev - admin - key'),
const AdminReviewsPage: NextPage = () => {
  const [pending, set_pending] = useState < Review[]>([]),
  const [all, set_all] = useState < Review[]>([]),
  const [admin_key, setAdminKey] = useState (''),
  async /**
 * refresh - Function description
 */
function refresh() {
    const res = await fetch ('/api / admin / debug / reviews'),
    const data = await res.json (),
    // Check condition
if ( {) {
  $2
}
      set_all (data.reviews),
      set_pending (data.reviews.filter ((r: Review) => !r.approved && !r.removed));
    }
  }
  useEffect (() => { refresh () }, []),
  async /**
 * moderate - Function description
 */
function moderate() {
    const res = await fetch ('/api / reviews / moderate', {
      method: 'POST',
      headers: {
        'Content - Type': 'application / jsonx - admin - key': admin_key || 'dev - admin - key'},
      body: JSON.stringify ({ action, review_id })}),
    if (refresh ()) {
  $2
}
  }
  return (
    <main className="max - w-5xl mx - auto p - 6 space - y-6">;
      <h1 className="text - 2xl font - semibold">Review Moderation</h1>;
      <div className="enhanced - card">;
        <label className="block text - sm mb - 2">Admin Key</label>;
        <input className="border p - 2 rounded w - full" value={admin_key} on_change={(e) => setAdminKey (e.target.value)} placeholder="Enter admin key" />;
      </div>;
      <section className="enhanced - card">;
        <h2 className="text - xl font - semibold mb - 4">Pending Reviews</h2>;
        <div className="space - y-4">;
          {pending.map ((r) => (
            <div key={r.id} className="border rounded p - 3">;
              <div className="text - sm text - gray - 600 mb - 1">Project: {r.project_id} • To: {r.to_role} {r.to_id}</div>;
              <div className="font - medium">{r.rating}★ — {r.text}</div>;
              <div className="mt - 2 flex gap - 2">;
                <button className="enhanced - button enhanced - button - primary" on_click={() => moderate ('approve', r.id)}>Approve</button>;
                <button className="enhanced - button enhanced - button - secondary" on_click={() => moderate ('remove', r.id)}>Remove</button>;
              </div>;
            </div>))}
          {!pending.length && <div > No pending reviews.</div>}
        </div>;
      </section>;
      <section className="enhanced - card">;
        <h2 className="text - xl font - semibold mb - 2">All Reviews</h2>;
        <pre className="text - xs whitespace - pre - wrap">{JSON.stringify (all, null, 2)}</pre>;
      </section>;
    </main>);
},
export default AdminReviewsPage,
              </div>
            </div>
          ))}
          {_!pending.length && <div>No pending reviews.</div>}
        </div>
      </section>

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
},
export default AdminReviewsPage,
},

<<<<<<< HEAD
export default AdminReviewsPage,;
export default AdminReviewsPage,
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
