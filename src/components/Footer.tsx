import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Star,
  Shield,
  Zap,
  Brain,
  Rocket,
  Cpu,
  Building,
  Users,
  Target,
  Sparkles,
  Heart,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  Globe2,
  Lock,
  Database,
  Cloud,
  Code,
  Palette,
  Smartphone,
  Monitor,
  Server,
  Network,
  Layers
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      description: "Intelligent solutions powered by artificial intelligence",
      color: "from-cyan-500 to-blue-600",
      links: [
        { label: "AI Business Intelligence", path: "/services/ai-business-intelligence", description: "Advanced analytics and insights", price: "$299-1,200/month" },
        { label: "AI Customer Service", path: "/services/ai-customer-service", description: "Automated support solutions", price: "$199-800/month" },
        { label: "AI Marketing Automation", path: "/services/ai-marketing", description: "Smart marketing optimization", price: "$399-1,200/month" },
        { label: "AI Healthcare Analytics", path: "/services/ai-healthcare", description: "Patient care optimization", price: "$799-2,500/month" },
        { label: "AI Financial Analytics", path: "/services/ai-financial", description: "Risk assessment and insights", price: "$649-1,800/month" },
        { label: "AI Manufacturing", path: "/services/ai-manufacturing", description: "Smart production systems", price: "$749-2,200/month" },
        { label: "AI Legal Tech", path: "/services/ai-legal", description: "Automated legal processes", price: "$449-1,200/month" },
        { label: "AI HR & Recruitment", path: "/services/ai-hr", description: "Intelligent talent management", price: "$349-1,000/month" }
      ]
    },
    {
      title: "Cybersecurity & Quantum",
      icon: Shield,
      description: "Next-generation security solutions for the future",
      color: "from-purple-500 to-pink-600",
      links: [
        { label: "Quantum-Ready Security", path: "/services/quantum-cybersecurity", description: "Future-proof protection", price: "$899-2,500/month" },
        { label: "AI Threat Detection", path: "/services/ai-threat-detection", description: "Intelligent security monitoring", price: "$599-1,800/month" },
        { label: "Zero Trust Architecture", path: "/services/zero-trust", description: "Advanced security framework", price: "$699-2,000/month" },
        { label: "Compliance Automation", path: "/services/compliance", description: "Regulatory compliance tools", price: "$449-1,200/month" },
        { label: "Security Assessment", path: "/services/security-assessment", description: "Comprehensive security audit", price: "$800-2,500/month" },
        { label: "Incident Response", path: "/services/incident-response", description: "24/7 threat response", price: "$1,200-3,500/month" }
      ]
    },
    {
      title: "Emerging Technology",
      icon: Zap,
      description: "Cutting-edge technologies for tomorrow's challenges",
      color: "from-green-500 to-emerald-600",
      links: [
        { label: "Quantum Computing", path: "/services/quantum-computing", description: "Next-generation computing", price: "$2,499-6,000/month" },
        { label: "Neuromorphic Computing", path: "/services/neuromorphic", description: "Brain-inspired AI", price: "$1,499-3,500/month" },
        { label: "Digital Twins", path: "/services/digital-twins", description: "Virtual asset replicas", price: "$799-2,200/month" },
        { label: "Blockchain DeFi", path: "/services/blockchain-defi", description: "Decentralized finance", price: "$399-1,200/month" },
        { label: "5G Optimization", path: "/services/5g-optimization", description: "Network performance", price: "$699-2,000/month" },
        { label: "Space Technology", path: "/services/space-technology", description: "Satellite and space solutions", price: "$1,999-5,000/month" },
        { label: "Extended Reality (XR)", path: "/services/extended-reality", description: "VR/AR/MR solutions", price: "$599-1,500/month" },
        { label: "Green Technology", path: "/services/green-technology", description: "Sustainability solutions", price: "$299-900/month" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      icon: Cpu,
      description: "Scalable software solutions for every business need",
      color: "from-orange-500 to-red-600",
      links: [
        { label: "Custom SAAS Development", path: "/services/custom-saas", description: "Tailored software solutions", price: "$500-2,000/month" },
        { label: "Multi-tenant Architecture", path: "/services/multi-tenant", description: "Efficient resource sharing", price: "$400-1,500/month" },
        { label: "Subscription Management", path: "/services/subscription-management", description: "Billing and renewal systems", price: "$300-1,000/month" },
        { label: "API Development", path: "/services/api-development", description: "Integration solutions", price: "$600-1,800/month" },
        { label: "Analytics & Reporting", path: "/services/analytics-reporting", description: "Business intelligence tools", price: "$400-1,200/month" },
        { label: "User Management", path: "/services/user-management", description: "Access control systems", price: "$300-800/month" }
      ]
    },
    {
      title: "Industry Solutions",
      icon: Building,
      description: "Specialized solutions for your industry",
      color: "from-indigo-500 to-purple-600",
      links: [
        { label: "Healthcare Technology", path: "/solutions/healthcare", description: "Medical innovation solutions", price: "$800-3,000/month" },
        { label: "Financial Services", path: "/solutions/financial", description: "Fintech and banking solutions", price: "$700-2,500/month" },
        { label: "Manufacturing Intelligence", path: "/solutions/manufacturing", description: "Smart manufacturing systems", price: "$900-3,500/month" },
        { label: "Retail Technology", path: "/solutions/retail", description: "Digital retail transformation", price: "$600-2,000/month" },
        { label: "Government Solutions", path: "/solutions/government", description: "Public sector innovation", price: "$1,000-4,000/month" },
        { label: "Education Technology", path: "/solutions/education", description: "Learning innovation platforms", price: "$500-1,800/month" },
        { label: "Energy Management", path: "/solutions/energy", description: "Sustainable energy solutions", price: "$800-2,500/month" },
        { label: "Logistics & Supply Chain", path: "/solutions/logistics", description: "Supply chain optimization", price: "$600-2,200/month" }
      ]
    },
    {
      title: "Company & Support",
      icon: Users,
      description: "Learn about our mission and get support",
      color: "from-slate-500 to-gray-600",
      links: [
        { label: "About Us", path: "/about", description: "Our story and values" },
        { label: "Our Mission", path: "/mission", description: "What drives us forward" },
        { label: "Team", path: "/team", description: "Meet our experts" },
        { label: "Pricing", path: "/pricing", description: "Transparent pricing plans" },
        { label: "Careers", path: "/careers", description: "Join our team" },
        { label: "Partners", path: "/partners", description: "Strategic partnerships" },
        { label: "Contact", path: "/contact", description: "Get in touch" },
        { label: "Blog", path: "/blog", description: "Latest insights" },
        { label: "News", path: "/news", description: "Company updates" },
        { label: "Help Center", path: "/help", description: "Support documentation" },
        { label: "Status Page", path: "/status", description: "Service status" },
        { label: "Contact Support", path: "/support", description: "Technical support" }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/zion-tech-group', icon: Linkedin, color: 'hover:text-blue-400', followers: '2.5K+' },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400', followers: '1.8K+' },
    { name: 'Facebook', url: 'https://www.facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600', followers: '3.2K+' },
    { name: 'Instagram', url: 'https://www.instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400', followers: '1.5K+' },
    { name: 'YouTube', url: 'https://www.youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500', followers: '5.6K+' }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown DE 19709',
    website: 'https://ziontechgroup.com',
    hours: 'Mon-Fri: 9AM-6PM EST',
    responseTime: '< 2 hours'
  };

  const quickStats = [
    { label: 'Services Delivered', value: '500+', icon: CheckCircle, color: 'text-green-400' },
    { label: 'Happy Clients', value: '200+', icon: Heart, color: 'text-red-400' },
    { label: 'Years Experience', value: '8+', icon: Award, color: 'text-yellow-400' },
    { label: 'Success Rate', value: '98%', icon: TrendingUp, color: 'text-blue-400' }
  ];

  const technologies = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
    { category: 'AI & ML', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'] },
    { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker'] },
    { category: 'Emerging', items: ['Quantum Computing', 'Blockchain', 'IoT', 'Edge Computing'] }
  ];

  return (
    <footer className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-zion-purple/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-zion-cyan/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {footerSections.map((section, index) => (
              <div key={index} className="group">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-zion-slate-light">{section.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {section.links.slice(0, 6).map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      to={link.path}
                      className="block group/link"
                    >
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-all duration-200">
                        <div className="flex-1">
                          <div className="text-white group-hover/link:text-zion-cyan transition-colors font-medium">
                            {link.label}
                          </div>
                          <div className="text-xs text-zion-slate-light">{link.description}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-zion-cyan font-semibold">{link.price}</div>
                          <ArrowRight className="w-3 h-3 text-zion-slate-light group-hover/link:text-zion-cyan transition-colors ml-auto" />
                        </div>
                      </div>
                    </Link>
                  ))}
                  
                  {section.links.length > 6 && (
                    <Link
                      to={`/services?category=${section.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block text-center p-3 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                    >
                      View All {section.title} Services →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8 flex items-center justify-center space-x-3">
              <Code className="w-8 h-8 text-zion-cyan" />
              <span>Technology Stack</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">{tech.category}</h4>
                  <div className="space-y-2">
                    {tech.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Social Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Phone className="w-8 h-8 text-zion-cyan" />
                <span>Get In Touch</span>
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">{contactInfo.phone}</div>
                    <div className="text-sm text-zion-slate-light">Available {contactInfo.hours}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">{contactInfo.email}</div>
                    <div className="text-sm text-zion-slate-light">Response time: {contactInfo.responseTime}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <div>
                    <div className="text-white font-medium">Headquarters</div>
                    <div className="text-sm text-zion-slate-light">{contactInfo.address}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-semibold hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-200 shadow-lg shadow-zion-cyan/25 hover:shadow-zion-cyan/40"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Social Media & Newsletter */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <Globe2 className="w-8 h-8 text-zion-cyan" />
                <span>Connect With Us</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200 group"
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon className={`w-5 h-5 ${social.color} transition-colors`} />
                      <span className="text-white font-medium">{social.name}</span>
                    </div>
                    <div className="text-sm text-zion-slate-light">{social.followers}</div>
                  </a>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
                <p className="text-sm text-zion-slate-light mb-4">
                  Get the latest insights on AI, emerging tech, and industry trends.
                </p>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/20 border border-zion-cyan/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:bg-white/30 transition-all duration-200"
                  />
                  <button className="px-4 py-2 bg-zion-cyan hover:bg-zion-cyan-light text-white rounded-lg font-medium transition-colors duration-200">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-zion-cyan" />
                <span className="text-zion-slate-light">
                  © {currentYear} Zion Tech Group. All rights reserved.
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
                <Link to="/sitemap" className="hover:text-zion-cyan transition-colors">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}