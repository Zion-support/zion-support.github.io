import React from "react";
import StructuredData from "../components/StructuredData";
import { Helmet } from "react-helmet-async";
interface SEOHeadProps 
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;

const SEOHead: React.FC<SEOHeadProps> = (
  title = "Zion Tech Group - Advanced AI & IT Solutions",
  description = "Leading technology company providing cutting-edge AI solutions, cloud infrastructure, cybersecurity, and custom software development services.",
  keywords = "AI solutions, cloud computing, cybersecurity, software development, IT services, business automation, data analytics, machine learning, artificial intelligence",
  canonical = "https://ziontechgroup.com",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
//   structuredData,
  noindex = false,
  nofollow = false,
  const finalStructuredData = structuredData || defaultStructuredData;
  return (
      <title>{title}</title>
      <meta name="description" content="{description}" />
      <meta name="keywords" content="{keywords}" />
      <link rel="canonical" href="{canonical}" />
      {/* Open Graph */}
      {/* Twitter Card */}
      <meta name="twitter:card" content="{twitterCard}" />
      <meta name="twitter:title" content="{title}" />
      <meta name="twitter:description" content="{description}" />
      <meta name="twitter:image" content="{ogImage}" />
      {/* SEO */}
      {noindex && <meta name="robots" content="noindex" />}</meta>
      {nofollow && <meta name="robots" content="nofollow" />}</meta>
      {/* Structured Data */}
      <script type="application/ld+json"></script>
        {JSON.stringify(finalStructuredData)}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      <meta httpEquiv="X-Frame-Options" content="DENY" />
//     </Helmet>
  );
;
export default SEOHead;
</meta>
</meta>
</SEOHeadProps>