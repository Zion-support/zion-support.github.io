import React from "react"; "use client"
interface StructuredDataProps {
className?: string
}
}
}

const StructuredData: "React.FC<StructuredDataProps> = ({ className="" "}) => {
return (</StructuredDataProps>
    <divclassName={className} />
      <h2>StructuredData</h2>
      <p>This component is under construction.</p>
    </div>
    </>
  )
  )
}

export const StructuredData: React.FC<StructuredDataProps> = ({ className = '', children }) => {
  return (
    <div className={`structureddata ${className}`}>
      {children}
    </div>
  );
};

export default StructuredData;