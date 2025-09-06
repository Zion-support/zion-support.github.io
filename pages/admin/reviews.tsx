<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import type { Review } from '../../types/reviews';

  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
<<<<<<< HEAD
useEffect(() => { refresh() }, []);
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  async function moderate(action: 'approve' | 'remove', reviewId: string) {
    const res = await fetch('/api/reviews/moderate', {
      method: 'POST'
      headers: {
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'
    },
    body: JSON.stringify({ action, reviewId })});
    if (res.ok) refresh()
  }
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
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======

    if (res.ok) refresh()
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
},

=======

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},
export default AdminReviewsPage,

=======
},

export default AdminReviewsPage,

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
      <section className=&quot;enhanced-card&quot;>
        <h2 className=&quot;text-xl font-semibold mb-2&quot;>All Reviews</h2>
        <pre className=&quot;text-xs whitespace-pre-wrap&quot;>{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
},

export default AdminReviewsPage

<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
},
export default AdminReviewsPage,
},

export default AdminReviewsPage,;
export default AdminReviewsPage,
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
