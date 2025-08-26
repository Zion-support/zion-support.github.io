
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SEO } from './SEO';
import { completeSitemap } from '../config/sitemap';

const pathMap: Record<string, string> = {
  '/about': '/about',
  '/blog': '/blog',
  '/careers': '/careers',
  '/green-it': '/solutions',
  '/sitemap-page': '/sitemap',
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
  '/post-job': '/marketplace/post-job'
};

const resolvePath = (path: string): string => pathMap[path] ?? path;

export default function SitemapPage() {
  const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
  const talentRoutes = completeSitemap.filter(route => route.requiredAuth && route.requiredRoles && (route.requiredRoles.includes('jobSeeker') || route.requiredRoles.includes('creator')));
  const employerRoutes = completeSitemap.filter(route => route.requiredAuth && route.requiredRoles && (route.requiredRoles.includes('employer') || route.requiredRoles.includes('buyer')));
  const adminRoutes = completeSitemap.filter(route => route.requiredAuth && route.requiredRoles && route.requiredRoles.includes('admin'));

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO
        title="Sitemap"
        description="Complete navigation guide for Zion Tech Group website"
        keywords="sitemap, navigation, website structure, Zion Tech Group"
        canonical="https://ziontechgroup.com/sitemap"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
          <p className="text-xl text-zion-slate-light">Complete navigation guide for Zion Tech Group</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Public Pages</h2>
            <ul className="space-y-2">
              {publicRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={resolvePath(route.path)} className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Talent & Job Seeker Pages</h2>
            <ul className="space-y-2">
              {talentRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={resolvePath(route.path)} className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Employer & Buyer Pages</h2>
            <ul className="space-y-2">
              {employerRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={resolvePath(route.path)} className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Administrative Pages</h2>
            <ul className="space-y-2">
              {adminRoutes.map((route) => (
                <li key={route.path}>
                  <Link to={resolvePath(route.path)} className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    {route.label || route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
