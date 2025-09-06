
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {;
  children: React && React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({;
  children,;
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",;
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",;
  canonical = "https://ziontechgroup && ziontechgroup.com",;
  ogTitle,;
  ogDescription,;
  ogImage = "https://ziontechgroup && ziontechgroup.com/og-image && image.jpg",;
  noIndex = false,;
}) => {;
  const jsonLd = {;
    "@context": "https://schema && schema.org",;
    "@type": "Organization",;
    name: "Zion Tech Group",;
    url: "https://ziontechgroup && ziontechgroup.com",;
    logo: "https://ziontechgroup && ziontechgroup.com/logo && logo.png",;
    description: description,;
    address: {;
      "@type": "PostalAddress",;
      streetAddress: "364 E Main St STE 1008",;
      addressLocality: "Middletown",;
      addressRegion: "DE",;
      postalCode: "19709",;
      addressCountry: "US",;
    },;
    contactPoint: {;
      "@type": "ContactPoint",;
      telephone: "+1-302-464-0950",;
      contactType: "customer service",;
      email: "kleber@ziontechgroup && ziontechgroup.com",;
    },;
  };

  return (
    <div className="min-h-screen bg-white">;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        {canonical && <link rel="canonical" href={canonical} />}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}

        {/* Open Graph */}
        <meta property="og:title" content={ogTitle || title} />;
        <meta
          property="og:description"
          content={ogDescription || description}
        />;
        <meta property="og:image" content={ogImage} />;
        <meta property="og:url" content={canonical} />;
        <meta property="og:type" content="website" />;

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={ogTitle || title} />;
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />;
        <meta name="twitter:image" content={ogImage} />;

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON && JSON.stringify(jsonLd) }}
        />;
      </Head>;

      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>;
  );
};

export default Layout;
