
  /' }, { name: 'Services, href:',
  /services', dropdown: [ { nam,
    e:;
  'AI Solutions, href:;
  '/ai-services', icon: Brain, description:,
  Cutting-edge AI services' }, { name: 'Cloud & DevOps', href:;
  '/services/cloud-devops', icon: Cloud, description:,
  Scalable infrastructure' }, { name: 'Cybersecurity', href:
  '/services/ai-compliance-copilot', icon: Shield, description:,
  Advanced security' }, { name: 'Edge & IoT', href:'
  '/services/edge-computing-platform', icon: Zap, description:,
  IoT solutions' }, { name: 'Digital Transformation', href:'
  '/it-services', icon: Users, description:,
  Business transformation' } ] }, { name: 'About, href:',

  rotate-180': ' }`} /> </button> <AnimatePresence> {activeDropdown === item.name && ( <motion.div' initial={{ opacity: 0, height: 0 }}'; animate={{ opacity: 1, height: 'auto;
  ' }}'; exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}' className='ml-4 mt-2 space-y-1' > {item.dropdown.map((dropdownItem) => (' <Link'; key={dropdownItem.name}'; to={dropdownItem.href} onClick={closeMobileMenu}' className='flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover: text-cyan-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200' >''' <dropdownItem.icon className='w-4 h-4 text-cyan-400' /> <span>{dropdownItem.name}</span> </Link> ))} </motion.div> )} </AnimatePresence> </div> ) : ( <Link to={item.href} onClick={closeMobileMenu} className={`block px-3 py-2 rounded-lg transition-colors duration-200 ${ location.pathname === item.href ?,
  text-cyan-400 bg-cyan-400/10;



