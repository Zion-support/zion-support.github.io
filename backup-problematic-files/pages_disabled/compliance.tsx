import React from "react";

interface ComplianceProps {
  className?: string;
}

const Compliance: React.FC<ComplianceProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Compliance</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Compliance;
