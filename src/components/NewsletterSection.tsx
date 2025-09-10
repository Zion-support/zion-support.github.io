import React from 'react';

interface Props {
  className?: string;
}

export const NewsletterSection: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`p-4 ${className}`}>
      <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
      <p>Subscribe to our newsletter for updates.</p>
    </div>
  );
};