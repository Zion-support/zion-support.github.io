<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, 
  Globe, 
  Zap, 
  Shield, 
  Phone, 
  Menu, 
  X, 
  ChevronDown,
  Home,
  Building,
  Users,
  Settings,
  BarChart3,
  Cloud,
  Database,
  Network,
  Code,
  Smartphone,
  Mail,
  MapPin
=======
<<<<<<< HEAD
import React, { useState } from 'react';''';,"});,"})
import { Link, useLocation } from 'react-router-dom';,"});,"})
import { Menu, X, Phone, Globe, Brain, Zap, Shield, Building, ChevronDown const Navigation = () => {}"});,"})
    const [isOpen, setIsOpen] = useState(false);,"});,"})
    const [isServicesOpen, setIsServicesOpen] = useState(false);,"});,"})
    const location = useLocation();';,"});,"})
    const navigationItems = ['';,"});,"})
        { name: 'Home', href: '/', icon: Globe },';,"});,"})
        { name: 'Micro SAAS Services', href: '/micro-saas-services', icon: Zap },';,"});,"})
        { name: 'Comprehensive Services', href: '/comprehensive-services', icon: Brain },';,"});,"})
        { name: 'Pricing', href: '/pricing', icon: Building }"});,"})
    ];,"});,"})
    const serviceCategories = [];,"});,"})
        {}"});,"})
';,"});,"})
            name: 'AI & Machine Learning',;,"});,"})
            services[;';,"});,"})
                { name: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },';,"});,"})
                { name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },';,"});,"})
                { name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' }"});,"})
            ];,"});,"})
        },;,"});,"})
        {}"});,"})
';,"});,"})
            name: 'Emerging Technologies',;,"});,"})
            services[;';,"});,"})
                { name: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },';,"});,"})
                { name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },';,"});,"})
                { name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' }"});,"})
            ];,"});,"})
        },;,"});,"})
        {}"});,"})
';,"});,"})
            name: 'Industry Solutions',;,"});,"})
            services[;';,"});,"})
                { name: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },';,"});,"})
                { name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },';,"});,"})
                { name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' }"});,"})
            ];,"});,"})
    ];,"});,"})
    const isActive = (href) => {}"});,"})
';,"});,"})
        if (href === '/') {}"});,"})
';,"});,"})
'';,"});,"})
''';,"});,"})
            return location.pathname === '/'}"});,"})
        return location.pathname.startsWith(href)};,"});,"})
    return (<nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">"""";,"});,"})
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">"""";,"});,"})
        <div className="flex justify-between items-center h-16">""";,"});,"})
          {/* Logo */}"""";,"});,"})
          <div className="flex-shrink-0">"""";,"});,"})
            <Link to="/" className="flex items-center space-x-2">"""";,"});,"})
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">"""";,"});,"})
                <Brain className="w-5 h-5 text-white"/>""";,"});,"})
              </div>"""";,"});,"})
              <span className="text-xl font-bold text-white">Zion Tech Group</span>;,"});,"})
            </Link>;,"});,"})
          </div>;,"});,"})
""";,"});,"})
          {/* Desktop Navigation */}"""";,"});,"})
          <div className="hidden lg:flex lg:items-center lg:space-x-8">;,"});,"})
            {navigationItems.map((item) => {}"});,"})
            const Icon = item.icon;,"});,"})
            return (<Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)'`;,"});,"})
                    ? 'text-zion-cyan bg-zion-cyan/10''`'"`;,"});,"})
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`}>"""";,"});,"})
                  <Icon className="w-4 h-4"/>;,"});,"})
                  <span>{item.name}</span>;,"});,"})
                </Link>) }) }"});,"})
