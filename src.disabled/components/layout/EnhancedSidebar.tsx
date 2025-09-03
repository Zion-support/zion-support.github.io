<<<<<<< HEAD:src.disabled/components/layout/EnhancedSidebar.tsx
import React from
  'react';
import { Link, useLocation } from
  'react-router-dom';

interface SidebarProps {
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
;
interface SidebarProps {;
  isOpen: boolean;
  onClose: () => void;
};
export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {;
  const location = useLocation();
<<<<<<< HEAD:src.disabled/components/layout/EnhancedSidebar.tsx

  const items = [
    { label:
  Home', href: '/ }
    { label:
  Services', href: '/services }
    { label:
  Enterprise', href: '/enterprise }
    { label:
  Request Quote', href: '/request-quote }
    { label:
  About', href: '/about }
    { label:
  Contact', href: '/contact }
;
  const items = [;
    { label: 'Home', href: '/' },;
    { label: 'Services', href: '/services' },;
    { label: 'Enterprise', href: '/enterprise' },;
    { label: 'Request Quote', href: '/request-quote' },;
    { label: 'About', href: '/about' },;
    { label: 'Contact', href: '/contact' };
  ];
;
  if (!isOpen) return null;
ursor/automate-test-fix-improve-and-merge-code-99d1:src/components/layout/EnhancedSidebar.tsx
  );
};
export default EnhancedSidebar;";



