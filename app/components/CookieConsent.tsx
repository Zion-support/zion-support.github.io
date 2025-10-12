import React from 'react';

interface CookieconsentProps {
  children?: React.ReactNode;
}

const Cookieconsent: React.FC<CookieconsentProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Cookieconsent;
