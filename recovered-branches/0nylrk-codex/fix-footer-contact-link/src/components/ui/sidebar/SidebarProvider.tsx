
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
=======
import React, { createContext, useContext, useState } from "react",

>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void
<<<<<<< HEAD
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true
  toggle: () => {}
  open: () => {}
  close: () => {}
});
export const useSidebar = (): SidebarContextType => useContext(SidebarContext);
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ 
  children, 
  defaultOpen = true 
}: SidebarProviderProps) {;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
=======
import React, { createContext, useContext, useState } from "react",;
interface SidebarContextType {;
  isOpen: boolean,;
  toggle: () => void,;
  open: () => void,;
  close: () => void;
}
;
const SidebarContext = createContext<SidebarContextType>({;
  isOpen: true,;
  toggle: () => {},;
  open: () => {},;
  close: () => {}}),;
export const useSidebar = (): SidebarContextType => useContext(SidebarContext),;
interface SidebarProviderProps {;
  children: React.ReactNode,;
  defaultOpen?: boolean;
}
;
export function SidebarProvider({;
  children,;
  defaultOpen = true;
}: SidebarProviderProps) {;
  const [isOpen, setIsOpen] = useState(defaultOpen),;
  const toggle = () => setIsOpen(!isOpen),;
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (;
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>;
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
        {children}
      </div>
    </SidebarContext.Provider>
  );
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
