<<<<<<< HEAD
'use client'
<<<<<<< HEAD
import React, { memo } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users } from 'lucide-react'
import { Mail, Brain, Code, Cloud } from 'lucide-react'
import { MapPin } from 'lucide-react'

const Footer: React.FC = memo(() => {
  const currentYear = new Date().getFullYear()
  const aiServices = [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting' },
    { name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models' },
    { name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots' },
    { name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-services', description: 'Process automation' },
    { name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics' }
  ]
  const itServices = [
    { name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP' },
    { name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines' },
    { name: 'Cybersecurity', url: '/it-services', description: 'Security solutions' },
    { name: 'Managed IT Services', url: '/it-services', description: '24/7 IT support' },
    { name: 'Database Management', url: '/it-services', description: 'Database optimization' },
    { name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure' }
  ]
  const microSaasServices = [
    { name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard' },
    { name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions' },
    { name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation' },
    { name: 'Project Management', url: '/micro-saas', description: 'Team collaboration' },
    { name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation' },
    { name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management' }
  ]
  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Careers', url: '/careers' },
    { name: 'Partners', url: '/partners' },
    { name: 'Support', url: '/support' }
  ]
  const resourcesLinks = [
    { name: 'Pricing', url: '/pricing' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Documentation', url: '/docs' },
    { name: 'API Reference', url: '/api' },
    { name: 'Tutorials', url: '/tutorials' },
    { name: 'Community', url: '/community' }
=======
import React, {memo} from 'react'
import {Link} from 'react-router-do m'
import {Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users} from 'lucide-react'

constFooter: React.FC= memo(() =>{constcurrentYear= new Date().getFullYear()
  
  constaiServices= [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting'},
    {name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models'},
    {name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots'},
    {name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis'},
    {name: 'AI Automation', url: '/ai-services', description: 'Process automation'},
    {name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics'}
  ]
  
  constitServices= [
    {name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP'},
    {name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines'},
    {name: 'Cybersecurity', url: '/it-services', description: 'Security solutions'},
    {name: 'Managed IT Services', url: '/it-services', description: '2 4/7 IT support'},
    {name: 'Database Management', url: '/it-services', description: 'Database optimization'},
    {name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure'}
  ]
  
  constmicroSaasServices= [
    {name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard'},
    {name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions'},
    {name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation'},
    {name: 'Project Management', url: '/micro-saas', description: 'Team collaboration'},
    {name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation'},
    {name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management'}
  ]
  
  constcompanyLinks= [
    {name: 'About Us', url: '/about'},
    {name: 'Case Studies', url: '/case-studies'},
    {name: 'Blog', url: '/blog'},
    {name: 'Careers', url: '/careers'},
    {name: 'Partners', url: '/partners'},
    {name: 'Support', url: '/support'}
  ]
  
  constresourcesLinks= [
    {name: 'Pricing', url: '/pricing'},
    {name: 'FAQ', url: '/faq'},
    {name: 'Documentation', url: '/do cs'},
    {name: 'API Reference', url: '/api'},
    {name: 'Tutorials', url: '/tutorials'},
    {name: 'Community', url: '/community'}
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
  ]
=======
"use client";
import React from "react";

import Link from "next/link";
import { ArrowRight, Brain, Mail, MapPin, Phone } from "lucide-react";

const Footer: React.FC = () => {
  const aiServices = [
    { name: "AI Chatbot Builder", href: "/ai-chatbot-builder" },
    { name: "AI Content Generator", href: "/ai-content-generator" },
    { name: "AI Data Visualizer", href: "/ai-data-visualizer" },
    { name: "AI Document Intelligence", href: "/ai-document-intelligence" },
    { name: "AI Financial Forecasting", href: "/ai-financial-forecasting" },
    { name: "AI Fraud Detection", href: "/ai-fraud-detection" },
  ];

  const itServices = [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "API Development", href: "/api-development" },
    { name: "Cloud Solutions", href: "/cloud-solutions" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "Data Analytics", href: "/data-analytics" },
  ];

  const microSaas = [
    { name: "Analytics Dashboard", href: "/analytics-dashboard" },
    { name: "Expense Tracker Pro", href: "/expense-tracker-pro" },
    { name: "Inventory Manager", href: "/inventory-manager" },
    { name: "Task Manager Pro", href: "/task-manager-pro" },
    { name: "Social Media Scheduler", href: "/social-media-scheduler" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Partnerships", href: "/partnerships" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Tutorials", href: "/tutorials" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Status Page", href: "/status" },
  ];

  const quickLinks = [
    { name: "Free Consultation", href: "/consultation" },
    { name: "Request Demo", href: "/demo" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ];

>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
  return (
<<<<<<< HEAD
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">{/* Company Info */}</div>
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Zion Tech Group</span>
            </div>
            <p className="text-gray-400 mb-4">Advanced AI and IT solutions for modern businesses. We help you</p>
              leverage cutting-edge technology to drive growth and innovation.
            </p>
<<<<<<< HEAD
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span></span>364 E Main St STE 1008<br />Middletown DE 19709</span>
              </div>
            </div>
          </div>
          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center"></h3>
              <Brain className="w-5 h-5 mr-2" />
              AI Services
            </h3>
=======
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">AI Services</h3>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
            <ul className="space-y-2">
              {aiServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center"></h3>
              <Cloud className="w-5 h-5 mr-2" />
              IT Services
            </h3>
=======

          {/* IT Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">IT Services</h3>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
            <ul className="space-y-2">
              {itServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          {/* Micro SAAS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center"></h3>
              <Code className="w-5 h-5 mr-2" />
              Micro SAAS
            </h3>
=======

          {/* Micro SaaS */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Micro SaaS</h3>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
            <ul className="space-y-2">
              {microSaas.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
        </div>
        {/* Additional Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 pt-8 border-t border-gray-700">
=======

          {/* Company & Support */}
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
<<<<<<< HEAD
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
=======

            <h3 className="text-lg font-semibold mb-4">Support</h3>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
<<<<<<< HEAD
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consultation" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Free Consultation
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-300 hover:text-white text-sm transition-colors">
                  Technical Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                Twitter
              </a>
              <a href="https://github.com/ziontechgroup" className="text-gray-300 hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </a>
            </div>
=======
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">contact@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 Zion Tech Group. All rights reserved.</div>div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              Cookie Policy
            </Link>
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
          </div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD
  )
})
Footer.displayName = 'Footer'
export default Footer
=======
  );
};

export default Footer;
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
=======
  <footerclassName="bg-slate-900text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-12"><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-5gap-8">{/* CompanyInfo */}
        <divclassName="lg:col-span-2space-y-4"><divclassName="flexitems-centerspace-x-2"><divclassName="w-8 h-8 bg-gradient-to-r from-blue-500to-purple-600rounded-lg flexitems-centerjustify-center"><BrainclassName="w-5h-5text-white" /></di><spanclassName="text-xlfont-bold">ZionTechGroup</spa></di><spanclassName="text-gray-300text-sm"></className="text-gray-300text-sm">Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology.
          </p><divclassName="space-y-2"><divclassName="flex items-center text-smtext-gray-300"><PhoneclassName="w-4h-4mr-2" /><spa n>+1 (302)464-0950</spa></di><divclassName="flex items-center text-smtext-gray-300"><MailclassName="w-4h-4mr-2" /><spa n>kleber@ziontechgroup.com</spa></di><divclassName="flex items-start text-smtext-gray-300"><MapPinclassName="w-4 h-4mr-2mt-0.5" /><spa n>364E Main St STE1008<br />MiddletownDE19709</spa></di></di></di>{/* AIServices */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><BrainclassName="w-5h-5mr-2" />AI Services
          </h><ulclassName="space-y-2">{aiServices.map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/ai-services"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All AI Services →
              </Lin></l></u></di>{/* ITServices */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><CloudclassName="w-5h-5mr-2" />IT Services
          </h><ulclassName="space-y-2">{itServices.map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/it-services"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All IT Services →
              </Lin></l></u></di>{/* MicroSAAS */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><CodeclassName="w-5h-5mr-2" />Micro SAAS
          </h><ulclassName="space-y-2">{microSaasServices.slice(0 6).map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/micro-saas"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All Micro SAAS →
              </Lin></l></u></di></di>{/* Additional LinksSection */}
      <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12pt-8 border-tborder-gray-700"><di v><h3className="text-lgfont-semiboldmb-4">Company</h><ulclassName="space-y-2">{companyLinks.map((linkindex) => (
             <likey={index}><Linkto={link.url}
                   className="text-gray-300 hover:text-whitetext-smtransition-colors"
                  >{link.name}
                </Lin></l>))}
          </u></di><di v><h3className="text-lgfont-semiboldmb-4">Resources</h><ulclassName="space-y-2">{resourcesLinks.map((linkindex) => (
             <likey={index}><Linkto={link.url}
                   className="text-gray-300 hover:text-whitetext-smtransition-colors"
                  >{link.name}
                </Lin></l>))}
          </u></di><di v><h3className="text-lgfont-semiboldmb-4">QuickLinks</h><ulclassName="space-y-2"><l i><Linkto="/consultation"className="text-gray-300 hover:text-whitetext-smtransition-colors">Free Consultation
              </Lin></l><l i><Linkto="/demo"className="text-gray-300 hover:text-whitetext-smtransition-colors">Request Demo
              </Lin></l><l i><Linkto="/contact"className="text-gray-300 hover:text-whitetext-smtransition-colors">Contact Sales
              </Lin></l><l i><Linkto="/support"className="text-gray-300 hover:text-whitetext-smtransition-colors">Technical Support
              </Lin></l></u></di><di v><h3className="text-lgfont-semiboldmb-4">FollowUs</h><divclassName="flexspace-x-4"><ahref="https://linkedin.com/$1/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">LinkedIn
            </a><ahref="https://twitter.com/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">Twitter
            </a><ahref="https://github.com/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">GitHub
            </a></di></di></di>{/* BottomSection */}
      <divclassName="border-tborder-gray-700mt-8pt-8"><divclassName="flex flex-colmd:flex-rowjustify-betweenitems-center"><divclassName="text-gray-400text-smmb-4md:mb-0">© {currentYear} Zion Tech Group. All rights reserved.
          </di><divclassName="flexspace-x-6"><ahref="/privacy"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Privacy Policy
            </a><ahref="/terms"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Terms of Service
            </a><ahref="/cookies"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Cookie Policy
            </a></di></di></di></di></foote>
  )
})

Footer.displayName= 'Footer'
export default Footer
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
