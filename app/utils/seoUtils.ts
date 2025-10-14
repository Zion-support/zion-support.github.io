export const seoUtils = {
  generateTitle: (pageTitle: string, siteName: string = &apos;Zion Tech Group&apos) => {
    return `${pageTitle} | ${siteName}`
  },
  
  generateDescription: (content: string, maxLength: number = 160) => {if (content.length <= maxLength) return content
    return content.substring(0, maxLength - 3) + &apos;...&apos},
  
  generateKeywords: (tags: string[]) => {
    return tags.join(&apos;, &apos;)
  },
  
  generateCanonicalUrl: (path: string, baseUrl: string = &apos;https://ziontechgroup.com&apos) => {
    return `${baseUrl}${path}`
  },
  
  generateOgImage: (title: string, description: string) => {const params = new URLSearchParams({
      title,
      description,
      site: &apos;Zion Tech Group&apos})
    return `https://og-image.vercel.app/${encodeURIComponent(title)}?${params.toString()}`
  },
  
  generateStructuredData: (data: any) => {
    return {
      &apos;@context&apos;: &apos;https: //schema.org&apos;,
      &apos;@type&apos;: &apos;Organization&apos;,
      name: &apos;Zion Tech Group&apos;,
      url: &apos;https://ziontechgroup.com&apos;,
      logo: &apos;https://ziontechgroup.com/logo.png&apos;,
      description: &apos;Leading technology solutions provider&apos;,
      ...data
    }
  }
}