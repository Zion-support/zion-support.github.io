<<<<<<< HEAD
import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';

const EnhancedLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col'>
      <EnhancedNavigation />
      <main className='flex-1'>{children}</main>
      <EnhancedFooter />
    </div>
  );
};

=======
 <EnhancedNavigation /> <main className="flex-1" > {
  children 
}</main> <EnhancedFooter /> </div>) 
};
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default EnhancedLayout;
