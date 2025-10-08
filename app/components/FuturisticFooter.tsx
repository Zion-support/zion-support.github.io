import React from 'react';

const FuturisticFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const serviceCategories = [
    {
      title: 'AI Services',
      services: [
        { name: 'AI Content Generation', href: '/ai-services/content-generation' },
        { name: 'Machine Learning', href: '/ai-services/machine-learning' },
        { name: 'Natural Language Processing', href: '/ai-services/nlp' },
        { name: 'Computer Vision', href: '/ai-services/computer-vision' },
        { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics' },
      ]
    },
    {
      title: 'IT Services',
      services: [
        { name: 'Cloud Migration', href: '/it-services/cloud-migration' },
        { name: 'DevOps & CI/CD', href: '/it-services/devops' },
        { name: 'Infrastructure Management', href: '/it-services/infrastructure' },
        { name: 'Network Security', href: '/it-services/network-security' },
        { name: 'Data Backup & Recovery', href: '/it-services/backup-recovery' },
      ]
    },
    {
      title: 'Micro SAAS',
      services: [
        { name: 'AI Content Generator Pro', href: '/micro-saas#ai-content-generator' },
        { name: 'Smart Analytics Dashboard', href: '/micro-saas#smart-analytics-dashboard' },
        { name: 'Cyber Security Monitor', href: '/micro-saas#cyber-security-monitor' },
        { name: 'Code Optimizer AI', href: '/micro-saas#code-optimizer-ai' },
        { name: 'Workflow Automation Suite', href: '/micro-saas#workflow-automation' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Blog', href: '/blog' },
        { name: 'Careers', href: '/careers' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: '💼' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: '🐦' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: '🐙' },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: '📺' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="cyber-grid absolute inset-0 opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="neon-glow p-3 rounded-lg">
                  <span className="text-3xl font-bold holographic">Z</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Zion Tech Group</h3>
                  <p className="text-cyan-400">Advanced AI & IT Solutions</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                Leading provider of enterprise AI solutions, digital transformation, and cutting-edge technology services. 
                We help businesses accelerate growth through innovative technology.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📞</span>
                  <a 
                    href="tel:+13024640950" 
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">✉️</span>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-cyan-400">📍</span>
                  <span className="text-gray-300">
                    364 E Main St STE 1008<br />
                    Middletown, DE 19709
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-cyan-600 hover:scale-110 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <h4 className="text-xl font-semibold text-cyan-400 border-b border-cyan-500/30 pb-2">
                    {category.title}
                  </h4>
                  <ul className="space-y-2">
                    {(category.services || category.links || []).map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></span>
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-4 holographic">
                Stay Updated with Our Latest Innovations
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Get exclusive insights, tech updates, and special offers delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="cyber-button px-8 py-3 rounded-lg font-semibold whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Zion Tech Group. All rights reserved.
              </div>
              
              <div className="flex flex-wrap gap-6 text-sm">
                <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookies" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Cookie Policy
                </a>
                <a href="/sitemap" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border border-cyan-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-pink-500/20 rounded-full animate-pulse delay-2000"></div>
    </footer>
  );
};

export default FuturisticFooter;