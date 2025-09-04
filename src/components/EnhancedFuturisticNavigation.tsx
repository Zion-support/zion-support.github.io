import React from 'react';
import {  import { motion, AnimatePresence  } from 'framer-motion';
export default function Page(props: any) {
, [location.pathname]) ;

      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim () ) }`}};

    setActiveDropdown(activeDropdown === dropdown ? null : dropdown) } { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brai n, description: 'Advanced AI consciousness research platform' },
        { name: 'Quantum Emotion Processor', href: '/ai-services/quantum-emotion', icon: Hear t, description: 'Quantum-powered emotional intelligence' },
        { name: 'AI Autonomous Systems', href: '/ai-services/autonomous-systems', icon: Cp u, description: 'Self-managing AI infrastructure' },
        { name: 'Neural Network Architect', href: '/ai-services/neural-architect', icon: Networ k, description: 'Custom neural network design' },
        { name: 'AI Ethics Framework', href: '/ai-services/ai-ethics', icon: Shiel d, description: 'Ethical AI development tools' },
        { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics', icon: TrendingU p, description: 'AI-powered business insights' }      ]
    }, {
"
;,"});,"})""}" } const toggleDropdown = (props: any) => { setActiveDropdown(activeDropdown === dropdown ? null : dropdown) } const navigationItems = [] } { name: "Micro SAAS", href: "/micro-saas", icon: Cod e, color: "from-zion-purple to-zion-cyan", dropdown[{ name: "AI Business Intelligence", href: "/micro-saas/ai-business-intelligence", icon: BarChart 3, description: "Intelligent business analytics platform" } { name: "Customer Experience Hub", href: "/micro-saas/customer-experience", icon: User s, description: "360° customer journey management" } { name: "Quantum Computing Suite", href: "/micro-saas/quantum-computing", icon: Ato m, description: "Quantum computing solutions" } { name: "Supply Chain Optimizer", href: "/micro-saas/supply-chain", icon: Glob e, description: "AI-powered supply chain management" } { name: "Cybersecurity Platform", href: "/micro-saas/cybersecurity", icon: ShieldChec k, description: "Advanced threat protection" } { name: "IoT Edge Computing", href: "/micro-saas/iot-edge", icon: Cp u, description: "Edge computing solutions" } { name: "Content Creation AI", href: "/micro-saas/content-creation", icon: FileTex t, description: "AI-powered content generation" } { name: "HR Management Suite", href: "/micro-saas/hr-platform", icon: Briefcas e, description: "Modern HR management platform" } ] } { name: "IT Services", href: "/it-services", icon: Networ k, color: "from-zion-blue to-zion-purple", dropdown[{ name: "Infrastructure Management", href: "/it-services/infrastructure", icon: Serve r, description: "Complete infrastructure solutions" } { name: "Digital Transformation", href: "/it-services/digital-transformation", icon: Za p, description: "Digital transformation consulting" } { name: "IT Consulting", href: "/it-services/consulting", icon: User s, description: "Expert IT consulting services" } { name: "Onsite Support", href: "/it-services/onsite-support", icon: Wif i, description: "24/7 onsite technical support" } { name: "Green IT Solutions", href: "/it-services/green-it", icon: Hear t, description: "Sustainable IT infrastructure" } { name: "5G Network Solutions", href: "/it-services/5g-solutions", icon: Satellit e, description: "Next-gen network infrastructure" } ] } { name: "Emerging Tech", href: "/emerging-tech", icon: Rocke t, color: "from-zion-cyan to-zion-purple", dropdown[{ name: "Quantum Computing", href: "/emerging-tech/quantum-computing", icon: Ato m, description: "Quantum computing solutions" } { name: "Blockchain & DeFi", href: "/emerging-tech/blockchain-defi", icon: Loc k, description: "Blockchain and DeFi platforms" } { name: "Space Technology", href: "/emerging-tech/space-tech", icon: Satellit e, description: "Space technology innovations" } { name: "Biotechnology", href: "/emerging-tech/biotech", icon: Dn a, description: "Biotech and healthcare solutions" } { name: "Nanotechnology", href: "/emerging-tech/nanotech", icon: Microscop e, description: "Nanotechnology applications" } { name: "Augmented Reality", href: "/emerging-tech/ar-vr", icon: Ey e, description: "AR/VR development services" } ] } { name: "Marketplace", href: "/marketplace", icon: ShoppingCar t, color: "from-zion-purple to-zion-cyan", dropdown[{ name: "AI Products", href: "/marketplace/ai-products", icon: Brai n, description: "AI-powered products and tools" } { name: "IT Equipment", href: "/marketplace/it-equipment", icon: Monito r, description: "Professional IT equipment" } { name: "Software Solutions", href: "/marketplace/software", icon: Cod e, description: "Enterprise software solutions" } { name: "Professional Services", href: "/marketplace/services", icon: Briefcas e, description: "Expert professional services" } { name: "Talent Network", href: "/marketplace/talent", icon: User s, description: "Skilled professionals network" } { name: "Innovation Hub", href: "/marketplace/innovation", icon: Lightbul b, description: "Innovation and R&D services" } ] } { name: "Comprehensive", href: "/services-overview", icon: BarChart 3, color: "from-zion-green to-zion-emerald", dropdown[{ name: "Services Overview", href: "/services-overview", icon: BarChart 3, description: "Complete portfolio of all services" } { name: "Enhanced Services 2025", href: "/enhanced-services-2025", icon: Crow n, description: "Latest comprehensive services portfolio" } { name: "Micro SAAS Services", href: "/comprehensive-micro-saas-services-2025", icon: Cod e, description: "Complete micro SAAS solutions catalog" } { name: "Pricing Guide", href: "/pricing-guide", icon: Calculato r, description: "Detailed pricing and ROI analysis" } { name: "Ultimate Services 2027", href: "/enhanced-innovative-services-2027", icon: Crow n, description: "Most advanced services for 2027" } { name: "Innovative Services", href: "/innovative-services-2027", icon: Lightbul b, description: "Cutting-edge innovative solutions" } ] } { name: "About", href: "/about", icon: Inf o, color: "from-zion-blue to-zion-cyan", isMain: tru e } { name: "Contact", href: "/contact", icon: Phon e, color: "from-zion-cyan to-zion-purple", isMain: tru e } ] return (<> {} <nav className="{"hidden" lg: block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10" : "bg-transparent" }"}> <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> {} <Link to="/" className="flex items-center space-x-3 group"> <div className="relative"> <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300"> <span className="text-white font-bold text-xl">Z</span> </div> <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hove,"
    r: opacit y-75 transition-opacity duration-300"></div> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> ZION </div> <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div> </div> </Link> {} <div className="flex items-center space-x-1"> {navigationItems.map((item) => ( <div key="{item.name}" className="relative group"> {item.dropdown ? ( <button onClick="{()" => toggleDropdown(item.name)} className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25" : "text-gray-300 hover: tex t-white hove,"
    r: b g-zion-slate-light/30" }"} {item.icon && <item.icon className="w-4 h-4" />} <span>{item.name}</span> <ChevronDown className="{"w-3" h-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : "" }"}        /> </button> ) : ( <Link to="{item.href}" className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25" : "text-gray-300 hover: tex t-white hove,"
    r: b g-zion-slate-light/30" }"} {item.icon && <item.icon className="w-4 h-4"    />} <span>{item.name}</span> </Link> )} {} {item.dropdown && ( <AnimatePresence> {activeDropdown === item.name && ( <motion.div initial = { { opacity: 0, y: 1 0, scale: 0.95 }} animate = { { opacity: 1, y: 0, scale: 1 }} exit = { { opacity: 0, y: 1 0, scale: 0.95 }} transition="{{" duration: 0.2  }} className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden" <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {item.dropdown.map((dropdownItem) => ( <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="flex items-start space-x-3 p-3 rounded-lg hover: b g-zion-slate-light/30 transition-all duration-200 group" <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hove,"
    r: scal e-110 transition-transform duration-200"> {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />} </div> <div className="flex-1"> <div className="font-medium text-white group-hover: tex t-zion-cyan transition-colors duration-200"> {dropdownItem.name} </div> <div className="text-sm text-gray-400 mt-1"> {dropdownItem.description} </div> </div> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> )} </div> ))} </div> {} <div className="flex items-center space-x-4"> {} <form onSubmit="{handleSearch}" className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"   /> <input type="text" placeholder="Search services..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focu,
    s: rin g-2 focu,"
    s: rin g-zion-cyan/20" /> </form> {} <div className="flex items-center space-x-3"> <button className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200"> <Bell className="w-5 h-5"   /> </button> <button className="p-2 text-gray-400 hove>
    r: tex t-white hove,"
    r: b g-zion-slate-light/30 rounded-lg transition-all duration-200"> <User className="w-5 h-5"   /> </button> </div> </div> </div> </div> </nav> {} <nav className="lg: hidden fixed top-0 left-0 right-0 z-50"> <div className="{"transition-all" duration-500 ${scrolled ? "bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10" : "bg-transparent" }"}> <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> {} <Link to="/" className="flex items-center space-x-3"> <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center"> <span className="text-white font-bold text-lg">Z</span> </div> <div> <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> ZION </div> <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div> </div> </Link> {} <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-400 hover: tex t-white hove,"
    r: b g-zion-slate-light/30 rounded-lg transition-all duration-200" {mobileMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   />} </button> </div> </div> </div> {} <AnimatePresence> {mobileMenuOpen && ( <motion.div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: "auto" }} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden" <div className="max-w-7xl mx-auto px-6 py-6"> {} <form onSubmit="{handleSearch}" className="relative mb-6"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"   /> <input type="text" placeholder="Search services..." value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focu,"
    s: rin g-zion-cyan/20" /> </form> {} <div className="space-y-2"> {navigationItems.map((item) => ( <div key="{item.name}"> {item.dropdown ? ( <div> <button onClick="{()" => toggleDropdown(item.name)} className="{"w-full" text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" : "text-gray-300 hover: tex t-white hove,"
    r: b g-zion-slate-light/30" }"} <div className="flex items-center space-x-3"> {item.icon && <item.icon className="w-4 h-4" />} <span>{item.name}</span> </div> <ChevronDown className="{"w-4" h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : "" }"}        /> </button> {} <AnimatePresence> {activeDropdown === item.name && ( <motion.div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: "auto" }} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="ml-6 mt-2 space-y-1 overflow-hidden" {item.dropdown.map((dropdownItem) => ( <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="block px-4 py-2 text-gray-400 hover: tex t-white hove,">
    r: b g-zion-slate-light/30 rounded-lg transition-all duration-200" {dropdownItem.name} </Link> ))} </motion.div> )} </AnimatePresence> </div> ) : ( <Link to="{item.href}" className="{"block" px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" : "text-gray-300 hover: tex t-white hove,">
    r: b g-zion-slate-light/30" }"} <div className="flex items-center space-x-3"> {item.icon && <item.icon className="w-4 h-4" />} <span>{item.name}</span> </div> </Link> )} </div> ))} </div> {} <div className="mt-8 pt-6 border-t border-zion-cyan/20"> <div className="text-center"> <div className="text-zion-cyan font-semibold mb-2">Contact Us</div> <div className="text-sm text-gray-400 space-y-1"> <div>+1 302 464 0950</div> <div>kleber@ziontechgroup.com</div> <div>364 E Main St STE 1008</div> <div>Middletown DE 19709</div> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </nav>  {} <div className="h-20"></div> </> ) };""
;"""

;""";"framer-motion";"next/link";react&apos;react-router-dom&apos;framer-motion&apos;lucide-react&apos;&apos, const handleScroll = (props: any) => { setScrolled(window.scrollY > 20) } window.addEventListener(&apos;scroll&apos, handleScroll) return () => window.removeEventListener(&apos;scroll&apos, handleScroll)}, []) useEffect(() => { setMobileMenuOpen(false) setActiveDropdown(null)}, [location.pathname]) window.location.href = "/search?q="${encodeURIComponent(searchQuery.trim())}"}" }&apos; const toggleDropdown = (props: any) => { setActiveDropdown(activeDropdown === dropdown ? null : dropdown) } const;const navigationItems = [] } { name: &apos,Micro SAAS&apos, href: &apos,/micro-saas&apos, icon: Cod e, color: &apos,from-zion-purple to-zion-cyan&apos, dropdown[{ name: &apos,AI Business Intelligence&apos, href: &apos,/micro-saas/ai-business-intelligence&apos, icon: BarChart 3, description: &apos,Intelligent business analytics platform&apos} { name: &apos,Customer Experience Hub&apos, href: &apos,/micro-saas/customer-experience&apos, icon: User s, description: &apos,360° customer journey management&apos} { name: &apos,Quantum Computing Suite&apos, href: &apos,/micro-saas/quantum-computing&apos, icon: Ato m, description: &apos,Quantum computing solutions&apos} { name: &apos,Supply Chain Optimizer&apos, href: &apos,/micro-saas/supply-chain&apos, icon: Glob e, description: &apos,AI-powered supply chain management&apos} { name: &apos,Cybersecurity Platform&apos, href: &apos,/micro-saas/cybersecurity&apos, icon: ShieldChec k, description: &apos,Advanced threat protection&apos} { name: &apos,IoT Edge Computing&apos, href: &apos,/micro-saas/iot-edge&apos, icon: Cp u, description: &apos,Edge computing solutions&apos} { name: &apos,Content Creation AI&apos, href: &apos,/micro-saas/content-creation&apos, icon: FileTex t, description: &apos,AI-powered content generation&apos} { name: &apos,HR Management Suite&apos, href: &apos,/micro-saas/hr-platform&apos, icon: Briefcas e, description: &apos,Modern HR management platform&apos} ] } { name: &apos,IT Services&apos, href: &apos,/it-services&apos, icon: Networ k, color: &apos,from-zion-blue to-zion-purple&apos, dropdown[{ name: &apos,Infrastructure Management&apos, href: &apos,/it-services/infrastructure&apos, icon: Serve r, description: &apos,Complete infrastructure solutions&apos} { name: &apos,Digital Transformation&apos, href: &apos,/it-services/digital-transformation&apos, icon: Za p, description: &apos,Digital transformation consulting&apos} { name: &apos,IT Consulting&apos, href: &apos,/it-services/consulting&apos, icon: User s, description: &apos,Expert IT consulting services&apos} { name: &apos,Onsite Support&apos, href: &apos,/it-services/onsite-support&apos, icon: Wif i, description: &apos,24/7 onsite technical support&apos} { name: &apos,Green IT Solutions&apos, href: &apos,/it-services/green-it&apos, icon: Hear t, description: &apos,Sustainable IT infrastructure&apos} { name: &apos,5G Network Solutions&apos, href: &apos,/it-services/5g-solutions&apos, icon: Satellit e, description: &apos,Next-gen network infrastructure&apos} ] } { name: &apos,Emerging Tech&apos, href: &apos,/emerging-tech&apos, icon: Rocke t, color: &apos,from-zion-cyan to-zion-purple&apos, dropdown[{ name: &apos,Quantum Computing&apos, href: &apos,/emerging-tech/quantum-computing&apos, icon: Ato m, description: &apos,Quantum computing solutions&apos} { name: &apos,Blockchain & DeFi&apos, href: &apos,/emerging-tech/blockchain-defi&apos, icon: Loc k, description: &apos,Blockchain and DeFi platforms&apos} { name: &apos,Space Technology&apos, href: &apos,/emerging-tech/space-tech&apos, icon: Satellit e, description: &apos,Space technology innovations&apos} { name: &apos,Biotechnology&apos, href: &apos,/emerging-tech/biotech&apos, icon: Dn a, description: &apos,Biotech and healthcare solutions&apos} { name: &apos,Nanotechnology&apos, href: &apos,/emerging-tech/nanotech&apos, icon: Microscop e, description: &apos,Nanotechnology applications&apos} { name: &apos,Augmented Reality&apos, href: &apos,/emerging-tech/ar-vr&apos, icon: Ey e, description: &apos,AR/VR development services&apos} ] } { name: &apos,Marketplace&apos, href: &apos,/marketplace&apos, icon: ShoppingCar t, color: &apos,from-zion-purple to-zion-cyan&apos, dropdown[{ name: &apos,AI Products&apos, href: &apos,/marketplace/ai-products&apos, icon: Brai n, description: &apos,AI-powered products and tools&apos} { name: &apos,IT Equipment&apos, href: &apos,/marketplace/it-equipment&apos, icon: Monito r, description: &apos,Professional IT equipment&apos} { name: &apos,Software Solutions&apos, href: &apos,/marketplace/software&apos, icon: Cod e, description: &apos,Enterprise software solutions&apos} { name: &apos,Professional Services&apos, href: &apos,/marketplace/services&apos, icon: Briefcas e, description: &apos,Expert professional services&apos} { name: &apos,Talent Network&apos, href: &apos,/marketplace/talent&apos, icon: User s, description: &apos,Skilled professionals network&apos} { name: &apos,Innovation Hub&apos, href: &apos,/marketplace/innovation&apos, icon: Lightbul b, description: &apos,Innovation and R&D services&apos} ] } { name: &apos,Comprehensive&apos, href: &apos,/services-overview&apos, icon: BarChart 3, color: &apos,from-zion-green to-zion-emerald&apos, dropdown[{ name: &apos,Services Overview&apos, href: &apos,/services-overview&apos, icon: BarChart 3, description: &apos,Complete portfolio of all services&apos} { name: &apos,Enhanced Services 2025&apos, href: &apos,/enhanced-services-2025&apos, icon: Crow n, description: &apos,Latest comprehensive services portfolio&apos} { name: &apos,Micro SAAS Services&apos, href: &apos,/comprehensive-micro-saas-services-2025&apos, icon: Cod e, description: &apos,Complete micro SAAS solutions catalog&apos} { name: &apos,Pricing Guide&apos, href: &apos,/pricing-guide&apos, icon: Calculato r, description: &apos,Detailed pricing and ROI analysis&apos} { name: &apos,Ultimate Services 2027&apos, href: &apos,/enhanced-innovative-services-2027&apos, icon: Crow n, description: &apos,Most advanced services for 2027&apos} { name: &apos,Innovative Services&apos, href: &apos,/innovative-services-2027&apos, icon: Lightbul b, description: &apos,Cutting-edge innovative solutions&apos} ] } { name: &apos,About&apos, href: &apos,/about&apos, icon: Inf o, color: &apos,from-zion-blue to-zion-cyan&apos, isMain: tru e } { name: &apos,Contact&apos, href: &apos,/contact&apos, icon: Phon e, color: &apos,from-zion-cyan to-zion-purple&apos, isMain: tru e } ] return (&apos;&apos;<> {} <nav className="{"hidden" lg: block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? &apos,bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10&apos, : &apos,bg-transparent&apos}"}>&apos; <div className="&apos;max-w-7xl" mx-auto px-6&apos;>&apos, <div className="&apos;flex" items-center justify-between h-20&apos;> {}&apos; <Link to="&apos;/&apos;" className="&apos;flex" items-center space-x-3 group&apos;>&apos, <div className="&apos;relative&apos;">&apos, <div className="&apos;w-12" h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300&apos,>&apos, <span className="&apos;text-white" font-bold text-xl&apos,>Z&apos,</span> </div> <div className="&apos,absolute" inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hove,r: opacit y-75 transition-opacity duration-300&apos,>&apos,</div> </div> <div> <div className="&apos;text-2xl" font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&apos;> ZION&apos; </div> <div className="&apos,text-xs" text-zion-cyan font-medium&apos,>TECH GROUP&apos,</div> </div> </Link> {} <div className="&apos;flex" items-center space-x-1&apos;> {navigationItems.map((item) => (&apos} <div key="{item.name}" className="&apos;relative" group&apos;> {item.dropdown ? (&apos} <button onClick="{()" => toggleDropdown(item.name)} className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? &apos;bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25&apos; : &apos;text-gray-300 hover: tex t-white hove,r: b g-zion-slate-light/30&apos}"} {item.icon &&"}&apos; <item.icon className="&apos;w-4" h-4&apos; />}&apos; <span>{item.name}</span> <ChevronDown className="{"w-3" h-3 transition-transform duration-300 ${activeDropdown === item.name ? &apos;rotate-180&apos; : &apos;&apos}"}        />&apos;&apos; </button> ) : ( <Link to="{item.href}" className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? &apos;bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25&apos; : &apos;text-gray-300 hover: tex t-white hove,r: b g-zion-slate-light/30&apos}"} {item.icon &&"}&apos; <item.icon className="&apos;w-4" h-4&apos;         />}&apos; <span>{item.name}</span> </Link> )} {} {item.dropdown && (} <AnimatePresence> {activeDropdown === item.name && (} <motion.div initial = { { opacity: 0, y: 1 0, scale: 0.95 }} animate = { { opacity: 1, y: 0, scale: 1 }} exit = { { opacity: 0, y: 1 0, scale: 0.95 }} transition="{{" duration: 0.2  }} className="&apos;absolute" top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden&apos;&apos, <div className="&apos;p-4&apos;">&apos, <div className="&apos;grid" grid-cols-1 gap-2&apos;> {item.dropdown.map((dropdownItem) => (&apos} <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="&apos;flex" items-start space-x-3 p-3 rounded-lg hover: b g-zion-slate-light/30 transition-all duration-200 group&apos,&apos," <div className="&apos,w-8" h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hove,r: scal e-110 transition-transform duration-200&apos,> {dropdownItem.icon &&"}&apos; <dropdownItem.icon className="&apos;w-4" h-4 text-zion-cyan&apos; />}&apos; </div> <div className="&apos;flex-1&apos;">&apos, <div className="&apos;font-medium" text-white group-hover: tex t-zion-cyan transition-colors duration-200&apos,> {dropdownItem.name}&apos; </div> <div className="&apos;text-sm" text-gray-400 mt-1&apos;> {dropdownItem.description}&apos; </div> </div> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> )} </div> ))} </div> {} <div className="&apos;flex" items-center space-x-4&apos;> {}&apos; <form onSubmit="{handleSearch}" className="&apos;relative&apos;">&apos, <Search className="&apos;absolute" left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4&apos;        />&apos; <input type="&apos;text&apos;" placeholder="&apos;Search" services...&apos; value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="&apos;w-64" pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focu,s: rin g-zion-cyan/20&apos, />&apos, </form> {} <div className="&apos;flex" items-center space-x-3&apos;>&apos, <button className="&apos;p-2" text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200&apos,>&apos, <Bell className="&apos;w-5" h-5&apos,        />&apos, </button> <button className="&apos,p-2" text-gray-400 hover: tex t-white hove,r: b g-zion-slate-light/30 rounded-lg transition-all duration-200&apos,>&apos, <User className="&apos,w-5" h-5&apos,        />&apos, </button> </div> </div> </div> </div> </nav> {} <nav className="&apos;lg: " hidden fixed top-0 left-0 right-0 z-50&apos,>&apos, <div className="{"transition-all" duration-500 ${scrolled ? &apos,bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10&apos, : &apos,bg-transparent&apos}"}>&apos; <div className="&apos;max-w-7xl" mx-auto px-6&apos;>&apos, <div className="&apos;flex" items-center justify-between h-20&apos;> {}&apos; <Link to="&apos;/&apos;" className="&apos;flex" items-center space-x-3&apos;>&apos, <div className="&apos;w-10" h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center&apos;>&apos, <span className="&apos;text-white" font-bold text-lg&apos;>Z&apos;</span> </div> <div> <div className="&apos;text-xl" font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent&apos;> ZION&apos; </div> <div className="&apos;text-xs" text-zion-cyan font-medium&apos;>TECH GROUP&apos;</div> </div> </Link> {} <button onClick="{()" => setMobileMenuOpen(!mobileMenuOpen)} className="&apos;p-2" text-gray-400 hover: tex t-white hove,r: b g-zion-slate-light/30 rounded-lg transition-all duration-200&apos {mobileMenuOpen ?&apos} <X className="&apos;w-6" h-6&apos;        /> :&apos; <Menu className="&apos;w-6" h-6&apos;        />}&apos; </button> </div> </div> </div> {} <AnimatePresence> {mobileMenuOpen && (} <motion.div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: &apos,auto&apos}} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="&apos;bg-zion-slate-dark/95" backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden&apos;&apos, <div className="&apos;max-w-7xl" mx-auto px-6 py-6&apos;> {}&apos; <form onSubmit="{handleSearch}" className="&apos;relative" mb-6&apos;>&apos, <Search className="&apos;absolute" left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4&apos;        />&apos; <input type="&apos;text&apos;" placeholder="&apos;Search" services...&apos; value="{searchQuery}" onChange="{(e)" => setSearchQuery(e.target.value)} className="&apos;w-full" pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focu,s: rin g-zion-cyan/20&apos, />&apos, </form> {} <div className="&apos;space-y-2&apos;"> {navigationItems.map((item) => (&apos} <div key="{item.name}"> {item.dropdown ? (} <div> <button onClick="{()" => toggleDropdown(item.name)} className="{"w-full" text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${location.pathname === item.href ? &apos;bg-gradient-to-r from-zion-cyan to-zion-purple text-white&apos; : &apos;text-gray-300 hover: tex t-white hove,r: b g-zion-slate-light/30&apos}"}&apos; <div className="&apos;flex" items-center space-x-3&apos;> {item.icon &&"}&apos; <item.icon className="&apos;w-4" h-4&apos; />}&apos; <span>{item.name}</span> </div> <ChevronDown className="{"w-4" h-4 transition-transform duration-300 ${activeDropdown === item.name ? &apos;rotate-180&apos; : &apos;&apos}"}        />&apos;&apos; </button> {} <AnimatePresence> {activeDropdown === item.name && (} <motion.div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: &apos,auto&apos}} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="&apos;ml-6" mt-2 space-y-1 overflow-hidden&apos {item.dropdown.map((dropdownItem) => (&apos} <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="&apos;block" px-4 py-2 text-gray-400 hover: tex t-white hove,r: b g-zion-slate-light/30 rounded-lg transition-all duration-200&apos {dropdownItem.name}&apos; </Link> ))} </motion.div> )} </AnimatePresence> </div> ) : ( <Link to="{item.href}" className="{"block" px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.href ? &apos;bg-gradient-to-r from-zion-cyan to-zion-purple text-white&apos; : &apos;text-gray-300 hover: tex t-white hove,r: b g-zion-slate-light/30&apos}"}&apos; <div className="&apos;flex" items-center space-x-3&apos;> {item.icon &&"}&apos; <item.icon className="&apos;w-4" h-4&apos; />}&apos; <span>{item.name}</span> </div> </Link> )} </div> ))} </div> {} <div className="&apos;mt-8" pt-6 border-t border-zion-cyan/20&apos;>&apos, <div className="&apos;text-center&apos;">&apos, <div className="&apos;text-zion-cyan" font-semibold mb-2&apos;>Contact Us&apos;</div> <div className="&apos;text-sm" text-gray-400 space-y-1&apos;>&apos, <div>+1 302 464 0950</div> <div>kleber@ziontechgroup.com</div> <div>364 E Main St STE 1008</div> <div>Middletown DE 19709</div> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </nav>  {} <div className="&apos;h-20&apos;">&apos,</div> <;</> ) }""const handleScroll = (props: any) => { setScrolled(window.scrollY > 20) } window.addEventListener("scroll", handleScroll) return () => window.removeEventListener("scroll", handleScroll)}, []) useEffect(() => { setMobileMenuOpen(false) setActiveDropdown(null)}, [location.pathname]) window.location.href = "/search?q="${encodeURIComponent(searchQuery.trim())}"}" } const toggleDropdown = (props: any) => { setActiveDropdown(activeDropdown === dropdown ? null : dropdown) } const navigationItems = [] } { name: "Micro SAAS", href: "/micro-saas", icon: Cod e, color: "from-zion-purple to-zion-cyan", dropdown[{ name: "AI Business Intelligence", href: "/micro-saas/ai-business-intelligence", icon: BarChart 3, description: "Intelligent business analytics platform" } { name: "Customer Experience Hub", href: "/micro-saas/customer-experience", icon: User s, description: "360° customer journey management" } { name: "Quantum Computing Suite", href: "/micro-saas/quantum-computing", icon: Ato m, description: "Quantum computing solutions" } { name: "Supply Chain Optimizer", href: "/micro-saas/supply-chain", icon: Glob e, description: "AI-powered supply chain management" } { name: "Cybersecurity Platform", href: "/micro-saas/cybersecurity", icon: ShieldChec k, description: "Advanced threat protection" } { name: "IoT Edge Computing", href: "/micro-saas/iot-edge", icon: Cp u, description: "Edge computing solutions" } { name: "Content Creation AI", href: "/micro-saas/content-creation", icon: FileTex t, description: "AI-powered content generation" } { name: "HR Management Suite", href: "/micro-saas/hr-platform", icon: Briefcas e, description: "Modern HR management platform" } ] } { name: "IT Services", href: "/it-services", icon: Networ k, color: "from-zion-blue to-zion-purple", dropdown[{ name: "Infrastructure Management", href: "/it-services/infrastructure", icon: Serve r, description: "Complete infrastructure solutions" } { name: "Digital Transformation", href: "/it-services/digital-transformation", icon: Za p, description: "Digital transformation consulting" } { name: "IT Consulting", href: "/it-services/consulting", icon: User s, description: "Expert IT consulting services" } { name: "Onsite Support", href: "/it-services/onsite-support", icon: Wif i, description: "24/7 onsite technical support" } { name: "Green IT Solutions", href: "/it-services/green-it", icon: Hear t, description: "Sustainable IT infrastructure" } { name: "5G Network Solutions", href: "/it-services/5g-solutions", icon: Satellit e, description: "Next-gen network infrastructure" } ] } { name: "Emerging Tech", href: "/emerging-tech", icon: Rocke t, color: "from-zion-cyan to-zion-purple", dropdown[{ name: "Quantum Computing", href: "/emerging-tech/quantum-computing", icon: Ato m, description: "Quantum computing solutions" } { name: "Blockchain & DeFi", href: "/emerging-tech/blockchain-defi", icon: Loc k, description: "Blockchain and DeFi platforms" } { name: "Space Technology", href: "/emerging-tech/space-tech", icon: Satellit e, description: "Space technology innovations" } { name: "Biotechnology", href: "/emerging-tech/biotech", icon: Dn a, description: "Biotech and healthcare solutions" } { name: "Nanotechnology", href: "/emerging-tech/nanotech", icon: Microscop e, description: "Nanotechnology applications" } { name: "Augmented Reality", href: "/emerging-tech/ar-vr", icon: Ey e, description: "AR/VR development services" } ] } { name: "Marketplace", href: "/marketplace", icon: ShoppingCar t, color: "from-zion-purple to-zion-cyan", dropdown[{ name: "AI Products", href: "/marketplace/ai-products", icon: Brai n, description: "AI-powered products and tools" } { name: "IT Equipment", href: "/marketplace/it-equipment", icon: Monito r, description: "Professional IT equipment" } { name: "Software Solutions", href: "/marketplace/software", icon: Cod e, description: "Enterprise software solutions" } { name: "Professional Services", href: "/marketplace/services", icon: Briefcas e, description: "Expert professional services" } { name: "Talent Network", href: "/marketplace/talent", icon: User s, description: "Skilled professionals network" } { name: "Innovation Hub", href: "/marketplace/innovation", icon: Lightbul b, description: "Innovation and R&D services" } ] } { name: "Comprehensive", href: "/services-overview", icon: BarChart 3, color: "from-zion-green to-zion-emerald", dropdown[{ name: "Services Overview", href: "/services-overview", icon: BarChart 3, description: "Complete portfolio of all services" } { name: "Enhanced Services 2025", href: "/enhanced-services-2025", icon: Crow n, description: "Latest comprehensive services portfolio" } { name: "Micro SAAS Services", href: "/comprehensive-micro-saas-services-2025", icon: Cod e, description: "Complete micro SAAS solutions catalog" } { name: "Pricing Guide", href: "/pricing-guide", icon: Calculato r, description: "Detailed pricing and ROI analysis" } { name: "Ultimate Services 2027", href: "/enhanced-innovative-services-2027", icon: Crow n, description: "Most advanced services for 2027" } { name: "Innovative Services", href: "/innovative-services-2027", icon: Lightbul b, description: "Cutting-edge innovative solutions" } ] } { name: "About", href: "/about", icon: Inf o, color: "from-zion-blue to-zion-cyan", isMain: tru e } { name: "Contact", href: "/contact", icon: Phon e, color: "from-zion-cyan to-zion-purple", isMain: tru e } ] return (<> {} <nav className="{"hidden" lg: block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10" : "bg-transparent" }"}" > <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> {} <Link to="/" className="flex items-center space-x-3 group"> <div className="relative"> <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover: scal e-110 transition-transform duration-300"> <span className="text-white font-bold text-xl">Z</span> </div> <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hover: opacit y-75 transition-opacity duration-300"></div> </div> <div> <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> ZION </div> <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div> </div> </Link> {} <div className="flex items-center space-x-1"> {navigationItems.map((item) => ( <div key="{item.name}" className="relative group"> {item.dropdown ? ( <button onClick="{()" =" > toggleDropdown(item.name)} className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25" : "text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30" }"} {item.icon && <item .icon className="w-4 h-4" /" >} <span>{item.name}</span> <ChevronDown className="{"w-3" h-3 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : "" }"} /" > </button> ) : ( <Link to="{item.href}" className="{"px-4" py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25" : "text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30" }"} {item.icon && <item.icon className="w-4 h-4" /" >} <span>{item.name}</span> </Link> )} {} {item.dropdown && ( <AnimatePresence> {activeDropdown === item.name && ( <motion.div initial = { { opacity: 0, y: 1 0, scale: 0.95 }} animate = { { opacity: 1, y: 0, scale: 1 }} exit = { { opacity: 0, y: 1 0, scale: 0.95 }} transition="{{" duration: 0.2  }} className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden" <div className="p-4"> <div className="grid grid-cols-1 gap-2"> {item.dropdown.map((dropdownItem) => ( <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="flex items-start space-x-3 p-3 rounded-lg hover: b g-zion-slate-light/30 transition-all duration-200 group" <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200"> {dropdownItem.icon && <dropdownItem .icon className="w-4 h-4 text-zion-cyan" /" >} </div> <div className="flex-1"> <div className="font-medium text-white group-hover: tex t-zion-cyan transition-colors duration-200"> {dropdownItem.name} </div> <div className="text-sm text-gray-400 mt-1"> {dropdownItem.description} </div> </div> </Link> ))} </div> </div> </motion.div> )} </AnimatePresence> )} </div> ))} </div> {} <div className="flex items-center space-x-4"> {} <form onSubmit="{handleSearch}" className="relative"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /" > <input type="text" placeholder="Search services..." value="{searchQuery}" onChange="{(e)" =" > setSearchQuery(e.target.value)} className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focus: rin g-zion-cyan/20" /> </form> {} <div className="flex items-center space-x-3"> <button className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200"> <Bell className="w-5 h-5" /" > </button> <button className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200"> <User className="w-5 h-5" /" > </button> </div> </div> </div> </div> </nav> {} <nav className="lg: hidden fixed top-0 left-0 right-0 z-50"> <div className="{"transition-all" duration-500 ${scrolled ? "bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10" : "bg-transparent" }"}" > <div className="max-w-7xl mx-auto px-6"> <div className="flex items-center justify-between h-20"> {} <Link to="/" className="flex items-center space-x-3"> <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center"> <span className="text-white font-bold text-lg">Z</span> </div> <div> <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"> ZION </div> <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div> </div> </Link> {} <button onClick="{()" =" > setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200" {mobileMenuOpen ? <X className="w-6 h-6" /" > : <Menu className="w-6 h-6" /" >} </button> </div> </div> </div> {} <AnimatePresence> {mobileMenuOpen && ( <motion.div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: "auto" }} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden" <div className="max-w-7xl mx-auto px-6 py-6"> {} <form onSubmit="{handleSearch}" className="relative mb-6"> <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" /" > <input type="text" placeholder="Search services..." value="{searchQuery}" onChange="{(e)" =" > setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focus: rin g-zion-cyan/20" /> </form> {} <div className="space-y-2"> {navigationItems.map((item) => ( <div key={item.name}" > {item.dropdown ? ( <div> <button onClick="{()" =" > toggleDropdown(item.name)} className="{"w-full" text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" : "text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30" }"} <div className="flex items-center space-x-3"> {item.icon && <item .icon className="w-4 h-4" /" >} <span>{item.name}</span> </div> <ChevronDown className="{"w-4" h-4 transition-transform duration-300 ${activeDropdown === item.name ? "rotate-180" : "" }"} /" > </button> {} <AnimatePresence> {activeDropdown === item.name && ( <motion .div initial = { { opacity: 0, height: 0 }} animate = { { opacity: 1, height: "auto" }} exit = { { opacity: 0, height: 0 }} transition="{{" duration: 0.3  }} className="ml-6 mt-2 space-y-1 overflow-hidden" {item.dropdown.map((dropdownItem) =" > ( <Link key="{dropdownItem.name}" to="{dropdownItem.href}" className="block px-4 py-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200" {dropdownItem.name} </Link" > ))} </motion.div> )} </AnimatePresence> </div> ) : ( <Link to="{item.href}" className="{"block" px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.href ? "bg-gradient-to-r from-zion-cyan to-zion-purple text-white" : "text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30" }"} <div className="flex items-center space-x-3"> {item.icon && <item .icon className="w-4 h-4" /" >} <span>{item.name}</span> </div> </Link> )} </div> ))} </div> {} <div className="mt-8 pt-6 border-t border-zion-cyan/20"> <div className="text-center"> <div className="text-zion-cyan font-semibold mb-2">Contact Us</div> <div className="text-sm text-gray-400 space-y-1"> <div>+1 302 464 0950</div> <div>kleber@ziontechgroup.com</div> <div>364 E Main St STE 1008</div> <div>Middletown DE 19709</div> </div> </div> </div> </div> </motion.div> )} </AnimatePresence> </nav>  {} <div className="h-20"></div> </> ) }"
;"`"
"

