import React from 'react';

interface MoreTalentsPageProps {
  className?: string;
}

const MoreTalentsPage: React.FC<MoreTalentsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MoreTalentsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MoreTalentsPage;