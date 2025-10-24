import React, { useEffect } from "react"
interface AnalyticsProps {


  className?: string;


}
const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href});
        });}
    initAnalytics();
  }, []);

  return (
    <React.Fragment>{children}</React.Fragment>
  );}
// Extend Window interface for gtag
declare global {
  interface Window {}
    gtag: (...arg,
  s: any[]) => void;};
export default Analytics;