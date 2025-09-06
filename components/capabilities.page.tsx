import React from 'react';

interface Capabilities.pageProps {
  className?: string;
}

const Capabilities.page: React.FC<Capabilities.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Capabilities.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Capabilities.page;