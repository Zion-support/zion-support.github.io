import React from "react";
interface StructuredDataProps {;
  data: any}

export const StructuredData: React.FC<StructuredDataProps> = ({ data }) => {
  return ("
    <script"
      type = "application/ld+json""
      dangerouslySetInnerHTML="{{" __html: JSON.stringify(data) }}>
  />
  )

export const OrganizationSchema = () => {"
  const organizationData = {},"
    contactPoint: {""
      "@type": "ContactPoint","
      contactType: "customer service","
      url: "http,"
    s:// comment;
    sameAs: [""
      "http,"
    s:// comment;
      "https:// comment;
    sameAs: ["
      "https:// comment;
      "https: // comment;
      "https:// comment;
    "foundingDate": "2020","
    "numberOfEmployees": "50-100","
    "industry": "Technology Services"
}"
    foundingDate: "2020","
    numberOfEmployees: "50-100","
    industry: "Technology Services"}

"
  return <StructuredData data="{organizationData}"   />


export const WebSiteSchema = () => {"
  const websiteData = {}","
      "query-input": "required name=search_term_string"


  }"
    "@context": "https:// comment;
    "@type": "WebSite","
    "@context": "https:// comment;
    name: "Zion Tech Group","
    url: "http,"
    s:// comment;
    description: ""
      "Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.","
    potentialAction: {""
      "@type": "SearchAction","
      target: "http,"
    s:// comment;
      target: "https:// comment;
      "query-input": "required name=search_term_string","
      target: "https:// comment;
"
  return <StructuredData data="{websiteData}"   />


export const ServiceSchema = () => {"
  const serviceData = {},"
    serviceType: "Artificial Intelligence","
    areaServed: "Worldwide","
    hasOfferCatalog: {""
      "@type": "OfferCatalog","
      name: "AI Services"
      itemListElement: ["
        {""
          "@type": "Offer","
          itemOffered: {""
            "@type": "Service","
            name: "Content Creation"}},"
        {""
          "@type": "Offer","
          itemOffered: {""
            "@type": "Service","
            name: "Email Automation"}},"
        {""
          "@type": "Offer","
          itemOffered: {""
            "@type": "Service","
            name: "Customer Support"}}
        {"
          "@type": "Offer","
          "itemOffered": {"
            "@type": "Service","
            "name": "Business Intelligence"


        }

      ]


  }

"
  return <StructuredData data="{serviceData}"   />
}"
        {""
          "@type": "Offer","
          itemOffered: {""
            "@type": "Service","
            name: "Business Intelligence"}}]}}

"
  return <StructuredData data="{serviceData}"   />


"""

export default Component;