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
  }
}
    } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
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
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='max-w-4xl mx-auto py-8'>
        <h1 className='text-2xl font-bold mb-6'>Page</h1>
        <div className='bg-white rounded-lg shadow p-6'>
          <p className='text-gray-600'>Content coming soon.</p>
        </div>
      </div>
    </div>
  )
}
export default AdminReviewsPage;
