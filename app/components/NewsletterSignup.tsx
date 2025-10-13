import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterSignup({ className = '', children }: NewsletterSignupProps) {
  return (
    <div className={`newslettersignup ${className}`}>
      {children || (
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-white mb-2">NewsletterSignup</h3>
          <p className="text-gray-300">Component under construction</p>
        </div>
      )}
    </div>
  );
}