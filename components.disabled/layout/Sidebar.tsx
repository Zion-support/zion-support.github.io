import React from \'react\' import { Link } from \'next/link\' import {X,Phone,Mail}MapPin;
ArrowRight } from \'lucide-react\' interface SidebarProps {; isOpen: boolean} onClose: () => void}} } ; const Sidebar: React.FC<SidebarProps> = ({isOpen}onClose }) => {; const serviceCategories = [; {; title: \'Micro SaaS\'} services: [, { name: \'AI Email Responder Pro\'}href: \'/services/ai-email-responder\' }; {name: \'Smart Inventory Predictor\'}href: \'/services/smart-inventory-predictor\' }; {name: \'AI Customer Insights Platform\'}href: \'/services/ai-customer-insights\' }; {name: \'Smart Contract Security Auditor\'}href: \'/services/smart-contract-auditor\' }; {name: \'AI Video Editor Pro\'}href: \'/services/ai-video-editor\' }; {name: \'Smart Energy Monitor\'}href: \'/services/smart-energy-monitor\' }; ];}; {; title: \'IT Services\'} services: [, { name: \'Zero Trust Security Implementation\'}href: \'/services/zero-trust-security\' }; {name: \'Hybrid Cloud Management Platform\'}href: \'/services/hybrid-cloud-management\' }; {name: \'IoT Platform Development\'}href: \'/services/iot-platform-development\' }; {name: \'API Security Gateway\'}href: \'/services/api-security-gateway\' }; {name: \'Edge Computing Solutions\'}href: \'/services/edge-computing-solutions\' }; {name: \'Quantum-Ready Security\'}href: \'/services/quantum-ready-security\' }; ];}; {; title: \'AI Services\'} services: [, { name: \'AI Voice Synthesis Platform\'}href: \'/services/ai-voice-synthesis\' }; {name: \'AI Medical Diagnosis Assistant\'}href: \'/services/ai-medical-diagnosis\' }; {name: \'AI Legal Document Analyzer\'}href: \'/services/ai-legal-document-analyzer\' }; {name: \'AI Autonomous Vehicle Systems\'}href: \'/services/ai-autonomous-vehicles\' }; {name: \'AI Robotic Process Automation\'}href: \'/services/ai-robotic-process-automation\' }; {name: \'AI Drug Discovery Platform\'}href: \'/services/ai-drug-discovery\' }; ];} ]; const quickLinks = [; {name: \'About Us\'}href: \'/about\' }; {name: \'Careers\'}href: \'/careers\' }; {name: \'Contact\'}href: \'/contact\' }; {name: \'Blog\'}href: \'/blog\' }; {name: \'Case Studies\'}href: \'/case-studies\' }; {name: \'Privacy Policy\'}href: \'/privacy\' }; {name: \'Terms of Service\'}href: \'/terms\' }; ]; return (; <React.Fragment> {} {isOpen && () <div } className=\"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden\";'"
<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2 xl transform transition-transform duration-300 ease-in-out z-50 lg: hidden ${, isOpen ? \'translate-x-0\' : \'translate-x-full\'}}`}></div>'
<div className=\\"> {}</div>"
<div className=\\"></div>"
<h2 className=\\">Services & Solutions>"
</div>
<button; onClick={onClose} className=\\"></button>"
<X className=\\" /> >"
</div> >
</div> {} <div className=\\"> {}</div>"
<div className=\\"></div>"
<h3 className=\\">Get in Touch>"
</div>
<div className=\\"></div>"
<div className=\\"></div>"
<Phone className=\\" />"
<a href=\\" className=\\"text-gray-700 hover:text-blue-600 transition-colors\\"
</div> >
</div>
<div className=\\"flex items-center space-x-3\\"
<Mail className=\\"w-5 h-5 text-blue-600\\"
<a href=\\"mailto:kleber@ziontechgroup.com\\"text-gray-700 hover:text-blue-600 transition-colors\\"> kleber@ziontechgroup.com; >"flex items-start space-x-3\\"></div>"w-5 h-5 text-blue-600 mt-1\\" />"text-gray-700 text-sm\\"> 364 E Main St STE 1008</span>"p-6\\"> {serviceCategories.map((category) => (}</div>"mb-8\\"></div>"text-lg font-semibold text-gray-900 mb-4\\">{category.title}>"space-y-2\\"> {category.services.map((service) => (} <li key={service.name}>"flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors py-2\\" onClick={onClose} >"text-sm\\">{service.name}>"w-4 h-4\\" /> >"p-6 border-t border-gray-200\\"></div>"text-lg font-semibold text-gray-900 mb-4\\">Quick Links>"space-y-2\\"> {quickLinks.map((link) => (} <li key={link.name}>"text-gray-600 hover:text-blue-600 transition-colors text-sm py-1 block\\" onClick={onClose} > {link.name} >"p-6 border-t border-gray-200 bg-gray-50\\"></div>"/contact\\" className=\\" onClick={onClose} > Get Free Quote; >"
</div> >
</div> >
</div> >
</div> >
</div> );}; export default Sidebar;' const React from "  import {X,Phone,Mail}MapPin;
ArrowRight } from "lucide-react"Micro SaaS"} services: [, { name: "}href: "/services/ai-email-responder"Smart Inventory Predictor"}href: " }; {name: "AI Customer Insights Platform"/services/ai-customer-insights" }; {name: "}href: "/services/smart-contract-auditor"AI Video Editor Pro"}href: " }; {name: "Smart Energy Monitor"/services/smart-energy-monitor" }; ];}; {; title: "} services: [, { name: "Zero Trust Security Implementation"/services/zero-trust-security" }; {name: "}href: "/services/hybrid-cloud-management"IoT Platform Development"}href: " }; {name: "API Security Gateway"/services/api-security-gateway" }; {name: "}href: "/services/edge-computing-solutions"Quantum-Ready Security"}href: " }; ];}; {; title: "AI Services"AI Voice Synthesis Platform"}href: " }; {name: "AI Medical Diagnosis Assistant"/services/ai-medical-diagnosis" }; {name: "}href: "/services/ai-legal-document-analyzer"AI Autonomous Vehicle Systems"}href: " }; {name: "AI Robotic Process Automation"/services/ai-robotic-process-automation" }; {name: "}href: "/services/ai-drug-discovery"About Us"}href: " }; {name: "Careers"/careers" }; {name: "}href: "/contact"Blog"}href: " }; {name: "Case Studies"/case-studies" }; {name: "}href: "/privacy"Terms of Service"}href: " }; ]; return (; <React.Fragment> {} {isOpen && (; <div ) className="text-left"
<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2 xl transform transition-transform duration-300 ease-in-out z-50 lg: hidden ${, isOpen ? "translate-x-0"translate-x-full"}}`}></div>"text-left"
<div className="
<h2 className="text-left"text-left"
<X className="
</div> >
</div> {} <div className="text-left"text-left"
<h3 className="
</div>
<div className="text-left"text-left"
<Phone className="
<a href="tel: +<13024640950"text-left"
</div> >
</div>
<div className="
<Mail className="text-left"mailto:kleber@ziontechgroup.<com" className="
</div> >
</div>
<div className="text-left"text-left"
<span className="
<br /> Middletown DE 19709, >
</div> >
</div> >
</div> >
</div> {} <div className="text-left"text-left"
<h3 className="
</div>
<ul className="text-left"text-left"
<span className="
</div>
<Link className="text-left"text-left"
<h3 className="
</div>
<ul className="text-left"text-left"
</div> >
</div> ))} >
</div> >
</div> >
</div> {} <div className="
<Link; href="/<contact"text-left"
</div> >
</div> >
</div> >
</div> >
</div> );}; export default Sidebar;'"`' import _React from 'react' import { Link } from 'react-routowRight } from 'lucide-react' interface SidebarProps {;
isOpen: boolean} onClose: () => void}} } ; const Sidebar: _React.FC<SidebarProps> = ({isOpen}onClose }) => {; const serviceCategories = [; {; title: 'Micro SaaS} services: [, { name: 'AI Email Responder Pro}href: '/services/ai-email-responder' }; {name: 'Smart Inventory Predictor}href: '/services/smart-inventory-predictor' }; {name: 'AI Customer Insights Platform}href: '/services/ai-customer-insights' }; {name: 'Smart Contract Security Auditor}href: '/services/smart-contract-auditor' }; {name: 'AI Video Editor Pro}href: '/services/ai-video-editor' }; {name: 'Smart Energy Monitor}href: '/services/smart-energy-monitor' }; ];}; {; title: 'IT Services} services: [, { name: 'Zero Trust Security Implementation}href: '/services/zero-trust-security' }; {name: 'Hybrid Cloud Management Platform}href: '/services/hybrid-cloud-management' }; {name: 'IoT Platform Development}href: '/services/iot-platform-development' }; {name: 'API Security Gateway}href: '/services/api-security-gateway' }; {name: 'Edge Computing Solutions}href: '/services/edge-computing-solutions' }; {name: 'Quantum-Ready Security}href: '/services/quantum-ready-security' }; ];}; {; title: 'AI Services} services: [, { name: 'AI Voice Synthesis Platform}href: '/services/ai-voice-synthesis' }; {name: 'AI Medical Diagnosis Assistant}href: '/services/ai-medical-diagnosis' }; {name: 'AI Legal Document Analyzer}href: '/services/ai-legal-document-analyzer' }; {name: 'AI Autonomous Vehicle Systems}href: '/services/ai-autonomous-vehicles' }; {name: 'AI Robotic Process Automation}href: '/services/ai-robotic-process-automation' }; {name: 'AI Drug Discovery Platform}href: '/services/ai-drug-discovery' }; ];} ]; const quickLinks = [; {name: 'About Us}href: '/about' }; {name: 'Careers}href: '/careers' }; {name: 'Contact}href: '/contact' }; {name: 'Blog}href: '/blog' }; {name: 'Case Studies}href: '/case-studies' }; {name: 'Privacy Policy}href: '/privacy' }; {name: 'Terms of Service}href: '/terms' }; ]; return (; <React.Fragment> {} {isOpen && (; <div ) className="text-left"
<div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2 xl transform transition-transform duration-300 ease-in-out z-50 lg: hidden ${, isOpen ? 'translate-x-0' : 'translate-x-full'}}`}></div>'
<div className="text-left"text-left"
<h2 className="
</div>
<button; onClick={onClose} className="text-left"text-left"
</div> >
</div> {} <div className="
<div className="text-left"text-left"
</div>
<div className="
<div className="text-left"text-left"
<a href=" className="text-left"text-left"
<Mail className="
<a href="mailto:kleber@ziontechgroup.<com"text-left"
</div> >
</div>
<div className="
<MapPin className="text-left"text-left"
<br /> Middletown DE 19709, >
</div> >
</div> >
</div> >
</div> {} <div className="
<div key={category.title} className="text-left"text-left"
</div>
<ul className="
<Link; href={service.href} className="text-left"text-left"
</div>
<Link className="
</div> >
</div> ))} >
</div> >
</div> ))} >
</div> {} <div className="text-left"text-left"
</div>
<ul className="
<Link; href={link.href} className="text-left"text-left"
<Link; href=" className="text-left"fixed inset-0 bg-black bg-opacity-50 z-40,"$2 />"
  lg:hidden\" onClick={onClose} /> )} ; {} < className={/* TODO: Fix JSX expression */}"
  lg: hidden ${, isOpen ? \'translate-x-0\' : \'translate-x-full\'}}`}>'
