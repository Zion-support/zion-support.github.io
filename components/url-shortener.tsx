import React from 'react';

interface Url-shortenerProps {
  className?: string;
}

const Url-shortener: React.FC<Url-shortenerProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Url-shortener</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Url-shortener;