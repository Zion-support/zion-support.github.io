
import React from 'react',
import { completeSitemap, dynamicPaths } from '@/config/sitemap',
import { Link } from 'react-router-dom',
import { ChevronRight } from 'lucide-react',
import { SEO } from './SEO',
import { AppLayout } from '@/layout/AppLayout',
export const SitemapPage: React.FC = () => {
  return (
    <AppLayout>
      <SEO
        title=&quot;Sitemap | Zion AI Marketplace&quot;
        description=&quot;Complete sitemap of the Zion AI Marketplace&quot;
        keywords=&quot;sitemap, zion, ai marketplace, navigation&quot;
        canonical=&quot;https://app.ziontechgroup.com/sitemap-page&quot;      />
      <div className=&quot;container mx-auto px-4 py-12&quot;>
        <h1 className=&quot;text-3xl font-bold mb-8&quot;>Sitemap</h1>
        
        <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
          {/* Public Pages */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Public Pages</h2>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap                .filter(route => !route.requiredAuth)
                .map(route => (
                  <li key={route.path}>
                    <Link 
                      to={route.path} 
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Talent Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Talent Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires talent or creator account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap                .filter(route => 
                  route.requiredRoles?.includes('jobSeeker') || 
                  route.requiredRoles?.includes('creator')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link 
                      to={route.path} 
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Client Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Client Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires employer or buyer account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap                .filter(route => 
                  route.requiredRoles?.includes('employer') || 
                  route.requiredRoles?.includes('buyer')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link 
                      to={route.path} 
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Shared Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Authenticated User Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires any account type</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap                .filter(route => 
                  route.requiredAuth && 
                  (!route.requiredRoles || route.requiredRoles.length === 0)
                )
                .map(route => (
                  <li key={route.path}>
                    <Link 
                      to={route.path} 
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Admin Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Admin Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Requires admin account</p>
            <ul className=&quot;space-y-2&quot;>
              {completeSitemap                .filter(route => 
                  route.requiredRoles?.includes('admin')
                )
                .map(route => (
                  <li key={route.path}>
                    <Link 
                      to={route.path} 
                      className=&quot;flex items-center hover:text-zion-purple&quot;
                    >
                      <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                      {route.label}                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          
          {/* Dynamic Routes */}
          <div className=&quot;bg-zion-blue-dark p-6 rounded-lg&quot;>
            <h2 className=&quot;text-xl font-bold mb-4 text-zion-cyan&quot;>Dynamic Pages</h2>
            <p className=&quot;text-sm text-zion-slate mb-4&quot;>Pages with dynamic parameters</p>
            <ul className=&quot;space-y-2&quot;>
              {Object.entries(dynamicPaths).map(([key, path]) => (
                <li key={key}>
                  <div className=&quot;flex items-center text-zion-slate&quot;>
                    <ChevronRight className=&quot;h-4 w-4 mr-2&quot; />
                    {path} <span className=&quot;ml-2 text-xs italic&quot;>({key})</span>                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AppLayout>
  )
},
