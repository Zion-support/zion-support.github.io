import React from 'react';

interface SearchbarProps {
  children?: React.ReactNode;
}

const Searchbar: React.FC<SearchbarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Searchbar;
