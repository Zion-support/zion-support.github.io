import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  url: string;
  image?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  structuredData?: any;
  canonicalUrl?: string;
  noindex?: boolean;
  nofollow?: boolean;
  robots?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  twitterImage?: string;
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
  baiduVerification?: string;
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
  linkedinInsightTag?: string;
  hotjarId?: string;
  crispId?: string;
  intercomId?: string;
  zendeskId?: string;
  hubspotId?: string;
  salesforceId?: string;
  marketoId?: string;
  pardotId?: string;
  segmentId?: string;
  mixpanelId?: string;
  amplitudeId?: string;
  heapId?: string;
  posthogId?: string;
  rudderstackId?: string;
  mauticId?: string;
  activeCampaignId?: string;
  convertkitId?: string;
  mailchimpId?: string;
  klaviyoId?: string;
  dripId?: string;
  getresponseId?: string;
  aweberId?: string;
  constantContactId?: string;
  campaignMonitorId?: string;
  sendinblueId?: string;
  mailerliteId?: string;
  convertflowId?: string;
  optimizelyId?: string;
  vwoId?: string;
  abTastyId?: string;
  googleOptimizeId?: string;
  fullstoryId?: string;
  logrocketId?: string;
  sentryId?: string;
  datadogId?: string;
  newrelicId?: string;
  appdynamicsId?: string;
  dynatraceId?: string;
  elasticId?: string;
  splunkId?: string;
  sumologicId?: string;
  logglyId?: string;
  papertrailId?: string;
  logentriesId?: string;
  logzId?: string;
  scalyrId?: string;
  timberId?: string;
  logdnaId?: string;
  logmaticId?: string;
  logtailId?: string;
  logflareId?: string;
  betterstackId?: string;
}

const EnhancedSEO: React.FC<SEOProps> = ({
  title = "Zion Tech Group - AI-Powered Technology Solutions & Enterprise Services",
  description = "Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure",
  type = 'website',
  url = "https://ziontechgroup.com",
  image = "/images/zion-tech-group-og.jpg",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  structuredData,
  canonicalUrl,
  noindex = false,
  nofollow = false,
  robots,
  ogType,
  twitterCard = 'summary_large_image',
  twitterSite = '@ziontechgroup',
  twitterCreator = '@ziontechgroup',
  twitterImage,
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification,
  baiduVerification,
  googleAnalyticsId,
  googleTagManagerId,
  facebookPixelId,
  linkedinInsightTag,
  hotjarId,
  crispId,
  intercomId,
  zendeskId,
  hubspotId,
  salesforceId,
  marketoId,
  pardotId,
  segmentId,
  mixpanelId,
  amplitudeId,
  heapId,
  posthogId,
  rudderstackId,
  mauticId,
  activeCampaignId,
  convertkitId,
  mailchimpId,
  klaviyoId,
  dripId,
  getresponseId,
  aweberId,
  constantContactId,
  campaignMonitorId,
  sendinblueId,
  mailerliteId,
  convertflowId,
  optimizelyId,
  vwoId,
  abTastyId,
  googleOptimizeId,
  fullstoryId,
  logrocketId,
  sentryId,
  datadogId,
  newrelicId,
  appdynamicsId,
  dynatraceId,
  elasticId,
  splunkId,
  sumologicId,
  logglyId,
  papertrailId,
  logentriesId,
  logzId,
  scalyrId,
  timberId,
  logdnaId,
  logmaticId,
  logtailId,
  logflareId,
  betterstackId,
}) => {
  const location = useLocation();
  const defaultImage = image || 'https://ziontechgroup.com/images/og-default.jpg';
  const currentUrl = canonicalUrl || `${url}${location.pathname}`;
  const fullImageUrl = defaultImage.startsWith('http') ? defaultImage : `${url}${defaultImage}`;
  
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/logo.png',
    description: 'Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Technology Drive',
      addressLocality: 'Wilmington',
      addressRegion: 'DE',
      postalCode: '19801',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://linkedin.com/company/ziontechgroup',
      'https://twitter.com/ziontechgroup',
      'https://github.com/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ],
    founder: {
      '@type': 'Person',
      name: 'Kleber',
      jobTitle: 'CEO & Founder',
      email: 'kleber@ziontechgroup.com'
    },
    foundingDate: '2015',
    numberOfEmployees: '50-100',
    industry: 'Technology',
    keywords: 'AI solutions, quantum computing, cybersecurity, digital transformation, enterprise technology, machine learning, cloud services, IT infrastructure'
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author || 'Zion Tech Group'} />
      <meta name="robots" content={robots || `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType || type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage || fullImageUrl} />
      
      {/* Article-specific meta tags */}
      {type === 'article' && (
        <>
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {author && <meta property="article:author" content={author} />}
          {section && <meta property="article:section" content={section} />}
          {tags && tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Facebook App ID */}
      {facebookAppId && <meta property="fb:app_id" content={facebookAppId} />}
      
      {/* Site Verification */}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {bingSiteVerification && <meta name="msvalidate.01" content={bingSiteVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      {baiduVerification && <meta name="baidu-site-verification" content={baiduVerification} />}
      
      {/* Analytics and Tracking Scripts */}
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
                page_location: '${currentUrl}'
              });
            `}
          </script>
        </>
      )}
      
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
              (function(l) {
                if (l.search("linkedin.com/insight/") > -1) return;
                var s = document.createElement("script");
                s.type = "text/javascript";
                s.async = true;
                s.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                var el = document.getElementsByTagName("script")[0];
                el.parentNode.insertBefore(s, el);
              })(window.location);
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
              window.$crisp=[];window.CRISP_WEBSITE_ID="${crispId}";
              (function(){d=document;s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);})();
            `
          }}
        />
      )}
      
      {/* Intercom */}
      {intercomId && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){
              ic('reattach_activator');ic('update',w.intercomSettings);}else{
              var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){
              i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');
              s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/' + ${intercomId};
              var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};
              if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
            `
          }}
        />
      )}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Performance and Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://static.hotjar.com" />
      <link rel="preconnect" href="https://client.crisp.chat" />
      <link rel="preconnect" href="https://widget.intercom.io" />
      
      {/* DNS Prefetch for additional performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      <link rel="dns-prefetch" href="//static.hotjar.com" />
      <link rel="dns-prefetch" href="//client.crisp.chat" />
      <link rel="dns-prefetch" href="//widget.intercom.io" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Additional Meta Tags for SEO */}
      <meta name="application-name" content="Zion Tech Group" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Language and Region */}
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="US-DE" />
      <meta name="geo.placename" content="Wilmington, Delaware" />
      
      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="123 Technology Drive" />
      <meta name="business:contact_data:locality" content="Wilmington" />
      <meta name="business:contact_data:region" content="DE" />
      <meta name="business:contact_data:postal_code" content="19801" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:phone_number" content="+1-302-464-0950" />
      <meta name="business:contact_data:email" content="info@ziontechgroup.com" />
      
      {/* Security Headers */}
      <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:; frame-src 'self' https:;" />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()" />
    </Helmet>
  );
};

export default EnhancedSEO;