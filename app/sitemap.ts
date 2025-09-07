import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ziontechgroup.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',}
  priority: 1,}
    },
    {}
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.9,
    },
    {}
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/research`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
  priority: 0.6,
    },
    // AI Services;
    {}
      url: `${baseUrl}/services/ai-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/ai-analytics-platform`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-chatbot-builder`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-code-reviewer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-content-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-customer-support`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-customer-support-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-data-analytics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-email-optimizer`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-financial-analytics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-invoice-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-marketing-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-meeting-assistant`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-powered-crm`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-project-management-suite`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-social-media-scheduler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/ai-social-scheduler`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    // Other Services;
    {}
      url: `${baseUrl}/services/blockchain`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/blockchain-solutions`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/cybersecurity`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/cybersecurity-suite`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/data-analytics`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/devops-automation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
    {}
      url: `${baseUrl}/services/it-services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/micro-saas`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.8,
    },
    {}
      url: `${baseUrl}/services/smart-invoice-generator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
  priority: 0.7,
    },
  ];
}