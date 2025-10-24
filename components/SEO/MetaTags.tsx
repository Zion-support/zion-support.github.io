import React from "react"; "use client"
interface MetaTagsProps {
className?: string
}
}
}

const MetaTags: "React.FC<MetaTagsProps> = ({ className="" "}) => {
return (</MetaTagsProps>
    <divclassName={className} />
      <h2>MetaTags</h2>
      <p>This component is under construction.</p>
    </div>
    </>
  )
  )
}

export const MetaTags: React.FC<MetaTagsProps> = ({ className = '', children }) => {
  return (
    <div className={`metatags ${className}`}>
      {children}
    </div>
  );
};

export default MetaTags;