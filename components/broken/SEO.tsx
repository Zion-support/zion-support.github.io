import React, { useEffect } from 'react',;
import Head from 'next/head',;
interface SEOProps {;
  title?: string,;
  description?: string,;
  keywords?: string | string[],;
  image?: string,;
  url?: string,;
  type?: 'website' | 'article' | 'product',;
  publishedTime?: string,;
  modifiedTime?: string,;
  author?: string,;
  section?: string,;
  tags?: string[],;
  structuredData?: any,;
  noindex?: boolean,;
  nofollow?: boolean;
}
;
const SEO: React.FC<SEOProps> = ({;
  title = 'Zion Tech Group - Revolutionary AI, Quantum Computing & Space Technology Solutions',;
  description = 'Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide. Leading-edge services in AI, cybersecurity, space tech, and quantum solutions.',;
  keywords = 'AI, artificial intelligence, quantum computing, space technology, cybersecurity, machine learning, automation, Zion Tech Group, technology solutions, enterprise software, cloud computing, blockchain, IoT, robotics',;
  image = '/images/zion-tech-group-og-image.jpg',;
  url = 'https://ziontechgroup.com',;
  type = 'website',;
  publishedTime,;
  modifiedTime,;
  author = 'Zion Tech Group',;
  section,;
  tags = [],;
  structuredData,;
  noindex = false,;
  nofollow = false}) => {;
  const fullTitle = title.includes('Zion Tech Group') ? title : `${title} | Zion Tech Group`,;
  const fullUrl = url.startsWith('http') ? url : `https://ziontechgroup.com${url}`,;
  const fullImage = image.startsWith('http') ? image : `https://ziontechgroup.com${image}`,;
  return (;
    <Head>;
      {/* Basic Meta Tags */}
<<<<<<< HEAD
      <title>{fullTitle}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join() : keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name="robots" content="nofollow" />}
=======
      <meta name=&quot;description&quot; content={description} />
      <meta name=&quot;keywords&quot; content={Array.isArray(keywords) ? keywords.join(', ') : keywords} />
      <meta name=&quot;author&quot; content={author} />
      <meta name=&quot;robots&quot; content={noindex ? 'noindex' : 'index'} />
      {nofollow && <meta name=&quot;robots&quot; content=&quot;nofollow&quot; />}
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
      
      {/* Robots Meta */}
      {noindex && <meta name=&quot;robots&quot; content=&quot;noindex&quot; />}
      {nofollow && <meta name=&quot;robots&quot; content=&quot;nofollow&quot; />}
      {!noindex && !nofollow && <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />}
      
      {/* Open Graph Meta Tags */}
      <meta property=&quot;og:title&quot; content={fullTitle} />
      <meta property=&quot;og:description&quot; content={description} />
      <meta property=&quot;og:type&quot; content={type} />
      <meta property=&quot;og:url&quot; content={fullUrl} />
      <meta property=&quot;og:image&quot; content={fullImage} />
      <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
      <meta property=&quot;og:locale&quot; content=&quot;en_US&quot; />
      
      {/* Twitter Card Meta Tags */}
      <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
      <meta name=&quot;twitter:site&quot; content=&quot;@ziontechgroup&quot; />
      <meta name=&quot;twitter:creator&quot; content=&quot;@ziontechgroup&quot; />
      <meta name=&quot;twitter:title&quot; content={fullTitle} />
      <meta name=&quot;twitter:description&quot; content={description} />
      <meta name=&quot;twitter:image&quot; content={fullImage} />
      
      {/* Article Specific Meta Tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property=&quot;article:published_time&quot; content={publishedTime} />}
          {modifiedTime && <meta property=&quot;article:modified_time&quot; content={modifiedTime} />}
          {author && <meta property=&quot;article:author&quot; content={author} />}
          {section && <meta property=&quot;article:section&quot; content={section} />}
          {tags.map((tag, index) => (
            <meta key={index} property=&quot;article:tag&quot; content={tag} />
=======
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />;
      <meta name="keywords" content={Array.isArray(keywords) ? keywords.join() : keywords} />;
      <meta name="author" content={author} />;
      <meta name="robots" content={noindex ? 'noindex' : 'index'} />;
      {nofollow && <meta name="robots" content="nofollow" />}
;
      {/* Robots Meta */}
      {noindex && <meta name="robots" content="noindex" />}
      {nofollow && <meta name="robots" content="nofollow" />}
      {!noindex && !nofollow && <meta name="robots" content="index, follow" />}
;
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />;
      <meta property="og:description" content={description} />;
      <meta property="og:type" content={type} />;
      <meta property="og:url" content={fullUrl} />;
      <meta property="og:image" content={fullImage} />;
      <meta property="og:site_name" content="Zion Tech Group" />;
      <meta property="og:locale" content="en_US" />;
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />;
      <meta name="twitter:site" content="@ziontechgroup" />;
      <meta name="twitter:creator" content="@ziontechgroup" />;
      <meta name="twitter:title" content={fullTitle} />;
      <meta name="twitter:description" content={description} />;
      <meta name="twitter:image" content={fullImage} />;
      {/* Article Specific Meta Tags */}
      {type === 'article' && (;
        <>;
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags.map((tag, index) => (;
            <meta key={index} property="article:tag" content={tag} />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          ))}
        </>;
      )}
