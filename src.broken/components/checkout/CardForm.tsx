import React from 'react';

interface CardFormProps {
  className?: string;
}

const CardForm: React.FC<CardFormProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CardForm</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CardForm;