<<<<<<< HEAD
import { Link  } from 'react-router-dom';
 from 'framer-motion';

 from 'lucide-react';

 from 'lucide-react';

export function EnhancedFuturisticFooter() {

        { name: 'Press & Media', href: '/press', featured: false },;
        { name: 'Legal & Privacy', href: '/legal', featured: false };
      ]};
  ];

  return ()    <footer className="relative bg-slate-950 border-t border-cyan-400/20 overflow-hidden">
      {/* Enhanced Animated Background */}"
      <div className="absolute inset-0 bg-futuristic-enhanced">"
        <div className="absolute inset-0 bg-cyber-grid animate-cyber-grid opacity-5"></div>"
        <div className="absolute top-20 left-10 animate-float">"
          <div className="w-4 h-4 bg-cyan-400 rounded-full opacity-60 neon-glow"></div>
        </div>"
        <div className="absolute top-40 right-20 animate-float-delayed">"
          <div className="w-3 h-3 bg-blue-400 rounded-full opacity-60 neon-glow"></div>
        </div>"
        <div className="absolute bottom-40 left-20 animate-float">"
          <div className="w-2 h-2 bg-purple-400 rounded-full opacity-60 neon-glow"></div>
        </div>
      </div>

    { name: 'Terms of Service', href: '/terms', description: 'Service terms' },;
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },;
    { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },;
    { name: 'Security', href: '/security', description: 'Security practices' },;
    { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' };
=======
    { name: 'Privacy Policy', href: '/privacy', description: 'Data protection' },;'
    { name: 'Terms of Service', href: '/terms', description: 'Service terms' },;'
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage' },;'
    { name: 'Accessibility', href: '/accessibility', description: 'Accessibility statement' },;'
    { name: 'Security', href: '/security', description: 'Security practices' },;'    { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' };
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  ];

  // Create missing pages for broken links
  
      </Link>;) };
  return ("
          <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}"
        <div className="absolute inset-0 opacity-30">"
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
        </div>
<<<<<<< HEAD

      <div  className="relative">
        {/* Main Footer Content */}
        <div  className="container - responsive py-16">
          {/* Stats Section */}
          <motion.div
            className="grid grid - cols - 2 md:grid - cols - 4 gap-8 mb-16"
=======
      "
      <div className="relative">
        {/* Main Footer Content */}"
        <div className="container-responsive py-16">
          {/* Stats Section */}
          <motion.div "
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
>>>>>>> main
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}"
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >"
                <div className="flex justify-center mb-3">"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-cyan-400/30">"
                    <stat.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>"
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>"
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

<<<<<<< HEAD
          {/* Main Footer Grid */}
          <div  className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 xl:grid - cols - 6 gap-8 mb-12">
            {/* Company Info */}
            <div  className="lg:col - span -2">
              <motion.div
=======
          {/* Main Footer Grid */}"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-12">
            {/* Company Info */}"
            <div className="lg:col-span-2">
              <motion.div 
>>>>>>> main
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}"
                className="flex items-center space-x-3 mb-6"
              >"
                <div className="relative">"
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">"
                    <Zap className="w-6 h-6 text-white"  />
                  </div>"                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl blur-lg opacity-50"></div>
                </div>
                <div>"
                  <h3 className="text-xl font-bold text-white">Zion Tech Group</h3>"
                  <p className="text-slate-400 text-sm">Future Technology Solutions</p>
                </div>
