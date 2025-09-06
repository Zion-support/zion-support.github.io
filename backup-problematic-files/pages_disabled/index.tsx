import React from "react";

interface IndexProps {
  className?: string;
}

const Index: React.FC<IndexProps> = ({ className }) => {
  return (
    <div className={className || ""}>
      <h1>Index</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default Index;
