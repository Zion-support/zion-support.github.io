import React from 'react';

interface GithubAgentReposProps {
  className?: string;
}

const GithubAgentRepos: React.FC<GithubAgentReposProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GithubAgentRepos</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GithubAgentRepos;