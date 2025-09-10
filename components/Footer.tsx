<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Building,
  Calculator,
  Calendar,
  Camera,
  CheckCircle,
  ClipboardList,
  Clock,
  Cloud,
  Code,
  Cpu,
  CreditCard,
  DollarSign,
  Eye,
  FileText,
  Gamepad2,
  Globe,
  HardDrive,
  Heart,
  HelpCircle,
  Home,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Music,
  Network,
  Paintbrush,
  Phone,
  PieChart,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Sprout,
  Star,
  Target,
  TreePine,
  TrendingUp,
  Truck,
  Users,
  Video,
  Wifi,
  Wrench,
  Zap
} from 'lucide-react';

interface FooterProps {
  className?: string;
}

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Cloud },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Code },
    { name: 'Blockchain', href: '/blockchain', icon: Shield },
    { name: 'IoT Solutions', href: '/iot', icon: Network },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/enterprise' },
    { name: 'Startup Solutions', href: '/solutions/startup' },
    { name: 'E-commerce', href: '/ecommerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Education', href: '/industries/education' }
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const resources = [
    { name: 'Blog', href: '/blog' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Best Practices', href: '/best-practices' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube }
  ];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <div className="text-xl font-bold">Zion Tech Group</div>
                <div className="text-sm text-gray-400">AI & Technology Solutions</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of AI solutions, cloud services, and technology consulting.
              We help businesses transform and grow through innovative technology.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
  
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-4">
              {footerSections[0].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
  
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <div className="space-y-4">
              {footerSections[1].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
  
          {/* Company & Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <div className="space-y-4">
              {footerSections[3].links.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group"
                >
                  <link.icon className="w-4 h-4 group-hover:text-blue-400" />
                  <span>{link.title}</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </ul>
  
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link
                    href={resource.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
  
        {/* Trust Indicators */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Micro SaaS Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Micro SaaS Solutions</h4>
              <div className="grid grid-cols-2 gap-2">
                {microSaasCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-blue-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">AI Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {aiServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-green-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* IT Service Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">IT Services</h4>
              <div className="grid grid-cols-2 gap-2">
                {itServiceCategories.map((category) => (
                  <div key={category.title} className="flex items-center space-x-2 text-sm text-gray-400">
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <span className="text-purple-400">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">235+</div>
              <div className="text-gray-400">Services & Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95+</div>
              <div className="text-gray-400">Expert Team Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legal.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/sitemap" className="text-gray-400 hover:text-white transition-colors text-sm">
                Sitemap
              </Link>
              <Link href="/accessibility" className="text-gray-400 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
=======

<<<<<<< HEAD
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-300 mb-4">
              Leading technology solutions provider specializing in AI, IT services, and micro SaaS solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">AI Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">Micro SaaS</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/docs" className="text-gray-300 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
>>>>>>> 26a23840d0afc28627aae94549d1ebed59f462f6
        </div>
      </div>
    </footer>
  );
}