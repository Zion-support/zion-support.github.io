import React, { useState, useRef, useEffect } from 'react' import { Link } from 'react-router-dom' import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen, setIsOpen] =;'
  }
  useState(false);
  const menuRef = useRef(null) const { user, logout } = useAuth();
<<<<<<< HEAD:src/components/header/UserMenu.js.jsx
  useEffect(() => {
 }
 const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside);'
  return () => document.removeEventListener('mousedown', handleClickOutside)}, []);'
  const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {';''"'";
=======
  useEffect(() => {}
 const handleClickOutside = ( if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)) => {
  return $3;}
} } document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside)}, []);
  const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {';''\"'\";}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91:temp-disabled/src/components/header/UserMenu.js.jsx
