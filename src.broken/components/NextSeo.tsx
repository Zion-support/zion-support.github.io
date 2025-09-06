import React from 'react';

interface NextSeoProps {
  className?: string;
}

const NextSeo: React.FC<NextSeoProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NextSeo</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NextSeo;