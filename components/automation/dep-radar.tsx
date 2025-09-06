import React from 'react';

interface Dep-radarProps {
  className?: string;
}

const Dep-radar: React.FC<Dep-radarProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Dep-radar</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Dep-radar;