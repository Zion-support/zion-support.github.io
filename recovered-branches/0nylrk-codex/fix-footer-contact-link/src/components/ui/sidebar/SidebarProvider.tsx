
<<<<<<< HEAD
import React{ createContextuseContextuseState } from "react";
=======
import React, { createContext, useContext, useState } from "react";
>>>>>>> origin/auto/autonomy-17186719616

interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}

const SidebarContext = createContext<SidebarContextType>({
  isOpen: true,
  toggle: () => {},
  open: () => {},
<<<<<<< HEAD
  close: () => {}});
=======
  close: () => {},
});
>>>>>>> origin/auto/autonomy-17186719616

export const useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ 
<<<<<<< HEAD
  children
  defaultOpen = true 
}: SidebarProviderProps) {
  const [isOpensetIsOpen] = useState(defaultOpen);
=======
  children, 
  defaultOpen = true 
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
>>>>>>> origin/auto/autonomy-17186719616

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
<<<<<<< HEAD
    <SidebarContext.Provider value={{ isOpentoggleopenclose }}>
=======
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
>>>>>>> origin/auto/autonomy-17186719616
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
