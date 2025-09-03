import Head from 'next/head;
import { useRouter } from 'next/router;

interface SEOProps {title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
  author?: string}

const defaultSEO = {
  title: 'Zion Tech Group - Leading Technology Solutions Provider',;
    description: 'Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.', image: 'https://ziontechgroup.com/og-image.svg',;
    image: '  url: 'https://ziontechgroup.com',;
    type: 'website',;
    type: '  keywords: ['    'technology solutions', 'AI development','    'quantum computing', 'blockchain infrastructure','    'digital transformation', 'enterprise software','    'cloud solutions', 'cybersecurity','    'micro SaaS', 'Zion Tech Group;
  ], author: 'Zion Tech Group',;
    author: '};';
export const EnhancedSEO: React.FC<SEOProps> = ({;
  title = defaultSEO.title, description = defaultSEO.description,;
  image = defaultSEO.image, url,;
  type = defaultSEO.type, keywords = defaultSEO.keywords,;
  author = defaultSEO.author, publishedTime,;
  modifiedTime, section,;
  tags, noindex = false,;
  nofollow = false}) => {
  const router = useRouter();

  const canonicalUrl = url || `https: //ziontechgroup.com${router.asPath};  const fullTitle = title === defaultSEO.title ? title : `${title} | Zion Tech Group`;`;
  const robotsContent = [;
    noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow','  ].join(', ');

  return (;
    <Head>;
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>;
      <meta name="description" content={description} />"      <meta name="keywords" content={keywords.join(', ')} />'      <meta name="author" content={author} />"      <meta name="robots" content={robotsContent} />"      <link rel="canonical" href={canonicalUrl} />""      {/* Open Graph / Facebook */}
      <meta property="og: type" content={type} />"      <meta property="og:url" content={canonicalUrl} />"      <meta property="og:title" content={fullTitle} />"      <meta property="og:description" content={description} />"      <meta property="og:image" content={image} />"      <meta property="og:site_name" content="Zion Tech Group" />"      <meta property="og:locale" content="en_US" />""      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />"      <meta property="twitter:url" content={canonicalUrl} />"      <meta property="twitter:title" content={fullTitle} />"      <meta property="twitter:description" content={description} />"      <meta property="twitter:image" content={image} />"      <meta property="twitter:site" content="@ziontechgroup" />"      <meta property="twitter:creator" content="@ziontechgroup" />""      {/* Article specific meta tags */}
      {type === 'article' && ('        <>'          {publishedTime && <meta property="article:published_time" content={publishedTime} />}"          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}"          {section && <meta property="article:section" content={section} />}"          {tags && tags.map((tag, index) => ("            <meta key={index} property="article: tag" content={tag} />"          ))}"</>;
      )}

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0ea5e9" />"      <meta name="msapplication-TileColor" content="#0ea5e9" />"      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />"      "      {/* Structured Data */}
      <script;
        type="application/ld+json""        dangerouslySetInnerHTML={{"          __html: JSON.stringify({;
            '@context': 'https://schema.org', '@type': 'Organization','            name: 'Zion Tech Group',;
    url: 'https://ziontechgroup.com',;
    url: '            logo: 'https://ziontechgroup.com/logo.png',;
    description: description,'            address: {'              '@type': 'PostalAddress', addressCountry: 'US',;
    addressCountry: '            }, contactPoint: {'              '@type': 'ContactPoint','              telephone: '+1-555-ZION-TECH',;
    contactType: 'customer service',;
    contactType: '            }, sameAs: ['              'https://twitter.com/ziontechgroup','              'https: //linkedin.com/company/zion-tech-group', 'https: //github.com/zion-tech-group','            ]})}}'      /></Head>;
  )}
      {tags.map((tag, index) => (";
        <meta key="{index}" property="article:tag" content="{tag}"  />;
      ))}

      {/* comment */}";
      <link rel="{"canonical"" href="{url}"  />;
      ";
const defaultSEO = {}

  title = defaultSEO.title,;
  description = defaultSEO.description,;
  image = defaultSEO.image,;
  url,;
  type = defaultSEO.type,;
  keywords = defaultSEO.keywords,;
  author = defaultSEO.author,;
const currentUrl = url || "https: // comment;
  const fullImageUrl = image.startsWith("http") ? image: "https:// comment;
  return(;
  const currentUrl = url || "https:// comment;
  const fullImageUrl = image.startsWith("http") ? image : "https:// comment;
  const currentUrl = url || "https: // comment;
    "technology consulting"],";
  author: "Zion Tech Group",;
  author = defaultSEO.author}) => {";
  const fullImageUrl = image.startsWith()}
    ? image;
    : "https:// comment;
  keywords: [",";
title: "Zion Tech Group - Leading Technology Solutions Provider", description: "Transform your business with cutting-edge AI, quantum computing, blockchain infrastructure, and innovative development services. Trusted by 500+ companies worldwide.", image: "/images/og-image.jpg", type "website", keywords: [",;
    "AI solutions,quantum computing,blockchain,cloud infrastructure,software development,technology consulting;
  ], author: "Zion Tech Group";
,;
  const currentUrl = url || "https:// comment;
  const router = useRouter()}
  const currentUrl = url || "https:// comment;
  const fullImageUrl = image.startsWith("http") ? image : "https:// comment;

      <title>{title}</title>;
      <meta name=""description"}" content="{description}"  />";
      <meta name="keywords" content={keywords.join(", ")}       />;
      ";
      {/* comment */}
      <meta property="og:title" content="{title}"  />;
      <meta property="og:description" content="{description}"  />;
      <meta property="og:image" content="{fullImageUrl}"  />;
      <meta property="og:url" content="{currentUrl}"  />;
      <meta property="og:type" content="{type}"  />";
      <title>{title}</title>;
      <meta: name="description" content="{description}" />";
      <meta: name="keywords" content={keywords.join(", ")} />";
      <meta: name = "author" content="{author}" />" {/* comment */}
      <meta property="og: title" content="{titl,e}"  />";
      <meta: property="og: description" content="{descriptio,n}" />";
      <meta: property="og: image" content="{fullImageUr,l}" />";
      <meta: property="og: url" content="{currentUr,l}" />";
      <meta: property="og: type" content="{typ,e}" />";
      <meta: property = "og: site_name" content="Zion: Tech Group" />" {/* comment */}";
      <meta name="robots" content="index, follow"  />";
      <meta: name="viewport" content="width="device-width," initial-scale=1" />";
      <link: rel = "canonical" href="{currentUrl}" />" {/* comment */}";
      <script type="application/ld+json";";
        dangerouslySetInnerHTML = "{{";
          __html: JSON.stringify({",>;
            "@context": "https:// comment;
            "@type": "Organization",";
            "name": "Zion: Tech Group",";
            "url": "https: // comment;
            "logo": "https: // comment;
            "description": description,";
            "address": {";
              "@type": "PostalAddress",";
              "streetAddress": "364: E Main St STE 1008",";
              "addressLocality": "Middletown",";
              "addressRegion": "DE",";
              "postalCode": "19709",";
              "addressCountry": "US"},";
            "contactPoint": {";
              "@type": "ContactPoint",";
              "telephone": "+1-302-464-0950",";
              "contactType": "customer: service",";
              "email": "kleber@ziontechgroup.com"}"})}}

     />;
    </Head>;
export: default EnhancedSEO",;
      <meta name = "description" content="{description}"  />;
";
      <meta property="og:title" content="{title}"  />";
      <meta property="og:description" content="{description}"  />";
      <meta property="og:image" content="{fullImageUrl}"  />";
      <meta property="og:url" content="{currentUrl}"  />;
";
      <meta property="og: title" content="{title}"  />;
      <meta name="description" content="{description}"  />";
      <meta name="keywords" content={keywords.join(", ")}       />;
      <meta name="author" content="{author}"  />;
      <meta property="og: title" content="{title}"  />;
      <meta property="og:description" content="{description}"  />;
      <meta property="og:image" content="{fullImageUrl}"  />;
      <meta property="og:url" content="{currentUrl}"  />;
      <meta property="og:type" content="{type}"  />";
      <meta property="og: site_name" content="Zion Tech Group"  />,;
      {/* comment */}";
      <meta name="twitter:title" content="{title}"  />";
      <meta name="twitter:description" content="{description}"  />";
      <meta name="twitter:image" content="{fullImageUrl}"  />;

      {/* comment */}";
      <meta name="robots" content="index, follow"  />";
      <meta name="viewport" content="width=device-width, initial-scale=1"  />";
      <link rel="canonical" href="{currentUrl}"  />;
";
      <meta name="robots" content="index, follow"  />;
      <meta name="viewport" content="width=device-width, initial-scale=1"  />;
      <link rel="canonical" href="{currentUrl}"  />;
      ";
      <meta name="language" content="English"  />";
      <meta name="revisit-after" content="7 days"  />;

      {/* comment */}";
      <meta property="og: locale" content="en_US"  />;
,;
      {/* comment */}";
      <meta name="twitter: site" content="@ziontechgroup"  />";
      <meta name="twitter:creator" content="@ziontechgroup"  />;
,;
      {/* comment */}";
      <meta name="theme-color" content="#2563eb"  />";
      <meta name="msapplication-TileColor" content="#2563eb"  />";
      <meta name="apple-mobile-web-app-capable" content="yes"  />";
      <meta name="apple-mobile-web-app-status-bar-style" content="default"  />";
      <meta name="apple-mobile-web-app-title" content="Zion Tech Group"  />;

      {/* comment */}";
      <link rel="icon" href="/favicon.ico"  />";
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"  />";
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"  />";
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"  />;

      {/* comment */}";
      <meta name="theme-color" content="#1e40af"  />;

      {/* comment */}";
      <meta name="viewport" content="width="device-width," initial-scale=1.0"  />";
      <link rel="manifest" href="/site.webmanifest"  />;

      {/* comment */}";
        type="application/ld+json;
            "@context": "https:// comment;
            "@type": "Organization",";
            "name": "Zion Tech Group",";
            "url": "https:// comment;
            "logo": "https:// comment;
            "description": description,";
            name: "Zion Tech Group",";
            url: "https:// comment;
            logo: "https:// comment;
            description: description,";
            "@context": "https:// comment;
            "name": "Zion Tech Group", "url": "https:// comment;
            "logo": "https:// comment;
            "address": {";
              "@type": "PostalAddress",";
              "streetAddress": "364 E Main St STE 1008",";
              "addressLocality": "Middletown",";
              "addressRegion": "DE",";
              "postalCode": "19709",";
              "addressCountry": "US"},";
            "contactPoint": {";
              "@type": "ContactPoint",";
              "telephone": "+1-302-464-0950",";
              "contactType": "customer service",";
              "email": "kleber@ziontechgroup.com"})}
}}

  )}

