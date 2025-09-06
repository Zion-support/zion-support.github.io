import React from 'react';

interface Cybersecurity.pageProps {
  className?: string;
}

const Cybersecurity.page: React.FC<Cybersecurity.pageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Cybersecurity.page</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Cybersecurity.page;