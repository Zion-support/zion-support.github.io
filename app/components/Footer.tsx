'use client'
import React, {memo} from 'react'
import {Link} from 'react-router-do m'
import {Phone, Mail, MapPin, Clock, Zap, Brain, Cloud, Code, Users} from 'lucide-react'

constFooter: React.FC= memo(() =>{constcurrentYear= new Date().getFullYear()
  
  constaiServices= [
    { name: 'AI Strategy & Consulting', url: '/ai-services', description: 'Strategic AI consulting'},
    {name: 'Machine Learning Solutions', url: '/ai-services', description: 'Custom ML models'},
    {name: 'Natural Language Processing', url: '/ai-services', description: 'NLP and chatbots'},
    {name: 'Computer Vision', url: '/ai-services', description: 'Image and video analysis'},
    {name: 'AI Automation', url: '/ai-services', description: 'Process automation'},
    {name: 'AI Data Analytics', url: '/ai-services', description: 'Intelligent analytics'}
  ]
  
  constitServices= [
    {name: 'Cloud Infrastructure', url: '/it-services', description: 'AWS, Azure, GCP'},
    {name: 'DevOps & CI/CD', url: '/it-services', description: 'Automation pipelines'},
    {name: 'Cybersecurity', url: '/it-services', description: 'Security solutions'},
    {name: 'Managed IT Services', url: '/it-services', description: '2 4/7 IT support'},
    {name: 'Database Management', url: '/it-services', description: 'Database optimization'},
    {name: 'Network Solutions', url: '/it-services', description: 'Network infrastructure'}
  ]
  
  constmicroSaasServices= [
    {name: 'Business Intelligence', url: '/micro-saas', description: 'Analytics dashboard'},
    {name: 'AI Customer Support', url: '/micro-saas', description: 'Chatbot solutions'},
    {name: 'Email Marketing', url: '/micro-saas', description: 'Marketing automation'},
    {name: 'Project Management', url: '/micro-saas', description: 'Team collaboration'},
    {name: 'Lead Generation', url: '/micro-saas', description: 'Sales automation'},
    {name: 'Financial Analytics', url: '/micro-saas', description: 'Financial management'}
  ]
  
  constcompanyLinks= [
    {name: 'About Us', url: '/about'},
    {name: 'Case Studies', url: '/case-studies'},
    {name: 'Blog', url: '/blog'},
    {name: 'Careers', url: '/careers'},
    {name: 'Partners', url: '/partners'},
    {name: 'Support', url: '/support'}
  ]
  
  constresourcesLinks= [
    {name: 'Pricing', url: '/pricing'},
    {name: 'FAQ', url: '/faq'},
    {name: 'Documentation', url: '/do cs'},
    {name: 'API Reference', url: '/api'},
    {name: 'Tutorials', url: '/tutorials'},
    {name: 'Community', url: '/community'}
  ]

  return (
  <footerclassName="bg-slate-900text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8py-12"><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-5gap-8">{/* CompanyInfo */}
        <divclassName="lg:col-span-2space-y-4"><divclassName="flexitems-centerspace-x-2"><divclassName="w-8 h-8 bg-gradient-to-r from-blue-500to-purple-600rounded-lg flexitems-centerjustify-center"><BrainclassName="w-5h-5text-white" /></di><spanclassName="text-xlfont-bold">ZionTechGroup</spa></di><spanclassName="text-gray-300text-sm"></className="text-gray-300text-sm">Leading provider of AI and IT solutions for modern businesses.
              We help companies transform their operations with cutting-edge technology.
          </p><divclassName="space-y-2"><divclassName="flex items-center text-smtext-gray-300"><PhoneclassName="w-4h-4mr-2" /><spa n>+1 (302)464-0950</spa></di><divclassName="flex items-center text-smtext-gray-300"><MailclassName="w-4h-4mr-2" /><spa n>kleber@ziontechgroup.com</spa></di><divclassName="flex items-start text-smtext-gray-300"><MapPinclassName="w-4 h-4mr-2mt-0.5" /><spa n>364E Main St STE1008<br />MiddletownDE19709</spa></di></di></di>{/* AIServices */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><BrainclassName="w-5h-5mr-2" />AI Services
          </h><ulclassName="space-y-2">{aiServices.map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/ai-services"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All AI Services →
              </Lin></l></u></di>{/* ITServices */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><CloudclassName="w-5h-5mr-2" />IT Services
          </h><ulclassName="space-y-2">{itServices.map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/it-services"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All IT Services →
              </Lin></l></u></di>{/* MicroSAAS */}
        <di v><spanclassName="text-lg font-semibold mb-4text-cyan-400flexitems-center"></spa></className="text-lg font-semibold mb-4text-cyan-400flexitems-center"><CodeclassName="w-5h-5mr-2" />Micro SAAS
          </h><ulclassName="space-y-2">{microSaasServices.slice(0 6).map((serviceindex) => (
             <likey={index}><Linkto={service.url}
                   className="text-gray-300 hover:text-cyan-400transition-colors duration-200text-sm"
                  >{service.name}
                </Lin></l>))}
            <l i><Linkto="/micro-saas"
                 className="text-cyan-400 hover:text-cyan-300transition-colorsduration-200text-smfont-medium"
                >View All Micro SAAS →
              </Lin></l></u></di></di>{/* Additional LinksSection */}
      <divclassName="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12pt-8 border-tborder-gray-700"><di v><h3className="text-lgfont-semiboldmb-4">Company</h><ulclassName="space-y-2">{companyLinks.map((linkindex) => (
             <likey={index}><Linkto={link.url}
                   className="text-gray-300 hover:text-whitetext-smtransition-colors"
                  >{link.name}
                </Lin></l>))}
          </u></di><di v><h3className="text-lgfont-semiboldmb-4">Resources</h><ulclassName="space-y-2">{resourcesLinks.map((linkindex) => (
             <likey={index}><Linkto={link.url}
                   className="text-gray-300 hover:text-whitetext-smtransition-colors"
                  >{link.name}
                </Lin></l>))}
          </u></di><di v><h3className="text-lgfont-semiboldmb-4">QuickLinks</h><ulclassName="space-y-2"><l i><Linkto="/consultation"className="text-gray-300 hover:text-whitetext-smtransition-colors">Free Consultation
              </Lin></l><l i><Linkto="/demo"className="text-gray-300 hover:text-whitetext-smtransition-colors">Request Demo
              </Lin></l><l i><Linkto="/contact"className="text-gray-300 hover:text-whitetext-smtransition-colors">Contact Sales
              </Lin></l><l i><Linkto="/support"className="text-gray-300 hover:text-whitetext-smtransition-colors">Technical Support
              </Lin></l></u></di><di v><h3className="text-lgfont-semiboldmb-4">FollowUs</h><divclassName="flexspace-x-4"><ahref="https://linkedin.com/$1/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">LinkedIn
            </a><ahref="https://twitter.com/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">Twitter
            </a><ahref="https://github.com/ziontechgroup"className="text-gray-300hover:text-whitetransition-colors">GitHub
            </a></di></di></di>{/* BottomSection */}
      <divclassName="border-tborder-gray-700mt-8pt-8"><divclassName="flex flex-colmd:flex-rowjustify-betweenitems-center"><divclassName="text-gray-400text-smmb-4md:mb-0">© {currentYear} Zion Tech Group. All rights reserved.
          </di><divclassName="flexspace-x-6"><ahref="/privacy"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Privacy Policy
            </a><ahref="/terms"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Terms of Service
            </a><ahref="/cookies"className="text-sm text-gray-400 hover:text-cyan-400transition-colors">Cookie Policy
            </a></di></di></di></di></foote>
  )
})

Footer.displayName= 'Footer'
export default Footer