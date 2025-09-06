import React from 'react';

interface Features.pageProps {
  className?: string;
}

const Features.page: React.FC<Features.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Features.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Features.page;