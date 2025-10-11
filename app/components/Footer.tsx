'use client';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight, Shield, BarChart, Database, Globe, Smartphone, Settings, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Target, TrendingUp, CheckCircle, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const Footer: React.FC = () => {
=======
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users, ArrowRight } from 'lucide-react';

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear();
  
  const aiServices = [
    { name: 'AI Chatbots & NLP', url: '/ai-chatbot-builder', description: 'Conversational AI' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Business intelligence' },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image analysis' },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition' },
    { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Process automation' },
    { name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI' },
    { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI' }
  ]

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', description: 'Automation pipelines' },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Security solutions' },
    { name: 'Web Development', url: '/web-development', description: 'Modern web apps' },
    { name: 'Mobile Development', url: '/mobile-development', description: 'iOS & Android' },
    { name: 'API Development', url: '/api-development', description: 'API solutions' },
    { name: 'IT Support', url: '/it-support', description: '24/7 technical support' },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', description: 'Business intelligence' }
  ]

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' },
    { name: 'Status', url: '/status' }
  ]

>>>>>>> cursor/website-audit-and-update-with-deployment-635f
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of AI and IT solutions, empowering businesses with cutting-edge technology and innovative digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a to="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
              <a to="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">AI Services</h3>
            <ul className="space-y-2">
              {aiServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
<<<<<<< HEAD
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  AI Services
                </Link>
              </li>
              <li>
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  IT Services
                </Link>
              </li>
              <li>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Cloud Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Data Analytics
                </Link>
              </li>
              <li>
                <Link to="/web-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Mobile Development
=======
                <Link to="/ai-services" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-sm font-medium">
                  View All AI Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* IT Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">IT Services</h3>
            <ul className="space-y-2">
              {itServices.map((service) => (
                <li key={service.name}>
                  <Link to={service.url} className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/it-services" className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm font-medium">
                  View All IT Services →
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li>
                <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                  Sitemap
                </Link>
              </li>
=======
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.url} className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-300 text-sm hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300 text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <Link 
<<<<<<< HEAD
              to="/consultation" 
=======
              to="/contact" 
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
}

export default Footer
=======
});

Footer.displayName = 'Footer';

export default Footer;
>>>>>>> cursor/website-audit-and-update-with-deployment-635f
