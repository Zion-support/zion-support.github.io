// Metadata configuration

export const siteConfig = {
  name: "Zion Tech Group",
  description: "Advanced AI and IT Solutions",
  url: "https://ziontechgroup.com",
  ogImage: "https://ziontechgroup.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/ziontechgroup",
    github: "https://github.com/ziontechgroup",
  },
};

export const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};