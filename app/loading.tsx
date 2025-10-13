import React from 'react';

interface loadingProps {
  // Add props here
}

export default function loading({}: loadingProps) {
  return (
    <div className="loading">
      <h2>loading</h2>
      <p>Component under development.</p>
    </div>
  );
}