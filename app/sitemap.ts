import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  const currentDate = new Date().toISOString();

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Micro SAAS Services
  const microSAASServices = [
    'ai-project-manager',
    'ai-social-media-manager',
    'ai-analytics',
    'ai-email-marketing',
    'ai-customer-support-bot',
    'ai-code-generation',
    'ai-video-generation',
    'ai-voice-cloning',
    'ai-workflow-automation',
    'ai-sales-automation',
    'ai-content-writer',
    'ai-financial-advisor',
    'ai-fashion-design',
    'ai-music-composition',
    'ai-fitness-coach',
    'ai-inventory-manager',
    'ai-hr-assistant',
    'ai-legal-assistant',
  ];

  // AI Services
  const aiServices = [
    'ai-ml',
    'ai-nlp',
    'ai-vision',
    'ai-automation',
    'ai-data-visualization',
    'ai-3d-generation',
    'ai-voice-synthesis',
    'ai-fraud-detection',
  ];

  // IT Services
  const itServices = [
    'cloud-migration',
    'it-consulting',
    'cybersecurity',
    'devops',
    'database',
    'mobile-development',
    'web-development',
    'blockchain',
  ];

  // Generate service pages
  const servicePages = [
    ...microSAASServices.map(service => ({
      url: `${baseUrl}/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...aiServices.map(service => ({
      url: `${baseUrl}/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...itServices.map(service => ({
      url: `${baseUrl}/${service}`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...servicePages];
}