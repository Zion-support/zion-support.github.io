<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React,{ createContext,useContext,useState } from \'react\'; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return (<SidebarContext&& SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen, toggleSidebar}}>; {children}; </SidebarContext && SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error(\'useSidebar must be used within a SidebarProvider\')}; return context};
const React,{ createContext,useContext,useState } from "react"; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return (<SidebarContext&& SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen, toggleSidebar}}>; {children}; </SidebarContext && SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error("useSidebar must be used within a SidebarProvider")}; return context};''"

import _React,{ createContext,useContext,useState } from 'react'; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return (<SidebarContext&& SidebarContext.Provider value = { { isSidebarOpen,setIsSidebarOpen, toggleSidebar}}>; {children}; </SidebarContext && SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error('useSidebar must be used within a SidebarProvider')}; return context};

=======
import _React,{ createContext,useContext,useState } from 'react'; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return(<SidebarContext.Provider value = {; { isSidebarOpen,setIsSidebarOpen,; toggleSidebar}}>; {children}; </SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error('useSidebar must be used within a SidebarProvider')}; return context};
>>>>>>> main
=======
import React,{ createContext,useContext,useState } from \'react\'; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return(<SidebarContext.Provider value = {; { isSidebarOpen,setIsSidebarOpen,; toggleSidebar}}>; {children}; </SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error(\'useSidebar must be used within a SidebarProvider\')}; return context};
const React,{ createContext,useContext,useState } from "react"; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return(<SidebarContext.Provider value = {; { isSidebarOpen,setIsSidebarOpen,; toggleSidebar}}>; {children}; </SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error("useSidebar must be used within a SidebarProvider")}; return context};''"
import _React,{ createContext,useContext,useState } from 'react'; const SidebarProvider({ children }) {; const [isSidebarOpen,setIsSidebarOpen] = useState(false); const toggleSidebar = () => {; setIsSidebarOpen(!isSidebarOpen)}; return(<SidebarContext.Provider value = {; { isSidebarOpen,setIsSidebarOpen,; toggleSidebar}}>; {children}; </SidebarContext.Provider>)}; export function useSidebar() {; const context = useContext(SidebarContext); if(context === null) {; throw new Error('useSidebar must be used within a SidebarProvider')}; return context};
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> main
