import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Home, Users, Briefcase, FileText, Phone, Shield, Settings, BarChart } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { name: 'Home', url: '/', description: 'Main homepage' },
        { name: 'About Us', url: '/about', description: 'Learn about our company' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' },
        { name: 'News', url: '/news', description: 'Company announcements' }
      ]
    },
    {
      title: 'AI Services',
      icon: BarChart,
      links: [
        { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Business process automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI customer service' },
        { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales process automation' },
        { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document automation' },
        { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data visualization tools' },
        { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' }
      ]
    },
    {
      title: 'IT Services',
      icon: Settings,
      links: [
        { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Micro SAAS', url: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', url: '/devops', description: 'Development operations' },
        { name: 'Database Services', url: '/database', description: 'Database management' },
        { name: 'Networking', url: '/networking', description: 'Network solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Briefcase,
      links: [
        { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' }
      ]
    },
    {
      title: 'Company Information',
      icon: Users,
      links: [
        { name: 'Our Team', url: '/team', description: 'Meet our experts' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories' },
        { name: 'Careers', url: '/careers', description: 'Join our team' },
        { name: 'API Documentation', url: '/api-docs', description: 'API reference' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation' },
        { name: 'Support Center', url: '/support', description: 'Get help and support' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection information' },
        { name: 'Terms of Service', url: '/terms', description: 'Usage agreement' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' },
        { name: 'GDPR Compliance', url: '/gdpr', description: 'EU data protection rights' },
        { name: 'Security Policy', url: '/security', description: 'Security measures' },
        { name: 'SLA Agreement', url: '/sla', description: 'Service level agreement' }
      ]
    },
    {
      title: 'System Status',
      icon: BarChart,
      links: [
        { name: 'Status Page', url: '/status', description: 'Real-time system status' },
        { name: 'System Status', url: '/system-status', description: 'System monitoring' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mr-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sitemap</h1>
              <p className="text-gray-600 mt-1">
                Find all pages and sections of our website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Complete Website Navigation
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Browse all available pages and sections of the Zion Tech Group website. 
              Use this sitemap to quickly find the information you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-6">
                  <section.icon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{section.title}</h3>
                </div>
                <div className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <div key={linkIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                      <Link 
                        href={link.url}
                        className="block group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">{link.description}</p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link 
                href="/contact"
                className="bg-blue-50 hover:bg-blue-100 rounded-lg p-4 text-center transition-colors group"
              >
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 group-hover:text-blue-600">Contact Us</h4>
                <p className="text-sm text-gray-600">Get in touch</p>
              </Link>
              <Link 
                href="/ai-services"
                className="bg-green-50 hover:bg-green-100 rounded-lg p-4 text-center transition-colors group"
              >
                <BarChart className="w-8 h-8 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 group-hover:text-green-600">AI Services</h4>
                <p className="text-sm text-gray-600">Explore our AI solutions</p>
              </Link>
              <Link 
                href="/support"
                className="bg-purple-50 hover:bg-purple-100 rounded-lg p-4 text-center transition-colors group"
              >
                <Settings className="w-8 h-8 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 group-hover:text-purple-600">Support</h4>
                <p className="text-sm text-gray-600">Get help and support</p>
              </Link>
              <Link 
                href="/status"
                className="bg-orange-50 hover:bg-orange-100 rounded-lg p-4 text-center transition-colors group"
              >
                <Shield className="w-8 h-8 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-gray-900 group-hover:text-orange-600">System Status</h4>
                <p className="text-sm text-gray-600">Check system status</p>
              </Link>
            </div>
          </div>

          {/* Search Box */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-blue-100 mb-6">
              Use our search functionality or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link 
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
              <a 
                href="tel:+13024640950"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
