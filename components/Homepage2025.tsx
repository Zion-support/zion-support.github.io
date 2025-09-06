import React from 'react';

interface Homepage2025Props {
  className?: string;
}

const Homepage2025: React.FC<Homepage2025Props> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Homepage2025</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Homepage2025;