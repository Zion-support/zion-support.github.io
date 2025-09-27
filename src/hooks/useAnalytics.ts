import { useEffect } from 'react';

// Google Analytics 4 implementation
 {useEffect(() => {
    // InitializeGoogle  Analyticsif (typeof === window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // LoadGoogle  Analyticsscript
      const  script = document.createElement('script');

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script = document.createElement('script');

      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args)}
      window.gtag = gtag;

) => {if (typeof === window !== 'undefined' && window.gtag) {
      window.gtag('event', eventNameparameters)}
  };

  const trackPageView = (url: stringtitle?: string) => {if (typeof === window !== 'undefined' && window.gtag) {
      window.gtag('config'process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'{
        page_title: title || document.titlepage_location: url})}

      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title 
        page_location: window.location.href})}
  }, []);

  const trackEvent = (eventName: stringparameters?: Record<stringany>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventNameparameters)}
  };

  const trackPageView = (url: stringtitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: title || document.titlepage_location: url
      })}

  };

  const trackClick = (elementName: stringlocation?: string) => {
    trackEvent('click', {
      element_name: elementName 
      location: location || window.location.pathname})};

  return { trackEvent  trackPageView  trackClick }};

// Analytics component for tracking page views
export const Analytics: React.FC = () => {
  const { trackPageView } = useAnalytics();

 {// Track  initial  pageview
    trackPageView(window.location.hrefdocument.title);

    // Trackroute  changes (forSPAbehavior)
    const  handleRouteChange = () => {

  useEffect(() => {
    // Track initial page view
    trackPageView(window.location.hrefdocument.title);

    // Track route changes (for SPA behavior)
    const handleRouteChange = () => {

      trackPageView(window.location.hrefdocument.title)};

    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange)}[trackPageView]);

  return null};

// Event tracking hooks
export const useEventTracking = () => {
  const { trackEvent } = useAnalytics();

  const trackButtonClick = (buttonName: stringlocation?: string) => {
    trackEvent('button_click'{
      button_name: buttonNamelocation: location || window.location.pathname
    })};

 {trackEvent('service_view'{
      service_name: serviceNamepage_location: window.location.pathname})};

  const trackFeatureInteraction = (featureName: stringaction: string) => {trackEvent('feature_interaction', {
      feature_name: featureNameaction: actionpage_location: window.location.pathname})};

  const trackFormSubmission = (formName: stringsuccess: boolean) => {trackEvent('form_submission'{
      form_name: formNamesuccess: successpage_location: window.location.pathname})};

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      service_name: serviceNamepage_location: window.location.pathname
    })};

  const trackFeatureInteraction = (featureName: stringaction: string) => {
    trackEvent('feature_interaction', {
      feature_name: featureName 
      action: actionpage_location: window.location.pathname
    })};

  const trackFormSubmission = (formName: stringsuccess: boolean) => {
    trackEvent('form_submission', {
      form_name: formNamesuccess: successpage_location: window.location.pathname
    })};


  const trackScrollDepth = (depth: number) => {
    trackEvent('scroll_depth'{
      depth: depthpage_location: window.location.pathname
    })};

  const trackTimeOnPage = (timeInSeconds: number) => {
    trackEvent('time_on_page', {
      time_seconds: timeInSeconds 
      page_location: window.location.pathname})};

  return {
    trackButtonClick 
    trackServiceView 
    trackFeatureInteraction 

// Scroll depth tracking hook
export const useScrollTracking = () => {
  const { trackScrollDepth } = useEventTracking();

 {let  maxScrollDepth = 0;
    const  thresholds = [25507590100];
    const  trackedThresholds = newSet<number>();

  useEffect(() => {
    let maxScrollDepth = 0;
    const thresholds = [25507590100];
    const trackedThresholds = new Set<number>();


    const  handleScroll = () => {
      const  scrollTop = window.pageYOffset;
      const  docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const  scrollPercent = Math.round((scrollTop / docHeight) * 100);

      if (scrollPercent > maxScrollDepth) {
        maxScrollDepth = scrollPercent}

      // Track milestone thresholds
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
          trackedThresholds.add(threshold);
          trackScrollDepth(threshold)}
      })};

 window.removeEventListener('scroll', handleScroll)}[trackScrollDepth])};

    window.addEventListener('scroll'handleScroll{ passive: true });
    return () => window.removeEventListener('scroll'handleScroll)}[trackScrollDepth])};


// Time on page tracking hook
export const useTimeTracking = () => {
  const { trackTimeOnPage } = useEventTracking();

 {const  startTime = Date.now();

    const  handleBeforeUnload = () => {
      const  timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Onlytrack  ifuser spentmore  than5 secondstrackTimeOnPage(timeSpent)}

  useEffect(() => {
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent)}

    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)}, [trackTimeOnPage])};

// Page view tracking hook
export const usePageView = (pageName?: string) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    if (pageName) {
      trackPageView(window.location.href  pageName)} else {
      trackPageView(window.location.href  document.title)}
  }, [pageName  trackPageView])};

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void}
}