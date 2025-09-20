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
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
}
const Layout: React.FC < LayoutProps> = ({children,title = "Zion Tech Group - AI, IT & Micro SaaS Solutions",description = "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",keywords = "AI services, IT solutions, micro SaaS, technology consulting, digital transformation",canonical = "https://ziontechgroup.com",og_title,og_description,og_image = "https://ziontechgroup.com / og - image.jpg",no_index = false;
  no_index = false;
  no_index = false;
}) => {const json_ld = {"@context": "https://schema.org","@type": "Organization",name: "Zion Tech Group",url: "https://ziontechgroup.com",logo: "https://ziontechgroup.com / logo.png",description: description,address: {"@type": "PostalAddress",street_address: "364 E Main St STE 1008",address_locality: "Middletown",address_region: "DE",postal_code: "19709",address_country: "US";
      address_country: "US";
      address_country: "US";
    },contact_point: {"@type": "ContactPoint",telephone: "+1 - 302 - 464 - 0950",contact_type: "customer service",email: "kleber@ziontechgroup.com";
    }
      email: "kleber@ziontechgroup.com";
    }
      email: "kleber@ziontechgroup.com";
    }
  }return (<div className="min - h-screen bg - white">;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        {canonical && <link rel="canonical" href={canonical} />}
        <meta;
          property="og:description";
          content={ogDescription || description}
        />;
        <meta property="og:image" content={ogImage} />;
        <meta property="og:url" content={canonical} />;
        <meta property="og:type" content="website" />;
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={ogTitle || title} />;
        <meta;
          name="twitter:description";
          content={ogDescription || description}
        />;
        <meta name="twitter:image" content={ogImage} />;
        {/* JSON-LD */}
        <script;
          type="application/ld+json";
      <Header />;
      <main>{children}</main>;
      <Footer />;
    </div>;
  children: ReactNode;
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {return (<main className="min-h-screen">;
      {children}
    </main>;
import React, { ReactNode } from 'react';
interface LayoutProps  {children: ReactNode;
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
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
    </div>)}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
const Layout: React.FC<LayoutProps> = ({ children }) => {return (<main className="min-h-screen">;
      {children  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })} catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
  } catch (error) {console.error("Error:", error)return res.status(500).json({ error: "Internal server error" })}
}
    </main>;
  )}export default Layout;
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
import Sidebar from './Sidebar';
import Link from 'next/link';
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  children: React.ReactNode;
}export default function Layout() {const [sidebarOpen, setSidebarOpen]  = useState(false)ursor/automate-test-improve-and-merge-code-646c;
  return (<>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        {children}
      </div>;
    </>;
  )}
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={ogTitle || title} />;
        <meta property="og:description" content={ogDescription || description} />;
        <meta property="og:image" content={ogImage} />;
        <meta property="og:url" content={ogUrl || "https://ziontechgroup.com"} />;
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={ogTitle || title} />;
        <meta name="twitter:description" content={ogDescription || description} />;
        <meta name="twitter:image" content={ogImage} />;
        <link rel="icon" href="/favicon.ico" />;
        <link rel="canonical" href={ogUrl || "https://ziontechgroup.com"} />;
      </Head>;
      <div className="min-h-screen flex flex-col bg-gray-50">;
        <Header />;
        <main className="flex-1">;
          {children}
        </main>;
        <Footer />;
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />;
      </div>;
    </>;
  )}interface LayoutProps  {children: ReactNode;
}const Layout: React.FC<LayoutProps> = ({ children }) => {return (<main className="min-h-screen">;
      {children}
    </main>;
    <main className="min-h-screen">;
      {children}
    </main>;
    <div className="min-h-screen flex flex-col">;
      <Navigation />;
      <main className="flex-1">{children}</main>;
      <Footer />;
    </div>;
  )}export default Layout;ursor/automate-test-improve-and-merge-code-646c;
}
export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation",
  ogImage = "https://ziontechgroup.com/og-image.jpg",
  ogTitle,
  ogDescription,
  ogUrl
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
>>>>>>> aaa4dbfa8914e015974b0b47997c74f299c51923
=======
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
