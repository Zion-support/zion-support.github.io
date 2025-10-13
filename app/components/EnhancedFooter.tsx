import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowRight,
  Brain,
  Shield,
  Code,
  Network,
  Package,
  Users,
  FileText,
  Lock,
  Heart
} from 'lucide-react';

const EnhancedFooter = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-5 h-5" />,
      links: [
        { name: "AI Analytics", path: "/ai-analytics" },
        { name: "AI Content Generation", path: "/ai-content-generation" },
        { name: "AI Customer Support", path: "/ai-customer-support" },
        { name: "AI Cybersecurity", path: "/ai-cybersecurity" },
        { name: "AI Data Analytics", path: "/ai-data-analytics" },
        { name: "AI Workflow Automation", path: "/ai-workflow-automation" }
      ]
    },
    {
      title: "IT Services",
      icon: <Code className="w-5 h-5" />,
      links: [
        { name: "Cloud Migration", path: "/cloud-migration" },
        { name: "DevOps Services", path: "/devops-services" },
        { name: "IT Consulting", path: "/it-consulting" },
        { name: "Network Security", path: "/network-security" },
        { name: "Software Development", path: "/software-development" },
        { name: "Web Development", path: "/web-development" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Package className="w-5 h-5" />,
      links: [
        { name: "Zion AI Analytics Pro", path: "/zion-ai-analytics-pro" },
        { name: "Zion Security Shield Pro", path: "/zion-security-shield-pro" },
        { name: "Zion Cloud Vault Pro", path: "/zion-cloud-vault-pro" },
        { name: "Zion AI CRM Pro", path: "/zion-ai-crm-pro" },
        { name: "Zion AI Marketing Pro", path: "/zion-ai-marketing-automation-pro" },
        { name: "Zion AI Project Manager Pro", path: "/zion-ai-project-manager-pro" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Network className="w-5 h-5" />,
      links: [
        { name: "5G Network Infrastructure", path: "/5g-network-infrastructure" },
        { name: "5G Edge Computing", path: "/5g-edge-computing" },
        { name: "5G IoT Solutions", path: "/5g-iot-solutions" },
        { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", path: "/5g-private-networks" },
        { name: "5G Mobile Applications", path: "/5g-mobile-applications" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", path: "/about" },
    { name: "Our Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Press", path: "/press" },
    { name: "Partners", path: "/partners" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "GDPR Compliance", path: "/gdpr" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Sitemap", path: "/sitemap" }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/company/ziontechgroup", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦" },
    { name: "GitHub", url: "https://github.com/ziontechgroup", icon: "💻" },
    { name: "YouTube", url: "https://youtube.com/@ziontechgroup", icon: "📺" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-cyan-500/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid-advanced particle-system opacity-30" />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-2 mb-6 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                    Zion Tech Group
                  </span>
                  <p className="text-sm text-gray-400">Advanced Technology Solutions</p>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation 
                for modern businesses. Transform your operations with cutting-edge technology.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-5 h-5" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-sm">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors">
                  <Phone className="w-5 h-5" />
                  <a href="tel:+13024640950" className="text-sm">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 mt-0.5" />
                  <div className="text-sm">
                    <div>364 E Main St STE 1008</div>
                    <div>Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyan-400" />
                Our Services
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {serviceCategories.map((category, index) => (
                  <div key={index}>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center">
                      {category.icon}
                      <span className="ml-2">{category.title}</span>
                    </h4>
                    <ul className="space-y-2">
                      {category.links.slice(0, 3).map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            to={link.path}
                            className="text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                          >
                            <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                      {category.links.length > 3 && (
                        <li>
                          <Link
                            to={category.title === "AI Services" ? "/ai-services" : 
                                category.title === "IT Services" ? "/it-services" : 
                                category.title === "Micro SAAS" ? "/micro-saas-services" : "/5g-solutions"}
                            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                          >
                            View All {category.title} →
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Company & Legal */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-cyan-400" />
                    Company
                  </h3>
                  <ul className="space-y-3">
                    {companyLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-cyan-400" />
                    Legal
                  </h3>
                  <ul className="space-y-3">
                    {legalLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          to={link.path}
                          className="text-sm text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-cyan-400" />
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-cyan-500/20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Stay Updated with Our Latest Solutions
                </h3>
                <p className="text-gray-300 text-sm">
                  Get the latest updates on AI innovations, IT trends, and micro SAAS releases.
                </p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 md:w-64 px-4 py-2 bg-white/10 backdrop-blur-sm border border-cyan-500/30 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-r-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center group">
                  Subscribe
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-gray-400 mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <span className="ml-2">Made with</span>
                <Heart className="w-4 h-4 inline mx-1 text-red-400" />
                <span>in Delaware, USA</span>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>ISO 27001 Certified</span>
                <span>•</span>
                <span>SOC 2 Compliant</span>
                <span>•</span>
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;