import React, { useMemo } from "react
import { Link } from "react-router-dom
import { Linkedin, Twitter, Github, Mail, Phone, MapPin, Clock, ArrowRight, Brain, Shield, Zap, Globe, BarChart3, Cloud, Code, Database, Users, Award } from "lucide-react
import { Link } from "react-router-dom
import { ArrowRight, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Facebook, Instagram, Youtube, Award, Users, Shield, Zap, Brain, Cloud, CheckCircle }    from "lucide-react
const ImprovedFooter = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = ["
    {"
      title: 'AI Services'"
      icon: <Brain className="w-5 h-5"
      color: 'from-blue-500 to-cyan-500'
      links: [
        { label: 'AI Analytics Dashboard Pro', href: '/ai-analytics-dashboard-pro'
        { label: 'AI Cybersecurity Suite Pro', href: '/ai-cybersecurity-suite-pro'
        { label: 'AI Content Generation Pro', href: '/ai-content-generation-pro'
        { label: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot'
        { label: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro'
        { label: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro'
        { label: 'AI Automation Platform', href: '/ai-automation-platform'
        { label: 'AI Data Analytics Pro', href: '/ai-data-analytics-pro'
        { label: 'AI Marketing Automation', href: '/ai-marketing-automation'
        { label: 'AI HR & Recruitment Pro', href: '/ai-hr-recruitment-pro'
        { label: 'AI Financial Analysis', href: '/ai-financial-analysis'
        { label: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer'
        { label: 'AI Voice Assistant Pro', href: '/ai-voice-assistant-pro'
        { label: 'AI Image Recognition Pro', href: '/ai-image-recognition-pro'
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance'
        { label: 'AI Sentiment Analysis Pro', href: '/ai-sentiment-analysis-pro'
        { label: 'AI Recommendation Engine', href: '/ai-recommendation-engine'
        { label: 'AI Fraud Detection Pro', href: '/ai-fraud-detection-pro'
        { label: 'AI Language Translation', href: '/ai-language-translation'
        { label: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise'
        { label: 'AI Data Mining Pro', href: '/ai-data-mining-pro'
        { label: 'AI Video Analysis', href: '/ai-video-analysis'
        { label: 'AI Time Series Forecasting', href: '/ai-time-series-forecasting'
        { label: 'AI NLP Text Analysis', href: '/ai-nlp-text-analysis'
        { label: 'View All AI Services', href: '/ai-services'
      ]
    },
    {
      title: 'IT Services'
      icon: <Shield className="w-5 h-5"
      color: 'from-green-500 to-emerald-500'
      links: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure'
        { label: 'Blockchain Development', href: '/blockchain-development'
        { label: 'IoT Solutions', href: '/iot-solutions'
        { label: 'AR/VR Development', href: '/ar-vr-development'
        { label: 'DevOps Solutions', href: '/devops-solutions'
        { label: 'Mobile Development', href: '/mobile-development'
        { label: 'Web Development', href: '/web-development'
        { label: 'IT Support', href: '/it-support'
        { label: 'Network Infrastructure', href: '/network-infrastructure'
        { label: 'IT Consulting', href: '/it-consulting'
        { label: 'Cybersecurity Audit', href: '/cybersecurity-audit'
        { label: 'Data Center Services', href: '/data-center-services'
        { label: 'Asset Management', href: '/asset-management'
        { label: 'View All IT Services', href: '/services'
      ]
    },
    {
      title: 'Micro SAAS'
      icon: <Zap className="w-5 h-5"
      color: 'from-purple-500 to-pink-500'
      links: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro'
        { label: 'Zion Security Shield', href: '/zion-security-shield'
        { label: 'Zion Cloud Vault', href: '/zion-cloud-vault'
        { label: 'Zion AI Inventory Manager', href: '/zion-ai-inventory-manager'
        { label: 'Zion HR Assistant Pro', href: '/zion-hr-assistant-pro'
        { label: 'Zion AI Accounting Suite', href: '/zion-ai-accounting-suite'
        { label: 'Zion E-commerce Optimizer', href: '/zion-ecommerce-optimizer'
        { label: 'Zion AI Customer Insights', href: '/zion-ai-customer-insights'
        { label: 'Zion AI Lead Scoring', href: '/zion-ai-lead-scoring'
        { label: 'Zion AI Document Processor', href: '/zion-ai-document-processor'
        { label: 'Zion AI Social Listener', href: '/zion-ai-social-listener'
        { label: 'Zion AI Email Optimizer', href: '/zion-ai-email-optimizer'
        { label: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant'
        { label: 'Zion AI Expense Tracker', href: '/zion-ai-expense-tracker'
        { label: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder'
        { label: 'Zion AI Chatbot Builder', href: '/zion-ai-chatbot-builder'
        { label: 'Zion AI Workflow Automation', href: '/zion-ai-workflow-automation'
        { label: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer'
        { label: 'Zion AI Data Warehouse', href: '/zion-ai-data-warehouse'
        { label: 'Zion AI Mobile App Builder', href: '/zion-ai-mobile-app-builder'
        { label: 'Zion AI API Manager', href: '/zion-ai-api-manager'
        { label: 'Zion AI Backup Manager', href: '/zion-ai-backup-manager'
        { label: 'Zion AI Testing Automation', href: '/zion-ai-testing-automation'
        { label: 'View All Micro SAAS', href: '/micro-saas'
      ]
    },
  ], []);

  const services = useMemo(() => [
    { name: "AI Analytics", href: "/ai-analytics"
    { name: "AI Automation", href: "/ai-automation-platform"
    { name: "AI Content Generation", href: "/ai-content-generation"
    { name: "AI Customer Support", href: "/ai-customer-support"
    { name: "AI Cybersecurity", href: "/ai-cybersecurity"
    { name: "AI Data Analytics", href: "/ai-data-analytics"
    { name: "AI Document Processing", href: "/ai-document-processing"
    { name: "AI Marketing Automation", href: "/ai-marketing-automation"
    { name: "AI Predictive Analytics", href: "/ai-predictive-analytics"
    { name: "AI Voice Assistant", href: "/ai-voice-assistant"
    { name: "AI Workflow Automation", href: "/ai-workflow-automation"
  ], []);

  const itServices = useMemo(() => [
    { name: "Cloud Migration", href: "/cloud-migration"
    { name: "DevOps Services", href: "/devops-services"
    { name: "IT Consulting", href: "/it-consulting"
    { name: "Network Security", href: "/network-security"
    { name: "Software Development", href: "/software-development"
    { name: "System Integration", href: "/system-integration"
    { name: "Web Development", href: "/web-development"
  ], []);

  const microSaasServices = useMemo(() => [
    { name: "Project Management Pro", href: "/project-management-pro"
    { name: "AI CRM Pro", href: "/zion-ai-crm-pro"
    { name: "Inventory Smart", href: "/zion-inventory-smart"
    { name: "Financial Analytics Pro", href: "/ai-financial-analytics-pro"
    { name: "Performance Monitor", href: "/zion-performance-monitor"
    { name: "AI Marketing Automation", href: "/zion-ai-marketing-automation"
    { name: "Email Automation", href: "/zion-email-automation"
    { name: "Data Analytics", href: "/data-analytics"
  ], []);

  const companyLinks = useMemo(() => [
    { name: "About Us", href: "/about"
    { name: "Our Team", href: "/team"
    { name: "Careers", href: "/careers"
    { name: "Case Studies", href: "/case-studies"
    { name: "Partners", href: "/partners"
    { name: "Contact", href: "/contact"
  ], []);

  const supportLinks = useMemo(() => [
    { name: "Documentation", href: "/docs"
    { name: "API Reference", href: "/api"
    { name: "Tutorials", href: "/tutorials"
    { name: "Support Center", href: "/support"
    { name: "Status Page", href: "/status"
    { name: "Community", href: "/community"
  ], []);

  const legalLinks = useMemo(() => [
    { name: "Privacy Policy", href: "/privacy"
    { name: "Terms of Service", href: "/terms"
    { name: "Cookie Policy", href: "/cookies"
    { name: "GDPR Compliance", href: "/gdpr"
    { name: "Security", href: "/security"
  ], []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          {/* Company Info */}
          <div className="lg:col-span-2"
            <div className="flex items-center space-x-2 mb-4"
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center"
                <Brain className="w-5 h-5 text-white"
              </div>
              <span className="text-xl font-bold"
            </div>
            <p className="text-gray-300 mb-6 max-w-md"
              Leading the future of AI and IT solutions. We empower businesses with cutting-edge technology, 
              intelligent automation, and innovative digital transformation services.
            </p>
            <div className="flex space-x-4"
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
  ];
const legal = [
  const companyLinks = [
    { label: 'About Us', href: '/about'
    { label: 'Our Team', href: '/team'
    { label: 'Careers', href: '/careers'
    { label: 'Case Studies', href: '/case-studies'
    { label: 'Blog', href: '/blog'
    { label: 'News', href: '/news'
    { label: 'Press', href: '/press'
    { label: 'Partners', href: '/partners'
  ];

  const resourceLinks = [
    { label: 'Pricing', href: '/pricing'
    { label: 'Demo', href: '/demo'
    { label: 'Support', href: '/support'
    { label: 'Documentation', href: '/docs'
    { label: 'API Reference', href: '/api'
    { label: 'Tutorials', href: '/tutorials'
    { label: 'Webinars', href: '/webinars'
    { label: 'White Papers', href: '/whitepapers'
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy'
    { label: 'Terms of Service', href: '/terms'
    { label: 'Cookie Policy', href: '/cookies'
    { label: 'Sitemap', href: '/sitemap'
    { label: 'Accessibility', href: '/accessibility'
    { label: 'Security', href: '/security'
  ];

  const socialLinks = [
    { label: 'Twitter', href: 'https://twitter.com/ziontechgroup'
    { label: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup'
    { label: 'GitHub', href: 'https://github.com/ziontechgroup'
    { label: 'Facebook', href: 'https://facebook.com/ziontechgroup'
    { label: 'Instagram', href: 'https://instagram.com/ziontechgroup'
    { label: 'YouTube', href: 'https://youtube.com/ziontechgroup'
  ];

  const stats = [
    { number: '10,000+', label: 'Active Users'
    { number: '99.9%', label: 'Uptime SLA'
    { number: '60+', label: 'Micro SAAS Solutions'
    { number: '24/7', label: 'Support Available'
  ];

  const contactInfo = {
    phone: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008, Middletown DE 19709'
  };

  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 relative z-10"
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          {stats.map((stat, index) => (
            <div key={index} className="text-center group"
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                {stat.icon}
              </div>
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2"
              <div className="text-gray-300 text-xs md:text-sm"
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16"
          {serviceCategories.map((category, index) => (
            <div key={index} className="space-y-6"
              <div className="flex items-center space-x-3"
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white"
              </div>
              <div className="space-y-3"
                {category.links.slice(0, 8).map((link, linkIndex) => (
                  <Link key={linkIndex}
                    to={link.href}
                    className={`
                      link.featured 
                        ? 'text-cyan-400 hover:text-cyan-300 font-medium'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`
                  >
                    <div className="flex items-center space-x-2"
                      <span>{link.label}</span>
                      {link.featured && <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    </div>
                  </Link>
                ))}
                {category.links.length > 8 && (
                  <Link
                    to={category.links.find(l => l.featured)?.href || '#'
                    className="block text-sm text-cyan-400 hover:text-cyan-300 font-medium transition-colors duration-300 group"
                  >
                    <div className="flex items-center space-x-2"
                      <span>View All {category.title}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Company Info & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6"
            <div>
              <h3 className="text-2xl font-bold text-white mb-4"
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"
                  Zion Tech Group
                </span>
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6"
                Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4"
              <div className="flex space-x-4"
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4"
            <h4 className="text-lg font-semibold text-white"
            <div className="space-y-3"
              {companyLinks.map((link, index) => (
                <Link key={index}
                  to={link.href}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
>>>>>>> origin/main
              ))}
            </div>
          </div>

                  </Link>
                </li>

  ))};

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-400">
              <MapPinIcon className="w-5 h-5 text-purple-400" />
              <span>Middletown, DE 19709</span>
        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-purple-400" />
              <div>
                <p className="text-sm text-gray-400"
                <p className="text-white"
              </div>
            </div>
            <div className="flex items-center space-x-3"
              <Phone className="w-5 h-5 text-cyan-400"
              <div>
                <p className="text-sm text-gray-400"
                <p className="text-white"
              </div>
            </div>
            <div className="flex items-center space-x-3"
              <MapPin className="w-5 h-5 text-cyan-400"
              <div>
                <p className="text-sm text-gray-400"
                <p className="text-white"
              </div>
              <span>+1-302-464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4 text-purple-400" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="w-4 h-4 text-purple-400" />
              <span>364 E Main St STE 1008, Middletown, DE 19709</span>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-blue-400" />
              <span className="text-gray-300">San Francisco, CA</span>
>>>>>>> origin/main
            </div>
          </div>
        </div>

          { /* Copyright */ }
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
            <p>&copy; {currentYear} Zion Tech Group. All rights reserved.</p>
        { /* Bottom Section */ }
        <div className="mt-12 pt-8 border-t border-slate-700/50"><div className="flex flex-col md:flex-row justify-between items-center"><div className="text-gray-400 text-sm"
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            { /* Legal Links */ }
            <div className="flex space-x-6 mt-4 md:mt-0"
              {footerLinks.legal.map((link) => (
                <Link key={link.name}
                  to={ link.href }
                  className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
                >
                  { link.name }
                </Link>)
              ))
            </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center"><p className="text-gray-400 text-sm">
            © {currentYear} Zion Tech Group. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0"><span>Made with</span>
            <HeartIcon className="w-4 h-4 text-red-500" />
            <span>for innovation</span>
          <div className="flex space-x-6 text-gray-400 text-sm"><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

        {/* Bottom Bar */}
          <p className="text-gray-400"
            © {currentYear} Zion Tech Group. All rights reserved. Made with{ ' '
            <HeartIcon className="w-4 h-4 inline text-red-500"
          </p>
        </div>
      </div>
    </footer>

  );
});

Footer.displayName = "Footer"
export default Footer;
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main