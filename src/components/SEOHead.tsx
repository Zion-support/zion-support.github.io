"use client"
:all-pages-backup/components/SEOHead.tsx
import React from "react";
interface SEOHeadProps {
className?: string
}
}
}

const SEOHead: "React.FC<SEOHeadProps> = ({ className="" "}) => {
return (</SEOHeadProps>
    <divclassName = {className} / />
      <h2>SEOHead</h2>
      <p>This component is under construction.</p>
      </div>
    </>
  )
  )
}

export const SEOHead: React.FC<SEOHeadProps> = ({ className = '', children }) => {
  return (
    <div className={`seohead ${className}`}>
      {children}
    </div>
  );
};

export default SEOHead;