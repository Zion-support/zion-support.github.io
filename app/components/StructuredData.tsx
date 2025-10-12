import React from 'react'
import { Helmet } from 'react-helmet-async'
import { COMPANY_INFO } from '../../config/constants'

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'service' | 'contact'
  data?: any
}

const StructuredData: React.FC<StructuredDataProps> = ({ type = 'organization', data }) => {
  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_INFO.name,
    "description": COMPANY_INFO.description,
    "url": COMPANY_INFO.social.website,
    "logo": `${COMPANY_INFO.social.website}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": COMPANY_INFO.contact.phone,
      "contactType": "customer service",
      "email": COMPANY_INFO.contact.email,
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": COMPANY_INFO.contact.address.street,
      "addressLocality": COMPANY_INFO.contact.address.city,
      "addressRegion": COMPANY_INFO.contact.address.state,
      "postalCode": COMPANY_INFO.contact.address.zip,
      "addressCountry": COMPANY_INFO.contact.address.country
    },
    "sameAs": [
      COMPANY_INFO.social.twitter,
      COMPANY_INFO.social.linkedin
    ],
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "Kleber Santos"
    },
    "areaServed": "Worldwide",
    "serviceType": [
      "AI Services",
      "IT Services", 
      "Cloud Services",
      "Cybersecurity",
      "Digital Transformation"
    ]
  })

  const getWebsiteData = () => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": COMPANY_INFO.name,
    "url": COMPANY_INFO.social.website,
    "description": COMPANY_INFO.description,
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${COMPANY_INFO.social.website}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  })

  const getServiceData = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI and IT Solutions",
    "description": COMPANY_INFO.description,
    "provider": {
      "@type": "Organization",
      "name": COMPANY_INFO.name
    },
    "areaServed": "Worldwide",
    "serviceType": "Technology Services",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD"
    }
  })

  const getContactData = () => ({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Zion Tech Group",
    "description": "Get in touch with Zion Tech Group for AI and IT solutions",
    "mainEntity": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": COMPANY_INFO.contact.phone,
        "contactType": "customer service",
        "email": COMPANY_INFO.contact.email
      }
    }
  })

  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return getOrganizationData()
      case 'website':
        return getWebsiteData()
      case 'service':
        return getServiceData()
      case 'contact':
        return getContactData()
      default:
        return data || getOrganizationData()
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData(), null, 2)}
      </script>
    </Helmet>
  )
}

export default StructuredData