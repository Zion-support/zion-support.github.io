import React, { useState, useEffect } from 'react'
import Head from 'next/head'
interface Review {
  id: string
  userId: string
  userName: string
  rating: number
  comment: string
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string
  projectId?: string
  projectName?: string
}

const mockReviews: Review[] = [
  {
    id: '1',
    userId: 'user123',
    userName: 'John Doe',
    rating: 5,
    comment: 'Excellent work! The team delivered exactly what we needed on time and within budget.',
    status: 'pending',
    createdAt: '2025-01-15T10:00:00Z',
    projectId: 'proj1',
    projectName: 'E-commerce Platform'
  },
  {
    id: '2',
    userId: 'user456',
    userName: 'Jane Smith',
    rating: 4,
    comment: 'Good communication and quality work. Would recommend for future projects.',
    status: 'approved',
    createdAt: '2025-01-14T15:30:00Z',
    projectId: 'proj2',
    projectName: 'Mobile App Development'
  },
  {
    id: '3',
    userId: 'user789',
    userName: 'Mike Johnson',
    rating: 2,
    comment: 'Project was delayed and had some issues with the final deliverable.',
    status: 'pending',
    createdAt: '2025-01-13T09:15:00Z',
    projectId: 'proj3',
    projectName: 'Web Application'
  }
]
const AdminReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all')
  useEffect(() => {
    // Simulate loading reviews
    setTimeout(() => {
      setReviews(mockReviews)
      setLoading(false)
    }, 1000)
  }, [])
  const handleStatusChange = (reviewId: string, newStatus: Review['status']) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { ...review, status: newStatus }
          : review
      )
    )
  }
  const filteredReviews = reviews.filter(review => 
    filter === 'all' || review.status === filter
  )
  const pendingReviews = reviews.filter(r => r.status === 'pending')
  const approvedReviews = reviews.filter(r => r.status === 'approved')
  const rejectedReviews = reviews.filter(r => r.status === 'rejected')
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800'
      case 'rejected': return 'bg-red-100 text-red-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ))
  }
  return (
    <>
      <Head>
        <title>Admin Reviews - Zion Tech Group</title>
        <meta name="description" content="Manage client reviews and feedback" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Client Reviews Management</h1>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Total Reviews</h3>
            <p className="text-2xl font-bold">{reviews.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Pending</h3>
            <p className="text-2xl font-bold text-yellow-600">{pendingReviews.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Approved</h3>
            <p className="text-2xl font-bold text-green-600">{approvedReviews.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-4">
            <h3 className="text-sm font-medium text-gray-500">Rejected</h3>
            <p className="text-2xl font-bold text-red-600">{rejectedReviews.length}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded ${
                filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded ${
                filter === 'pending' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Pending ({pendingReviews.length})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded ${
                filter === 'approved' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Approved ({approvedReviews.length})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`px-4 py-2 rounded ${
                filter === 'rejected' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              Rejected ({rejectedReviews.length})
            </button>
          </div>
        </div>

        {/* Reviews List */}
        {loading ? (
          <div className="text-center py-8">Loading reviews...</div>
        ) : filteredReviews.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No reviews found matching your criteria.
          </div>
        ) : (
          <div className="space-y-4">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{review.userName}</h3>
                      <div className="flex items-center">
                        {renderStars(review.rating)}
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getStatusColor(review.status)}`}>
                        {review.status}
                      </span>
                    </div>
                    
                    {review.projectName && (
                      <p className="text-sm text-gray-600 mb-2">
                        Project: {review.projectName}
                      </p>
                    )}
                    
                    <p className="text-gray-700 mb-3">{review.comment}</p>
                    
                    <p className="text-xs text-gray-500">
                      Submitted: {new Date(review.createdAt).toLocaleString()}
                    </p>
                  </div>
                  
                  {review.status === 'pending' && (
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => handleStatusChange(review.id, 'approved')}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleStatusChange(review.id, 'rejected')}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
export default AdminReviewsPage