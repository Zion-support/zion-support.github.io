import React from 'react';'
 const Navigation = () => { const [isOpen, setIsOpen] = useState (false)  const [isServicesOpen, setIsServicesOpen] = useState (false)  const location = useLocation ()  const navigationItems = [' { name: 'Home', href: '/', icon: Globe }, { name: 'Micro SAAS Services', href: '/micro - saas - services', icon: Zap }, { name: 'Comprehensive Services', href: '/comprehensive - services', icon: Brain }, { name: 'Pricing', href: '/pricing', icon: Building }] const serviceCategories = [ { name: 'AI & Machine Learning', services[ { name: 'AI - Powered CRM', href: '/comprehensive - services#ai - powered - crm' }, { name: 'Quantum Computing', href: '/comprehensive - services#quantum - computing - simulation' }, { name: 'Edge AI Computing', href: '/comprehensive - services#edge - ai - computing' }] }, { name: 'Emerging Technologies', services[ { name: 'Blockchain Solutions', href: '/comprehensive - services#blockchain - supply - chain' }, { name: 'AR / VR Business', href: '/comprehensive - services#ar - vr - business - solutions' }, { name: 'IoT Intelligence', href: '/comprehensive - services#iot - intelligence - hub' }] }, { name: 'Industry Solutions', services[ { name: 'Healthcare IT', href: '/comprehensive - services#healthcare - it - solutions' }, { name: 'FinTech Solutions', href: '/comprehensive - services#fintech - solutions - pro' }, { name: 'GreenTech Analytics', href: '/comprehensive - services#greentech - analytics' }] } ] const isActive = (href) => { if (href === '/') { return location.pathname === '/'} return location.pathname.startsWith (href) } return (<nav className='bg - zion - blue - dark / 95 backdrop - blur - sm border - b border - zion - blue - light / 30 fixed top - 0 left - 0 right - 0 z - 50'></na>' <div className='container mx - auto px - 4 sm: px - 6 lg:px - 8'></di>' <div className='flex justify - between items - center h - 16'></di> {}' <div className='flex - shrink - 0'></di>' <Link to='/' className='flex items - center space - x-2'></Lin>' <div className='w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - lg flex items - center justify - center'></di>' <Brain className='w - 5 h - 5 text - white'/" ></Brain> </div>' <span className='text - xl font - bold text - white'></spa>Zion Tech Group</span> </Link> </div> {}' <div className='hidden lg:flex lg:items - center lg:space - x-8'></di> {navigationItems.map ( (item) => { const Icon = item.icon return (<Link key={item.name} to={item.href} className={`flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`}" ></Lin>' <Icon className='w - 4 h - 4'/" ></Icon> <span></spa>{item.name}</span> </Link>) }) } {}' <div className='relative'></di>' <button onClick={ () =" ></butto> setIsServicesOpen (!isServicesOpen) } className='flex items - center space - x-1 px - 3 py - 2 rounded - lg text - sm font - medium text - zion - slate - light hover: text - white hover:bg - white / 10 transition - colors'>' <Shield className='w - 4 h - 4'/" ></Shield> <span ></spa> Services</span>'` <ChevronDown className={`w - 4 h - 4 transition - transform ${isServicesOpen ? 'rotate - 180' : '}`}/" ></ChevronDown> </button> ' {isServicesOpen && (<div className='absolute top - full left - 0 mt - 2 w - 80 bg - zion - blue - dark border border - zion - blue - light rounded - xl shadow - 2xl z - 50'></di>' <div className='p - 4'></di>' <div className='grid grid - cols - 1 gap - 4'></di>' {serviceCategories.map ( (category) => (<div key={category.name} className='space - y-2'></di>' <h3 className='text - sm font - semibold text - zion - cyan'></h>{category.name}</h3>' <div className='space - y-1'></di>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 2 text - sm text - zion - slate - light hover: text - white hover:bg - white / 10 rounded - lg transition - colors' onClick={ () =" ></Lin> setIsServicesOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> </div>) } </div> {}' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 4 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium hover:bg - zion - cyan - light transition - colors'>' <Phone className='w - 4 h - 4'/" ></Phone> <span ></spa> Contact Us</span> </a> </div> {}' <div className='lg:hidden'></di>' <button onClick={ () =" ></butto> setIsOpen (!isOpen) } className='text - zion - slate - light hover: text - white focus:outline - none focus:text - white'>' {isOpen ? <X className='w - 6 h - 6'/" ></X> : <Menu className='w - 6 h - 6'/" ></Menu>} </button> </div> </div> </div> {}' {isOpen && (<div className='lg:hidden'></di>' <div className='px - 2 pt - 2 pb - 3 space - y-1 bg - zion - blue - dark border - t border - zion - blue - light / 30'></di> {navigationItems.map ( (item) => { const Icon = item.icon` return (<Link key={item.name} to={item.href} className={`flex items - center space - x-2 px - 3 py - 2 rounded - lg text - base font - medium transition - colors ${isActive (item.href) ? 'text - zion - cyan bg - zion - cyan / 10'` : 'text - zion - slate - light hover:text - white hover:bg - white / 10'}`} onClick={ () =" ></Lin> setIsOpen (false) }>' <Icon className='w - 5 h - 5'/" ></Icon> <span></spa>{item.name}</span> </Link>) }) } {}' <div className='px - 3 py - 2'></di>' <h3 className='text - sm font - semibold text - zion - cyan mb - 2'></h>Service Categories</h3>' <div className='space - y-2'></di>' {serviceCategories.map ( (category) => (<div key={category.name} className='ml - 4'></di>' <h4 className='text - sm font - medium text - white mb - 1'></h>{category.name}</h4>' <div className='space - y-1'></di>' {category.services.map ( (service) => (<Link key={service.name} to={service.href} className='block px - 3 py - 1 text - sm text - zion - slate - light hover: text - white rounded transition - colors' onClick={ () =" ></Lin> setIsOpen (false) }> {service.name} </Link>) ) } </div> </div>) ) } </div> </div> {}' <div className='px - 3 py - 2 border - t border - zion - blue - light / 30'></di>' <a href='tel: +13024640950' className='flex items - center space - x-2 px - 3 py - 2 bg - zion - cyan text - zion - blue - dark rounded - lg font - medium'>' <Phone className='w - 5 h - 5'/" ></Phone> <span ></spa> Call + 1 302 464 0950</span> </a> </div> </div> </div>) } </nav>) } export default Navigation'` ;`';import React, { useState } from 'react';'
import { Link, useLocation } from 'react';'
import { Menu, X, Phone, Globe, Brain, Zap, Shield, Building, ChevronDown } from 'lucide-react';
const Navigation = () => {}"
    const [isOpen, setIsOpen] = useState(false)"'"
    const [isServicesOpen, setIsServicesOpen] = useState(false)"'
    const location = useLocation()'
    const navigationItems = [''
        { name: 'Home', href: '/', icon: Globe },'
        { name: 'Micro SAAS Services', href: '/micro-saas-services', icon: Zap },'
        { name: 'Comprehensive Services', href: '/comprehensive-services', icon: Brain },'
        { name: 'Pricing', href: '/pricing', icon: Building }
    ]"
    const serviceCategories = []"'"
        {}"'
'
            name: 'AI & Machine Learning', services['
                { name: 'AI-Powered CRM', href: '/comprehensive-services#ai-powered-crm' },'
                { name: 'Quantum Computing', href: '/comprehensive-services#quantum-computing-simulation' },'
                { name: 'Edge AI Computing', href: '/comprehensive-services#edge-ai-computing' }"
            ],"'"
}, {}"'
'
            name: 'Emerging Technologies', services['
                { name: 'Blockchain Solutions', href: '/comprehensive-services#blockchain-supply-chain' },'
                { name: 'AR/VR Business', href: '/comprehensive-services#ar-vr-business-solutions' },'
                { name: 'IoT Intelligence', href: '/comprehensive-services#iot-intelligence-hub' }"
            ],"'"
}, {}"'
'
            name: 'Industry Solutions', services['
                { name: 'Healthcare IT', href: '/comprehensive-services#healthcare-it-solutions' },'
                { name: 'FinTech Solutions', href: '/comprehensive-services#fintech-solutions-pro' },'
                { name: 'GreenTech Analytics', href: '/comprehensive-services#greentech-analytics' }
            ],
}"
    ]"'"
    const isActive = (href) => {}"'"
