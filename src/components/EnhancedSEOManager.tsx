<<<<<<< HEAD
import { Helmet } from 'react - helmet -async';
 from 'react';
export default EnhancedSEOManager;
export default function

/**
 * EnhancedSEOManager Component
 *
 * @description EnhancedSEOManager component for the application
 * @param {Object} props - Component props
 * @returns {JSX.Element} Rendered component
 */
=======
<<<<<<< HEAD
>>>>>>> main

interface SEOData {

  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;

interface EnhancedSEOManagerProps {
  // Add your props here

  seoData: SEOData;
  children: React.ReactNode;

const EnhancedSEOManager: React.FC<EnhancedSEOManagerProps> = ({ seoData, children }) => {

  useEffect(() => {
  // TODO: Add dependencies if needed
}, []);
    // Update meta tags dynamically
    
      // Update title;
=======
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      document.title = seoData.title;

      // Update meta description'
      let metaDesc = document.querySelector('meta[name="description"]');
      if(!metaDesc) {

        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name',description');
        document.head.appendChild(metaDesc);

      metaDesc.setAttribute('content', seoData.description);

      // Update keywords'"
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if(!metaKeywords) {

<<<<<<< HEAD
      metaKeywords.setAttribute('content', seoData.keywords.join (', ') ) ;

=======
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name',keywords');
        document.head.appendChild(metaKeywords);

      metaKeywords.setAttribute('content', seoData.keywords.join(',));
      
>>>>>>> main
      // Update Open Graph tags
      const updateOGTag = (property: string, content: string) => {;"        let ogTag = document.querySelector(`meta[property="${property}"]`);
        if(!ogTag) {
<<<<<<< HEAD
          ogTag = document.createElement('meta') ;
          ogTag.setAttribute('property', property) ;
          document.head.appendChild(ogTag) ;
        }
        ogTag.setAttribute('content', content) ;
      };

      if(seoData.ogImage) updateOGTag('og:image', seoData.ogImage) ;
      if(seoData.ogType) updateOGTag('og:type', seoData.ogType) ;
      updateOGTag('og:title', seoData.title) ;
      updateOGTag('og:description', seoData.description) ;
      updateOGTag('og:url', seoData.canonicalUrl || window.location.href) ;

=======

          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          document.head.appendChild(ogTag)}
        ogTag.setAttribute('content', content)};
      '
      if(seoData.ogImage) updateOGTag('og:image', seoData.ogImage);
      if(seoData.ogType) updateOGTag('og:type', seoData.ogType);
      updateOGTag('og:title', seoData.title);
      updateOGTag('og:description', seoData.description);
      updateOGTag('og:url', seoData.canonicalUrl || window.location.href);
      
>>>>>>> main
      // Update Twitter Card tags
      const updateTwitterTag = (name: string, content: string) => {;"`        let twitterTag = document.querySelector(`meta[name="${name}"]`);
        if(!twitterTag) {
<<<<<<< HEAD
          twitterTag = document.createElement('meta') ;
          twitterTag.setAttribute('name', name) ;
          document.head.appendChild(twitterTag) ;
        }
        twitterTag.setAttribute('content', content) ;
      };

      updateTwitterTag('twitter:card', 'summary_large_image') ;
      updateTwitterTag('twitter:title', seoData.title) ;
      updateTwitterTag('twitter:description', seoData.description) ;
      if(seoData.ogImage) updateTwitterTag('twitter:image', seoData.ogImage) ;

=======

          twitterTag = document.createElement('meta');
          twitterTag.setAttribute('name', name);
          document.head.appendChild(twitterTag)}
        twitterTag.setAttribute('content', content)};
      '
<<<<<<< HEAD
      updateTwitterTag('twitter:card',summary_large_image');
      updateTwitterTag('twitter:title', seoData.title);
      updateTwitterTag('twitter:description', seoData.description);
      if(seoData.ogImage) updateTwitterTag('twitter:image', seoData.ogImage);
=======
      updateTwitterTag('twitter:card', 'summary_large_image');'
      updateTwitterTag('twitter:title', seoData.title);'
      updateTwitterTag('twitter:description', seoData.description);'      if(seoData.ogImage) updateTwitterTag('twitter:image', seoData.ogImage);
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      
>>>>>>> main
      // Add canonical URL
      if(seoData.canonicalUrl) {
'"
        let canonical = document.querySelector('link[rel="canonical"]');
        if(!canonical) {
<<<<<<< HEAD
          canonical = document.createElement('link') ;
          canonical.setAttribute('rel', 'canonical') ;
          document.head.appendChild(canonical) ;
        }
        canonical.setAttribute('href', seoData.canonicalUrl) ;
      }

=======

          canonical = document.createElement('link');
          canonical.setAttribute('rel',canonical');
          document.head.appendChild(canonical)}
        canonical.setAttribute('href', seoData.canonicalUrl)}      
>>>>>>> main
      // Add structured data
      if(seoData.structuredData) {
'"
        let script = document.querySelector('script[type="application/ld+json"]');
        if(!script) {
<<<<<<< HEAD
          script = document.createElement('script') ;
          script.setAttribute('type', 'application / ld + json') ;
          document.head.appendChild(script) ;
        }
        script.textContent = JSON.stringify(seoData.structuredData) ;
      }
    };

