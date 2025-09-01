import React, { createContext, useContext, useState } from 'react';
<<<<<<< HEAD
const Popover({ children }) {}
    const [isOpen, setIsOpen] = useState(false);
    return (<PopoverContext.Provider value = {}
  { isOpen,
  setIsOpen;
=======
const Popover({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    return (<PopoverContext.Provider value = {

  { isOpen,
  setIsOpen 

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
}}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </PopoverContext.Provider>)}'
export function PopoverTrigger({ children, className = '' }) {}
    const context = useContext(PopoverContext);
    if (!context)'
        throw new Error('PopoverTrigger must be used within Popover');
    return (<div className={className} onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}'
export function PopoverContent({ children, className = '' }) {}
    const context = useContext(PopoverContext);
    if (!context)'
=======
    </PopoverContext.Provider>)}
export function PopoverTrigger({ children, className = '' }) {

    const context = useContext(PopoverContext);
    if (!context)
        throw new Error('PopoverTrigger must be used within Popover');
    return (<div className={className} onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
export function PopoverContent({ children, className = '' }) {

    const context = useContext(PopoverContext);
    if (!context)
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
        throw new Error('PopoverContent must be used within Popover');
    if (!context.isOpen)
        return null;
    return (<div className={`absolute z-50 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 p-4 ${className}`}>
      {children}
<<<<<<< HEAD
    </div>)}'"`
'"`'"`
=======
    </div>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
