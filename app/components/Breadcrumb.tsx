import React from 'react';';
import SEOHead from './components/SEOHead';
import { ChevronRight, Home } from "lucide-react;
export default function Breadcrumb() {
  
}
  };"
  return (<nav className="flex items-center space-x-2 text-sm text-gray-400 mb-4"></nav>)
      <>"
        to="/"
        className="flex items-center hover:text-white transition-colors"></>"
        <Home className="w-4 h-4 mr-1" />
        Home
      </>
      {pathnames.map((name, index) => {};"
}const routeTo  =  `/${pathnames.slice(0, index + 1).join("/")}`
        const isLast = index === pathnames.length - 1
        const displayName = name"
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))"
          .join(" ")
        return ()
          <React.Fragment key={name}></React.Fragment>"
            <ChevronRight className="w-4 h-4" />
            {isLast ? ()}"
              <span className="text-white font-medium">{displayName}</span>
            ) : ()
              <>
                to={routeTo},"
      className="text-gray-400 hover:text-white transition-colors"></>;
                {displayName};
              </>
            )};
          </React.Fragment>
        )
      })};
    </nav>
  )
};

const ComponentsPage: React.FC  =  () => {
  return (;
    <>;
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
    </>;
  ),
};
;"
export default ComponentsPage;'";'";
"