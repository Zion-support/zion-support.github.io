'use client';

import React, { useState, useEffect } from 'react';

interface Feedback {
  rating: number;
  comment: string;
  submitted: boolean;
}

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  className = ''
}) => {
  const [feedback, setFeedback] = useState<Feedback>({
    rating: 0,
    comment: '',
    submitted: false
  });

  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    // Add user experience enhancements
    const addSmoothScrolling = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };

    const addFocusManagement = () => {
      // Improve focus management for better accessibility
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      focusableElements.forEach((element) => {
        element.addEventListener('focus', (e) => {
          (e.target as HTMLElement).classList.add('focus:ring-2', 'focus:ring-blue-500');
        });
        
        element.addEventListener('blur', (e) => {
          (e.target as HTMLElement).classList.remove('focus:ring-2', 'focus:ring-blue-500');
        });
      });
    };

    addSmoothScrolling();
    addFocusManagement();
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(prev => ({ ...prev, submitted: true }));
    setShowFeedback(false);
  };

  return (
    <div className={className}>
      {children}
      
      {/* Feedback Button */}
      <button
        onClick={() => setShowFeedback(true)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        aria-label="Provide feedback"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
        </svg>
      </button>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">How was your experience?</h3>
            
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Rating (1-5)
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      onClick={() => setFeedback(prev => ({ ...prev, rating }))}
                      className={`w-8 h-8 rounded-full ${
                        feedback.rating >= rating
                          ? 'bg-yellow-400 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments (optional)
                </label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback(prev => ({ ...prev, comment: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows={3}
                  placeholder="Tell us about your experience..."
                />
              </div>

              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowFeedback(false)}
                  className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserExperienceEnhancer;