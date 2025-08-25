import React, { useState, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Facebook, 
  Instagram,
  ArrowRight,
  CheckCircle,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  const footerSections = useMemo(() => [
    {
      title: "AI & Micro SAAS",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions" },
        { label: "Cybersecurity", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "Industry Solutions", path: "/services/industry-solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml" },
        { label: "Cloud & Infrastructure", path: "/services#cloud" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Blockchain Solutions", path: "/services#blockchain" },
        { label: "IoT & Edge Computing", path: "/services#iot" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Business Intelligence", path: "/services/business-intelligence" },
        { label: "Marketing Automation", path: "/services/ai-marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr" },
        { label: "Legal Tech", path: "/services/ai-legal" }
      ]
    },
    {
      title: "Emerging Tech",
      links: [
        { label: "Quantum Computing", path: "/emerging-tech" },
        { label: "Blockchain & DeFi", path: "/emerging-tech" },
        { label: "IoT & Edge Computing", path: "/emerging-tech" },
        { label: "Extended Reality (XR)", path: "/emerging-tech" },
        { label: "5G & Networks", path: "/emerging-tech" },
        { label: "Green Technology", path: "/emerging-tech" },
        { label: "Digital Twins", path: "/emerging-tech" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Articles", path: "/blog" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Help Center", path: "/help" },
        { label: "Documentation", path: "/docs" },
        { label: "Support Center", path: "/support" }
      ]
    }
  ], []);

  // Enhanced social media links with proper icons and accessibility
  const socialLinks = useMemo(() => [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      ariaLabel: 'Follow us on LinkedIn'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      ariaLabel: 'Follow us on Twitter'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      ariaLabel: 'Follow us on GitHub'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: Youtube,
      ariaLabel: 'Subscribe to our YouTube channel'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: Facebook,
      ariaLabel: 'Follow us on Facebook'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: Instagram,
      ariaLabel: 'Follow us on Instagram'
    }
  ], []);

  const contactInfo = useMemo(() => [
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (302) 464-0950',
      href: 'tel:+13024640950',
      ariaLabel: 'Call us at +1 (302) 464-0950'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      ariaLabel: 'Send us an email at kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Wilmington, DE, USA',
      href: '#',
      ariaLabel: 'Our office is located in Wilmington, Delaware, USA'
    }
  ], []);

  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubscribed(true);
    setEmail('');
    setIsLoading(false);
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubscribed(false), 5000);
  }, [email]);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo" aria-label="Site footer">
      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest updates on AI technology, industry trends, and exclusive insights delivered to your inbox.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                    required
                    aria-describedby="newsletter-description"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Subscribe to newsletter"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </button>
              </div>
              
              {isSubscribed && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Successfully subscribed! Welcome to the future.</span>
                </div>
              )}
              
              <p id="newsletter-description" className="text-sm text-gray-400 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>
                <p className="text-sm text-cyan-400">AI-Powered Innovation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through cutting-edge AI solutions, quantum technology, and innovative micro SAAS platforms. 
              We're building the future, one algorithm at a time.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              {contactInfo.map((contact) => (
                <div key={contact.label} className="flex items-center space-x-3">
                  <contact.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" aria-hidden="true" />
                  <a
                    href={contact.href}
                    className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    aria-label={contact.ariaLabel}
                  >
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright and Links */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-cyan-400 transition-colors duration-300">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-cyan-400 transition-colors duration-300">
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-cyan-500/20 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 mt-6 pt-6 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Shield className="w-4 h-4 text-green-400" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>99.9% Uptime SLA</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with ❤️ in Delaware</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}