""";,"});,"})
            {/* Services Dropdown */}"""";,"});,"})
            <div className="relative">"""";,"});,"})
              <button onClick={() => setIsServicesOpen(!isServicesOpen)} className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors">"""";,"});,"})
                <Shield className="w-4 h-4"/>'`;,"});,"})
                <span>Services</span>'`'`;,"});,"})
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}/>;,"});,"})
              </button>""";,"});,"})
"""";,"});,"})
              {isServicesOpen && (<div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">"""";,"});,"})
                  <div className="p-4">"""";,"});,"})
                    <div className="grid grid-cols-1 gap-4">"""";,"});,"})
                      {serviceCategories.map((category) => (<div key={category.name} className="space-y-2">"""";,"});,"})
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>"""";,"});,"})
                          <div className="space-y-1">"""";,"});,"})
                            {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsServicesOpen(false)}>;,"});,"})
                                {service.name}"});,"})
                              </Link>) ) }"});,"})
                          </div>;,"});,"})
                        </div>) ) }"});,"})
                    </div>;,"});,"})
                  </div>;,"});,"})
                </div>) }"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Contact Button */}"""";,"});,"})
            <a href="tel:+13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors">"""";,"});,"})
              <Phone className="w-4 h-4"/>;,"});,"})
              <span>Contact Us</span>;,"});,"})
            </a>;,"});,"})
          </div>;,"});,"})
""";,"});,"})
          {/* Mobile menu button */}"""";,"});,"})
          <div className="lg:hidden">"""";,"});,"})
            <button onClick={() => setIsOpen(!isOpen)} className="text-zion-slate-light hover:text-white focus:outline-none focus:text-white">"""";,"});,"})
              {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}"});,"})
            </button>;,"});,"})
          </div>;,"});,"})
        </div>;,"});,"})
      </div>;,"});,"})
""";,"});,"})
      {/* Mobile Navigation */}"""";,"});,"})
      {isOpen && (<div className="lg:hidden">"""";,"});,"})
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">;,"});,"})
            {navigationItems.map((item) => {}"});,"})
`;,"});,"})
                const Icon = item.icon;``;,"});,"})
                return (<Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive(item.href)'`;,"});,"})
                        ? 'text-zion-cyan bg-zion-cyan/10''`'"`;,"});,"})
                        : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`} onClick={() => setIsOpen(false)}>"""";,"});,"})
                  <Icon className="w-5 h-5"/>;,"});,"})
                  <span>{item.name}</span>;,"});,"})
                </Link>) }) }"});,"})
""";,"});,"})
            {/* Mobile Services */}"""";,"});,"})
            <div className="px-3 py-2">"""";,"});,"})
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>"""";,"});,"})
              <div className="space-y-2">"""";,"});,"})
                {serviceCategories.map((category) => (<div key={category.name} className="ml-4">"""";,"});,"})
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>"""";,"});,"})
                    <div className="space-y-1">"""";,"});,"})
                      {category.services.map((service) => (<Link key={service.name} to={service.href} className="block px-3 py-1 text-sm text-zion-slate-light hover:text-white rounded transition-colors" onClick={() => setIsOpen(false)}>;,"});,"})
                          {service.name}"});,"})
                        </Link>) ) }"});,"})
                    </div>;,"});,"})
                  </div>) ) }"});,"})
              </div>;,"});,"})
            </div>;,"});,"})
""";,"});,"})
            {/* Mobile Contact */}"""";,"});,"})
            <div className="px-3 py-2 border-t border-zion-blue-light/30">"""";,"});,"})
              <a href="tel:+13024640950" className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium">"""";,"});,"})
                <Phone className="w-5 h-5"/>;,"});,"})
                <span>Call +1 302 464 0950</span>;,"});,"})
              </a>;,"});,"})
            </div>;,"});,"})
          </div>;,"});,"})
        </div>)}"});,"})
    </nav>)};,"});,"})
export default Navigation;,"});,"})
}}}"});,"})
;,"});,"})
export { Navigation, Icon, Icon };,"});,"})
;,"});,"})
export { Navigation, Icon, Icon };,"});,"})
;,"});,"})
export { Navigation, Icon, Icon };,"});,"})
;,"});,"})
export { Navigation, Icon, Icon };,"});,"})
;,"});,"})
export { Navigation, Icon, Icon };,"});,"})
=======
<<<<<<< HEAD
 const: Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home,', href: '/,', icon: Globe, }, { name: 'Micro: SAAS Services,', href: '/micro: - saas - services,', icon: Zap, }, { name: 'Comprehensive: Services,', href: '/comprehensive: - services,', icon: Brain, }, { name: 'Pricing,', href: '/pricing,', icon: Building, }] const: serviceCategories = [ { name: 'AI: & Machine Learning,', services[ { name: 'AI: - Powered CRM,', href: '/comprehensive: - services#ai - powered - crm', }, { name: 'Quantum: Computing,', href: '/comprehensive: - services#quantum - computing - simulation', }, { name: 'Edge: AI Computing,', href: '/comprehensive: - services#edge - ai - computing', }] }, { name: 'Emerging: Technologies,', services[ { name: 'Blockchain: Solutions,', href: '/comprehensive: - services#blockchain - supply - chain', }, { name: 'AR: / VR Business,', href: '/comprehensive: - services#ar - vr - business - solutions', }, { name: 'IoT: Intelligence,', href: '/comprehensive: - services#iot - intelligence - hub', }] }, { name: 'Industry: Solutions,', services[ { name: 'Healthcare: IT,', href: '/comprehensive: - services#healthcare - it - solutions', }, { name: 'FinTech: Solutions,', href: '/comprehensive: - services#fintech - solutions - pro', }, { name: 'GreenTech: Analytics,', href: '/comprehensive: - services#greentech - analytics', }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px: - 6 lg:px: - 8'>' <div className='flex justify - between items - center h - 16'> ,{}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/> </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg: flex: lg:items: - center lg:space: - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.nam,e} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text: - zion - slate - light hover: text: - white hover:bg: - white / 10,'}`}>' <Icon className='w - 4 h - 4'/> <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () => setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text: - white hover:bg: - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/> <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : ,'}`}/> </button> ' {isServicesOpen: && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text: - white hover:bg: - white / 10 rounded - lg transition - colors' onClick={ () => setIsServicesOpen (false), }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex: items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg: - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/> <span > Contact Us</span> </a> </div> ,{}' <div className='lg: hidden'>' <button: onClick={ () => setIsOpen (!isOpen), } className='text - zion - slate - light hover: text: - white focus:outline: - none focus:text: - white'>' {isOpen ? <X className='w - 6 h - 6'/> : <Menu: className='w - 6 h - 6'/,>} </button> </div> </div> </div> {}' {isOpen && (<div className='lg: hidden'>' <div: className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.nam,e} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text: - zion - slate - light hover: text: - white hover:bg: - white / 10,'}`} onClick={ () => setIsOpen (false) }>' <Icon className='w - 5 h - 5'/> <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text: - white rounded transition - colors' onClick={ () => setIsOpen (false), }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex: items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/> <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>), } </nav>) } export default Navigation'` '';''`';import: React, { useState } from 'react''';';`;
