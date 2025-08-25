import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram, 
  Youtube,
  Sparkles,
  Shield,
  Brain,
  Cloud,
  Rocket,
  Users,
  Award,
  ArrowRight,
  Heart
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      links: [
        { label: "AI Autonomous Systems", path: "/services/ai-autonomous-systems" },
        { label: "AI Research Assistant", path: "/ai-autonomous-research-assistant" },
        { label: "Quantum Neural Networks", path: "/quantum-neural-network-platform" },
        { label: "Autonomous Business Platform", path: "/autonomous-business-operations-platform" },
        { label: "AI Asset Management", path: "/ai-powered-it-asset-management" },
        { label: "AI Workflow Automation", path: "/ai-workflow-automation" }
      ]
    },
    {
      title: "Cybersecurity & Security",
      icon: Shield,
      links: [
        { label: "Cybersecurity Suite", path: "/services/cybersecurity" },
        { label: "SOC2 Compliance", path: "/soc2-compliance-automation" },
        { label: "Threat Intelligence", path: "/services/cybersecurity" },
        { label: "Zero Trust Security", path: "/services/cybersecurity" },
        { label: "Incident Response", path: "/services/cybersecurity" },
        { label: "Security Testing", path: "/services/cybersecurity" }
      ]
    },
    {
      title: "Blockchain & Web3",
      icon: Shield,
      links: [
        { label: "Smart Contracts", path: "/services" },
        { label: "DeFi Trading", path: "/services" },
        { label: "NFT Marketplace", path: "/services" },
        { label: "Decentralized Identity", path: "/services" },
        { label: "Blockchain Governance", path: "/services" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      links: [
        { label: "Cloud DevOps", path: "/cloud-devops" },
        { label: "IT Infrastructure", path: "/services/it-infrastructure" },
        { label: "Storage Optimization", path: "/services" },
        { label: "Specialized IT", path: "/services/specialized-it-infrastructure" }
      ]
    },
    {
      title: "Solutions",
      icon: Rocket,
      links: [
        { label: "Enterprise Solutions", path: "/solutions/enterprise" },
        { label: "Healthcare Solutions", path: "/solutions/healthcare" },
        { label: "Financial Solutions", path: "/solutions/financial" },
        { label: "Manufacturing Solutions", path: "/solutions/manufacturing" },
        { label: "Retail Solutions", path: "/solutions/retail" },
        { label: "Government Solutions", path: "/solutions/government" }
      ]
    },
    {
      title: "Company",
      icon: Users,
      links: [
        { label: "About Us", path: "/about" },
        { label: "Our Mission", path: "/mission" },
        { label: "Team", path: "/team" },
        { label: "Pricing", path: "/pricing" },
        { label: "Careers", path: "/careers" },
        { label: "Partners", path: "/partners" },
        { label: "Contact", path: "/contact" },
        { label: "News", path: "/news" }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      fallback: 'https://linkedin.com'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      fallback: 'https://twitter.com'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/Zion-Holdings', 
      icon: Github,
      fallback: 'https://github.com'
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ziontechgroup', 
      icon: Facebook,
      fallback: 'https://facebook.com'
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ziontechgroup', 
      icon: Instagram,
      fallback: 'https://instagram.com'
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ziontechgroup', 
      icon: Youtube,
      fallback: 'https://youtube.com'
    }
  ];

  const handleSocialLink = (link: any) => {
    try {
      window.open(link.url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error(`Error opening ${link.name}:`, error);
      // Fallback to generic URL
      try {
        window.open(link.fallback, '_blank', 'noopener,noreferrer');
      } catch (fallbackError) {
        console.error(`Fallback error for ${link.name}:`, fallbackError);
      }
    }
  };

  return (
    <footer className="relative bg-black/90 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 quantum-mesh opacity-20"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500 text-xs animate-matrix-rain opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 border-b border-cyan-500/30">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-cyan-300">Future Technology Solutions</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Pioneering the future of technology with revolutionary AI consciousness, 
              quantum computing, and autonomous solutions that transform businesses worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <span className="text-sm">364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-300">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
            </div>
            
            <form className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full futuristic-input"
                />
              </div>
              <button
                type="submit"
                className="futuristic-btn neon-glow neon-cyan w-full"
              >
                Subscribe to Newsletter
              </button>
            </form>
            
            <p className="text-xs text-gray-400">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="py-16 border-b border-cyan-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-2">
                  <section.icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart className="w-4 h-4 text-red-400" />
              <span>Made with Love by Zion Tech Group</span>
            </div>
            
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialLink(link)}
                  className="p-2 text-gray-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
                  aria-label={`Visit ${link.name}`}
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-cyan-500/30 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved. | 
              <Link to="/privacy" className="ml-2 hover:text-cyan-300 transition-colors">Privacy Policy</Link> | 
              <Link to="/terms" className="ml-2 hover:text-cyan-300 transition-colors">Terms of Service</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;