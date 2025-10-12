'use client';
import React, { useEffect, useState } from 'react';

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
          button.classList.add('loading');
          setTimeout(() => {
            button.classList.remove('loading');
          }, 1000);
        });
      });

      // Add focus indicators
      const focusableElements = document.querySelectorAll('button, input, select, textarea, a');
      focusableElements.forEach(element => {
        element.addEventListener('focus', () => {
          element.classList.add('focus-visible');
        });
        element.addEventListener('blur', () => {
          element.classList.remove('focus-visible');
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
    setFeedback(prev => ({ ...prev, submitted: true }));
    
    // In a real app, you would send this to your backend
    console.log('User feedback:', feedback);
  };

  return (
    <div className={`user-experience-enhanced ${className}`}>
      {children}
      
      {/* Feedback Modal */}
      {feedback.submitted && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold text-white mb-4">Thank you for your feedback!</h3>
            <p className="text-gray-300 mb-6">
              Your feedback helps us improve the user experience.
            </p>
            <button
              onClick={() => setFeedback(prev => ({ ...prev, submitted: false }))}
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
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