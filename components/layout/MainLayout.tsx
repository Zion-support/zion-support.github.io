<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc


;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
=======


<<<<<<< HEAD
;
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
<<<<<<< HEAD
import React from 'react';
import Layout from './Layout';
;
import React from 'react';
import Layout from './Layout';
import React from 'react';
import Layout from './Layout';
import React from 'react';
import Layout from './Layout';

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d


;
origin/main
origin/automation-improvements-final
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps /> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical;}
=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical;}
>>>>>>> origin/chore/fix-lint-and-merge
   }) => {

return (<>;}
      <Head>;}
        <title />{title || 'Zion Tech Group'}</title>;
        <meta name=\"description\" content={description || 'Leading technology solutions provider'} />;"
        {keywords && <meta name=\"keywords\" content={keywords} />}
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
import Layout from './Layout';

import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
=======
import React from 'react';
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
import Layout from './Layout';

<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from './Footer';

interface MainLayoutProps {
  title: string,
  description: string,
  children: React.ReactNode,
  title: string;
  description: string;
  children: React.ReactNode;
=======
return (<>;}
      <Head    />;}
        <title    />{title || 'Zion Tech Group'}</title>;
        <meta name=\"description\" content={description || 'Leading technology solutions provider'}    />;"
        {keywords && <meta name=\"keywords\" content={keywords}    />}
import Layout from './Layout';

interface MainLayoutProps {
  interface MainLayoutProps  {children: ReactNode, title?: string,  description?: string;
>>>>>>> origin/chore/fix-lint-and-merge
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
<<<<<<< HEAD
  canonical?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  children;
  title = "Zion Tech Group - Leading Technology Solutions Provider";
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.";
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development";
  image;
  url;
  type = 'website';
=======
  type?: string;
  image?: string;}
  url?: string;}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({children;
  title = 'Zion Tech Group - Technology Solutions';
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.';
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions';
  canonical;
>>>>>>> origin/chore/fix-lint-and-merge
  noindex = false;
  nofollow = false;
  canonical;
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

type = 'website';
  image = '/og-image.jpg';
  url;
ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD
import React from react';
import Header from './Header;
import Footer from ./Footer';
=======

import React from 'react';
import Head from 'next/head';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {
  children: React.ReactNode;

  keywords?: string;
  canonical?: string;}
}
}

export default function MainLayout() {ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD

=======
  return (<>;}
      <Head    />;}
        <title    />{title}</title>;"
        <meta name=\"description\" content={description}    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;
  children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og - image.jpg',url;"
  return ({image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
  ogImage = '/og-image.jpg';
}) =    /> {return (const MainLayout: React.FC<MainLayoutProps    /> = ({children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og-image && image.jpg',url;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon && favicon.ico\"    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;}"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
      </Head    />;
        <Header    />;"
        <main className=\"flex-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
    <   />;
  )export default MainLayout;
      </Head>;
<<<<<<< HEAD

=======
        <Header    />;"
        <main className=\"flex - 1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
<<<<<<< HEAD
</>)export default MainLayout;

=======
<   />)export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',og_image = '/og - image.jpg';
}) => {return (<>;}
      <Head    />;}
        <title    />{title}</title>;"
        <meta name=\"description\" content={description}    />;"
        <meta name=\"keywords\" content={keywords}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        <meta property=\"og: image\" content={og_imag}
}    />;"
        <meta property=\"og:type\" content=\"website\"    />;"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;
      </Head>;"
      <div className=\"min - h-screen bg - white\"    />;
        {children}
      </div>;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

<<<<<<< HEAD
=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {
>>>>>>> origin/chore/fix-lint-and-merge

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}

<<<<<<< HEAD
interface MainLayoutProps {
  }
  "children": React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}


} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
=======
export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}

>>>>>>> origin/chore/fix-lint-and-merge
export default MainLayout;
    <   />)}

export default MainLayout;
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-646c;

