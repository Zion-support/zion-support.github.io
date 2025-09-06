import React from 'react';

interface NationDetailPageProps {
  className?: string;
}

const NationDetailPage: React.FC<NationDetailPageProps> = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>NationDetailPage</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default NationDetailPage;