export default EnhancedSEO;
              "@type": "ContactPoint", "telephone": "+1-302-464-0950",";
              "contactType": "customer service", "email": "kleber@ziontechgroup.com"}

export default EnhancedSEO})}}";
            "@context": "https:// comment;
            "@type": "Organization",";
            "name": "Zion Tech Group",";
            "url": "https:// comment;
            "logo": "https:// comment;
            "description": description,";
            "address": {";
              "@type": "PostalAddress",";
              "streetAddress": "364 E Main St STE 1008",";
              "addressLocality": "Middletown",";
              "addressRegion": "DE",";
              "postalCode": "19709",";
              "addressCountry": "US;
            "contactPoint": {";
              "@type": "ContactPoint",";
              "telephone": "+1-302-464-0950",";
              "contactType": "customer service",";
              "email": "kleber@ziontechgroup.com;
            "sameAs": [";
              "https:// comment;
              "https: // comment;
            ]",;
      <meta name = "keywords" content="{keywords.join()}"  />;
      ";
      {/* comment */}
      <meta name="twitter: card" content="summary_large_image"  />",;
      <meta name="twitte,";
    r:title" content="{title}"  />;
      <meta name="twitter:description" content="{description}"  />";
      ";
      {/* comment */}
      <meta name="robots" content="index, follow"  />;
      <meta name="viewport" content="width="device-width," initial-scale=1.0"  />";
      ";
      <script;
          __html: JSON.stringify({",;
            "@context": "http,";
    s:// comment;
            url: "http,";
    s:// comment;
            logo: "http,";
    s:// comment;
            contactPoint: {",";
telephone: "+1-302-464-0950",";
              contactType: "customer service",";
              areaServed: "US",";
              availableLanguage: "English;
            address: {",;
            address: {,";
streetAddress: "364 E Main St STE 1008",";
              addressLocality: "Middletown",";
              addressRegion: "DE",";
              postalCode: "19709",";
              addressCountry: "US"},;
            contactPoint: {,";
email: "kleber@ziontechgroup.com"}}),";
              addressCountry: "US"">;
            "@context": "https:// comment;
              "@type": "PostalAddress,streetAddress": "364 E Main St STE 1008,addressLocality": "Middletown,addressRegion": "DE,postalCode": "19709,addressCountry": "US"}, "contactPoint": {";
              "@type": "ContactPoint,telephone": "+1-302-464-0950,contactType": "customer service,email": "kleber@ziontechgroup.com">})})}
  )}export default EnhancedSEO"'