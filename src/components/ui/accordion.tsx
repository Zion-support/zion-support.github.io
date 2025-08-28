import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
}

export function Accordion({
  children,
  className = '',
  type = 'single',
  defaultValue
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  );

  const handleToggle = (value: string) => {
    if (type === 'single') {
      setOpenItems(openItems.includes(value) ? [] : [value]);
    } else {
      setOpenItems(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    }
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openItems.includes(child.props.value),
            onToggle: () => handleToggle(child.props.value)
          });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionItem({
  children,
  className = '',
  isOpen = false,
  onToggle
}: AccordionItemProps) {
  return (
    <div className={`border-b border-gray-200 ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, onToggle });
        }
        return child;
      })}
    </div>
  );
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export function AccordionTrigger({
  children,
  className = '',
  isOpen = false,
  onToggle
}: AccordionTriggerProps) {
  return (
    <button
      className={`flex w-full items-center justify-between py-4 font-medium transition-all hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      onClick={onToggle}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`}
      />
    </button>
  );
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

export function AccordionContent({
  children,
  className = '',
  isOpen = false
}: AccordionContentProps) {
  if (!isOpen) return null;

  return (
    <div className={`overflow-hidden text-sm transition-all pb-4 pt-0 ${className}`}>
      {children}
    </div>
  );
}