import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
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

<<<<<<< HEAD
export default EnhancedLayout;
=======
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
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default EnhancedLayout;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
