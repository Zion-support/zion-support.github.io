import React from 'react';

interface NewsletterSignupProps {
  className?: string;
  children?: React.ReactNode;
}

export default function NewsletterSignup({ 
  className = '',
  children 
}: NewsletterSignupProps) {
  return (
    <div className={`bg-gray-800 rounded-lg p-4 ${className}`}>
      <h3 className="text-white font-semibold mb-2">NewsletterSignup</h3>
      {children && <div className="text-gray-300">{children}</div>}
    </div>
  );
}
