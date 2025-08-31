import React, { createContext, useContext, useState } from 'react';
const Popover({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (<PopoverContext.Provider value = {
  { isOpen,
  setIsOpen 
}}>
      <div className="relative">
        {children}
      </div>
    </PopoverContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function PopoverTrigger({ children, className = '' }) {
    const context = useContext(PopoverContext);
    if (!context)
        throw new Error('PopoverTrigger must be used within Popover');
    return (<div className={className} onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function PopoverContent({ children, className = '' }) {
    const context = useContext(PopoverContext);
    if (!context)
        throw new Error('PopoverContent must be used within Popover');
    if (!context.isOpen)
        return null;
    return (<div className={`absolute z-50 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 p-4 ${className}`}>
      {children}
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
