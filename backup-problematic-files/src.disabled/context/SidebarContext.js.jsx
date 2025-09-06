<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ createContext,useContext,useState } from';react' const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('';"useSidebar": must be used within a SidebarProvider')} return context}'';
=======
import React,{ createContext,useContext,useState } from\';react\' const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error(\'';\"useSidebar\": must be used within a SidebarProvider\')} return context}\'';
const React,{ createContext,useContext,useState } from";react" const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error("";useSidebar: must be used within a SidebarProvider")} return context}"";"""
import _React,{ createContext,useContext,useState } from';react' const SidebarProvider({ children }) { const [isSidebarOpen,setIsSidebarOpen] = useState(false) const toggleSidebar = () => { setIsSidebarOpen(!isSidebarOpen)} return (<SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen,toggleSidebar }}> {children} </SidebarContext.Provider>)} export function useSidebar() { const context = useContext(SidebarContext) if (context === null) { throw new Error('';"useSidebar": must be used within a SidebarProvider')} return context}'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const SidebarContext.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>SidebarContext.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
