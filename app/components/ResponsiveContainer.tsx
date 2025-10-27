import React from 'react';

interface ResponsiveContainerProps {
  className?: string;
  children?: React.ReactNode;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'responsivecontainer ' + className}>
      {children || <p>ResponsiveContainer component</p>}
    </div>
  );
};

export default function ResponsiveContainer() { return <div>ResponsiveContainer Component</div>; }
