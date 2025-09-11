
<<<<<<< HEAD
<<<<<<< HEAD

export const SitemapPage: React.FC = () => {
import React from "react";
import { completeSitemap, dynamicPaths } from "@/config/sitemap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SEO } from "./SEO";
import { AppLayout } from "@/layout/AppLayout";
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import { Link } from 'react-router-dom',
import { ChevronRight } from 'lucide-react',
import { SEO } from './SEO',
import { AppLayout } from '@/layout/AppLayout',


<<<<<<< HEAD
<<<<<<< HEAD
export const SitemapPage: React.FC = () => {
  return (
    <AppLayout>;

export const SitemapPage: React.FC = () => {;
  return (

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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export const SitemapPage: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (
    <AppLayout>;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO;
        title="Sitemap | Zion AI Marketplace";
        description="Complete sitemap of the Zion AI Marketplace";
        keywords="sitemap, zion, ai marketplace, navigation";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        canonical="https://app.ziontechgroup.com / sitemap - page";
      />;
      <div className="container mx - auto px - 4 py - 12">;
        <h1 className="text - 3xl font - bold mb - 8">Sitemap</h1>;
        <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Link>;
                  </li>))}
            </ul>;
          </div>;
          {/* Talent Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Talent Pages;
            </h2>;
            <p className="text - sm text - zion - slate mb - 4">;
              Requires talent or creator account;
            </p>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (
                  (route) =>;
                    route.required_roles?.includes ("job_seeker") ||;
                    route.required_roles?.includes ("creator"),
                );
                .map ((route) => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Link>;
                  </li>))}
            </ul>;
          </div>;
          {/* Client Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Client Pages;
            </h2>;
            <p className="text - sm text - zion - slate mb - 4">;
              Requires employer or buyer account;
            </p>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (
                  (route) =>;
                    route.required_roles?.includes ("employer") ||;
                    route.required_roles?.includes ("buyer"),
                );
                .map ((route) => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Link>;
                  </li>))}
            </ul>;
          </div>;
          {/* Shared Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Authenticated User Pages;
            </h2>;
            <p className="text - sm text - zion - slate mb - 4">;
              Requires any account type;
            </p>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (
                  (route) =>;
                    route.required_auth &&;
                    (!route.required_roles || route.required_roles.length === 0),
                );
                .map ((route) => (
                  <li key={route.path}>;
                    <Link;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      to={route.path}
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;
                      {route.label}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </Link>;
                  </li>))}
            </ul>;
          </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        canonical="https://app && app.ziontechgroup.com/sitemap-page"
      />;
      <div className="container mx-auto px-4 py-12">;
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
        canonical="https://app.ziontechgroup.com/sitemap-page";
      />;
      <div className="container mx-auto px-4 py-12">;
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>;
        ;
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => !route.requiredAuth);
                .map(route => (;
                  <li key={route.path}>;
                    <Link ;
                      to={route.path} ;
                      className="flex items-center hover:text-zion-purple";
                    >;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route.label}
                    </Link>;
                  </li>;
                ));              }
            </ul>;
          </div>;
          ;
          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route.requiredRoles?.includes('jobSeeker') || ;
                  route.requiredRoles?.includes('creator');
                );
                .map(route => (;
                  <li key={route.path}>;
                    <Link ;
                      to={route.path} ;
                      className="flex items-center hover:text-zion-purple";
                    >;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route.label}
                    </Link>;
                  </li>;
                ));              }
            </ul>;
          </div>;
          ;
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route.requiredRoles?.includes('employer') || ;
                  route.requiredRoles?.includes('buyer');
                );
                .map(route => (;
                  <li key={route.path}>;
                    <Link ;
                      to={route.path} ;
                      className="flex items-center hover:text-zion-purple";
                    >;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route.label}
                    </Link>;
                  </li>;
                ));              }
            </ul>;
          </div>;
          ;
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route.requiredAuth && ;
                  (!route.requiredRoles || route.requiredRoles.length === 0);
                );
                .map(route => (;
                  <li key={route.path}>;
                    <Link ;
                      to={route.path} ;
                      className="flex items-center hover:text-zion-purple";
                    >;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route.label}
                    </Link>;
                  </li>;
                ));              }
            </ul>;
          </div>;
          ;
          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => ;
                  route.requiredRoles?.includes('admin');
                );
                .map(route => (;
                  <li key={route.path}>;
                    <Link ;
                      to={route.path} ;
                      className="flex items-center hover:text-zion-purple";
                    >;
                      <ChevronRight className="h-4 w-4 mr-2" />;
                      {route.label}
                    </Link>;
                  </li>;
                ));              }
            </ul>;
          </div>;
          ;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>;
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>;
            <ul className="space-y-2">;
<<<<<<< HEAD
<<<<<<< HEAD
              {Object.entries(dynamicPaths).map(([key, path]) => (;
=======
              {Object && Object.entries(dynamicPaths).map(([key, path]) => (;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
              {Object && Object.entries(dynamicPaths).map(([key, path]) => (;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <li key={key}>;
                  <div className="flex items-center text-zion-slate">;
                    <ChevronRight className="h-4 w-4 mr-2" />;
                    {path} <span className="ml-2 text-xs italic">({key})</span>;
                  </div>;
                </li>;
              ))}
<<<<<<< HEAD
<<<<<<< HEAD



=======
=======



=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    </Link>;
                  </li>))}
            </ul>;
          </div>;
          {/* Dynamic Routes */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">;
              Dynamic Pages;
            </h2>;
            <p className="text - sm text - zion - slate mb - 4">;
              Pages with dynamic parameters;
            </p>;
            <ul className="space - y-2">;
              {Object.entries (dynamic_paths).map (([key, path]) => (
                <li key={key}>;
                  <div className="flex items - center text - zion - slate">;
                    <ChevronRight className="h - 4 w - 4 mr - 2" />;
                    {path} <span className="ml - 2 text - xs italic">({key})</span>;
                  </div>;
                </li>))}
<<<<<<< HEAD
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            </ul>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD

    </AppLayout>);
}
;

    </AppLayout>);
}
;
    </AppLayout>;
  ),;
},; /> <div className="container mx-auto px-4 py-12" > <h1 className="text-3xl font-bold mb-8" >Sitemap</h1> <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" > {
  /* Public Pages */ 
}.filter (route => !route.requiredAuth) .map (route => (<li key= {
  route.path 
}> <Link </Link> </li>) ) 
}</ul> </div> .filter (route => route.requiredRoles?.includes ('jobSeeker') || route.requiredRoles?.includes ('creator') ) .map (route => (<li key= {
  route.path 
}> <Link </Link> </li>) ) 
}</ul> </div> .filter (route => route.requiredRoles?.includes ('employer') || route.requiredRoles?.includes ('buyer') ) .map (route => (<li key= {
  route.path 
}> <Link </Link> </li>) ) 
}</ul> </div> .filter (route => route.requiredAuth && (!route.requiredRoles || route.requiredRoles.length === 0) ) .map (route => (<li key= {
  route.path 
}> <Link </Link> </li>) ) 
}</ul> </div> .filter (route => route.requiredRoles?.includes ('admin') ) .map (route => (<li key= {
  route.path 
}> <Link </Link> </li>) ) 
}</ul> </div> </div> </li>) ) 
}</ul> </div> </div> </div> </AppLayout>) 
};

