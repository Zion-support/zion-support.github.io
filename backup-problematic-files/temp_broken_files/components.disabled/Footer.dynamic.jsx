import React from 'react';

const Footer.dynamic = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Footer.dynamic</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Footer.dynamic;