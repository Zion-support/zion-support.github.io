<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
import React from './react';
import Head from './next / head';
import Header from "./Header";
import Footer from "./Footer";
;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
ursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======



=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
origin/automation-improvements-final

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
<<<<<<< HEAD
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
origin/main
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <div className="min-h-screen bg-white">;
const Layout: React.FC < LayoutProps> = ({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical = "https://ziontechgroup.com",
  og_title,
  og_description,
  og_image = "https://ziontechgroup.com / og - image.jpg",
  no_index = false,
}) => {
  const json_ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com / logo.png",
    description: description,
    address: {
      "@type": "PostalAddress",
      street_address: "364 E Main St STE 1008",
      address_locality: "Middletown",
      address_region: "DE",
      postal_code: "19709",
      address_country: "US",
    },
    contact_point: {
      "@type": "ContactPoint",
      telephone: "+1 - 302 - 464 - 0950",
      contact_type: "customer service",
      email: "kleber@ziontechgroup.com",
    },
  }
;
  return (
    <div className="min - h-screen bg - white">;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        {canonical && <link rel="canonical" href={canonical} />}
<<<<<<< HEAD

=======


=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import React, { ReactNode } from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>

  );
}
export default Layout;

import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          dangerouslySetInnerHTML={{ __html: JSON && JSON.stringify(jsonLd) }}
        />;
      </Head>;
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>;
  );
};
=======
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
import React, { ReactNode } from "react";

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
interface LayoutProps {
  children: ReactNode,
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
<<<<<<< HEAD
<<<<<<< HEAD





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  );
}
export default Layout;
=======
=======
<<<<<<< HEAD
  );
}
export default Layout;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {no_index && <meta name="robots" content="noindex, nofollow" />}
        {/* Open Graph */}
        <meta property="og:title" content={og_title || title} />;
        <meta;
          property="og:description";
          content={og_description || description}
        />;
        <meta property="og:image" content={og_image} />;
        <meta property="og:url" content={canonical} />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={og_title || title} />;
        <meta;
          name="twitter:description";
          content={og_description || description}
        />;
        <meta name="twitter:image" content={og_image} />;
        {/* JSON - LD */}
        <script;
          type="application / ld + json";
          dangerouslySetInnerHTML={{ __html: JSON.stringify (json_ld) }}
        />;
      </Head>;
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </main>

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  );
};
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default Layout;
<<<<<<< HEAD

=======
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  );
}
export default Layout;
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </main>
  );
};
export default Layout;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
