import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Home, Users, Briefcase, FileText, Phone, Mail } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: <Home className="w-5 h-5" />,
      links: [
        { name: 'Home', url: '/', description: 'Main landing page with company overview' },
        { name: 'About Us', url: '/about', description: 'Company information and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Team', url: '/team', description: 'Meet our expert team members' }
      ]
    },
    {
      title: 'Services',
      icon: <Briefcase className="w-5 h-5" />,
      links: [
        { name: 'All Services', url: '/services', description: 'Comprehensive overview of all our services' },
        { name: 'AI Services', url: '/ai-services', description: 'Artificial intelligence and machine learning solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information technology and infrastructure services' },
        { name: 'Micro SAAS Solutions', url: '/micro-saas', description: 'Affordable software-as-a-service solutions' },
        { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum computing and algorithm development' },
        { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing and self-optimizing systems' },
        { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized applications and Web3 solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security and threat protection' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data analytics and business insights' },
        { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Internet of Things and edge computing solutions' },
        { name: 'Enterprise Solutions', url: '/enterprise', description: 'Comprehensive enterprise technology solutions' },
        { name: 'Advertising Services', url: '/services-advertising', description: 'AI-powered advertising and marketing solutions' }
      ]
    },
    {
      title: 'Resources',
      icon: <FileText className="w-5 h-5" />,
      links: [
        { name: 'Blog & Insights', url: '/blog', description: 'Latest articles and technology insights' },
        { name: 'Technical Guides', url: '/guides', description: 'Comprehensive technical documentation and guides' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation and page listing' }
      ]
    },
    {
      title: 'Legal & Support',
      icon: <Users className="w-5 h-5" />,
      links: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy information' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for our services' },
        { name: 'Offline Page', url: '/offline', description: 'Offline mode and service information' }
      ]
    }
  ];

  const externalLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/ziontechgroup',
      description: 'Follow us on LinkedIn for company updates'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ziontechgroup',
      description: 'Follow us on Twitter for latest news'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ziontechgroup',
      description: 'View our open source projects on GitHub'
    },
    {
      name: 'Documentation',
      url: 'https://docs.ziontechgroup.com',
      description: 'Technical documentation and API references'
    }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: '+1 302 600 9898',
      link: 'tel:+13026009898'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      link: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: <ExternalLink className="w-5 h-5" />,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      link: null
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, resources, and pages in one organized location." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Home
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Sitemap
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
                Complete navigation guide to all our pages and resources
              </p>
              <p className="text-lg mb-8 text-gray-300 max-w-4xl mx-auto">
                Find everything you need on our website with this comprehensive sitemap. 
                Browse our services, resources, and information in an organized, easy-to-navigate format.
              </p>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sitemapSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-2 rounded-lg mr-3">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>
                  <div className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="border-b border-gray-100 pb-3 last:border-b-0">
                        <Link 
                          to={link.url}
                          className="text-blue-600 hover:text-blue-800 font-semibold text-lg transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                        <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* External Links */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                External Resources
              </h2>
              <p className="text-xl text-gray-600">
                Connect with us on social media and explore additional resources
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 transition-colors duration-200 group"
                >
                  <div className="flex items-center mb-3">
                    <ExternalLink className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-xl text-gray-600">
                Get in touch with our team for more information
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {contact.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{contact.label}</h3>
                  {contact.link ? (
                    <a 
                      href={contact.link}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{contact.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Website Statistics
              </h2>
              <p className="text-xl text-blue-100">
                Our comprehensive website offers extensive resources and information
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-blue-100">Service Pages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-blue-100">Technical Guides</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Blog Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-blue-100">Support Available</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;