=======
<<<<<<< HEAD
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [ { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'>' <div className='flex justify - between items - center h - 16'> {}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/> </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}>' <Icon className='w - 4 h - 4'/> <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () => setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/> <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/> </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () => setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/> <span > Contact Us</span> </a> </div> {}' <div className='lg:hidden'>' <button onClick={ () => setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/> : <Menu className='w - 6 h - 6'/>} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () => setIsOpen (false) }>' <Icon className='w - 5 h - 5'/> <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () => setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/> <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` '';''`'import React, { useState } from 'react'''
=======
<<<<<<< HEAD
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [ { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'>' <div className='flex justify - between items - center h - 16'> {}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/> </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}>' <Icon className='w - 4 h - 4'/> <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () => setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/> <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/> </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () => setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/> <span > Contact Us</span> </a> </div> {}' <div className='lg:hidden'>' <button onClick={ () => setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/> : <Menu className='w - 6 h - 6'/>} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () => setIsOpen (false) }>' <Icon className='w - 5 h - 5'/> <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () => setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/> <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` ';'`';import React, { useState } from 'react';
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
  Shield, 
  Globe, 
  Zap, 
  Building 
>>>>>>> main
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

<<<<<<< HEAD
  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Shield },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Computer Vision', href: '/ai-services#computer-vision' },
        { name: 'Natural Language Processing', href: '/ai-services#nlp' },
        { name: 'Predictive Analytics', href: '/ai-services#predictive-analytics' }
      ]
    },
    {
      name: 'Micro SaaS Solutions',
      services: [
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'Email Automation', href: '/micro-saas#email-automation' },
        { name: 'Survey Platform', href: '/micro-saas#survey-platform' },
        { name: 'Analytics Dashboard', href: '/micro-saas#analytics' }
      ]
    },
    {
      name: 'IT Services',
      services: [
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud Infrastructure', href: '/it-services#cloud' },
        { name: 'Cybersecurity', href: '/it-services#cybersecurity' },
        { name: 'DevOps', href: '/it-services#devops' }
=======
  const navigationItems = ['
    { name: 'Home', href: '/', icon: Globe },
    { name: 'Micro SAAS Services', href: '/micro-saas', icon: Zap },
    { name: 'Comprehensive Services', href: '/services', icon: Brain },
    { name: 'Pricing', href: '/pricing', icon: Building }
  ];

  const serviceCategories = [
    {'
      name: 'AI & Machine Learning',
<<<<<<< HEAD
      services: ['
        { nam,
    e: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },
        { name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },
        { name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' }
=======
      services: [
        { name: 'AI-Powered CRM', href: '/services#ai-powered-crm' },
        { name: 'Quantum Computing', href: '/services#quantum-computing' },
        { name: 'Edge AI Computing', href: '/services#edge-ai-computing' }
>>>>>>> main
      ]
    },
    {'
      name: 'Emerging Technologies',
<<<<<<< HEAD
      services: ['
        { nam,
    e: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },
        { name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },
        { name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' }
=======
      services: [
        { name: 'Blockchain Solutions', href: '/services#blockchain' },
        { name: 'AR/VR Business', href: '/services#ar-vr' },
        { name: 'IoT Intelligence', href: '/services#iot' }
>>>>>>> main
      ]
    },
    {'
      name: 'Industry Solutions',
<<<<<<< HEAD
      services: ['
        { nam,
    e: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },
        { name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },
        { name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' }
=======
      services: [
        { name: 'Healthcare IT', href: '/services#healthcare' },
        { name: 'FinTech Solutions', href: '/services#fintech' },
        { name: 'GreenTech Analytics', href: '/services#greentech' }
=======
<<<<<<< HEAD
import React, {useState } from 'react';
import {Link, useLocation } from 'react-router-dom';
import {Globe, Zap, Brain, Building, Shield, ChevronDown, Phone, Menu, X } from 'lucide-react';

const Navigation = () => {const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [{ name: 'Home', href: '/', icon: Globe },
    {name: 'Micro SAAS Services', href: '/micro-saas-services', icon: Zap },
    {name: 'Comprehensive Services', href: '/comprehensive-services', icon: Brain },
    {name: 'Pricing', href: '/pricing', icon: Building }
  ];

  const serviceCategories = [{name: 'AI & Machine Learning',
      services: [
        { name: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },
        {name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },
        {name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' }
      ]
    },
    {name: 'Emerging Technologies',
      services: [{ name: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },
        {name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },
        {name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' }
      ]
    },
    {name: 'Industry Solutions',
      services: [{ name: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },
        {name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },
        {name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' }
>>>>>>> main
>>>>>>> main
>>>>>>> main
      ]
    }
  ];

<<<<<<< HEAD
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                >
=======
<<<<<<< HEAD
  const isActive = (href) => {'
    if (href === '/') {'
=======
<<<<<<< HEAD
  return (
    <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
=======
  const isActive = (href) => {if (href === '/') {
>>>>>>> main
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

<<<<<<< HEAD
  return ('
    <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">"
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">"
        <div className="flex justify-between items-center h-16">"
          <div className="flex-shrink-0">"
            <Link to="/" className="flex items-center space-x-2">"
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">"
=======
  return (
    <nav className="bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
>>>>>>> main
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
>>>>>>> main
                <Brain className="w-5 h-5 text-white" />
              </div>"
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>
<<<<<<< HEAD
"
          <div className="hidden lg:flex l,
    g:items-center l,
    g:space-x-8">
=======

<<<<<<< HEAD
          {/* Desktop Navigation */}
=======
>>>>>>> main
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
>>>>>>> main
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
<<<<<<< HEAD
                <Link
                  key={item.name}
<<<<<<< HEAD
                  to={item.href}"
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${`
                    isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover:text-white hove,
    r:bg-white/10''
                  }`}
                >`
=======
                  to={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors text-zion-slate-light hover:text-white hover:bg-white/10"
                >
=======
                <Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${ isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover: text-white hover:bg-white/10' }`} >
>>>>>>> main
>>>>>>> main
>>>>>>> main
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
<<<<<<< HEAD

=======
<<<<<<< HEAD
"
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hove,
    r:bg-white/10 transition-colors"
              >"
=======

<<<<<<< HEAD
>>>>>>> main
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
<<<<<<< HEAD
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                <Shield className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => (
                        <div key={category.name} className="space-y-2">
                          <h3 className="text-sm font-semibold text-blue-600">{category.name}</h3>
                          <div className="space-y-1">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                onClick={() => setIsServicesOpen(false)}
=======
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors"
=======
            <div className="relative">
              <button onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover: text-white hover:bg-white/10 transition-colors"
>>>>>>> main
              >
>>>>>>> main
                <Shield className="w-4 h-4" />
                <span>Services</span>"
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (`
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50">"
                  <div className="p-4">"
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category) => ("
                        <div key={category.name} className="space-y-2">"
                          <h3 className="text-sm font-semibold text-zion-cyan">{category.name}</h3>"
                          <div className="space-y-1">
                            {category.services.map((service) => (
<<<<<<< HEAD
                              <Link
                                key={service.name}
                                to={service.href}"
                                className="block px-3 py-2 text-sm text-zion-slate-light hover:text-white hove,
    r:bg-white/10 rounded-lg transition-colors"
                                onClick={() => setIsServicesOpen(false)}
=======
                              <Link key={service.name} to={service.href} className="block px-3 py-2 text-sm text-zion-slate-light hover: text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsServicesOpen(false)}
>>>>>>> main
>>>>>>> main
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

<<<<<<< HEAD
            {/* Contact Button */}
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
=======
<<<<<<< HEAD
            <a"
              href="tel: +13024640950""
              className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hove,
    r:bg-zion-cyan-light transition-colors"
            >"
=======
<<<<<<< HEAD
            {/* Contact Button */}
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors"
            >
=======
            <a href="tel: +13024640950" className="flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
"
          <div className="l,
    g:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}"
              className="text-zion-slate-light hover: text-white focu,
    s:outline-none focu,
    s:text-white"
            >"
=======

<<<<<<< HEAD
>>>>>>> main
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
=======
              className="text-zion-slate-light hover:text-white focus:outline-none focus:text-white"
=======
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}
              className="text-zion-slate-light hover: text-white focus:outline-none focus:text-white"
>>>>>>> main
            >
>>>>>>> main
>>>>>>> main
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
=======
<<<<<<< HEAD
      {isOpen && ("
        <div className="lg:hidden">"
=======
<<<<<<< HEAD
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
=======
      {isOpen && (
        <div className="lg: hidden">
>>>>>>> main
>>>>>>> main
          <div className="px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
<<<<<<< HEAD
                <Link
                  key={item.name}
<<<<<<< HEAD
                  to={item.href}"
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${`
                    isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover:text-white hove,
    r:bg-white/10''
                  }`}
                  onClick={() => setIsOpen(false)}
                >`
=======
                  to={item.href}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors text-zion-slate-light hover:text-white hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
=======
                <Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${ isActive(item.href) ? 'text-zion-cyan bg-zion-cyan/10' : 'text-zion-slate-light hover: text-white hover:bg-white/10' }`} onClick={() => setIsOpen(false)}
>>>>>>> main
                >
>>>>>>> main
>>>>>>> main
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
<<<<<<< HEAD

            {/* Mobile Services */}
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-blue-600 mb-2">Service Categories</h3>
              <div className="space-y-2">
                {serviceCategories.map((category) => (
                  <div key={category.name} className="ml-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-1">{category.name}</h4>
                    <div className="space-y-1">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block px-3 py-1 text-sm text-gray-700 hover:text-blue-600 rounded transition-colors"
                          onClick={() => setIsOpen(false)}
=======
<<<<<<< HEAD
"
            <div className="px-3 py-2">"
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>"
=======

<<<<<<< HEAD
            {/* Mobile Services */}
=======
>>>>>>> main
            <div className="px-3 py-2">
              <h3 className="text-sm font-semibold text-zion-cyan mb-2">Service Categories</h3>
>>>>>>> main
              <div className="space-y-2">
                {serviceCategories.map((category) => ("
                  <div key={category.name} className="ml-4">"
                    <h4 className="text-sm font-medium text-white mb-1">{category.name}</h4>"
                    <div className="space-y-1">
                      {category.services.map((service) => (
<<<<<<< HEAD
                        <Link
                          key={service.name}
                          to={service.href}"
                          className="block px-3 py-1 text-sm text-zion-slate-light hover:text-white rounded transition-colors"
                          onClick={() => setIsOpen(false)}
=======
                        <Link key={service.name} to={service.href} className="block px-3 py-1 text-sm text-zion-slate-light hover: text-white rounded transition-colors" onClick={() => setIsOpen(false)}
>>>>>>> main
>>>>>>> main
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
<<<<<<< HEAD

            {/* Mobile Contact */}
            <div className="px-3 py-2 border-t border-gray-200">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 px-3 py-2 bg-blue-600 text-white rounded-lg font-medium"
              >
=======
<<<<<<< HEAD
"
=======

<<<<<<< HEAD
            {/* Mobile Contact */}
>>>>>>> main
            <div className="px-3 py-2 border-t border-zion-blue-light/30">
              <a"
                href="tel:+13024640950""
                className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium"
<<<<<<< HEAD
              >"
=======
              >
=======
            <div className="px-3 py-2 border-t border-zion-blue-light/30">
              <a href="tel: +13024640950" className="flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium" >
>>>>>>> main
>>>>>>> main
>>>>>>> main
                <Phone className="w-5 h-5" />
                <span>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

<<<<<<< HEAD
export default Navigation;
=======
<<<<<<< HEAD
export default Navigation;"
=======
export default Navigation;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
 const Navigation = () => {} const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const;const navigationItems = [&apos; { name: &apos;Home&apos;, href: &apos;/&apos;, icon: Globe }, { name: &apos;Micro SAAS Services&apos;, href: &apos;/micro - saas - services&apos;, icon: Zap }, { name: &apos;Comprehensive Services&apos;, href: &apos;/comprehensive - services&apos;, icon: Brain }, { name: &apos;Pricing&apos;, href: &apos;/pricing&apos;, icon: Building }]&apos;&apos; const serviceCategories = [ { name: &apos;AI & Machine Learning&apos;, services[ { name: &apos;AI - Powered CRM&apos;, href: &apos;/comprehensive - services#ai - powered - crm&apos; }, { name: &apos;Quantum Computing&apos;, href: &apos;/comprehensive - services#quantum - computing - simulation&apos; }, { name: &apos;Edge AI Computing&apos;, href: &apos;/comprehensive - services#edge - ai - computing&apos; }] }, { name: &apos;Emerging Technologies&apos;, services[ { name: &apos;Blockchain Solutions&apos;, href: &apos;/comprehensive - services#blockchain - supply - chain&apos; }, { name: &apos;AR / VR Business&apos;, href: &apos;/comprehensive - services#ar - vr - business - solutions&apos; }, { name: &apos;IoT Intelligence&apos;, href: &apos;/comprehensive - services#iot - intelligence - hub&apos; }] }, { name: &apos;Industry Solutions&apos;, services[ { name: &apos;Healthcare IT&apos;, href: &apos;/comprehensive - services#healthcare - it - solutions&apos; }, { name: &apos;FinTech Solutions&apos;, href: &apos;/comprehensive - services#fintech - solutions - pro&apos; }, { name: &apos;GreenTech Analytics&apos;, href: &apos;/comprehensive - services#greentech - analytics&apos; }] } ]&apos; const isActive = (href) => { if (href === &apos;/&apos;) { return location.pathname === &apos;/&apos;} return location.pathname.startsWith (href) } return (&apos;&apos;<nav className=&apos;bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50&apos;>'&apos;&apos; <div className=&apos;container mx - auto px - 4 sm: px - 6 l,g:px - 8&apos;>'&apos;&apos; <div className=&apos;flex justify - between items - center h - 16&apos;> {}&apos;&apos;' <div className=&apos;flex - shrink - 0&apos;>'&apos;&apos; <Link to=&apos;/&apos; className=&apos;flex items - center space - x-2&apos;>'&apos;&apos; <div className=&apos;w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center&apos;>'&apos;&apos; <Brain className=&apos;w - 5 h - 5 text - white&apos;/>&apos; </div>&apos;&apos;' <span className=&apos;text - xl font - bold text - white&apos;>Zion Tech Group&apos;</span> </Link> </div> {}&apos;&apos;' <div className=&apos;hidden lg:flex lg:items - center l,g:space - x-8&apos;> {navigationItems.map ( (item) => {&apos;}} const Icon = item.icon return (<;<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? &apos;text - zion - cyan bg - zion - cyan / 10&apos;` : &apos;text - zion - slate - light hover:text - white hove,r:bg - white / 10&apos;}`}>&apos;&apos;' <Icon className=&apos;w - 4 h - 4&apos;/>&apos; <span>{item.name}</span> </Link>) })} {}&apos;&apos;' <div className=&apos;relative&apos;>'&apos;&apos; <button onClick={ () => setIsServicesOpen (!isServicesOpen) } className=&apos;flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hove,r:bg - white / 10 transition - colors&apos;>'&apos;&apos; <Shield className=&apos;w - 4 h - 4&apos;/>&apos; <span > Services</span>&apos;`&apos;' <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? &apos;rotate - 180&apos; : &apos;}`}/>&apos; </button> &apos; {isServicesOpen && (&apos;}<div className=&apos;absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50&apos;>'&apos;&apos; <div className=&apos;p - 4&apos;>'&apos;&apos; <div className=&apos;grid grid - cols - 1 gap - 4&apos;>&apos; {serviceCategories.map ( (category) => (&apos;}&apos;<div key={category.name} className=&apos;space - y-2&apos;>'&apos;&apos; <h3 className=&apos;text - sm font - semibold text - zion - cyan&apos;>{category.name}&apos;</h3>&apos;&apos;' <div className=&apos;space - y-1&apos;>&apos; {category.services.map ( (service) => (&apos;}&apos;<Link key={service.name} to={service.href} className=&apos;block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hove,r:bg - white / 10 rounded - lg transition - colors&apos; onClick={ () => setIsServicesOpen (false) }> {service.name}&apos; </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}&apos;&apos;' <a href=&apos;tel: +13024640950&apos; className=&apos;flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hove,r:bg - zion - cyan - light transition - colors&apos;>'&apos;&apos; <Phone className=&apos;w - 4 h - 4&apos;/>&apos; <span > Contact Us</span> </a> </div> {}&apos;&apos;' <div className=&apos;lg:hidden&apos;>'&apos;&apos; <button onClick={ () => setIsOpen (!isOpen) } className=&apos;text - zion - slate - light hover: text - white focus:outline - none focu,s:text - white&apos;>&apos; {isOpen ?&apos;}&apos; <X className=&apos;w - 6 h - 6&apos;/> :&apos; <Menu className=&apos;w - 6 h - 6&apos;/>}&apos; </button> </div> </div> </div> {}&apos; {isOpen && (&apos;}<div className=&apos;lg:hidden&apos;>'&apos;&apos; <div className=&apos;px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30&apos;> {navigationItems.map ( (item) => {&apos;}} const Icon = item.icon` return (<;<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? &apos;text - zion - cyan bg - zion - cyan / 10&apos;` : &apos;text - zion - slate - light hover:text - white hove,r:bg - white / 10&apos;}`} onClick={ () => setIsOpen (false) }>&apos;&apos;' <Icon className=&apos;w - 5 h - 5&apos;/>&apos; <span>{item.name}</span> </Link>) })} {}&apos;&apos;' <div className=&apos;px - 3 py - 2&apos;>'&apos;&apos; <h3 className=&apos;text - sm font - semibold text - zion - cyan mb - 2&apos;>Service Categories&apos;</h3>&apos;&apos;' <div className=&apos;space - y-2&apos;>&apos; {serviceCategories.map ( (category) => (&apos;}&apos;<div key={category.name} className=&apos;ml - 4&apos;>'&apos;&apos; <h4 className=&apos;text - sm font - medium text - white mb - 1&apos;>{category.name}&apos;</h4>&apos;&apos;' <div className=&apos;space - y-1&apos;>&apos; {category.services.map ( (service) => (&apos;}&apos;<Link key={service.name} to={service.href} className=&apos;block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors&apos; onClick={ () => setIsOpen (false) }> {service.name}&apos; </Link>) ) } </div> </div>) ) } </div> </div> {}&apos;&apos;' <div className=&apos;px - 3 py - 2 border - t border - zion - blue - light / 30&apos;>'&apos;&apos; <a href=&apos;tel: +13024640950&apos; className=&apos;flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium&apos;>'&apos;&apos; <Phone className=&apos;w - 5 h - 5&apos;/>&apos; <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export;export default Navigation&apos;` &apos;';&apos;&apos;`';import React, { useState } from &apos;
import Link from &apos;next/link';react&apos;&apos;
;&apos;'
=======
<<<<<<< HEAD
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [ { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'>' <div className='flex justify - between items - center h - 16'> {}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/" > </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}" >' <Icon className='w - 4 h - 4'/" > <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () =" > setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/" > <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/" > </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () =" > setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/" > <span > Contact Us</span> </a> </div> {}' <div className='lg:hidden'>' <button onClick={ () =" > setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/" > : <Menu className='w - 6 h - 6'/" >} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () =" > setIsOpen (false) }>' <Icon className='w - 5 h - 5'/" > <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () =" > setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/" > <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` '';''`';import React, { useState } from 'react'''"
;"`"
=======
<<<<<<< HEAD
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [ { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'>' <div className='flex justify - between items - center h - 16'> {}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/> </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}>' <Icon className='w - 4 h - 4'/> <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () => setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/> <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/> </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () => setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/> <span > Contact Us</span> </a> </div> {}' <div className='lg:hidden'>' <button onClick={ () => setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/> : <Menu className='w - 6 h - 6'/>} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () => setIsOpen (false) }>' <Icon className='w - 5 h - 5'/> <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () => setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/> <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` '';''`';import React, { useState } from 'react'''
=======
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [
  { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'>' <div className='flex justify - between items - center h - 16'> {}' <div className='flex - shrink - 0'>' <Link to='/' className='flex items - center space - x-2'>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'>' <Brain className='w - 5 h - 5 text - white'/" > </div>' <span className='text - xl font - bold text - white'>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}" >' <Icon className='w - 4 h - 4'/" > <span>{item.name}</span> </Link>) })} {}' <div className='relative'>' <button onClick={ () =" > setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/" > <span > Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/" > </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'>' <div className='p - 4'>' <div className='grid grid - cols - 1 gap - 4'>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'>' <h3 className='text - sm font - semibold text - zion - cyan'>{category.name}</h3>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () =" > setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/" > <span > Contact Us</span> </a> </div> {}' <div className='lg:hidden'>' <button onClick={ () =" > setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/" > : <Menu className='w - 6 h - 6'/" >} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () =" > setIsOpen (false) }>' <Icon className='w - 5 h - 5'/" > <span>{item.name}</span> </Link>) })} {}' <div className='px - 3 py - 2'>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'>Service Categories</h3>' <div className='space - y-2'>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'>' <h4 className='text - sm font - medium text - white mb - 1'>{category.name}</h4>' <div className='space - y-1'>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () =" > setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/" > <span > Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` ''`';import React, { useState }  from 'react`
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
