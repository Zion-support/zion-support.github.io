import React from 'react';
<<<<<<< HEAD

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading the future of technology with cutting-edge AI, quantum computing, 
              and neural interface solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/pages/AdvancedAITransformation2025" className="text-gray-400 hover:text-white">AI Solutions</a></li>
              <li><a href="/pages/QuantumComputingRevolution2025" className="text-gray-400 hover:text-white">Quantum Computing</a></li>
              <li><a href="/pages/NeuralInterfaceRevolution2025" className="text-gray-400 hover:text-white">Neural Interfaces</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/pages/BlogPost2025" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/pages/TechnologyInsights2025" className="text-gray-400 hover:text-white">Insights</a></li>
              <li><a href="/pages/RevolutionaryTechTrends2026" className="text-gray-400 hover:text-white">Trends</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 Zion Tech Group. All rights reserved.</p>
=======
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook, 
  Instagram,
  ArrowRight,
  Brain,
  Network,
  Cloud,
  Shield,
  Users,
  Building2,
  FileText,
  Rocket,
  Target,
  Atom,
  TrendingUp,
  Workflow,
  MessageCircle,
  DollarSign,
  Briefcase,
  ArrowUp,
  Sparkles,
  Home,
  Truck,
  Factory,
  Heart,
  BookOpen,
  BarChart3,
  Cpu,
  Leaf,
  Satellite,
  HelpCircle
} from 'lucide-react';

const Footer: React.FC = () => {
  const services = {
    'AI Solutions': [
      { name: 'AI-Powered Email Responder', href: '/ai-services#ai-email-responder' },
      { name: 'AI Content Generation', href: '/ai-services#ai-content-generation' },
      { name: 'Computer Vision Solutions', href: '/ai-services#computer-vision' },
      { name: 'Natural Language Processing', href: '/ai-services#nlp' },
      { name: 'Machine Learning Models', href: '/ai-services#machine-learning' },
      { name: 'AI Analytics Platform', href: '/ai-services#ai-analytics' }
    ],
    'IT Services': [
      { name: 'Cloud Migration', href: '/it-services#cloud-migration' },
      { name: 'Cybersecurity Solutions', href: '/it-services#cybersecurity' },
      { name: 'DevOps Automation', href: '/it-services#devops' },
      { name: 'Infrastructure Management', href: '/it-services#infrastructure' },
      { name: 'Data Analytics', href: '/it-services#data-analytics' },
      { name: 'Network Security', href: '/it-services#network-security' }
    ],
    'Micro SAAS': [
      { name: 'CRM Solutions', href: '/micro-saas#crm' },
      { name: 'Project Management', href: '/micro-saas#project-management' },
      { name: 'Email Marketing', href: '/micro-saas#email-marketing' },
      { name: 'AI Content Tools', href: '/micro-saas#ai-content-tools' },
      { name: 'Analytics Dashboard', href: '/micro-saas#analytics-dashboard' },
      { name: 'Automation Tools', href: '/micro-saas#automation-tools' }
    ]
  };

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Tutorials', href: '/tutorials' },
    { name: 'Support', href: '/support' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider delivering innovative AI, IT, and Micro SAAS services 
              to businesses worldwide. Empowering digital transformation and driving innovation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="space-y-4">
              {Object.entries(services).map(([category, links]) => (
                <div key={category}>
                  <h4 className="text-sm font-medium text-blue-400 mb-2">{category}</h4>
                  <ul className="space-y-1">
                    {links.slice(0, 3).map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-white transition-colors"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-blue-400 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
>>>>>>> cursor/create-and-deploy-new-content-abae
        </div>
      </div>
    </footer>
  );
};

export default Footer;