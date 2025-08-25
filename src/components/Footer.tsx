import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Sparkles,
  Brain,
  Shield,
  Cloud,
  Atom,
  Building,
  Rocket,
  Users,
  BookOpen,
  MessageCircle,
  ArrowRight
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Cutting-edge artificial intelligence solutions",
      links: [
        { label: "AI Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Content Generation", path: "/ai-powered-content-generator" },
        { label: "AI Customer Support", path: "/ai-powered-customer-support" },
        { label: "AI Financial Advisory", path: "/autonomous-financial-advisor" },
        { label: "AI HR Automation", path: "/ai-powered-hr-automation" },
        { label: "AI Legal Assistant", path: "/ai-powered-legal-assistant" },
        { label: "AI Predictive Maintenance", path: "/ai-powered-predictive-maintenance" },
        { label: "Quantum Machine Learning", path: "/quantum-machine-learning-platform" }
      ]
    },
    {
      title: "Cybersecurity",
      icon: Shield,
      description: "Advanced security and compliance solutions",
      links: [
        { label: "Quantum Encryption", path: "/quantum-encryption-platform" },
        { label: "Autonomous Response", path: "/cybersecurity-autonomous-response" },
        { label: "Threat Intelligence", path: "/cybersecurity-threat-intelligence" },
        { label: "Quantum Cryptography", path: "/quantum-cryptography-network" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      description: "Scalable infrastructure and automation",
      links: [
        { label: "Autonomous DevOps", path: "/autonomous-devops-orchestrator" },
        { label: "Edge Computing", path: "/edge-computing-orchestrator" },
        { label: "Digital Twins", path: "/digital-twin-platform" }
      ]
    },
    {
      title: "Emerging Technology",
      icon: Atom,
      description: "Next-generation technology solutions",
      links: [
        { label: "Metaverse Platform", path: "/metaverse-development-platform" },
        { label: "Quantum Internet", path: "/quantum-internet-protocol" },
        { label: "Neuromorphic Computing", path: "/neuromorphic-computing-platform" }
      ]
    },
    {
      title: "Business Solutions",
      icon: Building,
      description: "Enterprise-grade business automation",
      links: [
        { label: "Autonomous Business Operations", path: "/autonomous-business-operations-platform" },
        { label: "Blockchain Supply Chain", path: "/blockchain-supply-chain-tracking" },
        { label: "Autonomous Logistics", path: "/autonomous-logistics-platform" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      description: "Learn more about Zion Tech Group",
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "Blog", path: "/blog" }
      ]
    }
  ];

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
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: '📺',
      fallback: 'https://youtube.com'
    }
  ];

  const handleSocialClick = (social: any) => {
    try {
      window.open(social.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.warn(`Failed to open ${social.name} link, using fallback`);
      window.open(social.fallback, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="bg-black/90 backdrop-blur-xl border-t border-cyan-500/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-mesh opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20 quantum-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white neon-text">{section.title}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact & Social Section */}
        <div className="border-t border-cyan-500/30 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="fade-in-left">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Zion Tech Group</h3>
                  <p className="text-cyan-400 text-sm">Revolutionary Technology Solutions</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
            </div>

            {/* Social & Newsletter */}
            <div className="fade-in-right">
              <h4 className="text-xl font-semibold text-white mb-6">Connect With Us</h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social)}
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 neon-pulse"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </button>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-black/30 rounded-xl p-6 border border-cyan-500/30">
                <h5 className="text-lg font-semibold text-white mb-3">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest insights on emerging technologies and AI innovations
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="futuristic-input flex-1 text-sm"
                  />
                  <button className="futuristic-button text-sm px-4 py-2">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyan-500/30 pt-8 mt-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}