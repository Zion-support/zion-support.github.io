import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, Globe, Users, Shield, Brain, Cpu, Rocket, Heart, ArrowRight } from 'lucide-react';

export function Footer() {
  const serviceCategories = [
    {
      title: 'AI & Analytics',
      links: [
        { name: 'AI Business Intelligence', href: '/pages/AIBusinessIntelligence' },
        { name: 'Data Analytics', href: '/pages/services/DataAnalytics' },
        { name: 'Predictive Analytics', href: '/pages/AIAutonomousPrediction' },
        { name: 'AI Research Assistant', href: '/pages/AIResearchAssistant' }
      ]
    },
    {
      title: 'Cybersecurity',
      links: [
        { name: 'Threat Detection', href: '/pages/services/IncidentResponsePlatform' },
        { name: 'Vulnerability Assessment', href: '/pages/AIAutonomousVulnerabilityAssessment' },
        { name: 'Penetration Testing', href: '/pages/AIAutonomousPenetrationTesting' },
        { name: 'Security Compliance', href: '/pages/soc2-compliance-automation' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      links: [
        { name: 'Cloud Infrastructure', href: '/pages/services/CloudDevOps' },
        { name: 'DevOps Automation', href: '/pages/services/DevOpsCloud' },
        { name: 'Container Security', href: '/pages/AIAutonomousContainerSecurity' },
        { name: 'API Security', href: '/pages/AIAutonomousAPISecurity' }
      ]
    },
    {
      title: 'Emerging Tech',
      links: [
        { name: 'Quantum Computing', href: '/pages/services/QuantumComputing' },
        { name: 'IoT & Edge', href: '/pages/services/IoTEdgeComputing' },
        { name: 'Blockchain', href: '/pages/services/BlockchainServices' },
        { name: 'Space Tech', href: '/pages/services/SpaceTech' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Partners', href: '/partners' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Sitemap', href: '/sitemap' }
  ];

  const microSAASLinks = [
    { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence' },
    { name: 'Customer Experience', href: '/micro-saas/customer-experience' },
    { name: 'Quantum Computing', href: '/micro-saas/quantum-computing' },
    { name: 'Supply Chain', href: '/micro-saas/supply-chain' },
    { name: 'Cybersecurity', href: '/micro-saas/cybersecurity' },
    { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge' },
    { name: 'Content Creation', href: '/micro-saas/content-creation' },
    { name: 'HR Platform', href: '/micro-saas/hr-platform' }
  ];

  return (
    <footer className="bg-zion-slate text-white relative overflow-hidden" role="contentinfo" aria-label="Site footer">
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>
                  <p className="text-sm text-zion-cyan">Innovation • Intelligence • Impact</p>
                </div>
              </div>
              
              <p className="text-white/80 mb-6 leading-relaxed max-w-md">
                Pioneering the future with cutting-edge AI solutions, quantum technology, and innovative IT services. 
                We help businesses transform and thrive in the digital age.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-white/70">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors duration-200">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors duration-200">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-white/70">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>Middletown, DE</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-4 h-4 text-zion-cyan" />
                <span>Core Services</span>
              </h4>
              <ul className="space-y-2">
                <li><Link to="/services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">All Services</Link></li>
                <li><Link to="/services/ai-analytics" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">AI & Analytics</Link></li>
                <li><Link to="/services/cybersecurity" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Cybersecurity</Link></li>
                <li><Link to="/services/cloud-devops" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Cloud & DevOps</Link></li>
                <li><Link to="/it-services" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">IT Services</Link></li>
              </ul>
            </div>

            {/* Micro SAAS */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Brain className="w-4 h-4 text-zion-cyan" />
                <span>Micro SAAS</span>
              </h4>
              <ul className="space-y-2">
                <li><Link to="/micro-saas" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">All Solutions</Link></li>
                <li><Link to="/micro-saas/ai-business-intelligence" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">AI Business Intelligence</Link></li>
                <li><Link to="/micro-saas/quantum-computing" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Quantum Computing</Link></li>
                <li><Link to="/micro-saas/cybersecurity" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">Cybersecurity Platform</Link></li>
                <li><Link to="/micro-saas/iot-edge" className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">IoT Edge Computing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Users className="w-4 h-4 text-zion-cyan" />
                <span>Company</span>
              </h4>
              <ul className="space-y-2">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-white/70 hover:text-zion-cyan transition-colors duration-200 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-zion-cyan/20 pt-8 mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-lg font-semibold text-white mb-3">Stay Updated</h4>
              <p className="text-white/70 text-sm mb-4">Get the latest insights on AI, cybersecurity, and emerging technologies</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-zion-slate/50 border border-zion-cyan/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/20 transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-zion-cyan/20 pt-8 text-center">
            <p className="text-white/60 text-sm">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
            <div className="mt-2 flex justify-center space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-zion-cyan transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-zion-cyan transition-colors duration-200">Terms of Service</Link>
              <Link to="/sitemap" className="text-white/60 hover:text-zion-cyan transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
