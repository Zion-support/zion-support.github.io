import React from 'react';

interface Home2026Props {
  className?: string;
}

const Home2026: React.FC<Home2026Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Home2026</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Home2026;