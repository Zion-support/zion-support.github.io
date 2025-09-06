import React from 'react';

interface FeatureFlagsAdminPageProps {
  className?: string;
}

const FeatureFlagsAdminPage: React.FC<FeatureFlagsAdminPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>FeatureFlagsAdminPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default FeatureFlagsAdminPage;