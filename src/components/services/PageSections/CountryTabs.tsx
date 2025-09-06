import React from 'react';

interface CountryTabsProps {
  className?: string;
}

const CountryTabs: React.FC<CountryTabsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CountryTabs</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CountryTabs;