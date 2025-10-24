import React from 'react';

interface SEOHeadProps {
<<<<<<< HEAD
className?: string
}
}
const SEOHead: React.FC<SEOHeadProps> = ({ className = '' ,}) => {
return (</SEOHeadProps>,
    <div className={className} /></div>h2>SEOHead</h2>p>This component is under construction.</p>/div>
  )
}
=======
  className?: string;
  children?: React.ReactNode;
}

const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default SEOHead;
