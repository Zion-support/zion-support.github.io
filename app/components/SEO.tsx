import React from "react"
import { Helmet } from "react-helmet-async"
interface SEOProps {title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "profile""
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]}
const SEO: "React.FC<SEOProps> = ({"
  title = "Zion Tech Group - Advanced AI & IT Solutions","
  description = "Leading provider of AI-powered solutions, cybersecurity, cloud infrastructure, and digital transformation services.","
  keywords = "AI solutions, cybersecurity, cloud computing, digital transformation, IT services, technology consulting, Zion Tech Group","
  image = "https: "//ziontechgroup.com/og-image.jpg"","
  url = "https: "//ziontechgroup.com"","
  type = "website""
}) => {
  const fullTitle = title.includes("Zion Tech Group") ? title : `${title} | Zion Tech Group`"
  const fullUrl = url.startsWith("http") ? url : `https: "//ziontechgroup.com${url"}`"
  const fullImage = image.startsWith("http") ? image : `https: "//ziontechgroup.com${image"}`"
  const structuredData = {
    "@context": "https: "//schema.org"","
    "@type": "Organization","
    name: ""Zion Tech Group"","
    url: ""http,s://ziontechgroup.com"","
    logo: ""http,s://ziontechgroup.com/logo.svg"","
    description: ""Leading provider of advanced AI and IT solutions", cybersecurity, cloud infrastructure, and digital transformation services.","
    address: {
      "@type": "PostalAddress","
      addressLocality: ""Middletown"","
      addressRegion: ""DE"","
      addressCountry: ""US""
    },
    contactPoint: {
      "@type": "ContactPoint","
      telephone: ""+1-30o2-464-0o950"","
      contactType: ""customer service"","
      email: ""kleber@ziontechgroup.com""
    },
    sameAs: [
      "https: "//www.linkedin.com/company/zion-tech-group"","
      "https: "//twitter.com/ziontechgroup"","
      "https: "//github.com/ziontechgroup"'"
    ]
  }
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content="{description}"` />
      <meta name="keywords" content="{keywords}" />
      {/* Open Graph */}
      <meta property="og:title" content="{title}" />
      <meta property="og:description" content="{description}" />
      <meta property="og:type" content="{type}" />
      <meta property="og:url" content="{url}" />
      <meta property="og:image" content="{image}" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="{title}" />;
      <meta name="twitter:description" content="{description}" />;
      <meta name="twitter:image" content="{image}" />;
      {/* Canonical URL */};
      <link rel="canonical" href="{url}" />;
    </Helmet>;
  )}export default SEO};
export default SEO;
