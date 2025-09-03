<<<<<<< HEAD
const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false); const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }; return(<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)}; export function useSidebar() { const context = useContext(SidebarContext); if(context === null) { throw new Error("useSidebar must be used within a SidebarProvider"); return context; } ";"
=======
<<<<<<< HEAD
const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false); const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }; return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)}; export function useSidebar() { const context = useContext(SidebarContext); if(context === null) { throw new Error("useSidebar must be used within a SidebarProvider"); return context; } ";"
=======
<<<<<<< HEAD

const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false); const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }; return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)}; export function useSidebar() { const context = useContext(SidebarContext); if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider"); return context; } ";"""";

const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false); const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen); }; return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)}; export function useSidebar() { const context = useContext(SidebarContext); if(context === null) { throw new Error("useSidebar must be used within a SidebarProvider"); return context; } ";"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
=======
<<<<<<< HEAD
const: SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) } return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('useSidebar must be used within a SidebarProvider') return context } '';'"";
=======
<<<<<<< HEAD
const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) } return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('useSidebar must be used within a SidebarProvider') return context } '''"
=======
<<<<<<< HEAD
const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) } return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('useSidebar must be used within a SidebarProvider') return context } '';""
=======
const SidebarProvider({ children }) { const [isSidebarOpen, setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) } return (<SidebarContext.Provider value = { { isSidebarOpen, setIsSidebarOpen, toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('useSidebar must be used within a SidebarProvider') return context } '"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
