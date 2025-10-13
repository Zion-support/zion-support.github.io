// Metadata utility functions

export const siteMetadata = {
  title: "Zion Tech Group - Advanced AI and IT Solutions",
  description: "Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses.",
  keywords: "AI solutions, IT services, digital transformation, business automation, technology consulting",
  author: "Zion Tech Group",
  url: "https://ziontechgroup.com",
  image: "https://ziontechgroup.com/og-image.jpg",
  twitter: "@ziontechgroup",
  facebook: "ziontechgroup",
  linkedin: "ziontechgroup",
  github: "ziontechgroup"
};

export function generateMetadata(pageTitle?: string, pageDescription?: string) {
  return {
    title: pageTitle ? `${pageTitle} - ${siteMetadata.title}` : siteMetadata.title,
    description: pageDescription || siteMetadata.description,
    keywords: siteMetadata.keywords,
    author: siteMetadata.author,
    openGraph: {
      title: pageTitle ? `${pageTitle} - ${siteMetadata.title}` : siteMetadata.title,
      description: pageDescription || siteMetadata.description,
      url: siteMetadata.url,
      siteName: siteMetadata.title,
      images: [
        {
          url: siteMetadata.image,
          width: 1200,
          height: 630,
          alt: siteMetadata.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle ? `${pageTitle} - ${siteMetadata.title}` : siteMetadata.title,
      description: pageDescription || siteMetadata.description,
      images: [siteMetadata.image],
    },
  };
}

export default siteMetadata;