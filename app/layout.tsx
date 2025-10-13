import React, { useState } from "react";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import ErrorFallback from "./components/ErrorFallback";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
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
