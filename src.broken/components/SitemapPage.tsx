
import React from 'react';
import { completeSitemap, dynamicPaths } from '@/config/sitemap';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react'
import { SEO } from './SEO';

        { name: 'White Papers', url: '/white-papers' },;
>>>>>>> main
        { name: 'Webinars', url: '/webinars' },;
        { name: 'Documentation', url: '/docs' },;
        { name: 'API Reference', url: '/api' },;
      ]};
=======
        { name: 'Case Studies', url: '/case-studies' },;'
        { name: 'White Papers', url: '/white-papers' },;'
        { name: 'Webinars', url: '/webinars' },;'
        { name: 'Documentation', url: '/docs' },;'        { name: 'API Reference', url: '/api' },;
      ]};
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  ];

<<<<<<< HEAD
  return (<div className="min - h-screen bg-slate - 900 text-white py-16">
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category."
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
                      href={resolvePath(route.path)}
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
                      href={resolvePath(route.path)}
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
                      href={resolvePath(route.path)}
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
                      href={resolvePath(route.path)}
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
                      href={resolvePath(route.path)}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
"
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-4 gap-8">
          {sitemapData.map((section, sectionIndex)  => ("
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">"
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">
                {section.title}
<<<<<<< HEAD
              </h2>
              <ul className="space - y-2">
                {section.links.map((link, linkIndex) => (<li key={linkIndex}>
                    <a
                      href={link.url}
                      className="text-zinc - 300 hover:text-cyan - 400 transition - colors duration - 200 block py-1"
=======
              </h2>"
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.url}"
                      className="text-zinc-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
>>>>>>> main
                    >
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
              Contact us;
            </a>{' '};
            for assistance.;
          </p>;
        </div>;
      </div>;
    </div>;) }
'"