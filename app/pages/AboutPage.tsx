import React from 'react'


interface AboutPageProps {
}

const AboutPage: React.FC<AboutPageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'aboutpage ' + className}>
      {children || <p>AboutPage component</p>}
    </div>
  );
};

export default AboutPage;