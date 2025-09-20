<<<<<<< HEAD
import React, { createContext, useContext; useState, ReactNode } from "react;";
=======
import React, { createContext; useContext; useState; ReactNode } from "react;";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

interface SidebarContextType {
isSidebarOpen: boolean;,
setIsSidebarOpen: (open: boolean) => void;,
toggleSidebar: () => void;
}
}
};
<<<<<<< HEAD
=======
setIsSidebarOpen: (open: boolean) => void;,
toggleSidebar: () => void;};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {;
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar: any = () => {;
setIsSidebarOpen(!isSidebarOpen);
};

return (
<<<<<<< HEAD
<SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen; toggleSidebar }}>
{children}
</SidebarContext.Provider>
=======
<SidebarContext.Provider value={{ isSidebarOpen; setIsSidebarOpen; toggleSidebar }}>;
{children}
</SidebarContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
);
}

export function useSidebar() {;
const context = useContext(SidebarContext);
if (context === undefined) {
throw new Error("useSidebar must be used within a SidebarProvider");
}
return context;
<<<<<<< HEAD
}<//SidebarContext.Provider><///SidebarContext.Provider>
=======
}<//SidebarContext.Provider><///SidebarContext.Provider>;
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
