import React from "react";

interface SkipLinkProps {
  children?: React.ReactNode;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ children, className = "" }) => {
  return <div className={className}>{children}</SkipLinkProps>;
};

export default SkipLink;
