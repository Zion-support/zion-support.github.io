import React, {useState} from 'react';
const SidebarProvider({children}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = (props) => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<SidebarContext.Provider value = {
  { isSidebarOpen, setIsSidebarOpen,
  toggleSidebar 

}}>
      {children}
    </SidebarContext.Provider>)}
export function useSidebar($1) {
    const context = useContext(SidebarContext);
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider');

    return context;
}
</SidebarContext>;';';