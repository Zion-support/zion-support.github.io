import React from "react";

interface EnterpriseProps {
  className?: string;
}

const Enterprise: React.FC<EnterpriseProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Enterprise</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Enterprise;
