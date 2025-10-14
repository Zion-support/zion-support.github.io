import React from 'react';
interface SidebarNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}
const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: User },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Contact', href: '/contact', icon: HelpCircle },
  ]

export default SidebarNavigation;
