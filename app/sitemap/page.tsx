import React from 'react';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const siteMap = [
    {
      category: 'Main Pages',
      links: [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
        { name: 'News', url: '/news' },
        { name: 'Careers', url: '/careers' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Case Studies', url: '/case-studies' }
      ]
    },
    {
      category: 'AI Services',
      links: [
        { name: 'AI Services', url: '/ai-services' },
        { name: 'AI Marketing', url: '/ai-marketing' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare' },
        { name: 'AI Fintech', url: '/ai-fintech' },
        { name: 'AI Content Generation', url: '/ai-content-generation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
        { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', url: '/ai-mobile-app-development' },
        { name: 'AI Customer Support', url: '/ai-customer-support' },
        { name: 'AI Sales Automation', url: '/ai-sales-automation' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation' },
        { name: 'AI Data Visualization', url: '/ai-data-visualization' },
        { name: 'AI Lead Generation', url: '/ai-lead-generation' },
        { name: 'AI Document Processing', url: '/ai-document-processing' }
      ]
    },
    {
      category: 'IT Services',
      links: [
        { name: 'IT Services', url: '/it-services' },
        { name: 'IT Infrastructure', url: '/it-infrastructure' },
        { name: 'Cybersecurity', url: '/cybersecurity' },
        { name: 'DevOps & CI/CD', url: '/devops' },
        { name: 'Database Services', url: '/database' },
        { name: 'Cloud Services', url: '/cloud-services' },
        { name: 'Networking', url: '/networking' },
        { name: 'Managed IT Services', url: '/managed-it' },
        { name: 'IT Consulting', url: '/it-consulting' }
      ]
    },
    {
      category: 'Micro SAAS',
      links: [
        { name: 'Micro SAAS Solutions', url: '/micro-saas' },
        { name: 'AI Writing Assistant', url: '/ai-writing-assistant' },
        { name: 'AI Scheduler', url: '/ai-scheduler' },
        { name: 'Expense Tracker', url: '/expense-tracker' },
        { name: 'Smart Analytics', url: '/smart-analytics' },
        { name: 'Productivity Tools', url: '/productivity' },
        { name: 'Marketing Tools', url: '/marketing-tools' },
        { name: 'Developer Tools', url: '/developer-tools' },
        { name: 'Business Apps', url: '/business-apps' },
        { name: 'Analytics Tools', url: '/analytics-tools' }
      ]
    },
    {
      category: 'Emerging Technologies',
      links: [
        { name: 'Quantum Computing', url: '/quantum-computing' },
        { name: 'Robotics', url: '/robotics' },
        { name: 'IoT & Edge Computing', url: '/iot-edge-computing' },
        { name: 'Blockchain & Web3', url: '/blockchain-web3' },
        { name: 'Business Intelligence', url: '/business-intelligence' },
        { name: 'Autonomous Systems', url: '/autonomous-systems' }
      ]
    },
    {
      category: 'Support & Resources',
      links: [
        { name: 'Documentation', url: '/docs' },
        { name: 'API Documentation', url: '/api-docs' },
        { name: 'Free Consultation', url: '/consultation' },
        { name: 'Request Demo', url: '/demo' },
        { name: 'Enterprise Solutions', url: '/enterprise' }
      ]
    },
    {
      category: 'Legal & Privacy',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
        { name: 'GDPR Compliance', url: '/gdpr' },
        { name: 'Compliance', url: '/compliance' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all our pages and services. Find everything you need to know about 
            our AI and IT solutions in one place.
          </p>
        </div>

        {/* Site Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {siteMap.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-6">{category.category}</h2>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.url}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-purple-100 mb-6">
            Contact us and we'll help you find the information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/consultation"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;