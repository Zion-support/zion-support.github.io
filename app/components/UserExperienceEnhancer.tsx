'use client';
import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  className = ''
}) => {
  const [feedback, setFeedback] = useState<{
    rating: number;
    comment: string;
    submitted: boolean;
  }>({
    rating: 0,
    comment: '',
    submitted: false
  });

  useEffect(() => {
    // UX enhancement logic
    const enhanceUX = () => {
      // Add smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';

      // Add loading states for interactive elements
      const buttons = document.querySelectorAll('button');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
          button.style.opacity = '0.7';
          setTimeout(() => {
            button.style.opacity = '1';
          }, 200);
        });
      });

      // Add focus indicators
      const focusableElements = document.querySelectorAll('button, input, textarea, select, a[href]');
      focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
        });
      });
    };

    enhanceUX();

    // Cleanup function
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(prev => ({ ...prev, submitted: true }));
    // In a real application, you would send this feedback to your backend
    console.log('Feedback submitted:', feedback);
  };

  return (
    <div className={`user-experience-enhancer ${className}`}>
      {children}
      
      {/* Feedback Modal */}
      {feedback.submitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Thank you for your feedback!</h3>
            <p className="text-gray-600 mb-4">
              Your feedback helps us improve the user experience.
            </p>
            <button
              onClick={() => setFeedback(prev => ({ ...prev, submitted: false }))}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserExperienceEnhancer;