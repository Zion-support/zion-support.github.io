import React from 'react';
import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github,
  Globe,
  Shield,
  Zap,
  Cloud,
  Smartphone,
  Database,
  Lock,
  BarChart3,
  Users,
  CheckCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const microSaasServices = [
    { name: "AI Content Generator", href: "/ai-content-generator" },
    { name: "Analytics Dashboard", href: "/ai-analytics-dashboard" },
    { name: "Customer Support Bot", href: "/ai-customer-support-bot" },
    { name: "Automated Testing", href: "/ai-automated-testing" },
    { name: "Smart Invoice Manager", href: "/ai-smart-invoice" },
    { name: "AI Project Manager", href: "/ai-project-manager" },
    { name: "AI Code Assistant", href: "/ai-code-assistant" },
    { name: "AI Marketing Automation", href: "/ai-marketing-automation" }
  ];

  const aiServices = [
    { name: "Machine Learning Platform", href: "/ai-ml-platform" },
    { name: "Computer Vision", href: "/ai-computer-vision" },
    { name: "Natural Language Processing", href: "/ai-nlp" },
    { name: "Predictive Analytics", href: "/ai-predictive-analytics" },
    { name: "AI Automation Suite", href: "/ai-automation-suite" },
    { name: "AI Cybersecurity", href: "/ai-cybersecurity" },
    { name: "AI Healthcare Solutions", href: "/ai-healthcare-solutions" },
    { name: "AI Financial Services", href: "/ai-financial-services" }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", href: "/cloud-infrastructure" },
    { name: "Cybersecurity Solutions", href: "/cybersecurity" },
    { name: "Digital Transformation", href: "/digital-transformation" },
    { name: "5G Network Solutions", href: "/5g-solutions" },
    { name: "IT Consulting", href: "/it-services" },
    { name: "DevOps Services", href: "/devops-services" },
    { name: "Data Management", href: "/data-management" },
    { name: "Network Security", href: "/network-security" }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Press", href: "/press" },
    { name: "Partners", href: "/partners" },
    { name: "Investors", href: "/investors" }
  ];

  const supportLinks = [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api-docs" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Support Center", href: "/support" },
    { name: "Status Page", href: "/status" },
    { name: "Community", href: "/community" },
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/contact" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Security", href: "/security" },
    { name: "SLA", href: "/sla" },
    { name: "Refund Policy", href: "/refunds" },
    { name: "Accessibility", href: "/accessibility" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, IT services, and micro SAAS applications. 
              Transform your business with cutting-edge technology and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-cyan-400" />
              Micro SAAS
            </h3>
            <ul className="space-y-3">
              {microSaasServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/micro-saas-solutions"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-semibold flex items-center"
                >
                  View All Services <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Brain className="w-5 h-5 mr-2 text-purple-400" />
              AI Services
            </h3>
            <ul className="space-y-3">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/ai-solutions"
                  className="text-purple-400 hover:text-purple-300 transition-colors font-semibold flex items-center"
                >
                  View All Services <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Cloud className="w-5 h-5 mr-2 text-green-400" />
              IT Services
            </h3>
            <ul className="space-y-3">
              {itServices.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/it-solutions"
                  className="text-green-400 hover:text-green-300 transition-colors font-semibold flex items-center"
                >
                  View All Services <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-6 text-white">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest news and updates about our AI and IT solutions.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-80 px-4 py-3 bg-slate-800 border border-slate-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-r-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;