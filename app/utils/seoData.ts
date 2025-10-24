export interface StructuredData {
  app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts;
  app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts;
  name: app/utils/seoData.ts;
  description: app/utils/seoData.ts;
  url: app/utils/seoData.ts;
  logo?: app/utils/seoData.ts;
  sameAs?: string[]
  telephone?: app/utils/seoData.ts;
  email?: app/utils/seoData.ts;
  openingHours?: string[]
  priceRange?: app/utils/seoData.ts;
  contactPoint?: {
    app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts;
    telephone: app/utils/seoData.ts;
    contactType: app/utils/seoData.ts;
  }

  address?: {
    app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts;
    streetAddress: app/utils/seoData.ts;
    addressLocality: app/utils/seoData.ts;
    addressRegion: app/utils/seoData.ts;
    postalCode: app/utils/seoData.ts;
    addressCountry: app/utils/seoData.ts;
  }

}

export const generateStructuredData = (data: Partial<StructuredData>): StructuredData => {
  return {
    app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts'app/utils/seoData.ts,
    app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts'app/utils/seoData.ts,
    name: app/utils/seoData.ts'app/utils/seoData.ts,
    description: app/utils/seoData.ts'app/utils/seoData.ts,
    url: app/utils/seoData.ts'app/utils/seoData.ts,
    logo: app/utils/seoData.ts'app/utils/seoData.ts,
    sameAs: [
      app/utils/seoData.ts'app/utils/seoData.ts,
      app/utils/seoData.ts'app/utils/seoData.ts,
      app/utils/seoData.ts'app/utils/seoData.app/utils/seoData.ts;
    ],
    contactPoint: {
      app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts'app/utils/seoData.ts,
      telephone: app/utils/seoData.ts'app/utils/seoData.ts,
      contactType: app/utils/seoData.ts'app/utils/seoData.app/utils/seoData.ts;
    },
    address: {
      app/utils/seoData.ts'app/utils/seoData.ts: app/utils/seoData.ts'app/utils/seoData.ts,
      streetAddress: app/utils/seoData.ts'app/utils/seoData.ts,
      addressLocality: app/utils/seoData.ts'app/utils/seoData.ts,
      addressRegion: app/utils/seoData.ts'app/utils/seoData.ts,
      postalCode: app/utils/seoData.ts'app/utils/seoData.ts,
      addressCountry: app/utils/seoData.ts'app/utils/seoData.app/utils/seoData.ts;
    },
    ...app/utils/seoData.ts;
  }

}

export const defaultSEOData = {
  title: app/utils/seoData.ts'app/utils/seoData.ts,
  description: app/utils/seoData.ts'app/utils/seoData.ts,
  keywords: app/utils/seoData.ts'app/utils/seoData.ts,
  ogImage: app/utils/seoData.ts'app/utils/seoData.ts,
  canonical: app/utils/seoData.ts'app/utils/seoData.app/utils/seoData.ts;
}
