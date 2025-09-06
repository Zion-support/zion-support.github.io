import React from 'react';

interface GithubPulseProps {
  className?: string;
}

const GithubPulse: React.FC<GithubPulseProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GithubPulse</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GithubPulse;