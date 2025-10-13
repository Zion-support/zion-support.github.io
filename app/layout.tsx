
import MobileNavigation from "./components/MobileNavigation";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
import React from 'react';

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Layout({ className = '', children, ...props }: LayoutProps) {
  return (
    <div className={`layout-component ${className}`} {...props}>
      {children}
    </div>
  );
}
