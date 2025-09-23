import React from 'react';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  className?: string;
};

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <span title={typeof content === 'string' ? content : undefined}>
      {children}
    </span>
  );
}

export default Tooltip;

