import React, { ReactNode,
  from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import Header from '../Header';
import Footer from '../Footer';
=======
>>>>>>> origin/main
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
<<<<<<< HEAD
export default function Layout() {return (
    <div className=\"min-h-screen bg-white\" />;
export default /**;
 * Layout - Function description;
 */;"
function Layout() {return (
    <div className=\"min - h-screen bg - white\" />;}
      <Header />;}"
      <main />;\"./Footer\"import Footer  from \"react./Footer,export default function Layout() {return (
    <div className=\"min-h-screen flex flex-col />      <Header />\"      <main className=\"flex-1 pt-16 />        {children}\"      </main><Footer />;
    </div>;"
  )\"; type: LayoutProps = { children: React.ReactNode;}
}
export default function Layout({ children }: LayoutProps) { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}
"
export default function Layout({ children }: LayoutProps) { return <div />{children}</div> } \" ;"
  )\"; type: LayoutProps = { children: React.ReactNode;}
}
export default function Layout({ children }: LayoutProps) { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}
"
export default function Layout({ children }: LayoutProps) { return <div />{children}</div> } \" ;
}}"
    <div className=\"min-h-screen bg-white\" />;
export default /**;
 * Layout - Function description;
 */;"
function Layout() {return (
    <div className=\"min - h-screen bg - white\" />;}
      <Header />;}
      <main />{children}
      </main>;
      <Footer />;
export default Layout;
import React from 'react;
import Header from ';./Header;
import Footer from './Footer;
export: default /**;
 * Layout - Function description;
 */;
function Layout() {return: <div />{childre}
}</div>;
React from';"
  \"react\"\"import Footer from './react';"
  \"./Footer\"import Footer  from \"react./Footer,export default /**;
 * Layout - Function description;
 */;"
function Layout() {return (
    <div className=\"min - h-screen flex flex - col />      <Header />\"      <main className=\"flex - 1 pt - 16 />        {children}\"      </main><Footer />;"
    </div>)\"; type: LayoutProps = { children: React.ReactNode;}
}
export default /**;
 * Layout - Function description;
 */;
function Layout() { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}
export default /**;"
    </div>)\"; type: LayoutProps = { children: React.ReactNode;}
}
export default /**;
 * Layout - Function description;
 */;
function Layout() { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}
export default /**;
 * Layout - Function description;
 */;"
function Layout() { return <div />{children}</div> } \" ;
}}ursor/automate-test-improve-and-merge-code-646c;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;}
  description?: string;}
}
export default function Layout() {return (<>;}
      <Head />;}
        <title />{title}</title>;"
        <meta name=\"description\" content={description} />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;"
        <link rel=\"icon\" href=\"/favicon.ico\" />;
      </Head>;"
      <div className=\"min-h-screen bg-gray-50\" />;
        {children}
      </div>;
    </>;
  )}
  keywords?: string;
}
"
export default function Layout() {return (
    <div className=\"min-h-screen bg-gray-50\" />;}
      {children}
    </div>;
  )}

interface LayoutProps {
  children: ReactNode;}
}
}

const Layout: React.FC<LayoutProps /> = ({ children   }
}) => {

"
return (
    <div className=\"min-h-screen flex flex-col\" />;
      <Header />;}"
      <main className=\"flex-1\" />;}
        {children}
      </main>;
      <Footer />;
    </div>;
  )}
export default Layout;ursor/automate-test-improve-and-merge-code-646c;
}}

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;}
}
}
"
export default function Layout({ children, title = \"Zion Tech Group\",,
  description = \"Leading technology solutions provider\"  }: LayoutProps) {
 ;
=======
<<<<<<< HEAD
=======
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_image?: string;
  no_index?: boolean;
>>>>>>> origin/chore/fix-lint-and-merge
}

export default function Layout({ 
  children, 
<<<<<<< HEAD
  title = "Zion Tech Group", 
  description = "Leading technology solutions provider" 
}: LayoutProps) {
>>>>>>> origin/main
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
<<<<<<< HEAD
  );
};
export default Layout;"
=======
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
    </div>
>>>>>>> origin/chore/fix-lint-and-merge
  );
}
>>>>>>> origin/main
