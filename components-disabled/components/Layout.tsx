import React from 'react';
import Head from 'next/head';
interface LayoutProps {
  // TODO: Implement
}
  children: React.ReactNode;
  title?: string;
  description?: string;

export default function Layout({ children, title = "Zion Tech Group", description = "Leading technology solutions provider" }: LayoutProps) {"
class ErrorBoundary extends React.Component {
  // TODO: Implement
  constructor(props) {
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };

  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
const Layout: React.FC < LayoutProps> = ({
  children,
  title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",""
  description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",""
  keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",""
  canonical = "https://ziontechgroup.com","
  og_title,
  og_description,"
  og_image = "https://ziontechgroup.com / og - image.jpg","
  no_index = false,)
}) => {
  const json_ld = {"
    "@context": "https://schema.org",""
    "@type": "Organization",""
    name: "Zion Tech Group",""
    url: "https://ziontechgroup.com",""
    logo: "https://ziontechgroup.com / logo.png","
    description: description,
    address: {"
      "@type": "PostalAddress",""
      street_address: "364 E Main St STE 1008",""
      address_locality: "Middletown",""
      address_region: "DE",""
      postal_code: "19709",""
      address_country: "US"},"
    contact_point: {"
      "@type": "ContactPoint",""
      telephone: "+1 - 302 - 464 - 0950",""
      contact_type: "customer service",""
      email: "kleber@ziontechgroup.com"},"
;
  return ("
    <div className="min - h-screen bg - white">;"
</div>
      <Head>;

        <title>{title}</title>;"
        <meta name="description" content={description} />;"
</meta>"
        <meta name="keywords" content={keywords} />;"
        {canonical && <link rel="canonical" href={canonical} />}"
</link>
        <meta;"
          property="og:description""
          content={ogDescription || description}
        />;
        <meta property="og:image" content={ogImage} />;"
        <meta property="og:url" content={canonical} />;"
        <meta property="og:type" content="website" />;"
        <meta name="twitter:card" content="summary_large_image" />;"
        <meta name="twitter:title" content={ogTitle || title} />;"
</meta>
          name="twitter:description""
        <meta name="twitter:image" content={ogImage} />;"
        <script;"
          type="application/ld+json""
      <Header />;
</script>
      <main>{children}</main>;
      <Footer />;

    </div>;)
const Layout: React.FC<LayoutProps> = ({ children }) => {
"
    <main className="min-h-screen">"
</main>
    </main>"
        {no_index && <meta name="robots" content="noindex, nofollow" />}"
        <meta property="og:title" content={og_title || title} />;"
          property="og:description";"
          content={og_description || description}
        <meta property="og:image" content={og_image} />;"
        <meta name="twitter:title" content={og_title || title} />;"
          name="twitter:description";"
        <meta name="twitter:image" content={og_image} />;"
          type="application / ld + json";"
          dangerouslySetInnerHTML={{ __html: JSON.stringify (json_ld) }}


    </div>);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"

}
return (;
    <main className="min-h-screen">"
      {children  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"
    } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"

  } catch (error) {
    }
    console.error(""Error":", error);"
    return res.status(500).json({ "error": "Internal server error" });"

    </main>
  );
};
export default Layout;
import React, { useState } from 'react';'
import Header from './Header';'
import Footer from './Footer';'
import Sidebar from './Sidebar';'
import Link from 'next/link';'
import { motion, AnimatePresence } from 'framer-motion';'
import { 
  }
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
} from 'lucide-react';'

interface LayoutProps {
  }
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  "children": React.ReactNode;

export default function Layout() {
  }
  const [sidebarOpen, setSidebarOpen] = useState(false);

return (;
=======
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    <>
      <Head>

        <title>{title}</title>"
        <meta name="description" content={description} />"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
        <link rel="icon" href="/favicon.ico" />"
      <div className="min-h-screen bg-gray-50">"
    </>
  );