<<<<<<< HEAD
import { useEffect, useCallback, useMemo  } from 'react.ts';
interface SEOData {
=======
import { useEffect, useCallback, useMemo               } from 'react.ts';

interface SEOData {














>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
<<<<<<< HEAD
  structuredData?: object}
interface UseSEOOptions {
  enableAutoTitle?: boolean;
  enableStructuredData?: boolean;
  enablePerformanceTracking?: boolean;
=======
<<<<<<< HEAD
  structuredData?: object;
=======
structuredData?: object;












}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

interface UseSEOOptions {














  enableAutoTitle?: boolean;
  enableStructuredData?: boolean;
  enablePerformanceTracking?: boolean;
<<<<<<< HEAD
  enableAnalytics?: boolean;

export const useSEO = (seoData: SEOData, options: UseSEOOptions = { /* empty */;












}) => {
  const {
    enableAutoTitle = true,
    enableStructuredData = true,
    enablePerformanceTracking = true,
    enableAnalytics = true
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  enableAnalytics?: boolean}
export const useSEO = (seoData: SEOData, options: UseSEOOptions = {}) => {;
  const {;
    enableAutoTitle = true,;
    enableStructuredData = true,;
    enablePerformanceTracking = true,;
    enableAnalytics = true;
  } = options;
  // Memoize the full title
  const fullTitle = useMemo(() => {;
    const siteName = 'Zion Tech Group';
    return seoData.title.includes(siteName) ? seoData.title : `${seoData.title} | ${siteName}`}, [seoData.title]);
  // Memoize the canonical URL
<<<<<<< HEAD
=======
<<<<<<< HEAD
  const canonicalUrl = useMemo(() => {
    if (seoData.canonical) {;
      return seoData.canonical.startsWith('http') ? seoData.canonical : `https://ziontechgroup.com${seoData.canonical}`};
    return typeof window !== 'null' ? window.location.href : 'https://ziontechgroup.com'}, [seoData.canonical]);

  // Update document title
  const updateTitle = useCallback((title: anyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {
    if (typeof document !== 'null') {;
      document.title = title};
  }, []);

  // Update meta tags
  const updateMetaTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)               => {;
    if (typeof document === 'null') return;
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const canonicalUrl = useMemo(() => {;
    if (seoData.canonical) {;
      return seoData.canonical.startsWith('http') ? seoData.canonical : `https://ziontechgroup.com${seoData.canonical}`;
    }
    return typeof window !== 'null' ? window.location.href : 'https://ziontechgroup.com';
  }, [seoData.canonical]);
  // Update document title
  const updateTitle = useCallback((title: anyanyanyanyanyanyanyanyanyanyanyanyanystring)              => {;
    if (typeof document !== 'null') {;
      document.title = title;
  }, []);
  // Update meta tags
  const updateMetaTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)              => {;
    if (typeof document === 'null') return;
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc)}
    metaDesc.setAttribute('content', data.description);
    // Update or create meta keywords
    if (data.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords)}
      metaKeywords.setAttribute('content', data.keywords)}
    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink)}
    canonicalLink.setAttribute('href', canonicalUrl);
    // Update robots meta tag
    if (data.noindex) {
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta)}
      robotsMeta.setAttribute('content', 'noindex, nofollow')}
  }, [canonicalUrl]);
  // Update Open Graph tags
<<<<<<< HEAD
  const updateOpenGraphTags = useCallback((data: SEOData) => {;
=======
<<<<<<< HEAD
  const updateOpenGraphTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)               => {;
    if (typeof document === 'null') return;
=======
  const updateOpenGraphTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (typeof document === 'null') return;
    const ogTags = [
      { property: anyanyanyanyanyanyanyanyanyanyanyanyany'og:title', content: fullTitle },;
      { property: 'og:description', content: data.description },;
      { property: 'og:type', content: data.ogType || 'website' },;
      { property: 'og:url', content: canonicalUrl },;
      { property: 'og:image', content: data.ogImage || 'https://ziontechgroup.com/images/og-default.jpg' },;
      { property: 'og:site_name', content: 'Zion Tech Group' },;
      { property: 'og:locale', content: 'en_US' };
    ];
<<<<<<< HEAD
    ogTags.forEach(({ property, content })  => {
=======

    ogTags.forEach(({ property, content })               => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag)}
      ogTag.setAttribute('content', content)})}, [fullTitle, canonicalUrl]);
  // Update Twitter Card tags
<<<<<<< HEAD
  const updateTwitterCardTags = useCallback((data: SEOData) => {;
=======
<<<<<<< HEAD
  const updateTwitterCardTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)               => {;
    if (typeof document === 'null') return;
=======
  const updateTwitterCardTags = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (typeof document === 'null') return;
    const twitterTags = [;
      { name: anyanyanyanyanyanyanyanyanyanyanyanyany'twitter:card', content: data.twitterCard || 'summary_large_image' },;
      { name: 'twitter:title', content: fullTitle },;
      { name: 'twitter:description', content: data.description },;
      { name: 'twitter:image', content: data.ogImage || 'https://ziontechgroup.com/images/og-default.jpg' },;
      { name: 'twitter:site', content: '@ziontechgroup' };
    ];
<<<<<<< HEAD
    twitterTags.forEach(({ name, content })  => {
=======

    twitterTags.forEach(({ name, content })               => {
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag)}
      twitterTag.setAttribute('content', content)})}, [fullTitle]);
  // Add structured data
