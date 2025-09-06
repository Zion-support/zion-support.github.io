import React from 'react';

interface HomeProps {
  className?: string;
}

const Home: React.FC<HomeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Home</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Home;