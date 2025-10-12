import React from 'react';

interface AnimatedtextProps {
  children?: React.ReactNode;
}

const Animatedtext: React.FC<AnimatedtextProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Animatedtext;
