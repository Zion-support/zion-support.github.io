'use client'
import React from 'react';

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="text-xl font-semibold mb-4">Newsletter Signup</h2>
      <p className="text-gray-600">This is a placeholder component for Newsletter Signup.</p>
    </div>
  );
};

export default NewsletterSignup;
