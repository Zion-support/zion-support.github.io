import React from 'react';

interface errorProps {
  // Add props here
}

export default function error({}: errorProps) {
  return (
    <div className="error">
      <h2>error</h2>
      <p>Component under development.</p>
    </div>
  );
}