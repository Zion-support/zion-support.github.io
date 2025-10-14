import React from "react";

interface MetaManagerProps {
  children: React.ReactNode;
}

const MetaManager = ({ children }: MetaManagerProps) => {
  return (
    <div className="meta-manager">
      {children}
    </div>
  );
};
export default MetaManager;
