
interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  viewport?: string;
  charset?: string;
  language?: string;
  themeColor?: string;
  msApplicationTileColor?: string;
  appleMobileWebAppTitle?: string;
  appleMobileWebAppCapable?: boolean;
  appleMobileWebAppStatusBarStyle?: 'default' | 'black' | 'black-translucent';
  appleTouchIcon?: string;
  favicon?: string;
  manifest?: string;
  preconnect?: string[];
  dnsPrefetch?: string[];
  preload?: Array<{
    href: string;
    as: string;
    type?: string;
    crossorigin?: boolean}>;
  prefetch?: string[];
  dnsPrefetch?: string[];
  preconnect?: string[]}

export function SEO({
  title = 'Zion Tech Group - AI-Powered Enterprise Solutions & Cybersecurity',
  description = 'Transform your business with Zion Tech Group\'s cutting-edge AI solutions, cybersecurity platforms, and enterprise technology services. Leading the future of digital transformation.',
  keywords = 'AI solutions, cybersecurity, enterprise technology, quantum computing, healthcare AI, supply chain optimization, Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = 'https://ziontechgroup.com',
  type = 'website',
  author = 'Zion Tech Group',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical
}: SEOProps) {
  
  
  // Structured data for organization
  
  // Structured data for website
  
  return (
    <Helmet>
      {/* Basic HTML tags */}
      <title>{title}</title>
      <html lang={language} />
      
      {/* Meta tags */}
      {metaTags.map((tag, index) => (
        <meta key={index} {...tag} />
      ))}
      
      {/* Link tags */}
      {linkTags.map((link, index) => (
        <link key={index} {...link} />
      ))}
      
      {/* Script tags for structured data */}
      {scriptTags.map((script, index) => (
        <script key={index} {...script} />
      ))}
      
      {/* Additional performance optimizations */}
      <style>
        {`
          /* Critical CSS for above-the-fold content */
          .hero-section {
            background: linear-gradient(135deg, #22ddd2 0%, #8c15e9 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            text-align: center}
          
          /* Optimize font loading */
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-400.woff2') format('woff2');
            font-weight: 400;
            font-style: normal}
          
          @font-face {
            font-family: 'Orbitron';
            font-display: swap;
            src: url('/fonts/orbitron-v16-latin-600.woff2') format('woff2');
            font-weight: 600;
            font-style: normal}
          
          /* Reduce layout shift */
          img {
            max-width: 100%;
            height: auto}
          
          /* Optimize animations */
          @media (prefers-reduced-motion: reduce) {
            *, *::before, *::after {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important}
          }
        `}
      </style>
      
      {/* Performance monitoring */}
      <script>
        {`
          // Performance monitoring
          if ('performance' in window) {
            window.addEventListener('load', () => {
              
              if (navigation) {
                
                console.log('Page load time:', loadTime + 'ms');
                
                // Send to analytics if available
                if (window.gtag) {
                  window.gtag('event', 'timing_complete', {
                    name: 'load',
                    value: Math.round(loadTime)
                  })}
              }
            })}
          
          // Core Web Vitals monitoring
          if ('web-vital' in window) {
            import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS(console.log);
              getFID(console.log);
              getFCP(console.log);
              getLCP(console.log);
              getTTFB(console.log)})}
        `}
      </script>
    </Helmet>
  )}
