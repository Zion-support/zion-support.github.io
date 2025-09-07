;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps /> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical;}
   }) => {

return (<>;}
      <Head>;}
        <title />{title || 'Zion Tech Group'}</title>;
        <meta name=\"description\" content={description || 'Leading technology solutions provider'} />;"
        {keywords && <meta name=\"keywords\" content={keywords} />}
=======
import React from 'react';
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
=======
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
import Layout from './Layout';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a

<<<<<<< HEAD
import React, { ReactNode } from 'react';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
import Head from 'next/head';
import Header from '../Header';
import Footer from './Footer';

interface MainLayoutProps {
<<<<<<< HEAD
  title: string,
  description: string,
  children: React.ReactNode,
=======
<<<<<<< HEAD
  title: string;
  description: string;
  children: React.ReactNode;
>>>>>>> origin/main
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}

<<<<<<< HEAD
const MainLayout: React.FC<MainLayoutProps> = ({
  children;
  title = "Zion Tech Group - Leading Technology Solutions Provider";
  description = "Transform your business with cutting-edge AI, IT services, and micro SaaS solutions. Expert technology consulting and implementation services.";
  keywords = "technology solutions, AI services, IT consulting, micro SaaS, cloud computing, digital transformation, cybersecurity, software development";
  image;
  url;
  type = 'website';
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
=======
export default function MainLayout({ 
  title, 
  description, 
  children, 
  keywords = "AI solutions, IT services, micro SaaS, technology consulting",
  canonical 
}: MainLayoutProps) {

=======
  children: ReactNode, title?: string,  description?: string;
  keywords?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  type?: string;
  image?: string;
  url?: string;}
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

type = 'website';
  image = '/og-image.jpg';
  url;
ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface MainLayoutProps {
  children: React.ReactNode;

  keywords?: string;
  canonical?: string;}
}
}
export default function MainLayout() {ursor/automate-test-improve-and-merge-code-646c;
  return (<>;}
      <Head>;}
        <title />{title}</title>;"
        <meta name=\"description\" content={description} />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;"
        <link rel=\"icon\" href=\"/favicon.ico\" />;"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        {noindex && <meta name=\"robots\" content=\"noindex\" />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\" />}"
        <meta property=\"og: type\" content={typ}
} />;"
        <meta property=\"og: title\" content={titl}
} />;"
        <meta property=\"og: description\" content={descriptio}
} />;
  children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og - image.jpg',url;"
  return ({image && <meta property=\"og: image\" content={image} />}"
        {url && <meta property=\"og:url\" content={url} />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;"
        <meta name=\"twitter: title\" content={titl}
} />;"
        <meta name=\"twitter: description\" content={descriptio}
} />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
  ogImage = '/og-image.jpg';
}) = /> {return (const MainLayout: React.FC<MainLayoutProps /> = ({children,title = 'Zion Tech Group - Technology Solutions',description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',canonical,noindex = false,nofollow = false,type = 'website',image = '/og-image && image.jpg',url;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;"
        <link rel=\"icon\" href=\"/favicon && favicon.ico\" />;"
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />;}"
        <link rel=\"icon\" href=\"/favicon.ico\" />;}"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        {noindex && <meta name=\"robots\" content=\"noindex\" />}"
        {nofollow && <meta name=\"robots\" content=\"nofollow\" />}"
        <meta property=\"og: type\" content={typ}
} />;"
        <meta property=\"og: title\" content={titl}
} />;"
        <meta property=\"og: description\" content={descriptio}
} />;"
        {image && <meta property=\"og: image\" content={image} />}"
        {url && <meta property=\"og:url\" content={url} />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;"
        <meta name=\"twitter: title\" content={titl}
} />;"
        <meta name=\"twitter: description\" content={descriptio}
} />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
      </Head />;
        <Header />;"
        <main className=\"flex-1\" />;
          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
  )export default MainLayout;
      </Head>;
        <Header />;"
        <main className=\"flex - 1\" />;
          {children}
        </main>;
        <Footer />;
      </div>;
</>)export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',og_image = '/og - image.jpg';
}) => {return (<>;}
      <Head>;}
        <title />{title}</title>;"
        <meta name=\"description\" content={description} />;"
        <meta name=\"keywords\" content={keywords} />;"
        <meta property=\"og: title\" content={titl}
} />;"
        <meta property=\"og: description\" content={descriptio}
} />;"
        <meta property=\"og: image\" content={og_imag}
} />;"
        <meta property=\"og:type\" content=\"website\" />;"
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;"
        <meta name=\"twitter: title\" content={titl}
} />;"
        <meta name=\"twitter: description\" content={descriptio}
} />;
      </Head>;"
      <div className=\"min - h-screen bg - white\" />;
        {children}
      </div>;
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {

}
;}"
  return ( <> <Head> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {childre}
} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
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

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {childre}
} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
export default MainLayout;
    </>)}
export default MainLayout;
ursor/automate-test-improve-and-merge-code-646c;"
        <meta name=\"keywords\" content={keywords} />;"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        <link rel=\"icon\" href=\"/favicon.ico\" />;
      </Head>;
