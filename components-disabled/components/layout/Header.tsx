import React from 'react';'
{/* Mobile Menu Button */} <div className="text-left">"</div>"text-left":text-blue-600 transition-colors duration-200""
</div></div>
</header> ) }, const Header = () => {} const [isMenuOpen, setIsMenuOpen] = useState(false); const [isServicesOpen, setIsServicesOpen] = useState(false); const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); const router = useRouter(); const navigation = [; {} ": 'Services',' "href"hasDropdown": true, ": [' {"name"href": '/ai-services'} ": Brain },' {"name"href": '/it-services'} ": Server },' {"name"href": '/micro-saas'} ": Zap },' {"name"href": '/security'} ": Shield },' {"name"href": '/cloud-solutions'} ": Cloud },' {"name"href": '/database-solutions'} ": Database }' ] }, {}' "name"href": '/solutions',' ": true, "children"name": 'Enterprise Solutions', ": '/enterprise-solutions'} "icon"name": 'Startup Solutions', ": '/startup-solutions'} "icon"name": 'Digital Transformation', ": '/solutions/digital-transformation'} "icon"name": 'Cloud Migration', ": '/solutions/cloud-migration'} "icon"name": 'AI Implementation', ": '/solutions/ai-implementation'} "icon"name": 'Cybersecurity', ": '/solutions/cybersecurity'} "icon"name": 'Industries',' ": '/industries',' "hasDropdown"children": [' {": 'Healthcare', "href"icon": Heart },' {": 'Finance', "href"icon": DollarSign },' {": 'Manufacturing', "href"icon": Factory },' {": 'Retail', "href"icon": ShoppingCart },' {": 'Education', "href"icon": BookOpen },' {": 'Government', "href"icon": Building }' ] },' {": 'About'} "href"name": 'Contact'} ": '/contact' }' ]; const isActive = ("href"text-left" {/* Top Contact Bar */} <div className="</div>"'"text-left":px-6 ":px-8">"
<div className="text-left"
<div className="text-left"
<div className="text-left"
<Phone className="text-left"
< </div>
<div className="text-left"
<Mail className="text-left"
< </div></div>
<div className="text-left">"</div>"text-left"</div>"text-left" <span>4.9/5 Rating</span>"text-left":px-6 ":px-8">"text-left" {/* Logo */}</div>"text-left"</div>"/" className=" <div className="text-left"
<span className="text-left" </div>"
<span className="
<" </Link></div> {/* Desktop Navigation */} <div className=":flex items-center space-x-8">"
<div key={item.name} className="text-left"
<div } className="text-left" onMouseEnter={() => {}' if (item.name === 'Services') setIsServicesOpen(true);' if (item.name === 'Solutions') setIsSolutionsOpen(true);' } onMouseLeave={() => {}' if (item.name === 'Services') setIsServicesOpen(false);' if (item.name === 'Solutions') setIsSolutionsOpen(false);' } >'"
</div>
<span className="
<" <ChevronDown className=" </div> ) : (<Link) href={item.href} className={`font-medium transition-colors duration-200 ${` }' isActive(item.href) ? 'text-blue-600' : 'text-gray-700 "hover"opacity": 0} ": 10 } animate={"opacity"y": 0 } exit={": 0} "y"text-left" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} >"
<div className="text-left"
<Link } key={child.name} href={child.href} className="text-left"hover":text-blue-600 transition-colors duration-200""
<child.icon className=" <span className="text-left" </Link> ))} </div></motion.div> )} </AnimatePresence> )} {/* Solutions Dropdown */}' {item.name === 'Solutions' && (' <AnimatePresence> {isSolutionsOpen && ( <motion.div } initial={"opacity"y": 10 } animate={": 1} "y"opacity": 0} ": 10 } className="text-left"'"
<div className=" {item.children?.map((child) => (</div>"
<Link } key={child.name} href={child.href} className=":bg-gray-50 "hover" >""text-left" <span className="
<" </Link> ))} </div></motion.div> )} </AnimatePresence> )} </div> ))} </div> {/* CTA Button */} <div className=":flex items-center space-x-4">"
<Link, href="/contact"text-left":from-blue-700 ":to-purple-700 transition-all duration-300 shadow-lg "hover" > Get Started <Link className="text-left"text-left":hidden"</div>"
<button, onClick={() => setIsMenuOpen(!isMenuOpen)} className=":text-blue-600 transition-colors duration-200" > {isMenuOpen ? <X className="text-left" />}"
</div> {/* Mobile Menu */} {/* Mobile Navigation */} {/* Mobile Menu */} <AnimatePresence> {isMenuOpen && ( <motion.div } initial={"opacity"height": 0 }' animate={": 1} "height"opacity": 0} ": 0 } className="text-left" > ''"
{/* Mobile Menu Button */} <div className=":hidden">"text-left":text-blue-600 transition-colors duration-200""
</div></div>
</header> ) }, const Header = () => {} const [isMenuOpen, setIsMenuOpen] = useState(false); const [isServicesOpen, setIsServicesOpen] = useState(false); const [isSolutionsOpen, setIsSolutionsOpen] = useState(false); const router = useRouter(); const navigation = [; {} ": 'Services',' "href"hasDropdown": true, ": [' {"name"href": '/ai-services'} ": Brain },' {"name"href": '/it-services'} ": Server },' {"name"href": '/micro-saas'} ": Zap },' {"name"href": '/security'} ": Shield },' {"name"href": '/cloud-solutions'} ": Cloud },' {"name"href": '/database-solutions'} ": Database }' ] }, {}' "name"href": '/solutions',' ": true, "children"name": 'Enterprise Solutions', ": '/enterprise-solutions'} "icon"name": 'Startup Solutions', ": '/startup-solutions'} "icon"name": 'Digital Transformation', ": '/solutions/digital-transformation'} "icon"name": 'Cloud Migration', ": '/solutions/cloud-migration'} "icon"name": 'AI Implementation', ": '/solutions/ai-implementation'} "icon"name": 'Cybersecurity', ": '/solutions/cybersecurity'} "icon"name": 'Industries',' ": '/industries',' "hasDropdown"children": [' {": 'Healthcare', "href"icon": Heart },' {": 'Finance', "href"icon": DollarSign },' {": 'Manufacturing', "href"icon": Factory },' {": 'Retail', "href"icon": ShoppingCart },' {": 'Education', "href"icon": BookOpen },' {": 'Government', "href"icon": Building }' ] },' {": 'About'} "href"name": 'Contact'} ": '/contact' }' ]; const isActive = ("href"text-left" {/* Top Contact Bar */} <div className=" <div className="text-left"lg":px-8" <div className="text-left"text-left" <div className=" <Phone className="text-left"'"
<div className=" <Mail className="text-left"
<div className="text-left">" <span>Trusted by 500+ companies< <div className=" <Star className="text-left"
</div></div>
</div> {/* Main Navigation */} <nav className="text-left"lg":px-8" <div className="text-left"text-left" <Link href=" className="text-left"text-left" <span className=" </div>"
<span className=" </Link></div> {/* Desktop Navigation */} <div className="text-left">" {navigation.map((item) => ( <div key={item.name} className=" {item.hasDropdown ? ( <div } className="text-left" onMouseEnter={() => {}' if (item.name === 'Services') setIsServicesOpen(true);' if (item.name === 'Solutions') setIsSolutionsOpen(true);' } onMouseLeave={() => {}' if (item.name === 'Services') setIsServicesOpen(false);' if (item.name === 'Solutions') setIsSolutionsOpen(false);' } >'"
<span className=" <ChevronDown className="text-left"hover":text-blue-600' }`}` > {item.name} </Link> )} {/* Services Dropdown */}' {item.name === 'Services' && (' <AnimatePresence> {isServicesOpen && ( <motion.div } initial={": 0} "y"opacity": 1} ": 0 } exit={"opacity"y": 10 } className=" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)} >"'"text-left" {item.children?.map((child) => ( <Link } key={child.name} href={child.href} className=":bg-gray-50 "hover" >""text-left" <span className=" </Link> ))} </div></motion.div> )} </AnimatePresence> )} {/* Solutions Dropdown */}' {item.name === 'Solutions' && (' <AnimatePresence> {isSolutionsOpen && ( <motion.div } initial={"opacity"y": 10 } animate={": 1} "y"opacity": 0} ": 10 } className="text-left"'"
<div className=" {item.children?.map((child) => ( <Link } key={child.name} href={child.href} className="text-left"hover":text-blue-600 transition-colors duration-200""
<child.icon className=" <span className="text-left"text-left":flex items-center space-x-4" <Link, href="/contact"text-left":from-blue-700 ":to-purple-700 transition-all duration-300 shadow-lg "hover" > Get Started <Link className="text-left"text-left":hidden" <button, onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-left" > {isMenuOpen ? <X className="text-left" />}" </button></div>"opacity": 0} ": 0 }' animate={"opacity"height": 'auto' }' exit={": 0} "height"text-left":hidden border-t border-gray-200")`"'"
</span></span>
</span></span>
</span></span>
</span></span>
</span></Link>
</Link></nav>
</nav>