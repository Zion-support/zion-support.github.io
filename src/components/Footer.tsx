import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  ArrowUp, 
  ArrowRight,
  Brain,
  Shield,
  Cpu,
  Network,
  Smartphone,
  BarChart3,
  Heart as HeartIcon,
  Zap,
  Leaf,
  Scale,
  Users,
  TrendingUp,
  Award,
  Star
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/company/ziontechgroup", icon: "💼", color: "hover:bg-blue-600/20" },
    { name: "Twitter", url: "https://twitter.com/ziontechgroup", icon: "🐦", color: "hover:bg-sky-500/20" },
    { name: "GitHub", url: "https://github.com/Zion-Holdings", icon: "💻", color: "hover:bg-gray-600/20" },
    { name: "YouTube", url: "https://www.youtube.com/@ziontechgroup", icon: "📺", color: "hover:bg-red-600/20" },
    { name: "Discord", url: "https://discord.gg/ziontechgroup", icon: "🎮", color: "hover:bg-indigo-600/20" }
  ];

  const footerSections = [
    {
      title: "AI & Analytics",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      links: [
        { label: "AI Business Intelligence", path: "/innovative-services-2026" },
        { label: "Machine Learning Platforms", path: "/innovative-services-2026" },
        { label: "Predictive Analytics", path: "/innovative-services-2026" },
        { label: "Natural Language Processing", path: "/innovative-services-2026" },
        { label: "Computer Vision Solutions", path: "/innovative-services-2026" },
        { label: "AI-Powered Insights", path: "/innovative-services-2026" }
      ]
    },
    {
      title: "Cybersecurity & Infrastructure",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      links: [
        { label: "Quantum-Safe Security", path: "/innovative-services-2026" },
        { label: "AI Autonomous DevOps", path: "/innovative-services-2026" },
        { label: "Edge AI Computing", path: "/innovative-services-2026" },
        { label: "IoT Security", path: "/innovative-services-2026" },
        { label: "Cloud Infrastructure", path: "/innovative-services-2026" },
        { label: "Zero-Trust Architecture", path: "/innovative-services-2026" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      links: [
        { label: "Blockchain Solutions", path: "/innovative-services-2026" },
        { label: "Smart Building Management", path: "/innovative-services-2026" },
        { label: "Clean Energy Platforms", path: "/innovative-services-2026" },
        { label: "Quantum Computing", path: "/innovative-services-2026" },
        { label: "5G & Network Solutions", path: "/innovative-services-2026" },
        { label: "AR/VR Applications", path: "/innovative-services-2026" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      links: [
        { label: "Healthcare AI", path: "/innovative-services-2026" },
        { label: "Legal Tech Solutions", path: "/innovative-services-2026" },
        { label: "Financial Technology", path: "/innovative-services-2026" },
        { label: "Supply Chain Management", path: "/innovative-services-2026" },
        { label: "Manufacturing 4.0", path: "/innovative-services-2026" },
        { label: "Retail Innovation", path: "/innovative-services-2026" }
      ]
    }
  ];

  const companyInfo = [
    { icon: Users, label: "Global Clients", value: "500+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Star, label: "Success Rate", value: "99.9%" },
    { icon: Globe, label: "Countries Served", value: "25+" }
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kleber@ziontechgroup.com", href: "mailto:kleber@ziontechgroup.com" },
    { icon: Phone, label: "Phone", value: "+1 302 464 0950", href: "tel:+13024640950" },
    { icon: MapPin, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709", href: "#" },
    { icon: Globe, label: "Website", value: "ziontechgroup.com", href: "https://ziontechgroup.com" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {companyInfo.map((info, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">{info.value}</div>
              <div className="text-slate-400 text-sm">{info.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent neon-text">
                Zion Tech Group
              </h3>
              <p className="text-slate-300 mt-4 max-w-md leading-relaxed">
                Pioneering the future with AI-powered solutions, quantum technology, and innovative IT services. 
                Transform your business with cutting-edge technology that drives innovation and growth.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <contact.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 text-sm">{contact.label}: </span>
                    <a 
                      href={contact.href} 
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Our Innovation Journey</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 flex items-center justify-center text-lg transition-all duration-300 ${social.color} hover:scale-110 border border-slate-700/50 hover:border-cyan-500/50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="flex items-center mb-4">
                <div className={`w-8 h-8 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center mr-3`}>
                  <section.icon className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-white font-semibold">{section.title}</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.path}
                      className="text-slate-400 hover:text-cyan-400 transition-all duration-200 text-sm hover:translate-x-1 inline-block group"
                    >
                      <span className="flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-12 border-t border-slate-700/50">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-md border border-cyan-500/20 rounded-3xl p-8">
              <h4 className="text-2xl font-bold text-white mb-3">Stay Ahead of Innovation</h4>
              <p className="text-slate-300 mb-6 text-lg">Get exclusive insights on AI breakthroughs, emerging technologies, and industry transformations</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 neon-glow">
                  Subscribe
                </button>
              </div>
              <p className="text-slate-400 text-sm mt-4">Join 10,000+ innovators and tech leaders</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>© {currentYear} Zion Tech Group. All rights reserved.</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>Built with innovation</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Cookie Policy
              </Link>
              <Link to="/security" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50 neon-glow"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
};
