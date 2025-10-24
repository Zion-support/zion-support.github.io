import React from 'react';

interface MetaTagsProps {
  className?: string;
}

const MetaTags: 'React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h 2>MetaTags</h 2>
      <p>This component is under construction.</p>
    </div>;
  );
};

export default MetaTags;
