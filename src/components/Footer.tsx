import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Youtube,
  Github,
  Brain,
  ArrowUp,
  Zap,
  Shield,
  Code,
  Building2,
  FileText,
  Users,
  Briefcase,
  Network,
  Newspaper
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerSections = [
    {
      title: 'Company',
      icon: Building2,
      links: [
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Our Story', path: '/about/story', icon: FileText },
        { name: 'Team', path: '/about/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Network },
        { name: 'Press', path: '/press', icon: Newspaper },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Quantum Solutions',
      icon: Brain,
      category: 'Core Services',
      services: [
        { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', badge: 'Popular' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', badge: 'New' },
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management-enhanced', badge: 'Featured' },
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-enhanced', badge: 'Trending' },
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation-platform', badge: 'Innovative' },
        { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support-platform', badge: 'Healthcare' },
        { name: 'AI Smart Home Energy Management', href: '/services/ai-smart-home-energy-management-platform', badge: 'IoT' },
        { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', badge: 'Logistics' },
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', badge: 'Marketing' },
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', badge: 'Quantum' },
        { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', badge: 'Space Tech' },
        { name: 'AI Carbon Footprint Management', href: '/services/ai-carbon-footprint-management-platform', badge: 'Green Tech' },
        { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', badge: 'Manufacturing' },
        { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', badge: 'ERP' },
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', badge: 'Automation' },
        { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', badge: 'Analytics' }
      ]
    },
    {
      title: 'AI Cybersecurity & Infrastructure',
      icon: Shield,
      category: 'Security & Infrastructure',
      services: [
        { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation', badge: 'New' },
        { name: 'AI-Powered Cybersecurity Suite', href: '/services/ai-powered-cybersecurity-suite', badge: 'Security' },
        { name: 'Enterprise IT Infrastructure Management', href: '/services/enterprise-it-infrastructure-management', badge: 'Infrastructure' },
        { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-and-optimization', badge: 'Cloud' },
        { name: 'AI Data Analytics Platform', href: '/services/ai-data-analytics-platform', badge: 'Analytics' },
        { name: 'AI DevOps Automation', href: '/services/ai-devops-automation', badge: 'DevOps' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', badge: 'Edge' }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: Code,
      category: 'Micro SaaS',
      services: [
        { name: 'AI Email Automation Suite', href: '/services/ai-email-automation-suite', badge: 'New' },
        { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler', badge: 'New' },
        { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform', badge: 'New' },
        { name: 'Micro CRM', href: '/services/micro-crm', badge: 'Popular' },
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', badge: 'Support' },
        { name: 'Website Analytics', href: '/services/website-analytics', badge: 'Analytics' }
      ]
    },
    {
      title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Healthcare Tech', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/financial-solutions' },
        { name: 'Manufacturing', href: '/manufacturing-solutions' },
        { name: 'Industry Solutions', href: '/industry-solutions' },
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', href: '/docs' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Support Center', href: '/help' },
        { name: 'Training', href: '/training' },
        { name: 'Blog', href: '/blog' },
        { name: 'Research', href: '/research-development' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Leading provider of innovative AI, IT, and Micro SAAS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-300 text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-2 text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>
          </div>

          {/* Service Sections */}
          {footerSections.slice(1, 4).map((section) => (
            <div key={section.title} className="space-y-4">
              <div className="flex items-center space-x-2">
                <section.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{section.title}</h3>
              </div>
              <div className="space-y-2">
                {section.services ? (
                  section.services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{service.name}</span>
                        {service.badge && (
                          <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
                            {service.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  ))
                ) : (
                  section.links?.slice(0, 6).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                    >
                      <span>{link.name}</span>
                    </Link>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>Get in Touch</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Links */}
        <div className="mt-8 pt-6 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div>
              <h4 className="text-blue-400 font-medium mb-3">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/docs" className="hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/white-papers" className="hover:text-blue-400 transition-colors">White Papers</Link></li>
                <li><Link href="/webinars" className="hover:text-blue-400 transition-colors">Webinars</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-400 font-medium mb-3">Support</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/help" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Support</Link></li>
                <li><Link href="/training" className="hover:text-blue-400 transition-colors">Training</Link></li>
                <li><Link href="/faq" className="hover:text-blue-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-400 font-medium mb-3">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/security" className="hover:text-blue-400 transition-colors">Security</Link></li>
                <li><Link href="/compliance" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-blue-400 font-medium mb-3">Connect</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/marketplace" className="hover:text-blue-400 transition-colors">Marketplace</Link></li>
                <li><Link href="/talent" className="hover:text-blue-400 transition-colors">Talent Network</Link></li>
                <li><Link href="/community" className="hover:text-blue-400 transition-colors">Community</Link></li>
                <li><Link href="/research-development" className="hover:text-blue-400 transition-colors">R&D</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Empowering Innovation</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/sitemap" className="text-gray-400 hover:text-blue-400 transition-colors">Sitemap</Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-blue-400 transition-colors">Accessibility</Link>
              <Link href="/status" className="text-gray-400 hover:text-blue-400 transition-colors">System Status</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-white z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}