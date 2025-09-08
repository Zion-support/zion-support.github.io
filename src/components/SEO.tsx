import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  ogType?: 'website' | 'article' | 'book' | 'profile' | 'music.song' | 'music.album' | 'music.playlist' | 'music.radio_station' | 'video.movie' | 'video.episode' | 'video.tv_show' | 'video.other' | 'business.business' | 'website';
  author?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
            "name": "AI Business Intelligence",
            "description": "Advanced analytics and insights powered by artificial intelligence"
            "name": "Cybersecurity Platform",
            "description": "Comprehensive threat detection and response system"
            "name": "Cloud Cost Optimization",
            "description": "AI-driven cloud cost management solutions"
          }
        }
      ]
  };

  // Get metadata for current route
  const routeMetadata = defaultMetadata[location.pathname] || defaultMetadata['/'];
  
  // Merge provided props with route defaults
  const finalMetadata = useMemo(() => ({
    title: title || routeMetadata.title,
    description: description || routeMetadata.description,
    keywords: [...new Set([...keywords, ...routeMetadata.keywords])],
    image: currentImage,
    type,
    section: section || routeMetadata.section,
  }), [title, description, keywords, currentImage, type, section, routeMetadata]);

  // Structured data for website
        {JSON.stringify(defaultStructuredData)}
      </script>
    </Helmet>
  );
}


  );
}