<<<<<<< HEAD
              </div>
              <p className="text-slate - 300 mb-6 leading -relaxed">
                Leading provider of cutting - edge AI solutions, cloud services, cybersecurity, and digital transformation expertise.=======
              </div>"
              <p className="text-slate-300 mb-6 leading-relaxed">
                Leading provider of cutting-edge AI solutions, cloud services, cybersecurity, and digital transformation expertise.>>>>>>> main
                We help businesses innovate and thrive in the digital age.</p>"
              <div className="space-y-3">"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <Phone className="w-4 h-4 text-cyan-400"  />"
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <Mail className="w-4 h-4 text-cyan-400"  />"
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>"
                <div className="flex items-center space-x-3 text-slate-300">"
                  <MapPin className="w-4 h-4 text-cyan-400"  />                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>

              {/* Social Links */}"
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-400/10 ${social.color}`}
                    aria-label={social.name}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
<<<<<<< HEAD

            <p className="text-gray - 300 mb-6 max - w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure,
=======
            "
            <p className="text-gray-300 mb-6 max-w-md">
              Leading technology solutions provider specializing in AI, cybersecurity, cloud infrastructure, 
>>>>>>> main
              and digital transformation services.Transforming businesses with cutting - edge technology.</p>

            {/* Footer Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title}>"
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center">"
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                  {section.title}
                </h4>"
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}"
                        className="flex items-center text-slate-400 hover:text-cyan-400 transition-colors duration-200 group"
                      >"
                        <div className="w-1 h-1 bg-slate-600 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-200"></div>
                        {link.name}"
                        <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"  />                      </Link>
                    </li>) ) }
                </ul>
              </motion.div>) ) }
          </div>

          {/* Additional Links Grid */}"
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>"
              <ul className="space-y-3">
                {companyInfo.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Support */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>"
              <ul className="space-y-3">
                {supportResources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Legal */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>"
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}"
                      className="text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>) ) }
              </ul>
            </div>

            {/* Social & Newsletter */}
            <div>"
              <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>"
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}"
                    target="_blank"
                    rel="noopener noreferrer"`
                    className={`w-10 h-10 bg-slate-800/50 border border-slate-600/50 rounded-lg flex items-center justify-center text-slate-400 ${social.color} hover:border-cyan-400/50 transition-all duration-200`}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>"
              <div className="space-y-3">"
                <p className="text-sm text-slate-400">Subscribe to our newsletter</p>"
                <div className="flex">
                  <input"
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-slate-800/50 border border-slate-600/50 rounded-l-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />"
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-r-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200">"
                    <ArrowRight className="w-4 h-4"  />                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}"
          <div className="pt-8 border-t border-slate-800/50">"
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">"
              <div className="text-slate-400 text-sm">
                © {currentYear} Zion Tech Group.All rights reserved.</div>"
              <div className="flex items-center space-x-6 text-sm text-slate-400">"
                <span className="flex items-center">"
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2"  />
                  SOC 2 Compliant
                </span>"
                <span className="flex items-center">"
                  <Shield className="w-4 h-4 text-blue-400 mr-2"  />
                  ISO 27001 Certified
                </span>"
                <span className="flex items-center">"
<<<<<<< HEAD
                  <Award className="w-4 h-4 text-yellow-400 mr-2"  />
                  AWS Partner
                </span>
=======
                  <Award className="w-4 h-4 text-yellow-400 mr-2"  />                  AWS Partner
                </span>'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
      title: 'Pricing & Plans',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      links: ['
        { name: 'Pricing Overview', href: '/pricing' },;
        { name: 'Pricing Guide', href: '/pricing-guide' },;
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026' },;
        { name: 'Request Quote', href: '/request-quote' },;
        { name: 'Schedule Demo', href: '/schedule-demo' },;
        { name: 'Contact Sales', href: '/contact' }
      ]
    },
    {

      title: 'Company',;
      icon: Building,
      color: 'from-green-600 to-emerald-600',
      links: ['
        { name: 'About Us', href: '/about' },;
        { name: 'Our Team', href: '/team' },;
        { name: 'Careers', href: '/careers' },;
        { name: 'Partners', href: '/partners' },;
        { name: 'News & Press', href: '/news' },;
        { name: 'Events', href: '/events' },;
        { name: 'Case Studies', href: '/case-studies' },;
        { name: 'Marketplace', href: '/marketplace' }
      ]
    },
    {

      title: 'Resources & Learning',;
      icon: BookOpen,
      color: 'from-orange-600 to-red-600',
      links: ['
        { name: 'Help Center', href: '/help' },;
        { name: 'Documentation', href: '/documentation' },;
        { name: 'Training', href: '/training' },;
        { name: 'Blog', href: '/blog' },;
        { name: 'Webinars', href: '/webinars' },;
        { name: 'White Papers', href: '/white-papers' },;
        { name: 'FAQ', href: '/faq' },;
        { name: 'Support Center', href: '/support' },;
        { name: 'Community', href: '/community' }
      ]
    },
    {

      title: 'Platform & Tools',;
      icon: Settings,
      color: 'from-slate-600 to-gray-600',
      links: ['
        { name: 'Dashboard', href: '/dashboard' },;
        { name: 'Login', href: '/login' },;
        { name: 'Sign Up', href: '/signup' },;
        { name: 'System Status', href: '/status' },;
        { name: 'API Documentation', href: '/documentation' },;
        { name: 'Developer Tools', href: '/documentation' }
      ]
    },
    {

      title: 'Legal & Compliance',;
      icon: Shield,
      color: 'from-gray-600 to-slate-600',
      links: ['
        { name: 'Privacy Policy', href: '/privacy' },;
        { name: 'Terms of Service', href: '/terms' },;
        { name: 'Cookie Policy', href: '/cookies' },;
        { name: 'Security', href: '/security' },;
        { name: 'Compliance', href: '/compliance' },;
        { name: 'Accessibility', href: '/accessibility' },;
        { name: 'Sitemap', href: '/sitemap' }
      ]
    }
  ];

    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },;
    { name: 'Contact Support', href: '/support', icon: MessageCircle },;
    { name: 'View Status', href: '/status', icon: Gauge }
  ];

    { name: 'Twitter', href: '#', icon: Twitter, color: 'hover:text-blue-400' },;
    { name: 'Facebook', href: '#', icon: Facebook, color: 'hover:text-blue-600' },;
    { name: 'Instagram', href: '#', icon: Instagram, color: 'hover:text-pink-400' },;
    { name: 'YouTube', href: '#', icon: Youtube, color: 'hover:text-red-400' },;
    { name: 'GitHub', href: '#', icon: Github, color: 'hover:text-gray-400' }
  ];

    email: 'info@ziontechgroup.com',
    address: '123 Innovation Drive, Tech City, TC 12345'
