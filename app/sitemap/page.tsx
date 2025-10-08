import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const pages = [
    { name: 'Home', url: '/', description: 'Main landing page' },
    { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group' },
    { name: 'Our Team', url: '/team', description: 'Meet our expert team' },
    { name: 'Contact Us', url: '/contact', description: 'Get in touch with us' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' },
    { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
    { name: 'Technical Guides', url: '/guides', description: 'Technical documentation and guides' },
    { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' },
    { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' },
  ];

  const services = [
    { name: 'All Services', url: '/services', description: 'Complete list of our services' },
    { name: 'AI Services', url: '/ai-services', description: 'Artificial Intelligence solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent business process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'AI solutions for healthcare industry' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'AI-powered financial services' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analytics with AI' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-enhanced cybersecurity solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Automated workflow management' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'AI-optimized cloud solutions' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'AI-powered e-commerce platforms' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'AI-integrated mobile applications' },
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'Micro SAAS', url: '/micro-saas', description: 'Micro Software as a Service solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced cybersecurity services' },
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-generation quantum computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing autonomous systems' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Advanced business intelligence solutions' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Blockchain and Web3 technologies' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Internet of Things and edge computing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text text-center">
            Sitemap
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Navigate through all pages and sections of the Zion Tech Group website
          </p>

          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Main Pages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pages.map((page, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <Link to={page.url} className="hover:text-cyan-400 transition-colors">
                      {page.name}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm">{page.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <Link to={service.url} className="hover:text-cyan-400 transition-colors">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <Link to={tech.url} className="hover:text-cyan-400 transition-colors">
                      {tech.name}
                    </Link>
                  </h3>
                  <p className="text-gray-300 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-cyan-400 mb-8">Contact Information</h2>
            <div className="cyber-card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
                  <div className="space-y-3">
                    <p className="text-gray-300">
                      <strong>Phone:</strong> +1 (302) 464-0950
                    </p>
                    <p className="text-gray-300">
                      <strong>Email:</strong> kleber@ziontechgroup.com
                    </p>
                    <p className="text-gray-300">
                      <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link to="/contact" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Contact Form
                    </Link>
                    <Link to="/about" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      About Us
                    </Link>
                    <Link to="/services" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Our Services
                    </Link>
                    <Link to="/case-studies" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                      Case Studies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
