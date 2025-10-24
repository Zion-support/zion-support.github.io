import React from "react";
interface MicroSAASCardProps {
className?: string
}
}
}

const MicroSAASCard: "React.FC<MicroSAASCardProps> = ({ className="" "}) => {
return (</MicroSAASCardProps>
    <divclassName = {className} / />
      <h2>MicroSAASCard</h2>
      <p>This component is under construction.</p>
      </div>
    </>
  )
  )
}

export const MicroSAASCard: React.FC<MicroSAASCardProps> = ({ className = '', children }) => {
  return (
    <div className={`microsaascard ${className}`}>
      {children}
    </div>
  );
};

export default MicroSAASCard;