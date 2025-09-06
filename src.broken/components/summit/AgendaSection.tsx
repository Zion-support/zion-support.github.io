import React from 'react';

interface AgendaSectionProps {
  className?: string;
}

const AgendaSection: React.FC<AgendaSectionProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>AgendaSection</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default AgendaSection;