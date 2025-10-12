import React from 'react';

interface SearchmodalProps {
  children?: React.ReactNode;
}

const Searchmodal: React.FC<SearchmodalProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Searchmodal;
