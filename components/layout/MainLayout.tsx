;
}


import Layout from ./Layout';
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a


  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website | article' | 'product;
  noindex?: boolean;
  nofollow?: boolean;
  canonical?: string;
}



type = website';
  image = '/og-image.jpg;
  url;
ursor/automate-test-improve-and-merge-code-646c;
import React from react';
import Header from './Header;
import Footer from ./Footer';
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6

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

=======




  children: ReactNode;
import Head from 'next/head;

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
        <meta name=\description\ content={description} />"
        <meta name=\"viewport\ content=\width=device-width, initial-scale=1\" />"
        <link rel=\icon\ href=\"/favicon.ico\" />
        {canonical && <link rel=\canonical\" href={canonical} />}"
        {noindex && <meta name=\robots\ content=\"noindex\" />}
        {nofollow && <meta name=\robots\" content=\"nofollow\ />}
        <meta property=\"og: type\" content={type} />
        <meta property=\og:title\" content={title} />"
        <meta property=\og:description\ content={descriptio}
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
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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

=======
      </Head>;
        <Header />;
        <main className=flex-1>;
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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
=======
      <main className="min-h-screen bg-gray-50">
        {children}
      </main>
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
    </>
  );

}
export default MainLayout;"