'use client'
import { useEffect, useState } from 'react'

interface UserExperienceEnhancerProps {
  children: React.ReactNode
  className?: string
}

const UserExperienceEnhancer: React.FC<UserExperienceEnhancerProps> = ({
  children,
  className = ''
}) => {

    rating: number
    comment: string
    submitted: boolean
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
    };

    enhanceUX();
  }, []);

  const handleRatingChange = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleCommentChange = (comment: string) => {
    setFeedback(prev => ({ ...prev, comment }));
  };

  const handleSubmit = () => {
    setFeedback(prev => ({ ...prev, submitted: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                User Experience Enhancer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Enhance your user experience with our advanced UX optimization solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Share Your Experience
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="mb-6">
                <label className="block text-white text-lg mb-3">Rate your experience:</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRatingChange(star)}
                      className={`text-3xl ${
                        star <= feedback.rating ? 'text-yellow-400' : 'text-gray-400'
                      } hover:text-yellow-400 transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white text-lg mb-3">Comments:</label>
                <textarea
                  value={feedback.comment}
                  onChange={(e) => handleCommentChange(e.target.value)}
                  className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="Tell us about your experience..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Submit Feedback
              </button>

              {feedback.submitted && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Thank you for your feedback!
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
}