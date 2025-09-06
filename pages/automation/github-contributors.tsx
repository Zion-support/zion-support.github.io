import React from 'react';

interface GithubContributorsProps {
  className?: string;
}

const GithubContributors: React.FC<GithubContributorsProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>GithubContributors</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default GithubContributors;