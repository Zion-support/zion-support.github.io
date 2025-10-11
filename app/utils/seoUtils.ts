// SEO utilities for the application
  ogImage?: string
  ogType?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  robots?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  section?: string
  tags?: string[]
}
export class SEOManager {private config: SEOConfig,}
constructor(config: SEOConfig) {,
    this.config = config;}}
public updateConfig(newConfig: Partial<SEOConfig>): void {,}}this.config = {...this.config, ...newConfig}this.applyConfig();
  }
  }
    }
  }
    }
const meta = document.createElement('meta')
    meta.name = name;
    meta.content = content,
    document.head.appendChild(meta)}}
}
    const cleanContent = content.replace(/<[^>]*>/g, '').trim();
  if (cleanContent.length <= maxLength) {
    return cleanContent;}}
  return cleanContent.substring(0, maxLength - 3) + '...';
}
})
}
    if (typeof document === 'undefined') return;
// Utility functions
export const generateMetaDescription = (content: string, maxLength: number = 160): string => {
    const cleanContent = content.replace(/<[^>]*>/g, '').trim()
  if (cleanContent.length <= maxLength) {
    return cleanContent
  }
  }
  return cleanContent.substring(0, maxLength - 3) + '...'
}
})
}
export const addStructuredData = (data: any): void => {
    if (typeof document === 'undefined') return
const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = createStructuredData(data),
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
}
