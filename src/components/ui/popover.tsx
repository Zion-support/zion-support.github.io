<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react'

export const Popover = ({ children }: { children: React.ReactNode }) => <>{children}</>

export const PopoverTrigger = ({ children, className = '', ...props }: any) => {
  const [open, setOpen] = useState(false)
  const triggerRef = useRef<any>(null)
  const contentRef = useRef<any>(null)

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return
      const t = triggerRef.current
      const c = contentRef.current
      if (t && t.contains(e.target as Node)) return
      if (c && c.contains(e.target as Node)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  return React.cloneElement(children, {
    ref: triggerRef,
    className,
    onClick: (e: any) => {
      setOpen((v) => !v)
      children.props.onClick?.(e)
    },
    'data-popover-open': open,
    'data-popover-content-ref': contentRef
  })
}

export const PopoverContent = ({ children, className = '', style, ...props }: any) => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const anchors = document.querySelectorAll('[data-popover-open="true"]')
    const latest = anchors[anchors.length - 1] as HTMLElement | undefined
    if (latest) setAnchor(latest)
  }, [])

  const rect = anchor?.getBoundingClientRect()
  const top = rect ? rect.bottom + window.scrollY + 8 : 0
  const left = rect ? rect.left + window.scrollX : 0

  return (
    <div
      ref={contentRef}
      className={`absolute z-50 rounded-md border border-zinc-800 bg-zinc-900 p-3 text-white shadow-lg ${className}`}
      style={{ position: 'absolute', top, left, minWidth: 240, ...style }}
      {...props}
    >
      {children}
    </div>
  )
}

export default Popover
=======
import * as React from "react";

type PopoverRootProps = {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
};

export function Popover({ children, className }: PopoverRootProps) {
  return <div className={className}>{children}</div>;
}

type PopoverTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  ({ children, className = "", ...props }, ref) => {
    return (
      <button ref={ref} className={className} type={props.type ?? "button"} {...props}>
        {children}
      </button>
    );
  }
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
        {children}
      </div>
    );
  }
);
PopoverContent.displayName = "PopoverContent";

export default Popover;
>>>>>>> origin/cursor/create-and-deploy-new-content-443a

