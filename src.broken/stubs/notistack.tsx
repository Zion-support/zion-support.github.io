import React from 'react';

interface NotistackProps {
  className?: string;
}

const Notistack: React.FC<NotistackProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Notistack</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Notistack;