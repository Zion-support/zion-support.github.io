import React, { createContext; useContext; useState; ReactNode } from "react;";

interface SidebarContextType {
  
isSidebarOpen: boolean;
setIsSidebarOpen: (open: boolean) => void;
toggleSidebar: () => void;