<div className=\\"flex flex-col h-full\\"flex items-center justify-between p-6 border-b border-gray-200\\">"text-xl font-bold text-gray-900\\">Services & Solutions>"p-2,"$2 />">"
</button>
<X className=\\" /> >"
</div> >
</div> {} <div className=\\"> {} <div className=\\"p-6 bg-blue-50 border-b border-gray-200\\"
<h3 className=\\"text-lg font-semibold text-gray-900 mb-4\\"
</div>
<div className=\\"space-y-3\\"
<div className=\\"flex items-center space-x-3\\"
<Phone className=\\"w-5 h-5 text-blue-600\\"
< href=\\"te,"
  l: +13024640950\\" className=\\""
  hover:text-blue-600 transition-colors\\"
</div> >
</div>
<div className=\\"flex items-center space-x-3\\"
<Mail className=\\"w-5 h-5 text-blue-600\\"
< href=\\"mailt,"
  o:kleber@ziontechgroup.com\\" className=\\""
  hover:text-blue-600 transition-colors\\"
</div> >
</div>
<div className=\\"flex items-start space-x-3\\"
<MapPin className=\\"w-5 h-5 text-blue-600 mt-1\\"
<span className=\\"text-gray-700 text-sm\\"
</div> >
</div> >
</div> >
</div> {} <div className=\\"p-6\\"mb-8\\">"text-lg font-semibold text-gray-900 mb-4\\">{category.title}>"space-y-2\\"> {category.services.map((service) => (} <li key={service.name}>"flex items-center justify-between text-gray-600,"$2 />" onClick={onClose} >"
<span className=\\">{service.name}>"
</div>
<Link className=\\" /> >"
</div> >
</div> ))} >
</div> >
</div> ))} >
</div> {} <div className=\\">"
<h3 className=\\">Quick Links>"
</div>
<ul className=\\"> {quickLinks.map((link) => (} <li key={link.name}>"
<) href={link.href} className=\\"$2 />"
  hover:text-blue-600 transition-colors text-sm py-1 block\\"
