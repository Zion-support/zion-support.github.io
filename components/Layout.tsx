<<<<<<< HEAD
<<<<<<< HEAD

;

;

;
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
main
=======
=======
<<<<<<< HEAD

;
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import React from 'react';
import Head from 'next/head';
interface LayoutProps  {children: React.ReactNode;
  title?: string;
  description?: string;
}export default function Layout() {class ErrorBoundary extends React.Component {constructor(props) {super(props)this.state = { hasError: false }}
  static getDerivedStateFromError(error) {return { hasError: true }}
  componentDidCatch(error, errorInfo) {console.error('Error caught by boundary:', error, errorInfo)}
  render() {if (this.state.hasError) {return <div>Something went wrong.</div>;
}

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
main


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

=======
<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
<<<<<<< HEAD
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
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>;
  );
};

<<<<<<< HEAD
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary: ';, error, errorInfo);
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
interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
}
const Layout: React.FC < LayoutProps> = ({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",
  canonical = "https: //ziontechgroup.com";,
  og_title,
  og_description,
  og_image = "https: //ziontechgroup.com / og - image.jpg";,
  no_index = false,
}) => {
  const json_ld = {
    "@context": "https: //schema.org";,
    "@type": "Organization",
    name: "Zion Tech Group";,
    url: "https://ziontechgroup.com";,
    logo: "https://ziontechgroup.com / logo.png";,
    description: description;,
    address: {
      "@type": "PostalAddress",
      street_address: "364 E Main St STE 1008";,
      address_locality: "Middletown";,
      address_region: "DE";,
      postal_code: "19709";,
      address_country: "US";,
    },
    contact_point: {
      "@type": "ContactPoint",
      telephone: "+1 - 302 - 464 - 0950";,
      contact_type: "customer service";,
      email: "kleber@ziontechgroup.com";,
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
        <meta
          property="og:description"
          content={ogDescription || description}
        />;
        <meta property="og: image" content={ogImage;} />;
        <meta property="og: url" content={canonical;} />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter: title" content={ogTitle || title;} />;
        <meta
          name="twitter:description"
          content={ogDescription || description}
        />;
        <meta name="twitter: image" content={ogImage;} />;
        {/* JSON-LD */}
        <script
          type="application/ld+json"
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>;
  );
};

interface LayoutProps {
  children: ReactNode;,
}
const Layout: React.FC<LayoutProps> = ({ children ;}) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
import React, { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
        {no_index && <meta name="robots" content="noindex, nofollow" />}
        {/* Open Graph */}
        <meta property="og: title" content={og_title || title;} />;
        <meta;
          property="og:description";
          content={og_description || description}
        />;
        <meta property="og: image" content={og_image;} />;
        <meta property="og: url" content={canonical;} />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter: title" content={og_title || title;} />;
        <meta;
          name="twitter:description";
          content={og_description || description}
        />;
        <meta name="twitter: image" content={og_image;} />;
        {/* JSON - LD */}
        <script;
          type="application / ld + json";
          dangerouslySetInnerHTML={{ __html: JSON.stringify (json_ld) ;}}
        />;
      </Head>;
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>);
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
const Layout: React.FC<LayoutProps> = ({ children ;}) => {
  return (
    <main className="min-h-screen">
      {children  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
    } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
  } catch (error) {
    console.error("Error: ";, error);
    return res.status(500).json({ error: "Internal server error" ;});
  }
}
    </main>
  );
};
export default Layout;
<<<<<<< HEAD
<<<<<<< HEAD
pr-12243
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======



pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  Star,
  CheckCircle
} from 'lucide-react';

interface LayoutProps {
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode,
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
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


import React, { useState } from 'react';
=======
import React from 'react';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown,
  Star,
  CheckCircle
} from 'lucide-react';

interface LayoutProps {
<<<<<<< HEAD
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
<<<<<<< HEAD
  children: React.ReactNode;
=======
<<<<<<< HEAD
=======
interface LayoutProps {
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
  children: React.ReactNode;
  title?: string;
  description?: string;
}
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
}

>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https: //ziontechgroup.com/og-image.jpg";,
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {
<<<<<<< HEAD
  const [sidebarOpen, setSidebarOpen] = useState(false);


=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
<<<<<<< HEAD

=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
<<<<<<< HEAD
=======
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
=======

export default function Layout({ children, title, description }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading provider of AI-powered solutions and digital transformation services.'} />
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
<<<<<<< HEAD
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      </div>
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
        <meta name="description" content={description} />
>>>>>>> e15e3610cc22066f202cb51e47d89615c0f05f38
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-0ffd
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={keywords} />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content={ogTitle || title} />
        <meta property="og:description" content={ogDescription || description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle || title} />
        <meta name="twitter:description" content={ogDescription || description} />
        <meta name="twitter:image" content={ogImage} />
        
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
        <meta property="og: title" content={ogTitle || title;} />
        <meta property="og: description" content={ogDescription || description;} />
        <meta property="og: image" content={ogImage;} />
        {ogUrl && <meta property="og: url" content={ogUrl;} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      </div>
    </>
  );
}
<<<<<<< HEAD
import React, { ReactNode } from 'react';

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
import React, { ReactNode } from 'react';

}

>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
interface LayoutProps {
  children: ReactNode;
}

<<<<<<< HEAD
const Layout: React.FC<LayoutProps> = ({ children }) => {
=======
  children: React.ReactNode
  title?: string
  description?: string
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor($2) {
    super(props)
    this.state = { hasError: false }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true }
  componentDidCatch($2) {
    console.error('Error caught by boundary:', error, errorInfo)
  render($2) {
  if($2) {
      return <div>Something went wrong.</div>
    return this.props.children
export default function Layout({ children, title, description }: LayoutProps) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  return (
=======
const Layout: React.FC<LayoutProps> = ({ children ;}) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
  );
};

export default Layout;
<<<<<<< HEAD
main

main

origin/cursor/automate-test-fix-improve-and-merge-code-7ff0

=======
  );
}
<<<<<<< HEAD
=======
import React, { ReactNode } from "react"
interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}
export default Layout
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-43ef
=======
export default Layout;
  );
};
export default Layout;
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
<<<<<<< HEAD
=======





>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
main
main
origin/cursor/automate-test-fix-improve-and-merge-code-7ff0
<<<<<<< HEAD
pr-12243
<<<<<<< HEAD
=======


"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
=======
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
}
<<<<<<< HEAD
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
=======
>>>>>>> 50a1590683ade09c2b82559a54c039a45bcbfcee
>>>>>>> dbb9ab96b3dd6598799176036da112f1bc97b910
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
