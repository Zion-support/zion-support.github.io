import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  CogIcon,
  SparklesIcon,
  PhoneIcon,
  EnvelopeIcon,
  CubeIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSPage() {
  const microSaasServices = [
    {
      id: 'smart-inventory',
      name: 'Smart Inventory Manager',
      description: 'Complete inventory management solution with AI-powered demand forecasting and automated reordering.',
      price: 49,
      features: [
        'Real-time inventory tracking',
        'AI demand forecasting',
        'Automated reorder points',
        'Multi-location support',
        'Barcode scanning integration',
        'Supplier management'
      ],
      benefits: [
        'Reduce stockouts by 80%',
        'Lower inventory costs by 25%',
        'Improve cash flow management',
        'Eliminate manual counting errors'
      ],
      icon: CubeIcon,
      popular: true
    },
    {
      id: 'ai-crm',
      name: 'AI-Powered CRM Pro',
      description: 'Intelligent customer relationship management with AI-driven insights and automated follow-ups.',
      price: 29,
      features: [
        'Contact and lead management',
        'AI-powered lead scoring',
        'Automated email sequences',
        'Sales pipeline tracking',
        'Customer communication history',
        'Task and appointment scheduling'
      ],
      benefits: [
        'Increase sales by 35%',
        'Improve lead conversion by 50%',
        'Reduce manual data entry by 90%',
        'Enhance customer relationships'
      ],
      icon: UserGroupIcon,
      new: true
    },
    {
      id: 'project-hub',
      name: 'Project Management Hub',
      description: 'Comprehensive project management with team collaboration, time tracking, and AI insights.',
      price: 39,
      features: [
        'Project planning and scheduling',
        'Team collaboration tools',
        'Time tracking and reporting',
        'Resource allocation and planning',
        'Gantt charts and Kanban boards',
        'File sharing and document management'
      ],
      benefits: [
        'Improve project delivery by 40%',
        'Reduce project costs by 25%',
        'Enhance team productivity by 50%',
        'Better resource utilization'
      ],
      icon: CogIcon,
      popular: false
    }
  ];

  const features = [
    'Rapid deployment and setup',
    'Scalable architecture',
    'Custom integrations',
    'White-label solutions',
    'API access and documentation',
    '24/7 monitoring and support',
    'Regular updates and improvements',
    'Multi-tenant architecture'
  ];

  const benefits = [
    'Reduce development time by 70%',
    'Lower upfront costs by 60%',
    'Faster time to market',
    'Proven, battle-tested solutions',
    'Ongoing maintenance and support',
    'Scalable as your business grows'
  ];

  const useCases = [
    'Small business automation',
    'E-commerce solutions',
    'Service business management',
    'Startup MVP development',
    'Enterprise tool integration',
    'Custom workflow automation'
  ];

  const technologies = ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Custom Business Applications</title>
        <meta name="description" content="Custom micro SaaS solutions designed to solve specific business challenges with scalable, cost-effective applications. Reduce development time by 70% and lower costs by 60%." />
        <meta name="keywords" content="micro SaaS, custom software, business applications, inventory management, CRM, project management, automation solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-semibold">Custom Solutions</span>
                  </div>
                </div>
                
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Micro <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">SaaS Solutions</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Custom micro SaaS solutions designed to solve specific business challenges with scalable, 
                  cost-effective applications. Reduce development time by 70% and lower costs by 60%.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Get Custom Solution
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                  <Link 
                    to="/demo" 
                    className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    View Examples
                    <ArrowRightIcon className="w-5 h-5" />
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Custom development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Rapid deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircleIcon className="w-4 h-4 text-green-400" />
                    <span>Ongoing support</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <RocketLaunchIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Micro SaaS Platform</div>
                        <div className="text-gray-400 text-sm">Custom business solutions</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">Smart Inventory Manager</div>
                        <div className="text-gray-300 text-xs">AI-powered forecasting • $49/month</div>
                      </div>
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">AI CRM Pro</div>
                        <div className="text-gray-300 text-xs">Lead scoring • $29/month</div>
                      </div>
                      <div className="bg-slate-600 p-3 rounded-lg">
                        <div className="text-white text-sm font-semibold mb-1">Project Hub</div>
                        <div className="text-gray-300 text-xs">Team collaboration • $39/month</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Building your solution...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Micro SaaS Solutions</h2>
              <p className="text-xl text-gray-300">Ready-to-deploy business applications</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className={`relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                    service.popular ? 'border-purple-500 ring-2 ring-purple-500' : 'border-slate-600'
                  }`}>
                    {service.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    {service.new && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          New
                        </div>
                      </div>
                    )}
                    
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400">
                          <CheckCircleIcon className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-2xl font-bold text-purple-400">
                        ${service.price}
                        <span className="text-sm text-gray-400 font-normal">/month</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        Starting from
                      </div>
                    </div>
                    
                    <Link 
                      to={`/micro-saas-${service.id}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300">Built for modern businesses with modern needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Transform Your Business Operations</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Stop struggling with generic software that doesn't fit your needs. Get custom solutions 
                  that work exactly how your business works.
                </p>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircleIcon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{benefit}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-700 to-slate-600 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Development Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Time Reduction</span>
                    <span className="text-3xl font-bold text-green-400">70%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Cost Savings</span>
                    <span className="text-3xl font-bold text-blue-400">60%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Faster Deployment</span>
                    <span className="text-3xl font-bold text-purple-400">3x</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Success Rate</span>
                    <span className="text-3xl font-bold text-cyan-400">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Perfect For</h2>
              <p className="text-xl text-gray-300">Ideal solutions for various business needs</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-700 to-slate-600 p-6 rounded-xl border border-slate-500 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{useCase}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Built with Modern Technologies</h2>
              <p className="text-xl text-gray-300">Cutting-edge tech stack for reliable, scalable solutions</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CpuChipIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{tech}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your specific business needs and create a micro SaaS solution that perfectly fits your requirements
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Examples
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}