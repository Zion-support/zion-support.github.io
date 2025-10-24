import React from 'react';
import { Helmet } from 'lucide-react';
import { Code, Helmet } from 'lucide-react';

interface SEOEnhancerProps {}
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  children: React.ReactNode
{}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({};
  title = &quot;Zion Tech Group - Advanced AI and IT Solutions&quot;,
  description = &quot;Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.&quot;,
  keywords = &quot;AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion Tech Group&quot;,
  image = &quot;https://ziontechgroup.com/og-image.jpg&quot;,
  url = &quot;https://ziontechgroup.com&quot;,
  children
{}) => {}
  const structuredData = {};
    &quot;@context&quot;: &quot;https://schema.org&quot;,
    &quot;@type&quot;: &quot;TechCompany&quot;,
    &quot;name&quot;: &quot;Zion Tech Group&quot;,
    &quot;url&quot;: url,
    &quot;logo&quot;: &quot;https://ziontechgroup.com/logo.png&quot;,
    &quot;description&quot;: description,
    &quot;foundingDate&quot;: &quot;2020&quot;,
    &quot;numberOfEmployees&quot;: &quot;50-100&quot;,
    &quot;industry&quot;: &quot;Technology&quot;,
    &quot;services&quot;: []
      &quot;AI Solutions&quot;,
      &quot;Quantum Computing&quot;,
      &quot;Autonomous Systems&quot;,
      &quot;Digital Transformation&quot;,
      &quot;Cloud Services&quot;,
      &quot;Automation&quot;,
      &quot;Business Intelligence&quot;
    ],
   &quot;contactPoint&quot;: {}
     &quot;@type&quot;:&quot;ContactPoint&quot;,
     &quot;telephone&quot;:&quot;+1-30 2-46 4-095 0&quot;,
     &quot;contactType&quot;:&quot;Customer Service&quot;,
     &quot;areaServed&quot;:&quot;US&quot;,
     &quot;availableLanguage&quot;:&quot;en&quot;
{   },
   &quot;sameAs&quot;: []
     &quot;https:// twitter.com/ziontechgroup&quot;,
     &quot;https:// linkedin.com/$1/ziontechgroup&quot;
    ],
   &quot;address&quot;: {&quot;@type&quot;:&quot;PostalAddress&quot;,
     &quot;streetAddress&quot;:&quot;364E Main St STE1008&quot;,
     &quot;addressLocality&quot;:&quot;Middletown&quot;,
     &quot;addressRegion&quot;:&quot;DE&quot;,
     &quot;postalCode&quot;:&quot;1970 9&quot;,
     &quot;addressCountry&quot;:&quot;US&quot;
   },
   &quot;offers&quot;: []
      {&quot;@type&quot;:&quot;Offer&quot;,
       &quot;category&quot;:&quot;AI Solutions&quot;,
       &quot;description&quot;:&quot;Enterprise AI solutions, digital transformation, and cloud services&quot;,
       &quot;price&quot;:&quot;150 0&quot;,
       &quot;priceCurrency&quot;:&quot;USD&quot;,
       &quot;priceSpecification&quot;: {}
         &quot;@type&quot;:&quot;PriceSpecification&quot;,
         &quot;price&quot;:&quot;150 0&quot;,
         &quot;priceCurrency&quot;:&quot;USD&quot;,
         &quot;billingIncrement&quot;:&quot;P1 M&quot;
       }
{      }
    ],
   &quot;serviceArea&quot;: {&quot;@type&quot;:&quot;GeoCircle&quot;,
     &quot;geoMidpoint&quot;: {}
       &quot;@type&quot;:&quot;GeoCoordinates&quot;,
       &quot;latitude&quot;:&quot;3 9.828 3&quot;,
       &quot;longitude&quot;:&quot;-7 5.579 5&quot;
     },
     &quot;geoRadius&quot;:&quot;100000 0&quot;
{    }
{  }
  return (<>
      <Helmet>
        {/* Primary meta tags */}
        <title>{title}</title>
        <meta name=&quot;description&quot; content={description} />
        <meta name=&quot;keywords&quot; content={keywords} />
        <meta name=&quot;author&quot; content=&quot;Zion Tech Group&quot; />
        <meta name=&quot;robots&quot; content=&quot;index, follow&quot; />
        <meta name=&quot;googlebot&quot; content=&quot;index, follow&quot; />
        {/* Open Graph / Facebook */}
        <meta property=&quot;og:type&quot; content=&quot;website&quot; />
        <meta property=&quot;og:url&quot; content={url} />
        <meta property=&quot;og:title&quot; content={title} />
        <meta property=&quot;og:description&quot; content={description} />
        <meta property=&quot;og:image&quot; content={image} />
        <meta property=&quot;og:image:width&quot; content=&quot;1200&quot; />
        <meta property=&quot;og:image:height&quot; content=&quot;630&quot; />
        <meta property=&quot;og:site_name&quot; content=&quot;Zion Tech Group&quot; />
        {/* Twitter */}
        <meta name=&quot;twitter:card&quot; content=&quot;summary_large_image&quot; />
        <meta name=&quot;twitter:url&quot; content={url} />
        <meta name=&quot;twitter:title&quot; content={title} />
        <meta name=&quot;twitter:description&quot; content={description} />
        <meta name=&quot;twitter:image&quot; content={image} />
        <meta name=&quot;twitter:site&quot; content=&quot;@ziontechgroup&quot; />
        <meta name=&quot;twitter:creator&quot; content=&quot;@ziontechgroup&quot; />
        {/* Canonical URL */}
        <link rel=&quot;canonical&quot; href={url} />
        {/* Structured Data */}
        <script type=&quot;application/ld+json&quot;>
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      {children}
</>
  )
{}
export default SEOEnhancer;
