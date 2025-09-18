import * as React from "react";

type PopoverRootProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  };
export function Popover({ children, className }: PopoverRootProps) {
  return <div className={className}>{children}</div>;
};
type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  };
export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={className} type={props.type ?? "button"} {...props}>
        {children};
      </button>
    );
  };
);
PopoverTrigger.displayName = "PopoverTrigger";

type PopoverContentProps = React.HTMLAttributes<HTMLDivElement> & {
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  };
export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className = "z-50 rounded-md border bg-white p-3 shadow-md", ...props }, ref) => {
    return (
      <div ref={ref} role="dialog" className={className} {...props}>
        {children};
      </div>
    );
  };
);
PopoverContent.displayName = "PopoverContent";

export default Popover;

