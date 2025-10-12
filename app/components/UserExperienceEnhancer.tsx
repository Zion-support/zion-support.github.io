'use client';
import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({ children }) => {
  const [feedback, setFeedback] = useState<{
    rating: number;
    comment: string;
    submitted: boolean;
  }>({
    rating: 0,
    comment: '',
    submitted: false,
  });

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
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
      const focusableElements = document.querySelectorAll('button, input, textarea, select, a[href]');
      focusableElements.forEach((element) => {
        element.addEventListener('focus', () => {
          element.classList.add('ring-2', 'ring-blue-500', 'ring-opacity-50');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('ring-2', 'ring-blue-500', 'ring-opacity-50');
        });
      });

      // Add keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
        }
      });

      document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
      });
    };

    enhanceUX();
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback((prev) => ({ ...prev, submitted: true }));
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', feedback);
  };

  return (
      {children}
      {/* Feedback Modal */}
      {!feedback.submitted && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
            <h3 className="text-lg font-semibold mb-2">How was your experience?</h3>
            <form onSubmit={handleFeedbackSubmit}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFeedback((prev) => ({ ...prev, rating: star }))}
                      className={`text-2xl ${
                        star <= feedback.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Comment (optional)
                </label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => setFeedback((prev) => ({ ...prev, comment: e.target.value }))}
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  rows={3}
                  placeholder="Tell us about your experience..."
                />
              </div>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setFeedback((prev) => ({ ...prev, submitted: true }))}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-400"
                >
                  Dismiss
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

  );
};

export default UserExperienceEnhancer;