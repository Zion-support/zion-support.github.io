'use client';
import React from 'react';
import {BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2, CheckCircle} from 'lucide-react';;
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

constMicroSAASPage: React.FC= () =>{constcategories= [
    {
      title: 'AI-Powered Tools',
      icon: Brain,
      color: 'text-purple-40 0',
      bgColor: 'bg-purple-50 0/2 0',
      services: [
        { name: 'AI Writing Assistant', price: '$1 9/month', description: 'AI-powered content creation and editing'},
        {name: 'AI Code Generator', price: '$4 9/month', description: 'AI-assisted coding and development'},
        {name: 'AI Design Studio', price: '$3 9/month', description: 'AI-powered graphic design tools'},
        {name: 'AI Analytics Dashboard', price: '$7 9/month', description: 'Real-time business intelligence'},
        {name: 'AI Chatbot Builder', price: '$2 9/month', description: 'No-code chatbot creation'},
        {name: 'AI SEO Optimizer', price: '$4 9/month', description: 'Automated SEO analysis and optimization'}
      ]
    },
    {title: 'Business Applications',
      icon: BarChart,
      color: 'text-blue-40 0',
      bgColor: 'bg-blue-50 0/2 0',
      services: [
        { name: 'AI-Powered CRM', price: '$4 9/month', description: 'Intelligent customer relationship management'},
        {name: 'AI Invoice Generator', price: '$1 9/month', description: 'Automated invoicing and billing'},
        {name: 'AI Lead Scoring', price: '$3 9/month', description: 'Intelligent lead qualification'},
        {name: 'AI Social Media Manager', price: '$5 9/month', description: 'Social media automation'},
        {name: 'AI Email Marketing', price: '$5 9/month', description: 'Automated email campaigns'},
        {name: 'AI Financial Planner', price: '$6 9/month', description: 'Financial planning and analysis'}
      ]
    },
    {title: 'Productivity Tools',
      icon: Settings2,
      color: 'text-green-40 0',
      bgColor: 'bg-green-50 0/2 0',
      services: [
        { name: 'AI Task Manager Pro', price: '$2 9/month', description: 'Intelligent task management'},
        {name: 'AI Expense Tracker', price: '$1 9/month', description: 'Smart expense management'},
        {name: 'AI Scheduler', price: '$3 9/month', description: 'Intelligent scheduling'},
        {name: 'AI Document Processor', price: '$4 9/month', description: 'Intelligent do cument processing'},
        {name: 'AI Password Manager', price: '$9/month', description: 'Secure password management'},
        {name: 'AI Voice Assistant', price: '$3 9/month', description: 'Custom voice assistants'}
      ]
    },
    {title: 'Creative & Media',
      icon: Palette,
      color: 'text-pink-40 0',
      bgColor: 'bg-pink-50 0/2 0',
      services: [
        { name: 'AI Video Creator', price: '$7 9/month', description: 'Automated video production'},
        {name: 'AI Music Composer', price: '$4 9/month', description: 'AI music generation'},
        {name: 'AI3D Generator', price: '$8 9/month', description: 'AI3D modeling and design'},
        {name: 'AI Fashion Design', price: '$6 9/month', description: 'AI fashion solutions'},
        {name: 'AI Photo Editor', price: '$2 9/month', description: 'AI-powered photo editing'},
        {name: 'AI Content Studio', price: '$5 9/month', description: 'Complete content creation suite'}
      ]
    },
    {title: 'E-commerce & Marketing',
      icon: CreditCard,
      color: 'text-orange-40 0',
      bgColor: 'bg-orange-50 0/2 0',
      services: [
        { name: 'AI E-commerce Assistant', price: '$7 9/month', description: 'E-commerce optimization'},
        {name: 'AI Store Optimizer', price: '$5 9/month', description: 'Store performance optimization'},
        {name: 'AI Market Research', price: '$8 9/month', description: 'Automated market analysis'},
        {name: 'AI A/B Testing', price: '$4 9/month', description: 'Intelligent testing platform'},
        {name: 'AI Growth Hacker', price: '$9 9/month', description: 'Automated growth strategies'},
        {name: 'AI Website Builder', price: '$3 9/month', description: 'AI website creation'}
      ]
    },
    {title: 'Security & Monitoring',
      icon: ShieldCheck,
      color: 'text-red-40 0',
      bgColor: 'bg-red-50 0/2 0',
      services: [
        { name: 'AI Security Monitor', price: '$9 9/month', description: 'Real-time security monitoring'},
        {name: 'AI Performance Tracker', price: '$4 9/month', description: 'Comprehensive performance tracking'},
        {name: 'AI Predictive Analytics', price: '$7 9/month', description: 'Future outcome predictions'},
        {name: 'AI Health Tracker', price: '$2 9/month', description: 'Personal health monitoring'},
        {name: 'AI Learning Platform', price: '$5 9/month', description: 'Personalized learning'},
        {name: 'AI Data Pipeline', price: '$6 9/month', description: 'Automated data processing'}
      ]
    }
  ]

  constbenefits= [
    {icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our ready-to-use applications'
   },
    {icon: Star,
      title: 'Proven Results',
      description: 'Average200% productivity increase within 30days'
   },
    {icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for all applications'
   },
    {icon: BarChart,
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with flexible pricing'
   }
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
      <sectionclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"><spanclassName="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent"></className="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent">Micro SAAS Solutions
          </spa></h><spanclassName="text-xl text-gray-300mb-8 max-w-4xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-4xlmx-auto">Choose from100+ ready-to-use AI-powered applications that solve specific business problems. 
            Deploy instantly and start seeing results from day one.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
             className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
            >Browse All Solutions
          </a><ahref="tel:+13024640950"
             className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
            >(30 2) 464-0950</a></di></sectio>{/* Categories */}
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white text-centermb-12">SolutionCategories</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{categories.map((categoryindex) => (
           <divkey={index}className="bg-slate-80 0/50backdrop-blur-sm rounded-xl p-6 hover:bg-slate-80 0/70transition-allduration-300"><divclassName="flexitems-centermb-6"><divclassName={`w-12h-12${category.bgColor} rounded-lg flex items-center justify-centermr-4`}><category.iconclassName={`w-6h-6${category.color}`} /></di><h3className="text-xlfont-boldtext-white">{category.title}</h></di><divclassName="space-y-3">{category.services.map((serviceserviceIndex) => (
                 <divkey={serviceIndex}className="flex justify-between items-center p-3 bg-slate-70 0/50rounded-lghover:bg-slate-70 0/70transition-colors"><di v><divclassName="font-mediumtext-whitetext-sm">{service.name}</di><divclassName="text-xstext-gray-400">{service.description}</di></di><divclassName="text-right"><divclassName={`font-bold${category.color}text-sm`}>{service.price}</di><ahref="/contact"
                         className="text-xs text-cyan-400 hover:text-cyan-300transition-colors"
                        >Learn More →
                      </a></di></di>))}
              </di></di>))}
        </di></sectio>{/* BenefitsSection */}
      <sectionclassName="mb-16"><divclassName="bg-gradient-to-r from-indigo-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-bold text-white text-centermb-12">Why Choose Our MicroSAASSolutions?</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{benefits.map((benefitindex) => (
             <divkey={index}className="text-center"><divclassName="w-16h-16bg-cyan-50 0/20rounded-full flex items-center justify-centermx-automb-4"><benefit.iconclassName="w-8 h-8text-cyan-400" /></di><h3className="text-xl font-boldtext-whitemb-2">{benefit.title}</h><pclassName="text-gray-300">{benefit.description}</p></di>))}
          </di></di></sectio>{/* PricingTiers */}
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white text-centermb-12">SimplePricing</h><divclassName="grid grid-cols-1md:grid-cols-3gap-8"><divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-6"><h3className="text-xl font-boldtext-whitemb-4">Starter</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">$19/month</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Up to5applications
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Basic support
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Standard features
              </l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Get Started
            </a></di><divclassName="bg-slate-80 0/50backdrop-blur-sm rounded-xl p-6 border-2border-cyan-500"><h3className="text-xl font-boldtext-whitemb-4">Professional</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">$99/month</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Up to 25applications
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Priority support
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Advanced features
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Custom integrations
              </l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Get Started
            </a></di><divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-6"><h3className="text-xl font-boldtext-whitemb-4">Enterprise</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">Custom</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Unlimited applications
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />24/7 dedicated support
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Custom development
              </l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />On-premise deployment
              </l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Contact Sales
            </a></di></di></sectio>{/* CTASection */}
      <sectionclassName="text-center"><divclassName="bg-gradient-to-r from-cyan-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-boldtext-whitemb-4">Ready to TransformYourBusiness?</h><spanclassName="text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-gray-300mb-8 max-w-2xlmx-auto">Choose from our extensive library of AI-powered applications and start seeing results immediately.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
              >Browse All Solutions
            </a><ahref="tel:+13024640950"
               className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              >(30 2) 464-0950</a></di><divclassName="mt-8 text-smtext-gray-400"><p>📧 kleber@ziontechgroup.com | 📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></mai><Footer /></di>
  );
};

export default MicroSAASPage