import React from 'react';

interface AIGrafanaProps {
  className?: string;
}

const AIGrafana: React.FC<AIGrafanaProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AIGrafana</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AIGrafana;