=======
ursor/automate-test-improve-and-merge-code-646c;"
        <meta name=\"keywords\" content={keywords}    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;
      </Head>;
import React, { ReactNode } from 'react';
import Footer from './Footer';
import SEOHead from '../SEOHead';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;}
}
}

<<<<<<< HEAD

=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children, title, description    }) => {

}
return (<>;}
      <SEOHead title={title} description={description}    />;"
      <div className=\"min-h-screen flex flex-col\"    />;
        <Header    />;"
        <main className=\"flex-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
    <   />;
  )}}

export default MainLayout;ursor/automate-test-improve-and-merge-code-646c;
}
export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "AI solutions, IT services, micro SaaS, technology consulting",
  canonical 
}: MainLayoutProps) {

<<<<<<< HEAD
pr-12243




  children: ReactNode;
import React from 'react';
import Head from 'next/head';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}


<<<<<<< HEAD
=======
=======
import Layout from './Layout';


>>>>>>> origin/automation-improvements-final
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

interface MainLayoutProps {
interface MainLayoutProps {;
>>>>>>> merged-prs-20250907-203621
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}


<<<<<<< HEAD
export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
  return (
    <Layout title={title} description={description} keywords={keywords}>
      {children}
    </Layout>
  );
}
origin/automation-improvements-final
=======
=======


