
<<<<<<< HEAD
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
=======
import React from 'react';
import Link from 'next/link';

// Map sitemap paths to their actual routes in the application
// Note: This pathMap might need to be updated based on Next.js page structure
const pathMap: Record<string, string> = {_'/about': '/content/about', _'/blog': '/blog', _'/careers': '/careers', _'/green-it': '/content/green-it', _'/sitemap-page': '/content/sitemap-page', _'/talent-onboarding': '/talent-onboarding', _'/forgot-password': '/forgot-password', _'/signup/talent': '/auth/signup/talent', _'/signup/client': '/auth/signup/client', _'/talent-dashboard': '/talent-dashboard', _'/client-dashboard': '/client-dashboard', _'/hiring-tracker': '/dashboard/hiring-tracker', _'/messages': '/dashboard/messages', _'/notifications': '/dashboard/notifications', _'/project/:projectId/room': '/dashboard/project/:projectId/room', _'/post-job': '/marketplace/post-job'};

const _resolvePath = (path: string): string => pathMap[path] ?? path;
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const SitemapPage: React.FC = () => {_return (
    <>
      <SEO
<<<<<<< HEAD
        title=&quot;Sitemap | Zion AI Marketplace&quot;
        description=&quot;Complete sitemap of the Zion AI Marketplace&quot;
        keywords=&quot;sitemap, zion, ai marketplace, navigation&quot;
        canonical=&quot;https://app.ziontechgroup.com/content/sitemap-page&quot;
=======
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, _zion, _ai marketplace, _navigation"
        canonical="https://app.ziontechgroup.com/content/sitemap-page"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      />
      <div className=&quot;container mx-auto px-4 py-12&quot;>
        <h1 className=&quot;text-3xl font-bold mb-8&quot;>Sitemap</h1>
        
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {/* Public Pages */}
<<<<<<< HEAD
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Public Pages</h2>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap
=======
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>
            <ul className="space-y-2">
              {_completeSitemap
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                .filter(route => !route.requiredAuth)
                .map(route => (
                  <li key={route.path}>
                    <Link
<<<<<<< HEAD
                      href={resolvePath(route.path)}
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}
=======
                      href={_resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {_route.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
<<<<<<< HEAD
          {/* Talent Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Talent Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires talent or creator account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap
=======
          {_/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>
            <ul className="space-y-2">
              {_completeSitemap
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                .filter(route => 
                  route.requiredRoles?.includes('jobSeeker') || 
                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
<<<<<<< HEAD
                      href={resolvePath(route.path)}
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}
=======
                      href={_resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {_route.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
<<<<<<< HEAD
          {/* Client Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Client Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires employer or buyer account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap
=======
          {_/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
            <ul className="space-y-2">
              {_completeSitemap
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                .filter(route => 
                  route.requiredRoles?.includes('employer') || 
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
<<<<<<< HEAD
                      href={resolvePath(route.path)}
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}
=======
                      href={_resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {_route.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
<<<<<<< HEAD
          {/* Shared Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Authenticated User Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires any account type</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap
=======
          {_/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
            <ul className="space-y-2">
              {_completeSitemap
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                .filter(route => 
                  route.requiredAuth && 
                  (!route.requiredRoles || route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
<<<<<<< HEAD
                      href={resolvePath(route.path)}
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}
=======
                      href={_resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {_route.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
<<<<<<< HEAD
          {/* Admin Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Admin Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires admin account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap
=======
          {_/* Admin Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Admin Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires admin account</p>
            <ul className="space-y-2">
              {_completeSitemap
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                .filter(route => 
                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
<<<<<<< HEAD
                      href={resolvePath(route.path)}
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}
=======
                      href={_resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {_route.label}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
<<<<<<< HEAD
          {/* Dynamic Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Dynamic Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Pages with dynamic parameters</p>
            <ul className=&quot;space-y-2&quot;>
              {Object.entries(dynamicPaths).map(([key, path]) => (
                <li key={key}>
                  <div className=&quot;flex items-center text-zion-slate&quot;>
                    <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                    {path} <span className=&quot;ml-2 text-xs italic&quot;>({key})</span>
=======
          {_/* Dynamic Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>
            <ul className="space-y-2">
              {_Object.entries(dynamicPaths).map(_([key, _path]) => (
                <li key={key}>
                  <div className="flex items-center text-zion-slate">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {_path} <span className="ml-2 text-xs italic">({_key})</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
},
