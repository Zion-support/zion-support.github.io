import Document, { Html, Head, Main, NextScript } from 'next/document';

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Html, Head, Main, NextScript } from 'next/document';

import Document, { Html, Head, Main, NextScript } from 'next/document';
=======
==============

import Document, { Html, Head, Main, NextScript } from 'next/document';

=======        <link rel='icon' href='/favicon.ico' />
        <meta name='theme-color' content='#0a0a0a' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />

==============


=======        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="preconnect" href="https: //fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
export default function Document() {;
  return (
    <Html lang='en'>;
      <Head>;
        <link rel='icon' href='/favicon && favicon.ico' />;
        <meta name='theme-color' content='#0a0a0a' />;
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        />;
        <link rel='preconnect' href='https://fonts && fonts.googleapis.com' />;
        <link
          rel='preconnect'
          href='https://fonts && fonts.gstatic.com'
          crossOrigin=''
        />;
        <link
          href='https://fonts && fonts.googleapis.com/css2?family=Inter:wght@400500600700800900&family=JetBrains+Mono:wght@400600&display=swap'
          rel='stylesheet'
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
        />      </Head>;
      <body>;
        <Main />;
        <NextScript />;
      </body>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}
  );
  )
}

    </Html>);
;



}
=======

}
=======
  );

=======

  );
=======  )
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </Html>);
;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to external domains for performance */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          
          {/* Favicon and app icons */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Theme color */}
          <meta name="theme-color" content="#000000" />
          
          {/* DNS prefetch for performance */}
          <link rel="dns-prefetch" href="//plausible.io" />
          
          {/* Structured data for organization */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Zion Tech Group",
                "url": "https://ziontechgroup.com",
                "logo": "https://ziontechgroup.com/logo.png",
                "description": "Leading provider of AI services, IT solutions, and innovative micro SaaS products for modern businesses.",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "364 E Main St STE 1008",
                  "addressLocality": "Middletown",
                  "addressRegion": "DE",
                  "postalCode": "19709",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1-302-464-0950",
                  "contactType": "customer service",
                  "email": "kleber@ziontechgroup.com"
                },
                "sameAs": [
                  "https://github.com/Zion-Holdings",
                  "https://linkedin.com/company/zion-tech-group"
                ]
              })
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
>>>>>>> 6d72fcb6e43ee824c52724609027e0555356221c
