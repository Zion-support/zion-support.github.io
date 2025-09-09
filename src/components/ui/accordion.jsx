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

    const toggleItem = (itemId) => {
        setOpenItems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(itemId)) {
                newSet.delete(itemId);
            } else {
                newSet.add(itemId);
            }
            return newSet;
        });
    };

    const isItemOpen = (itemId) => openItems.has(itemId);

    return { toggleItem, isItemOpen };
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
