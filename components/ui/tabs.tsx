import React from 'react';'

export function Tabs() {const [activeTab, setActiveTab] = React.useState(defaultValue || '');'
  }
  const handleTabChange = (newValue) => {setActiveTab(newValue)onValueChange?.(newValue);
}
return (<div className={`tabs ${className}`}>;`
      {React.Children.map(children, child =>;
        }
        React.cloneElement(child, { activeTab, "onTabChange": handleTabChange })
}
    </div>;
  )}

export function TabsList() {return (<div className={`tabs-list ${className}`}>`
      {children}
    </div>;
  )}

export function TabsTrigger() {const isActive = activeTab === value;
  }
  return (<button;
      className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}`      onClick={() => onTabChange(value)}
    >;
      {children}
    </button>;
  )}

export function TabsContent() {if (activeTab !== value) return null;
}
return (<div className={`tabs-content ${className}`}>;`

      {children}
<<<<<<< HEAD
    </div>
  )
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508
}
=======
import React from 'react''
export function Tabs({ children, defaultValue, value, onValueChange, className = '''
  const [activeTab, setActiveTab] = React.useState(defaultValue || '''
export function TabsList({ children, className = '''
export function TabsTrigger({ children, value, className = ''';
          ? 'bg-purple-600 text-white';
          : any;'
export function TabsContent({ children, value, className = ''';
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>;
  )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
