import React from 'react';

interface LinkedinProps {
  className?: string;
}

const Linkedin: React.FC<LinkedinProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Linkedin</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Linkedin;