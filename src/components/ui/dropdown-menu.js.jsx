import React, { createContext, useContext, useState } from 'react';
<<<<<<< HEAD
const DropdownMenu({ children }) {}
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {}
  { isOpen,
  setIsOpen;
=======
const DropdownMenu({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {

  { isOpen,
  setIsOpen 

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
}}>
      <div className="relative">
        {children}
      </div>
<<<<<<< HEAD
    </DropdownMenuContext.Provider>)};
export function DropdownMenuTrigger({ children, asChild = false }) {}
    const context = useContext(DropdownMenuContext);
    if (!context)'
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {}
=======
    </DropdownMenuContext.Provider>)}
export function DropdownMenuTrigger({ children, asChild = false }) {

    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {

>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
        return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
        {children}
      </div>)}
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
<<<<<<< HEAD
    </div>)}'
export function DropdownMenuContent({ children, align = 'start', className = '' }) {}
    const context = useContext(DropdownMenuContext);
    if (!context)'
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
    const alignClasses = {}
'
''
'''
  start: 'left-0','''
        center: 'left-1/2 transform -translate-x-1/2','''
  end: 'right-0'
=======
    </div>)}
export function DropdownMenuContent({ children, align = 'start', className = '' }) {

    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
    const alignClasses = {

  start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
  end: 'right-0'
    
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209

};
    return (<div className={`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
<<<<<<< HEAD
    </div>)}'
export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {}
    const context = useContext(DropdownMenuContext);
    if (!context)'
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = () => {}
        if (onClick)
            onClick();
        context.setIsOpen(false)};
    if (asChild) {}
`
``
        return (<div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}`
      </div>)}``
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)}'"`
'"`'"`
=======
    </div>)}
export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {

    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = () => {

        if (onClick)
            onClick();
        context.setIsOpen(false)};
    if (asChild) {

        return (<div className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}
      </div>)}
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)}
>>>>>>> 8511dfec91ab1a754e62d15d85875e820ae1d209
