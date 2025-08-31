import React, { createContext, useContext, useState } from 'react';
<<<<<<< HEAD

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <SidebarContext.Provider value={{
            isSidebarOpen,
            setIsSidebarOpen,
            toggleSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    );
}

=======
const SidebarProvider({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (<SidebarContext.Provider value = {
  { isSidebarOpen, setIsSidebarOpen,
  toggleSidebar 
}}>
      {children}
    </SidebarContext.Provider>)}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === null) {
        throw new Error('useSidebar must be used within a SidebarProvider');
<<<<<<< HEAD
    }
=======
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
    return context;
}
