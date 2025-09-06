import React from 'react',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Phone, Mail, MapPin, Globe, Zap, Brain, Atom,
  Rocket, Shield, Cpu, Target, Microscope, Users,
  Facebook, Twitter, Linkedin, Instagram, Youtube,
  Github, ArrowRight, Heart, Star, Award, CheckCircle
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const _serviceCategories = [
  {_title: '🚀 AI & Consciousness', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotion-intelligence-platform'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway'},
      {_name: 'Quantum Learning Accelerator', _href: '/quantum-learning-accelerator'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure'}
    ]
  },
  {_title: '🧬 Biotech & DNA Computing', _services: [
      { name: 'DNA Computing Platform', _href: '/biotech-dna-computing-platform'},
      {_name: 'Personalized Nutrition', _href: '/biotech-personalized-nutrition'},
      {_name: 'Predictive Health Analytics', _href: '/ai-predictive-health-analytics'},
      {_name: 'Research Automation', _href: '/advanced-research-automation'}
    ]
  },
  {_title: '🏙️ Enterprise IT Solutions', _services: [
      { name: 'Autonomous DevOps', _href: '/autonomous-devops-platform'},
      {_name: 'Autonomous IT Operations', _href: '/autonomous-it-operations-center'},
      {_name: 'AI Enterprise Security', _href: '/ai-powered-enterprise-security'},
      {_name: 'Intelligent Data Governance', _href: '/intelligent-data-governance'}
    ]
  },
  {_title: '🌌 Space & Metaverse Tech', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform'},
      {_name: 'Metaverse Digital Reality', _href: '/metaverse-digital-reality-platform'},
      {_name: 'Quantum Research Platform', _href: '/quantum-research-platform'},
      {_name: 'AI Research Assistant', _href: '/ai-research-assistant'}
    ]
  },
  {_title: '🎯 2030 Innovative Micro SAAS', _services: [
      { name: 'AI Business Intelligence Suite 2030', _href: '/ai-business-intelligence-suite-2030'},
      {_name: 'AI Customer Experience Platform 2030', _href: '/ai-customer-experience-platform-2030'},
      {_name: 'AI Marketing Automation Suite 2030', _href: '/ai-marketing-automation-2030'},
      {_name: 'AI HR Management Suite 2030', _href: '/ai-hr-management-suite-2030'}
    ]
  }
],

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' }
],

const companyInfo = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'Press', href: '/press' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
],

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube },
  { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github }
],

const certifications = [
  'ISO 27001 CertifiedSOC 2 Type II CompliantGDPR CompliantHIPAA CompliantPCI DSS Level 1FedRAMP Authorized'
],

export default function UltraFuturisticFooter2030() {
  return (
    <footer className=&quot;bg-gradient-to-br from-black via-purple-900/20 to-black text-white relative overflow-hidden&quot;>      {/* Animated Background */}
      <div className=&quot;absolute inset-0&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5&quot;></div>
        <div className=&quot;absolute top-0 left-0 w-full h-full&quot;>
          <div className=&quot;absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-pulse&quot;></div>
          <div className=&quot;absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping&quot;></div>
          <div className=&quot;absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-bounce&quot;></div>
          <div className=&quot;absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-pulse&quot;></div>
        </div>
      </div>

      <div className=&quot;relative z-10&quot;>
        {/* Main Footer Content */}
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16&quot;>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {/* Company Info */}
            <div className=&quot;space-y-6&quot;>
              <div className=&quot;flex items-center space-x-3&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center&quot;>
                  <Zap className=&quot;w-6 h-6 text-white&quot; />                </div>
                <div>
                  <h3 className=&quot;text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </h3>
                  <p className=&quot;text-sm text-gray-400&quot;>2030 Future Technology</p>
                </div>
              </div>
              
              <p className=&quot;text-gray-300 text-sm leading-relaxed&quot;>
                Pioneering the future with cutting-edge AI, quantum computing, and emerging technologies. 
                Transforming businesses through innovative solutions and intelligent automation.
              </p>

              {/* Contact Info */}
              <div className=&quot;space-y-3&quot;>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Phone className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.email}
                  </a>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <MapPin className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>{contactInfo.address}</span>
                </div>
                <div className=&quot;flex items-center space-x-3 text-sm text-gray-300&quot;>
                  <Globe className=&quot;w-4 h-4 text-purple-400&quot; />
                  <a href={contactInfo.website} className=&quot;hover:text-purple-400 transition-colors&quot;>
                    {contactInfo.website.replace('https://', '')}                  </a>
                </div>
              </div>
            </div>

            {/* Service Categories */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Rocket className=&quot;w-5 h-5 text-purple-400&quot; />
                <span>Our Services</span>
              </h4>
              <div className=&quot;grid grid-cols-1 gap-4&quot;>
                {serviceCategories.slice(0, 3).map((category, index) => (
                  <div key={index} className=&quot;space-y-2&quot;>
                    <h5 className=&quot;text-sm font-medium text-purple-300&quot;>{category.title}</h5>
                    <div className=&quot;space-y-1&quot;>
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.href}
                          className=&quot;block text-xs text-gray-400 hover:text-purple-300 transition-colors&quot;
                        >
                          {service.name}
                        </a>                      ))}
                    </div>
                  </div>
                ))}
              </div>;
            </div>;
