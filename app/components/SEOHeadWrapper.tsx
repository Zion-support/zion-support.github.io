"use client"
import React from "react";
interface SEOHeadWrapperProps { className?: string;
  children?: React.ReactNode; }
}

const SEOHeadWrapper: "React.FC<SEOHeadWrapperProps> = ({ className", title, description, keywords, children }) => {
(<div className = {className}>
      {children}

    </div>
        </>
  );
  )
}


export default SEOHeadWrapper