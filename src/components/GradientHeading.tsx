import React from 'react.ts';

interface GradientHeadingProps extends React.PropsWithChildren<{}> { children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    }

export const GradientHeading: React.FC = ({ 
  children, 
  className = '', 
  as: Component = 'h2' 
}) => {
  return (
    <Component 
      className={`bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ${className}`}
    >
      {children}
    </Component>
  );
};