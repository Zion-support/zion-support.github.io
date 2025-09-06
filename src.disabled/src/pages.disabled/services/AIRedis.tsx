import React from 'react';

interface AIRedisProps {
  className?: string;
}

const AIRedis: React.FC<AIRedisProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIRedis</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIRedis;