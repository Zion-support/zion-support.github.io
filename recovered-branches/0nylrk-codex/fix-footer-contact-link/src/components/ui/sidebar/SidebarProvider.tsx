

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
interface SidebarContextType {
  is_open: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void
}

=======
const SidebarContext = create_context < SidebarContextType>({
  is_open: true,
  toggle: () => {},
  open: () => {},
  close: () => {},
});
;
export const use_sidebar = (): SidebarContextType => useContext (SidebarContext);
;

interface SidebarProviderProps {
  children: React.ReactNode;
  default_open?: boolean;
}
export function SidebarProvider({
  children
  defaultOpen = true
}: SidebarProviderProps) {

=======


=======

export function SidebarProvider({ 
  children, 
  defaultOpen = true 
}: SidebarProviderProps) {;
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      <div
        className={`grid ${isOpen ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"} min-h-screen w-full`}
      >
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
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

export const useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {;
  children: React && React.ReactNode,;
  defaultOpen?: boolean;
}

export function SidebarProvider(): any ({ ;
  children, ;
  defaultOpen = true ;
}: SidebarProviderProps) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (;
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>;
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
        {children}
      </div>
    </SidebarContext.Provider>
  );

}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
