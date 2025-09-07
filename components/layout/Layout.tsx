<<<<<<< HEAD
=======


<<<<<<< HEAD
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
import React from 'react';
import React, { ReactNode } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
;

import React, { ReactNode } from 'react';
import React from 'react';
import React from 'react';
import React, { ReactNode } from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
import Header from '../Header';
import Footer from '../Footer';

import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';



=======
import React from 'react';
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

<<<<<<< HEAD
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
=======
  canonical?: string;
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import Header from '../Header';
import Footer from '../Footer';


>>>>>>> origin/automation-improvements-final
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


import React from 'react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
import React from 'react';
interface LayoutProps {
  children: React.ReactNode;
interface LayoutProps {;
  children: React && React.ReactNode;
<<<<<<< HEAD
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  title?: string;
  description?: string;
  keywords?: string;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
}

export default function Layout({ 
  children, 
<<<<<<< HEAD
  title = "Zion Tech Group", 
  description = "Leading technology solutions provider" 
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>
=======
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  canonical = "https://ziontechgroup.com",
  og_title,
  og_description,
  og_image = "https://ziontechgroup.com/og-image.jpg",
  no_index = false
}: LayoutProps) {
  const json_ld = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Zion Tech Group",
    url: "https://ziontechgroup.com",
    logo: "https://ziontechgroup.com/logo.png",
    description: description,
    address: {
      "@type": "PostalAddress",
      street_address: "364 E Main St STE 1008",
      address_locality: "Middletown",
      address_region: "DE",
      postal_code: "19709",
      address_country: "US"
    },
    contact_point: {
      "@type": "ContactPoint",
      telephone: "+1-302-464-0950",
      contact_type: "customer service",
      email: "kleber@ziontechgroup.com"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}  />
        <meta name="keywords" content={keywords}  />
        {canonical && <link rel="canonical" href={canonical}  />}
        {no_index && <meta name="robots" content="noindex, nofollow"  />}
        
        {/* Open Graph */}
        <meta property="og:title" content={og_title || title}  />
        <meta property="og:description" content={og_description || description}  />
        <meta property="og:image" content={og_image}  />
        <meta property="og:url" content={canonical}  />
        <meta property="og:type" content="website"  />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image"  />
        <meta name="twitter:title" content={og_title || title}  />
        <meta name="twitter:description" content={og_description || description}  />
        <meta name="twitter:image" content={og_image}  />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(json_ld) }}
         />
      </Head>
      
      <Header  />
      <main>{children}</main>
      <Footer  />
=======
<<<<<<< HEAD
}

ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final
=======

}


=======
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function Layout({
  children
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions"
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses."
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation"
  canonical
  ogTitle
  ogDescription
  ogImage
  noIndex = false
}: LayoutProps) {
<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({ children }) => {

const Layout: React.FC<LayoutProps> = ({ children }) => {



const Layout: React.FC<LayoutProps> = ({ children }) => {
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
=======

=======
const Layout: React.FC<LayoutProps> = ({ children }) => {

export default function Layout(): any ({;
  children,;
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",;
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",;
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",;
  canonical,;
  ogTitle,;
  ogDescription,;
  ogImage,;
  noIndex = false;
}: LayoutProps) {;

=======



>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <div className="min-h-screen bg-white">;
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
    <div className="min - h-screen bg - white">;
      <Header />;
      <main>;
        {children}
<<<<<<< HEAD
    </div>);
      </main>
      <Footer />
    </div>;
  );
}
;
=======
<<<<<<< HEAD
      </main>;
      <Footer />;

    </div>);
}
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default Layout;
import React from 'react;
import Header from './Header;
import Footer from './Footer;


  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;


<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, }; export default function Layout({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
type LayoutProps = {children: React && React.ReactNode;
};
  children: React && React.ReactNode}
export: default function Layout() {;
  return: <div>{children}</div>;
React from";
  "react""import Footer from "react";
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer
export default function Layout({ children }: LayoutProps) {return (;
  "./Footer"import Footer  from "react./Footer,;
export default function Layout({ children }: LayoutProps) {;
  return (;
<div className="min-h-screen flex flex-col>      <Header />"      <main className="flex-1 pt-16>        {children}"      </main><Footer />;
    </div>;
  )"; type: LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div>; type LayoutProps = { children: React && React.ReactNode, }; export default function Layout(): any ({ children }: LayoutProps) { return <div>{children}</div> } " ;
}}
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
export default function Layout({
  children,
  title = "Zion Tech Group",
  description = "Leading technology solutions provider",
  keywords = "technology, AI, cloud, micro SaaS"
}: LayoutProps) {
  return (
=======
<<<<<<< HEAD
  "./Footer"import Footer  from "react./Footer,;
export default function Layout(): any ({ children }: LayoutProps) {;
  return (

export: default /**
 * Layout - Function description
 */
function Layout() {
;
  return: <div>{children}</div>;
React from";
  "react""import Footer from './react';
  "./Footer"import Footer  from "react./Footer,
export default /**
 * Layout - Function description
 */
function Layout() {
  return (
<div className="min - h-screen flex flex - col>      <Header />"      <main className="flex - 1 pt - 16>        {children}"      </main><Footer />;
    </div>)"; type: LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div>; type LayoutProps = { children: React.ReactNode, } export default /**
 * Layout - Function description
 */
function Layout() { return <div>{children}</div> } " ;
}}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    <div className="min-h-screen bg-gray-50">
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
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>
>>>>>>> origin/chore/fix-lint-and-merge
  );
<<<<<<< HEAD
}
=======
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

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
