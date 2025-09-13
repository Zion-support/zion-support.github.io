import React, { useState, useEffect } from 'react';

interface Feedback {
  id: string;
  type: 'bug' | 'feature' | 'improvement' | 'complaint' | 'praise';
  message: string;
  user: string;
  timestamp: string;
  status: 'new' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  rating?: number;
}

export default function UserFeedbackSystem() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<'all' | 'new' | 'in-progress' | 'resolved'>('all');
  const [newFeedback, setNewFeedback] = useState('');

  useEffect(() => {
    // Simulate feedback data
    const generateFeedback = () => {
      const feedbackTypes = ['bug', 'feature', 'improvement', 'complaint', 'praise'] as const;
      const statuses = ['new', 'in-progress', 'resolved', 'closed'] as const;
      const priorities = ['low', 'medium', 'high', 'urgent'] as const;
      
      const sampleFeedback: Feedback[] = [
        {
          id: '1',
          type: 'praise',
          message: 'The AI 2025 breakthrough content is absolutely amazing! The ROI calculations are spot on.',
          user: 'Sarah M.',
          timestamp: '2025-01-08 14:30',
          status: 'resolved',
          priority: 'low',
          rating: 5
        },
        {
          id: '2',
          type: 'feature',
          message: 'Would love to see more interactive demos for the quantum computing solutions.',
          user: 'John D.',
          timestamp: '2025-01-08 13:45',
          status: 'in-progress',
          priority: 'medium',
          rating: 4
        },
        {
          id: '3',
          type: 'bug',
          message: 'The performance monitor widget sometimes shows incorrect metrics on mobile.',
          user: 'Mike R.',
          timestamp: '2025-01-08 12:20',
          status: 'new',
          priority: 'high',
          rating: 2
        },
        {
          id: '4',
          type: 'improvement',
          message: 'The case study page could benefit from a downloadable PDF version.',
          user: 'Lisa K.',
          timestamp: '2025-01-08 11:15',
          status: 'in-progress',
          priority: 'medium',
          rating: 4
        },
        {
          id: '5',
          type: 'praise',
          message: 'Excellent content quality and the analytics dashboard is very insightful!',
          user: 'David L.',
          timestamp: '2025-01-08 10:30',
          status: 'resolved',
          priority: 'low',
          rating: 5
        },
        {
          id: '6',
          type: 'bug',
          message: 'Some images are not loading properly on the AI 2026 breakthrough page.',
          user: 'Emma W.',
          timestamp: '2025-01-08 09:45',
          status: 'new',
          priority: 'high',
          rating: 3
        },
        {
          id: '7',
          type: 'feature',
          message: 'Would be great to have a chatbot for instant support.',
          user: 'Alex T.',
          timestamp: '2025-01-08 08:30',
          status: 'new',
          priority: 'medium',
          rating: 4
        },
        {
          id: '8',
          type: 'complaint',
          message: 'The site is loading slowly on my connection.',
          user: 'Robert H.',
          timestamp: '2025-01-08 07:20',
          status: 'in-progress',
          priority: 'urgent',
          rating: 2
        }
      ];

      setFeedback(sampleFeedback);
    };

    generateFeedback();
    
    // Simulate new feedback coming in
    const interval = setInterval(() => {
      if (Math.random() > 0.8) {
        const newItems = [
          'Great content, keep it up!',
          'The analytics are very helpful',
          'Would love more case studies',
          'Site performance is excellent',
          'The AI predictions are fascinating'
        ];
        
        const newItem: Feedback = {
          id: Date.now().toString(),
          type: ['praise', 'feature', 'improvement'][Math.floor(Math.random() * 3)] as any,
          message: newItems[Math.floor(Math.random() * newItems.length)],
          user: `User ${Math.floor(Math.random() * 1000)}`,
          timestamp: new Date().toLocaleString(),
          status: 'new',
          priority: ['low', 'medium'][Math.floor(Math.random() * 2)] as any,
          rating: Math.floor(Math.random() * 3) + 3
        };
        
        setFeedback(prev => [newItem, ...prev.slice(0, 9)]);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const filteredFeedback = feedback.filter(item => 
    filter === 'all' || item.status === filter
  );

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'bug': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      case 'feature': return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-400/20';
      case 'improvement': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'complaint': return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20';
      case 'praise': return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case 'in-progress': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'resolved': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'closed': return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'text-red-600 dark:text-red-400';
      case 'high': return 'text-orange-600 dark:text-orange-400';
      case 'medium': return 'text-yellow-600 dark:text-yellow-400';
      case 'low': return 'text-green-600 dark:text-green-400';
      default: return 'text-gray-600 dark:text-gray-400';
    }
  };

  const handleSubmitFeedback = () => {
    if (newFeedback.trim()) {
      const newItem: Feedback = {
        id: Date.now().toString(),
        type: 'improvement',
        message: newFeedback,
        user: 'Current User',
        timestamp: new Date().toLocaleString(),
        status: 'new',
        priority: 'medium',
        rating: 4
      };
      
      setFeedback(prev => [newItem, ...prev.slice(0, 9)]);
      setNewFeedback('');
    }
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200"
      >
        {isVisible ? 'Hide' : 'Show'} Feedback
      </button>

      {isVisible && (
        <div className="absolute top-16 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-96 border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            User Feedback System
          </h3>
          
          {/* Filter Controls */}
          <div className="mb-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded w-full"
            >
              <option value="all">All Feedback</option>
              <option value="new">New</option>
              <option value="in-progress">In Progress</option>
              <option value="resolved">Resolved</option>
            </select>
          </div>

          {/* Add New Feedback */}
          <div className="mb-4">
            <textarea
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
              placeholder="Add your feedback..."
              className="w-full text-xs p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              rows={2}
            />
            <button
              onClick={handleSubmitFeedback}
              className="mt-2 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
            >
              Submit Feedback
            </button>
          </div>

          {/* Feedback List */}
          <div className="space-y-2">
            {filteredFeedback.map((item) => (
              <div key={item.id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded ${getTypeColor(item.type)}`}>
                      {item.type}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${getStatusColor(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className={`text-xs font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority}
                    </span>
                    {item.rating && (
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-xs ${i < item.rating! ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ★
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-gray-700 dark:text-gray-300 mb-2">
                  {item.message}
                </p>
                
                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                  <span>{item.user}</span>
                  <span>{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-gray-600 dark:text-gray-300">Total Feedback:</span>
                <span className="ml-2 font-medium text-gray-900 dark:text-white">
                  {feedback.length}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">New:</span>
                <span className="ml-2 font-medium text-blue-600 dark:text-blue-400">
                  {feedback.filter(item => item.status === 'new').length}
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">Avg Rating:</span>
                <span className="ml-2 font-medium text-yellow-600 dark:text-yellow-400">
                  {feedback.filter(item => item.rating).length > 0 
                    ? (feedback.filter(item => item.rating).reduce((sum, item) => sum + (item.rating || 0), 0) / feedback.filter(item => item.rating).length).toFixed(1)
                    : 'N/A'
                  }
                </span>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-300">Resolved:</span>
                <span className="ml-2 font-medium text-green-600 dark:text-green-400">
                  {feedback.filter(item => item.status === 'resolved').length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}