import React from 'react';

interface HomePageProps {
  className?: string;
}

const HomePage: React.FC<HomePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>HomePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default HomePage;