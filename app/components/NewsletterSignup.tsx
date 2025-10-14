import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className = '', children }) => {
  return (
    <div className={`newslettersignup-component ${className}`}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">NewsletterSignup</h3>
          <p className="text-gray-600">This is the NewsletterSignup component.</p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;