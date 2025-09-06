<<<<<<< HEAD

<<<<<<< HEAD

import { SEO } from './SEO';

=======
import React from 'react';
import { completeSitemap, dynamicPaths  } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
<<<<<<< HEAD
import { SEO  } from './SEO';
=======
import React from 'react'
import { SEO } from './SEO'
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import { SEO } from './SEO';
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {

<<<<<<< HEAD
const resolvePath = (path: string): string => pathMap[path] ?? path,

export const SitemapPage: React.FC = () => {
=======
import { SEO  } from './SEO';
import { SEO } from './SEO';
>>>>>>> // Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {

  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'}
const resolvePath = (path: string): string => pathMap[path] ?? path
onst resolvePath = (path: string): string => pathMap[path] ?? path,

xport const SitemapPage: React.FC = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'}
const resolvePath = (path: string): string => pathMap[path] ?? path
=======
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import Link from 'next/link',
import { ChevronRight } from 'lucide-react'
import { SEO } from './SEO',
// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string string> = {
  '/about': '/content/about/blog': '/blog/careers': '/careers/green-it': '/content/green-it/sitemap-page': '/content/sitemap-page/talent-onboarding': '/talent-onboarding/forgot-password': '/forgot-password/signup/talent': '/auth/signup/talent/signup/client': '/auth/signup/client/talent-dashboard': '/talent-dashboard/client-dashboard': '/client-dashboard/hiring-tracker': '/dashboard/hiring-tracker/messages': '/dashboard/messages/notifications': '/dashboard/notifications/project/:projectId/room': '/dashboard/project/:projectId/room/post-job': '/marketplace/post-job'},

<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const resolvePath = (path: string): string => pathMap[path] ?? path,

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
export const SitemapPage: React.FC = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, zion, ai marketplace, navigation"
        canonical="https://app.ziontechgroup.com/content/sitemap-page"
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
<<<<<<< HEAD
<<<<<<< HEAD

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
=======
>>>>>>>         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
        
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => !route.requiredAuth)
                .map(route => (
                  <li key={route.path}>
                    <Link
                      href={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
<<<<<<< HEAD
<<<<<<< HEAD

=======
            </ul>
          </div>
>>>>>>>           {/* Talent Routes */}
>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <>;


        


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        canonical="https://app && app.ziontechgroup.com/content/sitemap-page"
      />;
      <div className="container mx-auto px-4 py-12">;
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>;

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">;
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>;
            <ul className="space-y-2">;
              {completeSitemap;
                .filter(route => !route && route.requiredAuth);
                .map(route => (;
                  <li key={route && route.path}>;
                    <Link

      <SEO;
        title="Sitemap | Zion AI Marketplace";
        description="Complete sitemap of the Zion AI Marketplace";
        keywords="sitemap, zion, ai marketplace, navigation";
        canonical="https://app.ziontechgroup.com / content / sitemap - page";
      />;
      <div className="container mx - auto px - 4 py - 12">;
        <h1 className="text - 3xl font - bold mb - 8">Sitemap</h1>;
        <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
          {/* Public Pages */}
          <div className="bg - zion - blue - dark p - 6 rounded - lg">;
            <h2 className="text - xl font - bold mb - 4 text - zion - cyan">Public Pages</h2>;
            <ul className="space - y-2">;
              {complete_sitemap;
                .filter (route => !route.required_auth);
                .map (route => (
                  <li key={route.path}>;
                    <Link;
                      href = {resolve_path (route.path), }
                      className="flex items - center hover:text - zion - purple";
                    >;
                      <ChevronRight className="h - 4 w - 4 mr - 2" />;

                      {route.label}
                    </Link>;
                  </li>));
              }


            </ul>;
          </div>;


>>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Talent Routes */}
>>>>>>>           <div className="bg-zion-blue-dark p-6 rounded-lg">
=======
            </ul>
          </div>
=======
            </ul>;
          </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      href = {resolvePath(route.path),}
=======
                      href={resolvePath(route.path)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
<<<<<<< HEAD
<<<<<<< HEAD

=======
            </ul>
          </div>
>>>>>>>           {/* Client Routes */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Client Routes */}
>>>>>>>           <div className="bg-zion-blue-dark p-6 rounded-lg">
=======
            </ul>
          </div>
=======
            </ul>;
          </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      href = {resolvePath(route.path),}
=======
                      href={resolvePath(route.path)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
<<<<<<< HEAD
<<<<<<< HEAD

=======
            </ul>
          </div>
>>>>>>>           {/* Shared Routes */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Shared Routes */}
>>>>>>>           <div className="bg-zion-blue-dark p-6 rounded-lg">
=======
            </ul>
          </div>
=======
            </ul>;
          </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      href = {resolvePath(route.path),}
=======
                      href={resolvePath(route.path)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
<<<<<<< HEAD
<<<<<<< HEAD

=======
            </ul>
          </div>
>>>>>>>           {/* Admin Routes */}
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Admin Routes */}
>>>>>>>           <div className="bg-zion-blue-dark p-6 rounded-lg">
=======
            </ul>
          </div>
=======
            </ul>;
          </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
                      href = {resolvePath(route.path),}
=======
                      href={resolvePath(route.path)}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
<<<<<<< HEAD
<<<<<<< HEAD

          {/* Dynamic Routes */}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
<<<<<<< HEAD
>>>>>>>           {/* Dynamic Routes */}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
                    </Link>;
                  </li>;
                ));
              }
            </ul>;
          </div>;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          {/* Dynamic Routes */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>
            <ul className="space-y-2">
<<<<<<< HEAD
<<<<<<< HEAD

=======
              {Object.entries(dynamicPaths).map(([key, path],) => (
>>>>>>>                 <li key={key}>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                <li key={key}>
>>>>>>>                   <div className="flex items-center text-zion-slate">
=======
              {Object.entries(dynamicPaths).map(([key, path],) => (
=======
              {Object.entries(dynamicPaths).map(([key, path]) => (
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
                <li key={key}>
                  <div className="flex items-center text-zion-slate">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {path} <span className="ml-2 text-xs italic">({key})</span>
                  </div>
                </li>
              ))}
<<<<<<< HEAD

<<<<<<< HEAD
            </ul>;
=======
ursor/fix-website-loading-errors-and-merge-6662
>>>>>>>             </ul>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
'"}
  const sitemapData = [{
      title: 'Main Pages'
      links: [
        { name: 'Home', url: '/' }
        { name: 'About', url: '/about' }
        { name: 'Services', url: '/services' }
        { name: 'Contact', url: '/contact' }
        { name: 'Blog', url: '/blog' }
        { name: 'Careers', url: '/careers' }
      ]
}
    {
      title: 'Services'
      links: [{ name: 'AI Services', url: '/services / ai' }
        { name: 'IT Services', url: '/services / it' }
        { name: 'Cloud Solutions', url: '/services / cloud' }
        { name: 'Cybersecurity', url: '/services / cybersecurity' }
        { name: 'Digital Transformation', url: '/services / digital - transformation' }
      ]
}
    {
      title: 'Solutions'
      links: [{ name: 'Enterprise', url: '/solutions / enterprise' }
        { name: 'Healthcare', url: '/solutions / healthcare' }
        { name: 'Financial Services', url: '/solutions / financial' }
        { name: 'Manufacturing', url: '/solutions / manufacturing' }
      ]
}
    {
      title: 'Resources'
      links: [{ name: 'Case Studies', url: '/case - studies' }
        { name: 'White Papers', url: '/white - papers' },        { name: 'Webinars', url: '/webinars' }
        { name: 'Documentation', url: '/docs' }
        { name: 'API Reference', url: '/api' }
      ]}
        { name: 'Case Studies', url: '/case-studies' },'
        { name: 'White Papers', url: '/white-papers' },'
        { name: 'Webinars', url: '/webinars' },'
        { name: 'Documentation', url: '/docs' },'        { name: 'API Reference', url: '/api' }
      ]}
  ]
  return (<div className="min - h-screen bg-slate - 900 text-white py-16">
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
      />
      <div className="container mx - auto px-4 max - w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent">            Sitemap
          </h1>"
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
            Navigate through our comprehensive website structure to find the information and services you need.</p>
        </div>
"
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapData.map((section, sectionIndex)  => ("
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">"
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title}
              </h2>
              <ul className="space - y-2">
                {section.links.map((link, linkIndex) => (<li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-zinc - 300 hover:text-cyan - 400 transition - colors duration - 200 block py-1">
                      {link.name}
                    </a>
                  </li>) ) }
              </ul>
            </div>) ) }
        </div>
"
        <div className="mt-16 text-center">"
          <p className="text-zinc-400">
            Can't find what you're looking for?{' '}"
            <a href="/contact" className="text-cyan-400 hover:text-cyan-300 transition-colors">
              Contact us
            </a>{' '}
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>;) }
'"
}
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
            </ul>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </div>;
        </div>;
      </div>;
    </>;
  );
};
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 

>>>>>>> >>>>>>> ursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
