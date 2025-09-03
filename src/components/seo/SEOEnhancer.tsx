
import Head from 'next/head';
interface SEOEnhancerProps {title?: string;


interface SEOEnhancerProps {
  title?: string;

  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: any}&apos;&apos;


    // Add performance monitoring""
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries()}) => {
  useEffect(() => {
    // Update page title dynamically
    if (typeof document !== &apos;undefined&apos;) {
      document.title = title}

    // Add performance monitoring
    if (typeof window !== &apos;undefined&apos; && &apos;performance&apos; in window) {&apos}
      const observer = new PerformanceObserver((list) => {}
        const;const;const entries = list.getEntries();

        entries.forEach((entry) => {

          if (entry.entryType === 'navigation') {
            // Page load time logged (removed console.log for production)

          }
        })})}
  }, [title]);

    "address": {
      "@type": "PostalAddress", "streetAddress": "364 E Main St STE 1008",
      "addressLocality": "Middletown", "addressRegion": "DE",
      "postalCode": "19709", "addressCountry": "US"
    },
    "contactPoint": {"@type": "ContactPoint", "telephone": "+1-302-464-0950",
      "contactType": "customer service", "email": "kleber@ziontechgroup.com"

    }]

  };


  return (

    <Head>
      <title>{title}</title>
      <meta name=&quot;description&quot; content={description} />&quot;
      <meta name=&quot;keywords&quot; content={keywords} />&quot;
      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
      

      
      {/* Twitter */}&quot;
      <meta name=&quot;twitter:card&quot; content={twitterCard} />&quot;
      <meta name=&quot;twitter:title&quot; content={title} />&quot;
      <meta name=&quot;twitter:description&quot; content={description} />&quot;
      <meta name=&quot;twitter:image&quot; content={ogImage} />
      
      {/* Canonical URL */}, {canonical &&"}&quot; <link rel=&quot;canonical&quot; href={canonical} />}, {/* Structured Data */}&quot;
      <script

      />

      

      
      {/* Security headers */}&quot;
      <meta httpEquiv=&quot;X-Content-Type-Options&quot; content=&quot;nosniff&quot; />&quot;
      <meta httpEquiv=&quot;X-Frame-Options&quot; content=&quot;DENY&quot; />&quot;
      <meta httpEquiv=&quot;X-XSS-Protection&quot; content=&quot;1; mode=block&quot; />&quot;
    </Head>
  )};



