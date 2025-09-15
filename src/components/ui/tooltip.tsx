import React from 'react';

export const TooltipProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export const Tooltip: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export const TooltipTrigger: React.FC<React.PropsWithChildren<{ asChild?: boolean }>> = ({ children }) => {
  return <>{children}</>;
};

export const TooltipContent: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <div role="tooltip">{children}</div>;
};

export default Tooltip;

