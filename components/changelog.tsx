import React from 'react';

interface ChangelogProps {
  className?: string;
}

const Changelog: React.FC<ChangelogProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>Changelog</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Changelog;