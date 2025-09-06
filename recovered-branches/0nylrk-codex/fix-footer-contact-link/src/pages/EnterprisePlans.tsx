import React from 'react';

interface EnterprisePlansProps {
  className?: string;
}

const EnterprisePlans: React.FC<EnterprisePlansProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterprisePlans</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterprisePlans;