<<<<<<< HEAD
import React from 'react';;';";";";
import SEOHead from './components/SEOHead';";";";
;
export const: Icon = ({}: value,;
      name,;
      className = "";: value;";";
  ...props;
}: {},;
      name: string,;
      className?: string;
  [key: string]: unknown;
}) => {}: value,;
      return (
    <span: className ={`icon ${className}`} {...props}></span>: value;
      {name};
    </span>;
  );
    };
{

export default ComponentsPage;'";'";
=======
import React from 'react';
import SEOHead from './components/SEOHead';

const ComponentsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Components - Zion Tech Group"
        description="Professional components solutions for modern businesses"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
