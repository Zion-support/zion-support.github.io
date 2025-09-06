import React from 'react';

interface Case-studies.pageProps {
  className?: string;
}

const Case-studies.page: React.FC<Case-studies.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Case-studies.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Case-studies.page;