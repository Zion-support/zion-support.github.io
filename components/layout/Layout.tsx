import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
<<<<<<< HEAD

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children,
  title = 'Zion Tech Group',
  description = 'Leading AI and technology solutions',
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={type} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
=======
import Header from './Header';
import Footer from './Footer';

interface LayoutProps  {children: React.ReactNode;

interface LayoutProps  {children: React && React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;

export default function Layout() {return (<div className=\"min-h-screen bg-white\" />;

export default /**;
 * Layout - Function description;
 */;
function Layout() {return (<div className=\"min - h-screen bg - white\" />;}
      <Header />;}
      <main />;\"./Footer\"import Footer  from \"react./Footer,export default function Layout() {return (<div className=\"min-h-screen flex flex-col />      <Header />\"      <main className=\"flex-1 pt-16 />        {children}\"      </main><Footer />;
    </div>;
  )\"; type: LayoutProps = { children: React.ReactNode;}
}

export default function Layout({ children }: LayoutProps) { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}

export default function Layout({ children }: LayoutProps) { return <div />{children}</div> } \" ;
  )\"; type: LayoutProps = { children: React.ReactNode;}
}

export default function Layout({ children }: LayoutProps) { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}

export default function Layout({ children }: LayoutProps) { return <div />{children}</div> } \" ;
}}
    <div className=\"min-h-screen bg-white\" />;

export default /**;
 * Layout - Function description;
 */;
function Layout() {return (<div className=\"min - h-screen bg - white\" />;}
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
function Layout() {return: <div />{childre,}
}</div>;
React from';
  \"react\"\"import Footer from './react';
  \"./Footer\"import Footer  from \"react./Footer,export default /**;
 * Layout - Function description;
 */;
function Layout() {return (<div className=\"min - h-screen flex flex - col />      <Header />\"      <main className=\"flex - 1 pt - 16 />        {children}\"      </main><Footer />;
    </div>)\"; type: LayoutProps = { children: React.ReactNode;}
}

export default /**;
 * Layout - Function description;
 */;
function Layout() { return <div />{children}</div>;

type LayoutProps = { children: React.ReactNode;}
}

export default /**;
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
 */;
function Layout() { return <div />{children}</div> } \" ;
}}ursor/automate-test-improve-and-merge-code-646c;

interface LayoutProps {
  children: React.ReactNode;
  title?: string;}
  description?: string;}
}

export default function Layout() {return (<>;}
      <Head />;}
        <title />{title}</title>;
        <meta name=\"description\" content={description} />;
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;
        <link rel=\"icon\" href=\"/favicon.ico\" />;
      </Head>;
      <div className=\"min-h-screen bg-gray-50\" />;
        {children}
      </div>;
    </>;
  )}
  keywords?: string;
}

export default function Layout() {return (<div className=\"min-h-screen bg-gray-50\" />;}
      {children}
    </div>;
  )}

interface LayoutProps {
  children: ReactNode;}
}
}

const Layout: React.FC<LayoutProps /> = ({ children   ,}
}) => {


return (<div className=\"min-h-screen flex flex-col\" />;
      <Header />;}
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

export default function Layout({ children, title = \"Zion Tech Group\", description = \"Leading technology solutions provider\" }: LayoutProps) {
 ;
  return (
    <>}
      <Head />}
        <title />{title}</title>
        <meta name=\"description\" content={description} />
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />
        <link rel=\"icon\" href=\"/favicon.ico\" />
      </Head>
      <div className=\"min-h-screen bg-gray-50\" />
        {children}
      </div>
>>>>>>> cursor/automate-test-improve-and-merge-code-064d
    </>
  );
};

export default Layout;