"'"
        if (href === '/') {}"'
'
'
'"
            return location.pathname === '/'}"'"
        return location.pathname.startsWith(href)}"''
    return (<nav className='bg-zion-blue-dark/95 backdrop-blur-sm border-b border-zion-blue-light/30 fixed top-0 left-0 right-0 z-50'></nav>''
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'></div>''
        <div className='flex justify-between items-center h-16'></div>'
          {/* Logo */}''
          <div className='flex-shrink-0'></div>''
            <Link to='/' className='flex items-center space-x-2'></Link>''"
              <div className='w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center'></div>'"'"
                <Brain className='w-5 h-5 text-white'/" ></Brain>'
              </div>''
              <span className='text-xl font-bold text-white'></spa>Zion Tech Group</span>"
            </Link>"'"
          </div>"'
'
          {/* Desktop Navigation */}''
          <div className='hidden lg:flex lg:items-center lg:space-x-8'></div>"
            {navigationItems.map((item) => {}"'"
            const Icon = item.icon"`'"'"
            return (<Link key={item.name} to={item.href} className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(item.href)'`"`'"'"
                    ? 'text-zion-cyan bg-zion-cyan/10``"`'"'"
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`}" ></Link>'"'"
                  <Icon className='w-4 h-4'/" ></Icon>"
                  <span></spa>{item.name}</span>"'"
                </Link>) }) }"'
'
            {/* Services Dropdown */}''"
            <div className='relative'></div>'"'"
              <button onClick={() =" ></button> setIsServicesOpen(!isServicesOpen)} className='flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium text-zion-slate-light hover:text-white hover:bg-white/10 transition-colors'>`'"'"
                <Shield className='w-4 h-4'/" ></Shield>'`"`'"'"
                <span></spa>Services</span>'`'`"`'"'"
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : }`}/" ></ChevronDown>"'
              </button>'
''
              {isServicesOpen && (<div className='absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-blue-light rounded-xl shadow-2xl z-50'></div>''
                  <div className='p-4'></div>''
                    <div className='grid grid-cols-1 gap-4'></div>''
                      {serviceCategories.map((category) => (<div key={category.name} className='space-y-2'></div>''
                          <h3 className='text-sm font-semibold text-zion-cyan'></h>{category.name}</h3>''"
                          <div className='space-y-1'></div>'"'"
                            {category.services.map((service) => (<Link key={service.name} to={service.href} className='block px-3 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-lg transition-colors' onClick={() =" ></Link> setIsServicesOpen(false)}>
                                {service.name}
                              </Link>) ) }
                          </div>
                        </div>) ) }
                    </div>
                  </div>"
                </div>) }"'"
            </div>"'
'
            {/* Contact Button */}''"
            <a href='tel:+13024640950' className='flex items-center space-x-2 px-4 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium hover:bg-zion-cyan-light transition-colors'></a>'"'"
              <Phone className='w-4 h-4'/" ></Phone>
              <span></spa>Contact Us</span>"
            </a>"'"
          </div>"'
'
          {/* Mobile menu button */}''"
          <div className='lg:hidden'></div>'"'"
            <button onClick={() =" ></button> setIsOpen(!isOpen)} className='text-zion-slate-light hover:text-white focus:outline-none focus:text-white'>'"'"
              {isOpen ? <X className='w-6 h-6'/" ></X> : <Menu className='w-6 h-6'/" ></Menu>}
            </button>
          </div>"
        </div>"'"
      </div>"'
'
      {/* Mobile Navigation */}''
      {isOpen && (<div className='lg:hidden'></div>''
          <div className='px-2 pt-2 pb-3 space-y-1 bg-zion-blue-dark border-t border-zion-blue-light/30'></div>
            {navigationItems.map((item) => {}`"
`"'"
                const Icon = item.icon`"`'"'"
                return (<Link key={item.name} to={item.href} className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${isActive(item.href)'`"`'"'"
                        ? 'text-zion-cyan bg-zion-cyan/10``"`'"'"
                        : 'text-zion-slate-light hover:text-white hover:bg-white/10'}`} onClick={() =" ></Link> setIsOpen(false)}>'"'"
                  <Icon className='w-5 h-5'/" ></Icon>"
                  <span></spa>{item.name}</span>"'"
                </Link>) }) }"'
'
            {/* Mobile Services */}''
            <div className='px-3 py-2'></div>''
              <h3 className='text-sm font-semibold text-zion-cyan mb-2'></h>Service Categories</h3>''
              <div className='space-y-2'></div>''
                {serviceCategories.map((category) => (<div key={category.name} className='ml-4'></div>''
                    <h4 className='text-sm font-medium text-white mb-1'></h>{category.name}</h4>''"
                    <div className='space-y-1'></div>'"'"
                      {category.services.map((service) => (<Link key={service.name} to={service.href} className='block px-3 py-1 text-sm text-zion-slate-light hover:text-white rounded transition-colors' onClick={() =" ></Link> setIsOpen(false)}>
                          {service.name}
                        </Link>) ) }
                    </div>
                  </div>) ) }"
              </div>"'"
            </div>"'
'
            {/* Mobile Contact */}''
            <div className='px-3 py-2 border-t border-zion-blue-light/30'></div>''"
              <a href='tel:+13024640950' className='flex items-center space-x-2 px-3 py-2 bg-zion-cyan text-zion-blue-dark rounded-lg font-medium'></a>'"'"
                <Phone className='w-5 h-5"/" ></Phone>
                <span></spa>Call +1 302 464 0950</span>
              </a>
            </div>
          </div>
        </div>)}
    </nav>)}
export default Navigation

export { Navigation, Icon, Icon }

export { Navigation, Icon, Icon }

export { Navigation, Icon, Icon }

export { Navigation, Icon, Icon }
"
export { Navigation, Icon, Icon };"'"
;"`'"'"