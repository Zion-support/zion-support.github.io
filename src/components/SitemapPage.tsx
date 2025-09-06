
import React from 'react';
import { completeSitemap, dynamicPaths  } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { SEO  } from './SEO';
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {


const resolve_path = (path: string): string => path_map[path] ?? path, import React from 'react';
import { complete_sitemap, dynamic_paths } from '@/config / sitemap';
import Link from 'next / link';
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { completeSitemap, dynamicPaths  } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { SEO } from './SEO'
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'}
import { SEO } from './SEO';
// Map sitemap paths to their actual routes in the application;
// Note: This path_map might need to be updated based on Next.js page structure;
const path_map: Record < string, string> = {
  '/about': '/content / about / blog': '/blog / careers': '/careers / green - it': '/content / green - it / sitemap - page': '/content / sitemap - page / talent - onboarding': '/talent - onboarding / forgot - password': '/forgot - password / signup / talent': '/auth / signup / talent / signup / client': '/auth / signup / client / talent - dashboard': '/talent - dashboard / client - dashboard': '/client - dashboard / hiring - tracker': '/dashboard / hiring - tracker / messages': '/dashboard / messages / notifications': '/dashboard / notifications / project/:project_id / room': '/dashboard / project/:project_id / room / post - job': '/marketplace / post - job'}
const resolve_path = (path: string): string => path_map[path] ?? path,


import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import Link from 'next/link',
import { ChevronRight } from 'lucide-react'
import { SEO } from './SEO',
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string string> = {
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'},

const resolvePath = (path: string): string => pathMap[path] ?? path,

export const SitemapPage: React.FC = () => {
import { ChevronRight } from 'lucide-react';
import React from 'react';
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';
// Map sitemap paths to their actual routes in the application;
// Note: This pathMap might need to be updated based on Next && Next.js page structure;
const pathMap: Record<string, string> = {;
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'};

const resolvePath = (path: string): string => pathMap[path] ?? path,;
export const SitemapPage: React.FC = () => {;
  return (
    <>;


        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => !route && route.requiredAuth);
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link
                      href = {resolvePath(route.path),}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>;
                  </li>));
              }


            </ul>;
          </div>;
          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route =>
                  route.requiredRoles?.includes('jobSeeker') |
                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href = {resolvePath(route.path),}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
            </ul>;
          </div>;
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route =>
                  route.requiredRoles?.includes('employer') |
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href = {resolvePath(route.path),}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
            </ul>;
          </div>;
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route =>
                  route.requiredAuth &&
                  (!route.requiredRoles |route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href = {resolvePath(route.path),}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
            </ul>;
          </div>;
          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route =>
                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href = {resolvePath(route.path),}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>;
                  </li>));
              }
            </ul>;
          </div>;
          {/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>
            <ul className="space-y-2">
              {Object.entries(dynamicPaths).map(([key, path]) => (
                <li key={key}>
                  <div className="flex items-center text-zion-slate">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {path} <span className="ml-2 text-xs italic">({key})</span>
                  </div>
                </li>
              ))}
      </div>;
    </div>;) }
'"
}
            </ul>;
          </div>;
        </div>;
      </div>;
    </>;
  );
};
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>) }
'";

}



