import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
  return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main className="flex-1">
        {children}
      </main>
      <EnhancedFooter />
    </div>
<<<<<<< HEAD
  )
};
export default EnhancedLayout;
=======
  );
}
export default EnhancedLayout;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
