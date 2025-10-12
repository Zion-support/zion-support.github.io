import React from 'react';

interface NewslettersignupProps {
  children?: React.ReactNode;
}

const Newslettersignup: React.FC<NewslettersignupProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Newslettersignup;
