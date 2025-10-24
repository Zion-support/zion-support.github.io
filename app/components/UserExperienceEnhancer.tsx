'use client';

import React, { useState, useEffect } from 'react';

interface UserExperienceEnhancerProps {
  children: React.ReactNode;
  className?: string;
}

interface Feedback {
  rating: number;
  comment: string;
  submitted: boolean;
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

  const handleRatingChange = (rating: number) => {
    setFeedback(prev => ({ ...prev, rating }));
  };

  const handleCommentChange = (comment: string) => {
    setFeedback(prev => ({ ...prev, comment }));
  };

  const handleSubmit = () => {
    setFeedback(prev => ({ ...prev, submitted: true }));
    // Here you would typically send feedback to your backend
  };

  return (
    <div className={`user-experience-enhancer ${className}`}>
      {children}
      
      {!feedback.submitted && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">How was your experience?</h3>
          <div className="flex space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingChange(rating)}
                className={`w-8 h-8 rounded-full ${
                  feedback.rating >= rating ? 'bg-yellow-400' : 'bg-gray-200'
                }`}
              >
                ⭐
              </button>
            ))}
          </div>
          <textarea
            value={feedback.comment}
            onChange={(e) => handleCommentChange(e.target.value)}
            placeholder="Any additional feedback?"
            className="w-full p-2 border rounded mb-2"
            rows={3}
          />
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default UserExperienceEnhancer;