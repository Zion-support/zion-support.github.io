import React from 'react';

interface TermsPageProps {
  className?: string;
}

export default function TermsPage({ className = '' }: TermsPageProps) {
  return (
    <div className={`${className}`}>
      <h2>TermsPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}