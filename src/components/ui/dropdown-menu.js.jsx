<<<<<<< HEAD
import React, {useState} from 'react';
const DropdownMenu({children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {
  { isOpen,
  setIsOpen 

}}>
      <div className="relative">
        {children}
      </div>
    </DropdownMenuContext.Provider>)}
export function DropdownMenuTrigger($1) {
    const context = useContext(DropdownMenuContext);
    if (!context)';';
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {
        return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
          </div>
  );
}
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
        </div>
  );
}
export function DropdownMenuContent($1) {
    const context = useContext(DropdownMenuContext);
    if (!context)';';
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
    const alignClasses = {
  "start": 'left-0',
        "center": 'left-1/2 transform -translate-x-1/2',
  "end": 'right-0'
    

};
    return (
    <div className="min-h-screen bg-white">
      {children}
        </div>
  );
}
export function DropdownMenuItem($1) {
    const context = useContext(DropdownMenuContext);
    if (!context)';';
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = (props) => {
        if (onClick)
            onClick();
        context.setIsOpen(false)};
    if (asChild) {
        return (
    <div className="min-h-screen bg-white">
        {children}
          </div>
  );
}
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 "hover": bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)}
</DropdownMenuContext>;';
import React,{useState} from 'react'; const DropdownMenu({children}) { const [isOpen,setIsOpen] = useState(false); return (<DropdownMenuContext.Provider value = { { isOpen,setIsOpen }}> <div className="relative"> {children} </div> </DropdownMenuContext.Provider>)} export function DropdownMenuTrigger($1) { const context = useContext(DropdownMenuContext); if (!context)';'; throw new Error('DropdownMenuTrigger must be used within DropdownMenu'); if (asChild) { return (<div onClick={() => context.setIsOpen(!context.isOpen)}> {children} </div> )} return (<div onClick={() => context.setIsOpen(!context.isOpen)}> {children} </div> )} export function DropdownMenuContent($1) { const context = useContext(DropdownMenuContext); if (!context)';'; throw new Error('DropdownMenuContent must be used within DropdownMenu'); if (!context.isOpen) return null; const alignClasses = { start: 'left-0',center: 'left-1/2 transform -translate-x-1/2',end: 'right-0' };; return ( <div className="min-h-screen bg-white"> {children} </div> )} export function DropdownMenuItem($1) { const context = useContext(DropdownMenuContext); if (!context)';'; throw new Error('DropdownMenuItem must be used within DropdownMenu'); const handleClick = (props) => { if (onClick) onClick(); context.setIsOpen(false)}; if (asChild) { return ( <div className="min-h-screen bg-white"> {children} </div> )} return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}> {children} </button>)} </DropdownMenuContext>;';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-eafe
=======

>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
