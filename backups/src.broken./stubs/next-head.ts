import React from 'react';

// Next.js Head stub for Vite compatibility
interface HeadProps {
  children: React.ReactNode;
}

export const Head: React.FC<HeadProps> = ({ children }) => {
  // In a real implementation, this would manage document head
  // For Vite, we'll just return the children
  return React.createElement(React.Fragment, {}, children);
};

export default Head;