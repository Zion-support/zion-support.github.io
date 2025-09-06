import React from "react";

interface SupportProps {
  className?: string;
}

const Support: React.FC<SupportProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Support</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Support;
