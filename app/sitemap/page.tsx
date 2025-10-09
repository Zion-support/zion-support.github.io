import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const pages = [
    // Main Pages
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { path: '/about', title: 'About Us', description: 'Learn about our mission, vision, and team' },
    { path: '/services', title: 'All Services', description: 'Comprehensive overview of all our services' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team' },
    { path: '/team', title: 'Our Team', description: 'Meet our expert team members' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Enterprise-grade AI and IT solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client testimonials' },
    
    // AI Services
    { path: '/ai-services', title: 'AI Services', description: 'Comprehensive AI solutions and consulting' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'AI-powered marketing automation and optimization' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent business process automation' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'AI solutions for healthcare industry' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'AI-powered financial technology solutions' },
    { path: '/ai-data-analytics', title: 'AI Data Analytics', description: 'Advanced data analytics with AI' },
    { path: '/ai-cybersecurity', title: 'AI Cybersecurity', description: 'AI-enhanced cybersecurity solutions' },
    { path: '/ai-workflow-automation', title: 'AI Workflow Automation', description: 'Automated workflow management with AI' },
    { path: '/ai-cloud-infrastructure', title: 'AI Cloud Infrastructure', description: 'AI-optimized cloud infrastructure solutions' },
    { path: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions', description: 'AI-powered e-commerce platforms' },
    { path: '/ai-mobile-app-development', title: 'AI Mobile App Development', description: 'AI-enhanced mobile application development' },
    
    // IT Services
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT support and solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Custom micro software-as-a-service solutions' },
    
    // Specialized Services
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing solutions' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven business insights and analytics' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Blockchain technology and Web3 solutions' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Internet of Things and edge computing solutions' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Comprehensive cybersecurity services' },
    { path: '/services-advertising', title: 'AI Advertising Services', description: 'AI-powered advertising and marketing solutions' },
    
    // Content Pages
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights and articles on AI and technology' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive technical guides and documentation' },
    
    // Legal Pages
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for using our services' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center neon-text">
            Sitemap
          </h1>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Navigate through all pages and content on the Zion Tech Group website
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <div key={page.path} className="cyber-card hologram-card p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  <Link 
                    to={page.path} 
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {page.title}
                  </Link>
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {page.description}
                </p>
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
            <div className="cyber-card hologram-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Need Help Finding Something?</h2>
              <p className="text-gray-300 mb-6">
                Can't find what you're looking for? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="cyber-button"
                >
                  Contact Us
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="cyber-button"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;