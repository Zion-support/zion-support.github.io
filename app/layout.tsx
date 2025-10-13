<<<<<<< HEAD
import React, { useState } from "react";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import ErrorFallback from "./components/ErrorFallback";
<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
=======
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8

import MobileNavigation from "./components/MobileNavigation";
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { Monitor } from 'lucide-react';
>>>>>>> 2fda46b8c81d66ef34322b3dc826b41bdfbc86e8
=======
import React from 'react';
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9

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
