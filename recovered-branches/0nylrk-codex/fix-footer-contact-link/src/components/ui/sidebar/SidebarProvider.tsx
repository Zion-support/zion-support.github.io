
<<<<<<< HEAD
import React, { createContext, useContext, useState } from "react";
=======
import React, { createContext, useContext, useState } from "react",

<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export const useSidebar = (): SidebarContextType => useContext(SidebarContext);
interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export function SidebarProvider({
  children
  defaultOpen = true
}: SidebarProviderProps) {
=======

export function SidebarProvider({ 
  children, 
  defaultOpen = true 
}: SidebarProviderProps) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
<<<<<<< HEAD
      <div
        className={`grid ${isOpen ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"} min-h-screen w-full`}
      >
=======
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        {children}
      </div>
    </SidebarContext.Provider>
  );
<<<<<<< HEAD
}
=======
}
<<<<<<< HEAD
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
=======
;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
