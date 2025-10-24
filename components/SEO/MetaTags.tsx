import React from 'react'

"use client"

interface MetaTagsProps {
  className?: string
}

const MetaTags: React.FC<MetaTagsProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>MetaTags</h2>
<<<<<<< HEAD
      <p>This component is under construction.</p>
    </div>
  )
}

=======
      <p>This component is under construction.</p>;
    </div>;
  );
};
>>>>>>> cursor/fix-errors-and-merge-to-main-f713
export default MetaTags
