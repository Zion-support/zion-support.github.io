import React from 'react';

interface MobileThemeProviderProps {
  className?: string;
}

const MobileThemeProvider: React.FC<MobileThemeProviderProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>MobileThemeProvider</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default MobileThemeProvider;