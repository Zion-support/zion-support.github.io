import React, { useEffect } from 'react';
const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX' }) => {
    const GA_TRACKING_ID = trackingId;
    const script = document.createElement('script');
    function gtag(...args: any[]) {
    const trackPageView = () => {
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    const handleScroll = () => {
    const timeInterval = setInterval(trackTimeOnPage, 30000); // Every 30 seconds
export default Analytics;