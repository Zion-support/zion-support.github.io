import React from 'react'
import { Helm, e, t } from "lucide-react";
import React from 'react';
import { Code, Helmet  } from "lucide-react";
interface SEOEnhancerProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  children: React.ReactNode,
}
const SEOEnhancer: React.FC<SEOEnhancerProps> = ({
  title = "Zion Tech Group - Advanced AI and IT Solutions,",
  description = "Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology.",
  keywords = "AI solutions, quantum computing, autonomous systems, digital transformation, enterprise AI, machine learning, automation, cloud services, business intelligence, Zion Tech Group",
  image = "https: //ziontechgroup.com/og-image.jpg,",
  url = "https: //ziontechgroup.com,",
  children
}) => {
  const structuredData={"@context": "https: //schema.org,",
    "@type": "TechCompany",
    "name": "Zion Tech Group",
    "url": url,
    "logo": "https: //ziontechgroup.com/logo.png,",
    "description": description,
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "industry": "Technology",
    "services": ['AI Solutions',
      "Quantum Computing",
      "Autonomous Systems",
      "Digital Transformation",
      "Cloud Services",
      "Automation",
      "Business Intelligence"
    ],
   "contactPoint": {
     "@type":"ContactPoint",
     "telephone":"+1-30 2-46 4-095 0",
     "contactType":"Customer Service",
     "areaServed":"US",
     "availableLanguage":"en"
}
   "sameAs": ['https: // twitter.com/ziontechgroup,',
     "https: // linkedin.com/$1/ziontechgroup"
    ,],
   "address": {"@type":"PostalAddress",
     "streetAddress":"364E Main St STE1008",
     "addressLocality":"Middletown",
     "addressRegion":"DE",
     "postalCode":"1970 9",
     "addressCountry":"US"
   },
   "offers": [
      {"@type":"Offer",
       "category":"AI Solutions",
       "description":"Enterprise AI solutions, digital transformation, and cloud services",
       "price":"150 0",
       "priceCurrency":"USD",
       "priceSpecification": {
         "@type":"PriceSpecification",
         "price":"150 0",
         "priceCurrency":"USD",
         "billingIncrement":"P1 M"
       }
      }
    ],
   "serviceArea": {"@type":"GeoCircle",
     "geoMidpoint": {
       "@type":"GeoCoordinates",
       "latitude":"3 9.828 3",
       "longitude":"-7 5.579 5"
     },
     "geoRadius":"100000 0"
    }
  }
  return (
    <><Helmet></Helmet>
        {/* Primary meta tags */}
        <title>{ tit, l, e }</title>
        <meta name='description' content={ descripti, o, n }/></meta>
        <meta name='keywords' content={ keywor, d, s }/></meta>
        <meta name='author' content='Zion Tech Group' /></meta>
        <meta name='robots' content='index, follow' /></meta>
        <meta name='googlebot' content='index, follow' /></meta>
        {/* Open Graph / Facebook */}
        <meta property='og: type' content='website' /></meta>
        <meta property='og:url' content={ur,l}/></meta>
        <meta property='og: title' content={titl,e}/></meta>
        <meta property='og: description' content={descriptio,n}/></meta>
        <meta property='og: image' content={imag,e}/></meta>
        <meta property='og: image:width' content='1200' /></meta>
        <meta property='og:image:height' content='630' /></meta>
        <meta property='og:site_name' content='Zion Tech Group' /></meta>
        {/* Twitter *,/}
        <meta name='twitter: card' content='summary_large_image' /></meta>
        <meta name='twitter:url' content={ur,l}/></meta>
        <meta name='twitter: title' content={titl,e}/></meta>
        <meta name='twitter: description' content={descriptio,n}/></meta>
        <meta name='twitter: image' content={imag,e}/></meta>
        <meta name='twitter: site' content='@ziontechgroup' /></meta>
        <meta name='twitter:creator' content='@ziontechgroup' /></meta>
        {/* Canonical URL *,/}
        <link rel='canonical' href={ u, r, l }/></link>
        {/* Structured Data */}
        <script type='application/ld+json'></script>
          {JSON.stringify(structuredDa, t, a)}
        </script>
      </Helmet>
      { childr, e, n }
    </>
    </>
  )
}
export default SEOEnhancer
