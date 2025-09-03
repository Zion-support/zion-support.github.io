import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group - Leading Technology Solutions Provider',
  description = 'Transform your business with our AI services, micro SaaS solutions, and IT infrastructure. Expert team delivering cutting-edge technology solutions.',
  keywords = 'AI services, micro SaaS, IT solutions, cloud computing, cybersecurity, automation, project management, CRM'
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ];

  const serviceCategories = [
    {
      name: 'AI Services',
      items: [
        { name: 'AI Customer Sentiment Analyzer', href: '/services/ai-customer-sentiment-analyzer' },
        { name: 'AI Automated Email Follow-up', href: '/services/ai-automated-email-followup' },
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI-Powered CRM', href: '/services/ai-powered-crm' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
      ]
    },
    {
      name: 'IT Services',
      items: [
        { name: 'Zero Trust Security Platform', href: '/services/zero-trust-security-platform' },
        { name: 'Cloud Cost Optimization Suite', href: '/services/cloud-cost-optimization-suite' },
        { name: 'Cloud Services', href: '/services/cloud-services' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
      ]
    },
    {
      name: 'Development',
      items: [
        { name: 'AI Development', href: '/services/ai-development' },
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile Development', href: '/services/mobile-development' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
        { name: 'IoT Platforms', href: '/services/iot-platforms' },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-lg sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/">
                  <span className="text-2xl font-bold text-blue-600 cursor-pointer">
                    Zion Tech Group
                  </span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                ))}
                
                {/* Services Dropdown */}
                <div className="relative group">
                  <span className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors cursor-pointer">
                    Services
                  </span>
                  <div className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {serviceCategories.map((category) => (
                          <div key={category.name}>
                            <h3 className="text-sm font-semibold text-gray-900 mb-3">{category.name}</h3>
                            <ul className="space-y-2">
                              {category.items.map((service) => (
                                <li key={service.name}>
                                  <Link href={service.href}>
                                    <span className="text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                                      {service.name}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a href="tel:+13024640950" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <Phone className="w-4 h-4 mr-1" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                  <Mail className="w-4 h-4 mr-1" />
                  kleber@ziontechgroup.com
                </a>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigationItems.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <span className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors cursor-pointer">
                      {item.name}
                    </span>
                  </Link>
                ))}
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">Services</h3>
                  <div className="space-y-1">
                    {serviceCategories.map((category) => (
                      <div key={category.name} className="ml-4">
                        <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">{category.name}</h4>
                        {category.items.map((service) => (
                          <Link key={service.name} href={service.href}>
                            <span className="block px-3 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                              {service.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="px-3 py-2 border-t">
                  <a href="tel:+13024640950" className="flex items-center text-sm text-gray-600 hover:text-blue-600 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    +1 302 464 0950
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                    <Mail className="w-4 h-4 mr-2" />
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                <p className="text-gray-300 mb-4">
                  Leading provider of AI services, micro SaaS solutions, and cutting-edge IT infrastructure.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+13024640950" className="hover:text-white">+1 302 464 0950</a>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white">kleber@ziontechgroup.com</a>
                  </div>
                  <div className="flex items-center text-sm text-gray-300">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><Link href="/services/ai-customer-sentiment-analyzer"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">AI Customer Sentiment Analyzer</span></Link></li>
                  <li><Link href="/services/ai-automated-email-followup"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">AI Automated Email Follow-up</span></Link></li>
                  <li><Link href="/services/ai-content-generator"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">AI Content Generator</span></Link></li>
                  <li><Link href="/services/ai-powered-crm"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">AI-Powered CRM</span></Link></li>
                  <li><Link href="/services/zero-trust-security-platform"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Zero Trust Security Platform</span></Link></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Home</span></Link></li>
                  <li><Link href="/about"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">About</span></Link></li>
                  <li><Link href="/contact"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Contact</span></Link></li>
                  <li><Link href="/blog"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Blog</span></Link></li>
                  <li><Link href="/privacy"><span className="text-gray-300 hover:text-white text-sm cursor-pointer">Privacy Policy</span></Link></li>
                </ul>
              </div>

              {/* Contact CTA */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Get Started</h3>
                <p className="text-gray-300 mb-4 text-sm">
                  Ready to transform your business with AI and technology?
                </p>
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer inline-block">
                    Get Free Consultation
                  </span>
                </Link>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;