import React, { createContext, useContext, useState } from 'react.ts';
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
}
export function DropdownMenuTrigger(...args: any[]): any {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuTrigger must be used within DropdownMenu');
    if (asChild) {
      </div>)}
    return (<div onClick={() => context.setIsOpen(!context.isOpen)}>
      {children}
    </div>)}
export function DropdownMenuContent(...args[]: any):  {;
=======;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
        return (<div onClick = {() => context.setIsOpen(!context.isOpen)}>;
        {children};
      </div>);
    }
    return (<div onClick = {() => context.setIsOpen(!context.isOpen)}>;
      {children};
    </div>);
}
export function DropdownMenuContent(...args: any[]): any {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
export function DropdownMenuItem(...args[]: any):  {
=======;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
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
}
export function DropdownMenuItem(...args: any[]): any {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    const context = useContext(DropdownMenuContext);
    if (!context)
        throw new Error('DropdownMenuItem must be used within DropdownMenu');
    const handleClick = () => {;
        if (onClick);
            onClick();
        context.setIsOpen(false)};
    if (asChild) {
      </div>)}
    return (<button className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>
      {children}
    </button>)};
        return (<div className = {`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>;
        {children};
      </div>);
    }
    return (<button className = {`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none ${className}`} onClick={handleClick}>;
      {children};
    </button>);
}
