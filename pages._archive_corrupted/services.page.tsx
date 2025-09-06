import React from 'react';

interface Services.pageProps {
  className?: string;
}

const Services.page: React.FC<Services.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Services.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Services.page;