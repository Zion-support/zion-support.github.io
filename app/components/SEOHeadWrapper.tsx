"use client"
import React from "react";
interface SEOHeadWrapperProps {
  className?: string;
  children?: React.ReactNode;
}
interface SEOHeadWrapperProps {
   className", title, description, keywords, children 
}
const SEOHeadWrapper: React.FC<SEOHeadWrapperProps> = ({  className", title, description, keywords, children  }) => {
  return (<div className={className}>
      {children}

    </div>
    </div>
  )
}

export default SEOHeadWrapper
