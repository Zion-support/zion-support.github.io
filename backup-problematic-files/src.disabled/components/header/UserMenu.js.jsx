<<<<<<< HEAD
import _React,{ useState,useRef,useEffect } from';react' import { Link } from';';react-router-dom' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from';';lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('';mousedown',handleClickOutside) "return": () => document.removeEventListener('';mousedown',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {'';'';
import React,{ useState,useRef,useEffect } from\';react\' import { Link } from\';\';react-router-dom\' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from\';\';lucide-react\' import { useAuth } from \'../../hooks/useAuth\' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef && menuRef.current && !menuRef && menuRef.current.contains(event && event.target)) { setIsOpen(false)} } document ;mousedown\',handleClickOutside) \"return\": () => document && document.removeEventListener(\'';mousedown\',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {\'';\'';
const React,{ useState,useRef,useEffect } from";react" import { Link } from";";react-router-dom" import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from";";lucide-react" import { useAuth } from "././hooks/useAuth" export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef && menuRef.current && !menuRef && menuRef.current.contains(event && event.target)) { setIsOpen(false)} } document ;mousedown",handleClickOutside) return: () => document && document.removeEventListener("";mousedown",handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {"";"";'"'"
import _React,{ useState,useRef,useEffect } from';react' import { Link } from';';react-router-dom' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from';';lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef && menuRef.current && !menuRef && menuRef.current.contains(event && event.target)) { setIsOpen(false)} } document ;mousedown',handleClickOutside) "return": () => document && document.removeEventListener('';mousedown',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {'';'';
=======
import React from 'react';

const UserMenu.js = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>UserMenu.js</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default UserMenu.js;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
