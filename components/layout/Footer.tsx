import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Instagram,
  ArrowRight,
  Heart,
  Globe,
  Shield,
  Users,
  Award,
  Star,
  Zap,
  Cloud,
  Database,
  Network,
  Target,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: "AI & Automation",
      icon: Brain,
      color: "text-blue-400",
      services: [
        { name: "AI Autonomous Cybersecurity Platform", href: "/services/ai-autonomous-cybersecurity-platform" },
        { name: "AI Customer Experience Platform", href: "/services/ai-customer-experience-platform" },
        { name: "AI Healthcare Diagnostics", href: "/services/ai-healthcare-diagnostics" },
        { name: "AI Enterprise Orchestrator", href: "/services/ai-enterprise-orchestrator" }
      ]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      color: "text-green-400",
      services: [
        { name: "Cloud Migration", href: "/services/cloud-migration" },
        { name: "Micro SaaS Solutions", href: "/micro-saas" },
        { name: "IT Services", href: "/it-services" },
        { name: "Infrastructure Management", href: "/services/infrastructure" }
      ]
    },
    {
      title: "Data & Analytics",
      icon: Database,
      color: "text-purple-400",
      services: [
        { name: "Data Analytics", href: "/services/data-analytics" },
        { name: "Business Intelligence", href: "/services/business-intelligence" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics" },
        { name: "AI Healthcare Analytics", href: "/services/ai-healthcare-analytics-platform" }
      ]
    }
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "White Papers", href: "/white-papers" },
    { name: "Webinars", href: "/webinars" },
    { name: "Pricing", href: "/pricing" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" }
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com/company/ziontechgroup", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com/ziontechgroup", icon: Twitter },
    { name: "GitHub", href: "https://github.com/ziontechgroup", icon: Github },
    { name: "YouTube", href: "https://youtube.com/ziontechgroup", icon: Youtube },
    { name: "Instagram", href: "https://instagram.com/ziontechgroup", icon: Instagram }
  ];

  const contactInfo = {
    email: "contact@ziontechgroup.com",
    phone: "+1 (555) 123-4567",
    address: "123 Technology Drive, San Francisco, CA 94105"
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Zion Tech Group</span>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading provider of AI-powered solutions and technology services. 
              We help businesses transform and innovate with cutting-edge artificial intelligence.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                <span>{contactInfo.address}</span>
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
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          {serviceCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
                <li><Link href="/careers" className="text-gray-300 hover:text-blue-400 transition-colors">Careers</Link></li>
                <li><Link href="/partners" className="text-gray-300 hover:text-blue-400 transition-colors">Partners</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-300 hover:text-blue-400 transition-colors">Blog</Link></li>
                <li><Link href="/documentation" className="text-gray-300 hover:text-blue-400 transition-colors">Documentation</Link></li>
                <li><Link href="/api" className="text-gray-300 hover:text-blue-400 transition-colors">API Reference</Link></li>
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
              <ul className="space-y-2">
                <li><Link href="/help" className="text-gray-300 hover:text-blue-400 transition-colors">Help Center</Link></li>
                <li><Link href="/status" className="text-gray-300 hover:text-blue-400 transition-colors">System Status</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact Support</Link></li>
                <li><Link href="/faq" className="text-gray-300 hover:text-blue-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">Cookie Policy</Link></li>
                <li><Link href="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors">Sitemap</Link></li>
              </ul>
              
              {/* Social Media */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3 text-blue-400">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://facebook.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://instagram.com/ziontechgroup" className="text-gray-300 hover:text-blue-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-2 text-blue-400">Newsletter</h5>
                <p className="text-gray-300 text-sm mb-3">Stay updated with our latest insights</p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest AI insights and technology trends delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-t border-slate-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-300 hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-blue-400 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;