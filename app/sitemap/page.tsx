'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Demo', href: '/demo' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const aiServices = [
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
    { name: 'AI Fashion Design', href: '/ai-fashion-design' },
    { name: 'AI Email Assistant', href: '/ai-email-assistant' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant' },
    { name: 'AI Content Generator', href: '/ai-content-generator' }
  ];

  const itServices = [
    { name: 'IT Services', href: '/it-services' },
    { name: 'Database Management', href: '/database-management' },
    { name: 'Global IT Support', href: '/global-it-support' },
    { name: 'IT Training', href: '/it-training' },
    { name: 'Cloud Solutions', href: '/cloud-solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion AI | Website Navigation</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap of all pages and services." />
        <meta name="keywords" content="sitemap, navigation, website map, pages" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
              Sitemap
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Main Pages */}
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  {mainPages.map((page, index) => (
                    <li key={index}>
                      <Link 
                        to={page.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Services */}
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">AI Services</h2>
                <ul className="space-y-2">
                  {aiServices.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT Services */}
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">IT Services</h2>
                <ul className="space-y-2">
                  {itServices.map((service, index) => (
                    <li key={index}>
                      <Link 
                        to={service.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Pages */}
              <div className="bg-white/5 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Legal</h2>
                <ul className="space-y-2">
                  {legalPages.map((page, index) => (
                    <li key={index}>
                      <Link 
                        to={page.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;
