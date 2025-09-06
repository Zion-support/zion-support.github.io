import React from 'react';

interface GlowCardProps {
  className?: string;
}

const GlowCard: React.FC<GlowCardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GlowCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GlowCard;