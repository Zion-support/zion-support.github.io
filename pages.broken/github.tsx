import React from 'react';

interface GithubProps {
  className?: string;
}

const Github: React.FC<GithubProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Github</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Github;