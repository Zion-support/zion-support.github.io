import React from 'react';

interface ContentcarouselProps {
  children?: React.ReactNode;
}

const Contentcarousel: React.FC<ContentcarouselProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Contentcarousel;