<<<<<<< HEAD
  const addStructuredData = useCallback((data: object) => {;
=======
<<<<<<< HEAD
  const addStructuredData = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanyobject)               => {;
    if (!enableStructuredData || typeof document === 'null') return;

    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script = > {
      if (script.textContent && script.textContent.includes('"@type":"Organization"')) {
        script.remove()};
=======;
  const addStructuredData = useCallback((data: anyanyanyanyanyanyanyanyanyanyanyanyanyobject)              => {;
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    if (!enableStructuredData || typeof document === 'null') return;
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script = > {;
      if (script.textContent && script.textContent.includes('"@type":"Organization"')) {;
        script.remove();
      }
    });
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script)}, [enableStructuredData]);
  // Default organization structured data
  const defaultStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading technology solutions provider specializing in AI, cybersecurity, cloud computing, and digital transformation.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
    sameAs[
      'https://www.linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup',
      'https://www.facebook.com/ziontechgroup';
    ];
  }), []);

  // Track page view
  const trackPageView = useCallback((pageData: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)               => {;
    if (!enableAnalytics || typeof window === 'null') return;
=======
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    sameAs: [;
      'https://www.linkedin.com/company/zion-tech-group',;
      'https://twitter.com/ziontechgroup',;
      'https://www.facebook.com/ziontechgroup';
    ];
  }), []);
  // Track page view
  const trackPageView = useCallback((pageData: anyanyanyanyanyanyanyanyanyanyanyanyanySEOData)              => {;
    if (!enableAnalytics || typeof window === 'null') return;
    // Google Analytics
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageData.title,
        page_location: canonicalUrl,
        page_path: window.location.pathname
      })}
    // Custom analytics
    if (window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_title: pageData.title,
        page_url: canonicalUrl,
        page_type: pageData.ogType || 'website'
      })}
  }, [canonicalUrl, enableAnalytics]);
  // Track performance metrics
  const trackPerformance = useCallback(() => {;
    if (!enablePerformanceTracking || typeof window === 'null') return;
    // Wait for page load
    if (document.readyState = == 'complete') {;
      measureAndTrackPerformance();
    } else {
      window.addEventListener('load', measureAndTrackPerformance);
    }
  }, [enablePerformanceTracking]);
  // Measure and track performance
  const measureAndTrackPerformance = useCallback(() => {;
    if (typeof window === 'null') return;
    // Core Web Vitals
    if ('web-vital' in window) {
      // This would require the web-vitals library
      // // // // // // // console.log('Web Vitals available');
    }
      console.log('Web Vitals available')}
    // Navigation Timing API
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const metrics = {
  dns: anyanyanyanyanyanyanyanyanyanyanyanyanynavigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,;
  ;
  ;
  ;
  ;
  loadComplete: navigation.loadEventEnd - navigation.loadEventStart;
        ;
};
        // Track to analytics
        if (window.gtag) {
          Object.entries(metrics).forEach(([key, value])               => {
            window.gtag('event', 'performance_metric', {
              event_category: 'performance',
              event_label: key,
              value: Math.round(value)
            })})}
      }
    }
  }, []);
  // Initialize SEO
  useEffect(()  => {
    // Update document title
    if (enableAutoTitle) {
      updateTitle(fullTitle)}
    // Update meta tags
    updateMetaTags(seoData);
    // Update Open Graph tags
    updateOpenGraphTags(seoData);
    // Update Twitter Card tags
    updateTwitterCardTags(seoData);
    // Add structured data
    if (enableStructuredData) {
      addStructuredData(defaultStructuredData);
      if (seoData.structuredData) {
        addStructuredData(seoData.structuredData)}
    }
    // Track page view
    if (enableAnalytics) {
      trackPageView(seoData)}
    // Track performance
    if (enablePerformanceTracking) {
      trackPerformance()}
  }, [
    seoData,
    fullTitle,
    canonicalUrl,
    enableAutoTitle,
    enableStructuredData,
    enableAnalytics,
    enablePerformanceTracking,
    updateTitle,
    updateMetaTags,
    updateOpenGraphTags,
    updateTwitterCardTags,
    addStructuredData,
    defaultStructuredData,
    trackPageView,
    trackPerformance
  ]);
  return {
    fullTitle,
    canonicalUrl,
    updateTitle,
    updateMetaTags,
    updateOpenGraphTags,
    updateTwitterCardTags,
    addStructuredData,
    trackPageView,
    trackPerformance
  }};
// Type declarations
declare global {
  interface Window {
<<<<<<< HEAD
=======













<<<<<<< HEAD
    gtag?: (...args: anyanyanyanyanyanyanyanyanyanyanyanyanyany[])              => void;
    dataLayer?: any[];













}}}}}}}}}}}}}}}}}}}}}}}}}}}
=======

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    gtag?: (...args[])  => void;
    dataLayer?[]}
}
