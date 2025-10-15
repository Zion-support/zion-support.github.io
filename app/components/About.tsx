import React from 'react';

interface AboutProps {
  className?: string;
  children?: React.ReactNode;
}

const About: React.FC<AboutProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`about-component ${className}`} {...props}>
      {children || (
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2">About</h3>
          <p className="text-gray-300">This component is ready for implementation.</p>
        </div>
      )}
    </div>
  );
};

export default About;