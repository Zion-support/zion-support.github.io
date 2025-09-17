<<<<<<< HEAD
import React from 'react'

export const AlertDialog = ({ open, onOpenChange, children }: any) => {
  if (!open) return null
  return (
    <div role="alertdialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/60" onClick={() => onOpenChange?.(false)} />
      <div className="relative z-10 w-full max-w-md rounded-lg border border-zinc-800 bg-zinc-900 p-4 text-white">
        {children}
      </div>
    </div>
  )
}

export const AlertDialogContent = ({ className = '', children, ...props }: any) => (
  <div className={className} {...props}>{children}</div>
)
export const AlertDialogHeader = ({ children }: any) => <div className="mb-3">{children}</div>
export const AlertDialogFooter = ({ children }: any) => <div className="mt-4 flex gap-2 justify-end">{children}</div>
export const AlertDialogTitle = ({ children }: any) => <h2 className="text-lg font-semibold">{children}</h2>
export const AlertDialogDescription = ({ children }: any) => <p className="text-sm text-zinc-400">{children}</p>
export const AlertDialogAction = ({ children, onClick, className = '' }: any) => (
  <button onClick={onClick} className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ${className}`}>{children}</button>
)
export const AlertDialogCancel = ({ children, onClick, className = '' }: any) => (
  <button onClick={onClick} className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium border ${className}`}>{children}</button>
)

export const Dialog = AlertDialog
export const DialogTrigger = ({ asChild, children, ...props }: any) => React.cloneElement(children, props)
export const DialogContent = AlertDialogContent
export const DialogHeader = AlertDialogHeader
export const DialogFooter = AlertDialogFooter
export const DialogTitle = AlertDialogTitle
export const DialogDescription = AlertDialogDescription

export default AlertDialog
=======
import * as React from "react";

type RootProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
};

export function AlertDialog({ children }: RootProps) {
  return <div>{children}</div>;
}

type ContentProps = React.HTMLAttributes<HTMLDivElement>;
export const AlertDialogContent = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className = "z-50 max-w-md rounded-md border bg-white p-4 shadow-lg", children, ...props }, ref) => (
    <div ref={ref} role="alertdialog" className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogContent.displayName = "AlertDialogContent";

type HeaderProps = React.HTMLAttributes<HTMLDivElement>;
export const AlertDialogHeader = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className = "mb-2", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogHeader.displayName = "AlertDialogHeader";

export const AlertDialogFooter = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className = "mt-4 flex justify-end gap-2", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);
AlertDialogFooter.displayName = "AlertDialogFooter";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export const AlertDialogTitle = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className = "text-lg font-semibold", children, ...props }, ref) => (
    <h2 ref={ref} className={className} {...props}>
      {children}
    </h2>
  )
);
AlertDialogTitle.displayName = "AlertDialogTitle";

type DescProps = React.HTMLAttributes<HTMLParagraphElement>;
export const AlertDialogDescription = React.forwardRef<HTMLParagraphElement, DescProps>(
  ({ className = "text-sm text-gray-600", children, ...props }, ref) => (
    <p ref={ref} className={className} {...props}>
      {children}
    </p>
  )
);
AlertDialogDescription.displayName = "AlertDialogDescription";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean };
export const AlertDialogAction = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "bg-blue-600 text-white px-3 py-2 rounded", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "px-3 py-2 rounded border", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogCancel.displayName = "AlertDialogCancel";

export const AlertDialogTrigger = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", children, ...props }, ref) => (
    <button ref={ref} type={props.type ?? "button"} className={className} {...props}>
      {children}
    </button>
  )
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

export default AlertDialog;
>>>>>>> origin/cursor/create-and-deploy-new-content-443a

