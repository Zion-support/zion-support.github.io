import React from 'react';

interface CompanyProps {
  className?: string;
}

const Company: React.FC<CompanyProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Company</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Company;