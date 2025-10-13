import React {useState} useEffect } from 'react' ' import { useRouter } from 'next/router'm 'framer-motion' import {X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown, Sparkles, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, FileText, HelpCircle} TrendingUp;
Star } from 'lucide-react' interface SidebarItem {name: string; href: string; icon: React.ReactNode; description?: string; children?: SidebarItem[]; badge?: string; color?: string; isNew?: boolean; isHot?: boolean} isPremium?: boolean} category?: string} const sidebarSections = [ {' title: 'Revolutionary Services', icon: Zap,' color: 'from-cyan-500 to-blue-600', items: [ {' name: 'AI & Consciousness',' href: '/ai-services', icon: Brain,' description: 'Advanced AI consciousness and evolution platforms', children: [ {' name: 'AI Consciousness Evolution'}' href: '/ai-consciousness-evolution' }, {name: 'AI Autonomous Ecosystem'} href: '/ai-autonomous-ecosystem' }, {name: 'AI Ethics & Governance'} href: '/ai-ethics-governance' }, {name: 'AI Creativity Studio'} href: '/ai-creativity-studio' }, {name: 'AI Education Platform'} href: '/ai-education-platform' }, {' name: 'AI Healthcare Diagnostics'}' href: '/ai-healthcare-diagnostics' }, {' name: 'AI Financial Intelligence'}' href: '/ai-financial-intelligence' }, {' name: 'AI Sustainability Platform'}' href: '/ai-sustainability-platform' }, {' name: 'AI Emotional Intelligence'}' href: '/ai-emotional-intelligence-platform' }, {' name: 'AI Legal Contract Analyzer'}' href: '/ai-legal-contract-analyzer' } ] }, {' name: 'Quantum Computing',' href: '/quantum-services', icon: Atom,' description: 'Next-generation quantum computing solutions', children: [ {' name: 'Quantum Cloud Infrastructure'}' href: '/quantum-cloud-infrastructure' }, {name: 'Quantum Bio-Computing'} href: '/quantum-bio-computing' }, {name: 'Quantum Energy Platform'} href: '/quantum-energy-platform' }, {' name: 'Quantum Materials Discovery'}' href: '/quantum-materials-discovery' }, {name: 'Quantum Robotics'} href: '/quantum-robotics' }, {' name: 'Quantum Internet Security'}' href: '/quantum-internet-security' }, {' name: 'Quantum Logistics'}' href: '/quantum-logistics-optimization' }, {' name: 'Quantum Cybersecurity'}' href: '/quantum-cybersecurity-platform' } ] }, {' name: 'Enterprise IT',' href: '/enterprise-it', icon: Shield,' description: 'Enterprise-grade IT infrastructure and security', children: [ {' name: 'Edge Computing Orchestrator'}' href: '/edge-computing-orchestration' }, {' name: 'Zero Trust Security Platform'}' href: '/zero-trust-network-architecture' }, {' name: 'Blockchain Enterprise Platform'}' href: '/blockchain-infrastructure-platform' }, {name: 'AI-Powered DevOps'} href: '/ai-powered-devops' }, {name: 'Quantum Networking'} href: '/quantum-networking' }, {' name: 'Autonomous IT Operations'}' href: '/autonomous-it-operations' }, {name: 'Quantum Data Center'} href: '/quantum-data-center' }, {name: 'Quantum Cloud Migration'} href: '/quantum-cloud-migration' } ] } ] }, {' title: 'Innovation Hub', icon: Rocket,' color: 'from-purple-500 to-pink-600', items: [ {' name: 'Research & Development',' href: '/research-development', icon: Lightbulb,' description: 'Cutting-edge research and innovation', children: [' { name: 'AI Research Lab'} href: '/ai-research-lab' }, {name: 'Quantum Research Center'} href: '/quantum-research-center' }, {name: 'Biotech Innovation Hub'} href: '/biotech-innovation-hub' }, {name: 'Space Technology Lab'} href: '/space-technology-lab' }, {name: 'Green Technology Center'} href: '/green-technology-center' } ] }, {' name: 'Future Technologies',' href: '/future-technologies', icon: Sparkles,' description: 'Emerging technologies and trends', children: [' { name: 'Metaverse Platform'} href: '/metaverse-platform' }, {' name: 'Neural Interface Technology'}' href: '/neural-interface-technology' }, {name: 'Holographic Computing'} href: '/holographic-computing' }, {name: 'Time Crystal Computing'} href: '/time-crystal-computing' }, {' name: 'Consciousness Upload Platform'}' href: '/consciousness-upload-platform' } ] } ] }, {' title: 'Company', icon: Globe,' color: 'from-green-500 to-teal-600', items: [ {' name: 'About Us',' href: '/about', icon: Users}' description: 'Learn about our mission and vision' }, {' name: 'Leadership',' href: '/leadership', icon: Award}' description: 'Meet our executive team' }, {' name: 'Careers',' href: '/careers', icon: Target}' description: 'Join our innovative team' }, {' name: 'News & Media',' href: '/news', icon: FileText}' description: 'Latest news and press releases' } ] }, {' title: 'Support', icon: HelpCircle,' color: 'from-orange-500 to-red-600', items: [ {' name: 'Documentation',' href: '/docs', icon: BookOpen}' description: 'Technical documentation and guides' }, {' name: 'Contact',' href: '/contact', icon: Phone}' description: 'Get in touch with our team' }, {' name: 'Status',' href: '/status', icon: BarChart3}' description: 'System status and uptime' } ] } ]; interface EnhancedSidebar2025 Props {isOpen: boolean} onClose: () => void} const EnhancedSidebar2025: React.FC<EnhancedSidebar2025 Props> = ({isOpen} onClose }) => {const router = useRouter(); const [expandedSections, setExpandedSections] = useState<string[]>([]); const [expandedItems, setExpandedItems] = useState<string[]>([])} const toggleSection = (sectionTitle: string) => { setExpandedSections(prev => prev.includes(sectionTitle) ? prev.filter(title => title !== sectionTitle) : [...prev} sectionTitle] )}; const toggleItem = (itemName: string) => {setExpandedItems(prev => prev.includes(itemName) ? prev.filter(name => name !== itemName) : [...prev} itemName] )}; const isActive = (href: string) => router.pathname === href, return (<React.Fragment> {/* Mobile overlay */}) {isOpen && ( <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-left">";'"text-left"
<div className="
<div className="text-left"text-left"
<span className="
< </div>
<div className="text-left"text-left"
<p className="
</div>
<button onClick={onClose} className="text-left"text-left"
</div> {/* Navigation */} <div className="
<div className="text-left"text-left"
<div className="
<div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-3`} ></div>
<section.icon className="text-left"text-left"
< </div> {expandedSections.includes(section.title) ? ( <ChevronDown className="text-left" /> )} </button>"text-left"'"text-left"
<div className="
<div className="text-left"> {item.description} </div> )} </div> {item.children && ( <button onClick={e => { e.preventDefault()} toggleItem(item.name)}} className="text-left" /> ) : ( <ChevronRight className="text-left"> {item.children.map((child} childIndex) => ( <Link key={childIndex} href={child.href} onClick={onClose} className={`block p-2 rounded-lg text-sm transition-colors ${ isActive(child.href)' ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-50' }`} > {child.name} </Link> ))} </motion.div> )} </AnimatePresence> )} </div> ))} </motion.div> )} </AnimatePresence></div> ))} </div></div> {/* Footer */} <div className="text-left"
<div className="text-left"https://linkedin.com/company/ziontechgroup" target=" rel="noopener <noreferrer"text-left"
<Globe className="
<a href="mailto:info@ziontechgroup.<com"text-left"
<Mail className="
</div>
<p className="text-left"text-left"
  g: 25} stiffnes,"
  s: 200 }} className="text-left"text-left"text-left"
<div className="text-left"text-left"
<span className="
<div className="text-left"text-left"
<p className="
</div>
<button onClick={onClose} className="text-left"text-left"
</div> {/* Navigation */} <div className="
<div className="text-left"text-left"
<div className="
<div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-3`} >
<section.icon className="text-left"text-left"text-left"text-left"
<AnimatePresence> {/* TODO: Fix JSX expression */}
  y: 0} heigh,
  t: 0 }}' animate={/* TODO: Fix JSX expression */}'
  y: 1} heigh,
  t: 'auto' }} exit={/* TODO: Fix JSX expression */}'
  y: 0} heigh,"
  t: 0 }} className="text-left")`$2 />"
  hover:bg-gray-50' }`} >'
<item.icon className="
<div className="text-left"text-left"text-left"text-left"text-left"text-left"
  y: 0} heigh,
  t: 0 }}' animate={/* TODO: Fix JSX expression */}'
  y: 1} heigh,
  t: 'auto' }} exit={/* TODO: Fix JSX expression */}'
  y: 0} heigh,"
  t: 0 }} className="text-left"
  hover:bg-gray-50' }`} > {child.name} </Link> ))} </motion.div> )} </AnimatePresence> )} </div> ))} </motion.div> )} </AnimatePresence></div> ))} </div></div> {/* Footer */} <div className="text-left"
<div className="text-left"http,"$2 />" target="_blank"noopener <noreferrer" className="
<Globe className="text-left"mailt,"$2 />" className="text-left"text-left"
</div>
<p className="
</div></motion.div>
</React.Fragment> )}; export default EnhancedSidebar2025; '"`</span></span>"
</section>