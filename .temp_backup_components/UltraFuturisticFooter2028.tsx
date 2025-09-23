import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  PhoneMailMapPinGlobeRocketBrainAtom
  ShieldUsersBriefcaseBookOpenMessageCircle
  StarTrendingUpTargetLayersCpuDatabase
  CloudLockShieldCheckHeartLeafCar
  GraduationCapScaleBuildingFactoryCamera,
  VideoMusicGamepad2SunMoonWindDroplets,
  Code
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2028 Cutting-Edge Innovations',
    services: [
      { name: 'AI Climate Prediction Platform'href: '/ai-climate-prediction-platform' },
      { name: 'Quantum Cybersecurity Firewall'href: '/quantum-cybersecurity-firewall' },
      { name: 'Autonomous Drone Delivery Network'href: '/autonomous-drone-delivery-network' },
      { name: 'AI Healthcare Diagnosis Platform'href: '/ai-healthcare-diagnosis-platform' }
    ]
  },
  {
    title: '🎯 Practical Micro SAAS 2028',
    services: [
      { name: 'Smart City Infrastructure Management'href: '/smart-city-infrastructure-management' },
      { name: 'IoT Energy Management System'href: '/iot-energy-management-system' },
      { name: 'Digital Twin Manufacturing Platform'href: '/digital-twin-manufacturing-platform' },
      { name: 'Autonomous Manufacturing AI'href: '/autonomous-manufacturing-ai' }
    ]
  },
  {
    title: '⚛️ Quantum & Space Tech 2028',
    services: [
      { name: 'Quantum Financial Trading Platform'href: '/quantum-financial-trading-platform' },
      { name: 'Quantum Machine Learning Platform'href: '/quantum-machine-learning-platform' },
      { name: 'Quantum Internet Security Gateway'href: '/quantum-internet-security-gateway' },
      { name: 'Quantum Internet Protocol'href: '/quantum-internet-protocol' }
    ]
  },
  {
    title: '🤖 AI & Machine Learning',
    services: [
      { name: 'AI Customer Service Automation'href: '/ai-customer-service-automation' },
      { name: 'AI Education Platform'href: '/ai-education-platform' },
      { name: 'AI Content Creation Suite'href: '/ai-content-creation-suite' },
      { name: 'AI Legal Research Platform'href: '/ai-legal-research-platform' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us'href: '/about'icon: Users },
  { name: 'Case Studies'href: '/case-studies'icon: Briefcase },
  { name: 'Blog & Resources'href: '/blog'icon: BookOpen },
  { name: 'Careers'href: '/careers'icon: TrendingUp },
  { name: 'Contact'href: '/contact'icon: MessageCircle },
  { name: 'Support'href: '/support'icon: ShieldCheck }
];

const resourceLinks = [
  { name: 'Documentation'href: '/docs'icon: BookOpen },
  { name: 'API Reference'href: '/api'icon: Cpu },
  { name: 'Developer Tools'href: '/dev-tools'icon: Database },
  { name: 'Mobile Apps'href: '/mobile'icon: Globe },
  { name: 'Cloud Services'href: '/cloud'icon: Cloud },
  { name: 'Security Center'href: '/security'icon: Shield }
];

const socialLinks = [
  { name: 'LinkedIn'href: 'https://linkedin.com/company/ziontechgroup'icon: Users },
  { name: 'Twitter'href: 'https://twitter.com/ziontechgroup'icon: MessageCircle },
  { name: 'YouTube'href: 'https://youtube.com/@ziontechgroup'icon: Video },
  { name: 'GitHub'href: 'https://github.com/ziontechgroup'icon: Code }
];

export default function UltraFuturisticFooter2028() {
  return (
    <footer className="bg-black/95 backdrop-blur-xl border-t border-purple-500/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-75 -z-10"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </h3>
                <p className="text-sm text-purple-300">2028 Future Technology</p>
              </div>
            </div>
            
            <p className="text-purple-200 mb-6 leading-relaxed">
              Leading the future with cutting-edge AIquantum computingand innovative technology solutions. 
              Transforming businesses through intelligent automation and next-generation infrastructure.
            </p>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-xl opacity-50"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-gray-400 text-sm">2028 Future Technology</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Leading the future of technology with cutting-edge AI, quantum computing, and innovative solutions that transform businesses and industries worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.mobile}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.email}</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400 mt-1" />
                  <span className="leading-relaxed">{contactInfo.address}</span>
                </div>
                <a href={contactInfo.website} className="flex items-center space-x-3 text-gray-300 hover:text-cyan-300 transition-colors">
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>{contactInfo.website.replace('https://', '')}</span>
                </a>
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
                  className="w-10 h-10 bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/30 rounded-lg flex items-center justify-center text-purple-300 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/40"
                >
                  <Link
                    href={service.href}
                    className={`block w-full h-20 bg-gradient-to-r ${service.color} rounded-xl flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200`}
                  >
                    <service.icon className="w-6 h-6 text-white mb-1" />
                    <span className="text-white text-xs font-medium text-center">{service.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Company & Legal Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Company */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Connect With Us</h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-colors duration-200 hover:bg-gray-700`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-medium text-white mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-4">
                Get the latest updates on our revolutionary services and technology breakthroughs.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded text-sm hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>Leading the future of technology since 2025</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>© 2028 Zion Tech Group. All rights reserved.</span>
                <span>•</span>
                <span>Made with ❤️ for the future</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-purple-300">
              © 2028 Zion Tech Group. All rights reserved. Leading the future of technology.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/privacy" className="text-purple-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-purple-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/security" className="text-purple-300 hover:text-white transition-colors">
                Security
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/contact"
          className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:shadow-lg hover:shadow-cyan-400/40 group"
        >
          <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
        </Link>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
      </div>
    </footer>
  );
}