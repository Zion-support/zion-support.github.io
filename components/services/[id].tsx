import React from 'react';

interface [id]Props {
  className?: string;
}

const [id]: React.FC<[id]Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>[id]</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default [id];