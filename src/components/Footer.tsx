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
        { label: "AI-Powered CRM", path: "/services" },
        { label: "AI Content Generation", path: "/services" },
        { label: "AI Sales Intelligence", path: "/services" },
        { label: "AI Customer Analytics", path: "/services" },
        { label: "AI HR Technology", path: "/services" },
        { label: "AI Supply Chain", path: "/services" },
        { label: "AI Customer Experience", path: "/services" }
      ]
    },
    {
      title: "Cybersecurity & Security",
      icon: Shield,
      links: [
        { label: "Threat Intelligence", path: "/services" },
        { label: "Zero Trust Security", path: "/services" },
        { label: "Incident Response", path: "/services" },
        { label: "Financial Security", path: "/services" },
        { label: "Security Testing", path: "/services" },
        { label: "Quantum Security", path: "/services" }
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
        { label: "Retail Solutions", path: "/solutions/retail" }
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
        { label: "Blog", path: "/blog" }
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
      url: 'https://github.com/ziontechgroup', 
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
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-sm text-cyan-300 font-medium">Future Technology Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pioneering the future of technology with revolutionary AI consciousness, 
                quantum computing, and autonomous solutions that transform businesses worldwide.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <a 
                    href="https://ziontechgroup.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-300 transition-colors duration-200"
                  >
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-gray-300">Get the latest insights on AI, quantum computing, and emerging technologies.</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 futuristic-input"
                  />
                  <button className="futuristic-btn neon-glow neon-cyan">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center space-x-3">
                  <section.icon className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-cyan-300 transition-colors duration-200 text-sm flex items-center group"
                      >
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-cyan-500/20 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved. | 
                <Link to="/privacy" className="ml-2 hover:text-cyan-300 transition-colors duration-200">Privacy Policy</Link> | 
                <Link to="/terms" className="ml-2 hover:text-cyan-300 transition-colors duration-200">Terms of Service</Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm mr-2">Follow us:</span>
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialLink(social)}
                    className="w-8 h-8 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-200 group"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  </button>
                ))}
              </div>
            </div>

            {/* Made with Love */}
            <div className="text-center mt-6 pt-6 border-t border-cyan-500/20">
              <p className="text-gray-400 text-sm flex items-center justify-center">
                Made with <Heart className="w-4 h-4 text-red-400 mx-1" /> by Zion Tech Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}