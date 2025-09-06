import React from 'react';

interface EnterprisePageProps {
  className?: string;
}

const EnterprisePage: React.FC<EnterprisePageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>EnterprisePage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default EnterprisePage;