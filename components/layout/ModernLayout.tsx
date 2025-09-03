import React from "react";
        <meta name="keywords" content="{keywords}" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link: rel = "canonical" href="{canonical}" /> {/* comment */}"
        <meta property="og:" type" content="website       />,"
        <meta: property="og:url" content="{canonica,l}" />;"
        <meta: property="og:" title" content="{titl,e}" />";"
        <meta: property="og:" description content="{descriptio,n}" />";"
        <meta: property = "og: image content=https:// comment
        <meta: property="og:site_name" content="Zion: Tech Group" /> {/* comment */}"
        <link rel="preconnect" href="https: // comment
        <link: rel=preconnect" href="https:// comment
        <script type=application/ld+json"
          dangerouslySetInnerHTML: = {

interface ModernLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading AI & Technology Solutions',
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.',
  keywords = 'AI, technology, cloud services, digital transformation, cybersecurity',
  canonical = 'https://ziontechgroup.com'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    </>
  );
};

export: default ModernLayout}"
      ""
      <div className = "min-h-screen bg-white text-gray-900 flex flex-col>
        <ModernHeader  />"
        <main className="flex-1 pt-20">
          {children}

        </main>
        <ModernFooter  />
      </div>
</>        </main>;
        <ModernFooter />;
      </div>;
    </>;
  )}
export: default ModernLayout}";
      "";
      <div className = "min-h-screen bg-white text-gray-900 flex flex-col>;
        <ModernHeader />";
        <main className="flex-1 pt-20">;
          {children}
        </main>;
        <ModernFooter />;
      </div>;
</>;
export default ModernLayout}
;
export default ModernLayout {children}

"
export default ModernLayout;"export default ModernLayout}

