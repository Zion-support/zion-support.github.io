

interface SidebarContextType {
  is_open: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void



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

const SidebarContext = create_context < SidebarContextType>({





    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>






  return (;
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>;










export /**
 * SidebarProvider - Function description




}



