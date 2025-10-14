import { MetadataRoute } from &apos;next&apos;;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = &apos;https://ziontechgroup.com&apos;

  return [{
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: &apos;yearly&apos;,
      priority: 1,
    },
    {
      url: `${baseUrl}/ai-solutions`,
      lastModified: new Date(),
      changeFrequency: &apos;monthly&apos;,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/it-solutions`,
      lastModified: new Date(),
      changeFrequency: &apos;monthly&apos;,
      priority: 0.8,
    },];
}