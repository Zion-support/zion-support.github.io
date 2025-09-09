import Link from 'next/link';
import { ;
  Mail, ;
  Phone, ;
  MapPin, ;
  Linkedin, ;
  Twitter, ;
  Github, ;
  Facebook,;
  ArrowUp} from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })}
  const currentYear = new Date().getFullYear();

  return (;
    <footer className="bg-black border-t border-white/10">;
      <div className="container mx-auto px-4">;
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <Link href="/" className="flex items-center space-x-2 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">;
                <span className="text-white font-bold text-lg">Z</span>;
              </div>;
              <span className="text-white font-bold text-2xl">Zion Tech</span>;
            </Link>;
            <p className="text-gray-400 mb-6 leading-relaxed">;
              Leading technology solutions provider helping businesses transform their digital presence ;
              with cutting-edge AI, cloud architecture, and innovative development services.;
            </p>;
            <div className="flex space-x-4">;
              <a;
                href="https://linkedin.com/company/ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300";
                aria-label="LinkedIn">;
                <Linkedin className="w-5 h-5" />;
              </a>;
              <a;
                href="https://twitter.com/ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300";
                aria-label="Twitter">;
                <Twitter className="w-5 h-5" />;
              </a>;
              <a;
                href="https://github.com/ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300";
                aria-label="GitHub">;
                <Github className="w-5 h-5" />;
              </a>;
              <a;
                href="https://facebook.com/ziontechgroup";
                target="_blank";
                rel="noopener noreferrer";
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300";
                aria-label="Facebook">;
                <Facebook className="w-5 h-5" />;
              </a>;
            </div>;
          </div>;

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

      {/* Scroll to Top Button */}
      <button;
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center z-50";
        aria-label="Scroll to top">;
        <ArrowUp className="w-6 h-6" />;
      </button>;
    </footer>;
  )}
export default Footer;