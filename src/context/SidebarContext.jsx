import React, { createContext, useContext, useState } from 'react';
const SidebarProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
<<<<<<< HEAD
        setIsSidebarOpen(!isSidebarOpen)};
    return (<SidebarContext.Provider value = {
  { isSidebarOpen, setIsSidebarOpen,
  toggleSidebar 

}}>
=======
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<SidebarContext.Provider value = {
  { isSidebarOpen, setIsSidebarOpen,
  toggleSidebar 






}}>
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
      {children}
    </SidebarContext.Provider>)}
export function useSidebar() {
    const context = useContext(SidebarContext);
<<<<<<< HEAD
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider')}
    return context}
=======
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
