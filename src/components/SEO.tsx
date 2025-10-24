import React from "react";
interface SEOProps {
className?: string
}
}
}

const SEO: "React.FC<SEOProps> = ({ className="" "}) => {
return (</SEOProps>
    <divclassName = {className} / />
      <h2>SEO</h2>
      <p>This component is under construction.</p>
      </div>
    </>
  )
  )
}

export const SEO: React.FC<SEOProps> = ({ className = '', children }) => {
  return (
    <div className={`seo ${className}`}>
      {children}
    </div>
  );
};

export default SEO;