import React from "react";
import { completeSitemap, dynamicPaths } from "@/config/sitemap";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { SEO } from "./SEO";
import { AppLayout } from "@/layout/AppLayout";

export const SitemapPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, zion, ai marketplace, navigation"
        canonical="https://app.ziontechgroup.com/sitemap-page"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Public Pages
            </h2>
            <ul className="space-y-2">
              {completeSitemap
                .filter((route) => !route.requiredAuth)
                .map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Talent Pages
            </h2>
            <p className="text-sm text-zion-slate mb-4">
              Requires talent or creator account
            </p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(
                  (route) =>
route.requiredRoles?.includes("jobSeeker") |
                    route.requiredRoles?.includes("creator")
                )
                .map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Client Pages
            </h2>
            <p className="text-sm text-zion-slate mb-4">
              Requires employer or buyer account
            </p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(
                  (route) =>
route.requiredRoles?.includes("employer") |
                    route.requiredRoles?.includes("buyer")
                )
                .map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Authenticated User Pages
            </h2>
            <p className="text-sm text-zion-slate mb-4">
              Requires any account type
            </p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(
                  (route) =>
                    route.requiredAuth &&
(!route.requiredRoles |route.requiredRoles.length === 0)
                )
                .map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Admin Pages
            </h2>
            <p className="text-sm text-zion-slate mb-4">
              Requires admin account
            </p>
            <ul className="space-y-2">
              {completeSitemap
                .filter((route) => route.requiredRoles?.includes("admin"))
                .map((route) => (
                  <li key={route.path}>
                    <Link
                      to={route.path}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">
              Dynamic Pages
            </h2>
            <p className="text-sm text-zion-slate mb-4">
              Pages with dynamic parameters
            </p>
            <ul className="space-y-2">
              {Object.entries(dynamicPaths).map(([key, path]) => (
                <li key={key}>
                  <div className="flex items-center text-zion-slate">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {path} <span className="ml-2 text-xs italic">({key})</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            </ul>;
          </div>;
        </div>;
      </div>;
<<<<<<< HEAD
    </AppLayout>;
  );
};
=======

    </AppLayout>);
}
;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    </AppLayout>;
  );
};
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
