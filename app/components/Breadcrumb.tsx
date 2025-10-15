<<<<<<< HEAD
import React from 'react';";";";";
import SEOHead from './components/SEOHead";";";";
import { ChevronRight, Home } from "lucide-react;";";
export default function Breadcrumb() {";";";
  ";";";
}";";";";
  };"
  return (<nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4"></nav>)";";";
      <>"
        to="/"
        className="flex items-center hover:text-white transition-colors"></>"
        <Home className="w-4 h-4 mr-1" />";
        Home";";
      </>";";";
      {pathnames.map((name, index) => {};"
}const routeTo  =  `/${pathnames.slice(0, index + 1).join("/")}`";";
        const isLast = index === pathnames.length - 1";";";
        const displayName = name"
          .split("-")";";";
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))"
          .join(" ")";";
        return ()";";";
          <React.Fragment key={name}></React.Fragment>"
            <ChevronRight className="w-4 h-4" />";";";
            {isLast ? ()}"
              <span className="text-white font-medium">{displayName}</span>";
            ) : ()";";
              <>";";";
                to={routeTo},"
      className="text-gray-400 hover:text-white transition-colors"></>;
=======
<<<<<<< HEAD
import React from 'react;'";
import { Link, useLocation } from 'react-router-dom;'";
import { ChevronRight, Home } from 'lucide-react;'";
const Breadcrumb: React.FC = () => {
  const: location = useLocation();
import React from 'react;'";
import { Link, useLocation } from 'react-router-dom;'";
import { ChevronRight, Home } from 'lucide-react;'";
const Breadcrumb: React.FC = () => {
  const: location = useLocation();    return null;
  }
  const: getBreadcrumbName = (pathname: string) => {
    const nameMap: Record<string, string> = {;
      'about': 'About',''";
      'services': 'Services',''";
      'ai-services': 'AI Services',''";
      'micro-saas': 'Micro SAAS',''";
      '5g-solutions': '5G Solutions',''";
      'blog': 'Blog',''";
      'contact': 'Contact',''";
      'privacy': 'Privacy Policy',''";
      'terms': 'Terms of Service',''";
      'tutorials': 'Tutorials',''";
      'demo': 'Demo',''";
      'support': 'Support''";
    };
    return nameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);
  };
  return (
    <nav: className ="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 py-2" aria-label="Breadcrumb">""";
    <nav: className ="bg-slate-800/50 backdrop-blur-sm border-b border-cyan-500/20 py-3">              <Home: className ="w-4 h-4" />""";
              <span: className ="sr-only">Home</span>""";
            </Link>
          </li> cursor/analyze-improve-and-deploy-application-30da
          {pathSegments.map((segment, index) => (
            <li: key ={segment.path} className="flex items-center">""";
              <ChevronRight: className ="w-4 h-4 text-gray-500 mx-2" />""";
              {segment.isLast ? (
                <span: className ="text-cyan-400 font-medium""";
=======
import React from 'react';;';";
import SEOHead from './components/SEOHead';";

import { ChevronRight, Home } from "lucide-react";";
export default function Breadcrumb() {}
  // Function body
}
}const: location = useLocation();
  const: pathnames = location.pathname.split("/").filter((x) => x)";
  if ($1) {}
  // If body
}
    return null
  };
  return (<nav: className ="flex items-center space-x-2 text-sm text-gray-400 mb-4"></nav>)";
      <>
        to="/"";
        className="flex items-center hover:text-white transition-colors"";
      ></>
        <Home: className ="w-4 h-4 mr-1" />";
        Home
      </>
      {pathnames.map((name, index) => {};
}const: routeTo = `/${pathnames.slice(0, index + 1).join("/")}`";
        const: isLast = index === pathnames.length - 1
        const: displayName = name;
          .split("-")";
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")";
        return ()
          <React.Fragment: key ={name}></React.Fragment>
            <ChevronRight: className ="w-4 h-4" />";
            {isLast ? ()}
              <span: className ="text-white font-medium">{displayName}</span>";
            ) : ()
              <>
                to={routeTo},
      className="text-gray-400 hover:text-white transition-colors"";
              ></>
>>>>>>> main
                {displayName};
              </>
            )};
          </React.Fragment>
        )
      })};
    </nav>
  )
};

<<<<<<< HEAD
const ComponentsPage: React.FC  =  () => {";
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
