import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Leadership Team', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Partners', href: '/partners' },
    { name: 'Investors', href: '/investors' },
    { name: 'Press Kit', href: '/press' }
  ];

  const solutionsLinks = [
    { name: 'Industry Solutions', href: '/solutions' },
    { name: 'Healthcare AI', href: '/healthcare-ai-solutions' },
    { name: 'Financial Services', href: '/fintech-solutions' },
    { name: 'Manufacturing', href: '/manufacturing-solutions' },
    { name: 'Retail & E-commerce', href: '/retail-technology-solutions' },
    { name: 'Real Estate', href: '/real-estate-technology-solutions' },
    { name: 'Entertainment', href: '/entertainment-media-solutions' },
    { name: 'Transportation', href: '/transportation-logistics-solutions' }
  ];

  const servicesLinks = [
    { name: 'AI & Machine Learning', href: '/services#ai' },
    { name: 'Cloud Solutions', href: '/services#cloud' },
    { name: 'Cybersecurity', href: '/services#security' },
    { name: 'Quantum Computing', href: '/services#quantum' },
    { name: 'DevOps & Automation', href: '/services#devops' },
    { name: 'Data Analytics', href: '/services#analytics' },
    { name: 'API Development', href: '/services#api' },
    { name: 'Consulting', href: '/services#consulting' }
  ];

  const resourcesLinks = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-documentation' },
    { name: 'Developer Portal', href: '/developer' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Innovations', href: '/innovations' },
    { name: 'Resources', href: '/resources' }
  ];

  const supportLinks = [
    { name: 'Contact Us', href: '/contact' },
    { name: 'Request Quote', href: '/request-quote' },
    { name: 'Support Center', href: '/support' },
    { name: 'Community', href: '/community' },
    { name: 'Training', href: '/training' },
    { name: 'Professional Services', href: '/professional-services' },
    { name: 'Status Page', href: '/status' },
    { name: 'Help Desk', href: '/helpdesk' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
    { name: 'Security', href: '/security' },
    { name: 'Compliance', href: '/compliance' },
    { name: 'Accessibility', href: '/accessibility' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/zion-technologies/', icon: <Linkedin className="w-5 h-5" /> },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: <Twitter className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: <Instagram className="w-5 h-5" /> },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: <Youtube className="w-5 h-5" /> },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: <Github className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">ZT</span>
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI-powered technology solutions, autonomous systems, and quantum computing innovations.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <a href="tel:+13024640950" className="hover:text-white transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutionsLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">Get the latest insights on AI, cloud computing, and emerging technologies.</p>
            </div>
            <div className="md:w-1/2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-gray-400">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}