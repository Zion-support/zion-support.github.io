import React from "react;

interface AdvancedLoadingStatesProps {
  className?: string
  children?: React.ReactNode
}

const AdvancedLoadingStates: React.FC<AdvancedLoadingStatesProps> = ({ className = , children }) => {'
  return (
<<<<<<< HEAD
<>```
=======
<>
      <div className={`advancedloadingstates ${className}`}></div>```
>>>>>>> cursor/fix-errors-and-merge-to-main-da9a
      {children}
    </div>
    </>
  )}
}

export default AdvancedLoadingStates;
