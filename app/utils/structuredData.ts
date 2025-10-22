// Structured data utilities
export function structuredData() {
  return {
    generateOrganizationSchema: (orgData: any) => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      ...orgData
    }),
    generateWebSiteSchema: (siteData: any) => ({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      ...siteData
    }),
    generateBreadcrumbSchema: (breadcrumbs: any[]) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    })
  }
}