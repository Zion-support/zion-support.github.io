import React from 'react';

interface AICassandraProps {
  className?: string;
}

const AICassandra: React.FC<AICassandraProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AICassandra</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AICassandra;