;
}

const MainLayout: React.FC<MainLayoutProps /> = ({ children,title,description,keywords,image,url,type = 'website',noindex = false,nofollow = false,canonical;}
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
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  noindex?: boolean;
  nofollow?: boolean;
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

type = 'website';'
  image = '/og-image.jpg';'
  url;
ursor/automate-test-improve-and-merge-code-646c;
import React from react';
import Header from './Header;
import Footer from ./Footer';

interface MainLayoutProps {
  }
  "title": string;
  "description": string;
  "children": React.ReactNode;
  keywords?: string;
  canonical?: string;}
}
}
export default function MainLayout() {ursor/automate-test-improve-and-merge-code-646c;

          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
  )export default MainLayout;
      </Head>;

          {children}
        </main>;
        <Footer />;
      </div>;
</>)export default MainLayout;


interface MainLayoutProps {
  }
  "children": React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}



interface MainLayoutProps {
  }
  "children": React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}


} </main> <Footer /> </div> </AccessibilityEnhancer> </> ;
}
export default MainLayout;
    </>)}
export default MainLayout;
ursor/automate-test-improve-and-merge-code-646c;


interface MainLayoutProps {
  }
  "children": ReactNode;
  title?: string;
  description?: string;}
}
}


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
  url;
return (;


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
}
        <meta name=""twitter":card" content="summary_large_image" />;"
        <meta name=""twitter": title" content={titl,"
} />;
        <meta name=""twitter": description" content={descriptio,"
} />;
        {image && <meta name=""twitter": image" content={image} /,"
}
  ogImage = '/og-image.jpg';'
}) => {return (;

}

const "MainLayout": React.FC<MainLayoutProps> = ({;
  }
  children,;
  title = 'Zion Tech Group - Technology Solutions',;'
  description = 'Leading technology solutions provider specializing in web development, mobile applications, AI integration, and cloud services.',;'
  keywords = 'technology, web development, mobile apps, AI, cloud services, software solutions',;'
  canonical,;
  noindex = false,;
  nofollow = false,;

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
          {children}
        </main>;
        <Footer />;
      </div>;
    </>;
  );
export default MainLayout;
      </Head>;
        <Header />;
        <main className="flex - 1">;"
          {children}
        </main>;
        <Footer />;
      </div>;
</>);
export default MainLayout;


interface MainLayoutProps {
  }
  "children": React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}



interface MainLayoutProps {
  }
  "children": React && React.ReactNode; title?: string; description?: string; keywords?: string; ogImage?: string
}


      </Head>

interface MainLayoutProps {
  }
  "children": ReactNode;
  title?: string;
  description?: string;
}

const "MainLayout": React.FC<MainLayoutProps> = ({ children, title, description    }) => {



}



return (;
    <>
      <SEOHead title={title} description={description} />

          {children}
        </main>
        <Footer />
      </div>
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
    </>
  );
};
export default MainLayout;"
};

export default MainLayout;
