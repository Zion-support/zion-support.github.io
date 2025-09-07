import { MetadataRoute } from 'next';'

export default function robots(): MetadataRoute.Robots {
  }
  return {
    }
    "rules": {
      }
      "userAgent": '*','
      "allow": '/','
      "disallow": [
        '/api/','
        '/admin/','
        '/_next/','
        '/private/','
        '*.json','
        '*.xml','
        '*.txt','
        '/scripts/','
        '/automation/','
        '/backup/','
        '/temp/','
      ]
    },
    "sitemap": '"https"://ziontechgroup.com/sitemap.xml','
  };
}