

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

export const useSidebar = (): SidebarContextType => useContext(SidebarContext);

interface SidebarProviderProps {
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function SidebarProvider({ 

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
      <div className={`grid ${isOpen ? 'grid-cols-[auto_1fr]' : 'grid-cols-[auto_1fr]'} min-h-screen w-full`}>
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
