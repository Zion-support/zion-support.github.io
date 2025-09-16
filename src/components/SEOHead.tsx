import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Zion Tech Group - Revolutionary AI Solutions & Technology Innovation",
  description = "Discover cutting-edge AI solutions, quantum computing, and revolutionary technology innovations. Transform your business with our advanced AI services, cybersecurity solutions, and digital transformation expertise.",
  keywords = "AI solutions, artificial intelligence, quantum computing, cybersecurity, digital transformation, machine learning, neural networks, business automation, tech innovation",
  image = "https://ziontechgroup.com/images/og-image.jpg",
  url = "https://ziontechgroup.com",
  type = "website",
  author = "Zion Tech Group",
  publishedTime,
  modifiedTime,
  section = "Technology",
  tags = []
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + "..." : description;
  const fullKeywords = Array.isArray(tags) ? [...keywords.split(", "), ...tags].join(", ") : keywords;

const SEOHead: React.FC = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={fullKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Zion Tech Group" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific meta tags */}
      {type === "article" && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content={section} />
          {publishedTime && <meta property="article:published_time" content={publishedTime} />}
          {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
          {tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@ZionTechGroup" />
      <meta name="twitter:creator" content="@ZionTechGroup" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "Article" : "Organization",
          "name": fullTitle,
          "description": fullDescription,
          "url": url,
          "image": image,
          "author": type === "article" ? {
            "@type": "Person",
            "name": author
          } : undefined,
          "publisher": {
            "@type": "Organization",
            "name": "Zion Tech Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ziontechgroup.com/logo.png"
            }
          },
          "datePublished": publishedTime,
          "dateModified": modifiedTime || publishedTime,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
=======
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = "AI, artificial intelligence, quantum computing, neural interfaces, technology, innovation, 2025, revolutionary tech, Zion Tech Group",
  canonical,
  ogImage = "/og-image.jpg"
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonical} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          "@type": "Organization",
          "name": "Zion Tech Group",
          "description": "Leading provider of revolutionary AI, quantum computing, and neural interface technologies",
          "url": "https://ziontechgroup.com",
          "logo": "https://ziontechgroup.com/logo.png",
          "sameAs": [
            "https://twitter.com/ziontechgroup",
            "https://linkedin.com/company/ziontechgroup"
          ]
