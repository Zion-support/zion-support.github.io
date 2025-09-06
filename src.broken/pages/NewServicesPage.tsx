import React from 'react';

interface NewServicesPageProps {
  className?: string;
}

const NewServicesPage: React.FC<NewServicesPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NewServicesPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NewServicesPage;