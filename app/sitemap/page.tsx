'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, Brain, Cloud, Users, FileText, Mail, Phone, ArrowRight } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Zion Tech Group homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Demo', url: '/demo', description: 'Request a product demo' },
        { name: 'Consultation', url: '/consultation', description: 'Free consultation' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services Overview', url: '/ai-services', description: 'Complete AI solutions' },
        { name: 'AI Chat API', url: '/ai-services/chat-api', description: 'Conversational AI solutions' },
        { name: 'AI Analytics', url: '/ai-services/analytics', description: 'AI-powered data analytics' },
        { name: 'AI Automation', url: '/ai-services/automation', description: 'Intelligent automation' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, and GCP solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions and consulting' },
        { name: 'DevOps', url: '/devops', description: 'Development and operations services' }
      ]
    },
    {
      title: 'Micro SaaS',
      icon: Users,
      pages: [
        { name: 'Micro SaaS Tools', url: '/micro-saas', description: 'Ready-to-use business tools' },
        { name: 'Analytics Dashboard', url: '/micro-saas/analytics', description: 'Business analytics tools' },
        { name: 'Content Generator', url: '/micro-saas/content', description: 'AI content creation tools' },
        { name: 'Marketing Automation', url: '/micro-saas/marketing', description: 'Marketing automation tools' }
      ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step guides' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' }
      ]
    },
    {
      title: 'Legal',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'How we protect your data' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Support', url: '/support', description: 'Get help and support' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Navigate Zion Tech Group's website easily with our comprehensive sitemap. Find all our AI and IT services, resources, and pages." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all our pages and services organized by category. Navigate our website easily and discover everything we have to offer.
            </p>
          </div>

          {/* Sitemap Sections */}
          <div className="space-y-12">
            {sitemapSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, pageIndex) => (
                    <div key={pageIndex} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all duration-300">
                      <a 
                        href={page.url}
                        className="block group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                            {page.name}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <p className="text-gray-400 text-sm">{page.description}</p>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-gray-300 mb-6">
                Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </a>
                <a 
                  href="/consultation"
                  className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default SitemapPage;