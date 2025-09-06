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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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

  }
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
},
export default AdminReviewsPage,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

export default AdminReviewsPage,;
export default AdminReviewsPage,
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
