<<<<<<< HEAD
import React, { createContext, useContext, useState } from 'react';

interface SidebarContextType {
=======
 interface SidebarContextType {
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  isOpen: boolean;
toggle: () => void;
open: () => void;
close: () => void 
}isOpen: true, toggle: () => {
  
};
open: () => {
  
};
close: () => {
  
}
<<<<<<< HEAD

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
  open: () => {},
  close: () => {},
});

export const useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({
  children,
  defaultOpen = true,
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      <div
        className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
=======
});
return (<SidebarContext.Provider value= {
  {
  isOpen, toggle, open, close 
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
}
}> <div className= {
  `grid $ {
  isOpen ? 'grid-cols-[auto 1fr]' : 'grid-cols-[auto 1fr]' 
}min-h-screen w-full` 
}> {
  children 
}</div> </SidebarContext.Provider>) 
}