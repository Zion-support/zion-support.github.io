import React from 'react';

interface Download.pageProps {
  className?: string;
}

const Download.page: React.FC<Download.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Download.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Download.page;