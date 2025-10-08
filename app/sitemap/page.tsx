import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const pages = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Enterprise Solutions', url: '/enterprise' },
    { name: 'Blog', url: '/blog' },
    { name: 'Technical Guides', url: '/guides' },
  ];

  const services = [
    { name: 'All Services', url: '/services' },
    { name: 'AI Services', url: '/ai-services' },
    { name: 'AI Marketing', url: '/ai-marketing' },
    { name: 'AI Automation', url: '/ai-automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare' },
    { name: 'AI Fintech', url: '/ai-fintech' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development' },
    { name: 'IT Services', url: '/it-services' },
    { name: 'Micro SAAS', url: '/micro-saas' },
    { name: 'Cybersecurity', url: '/cybersecurity' },
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing' },
    { name: 'Autonomous Systems', url: '/autonomous-systems' },
    { name: 'Business Intelligence', url: '/business-intelligence' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center neon-text">
            Sitemap
          </h1>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Pages */}
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Main Pages</h2>
              <ul className="space-y-3">
                {pages.map((page, index) => (
                  <li key={index}>
                    <Link 
                      to={page.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors block"
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Services</h2>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      to={service.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="cyber-card">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Technologies</h2>
              <ul className="space-y-3">
                {technologies.map((tech, index) => (
                  <li key={index}>
                    <Link 
                      to={tech.url} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors block"
                    >
                      {tech.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Can't find what you're looking for? 
            </p>
            <Link 
              to="/contact" 
              className="cyber-button inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;
