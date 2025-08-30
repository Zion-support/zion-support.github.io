<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react.ts';
const DropdownMenu(...args[]):  {
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {
  { isOpen,
  setIsOpen 

}}>
      <div className="relative">
        {children}
      </div>
    </DropdownMenuContext.Provider>)}
export function DropdownMenuTrigger(...args[]):  {;
=======;
import React, { createContext, useContext, useState } from 'react';
const DropdownMenu({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    return (<DropdownMenuContext.Provider value = {
  { isOpen,
  setIsOpen 

;
;
;


}}>;
      <div className="relative">;
        {children};
      </div>;
    </DropdownMenuContext.Provider>);
<<<<<<< HEAD

export function DropdownMenuTrigger({ children, asChild = false }) {
=======
}
export function DropdownMenuTrigger({ children, asChild = false }) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {
<<<<<<< HEAD
        return (<div onClick = {() => context.setIsOpen(!context.isOpen)}>
        {children}
<<<<<<< HEAD
      </div>);

=======
      </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
export function DropdownMenuContent(...args[]):  {;
=======;
        return (<div onClick = {() => context.setIsOpen(!context.isOpen)}>;
        {children};
      </div>);
    }
    return (<div onClick = {() => context.setIsOpen(!context.isOpen)}>;
      {children};
    </div>);
<<<<<<< HEAD

export function DropdownMenuContent({ children, align = 'start', className = '' }) {
=======
}
export function DropdownMenuContent({ children, align = 'start', className = '' }) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuContent must be used within DropdownMenu');
    if (!context.isOpen)
        return null;
    const alignClasses = {
  <<<<<<< HEAD
        start: 'left-0',
        center: 'left-1/2 transform -translate-x-1/2',
  end: 'right-0';
    ;

};
    return (<div className = {`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>
      {children}
    </div>)}
export function DropdownMenuItem(...args[]):  {
=======;
  start: 'left-0',;
        center: 'left-1/2 transform -translate-x-1/2',;
  ;
  ;
  end: 'right-0';
    ;




};
    return (<div className = {`absolute z-50 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200 ${alignClasses[align]} ${className}`}>;
      {children};
    </div>);
<<<<<<< HEAD

export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {
=======
}
export function DropdownMenuItem({ children, onClick, asChild = false, className = '' }) {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = () => {;
        if (onClick);
            onClick();
        context.setIsOpen(false)};
    if (asChild) {
<<<<<<< HEAD
        return (<div className = {`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
        {children}
<<<<<<< HEAD
      </div>);

=======
      </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)};
=======;
        return (<div className = {`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>;
        {children};
      </div>);
    }
    return (<button className = {`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>;
      {children};
    </button>);
<<<<<<< HEAD
}}}}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
