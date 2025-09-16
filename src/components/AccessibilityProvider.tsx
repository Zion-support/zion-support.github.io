import React from 'react';

const AccessibilityProvider: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">AccessibilityProvider</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

<<<<<<< HEAD
export default AccessibilityProvider;
=======
    toggleReducedMotion
  };
,
  return (,
    <AccessibilityContext.Provider value={value}>,
      <div className={`${highContrast ? 'high-contrast' : ''} ${largeText ? 'large-text' : ''} ${reducedMotion ? 'reduced-motion' : ''}`}>,
        {children};
      </div>,
    </AccessibilityContext.Provider>)
};
,
export default AccessibilityProvider,
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
