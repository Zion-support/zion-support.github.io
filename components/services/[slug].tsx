import React from 'react';

interface [slug]Props {
  className?: string;
}

const [slug]: React.FC<[slug]Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>[slug]</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default [slug];