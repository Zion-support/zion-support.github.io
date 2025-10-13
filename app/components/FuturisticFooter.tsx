import { Link } from "react-router-dom";
import { 
  Sparkles, 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Twitter, 
  Linkedin, 
  Github, 
  Facebook, 
  Instagram, 
  Youtube,
  Award,
  Clock,
  CheckCircle,
  Star,
  TrendingUp,
  Lock,
  Globe as GlobeIcon,
  Smartphone,
  Monitor,
  Database,
  Settings,
  BarChart3,
  Target,
  Calendar,
  Eye,
  MessageSquare,
  Wand2,
  Cpu,
  Bot,
  Search,
  Music,
  FileText,
  Image,
  Video,
  Code,
  Filter,
  Layers,
  Network
} from "lucide-react";
import FuturisticButton from "./FuturisticButton";

const FuturisticFooter = () => {
  const currentYear = new Date().getFullYear();

  const services = {
    "AI Services": [
      { name: "AI Consulting", href: "/ai-consulting-services" },
      { name: "Machine Learning", href: "/machine-learning-solutions" },
      { name: "Natural Language Processing", href: "/natural-language-processing" },
      { name: "Computer Vision", href: "/computer-vision-solutions" },
      { name: "AI Analytics", href: "/ai-powered-analytics" },
      { name: "AI Automation", href: "/ai-automation-solutions" },
      { name: "AI Security", href: "/ai-security-solutions" },
      { name: "AI Customer Service", href: "/ai-customer-service" }
    ],
    "IT Services": [
      { name: "Cloud Infrastructure", href: "/cloud-infrastructure-services" },
      { name: "Cybersecurity", href: "/cybersecurity-solutions" },
      { name: "Digital Transformation", href: "/digital-transformation" },
      { name: "Network Infrastructure", href: "/network-infrastructure" },
      { name: "Database Management", href: "/database-management" },
      { name: "Web Development", href: "/web-development-services" },
      { name: "Mobile App Development", href: "/mobile-app-development" },
      { name: "IT Support", href: "/it-support-maintenance" }
    ],
    "Micro SAAS": [
      { name: "Zion Analytics Pro", href: "/zion-analytics-pro" },
      { name: "Zion Security Shield", href: "/zion-security-shield" },
      { name: "Zion Cloud Vault", href: "/zion-cloud-vault" },
      { name: "Zion AI CRM Pro", href: "/zion-ai-crm-pro" },
      { name: "Zion AI Marketing Pro", href: "/zion-ai-marketing-automation-pro" },
      { name: "Zion AI Project Manager", href: "/zion-ai-project-manager-pro" },
      { name: "Zion AI Code Assistant", href: "/zion-ai-code-assistant-pro" },
      { name: "Zion AI Content Studio", href: "/zion-ai-content-studio-pro" }
    ],
    "5G Solutions": [
      { name: "5G Network Infrastructure", href: "/5g-network-infrastructure" },
      { name: "5G IoT Solutions", href: "/5g-iot-solutions" },
      { name: "5G Edge Computing", href: "/5g-edge-computing" },
      { name: "5G Smart City Solutions", href: "/5g-smart-city-solutions" },
      { name: "5G Mobile Applications", href: "/5g-mobile-applications" },
      { name: "5G Private Networks", href: "/5g-private-networks" },
      { name: "5G Data Analytics", href: "/5g-data-analytics" },
      { name: "5G Implementation", href: "/5g-implementation" }
    ]
  };

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "News & Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partners", href: "/partners" },
    { name: "Investors", href: "/investors" },
    { name: "Press Kit", href: "/press" }
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "Community", href: "/community" },
    { name: "Status Page", href: "/status" },
    { name: "Security", href: "/security" },
    { name: "Privacy Policy", href: "/privacy" }
  ];

  const legal = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR Compliance", href: "/gdpr" },
    { name: "Data Processing Agreement", href: "/dpa" },
    { name: "Service Level Agreement", href: "/sla" },
    { name: "Acceptable Use Policy", href: "/aup" },
    { name: "Refund Policy", href: "/refunds" }
  ];

  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: <Twitter className="w-5 h-5" /> },
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: <Linkedin className="w-5 h-5" /> },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: <Github className="w-5 h-5" /> },
    { name: "Facebook", href: "https://facebook.com/ziontechgroup", icon: <Facebook className="w-5 h-5" /> },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: <Instagram className="w-5 h-5" /> },
    { name: "YouTube", href: "https://youtube.com/@ziontechgroup", icon: <Youtube className="w-5 h-5" /> }
  ];

  const achievements = [
    { icon: <Award className="w-6 h-6" />, text: "500+ Successful Projects" },
    { icon: <Users className="w-6 h-6" />, text: "10,000+ Happy Clients" },
    { icon: <Clock className="w-6 h-6" />, text: "24/7 Support" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "99.9% Uptime SLA" }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-cyan-500/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get the latest insights on AI, IT solutions, and technology innovations delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <FuturisticButton
                  href="#"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Subscribe
                </FuturisticButton>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <Link to="/" className="flex items-center space-x-2 mb-6 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      Zion Tech Group
                    </h3>
                    <p className="text-cyan-400 text-sm">AI & IT Solutions</p>
                  </div>
                </Link>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading provider of AI-powered solutions, IT services, and micro SAAS applications. 
                  We transform businesses with cutting-edge technology and innovative solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-start space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
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
                      className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/20 transition-all duration-300 group"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services */}
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    {category === "AI Services" && <Brain className="w-5 h-5 text-cyan-400 mr-2" />}
                    {category === "IT Services" && <Shield className="w-5 h-5 text-cyan-400 mr-2" />}
                    {category === "Micro SAAS" && <Zap className="w-5 h-5 text-cyan-400 mr-2" />}
                    {category === "5G Solutions" && <Globe className="w-5 h-5 text-cyan-400 mr-2" />}
                    {category}
                  </h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link
                          to={link.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                        >
                          <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Company & Support */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Users className="w-5 h-5 text-cyan-400 mr-2" />
                  Company
                </h4>
                <ul className="space-y-2">
                  {company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Settings className="w-5 h-5 text-cyan-400 mr-2" />
                  Support
                </h4>
                <ul className="space-y-2">
                  {support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm group flex items-center"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="border-t border-cyan-500/20 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <p className="text-white font-semibold text-sm">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-cyan-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap items-center space-x-6 text-sm">
                {legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FuturisticFooter;