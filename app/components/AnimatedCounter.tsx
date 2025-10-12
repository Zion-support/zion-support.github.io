import React from 'react';

interface AnimatedcounterProps {
  children?: React.ReactNode;
}

const Animatedcounter: React.FC<AnimatedcounterProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Animatedcounter;
