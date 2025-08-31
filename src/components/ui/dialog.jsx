import React, { createContext, useContext, useState } from 'react';
const Dialog({ children, open, onOpenChange }) {
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
    return (<DialogContext.Provider value = {
  { isOpen,
  setIsOpen 






}}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </DialogContext.Provider>);

=======
    </DialogContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function DialogTrigger({ children, asChild = false }) {
    const context = useContext(DialogContext);
    if (!context)
        throw new Error('DialogTrigger must be used within Dialog');
    if (asChild) {
        return (<div onClick={() => context.setIsOpen(true)}>
        {children}
<<<<<<< HEAD
      </div>);

    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>);

=======
      </div>)}
    return (<div onClick={() => context.setIsOpen(true)}>
      {children}
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function DialogContent({ children, className = '' }) {
    const context = useContext(DialogContext);
    if (!context)
        throw new Error('DialogContent must be used within Dialog');
    if (!context.isOpen)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => context.setIsOpen(false)}/>
      <div className={`relative bg-white rounded-lg p-6 max-w-md w-full mx-4 ${className}`}>
        {children}
      </div>
<<<<<<< HEAD
    </div>);

export function DialogHeader({ children, className = '' }) {
    return <div className={`mb-4 ${className}`}>{children}</div>;

export function DialogTitle({ children, className = '' }) {
    return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;

export function DialogDescription({ children, className = '' }) {
    return <p className={`text-gray-600 mt-2 ${className}`}>{children}</p>;

export function DialogFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>;
</div>}}}}}}}}}}
=======
    </div>)}
export function DialogFooter({ children, className = '' }) {
    return <div className={`flex justify-end gap-2 mt-6 ${className}`}>{children}</div>}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
