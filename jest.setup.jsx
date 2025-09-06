import React from 'react';

const Jest.setup = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Jest.setup</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Jest.setup;