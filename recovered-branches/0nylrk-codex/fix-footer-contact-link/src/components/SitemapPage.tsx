<<<<<<< HEAD

<<<<<<< HEAD
import React from "react";
import { completeSitemap, dynamicPaths } from "@/config/sitemap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SEO } from "./SEO";
import { AppLayout } from "@/layout/AppLayout";
=======
import React from './react';
import { complete_sitemap, dynamic_paths  } from '@/config / sitemap';
import { Link  } from './react-router-dom';
import { ChevronRight  } from './lucide-react';
import { SEO  } from './SEO';
import { AppLayout  } from '@/layout / AppLayout';

export const SitemapPage: React.FC = () => {
=======
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
import React from 'react';
import {completeSitemap, dynamicPaths} from '@/config/sitemap';
import {Link} from 'react-router-dom';
import {ChevronRight} from 'lucide-react';
import {SEO} from './SEO';
import {AppLayout} from '@/layout/AppLayout';
<<<<<<< HEAD
<<<<<<< HEAD
=======


=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import { Link } from 'react-router-dom',
import { ChevronRight } from 'lucide-react',
import { SEO } from './SEO',
import { AppLayout } from '@/layout/AppLayout',
<<<<<<< HEAD
=======



>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export const SitemapPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
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
<<<<<<< HEAD

        canonical="https://app && app.ziontechgroup.com/sitemap-page"
      />;
      <div className="container mx-auto px-4 py-12">;
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>;

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => !route && route.requiredAuth);
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      to={route && route.path} 
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route && route.requiredRoles?.includes('jobSeeker') || ;
                  route && route.requiredRoles?.includes('creator');
                );
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      to={route && route.path} 
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route && route.requiredRoles?.includes('employer') || ;
                  route && route.requiredRoles?.includes('buyer');
                );
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      to={route && route.path} 
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route && route.requiredAuth && ;
                  (!route && route.requiredRoles || route && route.requiredRoles.length === 0);
                );
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      to={route && route.path} 
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route && route.requiredRoles?.includes('admin');
                );
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      to={route && route.path} 
                      className="flex items-center hover:text-zion-purple">;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route && route.label}
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;

          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>;
            <ul className="space-y-2">;
              {Object && Object.entries(dynamicPaths).map(([key, path]) => (;
                <li key={key}>;
                  <div className="flex items-center text-zion-slate">;
                    <ChevronRight className="h-4 w-4 mr-2" />;
                    {path} <span className="ml-2 text-xs italic">({key})</span>;
                  </div>;
                </li>;
              ))}
<<<<<<< HEAD
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
=======
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
            </ul>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </AppLayout>;
  );
};
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
