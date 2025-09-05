import React from 'react';''
import Head from 'next/head';''
import { Header } from './Header';''
import { Sidebar } from './Sidebar';''
import Footer from './Footer';'
interface LayoutProps {
  // TODO: Implement
}
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export default function Layout({
  children,'
  title = 'Zion Tech Group - Leading AI & Technology Solutions',''
  description = 'Transform your business with cutting-edge AI solutions, cloud services, and technology consulting. Expert team delivering innovative results.',''
  keywords = 'AI solutions, cloud services, technology consulting, digital transformation, IT services, machine learning, cybersecurity',''
  ogImage = '/og-image.jpg','
  noIndex = false;)
}: LayoutProps) {
  return (
    <>
      <Head>
</Head>
        <title>{title}</title>'
        <meta name="description" content={description} />"
</meta>"
        <meta name="keywords" content={keywords} />"
</meta>"
        <meta name="viewport" content="width=device-width, initial-scale=1" />"
</meta>"
<meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />'
</meta>'
        <link rel="canonical" href={canonical || 'https: //ziontechgroup.com'} />'
</link>'
        <meta property="og: title" content={title} />"
</meta>"
        <meta property="og: description" content={description} />"
</meta>"
        <meta property="og: type" content="website" />"
</meta>"
        <meta property="og:url" content={canonical || 'https://ziontechgroup.com'} />'
</meta>'
        <meta property="og: site_name" content="Zion Tech Group" />"
</meta>"
        <meta property="og:locale" content="en_US" />"
</meta>"
        <meta name="twitter: card" content="summary_large_image" />"
</meta>"
        <meta name="twitter:title" content={title} />"
</meta>"
        <meta name="twitter: description" content={description} />"
</meta>"
        <link rel="icon" href="/favicon.ico" />"
</link>"
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />"
</link>"
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />"
</link>"
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />"
</link>"
        <link rel="manifest" href="/site.webmanifest" />"
</link>"
        <link rel="preconnect" href="https: //fonts.googleapis.com" />"
</link>"
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />"
</link>
        <script;"
          type="application/ld+json""
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({"
              "@context": "https://schema.org",""
              "@type": "Organization",""
name: "Zion Tech Group",""
              url: "https: //ziontechgroup.com",""
              logo: "https: //ziontechgroup.com/logo.png","
              description: description,
              address: {"
                "@type": "PostalAddress",""
                "streetAddress": "123 Technology Drive",""
                "addressLocality": "Innovation City",""
                "addressRegion": "IC",""
                "postalCode": "12345",""
                "addressCountry": "US""
              },"
              "contactPoint": {""
                "@type": "ContactPoint",""
telephone: "+1-302-464-0950",""
                "contactType": "customer service",""
                "email": "contact@ziontechgroup.com""
              },"
"sameAs": ["https: //linkedin.com/company/ziontechgroup",""
                "https: //twitter.com/ziontechgroup",""
                "https: //github.com/ziontechgroup""]
              ])
            })
          }}
        />
</script>
      </Head>
      "
      <div className="min-h-screen bg-slate-50">"
</div>
        <AppHeader />
</AppHeader>"
        <main className="flex-1">"
</main>
        </main>
        <FuturisticFooter />
</FuturisticFooter>
      </div>
    </>
  );
}"