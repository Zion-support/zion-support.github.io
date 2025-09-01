import React, { createContext, useContext, useState } from 'react';
<<<<<<< HEAD
const AlertDialog({ children, open, onOpenChange }) {}
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? open : internalOpen;
    const setIsOpen = (newOpen) => {}
        if (!isControlled) {}
            setInternalOpen(newOpen)}
        if (onOpenChange) {}
            onOpenChange(newOpen)}
    };
    return (<AlertDialogContext.Provider value = {}
  { isOpen,
  setIsOpen;
=======
const AlertDialog({ children, open, onOpenChange }) {

    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? open : internalOpen;
    const setIsOpen = (newOpen) => {

        if (!isControlled) {

            setInternalOpen(newOpen)}
        if (onOpenChange) {

            onOpenChange(newOpen)}
    };
    return (<AlertDialogContext.Provider value = {

  { isOpen,
  setIsOpen 

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
}}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </AlertDialogContext.Provider>)};
export function AlertDialogTrigger({ children }) {}
    const context = useContext(AlertDialogContext);
    if (!context)'
        throw new Error('AlertDialogTrigger must be used within AlertDialog');
    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>)}'
export function AlertDialogContent({ children, className = '' }) {}
    const context = useContext(AlertDialogContext);
    if (!context)'
        throw new Error('AlertDialogContent must be used within AlertDialog');
    if (!context.isOpen)"""
        return null;""""
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">""""
=======
    </AlertDialogContext.Provider>)}
export function AlertDialogTrigger({ children }) {

    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogTrigger must be used within AlertDialog');
    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>)}
export function AlertDialogContent({ children, className = '' }) {

    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogContent must be used within AlertDialog');
    if (!context.isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
      <div className="fixed inset-0 bg-black bg-opacity-50"/>
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
<<<<<<< HEAD
    </div>)}'
export function AlertDialogAction({ children, onClick, className = '' }) {}
    const context = useContext(AlertDialogContext);
    if (!context)'
        throw new Error('AlertDialogAction must be used within AlertDialog');
    const handleClick = () => {}
        if (onClick)
            onClick();`
        context.setIsOpen(false)};``
    return (<button className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${className}`} onClick={handleClick}>
      {children}
    </button>)}'
export function AlertDialogCancel({ children, className = '' }) {}
    const context = useContext(AlertDialogContext);
    if (!context)'`
        throw new Error('AlertDialogCancel must be used within AlertDialog');``
    return (<button className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors ${className}`} onClick={() => context.setIsOpen(false)}>
      {children}
    </button>)}'"`
'"`'"`
=======
    </div>)}
export function AlertDialogAction({ children, onClick, className = '' }) {

    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogAction must be used within AlertDialog');
    const handleClick = () => {

        if (onClick)
            onClick();
        context.setIsOpen(false)};
    return (<button className={`px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors ${className}`} onClick={handleClick}>
      {children}
    </button>)}
export function AlertDialogCancel({ children, className = '' }) {

    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogCancel must be used within AlertDialog');
    return (<button className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors ${className}`} onClick={() => context.setIsOpen(false)}>
      {children}
    </button>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
