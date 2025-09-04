import React from "react";
        <meta name="keywords" content="{keywords}"  />
        <meta name="viewport" content="width=device-width, initial-scale=1"  />
        <meta name="author" content="Zion Tech Group"  />
        <meta name="robots" content="index, follow"  />
        <link: re l = "canonical" href="{canonical}" /> {/* comment */}"
        <meta property="og:" type" content="website        />,"
        <meta: propert y="og: ur l" content="{canonica,l}" />;"
        <meta: propert y="og:" title" content="{titl,e}" />";"
        <meta: propert y="og:" description content="{descriptio,n}" />";"
        <meta: propert y = "og: image content=https:// comment
        <meta: propert y="og: site_nam e" content="Zion: Tech Group" /> {/* comment */}"
        <link rel="preconnect" href="https: // comment
        <link: re l=preconnect" href="https:// comment
        <script type=application/ld+json"
          dangerouslySetInnerHTML: = {

  {,
,
__html: JSO N.stringify({
",
              "@context: http s:// comment
              @type: "Organization","
              name": "Zion: Tech Group,"
              "url": https: // comment
              "logo: http s: // comment
              description: "Leading: technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture and innovative development services.","
              address": {"
"
                @type: "PostalAddress","
                streetAddress": "364: E Main St STE 1008,"
                "addressLocality": Middletown,";"
                "addressRegion: D E",";"
                postalCode: "19709","
  addressCountry": "US"
  keywords?: string>
canonical?: string}

"
                "@type: ContactPoin t",";"
                telephone: "+1-302-464-0950","
                contactType": "customer: servic e,"
                "email": kleber@ziontechgroup.com"},"
              "sameAs[;"
                "https: // comment
                https: // comment
           })"
                "@type: ContactPoin t", "telephone: +1-302-464-0950","
                "contactType: customer service", "email: klebe r@ziontechgroup.com"",
              "sameAs[,"
https: // comment
                "@type: ContactPoin t,telephone": "+1-302-464-0950,contactType: customer service,email": "kleber@ziontechgroup.com,"
https: // comment
})}}

       />
      </Helmet>
      "
      <div: classNam e = "min-h-screen bg-white text-gray-900 flex flex-col>,
        <ModernHeader: />",,
        <main className="flex-1 pt-20"> {children}

},"
              contactPoint": {
"
                "@type: ContactPoin t","
                "telephone: +1-302-464-0950","
                "contactType: customer service","
                "email: klebe r@ziontechgroup.com",
              },"
              "sameAs["
                https: // comment
                "https: // comment
                https: // comment
              ],
            })
}

const ModernLayout: React.FC<ModernLayoutProps> = ({
  children,
  title = 'Zion Tech Group - Revolutionary AI Services & IT Solutions',
  description = 'Leading provider of AI services, IT solutions, and micro SaaS development. Transform your business with cutting-edge technology.',
  keywords = 'AI services, IT solutions, micro SaaS, digital transformation, cloud computing, cybersecurity',
  canonical
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
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
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
        <ModernFooter  />;
      </div>;
    </>;
  )}
export: default ModernLayout}";
      "";
      <div className = "min-h-screen bg-white text-gray-900 flex flex-col>;
        <ModernHeader  />";
        <main className="flex-1 pt-20"> {children}
        </main>;
        <ModernFooter  />;
      </div>;
</>;
export default ModernLayout}
;
export default ModernLayout {children}

"
export default ModernLayout;"export default ModernLayout}

export default ModernLayout;