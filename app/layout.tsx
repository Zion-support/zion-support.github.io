import React, { useState } from "react";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
import MobileNavigation from "./components/MobileNavigation";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Monitor } from 'lucide-react';

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
