<<<<<<< HEAD
=======
}
}
 const AccessibilityContext = createContext(null)export const useAccessibility = () => {const context = useContext(AccessibilityContext)if(!context) {throw new Error('useAccessibility must be used within an AccessibilityProvider')}return context}}}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
import React from 'react';

const Accessibility: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">Accessibility</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
<<<<<<< HEAD
};

export default Accessibility;
=======
}
}
}
 return context}}}
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
