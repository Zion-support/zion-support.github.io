import React from "react";"

interface AdvancedLoadingStatesProps {
  type?: string;
  fullScreen?: boolean;
  message?: string;
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ className = '', children }) => {''
  return (
<>    <div className={`advancedloadingstates ${className}`}></div>```
      {children}
    </div>
    </>
  )};
};
;
export default AdvancedLoadingStates;""
