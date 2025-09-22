
import React from 'react',;
import { completeSitemap, dynamicPaths } from '@/config/sitemap',;
import { Link } from 'react-router-dom',;
import { ChevronRight } from 'lucide-react',;
import { SEO } from './SEO',;
import { AppLayout } from '@/layout/AppLayout',;
;
export const SitemapPage:React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO;
        title="Sitemap | Zion AI Marketplace";
        description="Complete sitemap of the Zion AI Marketplace";
        keywords="sitemap, zion, ai marketplace, navigation";

          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>;
            <ul className="space-y-2">;

                <li key={key}>;
                  <div className="flex items-center text-zion-slate">;
                    <ChevronRight className="h-4 w-4 mr-2" />;
                    {path} <span className="ml-2 text-xs italic">({key})</span>;
                  </div>;
                </li>;
              ))}
