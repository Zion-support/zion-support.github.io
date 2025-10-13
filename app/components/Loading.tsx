import React from 'react';

interface LoadingProps {
  // Add props here
}

export default function Loading({}: LoadingProps) {
  return (
    <div className="loading">
      <h2>Loading</h2>
      <p>Component under development.</p>
    </div>
  );
}