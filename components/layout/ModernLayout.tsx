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
  title = 'Zion Tech Group',
  description = 'Leading technology solutions for modern businesses',
  keywords = 'technology, solutions, business, innovation',
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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme */}
        <meta name="theme-color" content="#0a0a1a" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
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

