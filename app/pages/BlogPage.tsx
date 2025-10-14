import React from 'react';

interface BlogPageProps {
  className?: string;
}

export default function BlogPage({ className = '' }: BlogPageProps) {
  return (
    <div className={`${className}`}>
      <h2>BlogPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}