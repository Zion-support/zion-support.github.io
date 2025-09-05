<<<<<<< HEAD
import React from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
const EnhancedLayout = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>
      <EnhancedNavigation />
      <main className=&quot;flex-1&quot;>
=======
import React from 'react',;
import EnhancedNavigation from './EnhancedNavigation',;
import EnhancedFooter from './EnhancedFooter',;
const EnhancedLayout = ({ children }) => {;
  return (;
    <div className="min-h-screen flex flex-col">;
      <EnhancedNavigation />;
      <main className="flex-1">;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        {children}
      </main>;
      <EnhancedFooter />;
    </div>;
  );
},;
export default EnhancedLayout;