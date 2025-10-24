import React from 'react'

"use client"

interface DefaultSEOProps {
  className?: string
}

const DefaultSEO: React.FC<DefaultSEOProps> = ({ className = '' }) => {
  return (
    <div className={className}>
      <h2>DefaultSEO</h2>
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
export default DefaultSEO
