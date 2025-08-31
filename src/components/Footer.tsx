import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  ArrowRight,
  Heart,
  Star,
  Award,
  Users,
  CheckCircle
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const companyInfo = {
    name: "Zion Tech Group",
    description: "Leading provider of AI-powered technology solutions, quantum computing, and digital transformation services for enterprises worldwide.",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM EST"
  };

  const footerSections = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      services: [
        { name: "AI Customer Success Automation", href: "/services/ai-powered-customer-success-automation" },
        { name: "AI Churn Predictor", href: "/services/ai-powered-churn-predictor" },
        { name: "AI Interview Assessment", href: "/services/ai-interview-assessment-platform" },
        { name: "AI Returns Management", href: "/services/ai-returns-management-saas" },
        { name: "AI SEO Platform", href: "/services/ai-powered-seo-platform" },
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation-platform" },
        { name: "AI Marketing Automation", href: "/services/ai-marketing-automation-suite" },
        { name: "AI Supply Chain Optimization", href: "/services/ai-supply-chain-optimization" },
        { name: "AI Customer Experience Analytics", href: "/services/ai-customer-experience-analytics" },
        { name: "AI Project Management", href: "/services/ai-project-management-platform" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" },
        { name: "AI Financial Trading Platform", href: "/services/ai-financial-trading-platform" },
        { name: "AI Content Optimizer Pro", href: "/services/ai-content-optimizer-pro" },
        { name: "AI Customer Support Automation", href: "/services/ai-customer-support-automation" },
        { name: "AI DevOps Automation", href: "/services/ai-devops-automation-platform" },
        { name: "AI IoT Edge Computing", href: "/services/ai-iot-edge-computing-platform" },
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence" },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant" },
        { name: "AI Content Marketing", href: "/services/ai-content-marketing-suite" },
        { name: "AI Research Assistant", href: "/services/ai-autonomous-research-assistant" },
        { name: "AI Content Intelligence", href: "/services/ai-content-intelligence-platform" },
        { name: "AI Financial Risk Management", href: "/services/ai-financial-risk-management" },
        { name: "AI Healthcare", href: "/services/ai-healthcare-platform" },
        { name: "AI Content Creation Studio", href: "/services/ai-content-creation-studio" },
        { name: "Blockchain Solutions", href: "/services/blockchain-enterprise-solutions" },
        { name: "Micro SAAS Solutions", href: "/micro-saas" }
      ]
    },
    {
      title: "AI Cybersecurity & Infrastructure",
      icon: Shield,
      services: [
        { name: "AI-Powered Cybersecurity Suite", href: "/services/ai-powered-cybersecurity-suite" },
        { name: "Enterprise IT Infrastructure Management", href: "/services/enterprise-it-infrastructure-management" },
        { name: "Cloud Migration & Optimization", href: "/services/cloud-migration-and-optimization" },
        { name: "AI Data Analytics Platform", href: "/services/ai-data-analytics-platform" },
        { name: "AI DevOps Automation", href: "/services/ai-devops-automation" },
        { name: "Edge Computing Platform", href: "/services/edge-computing-platform" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      services: [
        { name: "Cloud DevOps", href: "/services/cloud-devops" },
        { name: "IT Infrastructure", href: "/services/it-infrastructure" },
        { name: "FinOps Advisor", href: "/services/finops-advisor" },
        { name: "Cloud Migration", href: "/services/cloud-migration-services" },
        { name: "Edge Computing", href: "/services/iot-edge-computing" },
        { name: "Edge Computing Solutions", href: "/services/edge-computing-solutions" }
      ]
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'News & Updates', href: '/news' },
        { name: 'Case Studies', href: '/case-studies' }
      ]
    },
    {
      title: "Quantum Computing & Emerging Tech",
      icon: Atom,
      services: [
        { name: "AI-Quantum Hybrid Computing Platform", href: "/services/ai-quantum-hybrid-platform" },
        { name: "Quantum Computing as a Service", href: "/services/quantum-computing-as-a-service" },
        { name: "AI Space Technology Platform", href: "/services/ai-space-technology-platform" },
        { name: "AI IoT Edge Computing Platform", href: "/services/ai-iot-edge-computing-platform" }
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

  const solutions = [
    { name: "Enterprise Solutions", href: "/solutions/enterprise" },
    { name: "Healthcare Solutions", href: "/solutions/healthcare" },
    { name: "Financial Solutions", href: "/solutions/financial" },
    { name: "Government Solutions", href: "/solutions/government" },
    { name: "Manufacturing Solutions", href: "/solutions/manufacturing" },
    { name: "Retail Solutions", href: "/solutions/retail" },
    { name: "Education Solutions", href: "/solutions/education" },
    { name: "Startup Solutions", href: "/solutions/startup" }
  ];

  const resources = [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Documentation", href: "/documentation" },
    { name: "API Reference", href: "/api" },
    { name: "Help Center", href: "/help" },
    { name: "FAQ", href: "/faq" },
    { name: "Services Overview", href: "/services-overview" },
    { name: "Marketplace", href: "/marketplace" }
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Leadership", href: "/leadership" },
    { name: "Careers", href: "/careers" },
    { name: "Partners", href: "/partners" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
    { name: "Request Quote", href: "/request-quote" },
    { name: "Schedule Demo", href: "/schedule-demo" }
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Security", href: "/security" }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 (302) 464-0950',
      href: 'tel:+13024640950'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008, Middletown DE 19709',
      href: '#'
    },
    {
      icon: Clock,
      text: 'Mon-Fri: 9AM-6PM EST',
      href: '#'
    }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                <p className="text-blue-400 text-sm">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {companyInfo.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {companyInfo.email}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                <span>{companyInfo.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="w-4 h-4 text-blue-400" />
                <span>{companyInfo.hours}</span>
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
                  className={`p-2 bg-slate-800 rounded-lg text-gray-400 transition-all duration-200 ${social.color} hover:bg-slate-700`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <div className="space-y-4">
              {serviceCategories.map((category) => (
                <div key={category.title} className="space-y-2">
                  <div className="flex items-center space-x-2 text-blue-400">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.services.slice(0, 3).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Solutions</h4>
            <div className="space-y-2">
              {solutions.map((solution) => (
                <Link
                  key={solution.name}
                  to={solution.href}
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {solution.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <div className="space-y-2">
              {resources.map((resource) => (
                <Link
                  key={resource.name}
                  to={resource.href}
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {resource.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <div className="space-y-2">
              {company.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-sm text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Company Info */}
            <div className="flex items-center space-x-2 text-gray-400">
              <Shield className="w-5 h-5 text-blue-400" />
              <span>Zion Tech Group</span>
              <span>•</span>
              <span>Trusted Technology Partner</span>
            </div>

            {/* Copyright & Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <div className="flex space-x-4">
                <Link to="/terms" className="hover:text-blue-400 transition-colors duration-200">
                  Terms of Service
                </Link>
                <Link to="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                  Privacy Policy
                </Link>
                <Link to="/accessibility" className="hover:text-blue-400 transition-colors duration-200">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 pt-8 border-t border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on AI, quantum computing, and technology trends
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>&copy; {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline">Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span className="hidden sm:inline">for innovation</span>
            </div>
            
            <div className="flex space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}