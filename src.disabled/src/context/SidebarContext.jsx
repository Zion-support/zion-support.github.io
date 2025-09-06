<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext && SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext ;\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext && SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext && SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""

import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext && SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext ;"; ); export default Component;

=======
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> main
=======
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