</div> >
</div> ))} >
</div> >
</div> >
</div> {} <div className=\\"p-6 border-t border-gray-200 bg-gray-50\\"
<; href=\\"/contact\\"w-full bg-blue-600,"$2 />" onClick={onClose} > Get Free Quote; >"
</div> >
</div> >
</div> >
</div> >
</div> );}; export default Sidebar;' const React from " import { Link } from "next/link"lucide-react" interface SidebarProps {/* TODO: Fix JSX expression */}"
  n: boolean} onClos,
  e: () => void}} } ;
const,
  Sidebar: React.FC<SidebarProps> = ({isOpen}onClose }) => {/* TODO: Fix JSX expression */}""Micro SaaS"} service,""
  e: "}hre,""/services/ai-email-responder" }; {/* TODO: Fix JSX expression */}"
  e: "Smart Inventory Predictor""
  f: " }; {/* TODO: Fix JSX expression */}""AI Customer Insights Platform"}hre,"
  f: "/services/ai-customer-insights""
  e: "}hre,""/services/smart-contract-auditor" }; {/* TODO: Fix JSX expression */}"
  e: "AI Video Editor Pro""
  f: " }; {/* TODO: Fix JSX expression */}""Smart Energy Monitor"}hre,"
  f: "/services/smart-energy-monitor""
  e: "} service,"
  s: [, {/* TODO: Fix JSX expression */}"
  e: "Zero Trust Security Implementation""
  f: " }; {/* TODO: Fix JSX expression */}""Hybrid Cloud Management Platform"}hre,"
  f: "/services/hybrid-cloud-management""
  e: "}hre,""/services/iot-platform-development" }; {/* TODO: Fix JSX expression */}"
  e: "API Security Gateway""
  f: " }; {/* TODO: Fix JSX expression */}""Edge Computing Solutions"}hre,"
  f: "/services/edge-computing-solutions""
  e: "}hre,""/services/quantum-ready-security" }; ];}; {/* TODO: Fix JSX expression */}"
  e: "AI Services"
  s: [, {/* TODO: Fix JSX expression */}""AI Voice Synthesis Platform"}hre,"
  f: "/services/ai-voice-synthesis""
  e: "}hre,""/services/ai-medical-diagnosis" }; {/* TODO: Fix JSX expression */}"
  e: "AI Legal Document Analyzer""
  f: " }; {/* TODO: Fix JSX expression */}""AI Autonomous Vehicle Systems"}hre,"
  f: "/services/ai-autonomous-vehicles""
  e: "}hre,""/services/ai-robotic-process-automation" }; {/* TODO: Fix JSX expression */}"
  e: "AI Drug Discovery Platform""
  f: " }; ];} ]; const quickLinks = [; {/* TODO: Fix JSX expression */}""About Us"}hre,"
  f: "/about""
  e: "}hre,""/careers" }; {/* TODO: Fix JSX expression */}"
  e: "Contact""
  f: " }; {/* TODO: Fix JSX expression */}""Blog"}hre,"
  f: "/blog""
  e: "}hre,""/case-studies" }; {/* TODO: Fix JSX expression */}"
  e: "Privacy Policy""
  f: " }; {/* TODO: Fix JSX expression */}""Terms of Service"}hre,"
  f: "/terms"text-left"`$2 />"translate-x-0" : "}}`}>"
<div className="text-left">"text-left"
</div>
<button; onClick={onClose} className="
<X className="text-left"text-left"text-left"
<h3 className="text-left"text-left"
<div className="
<Phone className="text-left"te,"$2 />" className="text-left"text-left"
<Mail className="
< href="mailt,"
  o:kleber@ziontechgroup.<com" className="
</div> >
</div>
<div className="text-left"text-left"
<span className="
</div> >
</div> >
</div> >
</div> {} <div className="text-left">"
<h3 className="
</div>
<ul className="text-left"text-left"
<span className="
</div>
<Link className="text-left"text-left"
<h3 className="
</div>
<ul className="text-left"text-left"
</div> >
</div> ))} >
</div> >
</div> >
</div> {} <div className="
<Link; href="/<contact"text-left"
</div> >
</div> >
</div> >
</div> >
</div> );}; export default Sidebar;'"`' import _React from 'react' import { Link } from 'react-router-dom' import {X,Phone,Mail}MapPin;
ArrowRight } from 'lucide-react' interface SidebarProps {/* TODO: Fix JSX expression */}';'"
  n: boolean} onClos,
  e: () => void}} } ; const,
  Sidebar: _React.FC<SidebarProps> = ({isOpen}onClose }) => {/* TODO: Fix JSX expression */}
  e: 'Micro SaaS} service,'
  s: [, {/* TODO: Fix JSX expression */}
  e: 'AI Email Responder Pro}hre,'
  f: '/services/ai-email-responder' }; {/* TODO: Fix JSX expression */}'
  e: 'Smart Inventory Predictor}hre,'
  f: '/services/smart-inventory-predictor' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Customer Insights Platform}hre,'
  f: '/services/ai-customer-insights' }; {/* TODO: Fix JSX expression */}'
  e: 'Smart Contract Security Auditor}hre,'
  f: '/services/smart-contract-auditor' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Video Editor Pro}hre,'
  f: '/services/ai-video-editor' }; {/* TODO: Fix JSX expression */}'
  e: 'Smart Energy Monitor}hre,'
  f: '/services/smart-energy-monitor' }; ];}; {/* TODO: Fix JSX expression */}'
  e: 'IT Services} service,'
  s: [, {/* TODO: Fix JSX expression */}
  e: 'Zero Trust Security Implementation}hre,'
  f: '/services/zero-trust-security' }; {/* TODO: Fix JSX expression */}'
  e: 'Hybrid Cloud Management Platform}hre,'
  f: '/services/hybrid-cloud-management' }; {/* TODO: Fix JSX expression */}'
  e: 'IoT Platform Development}hre,'
  f: '/services/iot-platform-development' }; {/* TODO: Fix JSX expression */}'
  e: 'API Security Gateway}hre,'
  f: '/services/api-security-gateway' }; {/* TODO: Fix JSX expression */}'
  e: 'Edge Computing Solutions}hre,'
  f: '/services/edge-computing-solutions' }; {/* TODO: Fix JSX expression */}'
  e: 'Quantum-Ready Security}hre,'
  f: '/services/quantum-ready-security' }; ];}; {/* TODO: Fix JSX expression */}'
  e: 'AI Services} service,'
  s: [, {/* TODO: Fix JSX expression */}
  e: 'AI Voice Synthesis Platform}hre,'
  f: '/services/ai-voice-synthesis' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Medical Diagnosis Assistant}hre,'
  f: '/services/ai-medical-diagnosis' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Legal Document Analyzer}hre,'
  f: '/services/ai-legal-document-analyzer' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Autonomous Vehicle Systems}hre,'
  f: '/services/ai-autonomous-vehicles' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Robotic Process Automation}hre,'
  f: '/services/ai-robotic-process-automation' }; {/* TODO: Fix JSX expression */}'
  e: 'AI Drug Discovery Platform}hre,'
  f: '/services/ai-drug-discovery' }; ];} ]; const quickLinks = [; {/* TODO: Fix JSX expression */}'
  e: 'About Us}hre,'
  f: '/about' }; {/* TODO: Fix JSX expression */}'
  e: 'Careers}hre,'
  f: '/careers' }; {/* TODO: Fix JSX expression */}'
  e: 'Contact}hre,'
  f: '/contact' }; {/* TODO: Fix JSX expression */}'
  e: 'Blog}hre,'
  f: '/blog' }; {/* TODO: Fix JSX expression */}'
  e: 'Case Studies}hre,'
  f: '/case-studies' }; {/* TODO: Fix JSX expression */}'
  e: 'Privacy Policy}hre,'
  f: '/privacy' }; {/* TODO: Fix JSX expression */}'
  e: 'Terms of Service}hre,"
  f: '/terms' }; ]; return (; <React.Fragment> {} {isOpen && (; <div ) className="text-left"'"
  lg: hidden ${, isOpen ? 'translate-x-0' : 'translate-x-full'}}`}>'
<div className="text-left">"text-left"
</div>
<button; onClick={onClose} className="
<X className="text-left"text-left"text-left"
<h3 className="text-left"text-left"
<div className="
<Phone className="text-left"te,"$2 />" className="text-left"text-left"
<Mail className="
< href="mailt,"
  o:kleber@ziontechgroup.<com" className="
</div> >
</div>
<div className="text-left"text-left"
<span className="
</div> >
</div> >
</div> >
</div> {} <div className="text-left">"
<h3 className="
</div>
<ul className="text-left"text-left"
<span className="
</div>
<Link className="text-left"text-left"
<h3 className="
</div>
<ul className="text-left"text-left"
</div> >
</div> ))} >
</div> >
</div> >
</div> {} <div className="
<Link; href="/<contact"text-left"
</div> >
</div> >
</div> >
</div> >
</div> );}; export default Sidebar;'";'"
</span></span>
</span></span>
</span></span>
</span></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</Link></Link>
</a></a>
</a></a>
</a></a>
</h2></h2>
</h2></h2>
</h2></h2>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</h3></h3>
</ul></ul>
</ul></ul>
</ul></ul>
</ul></ul>
</ul></ul>
</ul></ul>
</li></li>
</li></li>
</li></li>
</li></li>
</li></li>
</li></li>