=======
'
    phone: '+1(555) 123-4567',;'
    email: 'info@ziontechgroup.com','    address: '123 Innovation Drive, Tech City, TC 12345'
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
  };

  return ("
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}"
      <div className="absolute inset-0">"
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>"
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
"
      <div className="relative z-10">
        {/* Main Footer Content */}"
        <div className="container mx-auto px-4 py-16">
          {/* Top Section */}"
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}"
            <div className="lg:col-span-2">"
              <div className="flex items-center space-x-3 mb-6">"
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">"
                  <Crown className="w-7 h-7 text-white"  />                </div>
                <div>"
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h3>"
                  <p className="text-sm text-slate-400">Innovating Tomorrow, Today</p>
                </div>
              </div>"
              <p className="text-slate-300 mb-6 max-w-md">
                Leading provider of innovative technology solutions, helping businesses transform and thrive in the digital age.</p>"
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}`
                    className={`w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 transition-colors ${social.color}`}
                  >"
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

            {/* Newsletter Signup */}"
            <div className="space-y-4">"
              <h3 className="text-lg font-semibold text-white flex items-center space-x-2">"
                <MailIcon className="w-5 h-5 text-cyan-400"  />                <span>Stay Updated</span>
              </h3>"
              <p className="text-slate-300 text-sm">
                Get the latest insights on AI, quantum computing, and technology trends.</p>"
              <form className="space-y-3">
                <input"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button"
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}"
            className="border-t border-slate-700/50 pt-8"
          >"
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">"
              <div className="flex items-center space-x-4 text-sm text-slate-400">
                <span>&copy; {currentYear} Zion Tech Group.All rights reserved.</span>
                <span>•</span>"
                <Link to="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>
                <span>•</span>"
                <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>
                <span>•</span>"
                <Link to="/sitemap" className="hover:text-cyan-400 transition-colors">Sitemap</Link>
              </div>"
              <div className="flex items-center space-x-2 text-sm text-slate-400">
                <span>Made with</span>"
                <Heart className="w-4 h-4 text-red-400"  />                <span>by Zion Tech Group</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
<<<<<<< HEAD

            {/* Additional Contact Methods */}
            <div  className="mt-12 pt - 8 border-t border-slate -700">
              <div  className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-6 text-center">
                <div>
                  <h4 className="text-sm font - semibold text-slate - 400 mb-2">Emergency Support</h4>
                  <p className="text-sm text-slate -500">Critical issues: +1 302 464 0950</p>
=======
            
            {/* Additional Contact Methods */}"
            <div className="mt-12 pt-8 border-t border-slate-700">"
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Emergency Support</h4>"
                  <p className="text-sm text-slate-500">Critical issues: +1 302 464 0950</p>
>>>>>>> main
                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Business Hours</h4>"
                  <p className="text-sm text-slate-500">Mon-Fri: 9AM-6PM EST</p>
                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Response Time</h4>"
                  <p className="text-sm text-slate-500">Urgent: 1 hour, Normal: 4 hours</p>
                </div>
                <div>"
                  <h4 className="text-sm font-semibold text-slate-400 mb-2">Global Support</h4>"
                  <p className="text-sm text-slate-500">24/7 availability worldwide</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>;
;
      {/* Bottom Footer */};"
      <div className="border-t border-slate-700/50">;"
        <div className="container-responsive py-6">;"
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">;"
            <div className="flex items-center space-x-6 text-sm text-gray-400">;
              <span>&copy; {currentYear} Zion Tech Group.All rights reserved.</span>"
              <Link to = "/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link>"
              <Link to="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link>"
              <Link to="/cookies" className="hover:text-cyan-400 transition-colors">Cookie Policy</Link>
            </div>
<<<<<<< HEAD

            <div  className="flex items - center space - x-4">
              <button     onClick={scrollToTop}
                className="p - 2 bg-slate - 700 / 50 rounded-lg text-gray - 400 hover:text-cyan - 400 hover:bg-slate - 600 / 50 transition - all duration - 300 transform hover:scale -110"
                
              >
                <ArrowUpRight className="w-5 h-5 rotate -45" />;
              </button>;
=======
            "
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToTop}"
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-slate-600/50 transition-all duration-300 transform hover:scale-110"
                
              >"
                <ArrowUpRight className="w-5 h-5 rotate-45"  />;              </button>;
>>>>>>> main
            </div>;
          </div>;
        </div>;
      </div>;
    </footer>;) };
'"`