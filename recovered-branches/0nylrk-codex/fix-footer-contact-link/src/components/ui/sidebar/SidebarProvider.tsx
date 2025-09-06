
interface SidebarContextType {
  is_open: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void
interface SidebarProviderProps {
  children: React.ReactNode;
  default_open?: boolean;
}
export function SidebarProvider({
  children
  defaultOpen = true
}: SidebarProviderProps) {




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
import React, { createContext, useContext, useState } from "react",;

interface SidebarContextType {;
  isOpen: boolean,;
  toggle: () => void,;
  open: () => void,;
  close: () => void;
}
const SidebarContext = createContext<SidebarContextType>({;
  isOpen: true,;
  toggle: () => {},;
  open: () => {},;
  close: () => {}}),;

  return (;
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>;
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>;
        {children}
      </div>
    </SidebarContext.Provider>
  );


}