import React, { ReactNode } from 'react';
import Footer from './Footer';
import SEOHead from '../SEOHead';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;}
}
}

const MainLayout: React.FC<MainLayoutProps /> = ({ children, title, description    }) => {

}
return (<>;}
      <SEOHead title={title} description={description} />;"
      <div className=\"min-h-screen flex flex-col\" />;
        <Header />;"
        <main className=\"flex-1\" />;
          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
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
<<<<<<< HEAD

pr-12243
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======




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

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',
  canonical,
  noindex = false,
  nofollow = false,
  type = 'website',
  image = '/og - image.jpg',
  url;
  return (

"
        {image && <meta property=\"og: image\" content={image} />}"
        {url && <meta property=\"og:url\" content={url} />}
        {/* Twitter *}
}"
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;"
        <meta name=\"twitter: title\" content={titl}
} />;"
        <meta name=\"twitter: description\" content={descriptio}
} />;"
        {image && <meta name=\"twitter: image\" content={image} /
}
  ogImage = '/og-image.jpg';
}) => {return (;
const MainLayout: React.FC<MainLayoutProps> = ({;
  children,;
  title = 'Zion Tech Group - Technology Solutions',;
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',;
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',;
  canonical,;
  noindex = false,;
  nofollow = false,;
  type = 'website',;
  image = '/og-image && image.jpg',;
  url;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon && favicon.ico" />;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
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
<<<<<<< HEAD
<<<<<<< HEAD
      </Head>;
        <Header />;
        <main className="flex-1">;
=======
      </Head>
        <Header />
        <main className="flex-1">
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
      </Head>;
        <Header />;
        <main className="flex-1">;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
  );
export default MainLayout;
      </Head>;
        <Header />;
        <main className="flex - 1">;
          {children}
        </main>;
        <Footer />;
      </div>;
</>);
;
export default MainLayout;
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Zion Tech Group provides cutting - edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence.',
  keywords = 'technology solutions, AI development, cloud architecture, digital transformation, micro SaaS, IT services',
  og_image = '/og - image.jpg';
}) => {
  return (
    <>;}
      <Head>;}
        <title />{title}</title>;"
        <meta name=\"description\" content={description} />;"
        <meta name=\"keywords\" content={keywords} />;"
        <meta property=\"og: title\" content={titl}
} />;"
        <meta property=\"og: description\" content={descriptio}
} />;"
        <meta property=\"og: image\" content={og_imag}
} />;"
        <meta property=\"og:type\" content=\"website\" />;"
        <meta name=\"twitter:card\" content=\"summary_large_image\" />;"
        <meta name=\"twitter: title\" content={titl}
} />;"
        <meta name=\"twitter: description\" content={descriptio}
} />;
      </Head>;"
      <div className=\"min - h-screen bg - white\" />;
        {children}
      </div>;
import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import PerformanceOptimizer from '../PerformanceOptimizer';
import AccessibilityEnhancer from '../AccessibilityEnhancer';
import SEOEnhancer from '../SEOEnhancer';

interface MainLayoutProps {}
  children: React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string}
}

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image.jpg'   }) => {

}
;}"
  return ( <> <Head> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg.jpg','/services-bg.jpg','/team-bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> 
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

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title = 'Zion Tech Group - Leading Technology Solutions Provider',description = 'Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture,we help companies transform their digital presence.',keywords = 'technology solutions,AI development,cloud architecture,digital transformation,micro SaaS,IT services',ogImage = '/og-image && image.jpg'   }) => {

}
;}"
  return ( <> <Head> <title />{title}</title> <meta name=\"description\" content={description} /> <meta name=\"keywords\" content={keywords} /> <meta property=\"og: title\" content={title} /> <meta property=\"og:description\" content={description} /> <meta property=\"og:image\" content={ogImag}"
} /> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" /> </Head> <SEOEnhancer title={title} description={description} keywords={keywords} ogImage={ogImage} /> <PerformanceOptimizer preloadImages={[ '/hero-bg && bg.jpg','/services-bg && bg.jpg','/team-bg && bg.jpg']} preloadFonts={[ 'https: ]} /> <AccessibilityEnhancer /> <div className='min-h-screen flex flex-col' /> <Header /> <main id='main-content' className='flex-grow' role='main' /> {children} </main> <Footer /> </div> </AccessibilityEnhancer> </> 
};
export default MainLayout;
    </>);
}
export default MainLayout;"
        <meta name=\"keywords\" content={keywords} />"
        {canonical && <link rel=\"canonical\" href={canonical} />}"
        <link rel=\"icon\" href=\"/favicon.ico\" />
      </Head>

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
  return (
    <>
      <SEOHead title={title} description={description} />

  return (}
    <>}
      <SEOHead title={title} description={description} />"
      <div className=\"min-h-screen flex flex-col\" />
        <Header />"
        <main className=\"flex-1\" />
          {children}
        </main>
        <Footer />
      </div>
=======
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    </>
  );
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
};
export default MainLayout;"