>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const MainLayout: React.FC<MainLayoutProps> = ({
  children
  title = 'Zion Tech Group - Technology Solutions'
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.'
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions'
  canonical
  noindex = false
  nofollow = false
  type = 'website'
  image = '/og-image.jpg'
  url





<<<<<<< HEAD
ursor/integrate-build-improve-and-re-verify-8f7d
export default function MainLayout({ title, description, children, keywords, canonical }: MainLayoutProps) {
origin/main
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const MainLayout: React.FC < MainLayoutProps> = ({
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
</>
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  noindex = false,
  nofollow = false,
  canonical,
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
import Layout from './Layout';

<<<<<<< HEAD
<<<<<<< HEAD
import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Footer from './Footer';
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db

interface MainLayoutProps {
  children: React.ReactNode;
<<<<<<< HEAD
  title?: string;
  description?: string;
=======
=======
return (<>;}
      <Head    />;}
        <title    />{title || 'Zion Tech Group'}</title>;
        <meta name=\"description\" content={description || 'Leading technology solutions provider'}    />;"
        {keywords && <meta name=\"keywords\" content={keywords}    />}
import Layout from './Layout';

interface MainLayoutProps {
  interface MainLayoutProps  {children: ReactNode, title?: string,  description?: string;
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  nofollow?: boolean;
<<<<<<< HEAD
  canonical?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
=======
const MainLayout: React.FC<MainLayoutProps> = ({
  children;
  title = "Zion Tech Group - Leading Technology Solutions Provider";
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.";
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development";
  image;
  url;
  type = 'website';
=======
  type?: string;
  image?: string;}
  url?: string;}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({children;
  title = 'Zion Tech Group - Technology Solutions';
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.';
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions';
  canonical;
>>>>>>> origin/chore/fix-lint-and-merge
  noindex = false;
  nofollow = false;
  canonical;
}) => {
  return (
    <>
      <Head>
        <title>{title || 'Zion Tech Group'}</title>
        <meta name="description" content={description || 'Leading technology solutions provider'} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

type = 'website';
  image = '/og-image.jpg';
  url;
ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD
import React from react';
import Header from './Header;
import Footer from ./Footer';
=======

import React from 'react';
import Head from 'next/head';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {
  children: React.ReactNode;

  keywords?: string;
  canonical?: string;}
}
}

export default function MainLayout() {ursor/automate-test-improve-and-merge-code-646c;
<<<<<<< HEAD

=======
  return (<>;}
      <Head    />;}
        <title    />{title}</title>;"
        <meta name=\"description\" content={description}    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;
  children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og - image.jpg',url;"
  return ({image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
  ogImage = '/og-image.jpg';
}) =    /> {return (const MainLayout: React.FC<MainLayoutProps    /> = ({children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og-image && image.jpg',url;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon && favicon.ico\"    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;}"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
=======
  return (
    <>}
      <Head>}
        <title />{title}</title>"
        <meta name=\"description\" content={description} />"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />"
        <link rel=\"icon\" href=\"/favicon.ico\" />"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        {noindex && <meta name=\"robots\" content=\"noindex\" />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\" />}"
        <meta property=\"og: type\" content={type} />"
        <meta property=\"og:title\" content={title} />"
        <meta property=\"og:description\" content={descriptio}
} />
  children,
  title = Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.,
  keywords = technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website,
  image = /og - image.jpg',
=======
export default function MainLayout({ 
  title, 
  description, 
  children, "
  keywords = \"AI solutions, IT services, micro SaaS, technology consulting\"}
  canonical }
}: MainLayoutProps) {
 ;
  return (
    <>}
      <Head    />}
        <title    />{title}</title>"
        <meta name=\"description\" content={description}    />"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />"
        <link rel=\"icon\" href=\"/favicon.ico\"    />"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={type}    />"
        <meta property=\"og:title\" content={title}    />"
        <meta property=\"og:description\" content={descriptio}
}    />
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og - image.jpg',
>>>>>>> origin/chore/fix-lint-and-merge
  url;
  return (
<<<<<<< HEAD
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="viewport" content="width = device - width, initial - scale = 1" />;
        <link rel="icon" href="/favicon.ico" />;
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
      </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
</>
  );
}
}
const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og-image.jpg',
  url

}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}

        
        {/* Open Graph */}
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
      

      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>

</>
  );

};

export default MainLayout;
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  title = 'Zion Tech Group - Leading Technology Solutions Provider'
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services'
  title = 'Zion Tech Group - Leading Technology Solutions Provider'
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services'
=======


<<<<<<< HEAD
        <meta name="viewport" content=width=device-width, initial-scale=1 />
        <link rel="icon" href=/favicon.ico />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name=robots content="noindex" />}
        {nofollow && <meta name=robots content="nofollow" />}
        <meta property=og:type content={type} />;
        <meta property="og:title" content={title} />;
        <meta property=og:description content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property=og:url content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content=summary_large_image />;
        <meta name="twitter:title" content={title} />;
        <meta name=twitter:description content={description} />;
        {image && <meta name="twitter:image" content={image} />}

        {image && <meta property=""og": image" content={image} />}"
        {url && <meta property=""og":url" content={url} />}"
        {/* Twitter *
=======
<<<<<<< HEAD
"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
>>>>>>> origin/chore/fix-lint-and-merge
}
  ogImage = '/og-image.jpg';
}) =    /> {return (;

const MainLayout: React.FC<MainLayoutProps    /> = ({;
=======
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  ogImage = '/og-image.jpg';
}) => {return (;
const MainLayout: React.FC<MainLayoutProps> = ({;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  children,;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',;
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',;
  canonical,;
  noindex = false,;
  nofollow = false,;

<<<<<<< HEAD
type = 'website',;'
  image = '/og-image && image.jpg',;'
  url;
<<<<<<< HEAD
=======
  return (
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <meta property="og:type" content={type} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
      </Head>;
        <Header />;
        <main className="flex-1">;
      </Head>;
        <Header />;
        <main className="flex-1">;
=======
type = 'website',;
  image = '/og-image && image.jpg',;
  url;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon && favicon.ico\"    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />}"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
>>>>>>> merged-prs-20250907-203621
      </Head    />;
        <Header    />;"
        <main className=\"flex-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
<<<<<<< HEAD
    <   />;
  )export default MainLayout;
      </Head>;
<<<<<<< HEAD

=======
        <Header    />;"
        <main className=\"flex - 1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
=======
<<<<<<< HEAD
    <   />;
=======
    </>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  );
export default MainLayout;
<<<<<<< HEAD
=======
  title = 'Zion Tech Group - Leading Technology Solutions Provider',;
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',;
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',;
  ogImage = '/og-image && image.jpg';
}) => {;
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      </Head>;
        <Header    />;"
        <main className=\"flex - 1\"    />;
>>>>>>> merged-prs-20250907-203621
          {children}
        </main>;
        <Footer    />;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
</>)export default MainLayout;

=======
<   />)export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',og_image = '/og - image.jpg';
}) => {return (<>;}
=======
</>);
export default MainLayout;

=======
<   />);
;

export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  og_image = '/og - image.jpg';
}) => {
  return (
<<<<<<< HEAD
    <>;}
>>>>>>> merged-prs-20250907-203621
      <Head    />;}
        <title    />{title}</title>;"
        <meta name=\"description\" content={description}    />;"
        <meta name=\"keywords\" content={keywords}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        <meta property=\"og: image\" content={og_imag}
}    />;"
        <meta property=\"og:type\" content=\"website\"    />;"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;
      </Head>;"
      <div className=\"min - h-screen bg - white\"    />;
        {children}
      </div>;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
<<<<<<< HEAD
}

<<<<<<< HEAD
=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {
>>>>>>> origin/chore/fix-lint-and-merge

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}
=======
=======
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        <meta property="og:image" content={og_image} />;
        <meta property="og:type" content="website" />;
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
<<<<<<< HEAD
        <meta name="twitter:image" content={og_image} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;
=======

        <meta name="twitter:image" content={og_image} />;
        <link rel="canonical" href="https://ziontechgroup.com" />;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      </Head>;
      <div className="min - h-screen bg - white">;
        {children}
      </div>;
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
    </>);
}
export default MainLayout;




import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
=======


=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/automation-improvements-final
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
>>>>>>> fd9cd2d2f8d32fcc77768547645dd1d80b314e27
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </>);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}

<<<<<<< HEAD

>>>>>>> merged-prs-20250907-203621

<<<<<<< HEAD
interface MainLayoutProps {
  }
  "children": React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}


<<<<<<< HEAD
} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
=======
export default MainLayout;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}

>>>>>>> origin/chore/fix-lint-and-merge
export default MainLayout;
    <   />)}

export default MainLayout;
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-646c;

=======
ursor/automate-test-improve-and-merge-code-646c;"
        <meta name=\"keywords\" content={keywords}    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;
      </Head>;
import React, { ReactNode } from 'react';
import Footer from './Footer';
import SEOHead from '../SEOHead';
>>>>>>> origin/chore/fix-lint-and-merge
=======
=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
};

export default MainLayout;
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
};

export default MainLayout;
    <   />);
}

export default MainLayout;"
        <meta name=\"keywords\" content={keywords}    />"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />
>>>>>>> origin/chore/fix-lint-and-merge
      </Head>
      
>>>>>>> merged-prs-20250907-203621

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;}
}
}

<<<<<<< HEAD
<<<<<<< HEAD

=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children, title, description    }) => {

}
return (<>;}
      <SEOHead title={title} description={description}    />;"
      <div className=\"min-h-screen flex flex-col\"    />;
        <Header    />;"
        <main className=\"flex-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
    <   />;
  )}}

export default MainLayout;ursor/automate-test-improve-and-merge-code-646c;
}
export default function MainLayout({ 
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website', 
  noindex = false, 
  nofollow = false, 
  canonical 
<<<<<<< HEAD
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
=======
}: MainLayoutProps) {

<<<<<<< HEAD
pr-12243




  children: ReactNode;
import React from 'react';
import Head from 'next/head';

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}


>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const MainLayout: React.FC<MainLayoutProps> = ({

  return (
    <>}
      <Head>}
        <title />{title}</title>"
        <meta name=\"description\" content={description} />"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />"
        <link rel=\"icon\" href=\"/favicon.ico\" />"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        {noindex && <meta name=\"robots\" content=\"noindex\" />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\" />}"
        <meta property=\"og: type\" content={type} />"
        <meta property=\"og:title\" content={title} />"
        <meta property=\"og:description\" content={descriptio}
} />
  children,
  title = Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.,
  keywords = technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website,
  image = /og - image.jpg',
=======
export default function MainLayout({ 
  title, 
  description, 
  children, "
  keywords = \"AI solutions, IT services, micro SaaS, technology consulting\"}
  canonical }
}: MainLayoutProps) {
 ;
  return (
    <>}
      <Head    />}
        <title    />{title}</title>"
        <meta name=\"description\" content={description}    />"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />"
        <link rel=\"icon\" href=\"/favicon.ico\"    />"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={type}    />"
        <meta property=\"og:title\" content={title}    />"
        <meta property=\"og:description\" content={descriptio}
}    />
  children,
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og - image.jpg',
>>>>>>> origin/chore/fix-lint-and-merge
  url;
  return (


<<<<<<< HEAD
        <meta name="viewport" content=width=device-width, initial-scale=1 />
        <link rel="icon" href=/favicon.ico />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name=robots content="noindex" />}
        {nofollow && <meta name=robots content="nofollow" />}
        <meta property=og:type content={type} />;
        <meta property="og:title" content={title} />;
        <meta property=og:description content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property=og:url content={url} />}
        {/* Twitter */}
        <meta name="twitter:card" content=summary_large_image />;
        <meta name="twitter:title" content={title} />;
        <meta name=twitter:description content={description} />;
        {image && <meta name="twitter:image" content={image} />}

        {image && <meta property=""og": image" content={image} />}"
        {url && <meta property=""og":url" content={url} />}"
        {/* Twitter *
=======
"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
>>>>>>> origin/chore/fix-lint-and-merge
}
  ogImage = '/og-image.jpg';
}) =    /> {return (;

const MainLayout: React.FC<MainLayoutProps    /> = ({;
  children,;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',;
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',;
  canonical,;
  noindex = false,;
  nofollow = false,;

<<<<<<< HEAD
type = 'website',;'
  image = '/og-image && image.jpg',;'
  url;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}
        <meta property="og:type" content={type} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        {image && <meta property="og:image" content={image} />}
        {url && <meta property="og:url" content={url} />}
        {/* Twitter */}
<<<<<<< HEAD
=======
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Head>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
</>
  );
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {canonical && <link rel="canonical" href={canonical} />}
        {noindex && <meta name="robots" content="noindex" />}
        {nofollow && <meta name="robots" content="nofollow" />}

        {/* Open Graph */}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </>

  );

};

