<<<<<<< HEAD
import React from 'react',;
import Link from 'next/link',;
import { motion } from 'framer-motion',;
import { ;
  Phone, Mail, MapPin, Globe, ArrowRight, Star, ;
  Rocket, Brain, Atom, Building, Briefcase, Microscope,;
  Twitter, Facebook, Linkedin, Instagram, Youtube,;
  Github, Zap, Sparkles, Shield, Cpu, Database;
} from 'lucide-react',;
;
const contactInfo = {;
  mobile:'+1 302 464 0950',;
  email:'kleber@ziontechgroup.com',;
  address:'364 E Main St STE 1008 Middletown DE 19709',;
  website:'https://ziontechgroup.com';
},;
;
const serviceCategories = [;
  {;
    title:'AI & Machine Learning',;
    icon:Brain,;
    services:[;
      { name:'AI Consciousness Evolution', href:'/ai-consciousness-evolution-2029' },;
      { name:'Quantum Neural Networks', href:'/quantum-neural-network-platform' },;
      { name:'Autonomous Business Operations', href:'/autonomous-business-operations-platform' },;
      { name:'AI-Powered IT Asset Management', href:'/ai-powered-it-asset-management' }
    ];
  },;
  {;
    title:'🧠 AI & Technology',;
    services:[;
      { name:'AI Services', href:'/ai-services' },;
      { name:'Machine Learning', href:'/machine-learning' },;
      { name:'Natural Language Processing', href:'/nlp-services' },;
      { name:'Computer Vision', href:'/computer-vision' }
    ];
  },;
  {;
    title:'⚛️ Quantum & Emerging Tech',;
    services:[;
      { name:'Quantum Computing', href:'/quantum-computing' },;
      { name:'Blockchain Solutions', href:'/blockchain-solutions' },;
      { name:'IoT Platforms', href:'/iot-platforms' },;
      { name:'Space Technology', href:'/space-tech' }
    ];
  },;
  {;
    title:'🏙️ Enterprise Solutions',;
    services:[;
      { name:'Enterprise IT', href:'/enterprise-it' },;
      { name:'Cloud Solutions', href:'/cloud-solutions' },;
      { name:'Cybersecurity', href:'/cybersecurity' },;
      { name:'DevOps Automation', href:'/devops-automation' }
    ];
  }
],;
;
const quickLinks = [;
  { name:'Home', href:'/', icon:Home },;
  { name:'Services', href:'/services', icon:Briefcase },;
  { name:'Solutions', href:'/solutions', icon:Rocket },;
  { name:'About', href:'/about', icon:Users },;
  { name:'Blog', href:'/blog', icon:BookOpen },;
  { name:'Contact', href:'/contact', icon:MessageCircle },;
  { name:'Support', href:'/support', icon:MessageCircle },;
  { name:'Privacy', href:'/privacy', icon:Shield }
],;
;
const socialLinks = [;
  { name:'LinkedIn', href:'https://linkedin.com/company/ziontechgroup', icon:Linkedin, color:'hover:text-blue-400' },;
  { name:'Twitter', href:'https://twitter.com/ziontechgroup', icon:Twitter, color:'hover:text-sky-400' },;
  { name:'GitHub', href:'https://github.com/Zion-Holdings', icon:Github, color:'hover:text-gray-400' },;
  { name:'YouTube', href:'https://youtube.com/@ziontechgroup', icon:Youtube, color:'hover:text-red-500' }
],;
;
const footerSections = [;
  {;
    title:'Company',;
    links:[;
      { name:'About Us', href:'/about' },;
      { name:'Our Mission', href:'/mission' },;
      { name:'Leadership Team', href:'/team' },;
      { name:'Careers', href:'/careers' },;
      { name:'Press & Media', href:'/press' },;
      { name:'Partnerships', href:'/partnerships' }
    ];
  },;
  {;
    title:'Solutions',;
    links:[;
      { name:'AI Services', href:'/ai-services' },;
      { name:'Quantum Technology', href:'/quantum-technology' },;
      { name:'IT Infrastructure', href:'/it-infrastructure' },;
      { name:'Cybersecurity', href:'/cybersecurity' },;
      { name:'Cloud Solutions', href:'/cloud-solutions' },;
      { name:'Blockchain', href:'/blockchain-solutions' }
    ];
  },;
  {;
    title:'Resources',;
    links:[;
      { name:'Blog', href:'/blog' },;
      { name:'Case Studies', href:'/case-studies' },;
      { name:'White Papers', href:'/white-papers' },;
      { name:'Documentation', href:'/docs' },;
      { name:'API Reference', href:'/api' },;
      { name:'Support Center', href:'/support' }
    ];
  },;
  {;
    title:'Legal',;
    links:[;
      { name:'Privacy Policy', href:'/privacy' },;
      { name:'Terms of Service', href:'/terms' },;
      { name:'Cookie Policy', href:'/cookies' },;
      { name:'Data Protection', href:'/data-protection' },;
      { name:'Accessibility', href:'/accessibility' },;
      { name:'Compliance', href:'/compliance' }
    ];
  }
],;
;
const UltraFuturisticFooter2029 = () => {;
  return (;
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">;
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">;
          {/* Company Info */}
          <div className="lg:col-span-1">;
            <div className="flex items-center space-x-3 mb-6">;
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">;
                <Rocket className="w-6 h-6 text-white" />;
              </div>;
              <div>;
                <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>;
                <p className="text-sm text-gray-400">Innovating the Future</p>;
              </div>;
            </div>;
            ;
            <p className="text-gray-400 mb-6 leading-relaxed">;
              Leading the revolution in AI, quantum computing, and autonomous technology solutions. ;
              Transforming businesses with cutting-edge innovation.;
            </p>;
;
            {/* Contact Information */}
            <div className="space-y-3 mb-6">;
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">;
                <Phone className="w-4 h-4" />;
                <a href={`tel:${contactInfo.mobile}`} className="text-sm">;
                  {contactInfo.mobile}
                </a>;
              </div>;
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors">;
                <Mail className="w-4 h-4" />;
                <a href={`mailto:${contactInfo.email}`} className="text-sm">;
                  {contactInfo.email}
                </a>;
              </div>;
              <div className="flex items-center space-x-3 text-gray-400">;
                <MapPin className="w-4 h-4" />;
                <span className="text-sm">{contactInfo.address}</span>;
              </div>;
            </div>;
;
            {/* Social Links */}
            <div className="flex space-x-4">;
              {socialLinks.map((social) => (;
                <a;
                  key={social.name}
                  href={social.href}
                  target="_blank";
                  rel="noopener noreferrer";
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50`}
                >;
                  <social.icon className="w-5 h-5" />;
                </a>;
=======
import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, ArrowRight, Star,
  Rocket, Brain, Atom, Building, Briefcase, Microscope,
  Twitter, Facebook, Linkedin, Instagram, Youtube,
  Github, Zap, Sparkles, Shield, Cpu, Database
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const _serviceCategories = [
  {_title: 'AI & Machine Learning', _icon: Brain, _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-2029'},
      {_name: 'Quantum Neural Networks', _href: '/quantum-neural-network-platform'},
      {_name: 'Autonomous Business Operations', _href: '/autonomous-business-operations-platform'},
      {_name: 'AI-Powered IT Asset Management', _href: '/ai-powered-it-asset-management'}
    ]
  },
  {_title: '🧠 AI & Technology', _services: [
      { name: 'AI Services', _href: '/ai-services'},
      {_name: 'Machine Learning', _href: '/machine-learning'},
      {_name: 'Natural Language Processing', _href: '/nlp-services'},
      {_name: 'Computer Vision', _href: '/computer-vision'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _services: [
      { name: 'Quantum Computing', _href: '/quantum-computing'},
      {_name: 'Blockchain Solutions', _href: '/blockchain-solutions'},
      {_name: 'IoT Platforms', _href: '/iot-platforms'},
      {_name: 'Space Technology', _href: '/space-tech'}
    ]
  },
  {_title: '🏙️ Enterprise Solutions', _services: [
      { name: 'Enterprise IT', _href: '/enterprise-it'},
      {_name: 'Cloud Solutions', _href: '/cloud-solutions'},
      {_name: 'Cybersecurity', _href: '/cybersecurity'},
      {_name: 'DevOps Automation', _href: '/devops-automation'}
    ]
  }
],

const quickLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Rocket },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Privacy', href: '/privacy', icon: Shield }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-sky-400' },
  { name: 'GitHub', href: 'https://github.com/Zion-Holdings', icon: Github, color: 'hover:text-gray-400' },
  { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube, color: 'hover:text-red-500' }
],
const _footerSections = [
  {_title: 'Company', _links: [
      { name: 'About Us', _href: '/about'},
      {_name: 'Our Mission', _href: '/mission'},
      {_name: 'Leadership Team', _href: '/team'},
      {_name: 'Careers', _href: '/careers'},
      {_name: 'Press & Media', _href: '/press'},
      {_name: 'Partnerships', _href: '/partnerships'}
    ]
  },
  {_title: 'Solutions', _links: [
      { name: 'AI Services', _href: '/ai-services'},
      {_name: 'Quantum Technology', _href: '/quantum-technology'},
      {_name: 'IT Infrastructure', _href: '/it-infrastructure'},
      {_name: 'Cybersecurity', _href: '/cybersecurity'},
      {_name: 'Cloud Solutions', _href: '/cloud-solutions'},
      {_name: 'Blockchain', _href: '/blockchain-solutions'}
    ]
  },
  {_title: 'Resources', _links: [
      { name: 'Blog', _href: '/blog'},
      {_name: 'Case Studies', _href: '/case-studies'},
      {_name: 'White Papers', _href: '/white-papers'},
      {_name: 'Documentation', _href: '/docs'},
      {_name: 'API Reference', _href: '/api'},
      {_name: 'Support Center', _href: '/support'}
    ]
  },
  {_title: 'Legal', _links: [
      { name: 'Privacy Policy', _href: '/privacy'},
      {_name: 'Terms of Service', _href: '/terms'},
      {_name: 'Cookie Policy', _href: '/cookies'},
      {_name: 'Data Protection', _href: '/data-protection'},
      {_name: 'Accessibility', _href: '/accessibility'},
      {_name: 'Compliance', _href: '/compliance'}
    ]
  }
],

const UltraFuturisticFooter2029 = () => {
  return (
    <footer className=&quot;bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50&quot;>
      {/* Main Footer Content */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
        <div className=&quot;grid grid-cols-1 lg:grid-cols-4 gap-12&quot;>
          {/* Company Info */}
          <div className=&quot;lg:col-span-1&quot;>
            <div className=&quot;flex items-center space-x-3 mb-6&quot;>
              <div className=&quot;w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center&quot;>
                <Rocket className=&quot;w-6 h-6 text-white&quot; />              </div>
              <div>
                <h3 className=&quot;text-xl font-bold text-white&quot;>Zion Tech Group</h3>
                <p className=&quot;text-sm text-gray-400&quot;>Innovating the Future</p>
              </div>
            </div>
            
            <p className=&quot;text-gray-400 mb-6 leading-relaxed&quot;>
              Leading the revolution in AI, quantum computing, and autonomous technology solutions. 
              Transforming businesses with cutting-edge innovation.
            </p>

            {/* Contact Information */}
            <div className=&quot;space-y-3 mb-6&quot;>
              <div className=&quot;flex items-center space-x-3 text-gray-400 hover:text-white transition-colors&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <a href={`tel:${contactInfo.mobile}`} className=&quot;text-sm&quot;>
                  {contactInfo.mobile}
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-gray-400 hover:text-white transition-colors&quot;>
                <Mail className=&quot;w-4 h-4&quot; />
                <a href={`mailto:${contactInfo.email}`} className=&quot;text-sm&quot;>
                  {contactInfo.email}
                </a>
              </div>
              <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                <MapPin className=&quot;w-4 h-4&quot; />
                <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className=&quot;flex space-x-4&quot;>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target=&quot;_blank&quot;
                  rel=&quot;noopener noreferrer&quot;
                  className={`p-2 bg-slate-800/50 rounded-lg text-gray-400 ${social.color} transition-all duration-200 hover:bg-slate-700/50`}                >
                  <social.icon className=&quot;w-5 h-5&quot; />
                </a>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
              ))}
            </div>;
          </div>;
;
          {/* Service Categories */}
<<<<<<< HEAD
          <div className="lg:col-span-1">;
            <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>;
            <div className="space-y-4">;
              {serviceCategories.map((category, index) => (;
                <div key={index}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{category.title}</h5>;
                  <ul className="space-y-2">;
                    {category.services.map((service) => (;
                      <li key={service.name}>;
                        <Link;
                          href={service.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group";
                        >;
                          <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />;
                          <span>{service.name}</span>;
                        </Link>;
                      </li>;
=======
          <div className=&quot;lg:col-span-1&quot;>
            <h4 className=&quot;text-lg font-semibold text-white mb-6&quot;>Our Services</h4>
            <div className=&quot;space-y-4&quot;>
              {serviceCategories.map((category, index) => (
                <div key={index}>
                  <h5 className=&quot;text-sm font-medium text-gray-300 mb-3&quot;>{category.title}</h5>
                  <ul className=&quot;space-y-2&quot;>
                    {category.services.map((service) => (
                      <li key={service.name}>
                        <Link
                          href={service.href}
                          className=&quot;text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-2 group&quot;
                        >
                          <ArrowRight className=&quot;w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200&quot; />
                          <span>{service.name}</span>
                        </a>                      </li>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    ))}
                  </ul>;
                </div>;
              ))}
            </div>;
          </div>;
;
          {/* Quick Links */}
<<<<<<< HEAD
          <div className="lg:col-span-1">;
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>;
            <div className="grid grid-cols-2 gap-2">;
              {quickLinks.map((link) => (;
                <Link;
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50";
                >;
                  <link.icon className="w-4 h-4" />;
                  <span>{link.name}</span>;
                </Link>;
              ))}
            </div>;
          </div>;
;
          {/* Footer Sections */}
          <div className="lg:col-span-1">;
            <h4 className="text-lg font-semibold text-white mb-6">Company</h4>;
            <div className="space-y-4">;
              {footerSections.map((section) => (;
                <div key={section.title}>;
                  <h5 className="text-sm font-medium text-gray-300 mb-3">{section.title}</h5>;
                  <ul className="space-y-2">;
                    {section.links.map((link) => (;
                      <li key={link.name}>;
                        <Link;
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-white transition-colors duration-200";
                        >;
                          {link.name}
                        </Link>;
                      </li>;
=======
          <div className=&quot;lg:col-span-1&quot;>
            <h4 className=&quot;text-lg font-semibold text-white mb-6&quot;>Quick Links</h4>
            <div className=&quot;grid grid-cols-2 gap-2&quot;>
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className=&quot;flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-lg hover:bg-slate-800/50&quot;
                >
                  <link.icon className=&quot;w-4 h-4&quot; />
                  <span>{link.name}</span>
                </a>              ))}
            </div>
          </div>

          {/* Footer Sections */}
          <div className=&quot;lg:col-span-1&quot;>
            <h4 className=&quot;text-lg font-semibold text-white mb-6&quot;>Company</h4>
            <div className=&quot;space-y-4&quot;>
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h5 className=&quot;text-sm font-medium text-gray-300 mb-3&quot;>{section.title}</h5>
                  <ul className=&quot;space-y-2&quot;>
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link
                          href={link.href}
                          className=&quot;text-sm text-gray-400 hover:text-white transition-colors duration-200&quot;
                        >
                          {link.name}
                        </a>                      </li>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    ))}
                  </ul>;
                </div>;
              ))}
            </div>;
          </div>;
        </div>;
      </div>;
;
      {/* Bottom Footer */}
<<<<<<< HEAD
      <div className="border-t border-slate-700/50">;
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">;
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">;
            <div className="text-sm text-gray-400">;
              © 2025 Zion Tech Group. All rights reserved.;
            </div>;
            ;
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <Link href="/privacy" className="hover:text-white transition-colors">;
                Privacy Policy;
              </Link>;
              <Link href="/terms" className="hover:text-white transition-colors">;
                Terms of Service;
              </Link>;
              <Link href="/cookies" className="hover:text-white transition-colors">;
                Cookie Policy;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
;
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50">;
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h3 className="text-2xl font-bold text-white mb-4">;
              Stay Updated with Innovation;
            </h3>;
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">;
              Get the latest insights on AI, quantum computing, and autonomous technology. ;
              Join our newsletter for exclusive updates and industry insights.;
            </p>;
            ;
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email";
                placeholder="Enter your email";
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent";
              />;
              <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200">;
                Subscribe;
              </button>;
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;
  );
},;
;
=======
      <div className=&quot;border-t border-slate-700/50&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8&quot;>
          <div className=&quot;flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0&quot;>
            <div className=&quot;text-sm text-gray-400&quot;>              © 2025 Zion Tech Group. All rights reserved.
            </div>
            
            <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
              <Link href=&quot;/privacy&quot; className=&quot;hover:text-white transition-colors&quot;>
                Privacy Policy
              </a>
              <Link href=&quot;/terms&quot; className=&quot;hover:text-white transition-colors&quot;>
                Terms of Service
              </a>
              <Link href=&quot;/cookies&quot; className=&quot;hover:text-white transition-colors&quot;>
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className=&quot;bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-t border-slate-700/50&quot;>
        <div className=&quot;max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12&quot;>
          <div className=&quot;text-center&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>              Stay Updated with Innovation
            </h3>
            <p className=&quot;text-gray-400 mb-8 max-w-2xl mx-auto&quot;>
              Get the latest insights on AI, quantum computing, and autonomous technology. 
              Join our newsletter for exclusive updates and industry insights.
            </p>
            
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">              <input
                type=&quot;email&quot;
                placeholder=&quot;Enter your email&quot;
                className=&quot;flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent&quot;
              />
              <button className=&quot;px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200&quot;>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default UltraFuturisticFooter2029,