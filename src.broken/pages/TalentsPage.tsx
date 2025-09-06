import React from 'react';

interface TalentsPageProps {
  className?: string;
}

const TalentsPage: React.FC<TalentsPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentsPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentsPage;