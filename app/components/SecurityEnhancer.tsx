import React from "react";

interface SecurityEnhancerProps {
  enableCSP?: boolean;
  enableHSTS?: boolean;
  enableXSSProtection?: boolean;
  enableClickjackingProtection?: boolean;
  children?: React.ReactNode;
}

const SecurityEnhancer: React.FC<SecurityEnhancerProps> = ({ 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enableCSP: _enableCSP = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enableHSTS: _enableHSTS = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enableXSSProtection: _enableXSSProtection = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enableClickjackingProtection: _enableClickjackingProtection = true,
  children 
}) => {
  return <>{children}</>;
};

export default SecurityEnhancer;
