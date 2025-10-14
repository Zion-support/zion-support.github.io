  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
}) => {
  useEffect(() => {
    // Add structured data to the page
    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
    return undefined;
  }, [structuredData]);
  ];
          document.head.removeChild(script)
      }
    return undefined}, [structuredData])
  // Generate meta tags
  ]
  return (
    <Helmet>
      <title>{title}</title>
      { metaTags.map((tag, _index) => ( }
        <meta key={_index} {...tag} />
    </Helmet>
  )
// Default structured data for the organization;
// Default structured data for the organization
const  {
  "@context": "https://schema.org","
  "@type": "Organization","
  "name": "Zion Tech Group","
  "description": "Leading provider of AI and IT solutions. Transform your business with cutting-edge technology, automation, and digital innovation.","
  "url": "https://ziontechgroup.com","
  "logo": "https://ziontechgroup.com/images/logo.png","
  "contactPoint": {"
    "@type": "ContactPoint","
    "telephone": "+1-555-0123","
    "contactType": "customer service","
    "availableLanguage": "English"},"
    "availableLanguage": "English";}"
  },
  "sameAs": ["https://www.linkedin.com/company/zion-tech-group","
    "https://twitter.com/ziontechgroup","
    "https://github.com/zion-tech-group""
  ],
export default SEOEnhancer;
