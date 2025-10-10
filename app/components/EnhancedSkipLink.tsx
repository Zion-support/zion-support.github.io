import React from 'react';

<<<<<<< HEAD
constconst EnhancedSkipLink: React.FC;

export default EnhancedSkipLink
=======
const SkipLink: React.FC = () => {
  return (
    <a 
      href="#main-content" 
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded z-50"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
>>>>>>> cursor/fix-errors-and-merge-to-main-b853
