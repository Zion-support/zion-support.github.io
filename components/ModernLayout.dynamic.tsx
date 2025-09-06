import React from "react";

interface ModernLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  className = "",
  children,
}) => {
  return (
    <div data-testid="odernlayout" className={className}>
      {children || <div>ModernLayout Component</div>}
    </div>
  );
};

export default ModernLayout;
