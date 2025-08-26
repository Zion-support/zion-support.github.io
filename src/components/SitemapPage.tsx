
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { Link } from 'react-router-dom';
import { SEO } from './SEO';
import { completeSitemap } from '../config/sitemap';

export default function SitemapPage() {
  const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
  const talentRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    (route.requiredRoles.includes('jobSeeker') ||
     route.requiredRoles.includes('creator'))
  );
  const employerRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    (route.requiredRoles.includes('employer') ||
     route.requiredRoles.includes('buyer'))
  );
  const adminRoutes = completeSitemap.filter(route => 
    route.requiredAuth && 
    route.requiredRoles && 
    route.requiredRoles.includes('admin')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="Sitemap"
        description="Complete navigation guide for Zion Tech Group website"
        keywords="sitemap, navigation, website structure, Zion Tech Group"
        canonical="https://ziontechgroup.com/content/sitemap-page"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
          <p className="text-xl text-zion-slate-light">
            Complete navigation guide for Zion Tech Group
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Public Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Public Pages</h2>
            <ul className="space-y-2">
              {publicRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Talent Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Talent & Job Seeker Pages</h2>
            <ul className="space-y-2">
              {talentRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Employer Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Employer & Buyer Pages</h2>
            <ul className="space-y-2">
              {employerRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admin Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Administrative Pages</h2>
            <ul className="space-y-2">
              {adminRoutes.map((route) => (
                <li key={route.path}>
                  <Link 
                    to={route.path} 
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors block"
                  >
                    {route.label || route.title}
                  </Link>
<<<<<<< HEAD
=======
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';

// Map sitemap paths to their actual routes in the application
const pathMap: Record<string, string> = {
  '/about': '/content/about',
  '/blog': '/blog',
  '/careers': '/content/careers',
  '/green-it': '/content/green-it',
  '/sitemap-page': '/content/sitemap-page',
  '/talent-onboarding': '/auth/talent-onboarding',
  '/forgot-password': '/auth/forgot-password',
  '/signup/talent': '/auth/signup/talent',
  '/signup/client': '/auth/signup/client',
  '/talent-dashboard': '/dashboard/talent-dashboard',
  '/client-dashboard': '/dashboard/client-dashboard',
  '/hiring-tracker': '/dashboard/hiring-tracker',
  '/messages': '/dashboard/messages',
  '/notifications': '/dashboard/notifications',
  '/project/:projectId/room': '/dashboard/project/:projectId/room',
  '/post-job': '/marketplace/post-job',
};

const resolvePath = (path: string): string => pathMap[path] ?? path;

export const SitemapPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Sitemap | Zion AI Marketplace"
        description="Complete sitemap of the Zion AI Marketplace"
        keywords="sitemap, zion, ai marketplace, navigation"
<<<<<<< HEAD
<<<<<<< HEAD
        canonical="https://ziontechgroup.com/content/sitemap-page"
=======
        canonical="https://ziontechgroup.com/sitemap-page"
>>>>>>> origin/cursor/website-audit-and-enhancement-beb3
=======
        canonical="https://ziontechgroup.com/sitemap-page"
>>>>>>> origin/cursor/website-audit-and-enhancement-24ce
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Public Pages */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Public Pages</h2>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => !route.requiredAuth)
                .map(route => (
                  <li key={route.path}>
                    <Link
                      to={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Talent Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Talent Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires talent or creator account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredRoles?.includes('jobSeeker') || 
                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      to={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Client Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Client Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires employer or buyer account</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredRoles?.includes('employer') || 
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      to={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Shared Routes */}
          <div className="bg-zion-blue-dark p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-zion-cyan">Authenticated User Pages</h2>
            <p className="text-sm text-zion-slate mb-4">Requires any account type</p>
            <ul className="space-y-2">
              {completeSitemap
                .filter(route => 
                  route.requiredAuth && 
                  (!route.requiredRoles || route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link
                      to={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
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
                      to={resolvePath(route.path)}
                      className="flex items-center hover:text-zion-purple"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {route.label}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
                </li>
              ))}
            </ul>
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f

        {/* All Routes List */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">Complete Route List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completeSitemap.map((route) => (
              <div key={route.path} className="bg-white/5 rounded p-3">
                <Link 
                  to={route.path} 
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                >
                  {route.path}
                </Link>
                <span className="ml-2 text-xs italic text-zion-slate-light">
                  ({route.priority})
                </span>
                <p className="text-sm text-zion-slate-light mt-1">
                  {route.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======
      </div>
    </>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
