import React from 'react';

interface Solutions.pageProps {
  className?: string;
}

const Solutions.page: React.FC<Solutions.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Solutions.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Solutions.page;