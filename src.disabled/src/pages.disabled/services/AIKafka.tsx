import React from 'react';

interface AIKafkaProps {
  className?: string;
}

const AIKafka: React.FC<AIKafkaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIKafka</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIKafka;