import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
  language?: string;
  charset?: string;
  viewport?: string;
  themeColor?: string;
  manifest?: string;
  appleTouchIcon?: string;
  favicon?: string;
  robots?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  baiduVerification?: string;
  facebookAppId?: string;
  twitterSite?: string;
  twitterCreator?: string;
  linkedinCompany?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  linkedinInsightTag?: string;
  hotjarId?: string;
  crispId?: string;
  intercomId?: string;
  zendeskId?: string;
  hubspotId?: string;
  mailchimpId?: string;
  segmentId?: string;
  mixpanelId?: string;
  amplitudeId?: string;
  heapId?: string;
  fullstoryId?: string;
  logrocketId?: string;
  sentryId?: string;
  bugsnagId?: string;
  rollbarId?: string;
  airbrakeId?: string;
  newrelicId?: string;
  datadogId?: string;
  cloudflareId?: string;
  cloudinaryId?: string;
  imgixId?: string;
  fastlyId?: string;
  akamaiId?: string;
  maxcdnId?: string;
  bunnyId?: string;
  keycdnId?: string;
  cdn77Id?: string;
  stackpathId?: string;
  limelightId?: string;
  level3Id?: string;
  edgecastId?: string;
  highwindsId?: string;
  cacheflyId?: string;
  incapsulaId?: string;
  cloudflareId2?: string;
  impervaId?: string;
  f5Id?: string;
  barracudaId?: string;
  sophosId?: string;
  trendmicroId?: string;
  kasperskyId?: string;
  mcafeeId?: string;
  nortonId?: string;
  esetId?: string;
  avastId?: string;
  avgId?: string;
  bitdefenderId?: string;
  malwarebytesId?: string;
  superantispywareId?: string;
  spybotId?: string;
  adwcleanerId?: string;
  ccleanerId?: string;
  glaryId?: string;
  wiseId?: string;
  revoId?: string;
  iobitId?: string;
  ashampooId?: string;
  auslogicsId?: string;
  advancedId?: string;
  tuneupId?: string;
  tuneupId2?: string;
  tuneupId3?: string;
  tuneupId4?: string;
  tuneupId5?: string;
  tuneupId6?: string;
  tuneupId7?: string;
  tuneupId8?: string;
  tuneupId9?: string;
  tuneupId10?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Zion Tech Group - Innovation • Technology • Growth',
  description = 'Leading provider of AI-powered solutions, IT services, and digital transformation. We help businesses innovate and grow with cutting-edge technology.',
  keywords = 'AI, artificial intelligence, machine learning, IT services, digital transformation, cloud computing, cybersecurity, blockchain, quantum computing, automation, business intelligence, data analytics, enterprise solutions, micro SaaS, innovation, technology, growth',
  author = 'Zion Tech Group',
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
  language = 'en',
  charset = 'UTF-8',
  viewport = 'width=device-width, initial-scale=1.0',
  themeColor = '#0f172a',
  manifest = '/manifest.json',
  appleTouchIcon = '/images/apple-touch-icon.png',
  favicon = '/favicon.ico',
  robots = 'index, follow',
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  baiduVerification,
  facebookAppId,
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  linkedinCompany = 'ziontechgroup',
  googleAnalyticsId,
  googleTagManagerId,
  facebookPixelId,
  linkedinInsightTag,
  hotjarId,
  crispId,
  intercomId,
  zendeskId,
  hubspotId,
  mailchimpId,
  segmentId,
  mixpanelId,
  amplitudeId,
  heapId,
  fullstoryId,
  logrocketId,
  sentryId,
  bugsnagId,
  rollbarId,
  airbrakeId,
  newrelicId,
  datadogId,
  cloudflareId,
  cloudinaryId,
  imgixId,
  fastlyId,
  akamaiId,
  maxcdnId,
  bunnyId,
  keycdnId,
  cdn77Id,
  stackpathId,
  limelightId,
  level3Id,
  edgecastId,
  highwindsId,
  cacheflyId,
  incapsulaId,
  cloudflareId2,
  impervaId,
  f5Id,
  barracudaId,
  sophosId,
  trendmicroId,
  kasperskyId,
  mcafeeId,
  nortonId,
  esetId,
  avastId,
  avgId,
  bitdefenderId,
  malwarebytesId,
  superantispywareId,
  spybotId,
  adwcleanerId,
  ccleanerId,
  glaryId,
  wiseId,
  revoId,
  iobitId,
  ashampooId,
  auslogicsId,
  advancedId,
  tuneupId,
  tuneupId2,
  tuneupId3,
  tuneupId4,
  tuneupId5,
  tuneupId6,
  tuneupId7,
  tuneupId8,
  tuneupId9,
  tuneupId10,
  ...props
}) => {
  // Default structured data for Zion Tech Group
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: description,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
      addressRegion: 'Delaware',
      addressLocality: 'Wilmington'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      jobTitle: 'CEO & Founder',
      email: 'kleber@ziontechgroup.com'
    },
    foundingDate: '2020',
    numberOfEmployees: '10-50',
    industry: 'Technology',
    serviceType: [
      'AI Services',
      'IT Services',
      'Digital Transformation',
      'Cloud Solutions',
      'Cybersecurity',
      'Blockchain Solutions',
      'Quantum Computing',
      'Micro SaaS Solutions'
    ]
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex ? 'noindex' : robots} />
      {nofollow && <meta name="robots" content="nofollow" />}
      <meta charSet={charset} />
      <meta name="viewport" content={viewport} />
      <meta name="language" content={language} />
      <meta name="theme-color" content={themeColor} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Favicon and Icons */}
      <link rel="icon" href={favicon} />
      <link rel="apple-touch-icon" href={appleTouchIcon} />
      <link rel="manifest" href={manifest} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content={language} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* LinkedIn Meta Tags */}
      <meta property="linkedin:company" content={linkedinCompany} />
      
      {/* Search Engine Verification */}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {bingSiteVerification && <meta name="msvalidate.01" content={bingSiteVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      {baiduVerification && <meta name="baidu-site-verification" content={baiduVerification} />}
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional Structured Data for Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Zion Tech Group Services',
          description: 'Comprehensive list of AI and IT services offered by Zion Tech Group',
          itemListElement: [
            {
              '@type': 'Service',
              position: 1,
              name: 'AI Enterprise Automation Platform',
              description: 'Advanced AI-powered enterprise automation solutions',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 2,
              name: 'AI Cybersecurity Platform',
              description: 'Next-generation AI-driven cybersecurity solutions',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 3,
              name: 'AI Healthcare Platform',
              description: 'AI-powered healthcare analytics and automation',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 4,
              name: 'Quantum Edge Computing Solutions',
              description: 'Cutting-edge quantum computing and edge technology',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            },
            {
              '@type': 'Service',
              position: 5,
              name: 'Micro SaaS Solutions',
              description: 'Specialized micro SaaS platforms for business automation',
              provider: {
                '@type': 'Organization',
                name: 'Zion Tech Group'
              }
            }
          ]
        })}
      </script>
      
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_title: '${title}',
                page_description: '${description}'
              });
            `}
          </script>
        </>
      )}
      
      {/* Google Tag Manager */}
      {googleTagManagerId && (
        <>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${googleTagManagerId}');
              `
            }}
          />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}
      
      {/* Facebook Pixel */}
      {facebookPixelId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${facebookPixelId}');
              fbq('track', 'PageView');
            `
          }}
        />
      )}
      
      {/* LinkedIn Insight Tag */}
      {linkedinInsightTag && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              _linkedin_partner_id = "${linkedinInsightTag}";
              window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
              window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            `
          }}
        />
      )}
      
      {/* Hotjar */}
      {hotjarId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${hotjarId},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
          }}
        />
      )}
      
      {/* Crisp Chat */}
      {crispId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="${crispId}";
              (function(){
                const d=document;
                const s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `
          }}
        />
      )}
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      
      {/* Security headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      
      {/* Additional props */}
      {Object.entries(props).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
    </Helmet>
  );
};

// Specialized SEO components for different page types
export function HomePageSEO() {
  return (
    <SEO
      title="AI-Powered Business Solutions & Quantum Computing | Zion Tech Group"
      description="Transform your business with Zion Tech Group's cutting-edge AI solutions, quantum computing, and innovative IT services. Leading digital transformation with autonomous business operations and advanced cybersecurity."
      keywords="AI business solutions, quantum computing, autonomous operations, digital transformation, IT services, cybersecurity, machine learning, neural networks"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Zion Tech Group - AI-Powered Business Solutions",
        "description": "Leading provider of AI-powered business solutions, quantum computing, and innovative IT services for digital transformation.",
        "url": "https://ziontechgroup.com",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "AI-powered business solutions and quantum computing services"
        }
      }}
    />
  );
}

export function ServicesPageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Technology Services",
        "provider": {
          "@type": "Organization",
          "name": "Zion Tech Group"
        },
        "serviceType": "AI Solutions, Quantum Computing, IT Services",
        "description": "Comprehensive technology services including AI, quantum computing, and IT infrastructure"
      }}
    />
  );
}

export function ContactPageSEO() {
  return (
    <SEO
      title="Contact Zion Tech Group | Get in Touch for AI & Quantum Solutions"
      description="Contact Zion Tech Group for AI-powered business solutions, quantum computing services, and IT consulting. Get expert advice on digital transformation and technology implementation."
      keywords="contact Zion Tech Group, AI consulting, quantum computing consulting, IT consulting, digital transformation consulting"
      ogType="website"
      structuredData={{
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Zion Tech Group",
        "description": "Get in touch with Zion Tech Group for technology consulting and solutions",
        "mainEntity": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-0123",
            "contactType": "customer service",
            "email": "info@ziontechgroup.com"
          }
        }
      }}
    />
  );
}

export function BlogPostSEO({ 
  title, 
  description, 
  author, 
  publishedDate, 
  image, 
  slug 
}: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  image: string;
  slug: string;
}) {
  return (
    <SEO
      title={title}
      description={description}
      author={author}
      canonical={`https://ziontechgroup.com/blog/${slug}`}
      ogType="article"
      ogImage={image}
      structuredData={{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "author": {
          "@type": "Person",
          "name": author
        },
        "publisher": {
          "@type": "Organization",
          "name": "Zion Tech Group",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ziontechgroup.com/images/zion-tech-group-logo.png"
          }
        },
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://ziontechgroup.com/blog/${slug}`
        }
      }}
    />
  );
}
