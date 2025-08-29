import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'service';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  facebookAppId?: string;
  googleSiteVerification?: string;
  bingSiteVerification?: string;
  yandexVerification?: string;
}

export function SEO({
  title = 'Zion Tech Group - Innovative AI & Technology Solutions',
  description = 'Leading provider of cutting-edge AI, cloud computing, and digital transformation solutions. Transform your business with our innovative technology services.',
  keywords = ['AI', 'artificial intelligence', 'cloud computing', 'digital transformation', 'technology solutions', 'machine learning', 'data analytics'],
  author = 'Zion Tech Group',
  image = '/images/zion-tech-group-og.jpg',
  url = window.location.href,
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  twitterCard = 'summary_large_image',
  facebookAppId,
  googleSiteVerification,
  bingSiteVerification,
  yandexVerification
}: SEOProps) {
  const siteName = 'Zion Tech Group';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  const fullUrl = canonical || url;

  // Default structured data for organization
  const defaultStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/images/zion-tech-group-logo.png',
    description: 'Leading provider of innovative AI and technology solutions',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Innovation Drive',
      addressLocality: 'Tech City',
      addressRegion: 'CA',
      postalCode: '90210',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'info@ziontechgroup.com'
    },
    sameAs: [
      'https://twitter.com/ziontechgroup',
      'https://linkedin.com/company/ziontechgroup',
      'https://facebook.com/ziontechgroup'
    ]
  };

  // Merge with provided structured data
  const finalStructuredData = structuredData || defaultStructuredData;

  useEffect(() => {
    // Update document title for better UX
    document.title = fullTitle;
    
    // Add meta description to document head if not present
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Add meta keywords if not present
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Add canonical link if not present
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);

    // Add Open Graph meta tags if not present
    const ogTags = [
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: siteName }
    ];

    ogTags.forEach(({ property, content }) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    });

    // Add Twitter Card meta tags if not present
    const twitterTags = [
      { name: 'twitter:card', content: twitterCard },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ];

    twitterTags.forEach(({ name, content }) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    });

    // Add robots meta tag
    let robotsTag = document.querySelector('meta[name="robots"]');
    if (!robotsTag) {
      robotsTag = document.createElement('meta');
      robotsTag.setAttribute('name', 'robots');
      document.head.appendChild(robotsTag);
    }
    
    const robotsContent = [];
    if (noindex) robotsContent.push('noindex');
    if (nofollow) robotsContent.push('nofollow');
    if (robotsContent.length === 0) robotsContent.push('index', 'follow');
    
    robotsTag.setAttribute('content', robotsContent.join(', '));

    // Add structured data script
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(finalStructuredData);

    // Add viewport meta tag if not present
    let viewportTag = document.querySelector('meta[name="viewport"]');
    if (!viewportTag) {
      viewportTag = document.createElement('meta');
      viewportTag.setAttribute('name', 'viewport');
      viewportTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
      document.head.appendChild(viewportTag);
    }

    // Add charset meta tag if not present
    let charsetTag = document.querySelector('meta[charset]');
    if (!charsetTag) {
      charsetTag = document.createElement('meta');
      charsetTag.setAttribute('charset', 'utf-8');
      document.head.appendChild(charsetTag);
    }

    // Add language meta tag
    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (!languageTag) {
      languageTag = document.createElement('meta');
      languageTag.setAttribute('http-equiv', 'content-language');
      languageTag.setAttribute('content', 'en-US');
      document.head.appendChild(languageTag);
    }

    // Add author meta tag
    let authorTag = document.querySelector('meta[name="author"]');
    if (!authorTag) {
      authorTag = document.createElement('meta');
      authorTag.setAttribute('name', 'author');
      document.head.appendChild(authorTag);
    }
    authorTag.setAttribute('content', author);

    // Add verification meta tags
    if (googleSiteVerification) {
      let googleVerification = document.querySelector('meta[name="google-site-verification"]');
      if (!googleVerification) {
        googleVerification = document.createElement('meta');
        googleVerification.setAttribute('name', 'google-site-verification');
        document.head.appendChild(googleVerification);
      }
      googleVerification.setAttribute('content', googleSiteVerification);
    }

    if (bingSiteVerification) {
      let bingVerification = document.querySelector('meta[name="msvalidate.01"]');
      if (!bingVerification) {
        bingVerification = document.createElement('meta');
        bingVerification.setAttribute('name', 'msvalidate.01');
        document.head.appendChild(bingVerification);
      }
      bingVerification.setAttribute('content', bingSiteVerification);
    }

    if (yandexVerification) {
      let yandexVerification = document.querySelector('meta[name="yandex-verification"]');
      if (!yandexVerification) {
        yandexVerification = document.createElement('meta');
        yandexVerification.setAttribute('name', 'yandex-verification');
        document.head.appendChild(yandexVerification);
      }
      yandexVerification.setAttribute('content', yandexVerification);
    }

    // Add Facebook App ID if provided
    if (facebookAppId) {
      let fbAppId = document.querySelector('meta[property="fb:app_id"]');
      if (!fbAppId) {
        fbAppId = document.createElement('meta');
        fbAppId.setAttribute('property', 'fb:app_id');
        document.head.appendChild(fbAppId);
      }
      fbAppId.setAttribute('content', facebookAppId);
    }

    // Add additional meta tags for articles
    if (type === 'article' && publishedTime) {
      let publishedTimeTag = document.querySelector('meta[property="article:published_time"]');
      if (!publishedTimeTag) {
        publishedTimeTag = document.createElement('meta');
        publishedTimeTag.setAttribute('property', 'article:published_time');
        document.head.appendChild(publishedTimeTag);
      }
      publishedTimeTag.setAttribute('content', publishedTime);
    }

    if (type === 'article' && modifiedTime) {
      let modifiedTimeTag = document.querySelector('meta[property="article:modified_time"]');
      if (!modifiedTimeTag) {
        modifiedTimeTag = document.createElement('meta');
        modifiedTimeTag.setAttribute('property', 'article:modified_time');
        document.head.appendChild(modifiedTimeTag);
      }
      modifiedTimeTag.setAttribute('content', modifiedTime);
    }

    if (type === 'article' && section) {
      let sectionTag = document.querySelector('meta[property="article:section"]');
      if (!sectionTag) {
        sectionTag = document.createElement('meta');
        sectionTag.setAttribute('property', 'article:section');
        document.head.appendChild(sectionTag);
      }
      sectionTag.setAttribute('content', section);
    }

    if (type === 'article' && tags.length > 0) {
      tags.forEach(tag => {
        let tagTag = document.querySelector(`meta[property="article:tag"][content="${tag}"]`);
        if (!tagTag) {
          tagTag = document.createElement('meta');
          tagTag.setAttribute('property', 'article:tag');
          document.head.appendChild(tagTag);
        }
        tagTag.setAttribute('content', tag);
      });
    }

  }, [
    fullTitle,
    description,
    keywords,
    author,
    image,
    fullUrl,
    type,
    publishedTime,
    modifiedTime,
    section,
    tags,
    noindex,
    nofollow,
    finalStructuredData,
    twitterCard,
    facebookAppId,
    googleSiteVerification,
    bingSiteVerification,
    yandexVerification
  ]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      <meta name="robots" content={noindex || nofollow ? `${noindex ? 'noindex' : ''}${nofollow ? ',nofollow' : ''}`.trim() : 'index,follow'} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional meta tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="content-language" content="en-US" />
      
      {/* Verification tags */}
      {googleSiteVerification && (
        <meta name="google-site-verification" content={googleSiteVerification} />
      )}
      {bingSiteVerification && (
        <meta name="msvalidate.01" content={bingSiteVerification} />
      )}
      {yandexVerification && (
        <meta name="yandex-verification" content={yandexVerification} />
      )}
      
      {/* Facebook App ID */}
      {facebookAppId && (
        <meta property="fb:app_id" content={facebookAppId} />
      )}
      
      {/* Article-specific meta tags */}
      {type === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === 'article' && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.map(tag => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}
    </Helmet>
  );
}

export function HomePageSEO() {
  return (
    <SEO
      title="AI Services, Quantum Computing & IT Solutions | Zion Tech Group"
      description="Comprehensive range of AI services, quantum computing solutions, and enterprise IT services. From autonomous business operations to advanced cybersecurity and cloud infrastructure."
      keywords="AI services, quantum computing services, IT infrastructure, cybersecurity services, cloud computing, business automation, machine learning services"
      type="website"
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
      type="website"
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
      image={image}
      url={`https://ziontechgroup.com/blog/${slug}`}
      type="article"
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
