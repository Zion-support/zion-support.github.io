import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
<<<<<<< HEAD
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
=======

const EnhancedLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <EnhancedNavigation />
      <main className='flex-1'>{children}</main>
      <EnhancedFooter />
    </div>
  );
};
}

export default EnhancedLayout;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
