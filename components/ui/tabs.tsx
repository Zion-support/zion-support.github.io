<<<<<<< HEAD
import React from 'react';
export function Tabs() {const [activeTab, setActiveTab] = React.useState(defaultValue || '');
  const handleTabChange = (setActiveTab(newValue)onValueChange?.(newValue);) => {
  return $3;}
}
<<<<<<< HEAD
  return (
    <div className={`tabs ${className}`} />
=======
  return (<div className={`tabs ${className}`} />
=======
children: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
>>>>>>> origin/chore/fix-lint-and-merge

  const [activeTab, setActiveTab] = React.useState(defaultValue || '');

  const handleTabChange = (newValue: string) => {
    setActiveTab(newValue);
    onValueChange?.(newValue);
  };

  return (

            onTabChange: handleTabChange 
          } as any);
        }
        return child;
      })}
    </div>
  );
}

      {children}
    </div>
  );
}

    >
      {children}
    </button>
  );
}

      {children}
    </div>
  );

export function Tabs() {const [activeTab, setActiveTab] = React.useState(defaultValue || '');
  const handleTabChange = (setActiveTab(newValue)onValueChange?.(newValue);) => {
  return $3;}
}
  return (<div className={`tabs ${className}`}    />
>>>>>>> origin/main

      {React.Children.map(children, child =>;},
  React.cloneElement(child, { activeTab, onTabChange: handleTabChange }) }
    </div>;
  )}
<<<<<<< HEAD
export function TabsList() {return (
    <div className={`tabs-list ${className}`} />
=======

export function TabsList() {return (<div className={`tabs-list ${className}`}    />
>>>>>>> origin/main

      {children}
    </div>;
  )}
export function TabsTrigger() {const isActive = activeTab === value;}
<<<<<<< HEAD
  return (
          <button className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}
      onClick={() = /> onTabChange(value)}
=======
  return (<button;}
      className={`tabs-trigger ${isActive ? 'active' : ''} ${className}`}
      onClick={() =    /> onTabChange(value)}
>>>>>>> origin/main
    >;
      {children}
    </button>;
  )}
export function TabsContent() {if (activeTab !== value) return null;}
<<<<<<< HEAD
  return (
    <div className={`tabs-content ${className}`} />
=======
  return (<div className={`tabs-content ${className}`}    />
>>>>>>> origin/main

      {children}
<<<<<<< HEAD
    </div>
  )
}
import React from 'react''
export function Tabs({ children, defaultValue, value, onValueChange, className = '''
  const [activeTab, setActiveTab] = React.useState(defaultValue || '''
export function TabsList({ children, className = '''
export function TabsTrigger({ children, value, className = ''';
          ? 'bg-purple-600 text-white';
          : any;'
export function TabsContent({ children, value, className = ''';
}
import React from 'react
export function Tabs({ children, defaultValue, value, onValueChange, className = ''
  const [activeTab, setActiveTab] = React.useState(defaultValue || ''
export function TabsList({ children, className = '
export function TabsTrigger({ children, value, className = ';
          ? 'bg-purple-600 text-white';
          : any;
export function TabsContent({ children, value, className = '';
    </div>;
  )}
<<<<<<< HEAD
=======
=======

}
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main
