import React from 'react';

interface TutorialsPageProps {
  className?: string;
}

export default function TutorialsPage({ className = '' }: TutorialsPageProps) {
  return (
    <div className={`${className}`}>
      <h2>TutorialsPage</h2>
      <p>Component content goes here.</p>
    </div>
  );
}