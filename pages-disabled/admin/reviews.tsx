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
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
=======

import React, { useEffect, useState } from 'react';'
import type { NextPage } from 'next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import type { Review } from '../../types/reviews';
'
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') |'dev-admin-key')
const AdminReviewsPage: NextPage = () => {}
  const [pending, setPending] = useState<Review[]>([])
  const [all, setAll] = useState<Review[]>([])'
  const [adminKey, setAdminKey] = useState('')
  async function refresh() { return null; }
    if (res.ok) {}
      setAll(data.reviews)
      setPending(data.reviews.filter((r: Review) => !r.approved && !r.removed))
    }
  }
useEffect(() => { refresh() }, [])
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function moderate(action: 'approve' | 'remove', reviewId: string) {
    const res = await fetch('/api/reviews/moderate', {
      method: 'POST'
      headers: {
<<<<<<< HEAD
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'
    },
    body: JSON.stringify({ action, reviewId })});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    if (res.ok) refresh()
  }
<<<<<<< HEAD
const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');
const AdminReviewsPage: NextPage = () => {;
  const [pending, setPending] = useState<Review[]>([]);
  const [all, setAll] = useState<Review[]>([]);'
  const [adminKey, setAdminKey] = useState('');
  async function refresh() { return null; }
      } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  }
}
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  useEffect(() => { refresh() }, []),;'
  async function moderate() { return null; }
        'Content-Type': 'application/jsonx-admin-key': adminKey || 'dev-admin-key'},;
      body: JSON.stringify({ action, reviewId })}),;
    if (res.ok) refresh();
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  return (
    <main className='max-w-5xl mx-auto p-6 space-y-6'>
      <h1 className='text-2xl font-semibold'>Review Moderation</h1>

      <div className='enhanced-card'>
        <label className='block text-sm mb-2'>Admin Key</label>
        <input
          className='border p-2 rounded w-full'
          value={adminKey}
          onChange={e => setAdminKey(e.target.value)}
          placeholder='Enter admin key'
        />
      </div>

      <section className='enhanced-card'>
        <h2 className='text-xl font-semibold mb-4'>Pending Reviews</h2>
        <div className='space-y-4'>
          {pending.map(r => (
            <div key={r.id} className='border rounded p-3'>
              <div className='text-sm text-gray-600 mb-1'>
                Project: {r.projectId} • To: {r.toRole} {r.toId}
              </div>
              <div className='font-medium'>
                {r.rating}★ — {r.text}
              </div>
              <div className='mt-2 flex gap-2'>
                <button
                  className='enhanced-button enhanced-button-primary'
                  onClick={() => moderate('approve', r.id)}
                >
                  Approve
                </button>
                <button
                  className='enhanced-button enhanced-button-secondary'
                  onClick={() => moderate('remove', r.id)}
                >
                  Remove
                </button>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              </div>
            </div>
          ))}
          {!pending.length && <div>No pending reviews.</div>}
        </div>
</section>

"
      <section className="enhanced-card">"
        <h2 className="text-xl font-semibold mb-2">All Reviews</h2>"
        <pre className="text-xs whitespace-pre-wrap">{JSON.stringify(all, null, 2)}</pre>
      </section>
    </main>
  )

},
export default AdminReviewsPage,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD

},

export default AdminReviewsPage,

},
export default AdminReviewsPage,
},
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default AdminReviewsPage,;
export default AdminReviewsPage,

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
<section className='enhanced-card'>
        <h2 className='text-xl font-semibold mb-2'>All Reviews</h2>
        <pre className='text-xs whitespace-pre-wrap'>
          {JSON.stringify(all, null, 2)}
        </pre>
      </section>
    </main>
)

},
export default AdminReviewsPage,
},

},
export default AdminReviewsPage,

},
export default AdminReviewsPage,
},

export default AdminReviewsPage,;
export default AdminReviewsPage,
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
