import React from 'react';

interface WhitePapersProps {
  className?: string;
}

const WhitePapers: React.FC<WhitePapersProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>WhitePapers</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default WhitePapers;