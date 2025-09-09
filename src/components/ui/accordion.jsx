import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Accordion = ({ children, type = "single", collapsible = false, ...props }) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};

const AccordionItem = ({ className, children, ...props }) => {
    return (
        <div className={`border-b ${className || ''}`} {...props}>
            {children}
        </div>
    );
};

const AccordionTrigger = ({ className, children, onClick, ...props }) => {
    return (
        <button
            className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className || ''}`}
            onClick={onClick}
            {...props}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
};

const AccordionContent = ({ className, children, isOpen, ...props }) => {
    return (
        <div
            className={`overflow-hidden text-sm transition-all ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } ${className || ''}`}
            {...props}
        >
            <div className={`pb-4 pt-0 ${isOpen ? 'block' : 'hidden'}`}>
                {children}
            </div>
        </div>
    );
};

// Custom hook for accordion functionality
export const useAccordion = () => {
    const [openItems, setOpenItems] = useState(new Set());

} {...props}      />));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className = {
  cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
  className)

    const isItemOpen = (itemId) => openItems.has(itemId);

    return { toggleItem, isItemOpen };
};




} {...props}>
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200"      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (<AccordionPrimitive.Content ref={ref} className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className = {
  cn("pb-4 pt-0",
  className)






}>{children}</div>
  </AccordionPrimitive.Content>));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
