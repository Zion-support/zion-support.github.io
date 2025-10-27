import React from 'react'


interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'homepage ' + className}>
      {children || <p>HomePage component</p>}
    </div>
  );
};

export default HomePage;