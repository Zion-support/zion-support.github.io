'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', description: 'Our homepage with company overview' },
        { name: 'About Us', url: '/about', description: 'Learn about our team and mission' },
        { name: 'Services', url: '/services', description: 'Our comprehensive service offerings' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' }
      ]
    },
    {
      title: 'AI Services',
      links: [
        { name: 'AI Solutions', url: '/ai-services', description: 'Artificial intelligence services' },
        { name: 'Machine Learning', url: '/machine-learning', description: 'ML consulting and development' },
        { name: 'Natural Language Processing', url: '/nlp', description: 'NLP and text analytics' },
        { name: 'Computer Vision', url: '/computer-vision', description: 'Image and video analysis' }
      ]
    },
    {
      title: 'IT Services',
      links: [
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'Cloud migration and management' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web applications' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android apps' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions and audits' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and projects' },
        { name: 'Tutorials', url: '/tutorials', description: 'Learning resources and courses' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing and plans' },
        { name: 'Consultation', url: '/consultation', description: 'Free consultation booking' },
        { name: 'Support', url: '/support', description: 'Customer support and help' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'Sitemap', url: '/sitemap', description: 'This sitemap page' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Navigate our website easily with our comprehensive sitemap. Find all our pages, services, and resources organized by category." />
        <meta name="keywords" content="sitemap, website navigation, pages, services, resources" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Sitemap
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Navigate our website easily with our comprehensive sitemap. Find all our pages, services, and resources organized by category.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sitemapSections.map((section, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.url}
                          className="text-cyan-600 hover:text-cyan-700 transition-colors duration-300 block"
                        >
                          {link.name}
                        </a>
                        <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quick Links
              </h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
                Popular pages and resources you might be looking for.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <a href="/ai-services" className="text-center text-white hover:text-cyan-200 transition-colors duration-300">
                <Brain className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold">AI Services</h3>
              </a>
              <a href="/cloud-infrastructure" className="text-center text-white hover:text-cyan-200 transition-colors duration-300">
                <Cloud className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold">Cloud Solutions</h3>
              </a>
              <a href="/cybersecurity" className="text-center text-white hover:text-cyan-200 transition-colors duration-300">
                <Shield className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold">Cybersecurity</h3>
              </a>
              <a href="/consultation" className="text-center text-white hover:text-cyan-200 transition-colors duration-300">
                <MessageCircle className="w-12 h-12 mx-auto mb-3" />
                <h3 className="font-semibold">Free Consultation</h3>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us directly and we'll help you find the information you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Search Site
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default SitemapPage;