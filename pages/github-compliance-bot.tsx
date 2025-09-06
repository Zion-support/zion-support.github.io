import React from 'react';

interface GithubComplianceBotProps {
  className?: string;
}

const GithubComplianceBot: React.FC<GithubComplianceBotProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GithubComplianceBot</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GithubComplianceBot;