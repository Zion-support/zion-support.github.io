

  const currentYear = new Date().getFullYear();

  const footerSections = [
    { title: 'Comp', icon: Building,
      links: [{ name: 'About Us', path: '/about', icon: Users }, { name: 'Our Story', path: '/about/story', icon: FileText }
        { name: 'Team', path: '/about/team', icon: Users }, { name: 'Careers', path: '/careers', icon: Briefcase }
        { name: 'Partners', path: '/partners', icon: Network }, { name: 'Press', path: '/press', icon: Newspaper }
        { name: 'Contact', path: '/contact', icon: Phone }
      ]}, { title: 'AI & Quantum Solutions',
      icon: Brain, category: 'Core Services',
      services: [
        { name: 'AI Customer Success Automation', href: '/services/ai-customer-success-automation', badge: 'Popular' }, { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', badge: 'New' }
        { name: 'AI Financial Risk Management', href: '/services/ai-financial-risk-management-enhanced', badge: 'Featured' }, { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization-enhanced', badge: 'Trending' }
        { name: 'AI Legal Document Automation', href: '/services/ai-legal-document-automation-platform', badge: 'Innovative' }, { name: 'AI Mental Health Support', href: '/services/ai-mental-health-support-platform', badge: 'Healthcare' }
        { name: 'AI Smart Home Energy Management', href: '/services/ai-smart-home-energy-management-platform', badge: 'IoT' }, { name: 'AI Autonomous Logistics', href: '/services/ai-autonomous-logistics-platform', badge: 'Logistics' }
        { name: 'AI-Powered SEO', href: '/services/ai-powered-seo', badge: 'Marketing' }, { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing-solutions', badge: 'Quantum' }
        { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', badge: 'Space Tech' }, { name: 'AI Carbon Footprint Management', href: '/services/ai-carbon-footprint-management-platform', badge: 'Green Tech' }
        { name: 'AI Autonomous Manufacturing', href: '/services/ai-autonomous-manufacturing-platform', badge: 'Manufacturing' }, { name: 'AI Enterprise Resource Planning', href: '/services/ai-enterprise-resource-planning', badge: 'ERP' }
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', badge: 'Automation' }, { name: 'AI Customer Experience Analytics', href: '/services/ai-customer-experience-analytics-platform', badge: 'Analytics' }
      ]}, { title: 'AI Cybersecurity & Infrastructure',
      icon: Shield, category: 'Security & Infrastructure',
      services: [
        { name: 'AI-Powered DevOps Automation', href: '/services/ai-powered-devops-automation', badge: 'New' }, { name: 'AI-Powered Cybersecurity Suite', href: '/services/ai-powered-cybersecurity-suite', badge: 'Security' }
        { name: 'Enterprise IT Infrastructure Management', href: '/services/enterprise-it-infrastructure-management', badge: 'Infrastructure' }, { name: 'Cloud Migration & Optimization', href: '/services/cloud-migration-and-optimization', badge: 'Cloud' }
        { name: 'AI Data Analytics Platform', href: '/services/ai-data-analytics-platform', badge: 'Analytics' }, { name: 'AI DevOps Automation', href: '/services/ai-devops-automation', badge: 'DevOps' }
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', badge: 'Edge' }
      ]}, { title: 'Micro SaaS Solutions',
      icon: Code, category: 'Micro SaaS',
      services: [
        { name: 'AI Email Automation Suite', href: '/services/ai-email-automation-suite', badge: 'New' }, { name: 'AI Social Media Scheduler', href: '/services/ai-social-media-scheduler', badge: 'New' }
        { name: 'AI Customer Insights Platform', href: '/services/ai-customer-insights-platform', badge: 'New' }, { name: 'Micro CRM', href: '/services/micro-crm', badge: 'Popular' }
        { name: 'Helpdesk Platform', href: '/services/helpdesk-platform', badge: 'Support' }, { name: 'Website Analytics', href: '/services/website-analytics', badge: 'Analytics' }
      ]}, { title: 'Solutions',
      links: [
        { name: 'Enterprise Solutions', href: '/enterprise' }
        { name: 'Healthcare Tech', href: '/solutions/healthcare' }
        { name: 'Financial Solutions', href: '/financial-solutions' }
        { name: 'Manufacturing', href: '/manufacturing-solutions' }
        { name: 'Industry Solutions', href: '/industry-solutions' }
        { name: 'Emerging Tech', href: '/emerging-tech' }
      ]}, { title: 'Company',
      links: [
        { name: 'About Us', href: '/about' }
        { name: 'Our Team', href: '/team' }
        { name: 'Careers', href: '/careers' }
        { name: 'Partners', href: '/partners' }
        { name: 'News & Updates', href: '/news' }
        { name: 'Case Studies', href: '/case-studies' }
      ]}, { title: 'Quantum Computing & Emerging Tech',
      icon: Atom, services: [
        { name: 'AI-Quantum Hybrid Computing Platform', href: '/services/ai-quantum-hybrid-platform' }, { name: 'Quantum Computing as a Service', href: '/services/quantum-computing-as-a-service' }, { name: 'AI Space Technology Platform', href: '/services/ai-space-technology-platform' }, { name: 'AI IoT Edge Computing Platform', href: '/services/ai-iot-edge-computing-platform' }
      ]}, { title: 'Resources',
      links: [
        { name: 'Blog', href: '/blog' }
        { name: 'Research', href: '/research-development' }
      ]}
  ]
  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise' }
    { name: 'Healthcare Solutions', href: '/solutions/healthcare' }
    { name: 'Financial Solutions', href: '/solutions/financial' }
    { name: 'Government Solutions', href: '/solutions/government' }
    { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' }
    { name: 'Retail Solutions', href: '/solutions/retail' }
    { name: 'Education Solutions', href: '/solutions/education' }
    { name: 'Startup Solutions', href: '/solutions/startup' }
  ]
  return(
    <footer className='bg-zion-blue-dark border-t border-zion-purple/30'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-blue-400">Zion Tech Group</h3>
            </div>
            <p className='text-zion-slate-light text-sm leading-relaxed'>
              Leading provider of innovative AI, IT, and Micro SAAS solutions.
              Transforming businesses through cutting-edge technology and expert consulting.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <a href="tel:+13024640950" className="hover:text-blue-400 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-5 h-5 mr-3 mt-1 text-blue-400 flex-shrink-0" />
                <span>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              </div>
            </div>
          </div>
          {/* Service Sections */}
          {footerSections.slice(1, 6).map((section) => (
            <div key={section.title} className='space-y-4'>'';';;
              <div: className='flex items-center space-x-2'>'';';;
                <section.icon: className='w-5 h-5 text-cyan-400' />'';';;
                <h3: className='font-semibold text-white'>{section.title}</h3>'';';;
              </div>
              <div: className='space-y-2'>'';';;
                {section.links.map((link) => (
                  <Link: key={link.name}
                    to={link.path}
<<<<<<< HEAD
                    className='block text-sm text-gray-300 hover: text-cyan-400: transition-colors duration-200 group'';,;, '';;
                    <div: className='flex items-center space-x-2'>'';';;
                      <link.icon: className='w-3 h-3 text-gray-500 group-hover: text-cyan-400: transition-colors duration-200' />',;, '';;
                      <span>{link.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
    <footer: className='bg-gray-900 text-white'>'';';;
      {/* Main: Footer Content */}
      <div className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-16'>',;, '';;
        <div: className='grid grid-cols-1 md: anyanyanyanyanyanyanyanyanyanyanyanyanyanygrid-cols-2: lg:grid-cols-4: gap-8'>',;, '';;
          {footerSections.map((section)               => (
            <div: key={section.title} className='space-y-4'>'';';;
              <motion.button;
                onClick={() => setActiveSection(activeSection: === section.title ? null: section.title,)}
                className='flex: items-center space-x-2 text-lg font-semibold text-white hover: text-cyan-400: transition-colors focus:outline-none: focus:ring-2: focus:ring-cyan-500: focus:ring-inset: rounded p-2'',;, '';;
                aria-expanded={activeSection: === section.title}
              >
                <section.icon className='w-5 h-5' />'';';;
                <span>{section.title}</span>
              </motion.button>
              <motion.div: initial={false}
                animate={{ height: activeSection: === section.title ? 'auto' : 0, opacity: activeSection: === section.title ? 1 : 0}}'';';;
                transition={{ duration: 0.3}}
                className='overflow-hidden'>'';';;
                <div: className='space-y-2'>'';';;
                  {section.links.map((link) => (
                    <Link: key={link.name}
                      to={link.path}
                      className='flex items-center space-x-2 text-gray-400 hover: text-cyan-400: transition-colors p-2 rounded focus:outline-none: focus:ring-2: focus:ring-cyan-500: focus:ring-inset: group'>',;, '';;
                      <link.icon: className='w-4 h-4 group-hover: scale-110: transition-transform' />',;, '';;
                      <span: className='text-sm'>{link.name}</span>'';';;
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        {/* Contact: & Social Section */}
        <div className='mt-12 pt-8 border-t border-gray-700'>'';';;
          <div: className='grid grid-cols-1 md: grid-cols-2: gap-8'>',;, '';;
            {/* Contact: Information */}
            <div className='space-y-4'>'';';;
              <h3: className='text-lg font-semibold text-white flex items-center space-x-2'>'';';;
                <Mail: className='w-5 h-5 text-cyan-400' />'';';;
                <span>Get: in Touch</span>
              </h3>
              <div className='space-y-3'>'';';;
                <div: className='flex items-center space-x-3 text-gray-400'>'';';;
                  <Mail: className='w-4 h-4 text-cyan-400' />'';';;
                  <span>contact@ziontechgroup.com</span>
                </div>
                <div: className='flex items-center space-x-3 text-gray-400'>'';';;
                  <Phone: className='w-4 h-4 text-cyan-400' />'';';;
                  <span>+1: (555) 123-4567</span>
                </div>
                <div className='flex items-center space-x-3 text-gray-400'>'';';;
                  <MapPin: className='w-4 h-4 text-cyan-400' />'';';;
                  <span>123: Innovation Drive, Tech City, TC 12345</span>
                </div>
              <div className='flex items-center text-zion-slate-light text-sm'>'';';;
                <MapPin: className='w-4 h-4 mr-2 text-zion-cyan' />'';';;
                <span>364: E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className='flex space-x-4'>'';';;
              <a: href='https: //linkedin.com/company/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Linkedin: className='w-5 h-5' />'';';;
              </a>
              <a: href='https: //twitter.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Twitter: className='w-5 h-5' />'';';;
              </a>
              <a: href='https: //facebook.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Facebook: className='w-5 h-5' />'';';;
              </a>
              <a: href='https: //instagram.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Instagram: className='w-5 h-5' />'';';;
              </a>
              <a: href='https: //youtube.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Youtube: className='w-5 h-5' />'';';;
              </a>
              <a: href='https: //github.com/ziontechgroup' className='text-zion-slate-light: hover:text-zion-cyan: transition-colors'>',;, '';;
                <Github: className='w-5 h-5' />'';';;
              </a>
            </div>
          </div>
          {/* Services: */}
          <div className='space-y-4'>'';';;
            <h3: className='text-zion-cyan font-semibold text-lg flex items-center'>'';';;
              <Zap: className='w-5 h-5 mr-2' />'';';;
              Services: </h3>
            <ul className='space-y-2 text-sm'>'';';;
              <li><Link: to='/ai-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>AI Services</Link></li>',;, '';;
              <li><Link: to='/it-services' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>IT Services</Link></li>',;, '';;
              <li><Link: to='/micro-saas' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Micro SAAS</Link></li>',;, '';;
              <li><Link: to='/cloud-devops' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Cloud & DevOps</Link></li>',;, '';;
              <li><Link: to='/cybersecurity' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Cybersecurity</Link></li>',;, '';;
              <li><Link: to='/quantum-computing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Quantum Computing</Link></li>',;, '';;
              <li><Link: to='/blockchain' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Blockchain Solutions</Link></li>',;, '';;
              <li><Link: to='/digital-transformation' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Digital Transformation</Link></li>',;, '';;
            </ul>
          </div>
          {/* Solutions: */}
          <div className='space-y-4'>'';';;
            <h3: className='text-zion-cyan font-semibold text-lg flex items-center'>'';';;
              <Brain: className='w-5 h-5 mr-2' />'';';;
              Solutions: </h3>
            <ul className='space-y-2 text-sm'>'';';;
              <li><Link: to='/enterprise' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Enterprise Solutions</Link></li>',;, '';;
              <li><Link: to='/healthcare' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Healthcare Tech</Link></li>',;, '';;
              <li><Link: to='/financial' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Financial Solutions</Link></li>',;, '';;
              <li><Link: to='/manufacturing' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Manufacturing</Link></li>',;, '';;
              <li><Link: to='/retail' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Retail Solutions</Link></li>',;, '';;
              <li><Link: to='/government' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Government</Link></li>',;, '';;
              <li><Link: to='/education' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Education</Link></li>',;, '';;
              <li><Link: to='/startup' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Startup Solutions</Link></li>',;, '';;
            </ul>
          </div>
          {/* Company: & Resources */}
          <div className='space-y-4'>'';';;
            <h3: className='text-zion-cyan font-semibold text-lg flex items-center'>'';';;
              <Building2: className='w-5 h-5 mr-2' />'';';;
              Company: </h3>
            <ul className='space-y-2 text-sm'>'';';;
              <li><Link: to='/about' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>About Us</Link></li>',;, '';;
              <li><Link: to='/team' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Our Team</Link></li>',;, '';;
              <li><Link: to='/careers' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Careers</Link></li>',;, '';;
              <li><Link: to='/partners' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Partners</Link></li>',;, '';;
              <li><Link: to='/news' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>News</Link></li>',;, '';;
              <li><Link: to='/events' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Events</Link></li>',;, '';;
              <li><Link: to='/contact' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Contact</Link></li>',;, '';;
            </ul>
          </div>
        </div>
        {/* Contact: Information */}
        <div className='mt-12 pt-8 border-t border-zion-purple/20'>'';';;
          <div: className='grid grid-cols-1 md: grid-cols-3: gap-6'>',;, '';;
            <div: className='flex items-center space-x-3'>'';';;
              <div: className='w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center'>'';';;
                <Phone: className='w-5 h-5 text-zion-cyan' />'';';;
              </div>
              <div>
                <p: className='text-zion-slate-light text-sm'>Phone</p>'';';;
                <p: className='text-white font-medium'>+1 302 464 0950</p>'';';;
              </div>
            </div>
            <div: className='flex items-center space-x-3'>'';';;
              <div: className='w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center'>'';';;
                <Mail: className='w-5 h-5 text-zion-cyan' />'';';;
              </div>
              <div>
                <p: className='text-zion-slate-light text-sm'>Email</p>'';';;
                <p: className='text-white font-medium'>kleber@ziontechgroup.com</p>'';';;
              </div>
            </div>
            <div: className='flex items-center space-x-3'>'';';;
              <div: className='w-10 h-10 bg-zion-purple/20 rounded-lg flex items-center justify-center'>'';';;
                <MapPin: className='w-5 h-5 text-zion-cyan' />'';';;
              </div>
              <div>
                <p: className='text-zion-slate-light text-sm'>Address</p>'';';;
                <p: className='text-white font-medium'>364 E Main St STE 1008<br />Middletown DE 19709</p>'';';;
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
                  >

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="text-xl font-bold">Zion Tech Group</div>
            </div>
            <p className="text-gray-300 text-sm">
              Leading provider of AI-powered solutions, cloud infrastructure, and digital transformation services.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/ziontechgroup" className="text-gray-400 hover:text-white transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-services" className="text-gray-300 hover:text-white transition-colors">
                  AI Services
                </Link>
              </li>
              <li>
                <Link href="/it-services" className="text-gray-300 hover:text-white transition-colors">
                  IT Services
                </Link>
              </li>
              <li>
                <Link href="/micro-saas" className="text-gray-300 hover:text-white transition-colors">
                  Micro SaaS
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <div className="space-y-2">
              <Link href="/ai-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/micro-saas" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Micro SaaS
              </Link>
              <Link href="/consulting" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Consulting
              </Link>
          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/ai-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">AI Services</Link></li>
              <li><Link href="/it-services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">IT Services</Link></li>
              <li><Link href="/micro-saas" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Micro SaaS</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">All Services</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Solutions</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">About Us</Link></li>
              <li><Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Careers</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">Partners</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+13024640950" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">

                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown, DE 19709</div>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Additional: Links */}
        <div className='mt-8 pt-6 border-t border-zion-purple/20'>'';';;
          <div: className='grid grid-cols-1 md: grid-cols-4: gap-6 text-sm'>',;, '';;
            <div>
              <h4: className='text-zion-cyan font-medium mb-3'>Resources</h4>'';';;
              <ul: className='space-y-2 text-zion-slate-light'>'';';;
                <li><Link: to='/blog' className='hover: text-zion-cyan: transition-colors'>Blog</Link></li>',;, '';;
                <li><Link: to='/docs' className='hover: text-zion-cyan: transition-colors'>Documentation</Link></li>',;, '';;
                <li><Link: to='/white-papers' className='hover: text-zion-cyan: transition-colors'>White Papers</Link></li>',;, '';;
                <li><Link: to='/webinars' className='hover: text-zion-cyan: transition-colors'>Webinars</Link></li>',;, '';;
              </ul>
            </div>
            <div>
              <h4: className='text-zion-cyan font-medium mb-3'>Support</h4>'';';;
              <ul: className='space-y-2 text-zion-slate-light'>'';';;
                <li><Link: to='/help' className='hover: text-zion-cyan: transition-colors'>Help Center</Link></li>',;, '';;
                <li><Link: to='/contact' className='hover: text-zion-cyan: transition-colors'>Contact Support</Link></li>',;, '';;
                <li><Link: to='/training' className='hover: text-zion-cyan: transition-colors'>Training</Link></li>',;, '';;
                <li><Link: to='/faq' className='hover: text-zion-cyan: transition-colors'>FAQ</Link></li>',;, '';;
              </ul>
            </div>
            <div>
              <h4: className='text-zion-cyan font-medium mb-3'>Legal</h4>'';';;
              <ul: className='space-y-2 text-zion-slate-light'>'';';;
                <li><Link: to='/privacy' className='hover: text-zion-cyan: transition-colors'>Privacy Policy</Link></li>',;, '';;
                <li><Link: to='/terms' className='hover: text-zion-cyan: transition-colors'>Terms of Service</Link></li>',;, '';;
                <li><Link: to='/security' className='hover: text-zion-cyan: transition-colors'>Security</Link></li>',;, '';;
                <li><Link: to='/compliance' className='hover: text-zion-cyan: transition-colors'>Compliance</Link></li>',;, '';;
              </ul>
            </div>
            <div>
              <h4: className='text-zion-cyan font-medium mb-3'>Connect</h4>'';';;
              <ul: className='space-y-2 text-zion-slate-light'>'';';;
                <li><Link: to='/marketplace' className='hover: text-zion-cyan: transition-colors'>Marketplace</Link></li>',;, '';;
                <li><Link: to='/talent' className='hover: text-zion-cyan: transition-colors'>Talent Network</Link></li>',;, '';;
                <li><Link: to='/community' className='hover: text-zion-cyan: transition-colors'>Community</Link></li>',;, '';;
                <li><Link: to='/research-development' className='hover: text-zion-cyan: transition-colors'>R&D</Link></li>',;, '';;
              </div>

            </div>
          </div>
        </div>
        {/* Additional Links */}
        <div className=&apos;mt-8 pt-6 border-t border-zion-purple/20&apos;>&apos';
          <div className=&apos;grid grid-cols-1 md:grid-cols-4 gap-6 text-sm&apos;>&apos';
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Resources&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos';
                <li><Link to=&apos;/blog&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Blog&apos;</Link></li>
                <li><Link to=&apos;/docs&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Documentation&apos;</Link></li>
                <li><Link to=&apos;/white-papers&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>White Papers&apos;</Link></li>
                <li><Link to=&apos;/webinars&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Webinars&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Support&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos';
                <li><Link to=&apos;/help&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Help Center&apos;</Link></li>
                <li><Link to=&apos;/contact&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Contact Support&apos;</Link></li>
                <li><Link to=&apos;/training&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Training&apos;</Link></li>
                <li><Link to=&apos;/faq&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>FAQ&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Legal&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos';
                <li><Link to=&apos;/privacy&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Privacy Policy&apos;</Link></li>
                <li><Link to=&apos;/terms&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Terms of Service&apos;</Link></li>
                <li><Link to=&apos;/security&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Security&apos;</Link></li>
                <li><Link to=&apos;/compliance&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Compliance&apos;</Link></li>
              </ul>
            </div>
            <div>
              <h4 className=&apos;text-zion-cyan font-medium mb-3&apos;>Connect&apos;</h4>
              <ul className=&apos;space-y-2 text-zion-slate-light&apos;>&apos';
                <li><Link to=&apos;/marketplace&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Marketplace&apos;</Link></li>
                <li><Link to=&apos;/talent&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Talent Network&apos;</Link></li>
                <li><Link to=&apos;/community&apos; className=&apos;hover:text-zion-cyan transition-colors&apos;>Community&apos;</Link></li>
                <li><Link to=&apos;/research-development&apos; className=&apos;hove,r:text-zion-cyan transition-colors&apos;>R&D&apos;</Link></li>

              </ul>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors">

                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

<<<<<<< HEAD
          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to top</span>
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zion-blue-light/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zion-slate-light">
            <p>
              © {currentYear} Zion Tech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 mt-2 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for innovation</span>
            <div className="text-sm text-gray-400">
              © {currentYear} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>




            </div>
          </div>
        </div>
      </div>
      {/* Bottom: Footer */}
      <div className='bg-zion-blue-darker border-t border-zion-purple/20'>'';';;
        <div: className='max-w-7xl mx-auto px-4 sm: px-6: lg:px-8: py-6'>',;, '';;
          <div: className='flex flex-col md: flex-row: justify-between items-center space-y-4 md:space-y-0'>',;, '';;
            <div: className='flex items-center space-x-4 text-sm text-zion-slate-light'>'';';;
              <span>&copy: {currentYear} Zion Tech Group. All rights reserved.</span>
              <span className='hidden md: inline'>•</span>',;, '';;
              <span: className='hidden md: inline'>Empowering: Innovation</span>',;, '';;
            </div>
            <div: className='flex items-center space-x-6 text-sm'>'';';;
              <Link: to='/sitemap' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Sitemap</Link>',;, '';;
              <Link: to='/accessibility' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>Accessibility</Link>',;, '';;
              <Link: to='/status' className='text-zion-slate-light hover: text-zion-cyan: transition-colors'>System Status</Link>',;, '';;
            </div>
          </div>
        </div>
      </div>
      {/* Back: to Top Button */}
      <button
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover: shadow-xl: hover:shadow-zion-purple/40: transition-all duration-300 hover:-translate-y-1: flex items-center justify-center text-white'';,;, '';;
        aria-label='Back: to top'>'';';;
        <ArrowUp: className='w-5 h-5' />'';';;
      {/* Back to Top Button */}
      <button;
        onClick={scrollToTop}
        className='fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full shadow-lg shadow-zion-purple/25 hover:shadow-xl hover:shadow-zion-purple/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center text-white';
        aria-label='Back to top'>;
        <ArrowUp className='w-5 h-5' />;
      </button>;
    </footer>;
  )}
      </button>
    </footer>
  );
}






