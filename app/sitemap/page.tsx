<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const pages = [
    // Main Pages
    { path: '/', title: 'Home', description: 'Main landing page' },
    { path: '/about', title: 'About Us', description: 'Learn about Zion Tech Group' },
    { path: '/services', title: 'All Services', description: 'Comprehensive list of our services' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team' },
    { path: '/team', title: 'Our Team', description: 'Meet our expert team members' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Enterprise-grade AI solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client results' },
    
    // AI Services
    { path: '/ai-services', title: 'AI Services', description: 'Comprehensive AI solutions' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing automation' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent business process automation' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'AI solutions for healthcare industry' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'AI-powered financial services' },
    { path: '/ai-data-analytics', title: 'AI Data Analytics', description: 'Advanced data analysis with AI' },
    { path: '/ai-cybersecurity', title: 'AI Cybersecurity', description: 'AI-enhanced security solutions' },
    { path: '/ai-workflow-automation', title: 'AI Workflow Automation', description: 'Automated workflow management' },
    { path: '/ai-cloud-infrastructure', title: 'AI Cloud Infrastructure', description: 'AI-optimized cloud solutions' },
    { path: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions', description: 'AI-powered e-commerce platforms' },
    { path: '/ai-mobile-app-development', title: 'AI Mobile App Development', description: 'AI-enhanced mobile applications' },
    
    // Specialized Services
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum solutions' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing intelligent systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven business insights' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized technology solutions' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge solutions' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Comprehensive security services' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Scalable software-as-a-service solutions' },
    { path: '/it-services', title: 'IT Services', description: 'Complete IT support and services' },
    { path: '/services-advertising', title: 'AI Advertising Services', description: 'AI-powered advertising solutions' },
    
    // Resources
    { path: '/blog', title: 'Blog & Insights', description: 'Latest AI and technology insights' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive technical documentation' },
    
    // Legal
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy and data protection policy' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for our services' },
  ];
=======
<<<<<<< HEAD
'use client';
import React from 'react';

const SitemapPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Sitemap</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Navigate through all pages on our website.
          </p>
        </div>
      </div>
    </div>
  );
};
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Link from 'next/link'

const SitemapPage: React.FC = () => {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Support', href: '/support' }
  ]
>>>>>>> origin/main

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
<<<<<<< HEAD
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
            Sitemap
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Navigate through all pages and services available on our website
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  <Link 
                    to={page.path} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {page.title}
                  </Link>
                </h3>
                <p className="text-gray-300 text-sm mb-3">{page.description}</p>
                <Link 
                  to={page.path} 
                  className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
                >
                  Visit Page →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Need Help Finding Something?</h2>
            <p className="text-gray-300 mb-8">
              Can't find what you're looking for? Contact our team for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="cyber-button"
              >
                Contact Us
              </Link>
              <Link 
                to="/services" 
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
=======
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Map</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Find all the pages and resources available on our website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8">All Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main

      <Footer />
    </div>
  )
}

export default SitemapPage
>>>>>>> origin/main
