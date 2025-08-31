import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Github,
  ArrowUp,
  Heart,
  Shield,
  Users,
  Award,
  Star,
  Zap,
  Brain,
  Server,
  Cloud,
  Lock,
  BarChart3,
  Workflow,
  Database,
  TrendingUp,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Building,
  FileText,
  HelpCircle
} from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Automation",
      services: [
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Data Analytics", href: "/services/ai-data-analytics-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Cybersecurity", href: "/services/ai-cybersecurity-platform" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Customer Support", href: "/services/ai-customer-support-automation" },
        { name: "AI Enterprise Intelligence", href: "/services/ai-enterprise-intelligence-platform" },
        { name: "AI Quantum Computing", href: "/services/ai-quantum-computing-solutions" },
        { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management Platform", href: "/services/ai-project-management-platform" },
        { name: "AI Marketing Automation Platform", href: "/services/ai-marketing-automation-platform" }
      ]
    },
    {
      title: "IT & Infrastructure",
      services: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
        { name: "IoT Edge Computing", href: "/services/ai-iot-edge-computing-platform" },
        { name: "Edge Computing", href: "/services/edge-computing-solutions" },
        { name: "Digital Transformation", href: "/services/digital-transformation" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      services: [
        { name: "All Micro SaaS", href: "/services/micro-saas-solutions-comprehensive" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Optimizer", href: "/services/ai-content-optimizer-pro" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" },
        { name: "AI Predictive Maintenance", href: "/services/ai-predictive-maintenance" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-trading-risk-management" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "News & Events", href: "/news" },
    { name: "Partners", href: "/partners" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Innovation Showcase 2026", href: "/innovative-services-showcase-2026" },
    { name: "Contact", href: "/contact" }
  ];

  const resourceLinks = [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/docs" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Training", href: "/training" },
    { name: "Research & Development", href: "/research-development" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Support", href: "/support" },
    { name: "FAQ", href: "/faq" },
    { name: "Status Page", href: "/status" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Community Forum", href: "/community" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zion-blue-dark border-t border-zion-purple/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of innovative AI, IT, and Micro SaaS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-cyan-400" />
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="w-4 h-4 mr-3 text-cyan-400" />
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                {category.title === "AI & Automation" && <Brain className="w-4 h-4 mr-2 text-cyan-400" />}
                {category.title === "IT & Infrastructure" && <Server className="w-4 h-4 mr-2 text-cyan-400" />}
                {category.title === "Micro SaaS Solutions" && <Zap className="w-4 h-4 mr-2 text-cyan-400" />}
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.href} 
                      className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Building className="w-4 h-4 mr-2 text-cyan-400" />
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FileText className="w-4 h-4 mr-2 text-cyan-400" />
              Resources
            </h3>
            <ul className="space-y-2">
              {resourceLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold text-white mb-4 mt-6 flex items-center">
              <HelpCircle className="w-4 h-4 mr-2 text-cyan-400" />
              Support
            </h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href} 
                    className="text-gray-300 hover:text-cyan-400 transition-colors text-sm flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zion-purple/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. 
              <span className="mx-2">•</span>
              <span className="flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> in Delaware
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-6 flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            <Link to="/accessibility" className="hover:text-cyan-400 transition-colors">Accessibility</Link>
            <Link to="/security" className="hover:text-cyan-400 transition-colors">Security</Link>
            <Link to="/compliance" className="hover:text-cyan-400 transition-colors">Compliance</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

// Missing icon components
const Building = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const FileText = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const HelpCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);