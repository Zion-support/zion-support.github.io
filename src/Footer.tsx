import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
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
import { Link } from 'react-router-dom';
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
<<<<<<< HEAD
=======
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400">
              Leading the future of technology with cutting-edge AI, quantum computing, 
              and neural interface solutions.
>>>>>>> cursor/create-and-deploy-new-content-425b
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-2xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">
              Leading the future of technology with AI, blockchain, and innovative solutions that transform businesses and create new possibilities.
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
<<<<<<< HEAD
=======
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/pages/AdvancedAITransformation2025" className="text-gray-400 hover:text-white">AI Solutions</a></li>
              <li><a href="/pages/QuantumComputingRevolution2025" className="text-gray-400 hover:text-white">Quantum Computing</a></li>
              <li><a href="/pages/NeuralInterfaceRevolution2025" className="text-gray-400 hover:text-white">Neural Interfaces</a></li>
>>>>>>> cursor/create-and-deploy-new-content-425b
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pages/RevolutionaryTechShowcase2026" className="text-gray-400 hover:text-white transition-colors">
                  Revolutionary Tech
                </Link>
              </li>
              <li>
                <Link to="/pages/AIBusinessAutomation2026" className="text-gray-400 hover:text-white transition-colors">
                  AI Automation
                </Link>
              </li>
              <li>
                <Link to="/pages/QuantumNeuralFusion2026" className="text-gray-400 hover:text-white transition-colors">
                  Quantum-Neural
                </Link>
              </li>
              <li>
                <Link to="/pages/ComprehensiveTechInsights2026" className="text-gray-400 hover:text-white transition-colors">
                  Tech Insights
                </Link>
              </li>
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
            </ul>
          </div>

          {/* Services */}
          <div>
<<<<<<< HEAD
=======
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/pages/BlogPost2025" className="text-gray-400 hover:text-white">Blog</a></li>
              <li><a href="/pages/TechnologyInsights2025" className="text-gray-400 hover:text-white">Insights</a></li>
              <li><a href="/pages/RevolutionaryTechTrends2026" className="text-gray-400 hover:text-white">Trends</a></li>
>>>>>>> cursor/create-and-deploy-new-content-425b
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pages/AIBusinessAutomation2026" className="text-gray-400 hover:text-white transition-colors">
                  AI Business Automation
                </Link>
              </li>
              <li>
                <Link to="/pages/RevolutionaryTechShowcase2026" className="text-gray-400 hover:text-white transition-colors">
                  Revolutionary Technology
                </Link>
              </li>
              <li>
                <Link to="/pages/QuantumNeuralFusion2026" className="text-gray-400 hover:text-white transition-colors">
                  Quantum Computing
                </Link>
              </li>
              <li>
                <Link to="/pages/NeuralInterfaceRevolution2026" className="text-gray-400 hover:text-white transition-colors">
                  Neural Interfaces
                </Link>
              </li>
              <li>
                <Link to="/pages/ComprehensiveTechInsights2026" className="text-gray-400 hover:text-white transition-colors">
                  Technology Consulting
                </Link>
              </li>
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
            </ul>
          </div>

          {/* Contact */}
          <div>
<<<<<<< HEAD
=======
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">Email: info@ziontechgroup.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2026 Zion Tech Group. All rights reserved.</p>
cursor/create-and-deploy-new-content-7857
>>>>>>> cursor/create-and-deploy-new-content-425b
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>Email: info@ziontechgroup.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Address: 123 Tech Street<br />Innovation City, IC 12345</p>
            </div>
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold inline-block"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2026 Zion Tech Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
<<<<<<< HEAD
=======
e4ce40ff9b3744a3e3b2e3431e3ef582b02351f7
>>>>>>> cursor/create-and-deploy-new-content-425b
        </div>
      </div>
    </footer>
  );
};

export default Footer;