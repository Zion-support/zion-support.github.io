import { Link } from 'react-router-dom';
import { 
  Linkedin, 
  Twitter, 
  Github, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Brain,
  Cloud,
  Lock,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Heart,
  Eye,
  Target as TargetIcon,
  Sparkles as SparklesIcon,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon2,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Clock as ClockIcon,
  Eye as EyeIcon,
  Heart as HeartIcon
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS",
      icon: BrainIcon,
      color: "from-purple-500 to-pink-500",
      description: "Cutting-edge AI solutions and scalable micro SAAS platforms",
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "AI-Powered Project Management", path: "/services#ai-project-management" },
        { label: "AI Customer Support", path: "/services#ai-support" },
        { label: "AI HR Automation", path: "/services#ai-hr" }
      ]
    },
    {
      title: "Technology Solutions",
      icon: CpuIcon,
      color: "from-blue-500 to-cyan-500",
      description: "Comprehensive technology infrastructure and solutions",
      links: [
        { label: "Quantum Technology", path: "/services/quantum-technology" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions" },
        { label: "Edge Computing", path: "/services#edge-computing" },
        { label: "Blockchain Platform", path: "/services#blockchain" },
        { label: "IoT Smart Buildings", path: "/services#iot-buildings" },
        { label: "Cloud & DevOps", path: "/cloud-devops" },
        { label: "Network Infrastructure", path: "/services#network" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: ShieldIcon,
      color: "from-green-500 to-emerald-500",
      description: "Advanced cybersecurity and regulatory compliance solutions",
      links: [
        { label: "Cybersecurity Services", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation" },
        { label: "AI Security Operations", path: "/services#ai-security" },
        { label: "Quantum-Secure Communication", path: "/services#quantum-security" },
        { label: "Threat Detection", path: "/services#threat-detection" },
        { label: "Compliance & Audit", path: "/services#compliance" },
        { label: "Security Assessment", path: "/services#security-assessment" },
        { label: "Data Protection", path: "/services#data-protection" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: TargetIcon,
      color: "from-orange-500 to-yellow-500",
      description: "Tailored solutions for specific industries and sectors",
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" },
        { label: "Digital Transformation", path: "/digital-transformation" },
        { label: "Business Intelligence", path: "/services#business-intelligence" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: RocketIcon,
      color: "from-purple-500 to-violet-500",
      description: "Next-generation technologies and innovative solutions",
      links: [
        { label: "Emerging Tech", path: "/emerging-tech" },
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
      title: "Company & Support",
      icon: SparklesIcon,
      color: "from-pink-500 to-rose-500",
      description: "Company information and customer support resources",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Help Center", path: "/help" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ziontechgroup', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Youtube, href: 'https://youtube.com/@ziontechgroup', label: 'YouTube', color: 'hover:text-red-400' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

  return (
    <footer className="futuristic-bg relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-16">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`p-2 bg-gradient-to-r ${section.color} rounded-lg shadow-lg`}>
                  <section.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white neon-text-cyan">
                  {section.title}
                </h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 text-cyan-500 group-hover:translate-x-1 transition-transform duration-200" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/20 mb-12"></div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <SparklesIcon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-75 blur-sm group-hover:blur-md transition-all duration-300"></div>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                  Zion Tech Group
                </h2>
                <p className="text-sm text-gray-400 font-medium">Innovation • Technology • Future</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-md">
              Leading provider of AI-powered technology solutions, quantum computing, cybersecurity, and enterprise digital transformation services.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white neon-text-purple">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-cyan-400 transition-colors duration-200 group"
                >
                  <contact.icon className="w-4 h-4 text-cyan-500 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white neon-text-pink">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-black/30 border border-cyan-500/20 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-black/30 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-200 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-cyan-500/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
    </footer>
  );
}