import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';

type Review = {
  id: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
};

const ADMIN_KEY = typeof window === 'undefined' ? '' : (localStorage.getItem('ADMIN_KEY') || 'dev-admin-key');

const AdminReviews: NextPage = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadReviews();
  }, []);

  const loadReviews = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/reviews', {
        headers: {
          'Authorization': `Bearer ${ADMIN_KEY}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setReviews(data.reviews);
      }
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateReviewStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_KEY}`,
        },
        body: JSON.stringify({ status }),
      });
      
      if (response.ok) {
        setReviews(reviews.map(review => 
          review.id === id ? { ...review, status } : review
        ));
      }
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const filteredReviews = reviews.filter(review => 
    filter === 'all' || review.status === filter
  );

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Review Management</h1>
      
      <div className="flex gap-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Reviews</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
        <button
          onClick={loadReviews}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Refresh'}
        </button>
      </div>

      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow border">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{review.name}</h3>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-yellow-400 ${
                          i < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    review.status === 'approved' ? 'bg-green-100 text-green-800' :
                    review.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {review.status}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {review.email} • {new Date(review.created_at).toLocaleString()}
                </p>
              </div>
              <div className="ml-4 flex gap-2">
                {review.status !== 'approved' && (
                  <button
                    onClick={() => updateReviewStatus(review.id, 'approved')}
                    className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                  >
                    Approve
                  </button>
                )}
                {review.status !== 'rejected' && (
                  <button
                    onClick={() => updateReviewStatus(review.id, 'rejected')}
                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                  >
                    Reject
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminReviews;