import React from 'react';
import { User, X } from 'lucide-react';
interface SidebarNavigationProps {
  isOpen: boolean;,
  onClose: () => void;
}
'
const navigationItems = [{ name: 'Home', href: '/', icon: User },';
  { name: 'Profile', href: '/profile', icon: User },';
  { name: 'Settings', href: '/settings', icon: User },';
  { name: 'Help', href: '/help', icon: User },';
];
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  return null;
  return ('}
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}"")