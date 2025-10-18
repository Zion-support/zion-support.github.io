// SEO data utilities

export function seoData() {
  return {
    generateMetaTags: (title: string, description: string) => ({
      title,
      description,
      keywords: '',
      canonical: ''
    }),
    generateStructuredData: (type: string, data: any) => ({
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    })
  };
}
