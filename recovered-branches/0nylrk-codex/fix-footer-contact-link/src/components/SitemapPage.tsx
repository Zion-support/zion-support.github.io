import React from './react';
import { complete_sitemap, dynamic_paths  } from '@/config / sitemap';
import { Link  } from './react-router-dom';
import { ChevronRight  } from './lucide-react';
import { SEO  } from './SEO';
import { AppLayout  } from '@/layout / AppLayout';

export const SitemapPage: React.FC = () => {
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import { Link } from 'react-router-dom',
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO',
import { AppLayout } from '@/layout/AppLayout',  return (
    <AppLayout>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, zion, ai marketplace, navigation"
        canonical="https://app.ziontechgroup.com/sitemap-page"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
  );
};