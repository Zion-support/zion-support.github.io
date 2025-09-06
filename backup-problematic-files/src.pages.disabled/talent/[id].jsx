import React from 'react';

const [id] = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>[id]</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default [id];