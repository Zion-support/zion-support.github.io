<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
import React, { useEffect, useState } from 'react',;
import type { NextPage } from 'next',;
import type { Review } from '../../types/reviews',;
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key'),


  async function refresh() {
    const res = await fetch('/api/admin/debug/reviews'),
    const data = await res.json(),
    if (res.ok) {
      setAll(data.reviews),
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
        'Content-Type': 'application/jsonx-admin-key': adminKey |'dev-admin-key'}
      body: JSON.stringify({ action, reviewId })})
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======


    if (res.ok) refresh()
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
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
          ))}
          {!pending.length && <div>No pending reviews.</div>}
        </div>
      </section>


      <section className="enhanced-card">
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
<<<<<<< HEAD
}
export default AdminReviewsPage;

},
export default AdminReviewsPage,
},
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
export default AdminReviewsPage;
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

},
export default AdminReviewsPage,
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
},
export default AdminReviewsPage,
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
},
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5

export default AdminReviewsPage,;
export default AdminReviewsPage,
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
