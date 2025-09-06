import React, { useState, useEffect } from 'react';
import Head from 'next/head';

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
];

const AdminReviewsPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('all');

  useEffect(() => {
    // Simulate loading reviews
    setTimeout(() => {
      setReviews(mockReviews);
      setLoading(false);
    }, 1000);
  }, []);

  const handleStatusChange = (reviewId: string, newStatus: Review['status']) => {
    setReviews(prev => 
      prev.map(review => 
        review.id === reviewId 
          ? { ...review, status: newStatus }
          : review
      )
    );
  };

  const filteredReviews = reviews.filter(review => 
    filter === 'all' || review.status === filter
  );

  const pendingReviews = reviews.filter(r => r.status === 'pending');
  const approvedReviews = reviews.filter(r => r.status === 'approved');
  const rejectedReviews = reviews.filter(r => r.status === 'rejected');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

        </div>

  );
};

export default AdminReviewsPage;
