import React from 'react', import { Helmet  } from 'react-helmet-async', interface SEOEnhancerProps {,
 title?: string, description?: string, keywords?: string, image?: string, url?: string, type?: string, structuredData?: any;
} const SEOEnhancer: Reac t.FC<SEOEnhancerProps> = ({ title = "Zion Tech Group - Leading Technology Solutions Provider", description = "Transform your business with cutting-edge AI, cloud architecture, and innovative development services.Expert technology solutions for modern enterprises.", keywords = "technology solutions, AI services, cloud architecture, software development, digital transformation, IT consulting, micro-saas, enterprise solutions", image = "https: ,
</SEOEnhancerProps>,
})