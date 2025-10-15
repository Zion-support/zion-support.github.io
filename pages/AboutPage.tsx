import React from 'react';

interface AboutPageProps {
  className?: string;
  children?: React.ReactNode;
}

const AboutPage: React.FC<AboutPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={`aboutpage ${className}`}>
      {children}
    </div>
  );
};

export default AboutPage;