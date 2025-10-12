import React from 'react';

interface ContentstatisticsProps {
  children?: React.ReactNode;
}

const Contentstatistics: React.FC<ContentstatisticsProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Contentstatistics;
