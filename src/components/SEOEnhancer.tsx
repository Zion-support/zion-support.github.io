import React from 'react';

interface SEOEnhancerProps {
<<<<<<< HEAD
className?: string
}
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '' ,}) => {
return (</SEOEnhancerProps>,
    <div className={className} /></div>h2>SEOEnhancer</h2>p>This component is under construction.</p>/div>
  )
}
=======
  className?: string;
  children?: React.ReactNode;
}

const SEOEnhancer: React.FC<SEOEnhancerProps> = ({ className = '', children }) => {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-9a36
export default SEOEnhancer;
