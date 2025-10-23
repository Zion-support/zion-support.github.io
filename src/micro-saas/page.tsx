'use client'
import React from 'react'
import { BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle } from 'lucide-react';
'use client';
import React from 'react';
import { BookOpen, ShieldCheck, Wifi, Server, Monitor, Printer, Router, Laptop, Tablet, Watch, Headset, Keyboard, Mouse, Webcam, Speaker, Battery, Power, Cog, Settings2, CheckCircle, Check } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
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
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Micro SAAS Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Choose from 100+ ready-to-use AI-powered applications that solve specific business problems.
            Deploy instantly and start seeing results from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
            >
              Browse All Solutions</a>
            <a;
              href="tel:+13024640950"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              (302) 464-0950</a>
          </div>
        </section>
        {/* Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Solution Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex justify-between items-center p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700/70 transition-colors">
                      <div>
                        <div className="font-medium text-white text-sm">{service.name}</div>
                        <div className="text-xs text-gray-400">{service.description}</div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${category.color} text-sm`}>{service.price}</div>
                        <a;
                          href="/contact"
                          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          Learn More →
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose Our Micro SAAS Solutions?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$19/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to 5 applications</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Basic support</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Standard features</li>
              </ul>
              <a;
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started</a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 className="text-xl font-bold text-white mb-4">Professional</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">$99/month</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Up to 25 applications</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority support</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Advanced features</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom integrations</li>
              </ul>
              <a;
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Get Started</a>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Unlimited applications</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  24/7 dedicated support</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Custom development</li>
                <li className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  On-premise deployment</li>
              </ul>
              <a;
                href="/contact"
                className="block w-full text-center bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
              >
                Contact Sales</a>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Choose from our extensive library of AI-powered applications and start seeing results immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a;
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                Browse All Solutions</a>
              <a;
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                (302) 464-0950</a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
   }
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
      <sectionclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"><spanclassName="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent"></className="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent">Micro SAAS Solutions</spa></h><spanclassName="text-xl text-gray-300mb-8 max-w-4xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-4xlmx-auto">Choose from100+ ready-to-use AI-powered applications that solve specific business problems. 
            Deploy instantly and start seeing results from day one.
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
             className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
            >Browse All Solutions</a><ahref="tel:+13024640950"
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
      <sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white text-centermb-12">SimplePricing</h><divclassName="grid grid-cols-1md:grid-cols-3gap-8"><divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-6"><h3className="text-xl font-boldtext-whitemb-4">Starter</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">$19/month</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Up to5applications</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Basic support</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Standard features</l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Get Started</a></di><divclassName="bg-slate-80 0/50backdrop-blur-sm rounded-xl p-6 border-2border-cyan-500"><h3className="text-xl font-boldtext-whitemb-4">Professional</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">$99/month</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Up to 25applications</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Priority support</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Advanced features</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Custom integrations</l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Get Started</a></di><divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-6"><h3className="text-xl font-boldtext-whitemb-4">Enterprise</h><divclassName="text-3 xl font-bold text-cyan-400mb-4">Custom</di><ulclassName="space-y-2mb-6"><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Unlimited applications</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />24/7 dedicated support</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />Custom development</l><liclassName="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />On-premise deployment</l></u><ahref="/contact"
               className="block w-full text-center bg-cyan-500text-white py-2 rounded-lg font-semiboldhover:bg-cyan-600transition-colors"
              >Contact Sales</a></di></di></sectio>{/* CTASection */}
      <sectionclassName="text-center"><divclassName="bg-gradient-to-r from-cyan-90 0/50to-purple-90 0/50rounded-2xlp-8"><h2className="text-3 xl font-boldtext-whitemb-4">Ready to TransformYourBusiness?</h><spanclassName="text-gray-300mb-8 max-w-2xlmx-auto"></spa></className="text-gray-300mb-8 max-w-2xlmx-auto">Choose from our extensive library of AI-powered applications and start seeing results immediately.
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="/contact"
               className="bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-4 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
              >Browse All Solutions</a><ahref="tel:+13024640950"
               className="border-2 border-cyan-400text-cyan-400px-8 py-3 rounded-lg font-semiboldhover:bg-cyan-400 hover:text-slate-900transition-allduration-300"
              >(30 2) 464-0950</a></di><divclassName="mt-8 text-smtext-gray-400"><p>📧 kleber@ziontechgroup.com | 📍 364E Main St STE1008, Middletown DE19709</p></di></di></sectio></mai><Footer /></di>
  );
};

export default MicroSAASPage;