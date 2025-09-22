
:backup-merge-conflicts/SidebarContext.jsx.backup
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;

import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;

>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:src.disabled/src/context/SidebarContext.jsx
=======
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:backup-problematic-files/src.disabled/src/context/SidebarContext.jsx
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
=======
=======
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

=======
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
>>>>>>> 8e2e4d4581f20cdfc8804c591c8c2f9544e58358
=======
=======
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
<:src.disabled/src/context/SidebarContext.jsx
<<<<<<< HEAD
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> c56320a4e91ebfd91859a6eed8c13818d8c9efd6
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import React,{ createContext,useContext,useState } from \"react\" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\"useSidebar must be used within a SidebarProvider\")} return context}\';\"; ); export default Component;"
const React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}";"; ); export default Component;"""'"
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("useSidebar must be used within a SidebarProvider")} return context}';"; ); export default Component;

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
========
import _React,{ createContext,useContext,useState } from "react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext && SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext ;"; ); export default Component;
>>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:backup-problematic-files/src.disabled/src/context/SidebarContext.jsx
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
