import React from 'react';

interface Index.pageProps {
  className?: string;
}

const Index.page: React.FC<Index.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Index.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index.page;