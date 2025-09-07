<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import _React,{ useState,useRef,useEffect } from';react' import { Link } from';';react-router-dom' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from';';lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('';mousedown',handleClickOutside) "return": () => document.removeEventListener('';mousedown',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {'';'';
=======
import React,{ useState,useRef,useEffect } from\';react\' import { Link } from\';\';react-router-dom\' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from\';\';lucide-react\' import { useAuth } from \'../../hooks/useAuth\' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener(\'';mousedown\',handleClickOutside) \"return\": () => document.removeEventListener(\'';mousedown\',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {\'';\'';
const React,{ useState,useRef,useEffect } from";react" import { Link } from";";react-router-dom" import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from";";lucide-react" import { useAuth } from "././hooks/useAuth" export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener("";mousedown",handleClickOutside) return: () => document.removeEventListener("";mousedown",handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {"";"";'"'"
import _React,{ useState,useRef,useEffect } from';react' import { Link } from';';react-router-dom' import { User,Settings,LogOut,ChevronDown,Bell,ShoppingCart } from';';lucide-react' import { useAuth } from '../../hooks/useAuth' export const UserMenu = () => { const [isOpen,setIsOpen] = useState(false) const menuRef = useRef(null) const { user,logout } = useAuth() useEffect(() => { const handleClickOutside = (event) => { if (menuRef.current && !menuRef.current.contains(event.target)) { setIsOpen(false)} } document.addEventListener('';mousedown',handleClickOutside) "return": () => document.removeEventListener('';mousedown',handleClickOutside)},[]) const handleLogout = async () => { try { await logout() setIsOpen(false)} catch (error) {'';'';
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

=======
import React from 'react';'
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
const UserMenu.js = ({ className }) => {
  return ('
    <div className={className || ''}>'
</div>
      <h1>UserMenu.js</h1>
      <p>This component is under development.</p>
    </div>
  )
};

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </div>)'
pr-12325
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
