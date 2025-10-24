'use client';
import React from 'react';

interface SEOProps {
<<<<<<< HEAD
className?: string
}
}
const SEO: React.FC<SEOProps> = ({ className = '' ,}) => {
return (</SEOProps>,
    <div className={className} /></div>h2>SEO</h2>p>This component is under construction.</p>/div>
  )
}
export default SEO;
}
=======
  className?: string;
}

const SEO: React.FC<SEOProps> = ({ className }) => {
  return (
    <div className={className}>
      <h2>SEO</h2>
      <p>SEO component for enhanced functionality.</p>
    </div>
  );
};

export default SEO;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
