import { Link } from 'react-router-dom';
import { Brain, Shield, Cpu, Rocket, Globe, Zap, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Micro SAAS Services",
      icon: Brain,
      links: [
        { label: "AI & Autonomous Systems", path: "/services/ai-autonomous-systems", description: "Intelligent automation solutions" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant", description: "Autonomous research platform" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform", description: "Quantum AI training" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform", description: "Self-optimizing operations" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management", description: "Intelligent IT asset tracking" },
        { label: "Quantum Technology", path: "/services/quantum-technology", description: "Quantum computing solutions" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure", description: "Modern infrastructure services" },
        { label: "Micro SAAS Solutions", path: "/services/micro-saas-solutions", description: "Specialized business applications" },
        { label: "Cybersecurity", path: "/services/cybersecurity", description: "Advanced security solutions" },
        { label: "SOC2 Compliance Automation", path: "/soc2-compliance-automation", description: "Automated compliance" },
        { label: "Industry Solutions", path: "/services/industry-solutions", description: "Sector-specific solutions" },
        { label: "AI & Machine Learning", path: "/services#ai-ml", description: "ML and AI services" },
        { label: "Cloud & Infrastructure", path: "/services#cloud", description: "Cloud optimization" },
        { label: "5G Enterprise Solutions", path: "/5g-enterprise-solutions", description: "Next-gen networking" },
        { label: "Blockchain Solutions", path: "/services#blockchain", description: "Distributed ledger tech" },
        { label: "IoT & Edge Computing", path: "/services#iot", description: "Connected device solutions" }
      ]
    },
    {
      title: "Enterprise Solutions",
      icon: Rocket,
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise", description: "Large-scale business solutions" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare", description: "Medical technology solutions" },
        { label: "Financial Solutions", path: "/solutions/financial", description: "Fintech and banking solutions" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing", description: "Industry 4.0 solutions" },
        { label: "Retail Solutions", path: "/solutions/retail", description: "E-commerce and retail tech" },
        { label: "Government Solutions", path: "/solutions/government", description: "Public sector technology" },
        { label: "Business Intelligence", path: "/services/business-intelligence", description: "Data-driven insights" },
        { label: "Marketing Automation", path: "/services/ai-marketing", description: "AI-powered marketing" },
        { label: "HR & Recruitment", path: "/services/ai-hr", description: "Human resources automation" },
        { label: "Legal Tech", path: "/services/ai-legal", description: "Legal technology solutions" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Zap,
      links: [
        { label: "Quantum Computing", path: "/emerging-tech", description: "Quantum computational power" },
        { label: "Blockchain & DeFi", path: "/emerging-tech", description: "Decentralized finance" },
        { label: "IoT & Edge Computing", path: "/emerging-tech", description: "Internet of Things" },
        { label: "Extended Reality (XR)", path: "/emerging-tech", description: "AR/VR solutions" },
        { label: "5G & Networks", path: "/emerging-tech", description: "Next-generation networking" },
        { label: "Green Technology", path: "/emerging-tech", description: "Sustainable tech solutions" },
        { label: "Digital Twins", path: "/emerging-tech", description: "Virtual replicas" }
      ]
    },
    {
      title: "Company & Resources",
      icon: Globe,
      links: [
        { label: "About Us", path: "/about", description: "Our story and mission" },
        { label: "Our Mission", path: "/mission", description: "What drives us forward" },
        { label: "Team", path: "/team", description: "Meet our experts" },
        { label: "Pricing", path: "/pricing", description: "Service plans and pricing" },
        { label: "Careers", path: "/careers", description: "Join our team" },
        { label: "Partners", path: "/partners", description: "Strategic partnerships" },
        { label: "Contact", path: "/contact", description: "Get in touch" },
        { label: "Blog", path: "/blog", description: "Industry insights" },
        { label: "Case Studies", path: "/case-studies", description: "Success stories" },
        { label: "Help Center", path: "/help", description: "Support resources" },
        { label: "Documentation", path: "/docs", description: "Technical documentation" },
        { label: "Support Center", path: "/support", description: "Customer support" }
      ]
    }
  ];

  // Fixed social media links with proper error handling
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: '💼',
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: '🐦',
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: '💻',
      fallback: 'https://github.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: '📘',
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: '📷',
      fallback: 'https://instagram.com'
    }
  ];

  const handleSocialLink = (link: any) => {
    try {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      // Fallback to generic URL
      window.open(link.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="futuristic-footer relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 bg-gradient-to-b from-slate-900/95 to-slate-900/98 backdrop-blur-sm border-t border-cyan-500/20">
        <div className="container mx-auto px-4 py-16">
          {/* Logo and description */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                ZION
              </span>
            </div>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Empowering businesses with cutting-edge AI solutions, autonomous systems, and innovative micro-SAAS services. 
              Transform your digital future with Zion Tech Group.
            </p>
          </div>

          {/* Footer sections grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <section.icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-white font-semibold text-lg">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.path} 
                        className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm group flex items-center space-x-2"
                      >
                        <span className="w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact and social section */}
          <div className="border-t border-slate-700 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact info */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>Get in Touch</span>
                </h3>
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>contact@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>Silicon Valley, CA</span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => handleSocialLink(link)}
                      className="w-10 h-10 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-400/50 rounded-lg flex items-center justify-center text-lg transition-all duration-200 hover:scale-110"
                      title={link.name}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-slate-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;