{/* Dropdown Menu */}
                  {item.dropdown && (<AnimatePresence>
                      {activeDropdown === item.name && (<motion.div
                          initial = {

  { opacity: 0, y: 1 0,
  scale: 0.95

}}
                          animate = {

  { opacity: 1, y: 0,
  scale: 1

}}
                          exit = {

  { opacity: 0, y: 1 0,
  scale: 0.95

}}
                          transition={{ duration: 0.2 }}"
                          className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
"
                          <div className="p-4">"
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}"
                                  className="flex items-start space-x-3 p-3 rounded-lg hover: b g-zion-slate-light/30 transition-all duration-200 group"
"
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover: scal e-110 transition-transform duration-200">"
                                    {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />}
                                  </div>"
                                  <div className="flex-1">"
                                    <div className="font-medium text-white group-hover: tex t-zion-cyan transition-colors duration-200">
                                      {dropdownItem.name}
                                    </div>"
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>;) ) }
                            </div>
                          </div>;
                        </motion.div>;) }
                    </AnimatePresence>) }
                </div>) ) }
            </div>

            {/* Right Side Actions */}"
            <div className="flex items-center space-x-4"> {/* Search */}"
              <form onSubmit={handleSearch} className="relative">;"
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"   />
                <input"
                  type="text"
                  placeholder="Search services..."                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}"
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focus: rin g-zion-cyan/20"
                />
              </form>

              {/* User Menu */}"
              <div className="flex items-center space-x-3">;"
                <button className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200">"
                  <Bell className="w-5 h-5"   />
                </button>"
                <button className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200">"
                  <User className="w-5 h-5"   />                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}"
      <nav className="lg: hidden fixed top-0 left-0 right-0 z-50">;`
        <div className={`transition-all duration-500 ${scrolled'
            ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10''
            : 'bg-transparent'`
        }`}>"
          <div className="max-w-7xl mx-auto px-6">"
            <div className="flex items-center justify-between h-20">
              {/* Logo */}"
              <Link to="/" className="flex items-center space-x-3">"
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">"
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>"
                  <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    ZION
                  </div>"
                  <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}"
                className="p-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200"
