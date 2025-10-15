<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';;';";"
import SEOHead from './components/SEOHead';";"

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";";"
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div  className ="text-center">";"
          <h1  className ="text-4xl font-bold mb-4">Components</h1>";"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>;";"
        </div>
      </div>
    </>
  )
}

export default ComponentsPage;'";'";"
=======
<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";";";";
import { cn } from "../lib/utils;";";
interface ResponsiveContainerProps {},";";";
      children: React.ReactNode";";";
  className?: string";";";";
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full"
},";";
      const ResponsiveContainer  =  (_{},)";";";
      children, className, maxWidth = '7xl"
}: ResponsiveContainerProps) => {},";";
      const maxWidthClasses = {},";";";
      sm: 'max-w-sm",";";";
      md: 'max-w-md",";";";
      lg: 'max-w-lg",;";";";
      xl: 'max-w-xl";";";";
    '2xl': 'max-w-2xl";";";";
    '3xl': 'max-w-3xl";";";";
    '4xl': 'max-w-4xl";";";";
    '5xl': 'max-w-5xl";";";";
    '6xl': 'max-w-6xl";";";";
    '7xl': 'max-w-7xl",";";";
      full: 'max-w-full"
  },";
      return ()";";
    <divclassName={cn()>}";";";
      'mx-auto px-4 sm:px-6 lg:px-8",
=======
<<<<<<< HEAD
import React from 'react;''";
=======
import React from 'react'";
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
interface ResponsiveContainerProps {
  children: React.ReactNode";
  className?: string;}
}
'"'"
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = ' }) => {'";
  return (}
    <div: className ={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({ children, className = ' }) => {'";
  return (
    <div: className ={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>)};
export default ResponsiveContainer;
<<<<<<< HEAD
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

import { cn } from "../lib/utils";";
interface ResponsiveContainerProps {},
      children: React.ReactNode
  className?: string
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full'";
},
      const: ResponsiveContainer = (_{},);
      children, className, maxWidth = '7xl'";
}: ResponsiveContainerProps) => {},
      const: maxWidthClasses = {},;
      sm: 'max-w-sm',";
      md: 'max-w-md',";
      lg: 'max-w-lg',";
      xl: 'max-w-xl';";
    '2xl': 'max-w-2xl';";
    '3xl': 'max-w-3xl';";
    '4xl': 'max-w-4xl';";
    '5xl': 'max-w-5xl';";
    '6xl': 'max-w-6xl';";
    '7xl': 'max-w-7xl',";
      full: 'max-w-full'";
  },
      return ()
    <divclassName={cn()>}
      'mx-auto px-4 sm:px-6 lg:px-8',";
>>>>>>> main
      maxWidthClasses[maxWidth],
      className
    )}></div>
      {children};
    </div>
  )
},
      export default ResponsiveContainer

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {;";
  return (;";";
    <>;";";";
      <SEOHead;"
        title="Components - Zion Tech Group"";"
        description="Professional components solutions for modern businesses";"
      />";"
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div className ="text-center">";"
          <h1 className ="text-4xl font-bold mb-4">Components</$1>"
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;,";
  ),";";
};";";";
;"
export default ComponentsPage;'";'";";";";
"
=======
;
const ComponentsPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Components - Zion Tech Group"";";
        description="Professional components solutions for modern businesses";";
      />";";
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">Components</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>;";";
        </div>;
      </div>;
    </>;
  ),
};
;
export default ComponentsPage;'";'";";";

>>>>>>> main
>>>>>>> main
>>>>>>> main
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
