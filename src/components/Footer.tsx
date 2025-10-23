import React from 'react';
import {Link} from 'react-router-do m';
import {Lock, BarChart3, FileText, Phone, Mail, Zap, Brain, ArrowRight} from 'lucide-react';;

constFooter: React.FC= () =>{constmicroSaasServices= [
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning'},
    {name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media'},
    {name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Data insights & analytics'},
    {name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns'},
    {name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '2 4/7 AI support'},
    {name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis'},
    {name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation'},
    {name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis'},
    {name: 'AI Music Composer', url: '/ai-music-composition', description: 'AI-generated music'},
    {name: 'AI Fashion Designer', url: '/ai-fashion-design', description: 'AI fashion design'},
    {name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness plans'},
    {name: 'AI3D Generation Studio', url: '/ai-3 d-generation', description: 'AI3D content creation'}
  ];

  constaiServices= [
    {name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models'},
    {name: 'Natural Language Processing', url: '/nlp', description: 'Text analysis & understanding'},
    {name: 'Computer Vision', url: '/computer-vision', description: 'Image & video analysis'},
    {name: 'AI Automation', url: '/ai-automation', description: 'Process automation'},
    {name: 'Quantum AI Computing', url: '/quantum-ai', description: 'Next-gen algorithms'},
    {name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security'},
    {name: 'AI Healthcare Solutions', url: '/ai-healthcare', description: 'Medical AI applications'},
    {name: 'AI Fintech Solutions', url: '/ai-fintech', description: 'Financial AI services'},
    {name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Smart mobile apps'},
    {name: 'AI CRM Solutions', url: '/ai-crm', description: 'Intelligent customer management'},
    {name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management'},
    {name: 'AI Scheduler Pro', url: '/ai-scheduler', description: 'Intelligent scheduling'}
  ];

  constitServices= [
    {name: 'Cloud Services', url: '/cloud-services', description: 'AWS/$1/GCP setup'},
    {name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions'},
    {name: 'DevOps & CI/CD', url: '/devops', description: 'Automated workflows'},
    {name: 'Database Services', url: '/database-services', description: 'Database optimization'},
    {name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Enterprise networking'},
    {name: 'IT Support & Helpdesk', url: '/it-support', description: '2 4/7 technical support'},
    {name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT guidance'},
    {name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud migration'},
    {name: 'Compliance & Governance', url: '/compliance', description: 'Regulatory compliance'},
    {name: 'Developer Tools', url: '/developer-tools', description: 'Advanced dev tools'},
    {name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation'},
    {name: 'Productivity Solutions', url: '/productivity', description: 'Enterprise productivity'}
  ];

  constspecializedServices= [
    {name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum algorithms'},
    {name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems'},
    {name: 'Blockchain & Web3', url: '/blockchain', description: 'Decentralized solutions'},
    {name: 'IoT & Edge Computing', url: '/iot-edge', description: 'Connected devices'},
    {name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights'},
    {name: 'Robotics Solutions', url: '/robotics', description: 'Intelligent automation'},
    {name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade solutions'},
    {name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics'},
    {name: 'Business Apps', url: '/business-apps', description: 'Custom business apps'},
    {name: 'Expense Tracker Pro', url: '/expense-tracker', description: 'AI expense management'},
    {name: 'Task Manager Pro', url: '/task-manager-pro', description: 'AI task management'},
    {name: 'Smart Analytics', url: '/smart-analytics', description: 'Intelligent analytics'}
  ];

  constadditionalServices= [
    {name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project planning'},
    {name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media'},
    {name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Smart email campaigns'},
    {name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '2 4/7 AI support'},
    {name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO automation'},
    {name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial insights'}
  ];

  constcompanyLinks= [
    {name: 'About Us', url: '/about'},
    {name: 'Our Team', url: '/team'},
    {name: 'Careers', url: '/careers'},
    {name: 'Case Studies', url: '/case-studies'},
    {name: 'Blog', url: '/blog'},
    {name: 'News', url: '/news'},
    {name: 'Pricing', url: '/pricing'},
    {name: 'Demo', url: '/demo'}
  ];

  constsupportLinks= [
    {name: 'Contact Us', url: '/contact'},
    {name: 'Support Center', url: '/support'},
    {name: 'Documentation', url: '/do cs'},
    {name: 'API Reference', url: '/api-do cs'},
    {name: 'Status Page', url: '/status'},
    {name: 'System Health', url: '/system-status'}
  ];

  constlegalLinks= [
    {name: 'Privacy Policy', url: '/privacy'},
    {name: 'Terms of Service', url: '/terms'},
    {name: 'Cookie Policy', url: '/cookies'},
    {name: 'GDPR Compliance', url: '/gdpr'},
    {name: 'Security', url: '/security'},
    {name: 'Compliance', url: '/compliance'}
  ];

  return (
  <footerclassName="bg-slate-90 0/95backdrop-blur-md border-tborder-cyan-400/20"><divclassName="container mx-autopx-4py-12"><divclassName="gridgrid-cols-1lg:grid-cols-5gap-8">{/* CompanyInfo */}
        <divclassName="lg:col-span-1"><divclassName="flex items-centerspace-x-2mb-4"><divclassName="w-8 h-8 bg-gradient-to-br from-cyan-400to-purple-600rounded-lg flexitems-centerjustify-center"><BrainclassName="w-5h-5text-white" /></di><spanclassName="text-xl font-boldtext-whiteneon-text">ZionTechGroup</spa></di><spanclassName="text-gray-300mb-6leading-relaxed"></className="text-gray-300mb-6leading-relaxed">Leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services.
          </p><divclassName="space-y-3"><divclassName="flex items-center space-x-3text-gray-300"><PhoneclassName="w-4 h-4text-cyan-400" /><ahref="tel:+13024640950"className="hover:text-cyan-400transition-colors">+1 3024640950</a></di><divclassName="flex items-center space-x-3text-gray-300"><MailclassName="w-4 h-4text-cyan-400" /><ahref="mailto:kleber@ziontechgroup.com"className="hover:text-cyan-400transition-colors">kleber@ziontechgroup.com
              </a></di><divclassName="flex items-center space-x-3text-gray-300"><MapPinclassName="w-4 h-4text-cyan-400" /><spa n>364E Main St STE1008,MiddletownDE19709</spa></di></di></di>{/* Micro SAASServices */}
        <di v><spanclassName="text-cyan-400font-semibold mb-4flexitems-center"></className="text-cyan-400font-semibold mb-4flexitems-center"><ZapclassName="w-4h-4mr-2" />Micro SAAS
          </h><ulclassName="space-y-2">{microSaasServices.map((service) => (
             <likey={service.name}><ahref={service.url}
                   className="group flex items-center text-sm text-gray-300 hover:text-cyan-400transition-colors"
                  ><spa n>{service.name}</spa><ArrowRightclassName="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transformduration-300" /></a></l>))}
          </u><ahref="/services"
             className="inline-flex items-center text-cyan-400 hover:text-whitetransition-colorsmt-4"
            >View All Micro SAAS →
          </a></di>{/* AI & ITServices */}
        <di v><spanclassName="text-cyan-400font-semibold mb-4flexitems-center"></className="text-cyan-400font-semibold mb-4flexitems-center"><BrainclassName="w-4h-4mr-2" />AI & IT Services
          </h><divclassName="space-y-4"><di v><h4className="text-whitefont-mediummb-2">AIServices</h><ulclassName="space-y-1">{aiServices.slice(0 3).map((service) => (
                 <likey={service.name}><ahref={service.url}
                       className="text-sm text-gray-300 hover:text-cyan-400transition-colors"
                      >{service.name}
                    </a></l>))}
              </u></di><di v><h4className="text-whitefont-mediummb-2">ITServices</h><ulclassName="space-y-1">{itServices.slice(0 3).map((service) => (
                 <likey={service.name}><ahref={service.url}
                       className="text-sm text-gray-300 hover:text-cyan-400transition-colors"
                      >{service.name}
                    </a></l>))}
              </u></di></di><ahref="/services"
             className="inline-flex items-center text-cyan-400 hover:text-whitetransition-colorsmt-4"
            >View All Services →
          </a></di>{/* Additional AIServices */}
        <di v><spanclassName="text-cyan-400font-semibold mb-4flexitems-center"></className="text-cyan-400font-semibold mb-4flexitems-center"><ZapclassName="w-4h-4mr-2" />AI Tools
          </h><ulclassName="space-y-2">{additionalServices.map((service) => (
             <likey={service.name}><ahref={service.url}
                   className="group flex items-center text-sm text-gray-300 hover:text-cyan-400transition-colors"
                  ><spa n>{service.name}</spa><ArrowRightclassName="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transformduration-300" /></a></l>))}
          </u></di>{/* Company &Support */}
        <di v><h3className="text-cyan-400font-semiboldmb-4">Company</h><divclassName="gridgrid-cols-2gap-4"><di v><h4className="text-whitefont-mediummb-2">Company</h><ulclassName="space-y-1">{companyLinks.slice(0 4).map((link) => (
                 <likey={link.name}><ahref={link.url}
                       className="text-sm text-gray-300 hover:text-cyan-400transition-colors"
                      >{link.name}
                    </a></l>))}
              </u></di><di v><h4className="text-whitefont-mediummb-2">Support</h><ulclassName="space-y-1">{supportLinks.slice(0 4).map((link) => (
                 <likey={link.name}><ahref={link.url}
                       className="text-sm text-gray-300 hover:text-cyan-400transition-colors"
                      >{link.name}
                    </a></l>))}
              </u></di></di></di></di>{/* BottomSection */}
      <divclassName="border-tborder-gray-700mt-8pt-8"><divclassName="flex flex-colmd:flex-rowjustify-betweenitems-center"><divclassName="text-gray-400text-smmb-4md:mb-0">© 2024Zion Tech Group. All rights reserved.
          </di><divclassName="flexspace-x-6">{legalLinks.map((link) => (
             <akey={link.name}
                  href={link.url}
                 className="text-sm text-gray-400 hover:text-cyan-400transition-colors"
                >{link.name}
              </a>))}
          </di></di></di></di></foote>
  );
};

export default Footer;