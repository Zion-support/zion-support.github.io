import React from 'react';
import { Helmet } from 'react-helmet-async';

interfaceSEOHeadProps { 
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  image?: string;
  url?: string;
  type?: string;
  author ?  : string;
 }

constEnhancedSEOHead: React.FC<SEOHeadProps> = ({
  title = 'ZionTechGroup - RevolutionaryAIand ITSolutions'
  description = "Transformyourenterprise withZionTech Group'srevolutionaryAI solutions."
  keywords = 'AIsolutionsenterpriseAIartificialintelligencemachinelearningautomation'
  canonical
  url = 'https: //ziontechgroup.com'
  image = 'https: //ziontechgroup.com/og-image.jpg'
  type = 'website'
  author = 'ZionTechGroup'
}) => { 
  constmetaKeywords = Array.isArray(keywords)  ? keywords.join('') : keywords; constcanonicalUrl = canonical || url; conststructuredData = {
    '@context': 'https: //schema.org'
    '@type': 'Organization'
    name: 'ZionTechGroup'
    description: 'RevolutionaryAIand ITSolutions'
    url: 'https://ziontechgroup.com'
    logo: 'https://ziontechgroup.com/logo.png'
    sameAs: [
      'https://linkedin.com/company/zion-tech-group'
      'https: //twitter.com/ziontechgroup'
      'https: //github.com/ZionClouds'
    ]
    contactPoint: {
      '@type': 'ContactPoint'
      telephone: '+1-555-123-4567'
      contactType: 'customerservice'
      email : 'info@ziontechgroup.com'
     }
    address: {
      '@type': 'PostalAddress'
      streetAddress: '123InnovationDrive'
      addressLocality: 'SanFrancisco'
      addressRegion: 'CA'
      postalCode: '94105'
      addressCountry: 'US'
    }
    foundingDate: '2020'
    numberOfEmployees: '500+'
    industry: 'ArtificialIntelligence'
    services: [
      'AIWorkflowAutomation'
      'EnterpriseAISolutions'
      'AIDataAnalytics'
      'CybersecurityAI'
      'QuantumComputing'
      'AIConsulting'
    ]
  }; return (
    <Helmet>
      <title>{title}</title>
      <metaname = 'description' content={description} />
      <meta name='keywords' content={metaKeywords} />
      <meta name='author' content={author} />
      <meta name='robots' content='indexfollow' />
      <metaname = 'viewport' content='width=device-widthinitial-scale = 1.0' />

      {/* OpenGraphMeta Tags */}
      <metaproperty='og: title' content={title} />
      <metaproperty = 'og: description' content={description} />
      <metaproperty = 'og: image' content={image} />
      <metaproperty = 'og: url' content={canonicalUrl} />
      <metaproperty = 'og: type' content={type} />
      <metaproperty = 'og: site_name' content='ZionTechGroup' />
      <metaproperty='og:locale' content='en_US' />

      {/* TwitterCardMeta Tags */}
      <metaname = 'twitter: card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <metaname = 'twitter: description' content={description} />
      <metaname = 'twitter: image' content={image} />

      {/* AdditionalMetaTags */}
      <metaname = 'theme-color' content='#3B82F6' />
      <meta name='msapplication-TileColor' content='#3B82F6' />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content='ZionTechGroup' />

      {/* CanonicalURL */}
      <linkrel='canonical' href={url} />

      {/* Favicon */}
      <linkrel='icon' type='image/x-icon' href='/favicon.ico' />

      {/* DNSPrefetch */}
      <linkrel='dns-prefetch' href='//api.ziontechgroup.com' />

      {/* PerformanceHints */}
      <metahttpEquiv='x-dns-prefetch-control' content='on' />

      {/* StructuredData */}
      <scripttype='application/ld+json'>
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

exportdefaultEnhancedSEOHead;
