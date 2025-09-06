import React from 'react',
import EnhancedNavigation from './EnhancedNavigation',
import EnhancedFooter from './EnhancedFooter',
const EnhancedLayout = ({ children }) => {
  return (
    <div className=&quot;min-h-screen flex flex-col&quot;>      <EnhancedNavigation />
      <main className=&quot;flex-1&quot;>
        {children}
      </main>
      <EnhancedFooter />
    </div>
  )
},

export default EnhancedLayout,