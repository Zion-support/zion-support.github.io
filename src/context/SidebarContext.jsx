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
<<<<<<< HEAD
    </SidebarContext.Provider>);

=======
    </SidebarContext.Provider>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
export function useSidebar() {
    const context = useContext(SidebarContext);
<<<<<<< HEAD
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider')}
    return context}
=======
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider');

    return context;
<<<<<<< HEAD
}}}
=======
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
