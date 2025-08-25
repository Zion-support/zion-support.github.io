<<<<<<< HEAD
<<<<<<< HEAD
"use client"

=======
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>
      {children}
    </div>
  </AccordionPrimitive.Content>
))
<<<<<<< HEAD

AccordionContent.displayName = "AccordionContent"

<<<<<<< HEAD
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
=======
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
>>>>>>> origin/cursor/website-audit-and-enhancement-4d8c
=======
import React from 'react';
import { cn } from '@/lib/utils';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  disabled?: boolean;
}

export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  value?: string;
}

export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value?: string;
}

const AccordionContext = React.createContext<{
  type: 'single' | 'multiple';
  collapsible: boolean;
  openItems: string[];
  onToggle: (value: string) => void;
} | undefined>(undefined);

export const Accordion: React.FC<AccordionProps> = ({
  type = 'single',
  collapsible = false,
  defaultValue,
  value,
  onValueChange,
  children,
  className,
  ...props
}) => {
  const [openItems, setOpenItems] = React.useState<string[]>(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );

  React.useEffect(() => {
    if (value !== undefined) {
      setOpenItems(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  const handleToggle = (itemValue: string) => {
    let newOpenItems: string[];
    
    if (type === 'single') {
      if (openItems.includes(itemValue)) {
        newOpenItems = collapsible ? [] : openItems;
      } else {
        newOpenItems = [itemValue];
      }
    } else {
      if (openItems.includes(itemValue)) {
        newOpenItems = openItems.filter(item => item !== itemValue);
      } else {
        newOpenItems = [...openItems, itemValue];
      }
    }
    
    setOpenItems(newOpenItems);
    onValueChange?.(type === 'single' ? newOpenItems[0] || '' : newOpenItems);
  };

  return (
    <AccordionContext.Provider value={{ type, collapsible, openItems, onToggle: handleToggle }}>
      <div className={cn('w-full', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem: React.FC<AccordionItemProps> = ({ value, disabled, children, className, ...props }) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion component');
  }

  const isOpen = context.openItems.includes(value);

  return (
    <div
      className={cn(
        'border border-zion-slate rounded-lg mb-2',
        disabled && 'opacity-50 pointer-events-none',
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { value, isOpen, disabled } as any);
        }
        return child;
      })}
    </div>
  );
};

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ children, className, value, ...props }) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionTrigger must be used within an Accordion component');
  }

  const stringValue = String(value || '');

  return (
    <button
      className={cn(
        'w-full px-4 py-3 text-left flex items-center justify-between hover:bg-zion-blue-light transition-colors',
        className
      )}
      onClick={() => context.onToggle(stringValue)}
      {...props}
    >
      {children}
      <span className="text-zion-cyan">{context.openItems.includes(stringValue) ? '−' : '+'}</span>
    </button>
  );
};

export const AccordionContent: React.FC<AccordionContentProps> = ({ children, className, value, ...props }) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionContent must be used within an Accordion component');
  }

  const stringValue = String(value || '');

  return (
    <div
      className={cn(
        'px-4 pb-3 overflow-hidden transition-all duration-200',
        context.openItems.includes(stringValue) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
>>>>>>> origin/cursor/build-and-fix-errors-c9ef
=======
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
>>>>>>> origin/cursor/build-and-fix-errors-e276