;
            {/* Quick Links */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Target className=&quot;w-5 h-5 text-cyan-400&quot; />
                <span>Quick Links</span>
              </h4>
              <div className=&quot;space-y-2&quot;>
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className=&quot;block text-sm text-gray-400 hover:text-cyan-300 transition-colors flex items-center space-x-2 group&quot;
                  >
                    <ArrowRight className=&quot;w-3 h-3 group-hover:translate-x-1 transition-transform&quot; />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>

              <div className=&quot;space-y-2&quot;>
                <h5 className=&quot;text-sm font-medium text-cyan-300&quot;>Company</h5>
                {companyInfo.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className=&quot;block text-xs text-gray-400 hover:text-cyan-300 transition-colors&quot;
                  >
                    {link.name}
                  </a>                ))}
              </div>
            </div>

            {/* Social & Certifications */}
            <div className=&quot;space-y-6&quot;>
              <h4 className=&quot;text-lg font-semibold text-white flex items-center space-x-2&quot;>
                <Users className=&quot;w-5 h-5 text-green-400&quot; />
                <span>Connect & Trust</span>
              </h4>
              
              {/* Social Links */}
              <div className=&quot;space-y-3&quot;>
                <h5 className=&quot;text-sm font-medium text-green-300&quot;>Follow Us</h5>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target=&quot;_blank&quot;
                      rel=&quot;noopener noreferrer&quot;
                      className=&quot;w-10 h-10 bg-gray-800/50 hover:bg-purple-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-purple-400 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-400/40&quot;                    >
                      <social.icon className=&quot;w-5 h-5&quot; />
                    </a>
                  ))}
                </div>;
              </div>;
;
              {/* Certifications */}
              <div className=&quot;space-y-3&quot;>
                <h5 className=&quot;text-sm font-medium text-green-300 flex items-center space-x-2&quot;>
                  <Award className=&quot;w-4 h-4&quot; />
                  <span>Certifications</span>
                </h5>
                <div className=&quot;grid grid-cols-1 gap-2&quot;>
                  {certifications.map((cert, index) => (
                    <div key={index} className=&quot;flex items-center space-x-2 text-xs text-gray-400&quot;>
                      <CheckCircle className=&quot;w-3 h-3 text-green-400&quot; />
                      <span>{cert}</span>                    </div>
                  ))}
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
;
        {/* Bottom Bar */}
        <div className="border-t border-purple-500/20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>&copy, 2024 Zion Tech Group. All rights reserved.</span>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms of Service</Link>
        <div className=&quot;border-t border-purple-500/20&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6&quot;>
            <div className=&quot;flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0&quot;>
              <div className=&quot;flex items-center space-x-6 text-sm text-gray-400&quot;>
                <span>&copy; 2024 Zion Tech Group. All rights reserved.</span>
                <Link href=&quot;/privacy&quot; className=&quot;hover:text-purple-400 transition-colors&quot;>Privacy Policy</a>
                <Link href=&quot;/terms&quot; className=&quot;hover:text-purple-400 transition-colors&quot;>Terms of Service</a>
              </div>
              
              <div className=&quot;flex items-center space-x-4 text-sm text-gray-400&quot;>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Heart className=&quot;w-4 h-4 text-red-400&quot; />
                  <span>Made with passion for innovation</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Star className=&quot;w-4 h-4 text-yellow-400&quot; />
                  <span>5.0/5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}