=======

          script = document.createElement('script');
          script.setAttribute('type',application/ld+json');
          document.head.appendChild(script)}
        script.textContent = JSON.stringify(seoData.structuredData) }    };
    
>>>>>>> main
    updateMetaTags () ;

    // Cleanup function
    return () => {
<<<<<<< HEAD
      // Remove dynamically added meta tags on unmount
      const dynamicTags = document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"]') ;
      dynamicTags.forEach(tag => tag.remove () ) ;
    };
  }, [seoData]) ;

  return (<>
=======
      // Remove dynamically added meta tags on unmount'"
      
      dynamicTags.forEach(tag => tag.remove())}}, [seoData]) ;  
  return ()
    <>
>>>>>>> main
      <Helmet>
        <title>{seoData.title}</title>"
        <meta name = "description" content={seoData.description} />"
        <meta name="keywords" content = {

  seoData.keywords.join(',)} />;"
        <meta name="robots" content="index, follow" />;"
        <meta name="author" content="Zion Tech Group" />;"        <meta name="viewport" content="width=device-width, initial-scale=1.0" />;
        ;
<<<<<<< HEAD
        {/* Security headers */};
        <meta httpEquiv="X - Content - Type - Options" content="nosniff" />;
        <meta httpEquiv="X - Frame - Options" content="DENY" />;
        <meta httpEquiv="X - XSS - Protection" content="1; mode = block" />
        <meta httpEquiv="Referrer - Policy" content="strict - origin - when - cross - origin" />

        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns - prefetch" href="//ziontechgroup.com" />

        {/* Favicon and app icons */}
        <link rel="icon" type="image / x-icon" href="/favicon.ico" />
        <link rel="apple - touch-icon" sizes="180x180" href="/apple - touch-icon.png" />
        <link rel="icon" type="image / png" sizes="32x32" href="/favicon - 32x32.png" />
        <link rel="icon" type="image / png" sizes="16x16" href="/favicon - 16x16.png" />
=======
        {/* Security headers */};"
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />;"
        <meta httpEquiv="X-Frame-Options" content="DENY" />;"
        <meta httpEquiv="X-XSS-Protection" content="1; mode = block" />"
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Performance optimizations */}"
        <link rel="preconnect" href="https://fonts.googleapis.com" />"
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />"
        <link rel="dns-prefetch" href="//ziontechgroup.com" />
        
        {/* Favicon and app icons */}"
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />"
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"
>>>>>>> main
        <link rel="manifest" href="/site.webmanifest" />
        ;
        {/* Theme color */};"
        <meta name="theme-color" content="#000000" />;"
        <meta name="msapplication-TileColor" content="#000000" />;
      </Helmet>;
      {children};
    </>
  )};
export default EnhancedSEOManager;
export default function;
    return;
'"`