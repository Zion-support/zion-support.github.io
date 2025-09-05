import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Shield,
  BarChart3,
  Users,
  Settings,
  FileText,
  MessageSquare,
  Calendar,
  ShoppingCart,
  BookOpen,
  Building,
  Heart,
  DollarSign,
  Target,
  Zap,
  Award,
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Eye,
  Lock,
  Code,
  Home,
  Camera,
  Music,
  Gamepad2,
  Truck,
  Calculator,
  CreditCard,
  Paintbrush,
  HardDrive,
  Activity,
  Lightbulb,
  Wrench,
  PieChart,
  ClipboardList,
  Layers
} from 'lucide-react';

const footerSections = [
  {
    title: 'Services',
    links: [
      { title: 'AI Services', href: '/ai-services', icon: Brain },
      { title: 'IT Services', href: '/it-services', icon: Network },
      { title: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
      { title: 'Quantum Computing', href: '/quantum-computing', icon: Code },
      { title: 'Blockchain', href: '/blockchain', icon: Lock },
      { title: 'IoT Solutions', href: '/iot', icon: Globe },
      { title: 'AR/VR Solutions', href: '/ar-vr', icon: Eye },
      { title: 'Space Technology', href: '/space-tech', icon: Settings }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { title: 'Enterprise Solutions', href: '/enterprise', icon: Building },
      { title: 'Startup Solutions', href: '/startup', icon: Settings },
      { title: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud },
      { title: 'Cybersecurity', href: '/cybersecurity', icon: Shield },
      { title: 'Data Analytics', href: '/data-analytics', icon: BarChart3 },
      { title: 'Automation', href: '/automation', icon: Zap },
      { title: 'Digital Transformation', href: '/digital-transformation', icon: TrendingUp },
      { title: 'Custom Development', href: '/custom-development', icon: Code }
    ]
  },
  {
    title: 'Industries',
    links: [
      { title: 'Healthcare', href: '/industries/healthcare', icon: Heart },
      { title: 'Finance', href: '/industries/finance', icon: DollarSign },
      { title: 'Manufacturing', href: '/industries/manufacturing', icon: Settings },
      { title: 'Retail', href: '/industries/retail', icon: ShoppingCart },
      { title: 'Education', href: '/industries/education', icon: BookOpen },
      { title: 'Real Estate', href: '/industries/real-estate', icon: Home },
      { title: 'Agriculture', href: '/industries/agriculture', icon: Target },
      { title: 'Energy', href: '/industries/energy', icon: Zap }
    ]
  },
  {
    title: 'Resources',
    links: [
      { title: 'Blog', href: '/blog', icon: FileText },
      { title: 'Case Studies', href: '/case-studies', icon: BarChart3 },
      { title: 'White Papers', href: '/white-papers', icon: FileText },
      { title: 'Webinars', href: '/webinars', icon: Calendar },
      { title: 'Tutorials', href: '/tutorials', icon: BookOpen },
      { title: 'API Documentation', href: '/api-docs', icon: Code },
      { title: 'Training', href: '/training', icon: BookOpen },
      { title: 'FAQ', href: '/faq', icon: MessageSquare }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About Us', href: '/about', icon: Building },
      { title: 'Team', href: '/team', icon: Users },
      { title: 'Careers', href: '/careers', icon: Users },
      { title: 'Partners', href: '/partners', icon: Globe },
      { title: 'News', href: '/news', icon: FileText },
      { title: 'Contact', href: '/contact', icon: MessageSquare },
      { title: 'Privacy Policy', href: '/privacy', icon: Lock },
      { title: 'Terms of Service', href: '/terms', icon: FileText }
    ]
  },
  {
    title: 'Support',
    links: [
      { title: 'Help Center', href: '/help', icon: MessageSquare },
      { title: 'Documentation', href: '/docs', icon: FileText },
      { title: 'API Reference', href: '/api', icon: Code },
      { title: 'Status Page', href: '/status', icon: BarChart3 },
      { title: 'Community', href: '/community', icon: Users },
      { title: 'Training', href: '/training', icon: BookOpen },
      { title: 'Free Consultation', href: '/consultation', icon: Calendar },
      { title: 'Get Quote', href: '/quote', icon: FileText }
    ]
  }
];

const microSaasCategories = [
  { title: 'Marketing Tools', icon: Target, count: 15 },
  { title: 'Productivity', icon: Settings, count: 12 },
  { title: 'Analytics', icon: BarChart3, count: 18 },
  { title: 'Automation', icon: Zap, count: 22 },
  { title: 'Security', icon: Shield, count: 8 },
  { title: 'Finance', icon: DollarSign, count: 10 },
  { title: 'Design', icon: Paintbrush, count: 6 },
  { title: 'Development', icon: Code, count: 14 }
];

const aiServiceCategories = [
  { title: 'Machine Learning', icon: Brain, count: 25 },
  { title: 'Computer Vision', icon: Eye, count: 18 },
  { title: 'Natural Language', icon: MessageSquare, count: 20 },
  { title: 'Predictive Analytics', icon: TrendingUp, count: 15 },
  { title: 'Robotics', icon: Settings, count: 8 },
  { title: 'Quantum AI', icon: Code, count: 5 }
];

const itServiceCategories = [
  { title: 'Cloud Computing', icon: Cloud, count: 30 },
  { title: 'Cybersecurity', icon: Shield, count: 25 },
  { title: 'DevOps', icon: Settings, count: 20 },
  { title: 'Data Management', icon: HardDrive, count: 15 },
  { title: 'Network Security', icon: Lock, count: 18 },
  { title: 'Infrastructure', icon: Building, count: 22 }
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
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of AI services, IT solutions, and innovative micro SaaS platforms. 
              We help businesses scale, automate, and innovate with cutting-edge technology.
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

          {/* Resources */}
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
            </div>
          </div>
        </div>

        {/* Service Categories */}
        <div className="mt-16 pt-8 border-t border-gray-800">
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

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 Zion Tech Group. All rights reserved. | 
              <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
              <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
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
        </div>
      </div>
    </footer>
  );
}