"
                {mobileMenuOpen ? <X className="w-6 h-6"   /> : <Menu className="w-6 h-6"   />}              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (<motion.div
              initial = {

  { opacity: 0,
  height: 0

}}
              animate = {

  { opacity: 1,
  height: 'auto'

}}
              exit = {

  { opacity: 0,
  height: 0

}}
              transition={{ duration: 0.3 }}"
              className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden"
"
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Search */}"
                <form onSubmit={handleSearch} className="relative mb-6">"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"   />
                  <input"
                    type="text"
                    placeholder="Search services..."                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}"
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus: outlin e-none focus: borde r-zion-cyan/40 focus: rin g-2 focus: rin g-zion-cyan/20"
                  />
                </form>

                {/* Navigation Items */}"
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}`
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${location.pathname === item.href'
                                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white''
                                : 'text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30'`
                            }`}
"
                            <div className="flex items-center space-x-3">"
                              {item.icon && <item.icon className="w-4 h-4" />}
                              <span>{item.name}</span>
                            </div>`
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''`
                            }`}   />                          </button>

                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {activeDropdown === item.name && (<motion.div
                                initial = {

  { opacity: 0,
  height: 0

}}
                                animate = {

  { opacity: 1,
  height: 'auto'

}}
                                exit = {

  { opacity: 0,
  height: 0

}}
                                transition={{ duration: 0.3 }}"
                                className="ml-6 mt-2 space-y-1 overflow-hidden"

                                {item.dropdown.map((dropdownItem) => (;
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}"
                                    className="block px-4 py-2 text-gray-400 hover: tex t-white hover: b g-zion-slate-light/30 rounded-lg transition-all duration-200"

                                    {dropdownItem.name}
                                  </Link>) ) }
                              </motion.div>) }
                          </AnimatePresence>
                        </div>) : (;
                        <Link
                          to={item.href}`
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${location.pathname === item.href'
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white''
                              : 'text-gray-300 hover: tex t-white hover: b g-zion-slate-light/30'`
                          }`}
"
                          <div className="flex items-center space-x-3">"
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </div>
                        </Link>;) }
                    </div>) ) }
                </div>

                {/* Contact Info */}"
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">;"
                  <div className="text-center">"
                    <div className="text-zion-cyan font-semibold mb-2">Contact Us</div>"
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>+1 302 464 0950</div>
                      <div  > kleber@ziontechgroup.com</div>
                      <div  > 364 E Main St STE 1008</div>
                      <div  > Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>) }
        </AnimatePresence>
      </nav>;
 {/* Spacer for fixed navigation */};"
      <div className="h-20"></div>;
    </>
  )};
'"`

</motion>
</ChevronDown>
</motion>
</motion>
</item>
</motion>
</ChevronDown>
</item>
</Search>
</motion>
</Menu>
</X>
</User>
</Bell>
</Search>
</dropdownItem>
</motion>
</item>
</ChevronDown>
</item>
</motion>
</motion>
</motion>
</motion>
</motion>
</motion>