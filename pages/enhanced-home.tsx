import React from 'react';

interface EnhancedHomeProps {
  className?: string;
}

const EnhancedHome: React.FC<EnhancedHomeProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnhancedHome</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnhancedHome;