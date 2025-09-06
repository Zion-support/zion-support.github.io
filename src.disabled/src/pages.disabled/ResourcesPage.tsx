import React from 'react';

interface ResourcesPageProps {
  className?: string;
}

const ResourcesPage: React.FC<ResourcesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>ResourcesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default ResourcesPage;