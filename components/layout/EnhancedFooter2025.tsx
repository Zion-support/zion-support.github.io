  Phone, Mail, MapPin, Star, ArrowRight;
  Brain, Atom, Shield, Rocket, Target, Microscope;
  Zap, Globe, Database, Lock, Cloud, BarChart3;
  Twitter, Linkedin, Github, Youtube, Instagram
const serviceCategories = [
  {
    title: 'AI & Consciousness'
    icon: Brain
    services: [
    services: [;
      {
        name: 'AI Consciousness Evolution',
        href: '/ai - consciousness - evolution - 2029',
      },
      { name: 'Quantum AI Fusion', href: '/quantum - ai - fusion' },
      {
        name: 'Multimodal AI Orchestrator',
        href: '/multimodal - ai - orchestrator',
      },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance' },
    ],
  },  {      { name: 'Quantum AI Fusion', href: '/quantum - ai - fusion' },
      { name: 'Multimodal AI Orchestrator', href: '/multimodal - ai - orchestrator' },
      { name: 'AI Autonomous Ecosystem', href: '/ai - autonomous - ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai - ethics - governance' }
    ];
  }
  {
    title: 'Quantum & Emerging Tech',
    icon: Atom,
    services: [;
      { name: 'Space Mining Platform', href: '/space - mining - platform' },
      { name: 'Quantum Bio - Computing', href: '/quantum - bio - computing' },
      { name: 'Brain - Computer Interface', href: '/brain - computer - interface' },
      { name: 'Quantum Energy Platform', href: '/quantum - energy - platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai' },
    ],
  },  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [      { name: 'Autonomous Vehicle AI', href: '/autonomous - vehicle - ai' }
    ];
  }
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [;
      {
        name: 'Quantum Cloud Infrastructure',
        href: '/quantum - cloud - infrastructure',
      },
      {
        name: 'Edge Computing Orchestrator',
        href: '/edge - computing - orchestrator',
      },
      {
        name: 'Zero Trust Security Platform',
        href: '/zero - trust - security - platform',
      },
      {
        name: 'Blockchain Enterprise Platform',
        href: '/blockchain - enterprise - platform',
      },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops' },
    ],
  },  {      { name: 'Quantum Cloud Infrastructure', href: '/quantum - cloud - infrastructure' },
      { name: 'Edge Computing Orchestrator', href: '/edge - computing - orchestrator' },
      { name: 'Zero Trust Security Platform', href: '/zero - trust - security - platform' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain - enterprise - platform' },
      { name: 'AI - Powered DevOps', href: '/ai - powered - devops' }
    ];
  }
    title: 'Micro SAAS',
    icon: Target,
    services: [;
      { name: 'AI Content Factory Pro', href: '/ai - content - factory' },
      { name: 'Quantum CRM Suite', href: '/quantum - crm' },
      { name: 'CyberShield Pro', href: '/cyber - shield - pro' },
      { name: 'DataVault Hub', href: '/data - vault - hub' },
      { name: 'DevOps Automation Studio', href: '/devops - automation - studio' },
    ],
  }, ];      { name: 'DevOps Automation Studio', href: '/devops - automation - studio' }
    ];
  }
];
;
const company_links = [;
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case - studies' },
  { name: 'Blog', href: '/blog' },
];
;
const legal_links = [;
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  return (
    <footer className='relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50'>;
      {/* Background Effects */}
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>;
            {/* Company Info */}
                    Future Technology Solutions;
                  </div>;
                </div>;
              </div>;
                Leading the future with revolutionary AI, quantum computing, and;
                emerging technology solutions that transform businesses;
                worldwide.;
              </p>;
              {/* Contact Info */}
              <div className='space-y-3'>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Phone className='w-4 h-4 text-cyan-400' />;
                  <a
                    href={`tel:${contactInfo && contactInfo.mobile}`}
                    className='hover:text-cyan-400 transition-colors'>;
                    {contactInfo && contactInfo.mobile}
                  </a>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <Mail className='w-4 h-4 text-purple-400' />;
                  <a
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
      <div className="relative z-10">
                    href={`mailto:${contactInfo && contactInfo.email}`}
                    className='hover:text-purple-400 transition-colors'>;
                    {contactInfo && contactInfo.email}
                  </a>;
                </div>;
                <div className='flex items-center space-x-3 text-gray-300'>;
                  <MapPin className='w-4 h-4 text-pink-400' />;
                  <span className='text-sm'>{contactInfo && contactInfo.address}</span>                </div>      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>;

      <div className="relative z-10">;
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">;
            {/* Company Info */}

            {/* Service Categories */}
            {serviceCategories && serviceCategories.map((category, index) => (;
              <motion&& motion.div
                key={category && category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.services.map((service) => (
                className='space-y-4'>;
                <div className='flex items-center space-x-3'>;
                  <div className='w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center'>;
                    <category && category.icon className='w-4 h-4 text-white' />;
                  </div>;
                  <h3 className='text-lg font-semibold text-white'>;
                    {category && category.title}
                  </h3>;
                </div>;
                      key={service.name}
                      href={service.href}
                      className="block text - gray - 400 hover:text - cyan - 400 transition - colors duration - 200 text - sm";
                    >;
                  ))}
                </div>;
              </motion && motion.div>;
            ))}
          {/* Additional Links */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-800/50'>;
            {/* Company Links */}
            <div>;
              <h4 className='text-white font-semibold mb-4'>Company</h4>;
              <div className='space-y-2'>;
                {companyLinks && companyLinks.map(link => (;
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text - gray - 400 hover:text - white transition - colors duration - 200 text - sm";
                  >;
                ))}
            {/* Legal Links */}
            <div>;
              <h4 className='text-white font-semibold mb-4'>Legal</h4>;
              <div className='space-y-2'>;
                {legalLinks && legalLinks.map(link => (;
                  <Link
                    key={link && link.name}
                    href={link && link.href}
                    className='block text-gray-400 hover:text-white transition-colors duration-200 text-sm'>              <h4 className="text-white font-semibold mb-4">Legal</h4>;
              <div className="space-y-2">;
                {legalLinks && legalLinks.map((link) => (;
                  <Link
                    key={link && link.name}
                    href={link && link.href}
                    className="block text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                ))}
            {/* Social Links */}
            <div>;
              <h4 className='text-white font-semibold mb-4'>Follow Us</h4>;
              <div className='flex space-x-4'>;
                {socialLinks && socialLinks.map(social => (                  <a              <h4 className="text-white font-semibold mb-4">Follow Us</h4>;
              <div className="flex space-x-4">;
                {socialLinks && socialLinks.map((social) => (;
                  <a
                    key={social && social.name}
                    href={social && social.href}
                    className={`w-10 h-10 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg flex items-center justify-center text-gray-400 ${social && social.color} transition-all duration-200 border border-gray-700 hover:border-gray-600`}
                    aria-label={social && social.name}>;
                    <social && social.icon className='w-5 h-5' />                  </a>                    <social && social.icon className="w-5 h-5" />;
                  </a>;
                ))}
              </div>;
            </div>;
          </div>;
        </div>;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6 }}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.1 }}
                viewport={{ once: true }}
              <motion.div
                className='text-gray-400 mb-6 max-w-2xl mx-auto'>;
                Get the latest insights on AI, quantum computing, and emerging;
                technologies delivered to your inbox.;
              </motion && motion.p>              >;
                Get the latest insights on AI, quantum computing, and emerging technologies delivered to your inbox.;
              </motion && motion.p>;
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: 0 && 0.2 }}
                viewport={{ once: true }}
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent'
                />;
                <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                  Subscribe              >;
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                </div>;
              </div>;
            </div>;
          </div>;
        </div>;
      </div>;
};

export default EnhancedFooter2025;
    </footer>);
}
;
export default EnhancedFooter2025);
}
;
export default EnhancedFooter2025;
;
