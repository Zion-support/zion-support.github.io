import React, { createContext, useContext, useState } from 'react';
const AlertDialog({ children, open, onOpenChange }) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = isControlled ? open : internalOpen;
    const setIsOpen = (newOpen) => {
        if (!isControlled) {
<<<<<<< HEAD
            setInternalOpen(newOpen);

        if (onOpenChange) {
            onOpenChange(newOpen);

=======
            setInternalOpen(newOpen)}
        if (onOpenChange) {
            onOpenChange(newOpen)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    };
    return (<AlertDialogContext.Provider value = {
  { isOpen,
  setIsOpen 






}}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </AlertDialogContext.Provider>);

=======
    </AlertDialogContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function AlertDialogTrigger({ children }) {
    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogTrigger must be used within AlertDialog');
    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
<<<<<<< HEAD
    </div>);

=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function AlertDialogContent({ children, className = '' }) {
    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogContent must be used within AlertDialog');
    if (!context.isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50"/>
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
<<<<<<< HEAD
    </div>);

export function AlertDialogHeader({ children, className = '' }) {
    return <div className={`mb-4 ${className}`}>{children}</div>;

export function AlertDialogTitle({ children, className = '' }) {
    return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;

export function AlertDialogDescription({ children, className = '' }) {
    return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;

export function AlertDialogFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;

=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
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
<<<<<<< HEAD
    </button>);

=======
    </button>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function AlertDialogCancel({ children, className = '' }) {
    const context = useContext(AlertDialogContext);
    if (!context)
        throw new Error('AlertDialogCancel must be used within AlertDialog');
    return (<button className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors ${className}`} onClick={() => context.setIsOpen(false)}>
      {children}
<<<<<<< HEAD
    </button>);
</div>}}}}}}}}}}}
=======
    </button>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