export default MainLayout;"
export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider'
  description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.'
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services'
  ogImage = '/og-image.jpg';
}) => {return (;
    <>;
      <Head>;
        <title>{title}</title>;
        <meta name="description" content={description} />;
        <meta name="keywords" content={keywords} />;
        <meta property="og:title" content={title} />;
        <meta property="og:description" content={description} />;
        <meta property="og:image" content={ogImage} />;
        <meta property="og:type" content="website" />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        <meta name="twitter:card" content="summary_large_image" />;
        <meta name="twitter:title" content={title} />;
        <meta name="twitter:description" content={description} />;
        {image && <meta name="twitter:image" content={image} />}
      </Head>;
        <Header />;
        <main className="flex-1">;
      </Head>;
        <Header />;
        <main className="flex-1">;
=======
type = 'website',;
  image = '/og-image && image.jpg',;
  url;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />;"
        <link rel=\"icon\" href=\"/favicon && favicon.ico\"    />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />}"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        {noindex && <meta name=\"robots\" content=\"noindex\"    />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\"    />}"
        <meta property=\"og: type\" content={typ}
}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        {image && <meta property=\"og: image\" content={image}    />}"
        {url && <meta property=\"og:url\" content={url}    />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
      </Head    />;
        <Header    />;"
        <main className=\"flex-1\"    />;
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>;
        <Footer    />;
      </div>;
    <   />;
  );

export default MainLayout;
      </Head>;
        <Header    />;"
        <main className=\"flex - 1\"    />;
          {children}
        </main>;
        <Footer    />;
      </div>;
<<<<<<< HEAD
</>);
export default MainLayout;

=======
<   />);
;

export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  og_image = '/og - image.jpg';
}) => {
  return (
    <>;}
      <Head    />;}
        <title    />{title}</title>;"
        <meta name=\"description\" content={description}    />;"
        <meta name=\"keywords\" content={keywords}    />;"
        <meta property=\"og: title\" content={titl}
}    />;"
        <meta property=\"og: description\" content={descriptio}
}    />;"
        <meta property=\"og: image\" content={og_imag}
}    />;"
        <meta property=\"og:type\" content=\"website\"    />;"
        <meta name=\"twitter:card\" content=\"summary_large_image\"    />;"
        <meta name=\"twitter: title\" content={titl}
}    />;"
        <meta name=\"twitter: description\" content={descriptio}
}    />;
      </Head>;"
      <div className=\"min - h-screen bg - white\"    />;
        {children}
      </div>;
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';
>>>>>>> origin/chore/fix-lint-and-merge

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

