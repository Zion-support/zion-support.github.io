<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react' import { Link } from 'react-router-dom' import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {'''"'"
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react' import { Link } from 'react-router-dom' import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {';'"
=======
<<<<<<< HEAD
import React, {useState, useRef, useEffect } from 'react';
import {Link } from 'react-router-dom';
import {User, Settings, LogOut, Bell, MessageSquare, Shield, CreditCard, HelpCircle } from 'lucide-react';
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from &apos;react&apos; import { Link } from &apos;react-router-dom&apos; import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from &apos;lucide-react&apos; import { useAuth } from &apos;../../hooks/useAuth&apos;&apos;' export const UserMenu = () => {} const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => {} const;const;const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener(&apos;mousedown&apos;, handleClickOutside) return () => document.removeEventListener(&apos;mousedown&apos;, handleClickOutside)}, []) ;&apos;const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {';&apos;'&quot;&quot;}"
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';""
import { Link } from 'react-router-dom';""
=======
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react' import { Link } from 'react-router-dom' import { User, Settings, LogOut, ChevronDown, Bell, ShoppingCart } from 'lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen, setIsOpen] = useState(false) const menuRef = useRef(null) const { user, logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('mousedown', handleClickOutside) return () => document.removeEventListener('mousedown', handleClickOutside)}, []) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {';''"'"
=======
import React, { useState, useRef, useEffect } from 'react
import { Link } from 'react-router-dom
>>>>>>> main
import { User, Settings, LogOut, Bell, MessageSquare, Shield, CreditCard, HelpCircle } from 'lucide-react';
>>>>>>> main

export function UserMenu({user }) {const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);, }
    };
<<<<<<< HEAD
'
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here'
=======
""
    document.addEventListener('mousedown', handleClickOutside);""
    return () => document.removeEventListener('mousedown', handleClickOutside);, }, []);

