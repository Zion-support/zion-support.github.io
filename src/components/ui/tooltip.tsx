import React, { createContext, useContext, useState } from 'react';

interface TooltipContextType {
  showTooltip: (content: string, target: HTMLElement) => void;
  hideTooltip: () => void;

const TooltipContext = createContext<TooltipContextType | undefined>(undefined);

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  const [tooltip, setTooltip] = useState<{ content: string; x: number; y: number } | null>(null);

  const showTooltip = (content: string, target: HTMLElement) => {
    const rect = target.getBoundingClientRect();
    setTooltip({
      content,
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
  };

  const hideTooltip = () => {
    setTooltip(null);
  };

  return (
    <TooltipContext.Provider value={ showTooltip, hideTooltip }>
      {children}
      {tooltip && (
        <div
          className="fixed z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg"
          style={ left: tooltip.x, top: tooltip.y, transform: 'translateX(-50%)' }
        >
          {tooltip.content}
        </div>
      )}
    </TooltipContext.Provider>
  );

export function Tooltip({ children, content }: { children: React.ReactNode; content: string }) {
  const context = useContext(TooltipContext);
  if (!context) return <>{children}</>;

  return (
    <div
      onMouseEnter={(e) => context.showTooltip(content, e.currentTarget)}
      onMouseLeave={context.hideTooltip}
    >
      {children}
    </div>
  );

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;

export function TooltipContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
