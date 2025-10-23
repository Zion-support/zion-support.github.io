'use client'
import React, {useStateuseEffect} from 'react'
import {Link} from 'react-router-do m'
import {ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server} from 'lucide-react'

constNavigation: React.FC= () =>{const [isOpensetIsOpen] = useState(false)
  const [servicesOpensetServicesOpen] = useState(false)
  const [aiServicesOpensetAiServicesOpen] = useState(false)
  const [itServicesOpensetItServicesOpen] = useState(false)
  const [microSaasOpensetMicroSaasOpen] = useState(false)
  const [isScrolledsetIsScrolled] = useState(false)

  useEffect(() => {
  
    consthandleResize= () => {
  
      if (windo w.innerWidth >=1024) {
        setIsOpen(false)
     }
    }
    consthandleScroll= () => {setIsScrolled(windo w.scrollY >50)
   }
    windo w.addEventListener('resize', handleResize)
    windo w.addEventListener('scroll', handleScroll)
    return () => {windo w.removeEventListener('resize', handleResize)
      windo w.removeEventListener('scroll', handleScroll)
   }
  }, [])

  consttoggleMenu= () => setIsOpen(!isOpen)
  consttoggleServices= () => setServicesOpen(!servicesOpen)
  consttoggleAiServices= () => setAiServicesOpen(!aiServicesOpen)
  consttoggleItServices= () => setItServicesOpen(!itServicesOpen)
  consttoggleMicroSaas= () => setMicroSaasOpen(!microSaasOpen)
  
  constcloseAllMenus= () => {setServicesOpen(false)
    setAiServicesOpen(false)
    setItServicesOpen(false)
    setMicroSaasOpen(false)
    setIsOpen(false)
 }

  // ServicedataconstaiServices= [
    {name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights'},
    {name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows'},
    {name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations'},
    {name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management'},
    {name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection'},
    {name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights'},
    {name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions'},
    {name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign, description: 'Financial technology'}
  ]

  constitServices= [
    {name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions'},
    {name: 'API Management', href: '/ai-api-management', icon: Code, description: 'API development & management'},
    {name: 'Cybersecurity', href: '/ai-cybersecurity-suite', icon: Shield, description: 'Comprehensive security'},
    {name: 'Data Management', href: '/ai-data-analytics', icon: Database, description: 'Data processing & storage'},
    {name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps'},
    {name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications'}
  ]

  constmicroSaasServices= [
    {name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText, description: 'Automated content creation'},
    {name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail, description: 'Smart email management'},
    {name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Financial tracking'},
    {name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated invoicing'},
    {name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Prospect identification'},
    {name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Project coordination'}
  ]

  constemergingTech= [
    {name: '5 G Implementation', href: '/5 g-implementation', icon: Zap, description: 'Next-gen connectivity'},
    {name: 'AI3D Generation', href: '/ai-3 d-generation', icon: Box, description: '3 D content creation'},
    {name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments'},
    {name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems'},
    {name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI'},
    {name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing'}
  ]

  return (
  <navclassName={`fixed top-0 left-0 right-0 z-5 0 transition-all duration-300${
      isScrolled ? 'bg-slate-90 0/95backdrop-blur-md shado w-lg'  : 'bg-transparent'
  }`}><divclassName="max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="flex items-centerjustify-betweenh-16">{/* Logo */}
        <divclassName="flex-shrink-0"><Linkto="/"className="flexitems-centerspace-x-2"><divclassName="w-8 h-8 bg-gradient-to-r from-blue-500to-purple-600rounded-lg flexitems-centerjustify-center"><BrainclassName="w-5h-5text-white" /></di><spanclassName="text-xlfont-boldtext-white">ZionTechGroup</spa></Lin></di>{/* DesktopNavigation */}
        <divclassName="hiddenlg:flexitems-centerspace-x-8"><Linkto="/"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">Home
          </Lin>{/* AI Services Dropdown */}
          <divclassName="relativegroup"><
                onClick={toggleAiServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ></
                onClick={toggleAiServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ><BrainclassName="w-4h-4" /><spa n>AIServices</spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${aiServicesOpen ? 'rotate-18 0':''}`} /></butto>{aiServicesOpen && (
              <divclassName="absolute top-full left-0 mt-2 w-96bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4cyber-card"><divclassName="gridgrid-cols-1gap-2">{aiServices.map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      ><service.iconclassName="w-5 h-5text-cyan-400group-hover:text-cyan-300" /><di v><divclassName="text-whitefont-medium">{service.name}</di><divclassName="text-xstext-gray-400">{service.description}</di></di><ArrowRightclassName="w-4 h-4 text-gray-400group-hover:text-cyan-400ml-auto" /></Lin>))}
                </di></di>)}
          </di>{/* IT Services Dropdown */}
          <divclassName="relativegroup"><
                onClick={toggleItServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ></
                onClick={toggleItServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ><CloudclassName="w-4h-4" /><spa n>ITServices</spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${itServicesOpen ? 'rotate-18 0':''}`} /></butto>{itServicesOpen && (
              <divclassName="absolute top-full left-0 mt-2 w-80bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4cyber-card"><divclassName="gridgrid-cols-1gap-2">{itServices.map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      ><service.iconclassName="w-5 h-5text-cyan-400group-hover:text-cyan-300" /><di v><divclassName="text-whitefont-medium">{service.name}</di><divclassName="text-xstext-gray-400">{service.description}</di></di><ArrowRightclassName="w-4 h-4 text-gray-400group-hover:text-cyan-400ml-auto" /></Lin>))}
                </di></di>)}
          </di>{/* Micro SAAS Dropdown */}
          <divclassName="relativegroup"><
                onClick={toggleMicroSaas}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ></
                onClick={toggleMicroSaas}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ><CpuclassName="w-4h-4" /><spa n>MicroSAAS</spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${microSaasOpen ? 'rotate-18 0':''}`} /></butto>{microSaasOpen && (
              <divclassName="absolute top-full left-0 mt-2 w-96bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4cyber-card"><divclassName="gridgrid-cols-1gap-2">{microSaasServices.map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      ><service.iconclassName="w-5 h-5text-cyan-400group-hover:text-cyan-300" /><di v><divclassName="text-whitefont-medium">{service.name}</di><divclassName="text-xstext-gray-400">{service.description}</di></di><ArrowRightclassName="w-4 h-4 text-gray-400group-hover:text-cyan-400ml-auto" /></Lin>))}
                </di></di>)}
          </di>{/* Emerging Technologies Dropdown */}
          <divclassName="relativegroup"><
                onClick={toggleServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ></
                onClick={toggleServices}
               className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
              ><ZapclassName="w-4h-4" /><spa n>EmergingTech</spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${servicesOpen ? 'rotate-18 0':''}`} /></butto>{servicesOpen && (
              <divclassName="absolute top-full left-0 mt-2 w-80bg-slate-80 0/95backdrop-blur-md rounded-lg shado w-xl border border-cyan-500/20p-4cyber-card"><divclassName="gridgrid-cols-1gap-2">{emergingTech.map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="flex items-center space-x-3 p-3 rounded-lghover:bg-cyan-50 0/10transition-colors duration-300group"
                        onClick={closeAllMenus}
                      ><service.iconclassName="w-5 h-5text-cyan-400group-hover:text-cyan-300" /><di v><divclassName="text-whitefont-medium">{service.name}</di><divclassName="text-xstext-gray-400">{service.description}</di></di><ArrowRightclassName="w-4 h-4 text-gray-400group-hover:text-cyan-400ml-auto" /></Lin>))}
                </di></di>)}
          </di><Linkto="/about"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">About
          </Lin><Linkto="/services"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">Services
          </Lin><Linkto="/pricing"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">Pricing
          </Lin><Linkto="/blog"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">Blog
          </Lin><Linkto="/contact"className="text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium">Contact
          </Lin></di>{/* ContactInfo */}
        <divclassName="hiddenlg:flexitems-centerspace-x-4"><ahref="tel:+13024640950"
             className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
            ><PhoneclassName="w-4h-4" /><spanclassName="text-sm">(302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
             className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
            ><MailclassName="w-4h-4" /><spanclassName="text-sm">Email</spa></a></di>{/* Mobile MenuButton */}
        <divclassName="lg:hidden"><
              onClick={toggleMenu}
             className="text-gray-300 hover:text-white p-2rounded-mdtransition-colors"
            ></
              onClick={toggleMenu}
             className="text-gray-300 hover:text-white p-2rounded-mdtransition-colors"
            >{isOpen?<XclassName="h-6w-6" />:<MenuclassName="h-6w-6"/>}
          </butto></di></di>{/* MobileNavigation */}
        {isOpen && (
        <divclassName="lg:hidden mt-4 pb-4 border-t border-cyan-500/20"><divclassName="pt-4space-y-4"><Linkto="/"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"onClick={closeAllMenus}>Home
            </Lin>{/* Mobile AIServices */}
            <di v><
                  onClick={toggleAiServices}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ></
                  onClick={toggleAiServices}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ><spanclassName="flexitems-centerspace-x-2"></className="flexitems-centerspace-x-2"><BrainclassName="w-4h-4" /><spa n>AIServices</spa></spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${aiServicesOpen ? 'rotate-18 0':''}`} /></butto>{aiServicesOpen && (
                <divclassName="mt-2ml-4space-y-2">{aiServices.slice(0 8).map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >{service.name}
                    </Lin>))}
                 <Linkto="/ai-services"
                     className="block text-sm text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                      onClick={closeAllMenus}
                    >View All AI Services →
                  </Lin></di>)}
            </di>{/* Mobile ITServices */}
            <di v><
                  onClick={toggleItServices}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ></
                  onClick={toggleItServices}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ><spanclassName="flexitems-centerspace-x-2"></className="flexitems-centerspace-x-2"><CloudclassName="w-4h-4" /><spa n>ITServices</spa></spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${itServicesOpen ? 'rotate-18 0':''}`} /></butto>{itServicesOpen && (
                <divclassName="mt-2ml-4space-y-2">{itServices.map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >{service.name}
                    </Lin>))}
                </di>)}
            </di>{/* Mobile MicroSAAS */}
            <di v><
                  onClick={toggleMicroSaas}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ></
                  onClick={toggleMicroSaas}
                 className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium"
                ><spanclassName="flexitems-centerspace-x-2"></className="flexitems-centerspace-x-2"><CpuclassName="w-4h-4" /><spa n>MicroSAAS</spa></spa><ChevronDownclassName={`w-4 h-4 transition-transform duration-300${microSaasOpen ? 'rotate-18 0':''}`} /></butto>{microSaasOpen && (
                <divclassName="mt-2ml-4space-y-2">{microSaasServices.slice(0 6).map((service) => (
                   <Linkkey={service.name}
                        to={service.href}
                       className="block text-sm text-gray-400 hover:text-cyan-400transition-colorsduration-300"
                        onClick={closeAllMenus}
                      >{service.name}
                    </Lin>))}
                 <Linkto="/micro-saas"
                     className="block text-sm text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                      onClick={closeAllMenus}
                    >View All Micro SAAS →
                  </Lin></di>)}
            </di><Linkto="/about"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>About
            </Lin><Linkto="/services"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Services
            </Lin><Linkto="/pricing"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Pricing
            </Lin><Linkto="/blog"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Blog
            </Lin><Linkto="/contact"className="block text-gray-300 hover:text-cyan-400transition-colors duration-300font-medium" onClick={closeAllMenus}>Contact
            </Lin>{/* Mobile ContactInfo */}
            <divclassName="pt-4 border-t border-cyan-50 0/20space-y-2"><ahref="tel:+13024640950"
                 className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                ><PhoneclassName="w-4h-4" /><spa n>(302)464-0950</spa></a><ahref="mailto:kleber@ziontechgroup.com"
                 className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300transition-colors duration-300font-medium"
                ><MailclassName="w-4h-4" /><spa n>kleber@ziontechgroup.com</spa></a><divclassName="flex items-center space-x-2text-gray-400"><MapPinclassName="w-4h-4" /><spanclassName="text-sm">364E Main St STE1008, Middletown DE19709</spa></di></di></di></di>)}
    </di></na>
  )
}

export default Navigation