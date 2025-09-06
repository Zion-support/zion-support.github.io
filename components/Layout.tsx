<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
>>>>>>> origin/automation-improvements-final
=======
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20

=======
<<<<<<< HEAD
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
>>>>>>> origin/main
=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noIndex?: boolean;
}
const Layout: React.FC<LayoutProps> = ({
  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical = "https://ziontechgroup.com"
  ogTitle
  ogDescription
  ogImage = "https://ziontechgroup.com/og-image.jpg"
  noIndex = false
}) => {
  const jsonLd = {
    "@context": "https://schema.org"
    "@type": "Organization"
    name: "Zion Tech Group"
    url: "https://ziontechgroup.com"
    logo: "https://ziontechgroup.com/logo.png"
    description: description
    address: {
      "@type": "PostalAddress"
      streetAddress: "364 E Main St STE 1008"
      addressLocality: "Middletown"
      addressRegion: "DE"
      postalCode: "19709"
      addressCountry: "US"
    }
    contactPoint: {
      "@type": "ContactPoint"
      telephone: "+1-302-464-0950"
      contactType: "customer service"
      email: "kleber@ziontechgroup.com"
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {canonical && <link rel="canonical" href={canonical} />}
        {noIndex && <meta name="robots" content="noindex,nofollow" />}
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle |title} />
        <meta
          property="og:description"
          content={ogDescription |description}
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle |title} />
        <meta
          name="twitter:description"
          content={ogDescription |description}
        />
        <meta name="twitter:image" content={ogImage} />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
=======
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode,
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
  );
}
export default Layout;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
  );
};
export default Layout;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======
  );
};

export default Layout;
>>>>>>> origin/main
>>>>>>> cursor/integrate-build-improve-and-re-verify-8b20
