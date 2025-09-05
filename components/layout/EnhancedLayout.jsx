<<<<<<< HEAD
import React from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
const EnhancedLayout = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
=======
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

const _EnhancedLayout = (_{_children}) => {_return (
    <div className="min-h-screen flex flex-col">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      <EnhancedNavigation />
      <main className=&quot;flex-1&quot;>
        {children}
      </main>
      <EnhancedFooter />
    </div>
  )
},

export default EnhancedLayout,