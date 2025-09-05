import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

const _EnhancedLayout = (_{_children}) => {_return (
    <div className="min-h-screen flex flex-col">
      <EnhancedNavigation />
      <main className="flex-1">
        {children}
      </main>
      <EnhancedFooter />
    </div>
  );
};

export default EnhancedLayout;