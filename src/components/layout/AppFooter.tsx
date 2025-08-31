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
  Building2,
  FileText,
  HelpCircle,
  ExternalLink,
  Rocket,
  Handshake,
  Monitor,
  GraduationCap,
  Lightbulb,
  Code,
  Activity
} from 'lucide-react';

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/20",
      services: [
        { name: "AI Autonomous Cybersecurity Platform", href: "/services/ai-autonomous-cybersecurity-platform" },
        { name: "AI Autonomous Logistics Optimization", href: "/services/ai-autonomous-logistics-optimization" },
        { name: "AI Autonomous Manufacturing Platform", href: "/services/ai-autonomous-manufacturing-platform" },
        { name: "AI Business Intelligence Dashboard", href: "/services/ai-business-intelligence-dashboard" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI Project Management Platform", href: "/services/ai-project-management-platform" },
        { name: "AI Marketing Automation Platform", href: "/services/ai-marketing-automation-platform" },
        { name: "AI Enterprise Automation", href: "/services/ai-enterprise-automation-platform" },
        { name: "AI Autonomous Education Platform", href: "/services/ai-autonomous-education-platform" },
        { name: "AI Autonomous Agriculture Platform", href: "/services/ai-autonomous-agriculture-platform" },
        { name: "AI Autonomous Energy Management", href: "/services/ai-autonomous-energy-management-platform" }
      ]
    },
    {
      title: "IT & Infrastructure",
      icon: Server,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/20",
      services: [
        { name: "Infrastructure Management", href: "/services/it-infrastructure-management" },
        { name: "Cloud & DevOps", href: "/services/cloud-devops" },
        { name: "Cybersecurity", href: "/services/cybersecurity" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "IoT Edge Computing", href: "/services/ai-iot-edge-computing-platform" },
        { name: "Digital Transformation", href: "/services/digital-transformation" },
        { name: "Quantum Computing", href: "/services/quantum-computing-solutions" },
        { name: "Cloud FinOps Optimizer", href: "/services/cloud-finops-optimizer" }
      ]
    },
    {
      title: "Micro SaaS Solutions",
      icon: Rocket,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/20",
      services: [
        { name: "Comprehensive Solutions", href: "/services/micro-saas-solutions-comprehensive" },
        { name: "AI Customer Success Automation", href: "/services/ai-customer-success-automation" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management-enhanced" },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Optimizer", href: "/services/ai-content-optimizer-pro" },
        { name: "AI HR Platform", href: "/services/ai-hr-platform" },
        { name: "AI HR Management", href: "/services/ai-hr-management-platform" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics-platform" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization-enhanced" },
        { name: "AI Workflow Orchestrator", href: "/services/ai-workflow-orchestrator" }
      ]
    }
  ];

  const companyLinks = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Careers", href: "/careers", icon: Award },
    { name: "News & Events", href: "/news", icon: Star },
    { name: "Partners", href: "/partners", icon: Handshake },
    { name: "Case Studies", href: "/case-studies", icon: BarChart3 },
    { name: "Contact", href: "/contact", icon: MessageCircle }
  ];

  const resourceLinks = [
    { name: "Blog & Insights", href: "/blog", icon: FileText },
    { name: "Documentation", href: "/docs", icon: FileText },
    { name: "White Papers", href: "/white-papers", icon: FileText },
    { name: "Webinars", href: "/webinars", icon: Monitor },
    { name: "Training", href: "/training", icon: GraduationCap },
    { name: "Research & Development", href: "/research-development", icon: Lightbulb },
    { name: "Pricing Guide", href: "/pricing-guide" }
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help", icon: HelpCircle },
    { name: "Support", href: "/support", icon: MessageCircle },
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Status Page", href: "/status", icon: Activity },
    { name: "API Documentation", href: "/api-docs", icon: Code },
    { name: "Community Forum", href: "/community", icon: Users }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-slate-dark to-zion-blue-dark border-t border-zion-purple/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, ${'#6366f1'} 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mr-4 shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-3xl font-bold text-white">Zion Tech Group</span>
                <div className="text-zion-cyan font-medium text-sm">Innovation • Technology • Growth</div>
              </div>
            </div>
            <p className="text-zion-slate-light mb-8 max-w-md text-lg leading-relaxed">
              Leading provider of innovative AI, IT, and Micro SaaS solutions. 
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3 group-hover:bg-zion-cyan/30 transition-colors">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="tel:+1 302 464 0950" className="hover:text-zion-cyan">+1 302 464 0950</a>
              </div>
              <div className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors group">
                <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3 group-hover:bg-zion-cyan/30 transition-colors">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                </div>
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-start text-zion-slate-light">
                <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                </div>
                <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
              <div className="flex items-center text-zion-slate-light">
                <div className="p-2 bg-zion-cyan/20 rounded-lg mr-3">
                  <Clock className="w-4 h-4 text-zion-cyan" />
                </div>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-2 ${category.bgColor} rounded-lg`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className={`text-lg font-bold ${category.color}`}>{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex}>
                    <Link 
                      to={service.href} 
                      className="text-zion-slate-light hover:text-white transition-all duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company & Resources */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  <Building2 className="w-5 h-5 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-zion-purple">Company</h3>
              </div>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-purple transition-all duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-zion-cyan/20 rounded-lg">
                  <FileText className="w-5 h-5 text-zion-cyan" />
                </div>
                <h3 className="text-lg font-bold text-zion-cyan">Resources</h3>
              </div>
              <ul className="space-y-3">
                {resourceLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-zion-purple/20 rounded-lg">
                  <HelpCircle className="w-5 h-5 text-zion-purple" />
                </div>
                <h3 className="text-lg font-bold text-zion-purple">Support</h3>
              </div>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-zion-slate-light hover:text-zion-purple transition-all duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Innovation Showcase Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-zion-purple/10 via-zion-cyan/10 to-zion-purple/10 rounded-2xl border border-zion-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Explore Our Latest Innovations</h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Discover cutting-edge AI services, revolutionary IT solutions, and innovative Micro SaaS platforms designed for 2025 and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/innovative-services-showcase-2026"
              className="group p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Rocket className="w-6 h-6 text-zion-purple" />
                <h4 className="text-lg font-semibold text-white">2026 Innovation Showcase</h4>
              </div>
              <p className="text-zion-slate-light text-sm">Explore our revolutionary AI autonomous platforms and services.</p>
            </Link>
            <Link 
              to="/comprehensive-services-showcase-2025"
              className="group p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-cyan/30 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Star className="w-6 h-6 text-zion-cyan" />
                <h4 className="text-lg font-semibold text-white">2025 Services Showcase</h4>
              </div>
              <p className="text-zion-slate-light text-sm">Comprehensive overview of all our current services and capabilities.</p>
            </Link>
            <Link 
              to="/pricing"
              className="group p-6 bg-zion-slate-dark/50 rounded-xl border border-zion-purple/30 hover:border-zion-purple/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-3">
                <TrendingUp className="w-6 h-6 text-zion-purple" />
                <h4 className="text-lg font-semibold text-white">Pricing & Plans</h4>
              </div>
              <p className="text-zion-slate-light text-sm">Transparent pricing for all our services and solutions.</p>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-12 border-t border-zion-purple/20">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <div className="text-zion-slate-light text-sm mb-2">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              <div className="text-zion-slate-light text-sm flex items-center justify-center lg:justify-start space-x-4">
                <span className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-400" /> in Delaware
                </span>
                <span>•</span>
                <span>Innovating for the Future</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://linkedin.com/company/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 p-2 hover:bg-zion-cyan/20 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 p-2 hover:bg-zion-cyan/20 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ziontechgroup" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-slate-light hover:text-zion-cyan transition-all duration-300 hover:scale-110 p-2 hover:bg-zion-cyan/20 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Additional Links */}
          <div className="mt-8 flex flex-wrap justify-center space-x-8 text-sm text-zion-slate-light">
            <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
            <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
            <Link to="/accessibility" className="hover:text-zion-cyan transition-colors">Accessibility</Link>
            <Link to="/security" className="hover:text-zion-cyan transition-colors">Security</Link>
            <Link to="/compliance" className="hover:text-zion-cyan transition-colors">Compliance</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:-translate-y-2 flex items-center justify-center z-50 group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6 group-hover:animate-bounce" />
      </button>
    </footer>
  );
}