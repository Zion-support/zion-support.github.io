'use client';

import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

interface FeedbackState {
  rating: number;
  comment: string;
  submitted: boolean;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  className = ''
}) => {
  const [feedback, setFeedback] = useState<FeedbackState>({
    rating: 0,
    comment: '',
    submitted: false,
  });

  useEffect(() => {
    // UX enhancement logic
    const enhanceUserExperience = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';

      // Add loading states for interactive elements
      const buttons = document.querySelectorAll('button');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          button.classList.add('opacity-75', 'cursor-not-allowed');
          setTimeout(() => {
            button.classList.remove('opacity-75', 'cursor-not-allowed');
          }, 1000);
        });
      });

      // Add focus indicators
      const focusableElements = document.querySelectorAll('button, a, input, textarea, select');
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('ring-2', 'ring-purple-500', 'ring-opacity-50');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('ring-2', 'ring-purple-500', 'ring-opacity-50');
        });
      });
    };

    enhanceUserExperience();
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(prev => ({ ...prev, submitted: true }));
    // Handle feedback submission logic here
  };

  return (
    <div className={className}>
      {children}
      
      {/* Feedback Widget */}
      {!feedback.submitted && (
        <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 max-w-sm z-50">
          <h3 className="text-sm font-semibold mb-2">How was your experience?</h3>
          <form onSubmit={handleFeedbackSubmit}>
            <div className="mb-2">
              <label className="block text-xs text-gray-600 mb-1">Rating:</label>
              <select
                value={feedback.rating}
                onChange={(e) => setFeedback(prev => ({ ...prev, rating: Number(e.target.value) }))}
                className="w-full text-xs border rounded px-2 py-1"
              >
                <option value={0}>Select rating</option>
                <option value={1}>1 - Poor</option>
                <option value={2}>2 - Fair</option>
                <option value={3}>3 - Good</option>
                <option value={4}>4 - Very Good</option>
                <option value={5}>5 - Excellent</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block text-xs text-gray-600 mb-1">Comment:</label>
              <textarea
                value={feedback.comment}
                onChange={(e) => setFeedback(prev => ({ ...prev, comment: e.target.value }))}
                className="w-full text-xs border rounded px-2 py-1 h-16 resize-none"
                placeholder="Tell us more about your experience..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white text-xs py-1 px-2 rounded hover:bg-purple-700 transition-colors"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserExperienceEnhancer;