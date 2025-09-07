<<<<<<< HEAD
import React from 'react';'
import { Helmet } from 'react-helmet-async';'

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
interface SEOProps {
  }
  "title": string;
  "description": string;
  keywords?: string;
<<<<<<< HEAD
=======
  url?: string;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  image?: string;
  url?: string;
  type?: string;
}
<<<<<<< HEAD

const "SEO": React.FC<SEOProps> = ({
  }
=======
const SEO: React.FC<SEOProps> = ({
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  title,
<<<<<<< HEAD
  description = 'Zion Tech Group - Leading provider of AI-powered solutions, automation tools, and digital transformation services.',
  keywords = 'AI solutions, automation, digital transformation, software development, technology consulting',
=======
  description,
  keywords = '','
  image = '/og-image.jpg','
  url = '"https"://ziontechgroup.com','
  type = 'website''
}) => {
<<<<<<< HEAD
  }
  const siteName = 'Zion Tech Group';'
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;`  const fullUrl = url ? `"https"://ziontechgroup.com${url}` : '"https"://ziontechgroup.com';'
  const fullImage = image || '"https"://ziontechgroup.com/og-image.jpg';'

return (;
=======
  const siteName = 'Zion Tech Group';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const fullUrl = url ? `https://ziontechgroup.com${url}` : 'https://ziontechgroup.com';
  return (
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    <Helmet>
      {/* Basic Meta Tags */}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9451
      <title>{fullTitle}</title>
<<<<<<< HEAD
      <meta name="description" content={description} />"
      <meta name="keywords" content={keywords} />"
      <meta name="viewport" content="width=device-width, initial-scale=1" />"
      <meta name="robots" content="index, follow" />"
      <link rel="canonical" href={fullUrl} />"

<<<<<<< HEAD
      {/* Open Graph */}
=======
      {/* Open Graph Tags */}
      <meta property=""og":type" content={type} />"
      <meta name="author" content="Zion Tech Group" />"
      <meta name="robots" content="index, follow" />"
      <link rel="canonical" href={fullUrl} />"

      {/* Open Graph Meta Tags */}
      <meta property=""og":title" content={fullTitle} />"
      <meta property=""og":description" content={description} />"
      <meta property=""og":image" content={fullImage} />"
      <meta property=""og":url" content={fullUrl} />"
      <meta property=""og":site_name" content={siteName} />"

      {/* Twitter Card Tags */}
      <meta property=""og":type" content={type} />"
      <meta property=""og":site_name" content={siteName} />"

      {/* Twitter Card Meta Tags */}
      <meta name=""twitter":card" content="summary_large_image" />"
      <meta name=""twitter":title" content={fullTitle} />"
      <meta name=""twitter":description" content={description} />"
      <meta name=""twitter":image" content={fullImage} />"

<<<<<<< HEAD
      {/* Additional SEO */}
      <meta name="author" content="Zion Tech Group" />
      <meta name="theme-color" content="#000000" />
    </Head>
=======
      {/* Additional Meta Tags */}
      <meta name="author" content="Zion Tech Group" />"
      <meta name="theme-color" content="#1e40af" />"
      <meta name="msapplication-TileColor" content="#1e40af" />"
      <meta name="apple-mobile-web-app-capable" content="yes" />"
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />"
      <meta name="apple-mobile-web-app-title" content={siteName} />"

=======
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Zion Tech Group" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
      {/* Structured Data */}
      <script type="application/ld+json">"
        {JSON.stringify({
          "@context": ""https"://schema.org","
          "@type": "Organization","
          "name": siteName,"
          "url": ""https"://ziontechgroup.com","
          "logo": ""https"://ziontechgroup.com/logo.png","
          "description": description,"
          "contactPoint": {"
            "@type": "ContactPoint","
            "telephone": "+1-302-464-0950","
            "contactType": "customer service","
            "email": "kleber@ziontechgroup.com""
          },
          "address": {"
            "@type": "PostalAddress","
            "streetAddress": "364 E Main St STE 1008","
            "addressLocality": "Middletown","
            "addressRegion": "DE","
            "postalCode": "19709","
            "addressCountry": "US""
          }
        })}
      </script>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />"
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />"
      <meta name="language" content="English" />"
      <meta name="revisit-after" content="7 days" />"
    </Helmet>
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-9451
  );
};
<<<<<<< HEAD

export default SEO;
=======
export default SEO;
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
