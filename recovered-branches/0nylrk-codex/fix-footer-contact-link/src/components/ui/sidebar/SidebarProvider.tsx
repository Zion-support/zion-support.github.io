import React, { createContext, useContext, useState } from "react";
interface SidebarContextType {
  isOpen: boolean,
  toggle: () => void,
  open: () => void,
  close: () => void
}

const SidebarContext = $2;
  toggle: () => {},
  open: () => {},
  close: () => {}}),

export const useSidebar = (): SidebarContextType => useContext($2);
interface SidebarProviderProps {
  children: React.ReactNode,
  defaultOpen?: boolean
}
export function SidebarProvider({
  children
  defaultOpen = true
}: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState($2);
  const toggle = () => setIsOpen($2);
  const open = () => setIsOpen($2);
  const close = () => setIsOpen($2);
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      <div
        className={`grid ${isOpen ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"} min-h-screen w-full`}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  )
}