<<<<<<< HEAD


interface MainLayoutProps {
  }
  "children": React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}


=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
};

export default MainLayout;
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
};

export default MainLayout;
    <   />);
}

export default MainLayout;"
        <meta name=\"keywords\" content={keywords}    />"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />
>>>>>>> origin/chore/fix-lint-and-merge
      </Head>
      

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;}
}
}

=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
const MainLayout: React.FC<MainLayoutProps    /> = ({ children, title, description    }) => {



<<<<<<< HEAD
}



return (;
    <>
      <SEOHead title={title} description={description} />

=======
  return (}
    <>}
      <SEOHead title={title} description={description}    />"
      <div className=\"min-h-screen flex flex-col\"    />
        <Header    />"
        <main className=\"flex-1\"    />
>>>>>>> origin/chore/fix-lint-and-merge
          {children}
        </main>
        <Footer    />
      </div>
<<<<<<< HEAD
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  );
};
export default MainLayout;"
};

export default MainLayout;
=======

    <   />
  );
};

export default MainLayout;"
>>>>>>> origin/chore/fix-lint-and-merge
<<<<<<< HEAD
=======
=======
import React from 'react'; import Head from 'next / head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; og_image?: string} const MainLayout: React.FC < MainLayoutProps> = ({ children, title = 'Zion Tech Group - Leading Technology Solutions Provider', description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.', keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services', og_image = '/og - image.jpg', }) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={og_image} /> <meta name="viewport" content="width = device - width, initial - scale = 1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} og_image={og_image} /> <PerformanceOptimizer preload_images={[ '/hero - bg.jpg', '/services - bg.jpg', '/team - bg.jpg', ]} preload_fonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min - h-screen flex flex - col'> <Header /> <main id='main - content' className='flex - grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )} export default MainLayout;
;
<<<<<<< HEAD
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
origin/main
origin/cursor/integrate-build-improve-and-re-verify-c7b5
origin/automation-improvements-final
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer'; interface MainLayoutProps { children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string} const MainLayout: React.FC<MainLayoutProps> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg',}) => { return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <meta name="keywords" content={keywords} /> <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:image" content={ogImage} /> <meta name="viewport" content="width=device-width,initial-scale=1" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg',]} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer> <div className='min-h-screen flex flex-col'> <Header /> <main id='main-content' className='flex-grow' role='main'> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> )}; export default MainLayout;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
<<<<<<< HEAD
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
