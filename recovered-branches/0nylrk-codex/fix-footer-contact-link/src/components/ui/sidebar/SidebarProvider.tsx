
<<<<<<< HEAD
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react",
=======
import React, { createContext, useContext, useState } from &quot;react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface SidebarContextType {
  isOpen: boolean,
  toggle: () => void,
  open: () => void,
  close: () => void
}
=======
import React, {_createContext, _useContext, _useState} from "react";

interface SidebarContextType {_isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _SidebarContext = createContext<SidebarContextType>(_{_isOpen: true, _toggle: () => {},
  open: () => {},
  close: () => {}}),

<<<<<<< HEAD
export const useSidebar = (): SidebarContextType => useContext(SidebarContext),

interface SidebarProviderProps {
  children: React.ReactNode,
  defaultOpen?: boolean
}

export function SidebarProvider({ 
  children,
  defaultOpen = true 
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen),

  const toggle = () => setIsOpen(!isOpen),
  const open = () => setIsOpen(true),
  const close = () => setIsOpen(false),
=======
export const _useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {_children: React.ReactNode;
  defaultOpen?: boolean;}

export function SidebarProvider(_{_children, _defaultOpen = true}: SidebarProviderProps) {_const [isOpen, _setIsOpen] = useState(defaultOpen);

  const _toggle = () => setIsOpen(!isOpen);
  const _open = () => setIsOpen(true);
  const _close = () => setIsOpen(false);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  return (
    <SidebarContext.Provider value={{ isOpen, _toggle, _open, _close}}>
      <div className={_`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
        {_children}
      </div>
    </SidebarContext.Provider>
  )
}
