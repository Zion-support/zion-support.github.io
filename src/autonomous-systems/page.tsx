import { CheckCircle, Star, BarChart, Check, Bot, Cpu } from 'lucide-react';
'use client';
import {CheckCircle, Star, BarChart} from 'lucide-react';
import React from 'react';

constAutonomousSystemsPage: React.FC= () =>{constautonomousServices= [
    {
      id: 'self-healing-infrastructure',
      title: 'Self-Healing Infrastructure',
      description: 'AI-powered systems that automatically detect, diagnose, and resolve infrastructure issues without human intervention.',
      features: ['Automated problem detection', 'Self-recovery mechanisms', 'Predictive maintenance', 'Zero-do wntime operations'],
      benefits: ['9 9.9% uptime', 'Reduced manual intervention', 'Lower operational costs', 'Improved reliability'],
      marketPrice: '$2,00 0-5,00 0/month',
      category: 'Infrastructure Automation',
      technologies: ['Machine Learning', 'Anomaly Detection', 'Auto-remediation', 'Monitoring Systems']
   },
    {id: 'process-automation',
      title: 'Intelligent Process Automation',
      description: 'End-to-end automation of complex business processes using AI and machine learning.',
      features: ['Workflow automation', 'Decision-making AI', 'Process optimization', 'Exception handling'],
      benefits: ['8 0% process efficiency', 'Reduced errors', 'Faster execution', 'Cost savings'],
      marketPrice: '$1,50 0-4,00 0/month',
      category: 'Business Process Automation',
      technologies: ['RPA', 'AI/ML', 'Workflow Engines', 'Integration APIs']
   },
    {id: 'autonomous-monitoring',
      title: 'Autonomous Monitoring Systems',
      description: '2 4/7 intelligent monitoring and alerting systems that learn and adapt to your environment.',
      features: ['Real-time monitoring', 'Predictive alerts', 'Adaptive thresholds', 'Automated responses'],
      benefits: ['Proactive issue detection', 'Reduced false positives', 'Improved system health', 'Better resource utilization'],
      marketPrice: '$80 0-2,50 0/month',
      category: 'Monitoring & Alerting',
      technologies: ['AI Analytics', 'Time Series DB', 'Alert Systems', 'Machine Learning']
   }
  ];
  return (
  <divclassName="min-h-screenbg-gradient-to-brfrom-slate-50to-green-50">{/* HeroSection */}
    <sectionclassName="relative py-20bg-gradient-to-rfrom-green-600to-emerald-700text-white"><divclassName="absolute inset-0bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-autopx-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">Autonomous Systems Services
          </h><spanclassName="text-xlmd:text-2 xl mb-8 text-green-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-green-100max-w-3xlmx-auto">Transform your operations with intelligent autonomous systems that work24/7
          </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors"></className="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors">Explore Autonomous Solutions
            </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors"></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors">Schedule Demo
            </butto></di></di></di></sectio>{/* KeyBenefits */}
    <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Autonomous Systems?
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Our autonomous systems deliver unprecedented efficiency, reliability, and cost savings
          </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8"><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><BotclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">24/7Operation</h><pclassName="text-gray-600">Systems that never sleep, continuously monitoring and optimizingyouroperations</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><CpuclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">Self-Healing</h><pclassName="text-gray-600">Automatically detect and resolve issues before they impactyourbusiness</p></di><divclassName="text-centerp-6"><divclassName="w-16h-16bg-green-100rounded-full flex items-center justify-centermx-automb-4"><BarChartclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">ContinuousLearning</h><pclassName="text-gray-600">AI systems that improve performance over time throughmachinelearning</p></di></di></di></sectio>{/* Services */}
    <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Autonomous Solutions
          </h><spanclassName="text-xl text-gray-600max-w-3xlmx-auto"></className="text-xl text-gray-600max-w-3xlmx-auto">Comprehensive autonomous systems designed to transform your business operations
          </p></di><divclassName="grid grid-cols-1lg:grid-cols-2gap-8">{autonomousServices.map((service) => (
           <divkey={service.id}className="bg-white rounded-lg shado w-lg p-8 hover:shado w-xltransition-shadow"><h3className="text-2 xl font-bold text-gray-900mb-4">{service.title}</h><pclassName="text-gray-600mb-6">{service.description}</p><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">KeyFeatures:</h><ulclassName="space-y-2">{service.features.map((featureindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><CheckCircleclassName="w-5 h-5 text-green-500mr-2" />{feature}
                    </l>))}
                </u></di><divclassName="mb-6"><h4className="text-lg font-semibold text-gray-900mb-3">Benefits:</h><ulclassName="space-y-2">{service.benefits.map((benefitindex) => (
                   <likey={index}className="flex items-centertext-gray-600"><StarclassName="w-5 h-5 text-yellow-500mr-2" />{benefit}
                    </l>))}
                </u></di><divclassName="border-tpt-4"><divclassName="flexjustify-betweenitems-center"><spanclassName="text-2 xl font-boldtext-green-600">{service.marketPrice}</spa><spanclassName="text-smtext-gray-500">{service.category}</spa></di></di></di>))}
        </di></di></sectio>{/* CTASection */}
    <sectionclassName="py-16bg-green-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Automate Your Operations?
        </h><spanclassName="text-xl mb-8 max-w-3xlmx-auto"></spa></className="text-xl mb-8 max-w-3xlmx-auto">Let our autonomous systems transform your business with intelligent automation
        </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><spanclassName="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors"></spa></className="bg-white text-green-600px-8 py-3 rounded-lg font-semiboldhover:bg-green-50transition-colors">Get Started Today
          </butto><spanclassName="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors"></spa></className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-green-600transition-colors">Learn More
          </butto></di></di></sectio></di>
  );
};
export default AutonomousSystemsPage;