;
      {/* Additional Meta Tags */}
<<<<<<< HEAD
      <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1, shrink-to-fit=no&quot; />
      <meta name=&quot;theme-color&quot; content=&quot;#000000&quot; />
      <meta name=&quot;msapplication-TileColor&quot; content=&quot;#000000&quot; />
      <meta name=&quot;apple-mobile-web-app-capable&quot; content=&quot;yes&quot; />
      <meta name=&quot;apple-mobile-web-app-status-bar-style&quot; content=&quot;black-translucent&quot; />
      <meta name=&quot;apple-mobile-web-app-title&quot; content=&quot;Zion Tech Group&quot; />
      
      {/* Structured Data */}
      <script
        type=&quot;application/ld+json&quot;
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            &quot;@context&quot;: &quot;https://schema.org&quot;,
            &quot;@type&quot;: &quot;Organization&quot;,
            &quot;name&quot;: &quot;Zion Tech Group&quot;,
            &quot;url&quot;: &quot;https://ziontechgroup.com&quot;,
            &quot;logo&quot;: &quot;https://ziontechgroup.com/images/zion-tech-group-logo.png&quot;,
            &quot;description&quot;: description,
            &quot;foundingDate&quot;: &quot;2020&quot;,
            &quot;sameAs&quot;: [
              &quot;https://www.linkedin.com/company/zion-tech-group&quot;,
              &quot;https://twitter.com/ziontechgroup&quot;,
              &quot;https://github.com/Zion-Holdings&quot;
            ],
            &quot;contactPoint&quot;: {
              &quot;@type&quot;: &quot;ContactPoint&quot;,
              &quot;telephone&quot;: &quot;+1-800-ZION-TECH&quot;,
              &quot;contactType&quot;: &quot;customer service&quot;,
              &quot;availableLanguage&quot;: &quot;English&quot;
            },
            &quot;address&quot;: {
              &quot;@type&quot;: &quot;PostalAddress&quot;,
              &quot;addressCountry&quot;: &quot;US&quot;
            },
            &quot;hasOfferCatalog&quot;: {
              &quot;@type&quot;: &quot;OfferCatalog&quot;,
              &quot;name&quot;: &quot;Technology Services&quot;,
              &quot;itemListElement&quot;: [
                {
                  &quot;@type&quot;: &quot;Offer&quot;,
                  &quot;itemOffered&quot;: {
                    &quot;@type&quot;: &quot;Service&quot;,
                    &quot;name&quot;: &quot;AI & Machine Learning Solutions&quot;
                  }
                },
                {
                  &quot;@type&quot;: &quot;Offer&quot;,
                  &quot;itemOffered&quot;: {
                    &quot;@type&quot;: &quot;Service&quot;,
                    &quot;name&quot;: &quot;Quantum Computing Services&quot;
                  }
                },
                {
                  &quot;@type&quot;: &quot;Offer&quot;,
                  &quot;itemOffered&quot;: {
                    &quot;@type&quot;: &quot;Service&quot;,
                    &quot;name&quot;: &quot;Space Technology Solutions&quot;
=======
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />;
      <meta name="theme-color" content="#000000" />;
      <meta name="msapplication-TileColor" content="#000000" />;
      <meta name="apple-mobile-web-app-capable" content="yes" />;
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />;
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />;
      {/* Structured Data */}
      <script;
        type="application/ld+json";
        dangerouslySetInnerHTML={{;
          __html: JSON.stringify({;
            "@context": "https://schema.org",;
            "@type": "Organization",;
            "name": "Zion Tech Group",;
            "url": "https://ziontechgroup.com",;
            "logo": "https://ziontechgroup.com/images/zion-tech-group-logo.png",;
            "description": description,;
            "foundingDate": "2020",;
            "sameAs": [;
              "https://www.linkedin.com/company/zion-tech-group",;
              "https://twitter.com/ziontechgroup",;
              "https://github.com/Zion-Holdings";
            ],;
            "contactPoint": {;
              "@type": "ContactPoint",;
              "telephone": "+1-800-ZION-TECH",;
              "contactType": "customer service",;
              "availableLanguage": "English";
            },;
            "address": {;
              "@type": "PostalAddress",;
              "addressCountry": "US";
            },;
            "hasOfferCatalog": {;
              "@type": "OfferCatalog",;
              "name": "Technology Services",;
              "itemListElement": [;
                {;
                  "@type": "Offer",;
                  "itemOffered": {;
                    "@type": "Service",;
                    "name": "AI & Machine Learning Solutions";
                  }
                },;
                {;
                  "@type": "Offer",;
                  "itemOffered": {;
                    "@type": "Service",;
                    "name": "Quantum Computing Services";
                  }
                },;
                {;
                  "@type": "Offer",;
                  "itemOffered": {;
                    "@type": "Service",;
                    "name": "Space Technology Solutions";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
                  }
                }
              ];
            }
          });
        }}
      />;
      {/* Canonical URL */}
<<<<<<< HEAD
      <link rel=&quot;canonical&quot; href={fullUrl} />
      
      {/* Favicon and App Icons */}
      <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />
      <link rel=&quot;apple-touch-icon&quot; sizes=&quot;180x180&quot; href=&quot;/apple-touch-icon.png&quot; />
      <link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;32x32&quot; href=&quot;/favicon-32x32.png&quot; />
      <link rel=&quot;icon&quot; type=&quot;image/png&quot; sizes=&quot;16x16&quot; href=&quot;/favicon-16x16.png&quot; />
      <link rel=&quot;manifest&quot; href=&quot;/site.webmanifest&quot; />
      
      {/* Preconnect to external domains for performance */}
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.googleapis.com&quot; />
      <link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossOrigin=&quot;anonymous&quot; />
      <link rel=&quot;preconnect&quot; href=&quot;https://www.google-analytics.com&quot; />
      
      {/* Additional Meta Tags for SEO */}
      <meta name=&quot;google-site-verification&quot; content=&quot;your-verification-code&quot; />
      <meta name=&quot;msvalidate.01&quot; content=&quot;your-bing-verification-code&quot; />
      <meta name=&quot;yandex-verification&quot; content=&quot;your-yandex-verification-code&quot; />
      
      {/* Custom Meta Tags */}
      {structuredData && (
        <script
          type=&quot;application/ld+json&quot;
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
=======
      <link rel="canonical" href={fullUrl} />;
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />;
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />;
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />;
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />;
      <link rel="manifest" href="/site.webmanifest" />;
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />;
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />;
      <link rel="preconnect" href="https://www.google-analytics.com" />;
      {/* Additional Meta Tags for SEO */}
      <meta name="google-site-verification" content="your-verification-code" />;
      <meta name="msvalidate.01" content="your-bing-verification-code" />;
      <meta name="yandex-verification" content="your-yandex-verification-code" />;
      {/* Custom Meta Tags */}
      {structuredData && (;
        <script;
          type="application/ld+json";
          dangerouslySetInnerHTML={{;
            __html: JSON.stringify(structuredData);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          }}
        />;
      )}
    </Head>;
  );
},;
export default SEO;