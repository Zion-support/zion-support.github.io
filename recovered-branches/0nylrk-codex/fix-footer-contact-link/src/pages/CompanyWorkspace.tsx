import React from 'react';

interface CompanyWorkspaceProps {
  className?: string;
}

const CompanyWorkspace: React.FC<CompanyWorkspaceProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>CompanyWorkspace</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default CompanyWorkspace;