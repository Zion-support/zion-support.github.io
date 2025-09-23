
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
=======
import React{ createContextuseContextuseState } from "react";
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

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
  close: () => {},
});
=======
  close: () => {}});
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

export const useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ 
<<<<<<< HEAD
  children, 
  defaultOpen = true 
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
=======
  children
  defaultOpen = true 
}: SidebarProviderProps) {
  const [isOpensetIsOpen] = useState(defaultOpen);
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
<<<<<<< HEAD
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
=======
    <SidebarContext.Provider value={{ isOpentoggleopenclose }}>
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
