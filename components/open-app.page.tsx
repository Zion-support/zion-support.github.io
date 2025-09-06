import React from 'react';

interface Open-app.pageProps {
  className?: string;
}

const Open-app.page: React.FC<Open-app.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Open-app.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Open-app.page;