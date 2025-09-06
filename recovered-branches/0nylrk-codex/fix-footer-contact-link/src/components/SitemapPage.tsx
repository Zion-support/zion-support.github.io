export const SitemapPage: React.FC = () => {
=======
import React from 'react';
import {completeSitemap, dynamicPaths} from '@/config/sitemap';
import {Link} from 'react-router-dom';
import {ChevronRight} from 'lucide-react';
import {SEO} from './SEO';
import {AppLayout} from '@/layout/AppLayout';
export const SitemapPage: React.FC = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <AppLayout>;
          {/* Public Pages */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Public Pages;
            </h2>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter ((route) => !route.required_auth);
                .map ((route) => (
                  <li key={route.path}>;
                    <Link;
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
          {/* Admin Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Admin Pages;
            </h2>;
            <p className="text - sm text - zion - slate mb - 4">;
              Requires admin account;
            </p>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter ((route) => route.required_roles?.includes ("admin"));
                .map ((route) => (
                  <li key={route.path}>;
                    <Link;
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
            </ul>;
          </div>;
        </div>;
      </div>;
=======
    </AppLayout>);
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
