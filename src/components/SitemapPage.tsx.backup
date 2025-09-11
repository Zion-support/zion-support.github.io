<<<<<<< HEAD
import SEO from '@/components/SEO';
import { Cloud } from 'lucide-react';
const services = [];
const solutions = [];


      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Services', url: '/services' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'Careers', url: '/careers' },
      ]
    },
    {
      title: 'Services',
      links: [{ name: 'AI Services', url: '/services / ai' },
        { name: 'IT Services', url: '/services / it' },
        { name: 'Cloud Solutions', url: '/services / cloud' },
        { name: 'Cybersecurity', url: '/services / cybersecurity' },
        { name: 'Digital Transformation', url: '/services / digital - transformation' },
      ]
    },
    {
      title: 'Solutions',
      links: [{ name: 'Enterprise', url: '/solutions / enterprise' },
        { name: 'Healthcare', url: '/solutions / healthcare' },
        { name: 'Financial Services', url: '/solutions / financial' },
        { name: 'Manufacturing', url: '/solutions / manufacturing' },
      ]
    },
    {
      title: 'Resources',
      links: [{ name: 'Case Studies', url: '/case - studies' }, { name: 'White Papers', url: '/white - papers' }, { name: 'Webinars', url: '/webinars' }, { name: 'Documentation', url: '/docs' }, { name: 'API Reference', url: '/api' },;
      ]} { name: 'Case Studies', url: '/case-studies' },;'
        { name: 'White Papers', url: '/white-papers' },;'
        { name: 'Webinars', url: '/webinars' },;'
        { name: 'Documentation', url: '/docs' },;'        { name: 'API Reference', url: '/api' },;
      ]};
  ];
;
  return (<div className="min - h-screen bg-slate - 900 text-white py-16">;
      <SEO title="Sitemap - Zion Tech Group";
        description="Complete sitemap of Zion Tech Group website with all pages and services organized by category.";
       />;
      <div className="container mx - auto px-4 max - w-6xl">;
        <div className="text-center mb-16">;
          <h1 className="text-5xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 500 bg-clip - text text-transparent">            Sitemap;
          </h1>";
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto">;
            Navigate through our comprehensive website structure to find the information and services you need.</p>;
        </div>;
";
        <div className="grid grid-cols-1 "md": "anygri d-cols-2 "lg": gri d-cols-4 gap-8">;
          {sitemapData.map((section", sectionIndex)  => (";
            <div key={sectionIndex} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">";
              <h2 className="text-xl font-semibold mb-4 text-cyan-400">;

=======
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from "./SEO";
import { completeSitemap } from "../config/sitemap";
export default function SitemapPage() {
    const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
    const talentRoutes = completeSitemap.filter(route => route.requiredAuth &&
        route.requiredRoles &&
        (route.requiredRoles.includes('jobSeeker') ||
            route.requiredRoles.includes('creator')));
    const employerRoutes = completeSitemap.filter(route => route.requiredAuth &&
        route.requiredRoles &&
        (route.requiredRoles.includes('employer') ||
            route.requiredRoles.includes('buyer')));
    const adminRoutes = completeSitemap.filter(route => route.requiredAuth &&
        route.requiredRoles &&
        route.requiredRoles.includes('admin'));
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO title="Sitemap" description="Complete navigation guide for Zion Tech Group website" keywords="sitemap, navigation, website structure, Zion Tech Group" canonical="https://ziontechgroup.com/content/sitemap-page"/>
      
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
              {publicRoutes.map((route) => (<li key={route.path}>
                  <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    {route.label || route.title}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Talent Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Talent & Job Seeker Pages</h2>
            <ul className="space-y-2">
              {talentRoutes.map((route) => (<li key={route.path}>
                  <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    {route.label || route.title}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Employer Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Employer & Buyer Pages</h2>
            <ul className="space-y-2">
              {employerRoutes.map((route) => (<li key={route.path}>
                  <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    {route.label || route.title}
                  </Link>
                </li>))}
            </ul>
          </div>

          {/* Admin Routes */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Administrative Pages</h2>
            <ul className="space-y-2">
              {adminRoutes.map((route) => (<li key={route.path}>
                  <Link to={route.path} className="text-zion-slate-light hover:text-zion-cyan transition-colors block">
                    {route.label || route.title}
                  </Link>
                </li>))}
            </ul>
          </div>
        </div>

        {/* All Routes List */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-zion-cyan mb-6">Complete Route List</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {completeSitemap.map((route) => (<div key={route.path} className="bg-white/5 rounded p-3">
                <Link to={route.path} className="text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium">
                  {route.path}
                </Link>
                <span className="ml-2 text-xs italic text-zion-slate-light">
                  ({route.priority})
                </span>
                <p className="text-sm text-zion-slate-light mt-1">
                  {route.description}
                </p>
              </div>))}
          </div>
        </div>
      </div>
    </div>)}
>>>>>>> origin/clean-error-fixing-automation
