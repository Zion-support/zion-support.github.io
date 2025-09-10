import React, { createContext, useContext, useState } from 'react';
<<<<<<< HEAD
const _DropdownMenuContext = createContext(undefined);
export function DropdownMenu({ children }) {
=======
const DropdownMenu({ children }) {
>>>>>>> origin/clean-error-fixing-automation
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </DropdownMenuContext.Provider>);
}
export function DropdownMenuTrigger({ children, asChild = false }) {
    const _context = useContext(DropdownMenuContext);
=======
    </DropdownMenuContext.Provider>)}
export function DropdownMenuTrigger({ children, asChild = false }) {
    const context = useContext(DropdownMenuContext);
>>>>>>> origin/clean-error-fixing-automation
    if (!context)
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {
        return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
<<<<<<< HEAD
      </div>);
    }
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>);
}
export function DropdownMenuContent({ children, align = 'start', className = '' }) {
    const _context = useContext(DropdownMenuContext);
=======
      </div>)}
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
export function DropdownMenuContent({ children, align = 'start', className = '' }) {
    const context = useContext(DropdownMenuContext);
>>>>>>> origin/clean-error-fixing-automation
    if (!context)
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
<<<<<<< HEAD
    const _alignClasses = {
        start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
        end: 'right-0'
    };
    return (<div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>);
}
export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {
    const _context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const _handleClick = () => {
=======
    const alignClasses = {
  start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
  end: 'right-0'
    

};
    return (<div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>)}
export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = () => {
>>>>>>> origin/clean-error-fixing-automation
        if (onClick)
            onClick();
        context.setIsOpen(false);
    };
    if (asChild) {
        return (<div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}
<<<<<<< HEAD
      </div>);
    }
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>);
}
=======
      </div>)}
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)}
>>>>>>> origin/clean-error-fixing-automation
