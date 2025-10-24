<<<<<<< HEAD
'use client'
import React from 'react";

interface SEOHeadWrapperProps {
=======
'use client'
import React from 'react';
;
interface SEOHeadWrapperProps {;
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
className?: string;
  title?: string;
  description?: string;
  keywords?: string[];
<<<<<<< HEAD
  children?: React.ReactNode;
}"
}"
"
const SEOHeadWrapper: "React.FC<SEOHeadWrapperProps> = ({ className", title, description, keywords, children }) => {
  return(<div className = {className,}>
      {children;};
    </div>;)
  );
};
"
export default SEOHeadWrapper;"
"
=======
  children?: React.ReactNode}
}
const SEOHeadWrapper: "React.FC<SEOHeadWrapperProps> = ({ className", title, description, keywords, children }) => {;
  return(<div className={className}>
      {children});
    </div>);
  )}
export default SEOHeadWrapper;"
";'"
>>>>>>> cursor/fix-errors-and-merge-to-main-eb70
