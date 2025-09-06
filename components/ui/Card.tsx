import React from 'react';

interface CardProps {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Card</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Card;