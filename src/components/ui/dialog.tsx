import React, { createContext, useContext, useState } from 'react';
const _DialogContext = createContext(undefined);
export function Dialog({ children, open, onOpenChange }) {
    const [internalOpen, setInternalOpen] = useState(false);
    const _isControlled = open !== undefined;
    const _isOpen = isControlled ? open : internalOpen;
    const _setIsOpen = (newOpen) => {
        if (!isControlled) {
            setInternalOpen(newOpen);
        }
        if (onOpenChange) {
            onOpenChange(newOpen);
        }
    };
    return (<DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative">
        {children}
      </div>
    </DialogContext.Provider>);
}
export function DialogTrigger({ children, asChild = false }) {
    const _context = useContext(DialogContext);
    if (!context)
        throw new Error('DialogTrigger must be used within Dialog');
    if (asChild) {
        return (<div onClick={() => context.setIsOpen(true)}>
        {children}
      </div>);
    }
    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>);
}
export function DialogContent({ children, className = '' }) {
    const _context = useContext(DialogContext);
    if (!context)
        throw new Error('DialogContent must be used within Dialog');
    if (!context.isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)}/>
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
    </div>);
}
export function DialogHeader({ children, className = '' }) {
    return <div className={`mb-4 ${className}`}>{children}</div>;
}
export function DialogTitle({ children, className = '' }) {
    return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}
export function DialogDescription({ children, className = '' }) {
    return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;
}
export function DialogFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;
}
