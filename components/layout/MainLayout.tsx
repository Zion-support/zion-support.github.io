;
}

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
import React from 'react';
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
=======
<<<<<<< HEAD
import React from react';
import Header from './Header;
import Footer from ./Footer';
=======

>>>>>>> origin/main
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
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

<<<<<<< HEAD
=======
const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {
>>>>>>> origin/chore/fix-lint-and-merge

}
;}"
<<<<<<< HEAD
  return ( <> <Head /> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title,
  description={description}
            keywords={keywords
            ogImage={ogImage /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg'
            '/services-bg.jpg'
            '/team-bg.jpg'] preloadFonts={[ 'https: ] /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {childre}
} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
=======
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
>>>>>>> origin/main
export default MainLayout;
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
<<<<<<< HEAD
  return ( <> <Head /> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title,
  description={description}
            keywords={keywords
            ogImage={ogImage /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg'
            '/services-bg && bg.jpg'
            '/team-bg && bg.jpg'] preloadFonts={[ 'https: ] /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {childre}
} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
export default MainLayout;
    </>)}
=======
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {childre}
} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> ;
}

>>>>>>> origin/chore/fix-lint-and-merge
export default MainLayout;
    <   />)}

>>>>>>> origin/main
export default MainLayout;
<<<<<<< HEAD
ursor/automate-test-improve-and-merge-code-646c;

=======
ursor/automate-test-improve-and-merge-code-646c;"
        <meta name=\"keywords\" content={keywords}    />;"
        {canonical && <link rel=\"canonical\" href={canonical}    />}"
        <link rel=\"icon\" href=\"/favicon.ico\"    />;
      </Head>;
import React, { ReactNode,
  from 'react';
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
<<<<<<< HEAD
      <SEOHead title={title}
            description={description />;"
      <div className=\"min-h-screen flex flex-col\" />;
        <Header />;"
        <main className=\"flex-1\" />
            {children
        </main>;
        <Footer />}
            </div>
            </>
            )
=======
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

>>>>>>> origin/main
export default MainLayout;ursor/automate-test-improve-and-merge-code-646c;
}
export default function MainLayout({ 
  title, 
  description, 
<<<<<<< HEAD
  children, "
  keywords = \"AI solutions, IT services, micro SaaS,
  technology consulting\"}
  canonical },,
  }: MainLayoutProps) {
 ;
=======
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


const MainLayout: React.FC<MainLayoutProps> = ({

>>>>>>> origin/main
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
>>>>>>> origin/main
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
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';
=======
import React from 'react'; import Head from 'next/head'; import Header from './Header'; import Footer from './Footer'; import PerformanceOptimizer from '../PerformanceOptimizer'; import AccessibilityEnhancer from '../AccessibilityEnhancer'; import SEOEnhancer from '../SEOEnhancer';
>>>>>>> origin/chore/fix-lint-and-merge
>>>>>>> origin/main

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
<<<<<<< HEAD
  return ( <> <Head /> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title,
  description={description}
            keywords={keywords
            ogImage={ogImage /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg'
            '/services-bg.jpg'
            '/team-bg.jpg'] preloadFonts={[ 'https: ] /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> 
=======
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
>>>>>>> origin/main
};
export default MainLayout;
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps    /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
<<<<<<< HEAD
  return ( <> <Head /> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title,
  description={description}
            keywords={keywords
            ogImage={ogImage /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg'
            '/services-bg && bg.jpg'
            '/team-bg && bg.jpg'] preloadFonts={[ 'https: ] /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> 
=======
  return ( <> <Head><title>{title}</title> <meta name=\"description\" content={description}    /> <meta name=\"keywords\" content={keywords}    /> <meta property=\"og: title\" content={title}    /> <meta property=\"og:description\" content={description}    /> <meta property=\"og:image\" content={ogImag}"
}    /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"    /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage}    /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]}    /> <AccessibilityEnhancer    /> <div className='min-h-screen flex flex-col'    /> <Header    /> <main id='main-content' className='flex-grow' role='main'    /> {children} </main> <Footer    /> </div> </AccessibilityEnhancer> <   /> 
>>>>>>> origin/main
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

const MainLayout: React.FC<MainLayoutProps    /> = ({ children, title, description    }) => {

<<<<<<< HEAD
  return (}
    <>}
      <SEOHead title={title}
            description={description />"
      <div className=\"min-h-screen flex flex-col\" />
        <Header />"
        <main className=\"flex-1\" />
          {children
=======


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
>>>>>>> origin/main
        </main>
        <Footer    />
      </div>
<<<<<<< HEAD
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
<<<<<<< HEAD
  )
            
;
export default MainLayout;"
=======
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
>>>>>>> origin/main
