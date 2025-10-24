import React from 'react';
<<<<<<< HEAD
import React, { useEffect } from "react"
interface AnalyticsProps {
className?: string};
const Analytics: React.FC<AnalyticsProps> = ({ children ,}) => {
useEffect(() => {
    // Initialize analytics tracking
const initAnalytics = () => {
return // Google Analytics initialization
if (typeof window !== 'undefined' && window.gtag) {
window.gtag('config', 'GA_MEASUREMENT_ID', {
page_title: document.title,page_location: window.location.href,})
        });}
initAnalytics()
  }, [])
return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );}
// Extend Window interface for gtag
declare global {
interface Window {
}
    gtag: (...arg,s: any[]) => void;,}
=======

interface AnalyticsProps {
  className?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  className = '', 
  children 
}) => {
  return (
    <div className={'analytics ' + className}>
      {children || <p>Analytics component</p>}
    </div>
  );
};

>>>>>>> cursor/fix-errors-and-merge-to-main-bd2c
export default Analytics;
