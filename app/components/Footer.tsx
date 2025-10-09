import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Award, Shield, Zap, ArrowRight, ExternalLink, Brain, Facebook, Twitter, Linkedin, Instagram, Github, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'AI Solutions', href: '/ai-services' },
    { name: 'IT Services', href: '/it-services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const microSAASServices = [
    { name: 'AI Project Manager Pro', href: '/ai-project-manager' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager' },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics' },
    { name: 'AI Email Marketing Suite', href: '/ai-email-marketing' },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot' },
    { name: 'AI Code Review Assistant', href: '/ai-code-generation' },
    { name: 'AI Video Generator Pro', href: '/ai-video-generation' },
    { name: 'AI Voice Cloning Studio', href: '/ai-voice-cloning' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation' },
    { name: 'AI Fashion Design Studio', href: '/ai-fashion-design' },
    { name: 'AI Music Composition Suite', href: '/ai-music-composition' },
    { name: 'AI Fitness Coach Pro', href: '/ai-fitness-coach' },
    { name: 'AI Sales Automation Hub', href: '/ai-sales-automation' },
    { name: 'AI Data Visualization Pro', href: '/ai-data-visualization' },
    { name: 'AI 3D Generation Studio', href: '/ai-3d-generation' },
    { name: 'AI Customer Support Pro', href: '/ai-customer-support' },
    { name: 'AI Content Writer Pro', href: '/ai-content-writer' },
    { name: 'AI Meeting Scheduler Pro', href: '/ai-meeting-scheduler' },
    { name: 'AI Expense Tracker Pro', href: '/ai-expense-tracker' },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker' },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager' },
    { name: 'AI Note-Taking Assistant', href: '/ai-note-taking' },
    { name: 'AI Weather Assistant Pro', href: '/ai-weather-assistant' },
    { name: 'AI Recipe Generator Pro', href: '/ai-recipe-generator' },
    { name: 'AI Habit Tracker Pro', href: '/ai-habit-tracker' },
    { name: 'AI Sleep Optimizer Pro', href: '/ai-sleep-optimizer' },
    { name: 'AI Meditation Coach Pro', href: '/ai-meditation-coach' },
    { name: 'AI Plant Care Assistant', href: '/ai-plant-care' },
    { name: 'AI Home Security Monitor', href: '/ai-home-security' },
    { name: 'AI Car Maintenance Pro', href: '/ai-car-maintenance' },
    { name: 'AI Investment Tracker Pro', href: '/ai-investment-tracker' },
    { name: 'AI Learning Path Creator', href: '/ai-learning-path' },
    { name: 'AI Goal Achievement Coach', href: '/ai-goal-coach' },
    { name: 'AI Memory Palace Builder', href: '/ai-memory-palace' },
    { name: 'AI Stress Management Pro', href: '/ai-stress-management' },
    { name: 'AI Productivity Optimizer', href: '/ai-productivity-optimizer' },
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate-assistant' },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain-optimizer' },
    { name: 'AI Healthcare Assistant', href: '/ai-healthcare-assistant' },
    { name: 'AI Education Tutor', href: '/ai-education-tutor' },
    { name: 'AI Travel Planner', href: '/ai-travel-planner' },
    { name: 'AI Energy Manager', href: '/ai-energy-manager' },
    { name: 'AI Agriculture Assistant', href: '/ai-agriculture-assistant' },
    { name: 'AI Insurance Analyzer', href: '/ai-insurance-analyzer' },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager' },
    { name: 'AI Event Planner', href: '/ai-event-planner' },
    { name: 'AI Personal Finance Manager', href: '/ai-personal-finance-manager' },
    { name: 'AI Home Automation', href: '/ai-home-automation' },
    { name: 'AI Language Learning', href: '/ai-language-learning' },
    { name: 'AI Mental Health Coach', href: '/ai-mental-health-coach' },
    { name: 'AI Pet Care Assistant', href: '/ai-pet-care-assistant' },
    { name: 'AI Wedding Planner', href: '/ai-wedding-planner' },
    { name: 'AI Stock Trader', href: '/ai-stock-trader' },
    { name: 'AI Job Search Assistant', href: '/ai-job-search-assistant' },
    { name: 'AI Dating Coach', href: '/ai-dating-coach' },
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning' },
    { name: 'Natural Language Processing', href: '/nlp' },
    { name: 'Computer Vision', href: '/computer-vision' },
    { name: 'AI Automation Suite', href: '/ai-automation' },
    { name: 'AI Data Intelligence', href: '/ai-data-visualization' },
    { name: 'AI 3D & AR Solutions', href: '/ai-3d-generation' },
    { name: 'AI Voice & Audio', href: '/ai-voice-cloning' },
    { name: 'AI Content Intelligence', href: '/ai-content-writer' },
    { name: 'AI Predictive Analytics', href: '/ai-analytics' },
    { name: 'AI Recommendation Engine', href: '/ai-sales-automation' },
    { name: 'AI Security & Fraud Detection', href: '/ai-fraud-detection' },
    { name: 'AI Document Intelligence', href: '/ai-document-processing' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare' },
    { name: 'AI Financial Intelligence', href: '/ai-financial-analyzer' },
    { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimizer' },
    { name: 'AI Energy Management', href: '/ai-energy-manager' },
    { name: 'AI Quantum Computing', href: '/quantum-computing' },
    { name: 'AI Autonomous Systems', href: '/autonomous-systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing' },
    { name: 'AI Metaverse Solutions', href: '/ai-metaverse-solutions' },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions' },
    { name: 'AI Space Technology', href: '/ai-space-technology' },
    { name: 'AI Biotechnology', href: '/ai-biotechnology' },
    { name: 'AI Robotics', href: '/ai-robotics' },
    { name: 'AI Cybersecurity Advanced', href: '/ai-cybersecurity' },
    { name: 'AI Digital Twin', href: '/ai-digital-twin' },
    { name: 'AI Conversational Intelligence', href: '/ai-conversational-intelligence' },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation' },
    { name: 'AI Market Intelligence', href: '/ai-market-intelligence' },
    { name: 'AI Process Mining', href: '/ai-process-mining' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management' },
    { name: 'AI Quality Assurance', href: '/ai-quality-assurance' },
    { name: 'AI Resource Optimization', href: '/ai-resource-optimization' },
    { name: 'AI Compliance Monitor', href: '/ai-compliance-monitor' },
    { name: 'AI Innovation Engine', href: '/ai-innovation-engine' },
    { name: 'AI Customer Intelligence', href: '/ai-customer-intelligence' },
    { name: 'AI Operational Intelligence', href: '/ai-operational-intelligence' },
    { name: 'AI Strategic Planning', href: '/ai-strategic-planning' },
    { name: 'AI Environmental Intelligence', href: '/ai-environmental-intelligence' },
    { name: 'AI Talent Intelligence', href: '/ai-talent-intelligence' },
    { name: 'AI Innovation Labs', href: '/ai-innovation-labs' },
    { name: 'AI Business Transformation', href: '/ai-business-transformation' },
    { name: 'AI Ethical Intelligence', href: '/ai-ethical-intelligence' },
    { name: 'AI Future Intelligence', href: '/ai-future-intelligence' },
  ];

  const itServices = [
    { name: 'Cloud Migration & Management', href: '/cloud-migration' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity' },
    { name: 'DevOps & CI/CD', href: '/devops' },
    { name: 'Database Services', href: '/database-services' },
    { name: 'IT Strategy & Consulting', href: '/it-consulting' },
    { name: 'Network Infrastructure', href: '/network-infrastructure' },
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Web Development', href: '/web-development' },
    { name: 'Data Analytics & BI', href: '/data-analytics' },
    { name: 'IT Support & Maintenance', href: '/it-support' },
    { name: 'Blockchain & Web3 Solutions', href: '/blockchain' },
    { name: 'IoT & Edge Computing', href: '/iot-edge' },
    { name: 'AI Infrastructure', href: '/ai-infrastructure' },
    { name: 'Enterprise Integration', href: '/enterprise-integration' },
    { name: 'Disaster Recovery & Backup', href: '/backup-recovery' },
    { name: 'Compliance & Governance', href: '/compliance' },
    { name: 'Quantum Computing Infrastructure', href: '/quantum-computing-infrastructure' },
    { name: 'Autonomous Systems Development', href: '/autonomous-systems-development' },
    { name: 'Metaverse Development', href: '/metaverse-development' },
    { name: 'Edge Computing Solutions', href: '/edge-computing-solutions' },
    { name: 'Climate Technology Solutions', href: '/climate-technology-solutions' },
    { name: 'Space Technology Services', href: '/space-technology-services' },
    { name: 'Biotechnology IT Solutions', href: '/biotechnology-it-solutions' },
    { name: 'Advanced Robotics Systems', href: '/advanced-robotics-systems' },
    { name: 'Digital Twin Development', href: '/digital-twin-development' },
    { name: 'Advanced Cybersecurity', href: '/advanced-cybersecurity' },
    { name: 'Smart City Solutions', href: '/smart-city-solutions' },
    { name: 'FinTech Solutions', href: '/fintech-solutions' },
    { name: 'HealthTech Infrastructure', href: '/healthtech-infrastructure' },
    { name: 'EdTech Solutions', href: '/edtech-solutions' },
    { name: 'RetailTech Solutions', href: '/retailtech-solutions' },
    { name: 'AI-Powered Infrastructure', href: '/ai-powered-infrastructure' },
    { name: 'Advanced Data Centers', href: '/advanced-data-centers' },
    { name: 'Enterprise Integration Hub', href: '/enterprise-integration-hub' },
    { name: 'Advanced Network Security', href: '/advanced-network-security' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development' },
    { name: 'Advanced Analytics Platform', href: '/advanced-analytics-platform' },
    { name: 'Intelligent Automation Suite', href: '/intelligent-automation-suite' },
    { name: 'Advanced Monitoring & Observability', href: '/advanced-monitoring' },
    { name: 'Enterprise Security Operations', href: '/enterprise-security-operations' },
    { name: 'Advanced Cloud Architecture', href: '/advanced-cloud-architecture' },
    { name: 'Intelligent Data Management', href: '/intelligent-data-management' },
    { name: 'Advanced DevOps Platform', href: '/advanced-devops-platform' },
    { name: 'Enterprise API Management', href: '/enterprise-api-management' },
    { name: 'Advanced Identity & Access Management', href: '/advanced-identity-management' },
    { name: 'Intelligent Content Management', href: '/intelligent-content-management' },
    { name: 'Advanced Backup & Recovery', href: '/advanced-backup-recovery' },
    { name: 'Enterprise Performance Optimization', href: '/enterprise-performance-optimization' },
    { name: 'Advanced Compliance Management', href: '/advanced-compliance-management' },
    { name: 'Intelligent Service Desk', href: '/intelligent-service-desk' },
    { name: 'Advanced Mobile Solutions', href: '/advanced-mobile-solutions' },
    { name: 'Intelligent Business Continuity', href: '/intelligent-business-continuity' },
    { name: 'Advanced Collaboration Platform', href: '/advanced-collaboration-platform' },
    { name: 'Intelligent Asset Management', href: '/intelligent-asset-management' },
    { name: 'Advanced Network Infrastructure', href: '/advanced-network-infrastructure' },
    { name: 'Intelligent Database Solutions', href: '/intelligent-database-solutions' },
    { name: 'Advanced Virtualization Platform', href: '/advanced-virtualization-platform' },
    { name: 'Intelligent Testing Platform', href: '/intelligent-testing-platform' },
    { name: 'Advanced Integration Services', href: '/advanced-integration-services' },
    { name: 'Intelligent Operations Center', href: '/intelligent-operations-center' },
    { name: 'Advanced Security Consulting', href: '/advanced-security-consulting' },
    { name: 'Intelligent Change Management', href: '/intelligent-change-management' },
    { name: 'Advanced Technology Consulting', href: '/advanced-technology-consulting' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zion-tech-group', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900 border-t border-cyan-400/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a 
                  href="tel:+13024640950" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <address className="text-gray-300 not-italic">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 neon-text">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Micro SAAS Services */}
          <div>
            <h3 className="text-lg font-semibold text-cyan-400 mb-4">Micro SAAS Solutions</h3>
            <ul className="space-y-2">
              {microSAASServices.slice(0, 8).map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* AI & IT Services */}
          <div>
            <h3 className="text-lg font-semibold text-purple-400 mb-4">AI & IT Services</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-purple-300 mb-2">AI Services</h4>
                <ul className="space-y-1">
                  {aiServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-green-300 mb-2">IT Services</h4>
                <ul className="space-y-1">
                  {itServices.slice(0, 4).map((service) => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm"
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on AI, technology trends, and industry updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-gray-600"
              />
              <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8 mb-4 lg:mb-0">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="/privacy" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">
                  Sitemap
                </a>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
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
