window.addEventListener ('scroll', handleScroll)
return () => window.removeEventListener ('scroll', handleScroll) 
}, [])
const navigationItems = [ {
  name: 'Home', href: '/', icon: null 
}
{
  name: 'AI Services', href: '#', icon: Brain, description: 'Cutting-edge AI solutions', dropdown: [ {
  name: 'AI Agent Orchestrator', href: '/ai-agents', icon: Bot, description: 'Multi-agent workflow automation', price: '$2, 999/month' 
}
{
  name: 'AI Cybersecurity', href: '/security', icon: Shield, description: 'AI-powered threat detection', price: '$4, 999/month' 
}
{
  name: 'AI Healthcare Analytics', href: '/ai-data-analytics', icon: Dna, description: 'Patient outcome prediction', price: '$3, 999/month' 
}
{
  name: 'AI Supply Chain', href: '/quantum-logistics', icon: Package, description: 'End-to-end optimization', price: '$2, 499/month' 
}
{
  name: 'AI Financial Risk', href: '/ai-financial-risk', icon: DollarSign, description: 'Advanced risk management', price: '$5, 999/month' 
}] 
}
                        animate={{ opacity: 1, y: 0, scale: 1 }
} />;
                        <div className="p-4" />;"
                          <div className="text-sm text-gray-400 mb-3" />{item.description}</div>;"
                          <div className="space-y-2" />;
                            {item.dropdown.map((dropdownItem) => (<Link;}
                  </Link />;}
                )}{/* Dropdown Menu */}
                {item.dropdown && (<AnimatePresence />;
                    {activeDropdown === item.name && (<motion.div;}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }
}
{
  name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', icon: Lock, description: 'Future-proof encryption', price: '$8, 999/month' 
}
{
  name: 'Quantum Drug Discovery', href: '/biotech-ai', icon: Dna, description: 'Accelerated drug development', price: '$12, 999/month' 
}
                          </div>;
                          <div className='space-y-2' />;
                            {item.dropdown.map(dropdownItem => (<Link;}
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                className='flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group' />

                                <div className='w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200' />;
                                  <dropdownItem.icon className='w-5 h-5 text-cyan-400' />;
                                </div>;
                                <div className='flex-1' />;
                                  <div className='text-white font-medium group-hover:text-cyan-400 transition-colors duration-200' />;
                                    {dropdownItem.name}
                                  </div>;
                                  <div className='text-sm text-gray-400' />;
                                    {dropdownItem.description}                                  </div>;
                                </div>;
                                <div className='text-sm font-semibold text-cyan-400' />;
                                  {dropdownItem.price}

                                </div>
                              </Link>

                            ))}
                          </div>;
                        </div>;
                      </motion && motion.div>;
                    )}
                  </AnimatePresence>;
                )}
              </div>;
            ))}

          {/* Contact Info & CTA */}

<div className='hidden lg: flex items-center space-x-6' />
            <div className='flex items-center space-x-4 text-sm text-gray-300' />
              <a;
              </a />
              <a;
          </div />

          {/* Contact Info & CTA */}"
          <div className="hidden lg:flex items-center space-x-6" />"
            <div className="flex items-center space-x-4 text-sm text-gray-300" />"
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200" />"
                <Phone className="w-4 h-4" />"
                <span className="hidden xl:inline" />{contactInfo.mobile}</span>
              </a>

            </div>
            <motion.a;
href='/contact'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300'
             />
              Get Started;
            </motion.a>
          </div>
          {/* Mobile Menu Button */}

<div className='lg:hidden' />
            <button;
onClick={() = /> setIsOpen(!isOpen}
}
{
  name: 'Quantum IoT Platform', href: '/quantum-iot', icon: Wifi, description: 'Quantum-secured IoT', price: '$4, 999/month' 
}] 
}
{
  name: 'Space Technology', href: '#', icon: Rocket, description: 'Space mission management', dropdown: [ {
  name: 'Space Mission Control', href: '/space-technology', icon: Rocket, description: 'Complete mission management', price: '$25, 999/month' 
}
{
  name: 'Space Debris Cleanup', href: '/space-technology', icon: Package, description: 'AI-powered debris removal', price: '$35, 999/month' 
}] 
}
{
  name: 'Enterprise IT', href: '#', icon: Building2, description: 'Enterprise solutions', dropdown: [ {
  name: 'Cloud Migration', href: '/cloud-platform', icon: Cloud, description: 'Zero-downtime migration', price: '$8, 999/month' 
}
{
  name: 'DevOps Automation', href: '/automation', icon: Code, description: 'AI-powered automation', price: '$5, 999/month' 
}
{
  name: 'Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'AI-powered insights', price: '$6, 999/month' 
}
{
  name: 'Security Operations', href: '/security', icon: Shield, description: '24/7 security monitoring', price: '$12, 999/month' 
}
{
  name: 'API Management', href: '/api-observability', icon: Code, description: 'Complete lifecycle management', price: '$4, 999/month' 
}
{
  name: 'Digital Transformation', href: '/solutions', icon: Zap, description: 'AI-powered transformation', price: '$15, 999/month' 
}
{
  name: 'IoT Management', href: '/it-asset-discovery-agent', icon: Wifi, description: 'AI-powered device management', price: '$7, 999/month' 
}] 
}
return (<nav className= {
  `fixed top-0 left-0 right-0 z-50 transition-all duration-300 $ {
  isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' > <Link href="/" className="flex items-center space-x-3 group" > <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300" > <Zap className="w-6 h-6 text-white" /> </div> <div className="hidden sm:block" > <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent" > Zion Tech Group </div> <div className="text-xs text-gray-400" >Revolutionary Technology</div> </div> </a> </motion.div> <button onClick= {
  () => setActiveDropdown (activeDropdown === item.name ? null : item.name) 
}className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2" >) 
}{
  /* Dropdown Menu */ 
}{
  item.dropdown && (<AnimatePresence> {
  activeDropdown === item.name && (<motion.div > <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200" > <dropdownItem.icon className="w-5 h-5 text-cyan-400" /> </div> </div> </a>) ) 
}</div> </div> </motion.div>) 
}</AnimatePresence>) 
}</div>) ) 
}</div> </a> </div> <motion.a > Get Started </motion.a> </div> </button> </div> </div> </div> {
  /* Mobile Menu */ 
}<AnimatePresence> <div> <button onClick= {
  () => setActiveDropdown (activeDropdown === item.name ? null : item.name) 
}className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3" > </div> <ChevronDown className= {
  `w-4 h-4 transition-transform duration-200 $ {
  activeDropdown === item.name ? 'rotate-180' : '' 
}` 
}/> </button>) ) 
}</div>) 
}</div>) 
}</div>) ) 
}</div> </div> <motion.a > Get Started </motion.a> </div> </div> </motion.div>) 
}</AnimatePresence> </nav>) 
}
export default UltraAdvancedNavigation