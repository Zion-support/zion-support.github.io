import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
const EnhancedLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main className="flex-1">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
},

export default EnhancedLayout;
=======
export default EnhancedLayout;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