<<<<<<< HEAD
  const handleLogout = () => {// Implement logout logic here
=======
  const handleLogout = () => {
    // Implement logout logic here""
>>>>>>> main
>>>>>>> main
    console.log('Logging out...');
    setIsOpen(false);, };

<<<<<<< HEAD
  const menuItems = [
    {'
      name: 'Profile',
=======
<<<<<<< HEAD
  const menuItems = [{name: 'Profile',
>>>>>>> main
      href: '/profile',
      icon: User,
      description: 'Manage your account'
    },
<<<<<<< HEAD
    {'
      name: 'Dashboard',
=======
    {name: 'Dashboard',
>>>>>>> main
      href: '/dashboard',
      icon: Settings,
      description: 'View your projects'
    },
<<<<<<< HEAD
    {'
      name: 'Messages',
=======
    {name: 'Messages',
>>>>>>> main
      href: '/messages',
      icon: MessageSquare,
      description: 'Check your inbox'
    },
<<<<<<< HEAD
    {'
      name: 'Notifications',
=======
    {name: 'Notifications',
>>>>>>> main
      href: '/notifications',
      icon: Bell,
      description: 'Manage alerts'
    },
<<<<<<< HEAD
    {'
      name: 'Security',
=======
    {name: 'Security',
>>>>>>> main
      href: '/security',
      icon: Shield,
      description: 'Privacy & security'
    },
<<<<<<< HEAD
    {'
      name: 'Billing',
=======
    {name: 'Billing',
>>>>>>> main
      href: '/billing',
      icon: CreditCard,
      description: 'Payment methods'
    },
<<<<<<< HEAD
    {'
      name: 'Help',
=======
    {name: 'Help',
=======
  const menuItems = [
<<<<<<< HEAD
    {""
      name: 'Profile', ""
=======
  {"
      name: 'Profile,
>>>>>>> main
      href: '/profile',
      icon: User, ""
      description: 'Manage your account',
<<<<<<< HEAD
}, {""
      name: 'Dashboard',""
      href: '/dashboard', icon: Settings,""
      description: 'View your projects', },
    {""
      name: 'Messages', ""
=======
},
    {"
      name: 'Dashboard,
      href: '/dashboard',
      icon: Settings,"
      description: 'View your projects',
},
    {"
      name: 'Messages,
>>>>>>> main
      href: '/messages',
      icon: MessageSquare, ""
      description: 'Check your inbox',
<<<<<<< HEAD
}, {""
      name: 'Notifications',""
      href: '/notifications', icon: Bell,""
      description: 'Manage alerts', },
    {""
      name: 'Security', ""
=======
},
    {"
      name: 'Notifications,
      href: '/notifications',
      icon: Bell,"
      description: 'Manage alerts',
},
    {"
      name: 'Security,
>>>>>>> main
      href: '/security',
      icon: Shield, ""
      description: 'Privacy & security',
<<<<<<< HEAD
}, {""
      name: 'Billing',""
      href: '/billing', icon: CreditCard,""
      description: 'Payment methods', },
    {""
      name: 'Help', ""
=======
},
    {"
      name: 'Billing,
      href: '/billing',
      icon: CreditCard,"
      description: 'Payment methods',
},
    {"
      name: 'Help,
>>>>>>> main
>>>>>>> main
>>>>>>> main
      href: '/help',
      icon: HelpCircle, ""
      description: 'Get support',
}
  ];

<<<<<<< HEAD
  return ('
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}"
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10 transition-colors"
      >"
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">"
          <span className="text-white font-semibold text-sm">"
            {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </span>
        </div>'
        <span className="hidden sm:block text-sm font-medium">"
=======
<<<<<<< HEAD
  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">
          <span className="text-white font-semibold text-sm">
            {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </span>
        </div>
        <span className="hidden sm: block text-sm font-medium">
=======
  return (""
    <div className="relative" ref={menuRef}" >"
      <button onClick={() =" > setIsOpen(!isOpen)}"
        className="flex items-center space-x-2 p-2 rounded-lg text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
      >""
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
          <span className="text-white font-semibold text-sm">""
            {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
          </span>
        </div>""
        <span className="hidden sm: block text-sm font-medium">""
>>>>>>> main
>>>>>>> main
          {user?.name || user?.email || 'User'}
        </span>
      </button>

<<<<<<< HEAD
      {isOpen && ('
        <div className="absolute right-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
          {/* User Info Header */}"
          <div className="p-4 border-b border-zion-purple/20">"
            <div className="flex items-center space-x-3">"
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">"
                <span className="text-white font-semibold">"
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div>'
                <p className="text-white font-medium">"
                  {user?.name || 'User'}
                </p>'
                <p className="text-zion-slate-light text-sm">"
=======
      {isOpen && (""
        <div className="absolute right-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50">
          {/* User Info Header */}""
          <div className="p-4 border-b border-zion-purple/20">""
            <div className="flex items-center space-x-3">""
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-zion-purple to-zion-cyan flex items-center justify-center">""
                <span className="text-white font-semibold">""
                  {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                </span>
              </div>
              <div>""
                <p className="text-white font-medium">""
                  {user?.name || 'User'}
                </p>""
                <p className="text-zion-slate-light text-sm">""
>>>>>>> main
                  {user?.email || 'user@example.com'}
                </p>
              </div>
            </div>
          </div>

          {/* Menu Items */}""
          <div className="py-2">
            {menuItems.map((item) => (
<<<<<<< HEAD
              <Link
                key={item.name}
                to={item.href}"
                className="flex items-center px-4 py-3 text-zion-slate-light hover:text-white hove,
    r:bg-zion-purple/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >"
                <item.icon className="h-4 w-4 mr-3 text-zion-cyan" />"
                <div className="flex-1">"
                  <span className="font-medium">{item.name}</span>"
=======
<<<<<<< HEAD
              <Link key={item.name} to={item.href} className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors" onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-4 w-4 mr-3 text-zion-cyan" />
                <div className="flex-1">
                  <span className="font-medium">{item.name}</span>
=======
              <Link key={item.name}
                to={item.href}""
                className="flex items-center px-4 py-3 text-zion-slate-light hover: text-white hover:bg-zion-purple/10 transition-colors"
                onClick={() =" > setIsOpen(false)}"
              >""
                <item .icon className="h-4 w-4 mr-3 text-zion-cyan" /" >"
                <div className="flex-1">""
                  <span className="font-medium">{item.name}</span>""
>>>>>>> main
>>>>>>> main
                  <p className="text-xs text-zion-slate-light">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>

<<<<<<< HEAD
          {/* Logout */}"
          <div className="p-4 border-t border-zion-purple/20">
            <button
              onClick={handleLogout}"
              className="flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 hove,
    r:bg-red-500/10 rounded-lg transition-colors"
            >"
=======
          {/* Logout */}""
          <div className="p-4 border-t border-zion-purple/20">
<<<<<<< HEAD
            <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-red-400 hover: text-red-300 hover:bg-red-500/10 rounded-lg transition-colors" >
>>>>>>> main
              <LogOut className="h-4 w-4 mr-3" />
=======
<<<<<<< HEAD
            <button onClick={handleLogout}""
              className="flex items-center w-full px-4 py-2 text-red-400 hover: text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"" >"
              <LogOut className="h-4 w-4 mr-3" /" >"
=======
            <button onClick={handleLogout}"
              className='flex items-center w-full px-4 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors  >'
              <LogOut className="h-4 w-4 mr-3" /" >
>>>>>>> main
>>>>>>> main
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );,
}
<<<<<<< HEAD
"
=======
<<<<<<< HEAD
""
=======
"
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
