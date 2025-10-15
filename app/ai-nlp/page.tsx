import React from 'react';

interface pageProps {
  className?: string;
  children?: React.ReactNode;
}

const page: React.FC<pageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`page ${className}`}>
      {children}
    </div>
  );
};

export default page;