import React from "react";

interface TestrunnerxProps {
  className?: string;
}

const Testrunnerx: React.FC<TestrunnerxProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <h2>Testrunnerx</h2>
  );
};

export default Testrunnerx;
