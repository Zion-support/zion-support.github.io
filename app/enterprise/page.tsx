<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import {CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles}}from 'lucide-react';
const EnterprisePage: React.FC = () => {,
=======
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react'
const EnterprisePage: React.FC = () => {
>>>>>>> origin/main
    const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Comprehensive security solutions designed for large-scale enterprise environments.',
<<<<<<< HEAD
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
    },
=======
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']},
    {icon: Cloud,
=======
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control'];
=======
      benefits: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control'],
>>>>>>> origin/main
  },
>>>>>>> origin/main
    {
    icon: Cloud,
>>>>>>> origin/main
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions that grow with your business needs.',
<<<<<<< HEAD
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ];

  const solutions = [
=======
<<<<<<< HEAD
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']},
    {icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']},
    {icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']},
    {icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']},
    {icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
<<<<<<< HEAD
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']}]
=======
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
  },
  ];];
>>>>>>> origin/main
=======
      benefits: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization'],
  },
>>>>>>> origin/main
    {
    icon: Brain,
      title: 'AI Integration',
      description: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefits: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights'],
  },
    {
    icon: Database,
      title: 'Data Management',
      description: 'Advanced data management and analytics for enterprise-scale operations.',
      benefits: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence'],
  },
    {
    icon: Users,
      title: 'User Management',
      description: 'Comprehensive user and access management for large organizations.',
      benefits: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails'],
  },
    {
    icon: Settings,
      title: 'System Integration',
      description: 'Seamless integration with existing enterprise systems and workflows.',
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization'],
  }
    ]
>>>>>>> origin/main
const solutions = [
    {title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
<<<<<<< HEAD
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
=======
<<<<<<< HEAD
<<<<<<< HEAD
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']},
    {title: 'Customer Relationship Management',
=======
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management'];
=======
      benefits: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
  },
  ]
const solutions = [
>>>>>>> origin/main
    {
    title: 'Enterprise Resource Planning',
      description: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      icon: Building,
      benefits: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management'],
>>>>>>> origin/main
  },
    {
    title: 'Customer Relationship Management',
>>>>>>> origin/main
      description: 'Advanced CRM systems for managing customer relationships and sales processes.',
      icon: Users,
<<<<<<< HEAD
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']
    },
    {
      title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
    }
=======
<<<<<<< HEAD
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']},
    {title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']},
    {title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
<<<<<<< HEAD
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']}]
=======
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
  }
>>>>>>> origin/main
  ];
>>>>>>> origin/main
=======
      benefits: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation'],
  },
    {
    title: 'Business Intelligence',
      description: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      icon: BarChart,
      benefits: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring'],
  },
    {
    title: 'Workflow Automation',
      description: 'Automate complex business processes to improve efficiency and reduce errors.',
      icon: Zap,
      benefits: ['Process automation', 'Task management', 'Approval workflows', 'Document management'],
  }
  ]
>>>>>>> origin/main
const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',

    'Enable data-driven decisions',

    'Scale with business growth',

    'Integrate with existing systems',

<<<<<<< HEAD
    'Provide 24/7 support and monitoring';
  ];];];
const stats = [
<<<<<<< HEAD
    {number: '500+', label: 'Enterprise Clients', icon: Building ,},
    {number: '99.9%', label: 'Uptime Guarantee', icon: Shield ,},
    {number: '50%', label: 'Cost Reduction', icon: TrendingUp ,},
    {number: '24/7', label: 'Support Available', icon: Clock ,}]
return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>)
=======
=======
    'Provide 24/7 support and monitoring'
  ]
  const stats = [
>>>>>>> origin/main
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50%', label: 'Cost Reduction', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ]
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> origin/main
      <SEOOptimizer>
<<<<<<< HEAD
      <Navigation />
      {/* Hero Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      </SEOOptimizer><Navigation>
      {/* Hero Section */}
      </Navigation><section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1>
            Enterprise</h1>
<<<<<<< HEAD
            <span>Solutions;</span>
            </span>
          </h1>
          <p>Comprehensive enterprise-grade solutions designed for large-scale business operations.;</p>
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Get Enterprise Consultation;</button>
              <ArrowRight>
            </button>
            <button>View Case Studies,</button>
=======
            <span></span>
              Solutions
            </span>
          </h1>
          <p></p>
            Comprehensive enterprise-grade solutions designed for large-scale business operations.
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
              Get Enterprise Consultation
              </button><ArrowRight>
            </button>
            <button></button>
              View Case Studies,
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Stats Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* Stats Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8"></div>,
            {stats.map((stat, index) => (} <div key={index}className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  <stat />
                <div className="text-3xl font-bold text-white mb-2">{stat.number</div>}</div>
                <div className="text-gray-300 text-sm">{stat.label</div>}</div>
              </div>
=======
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" / /></div>
            {
    stats.map((stat, index) => ()
>>>>>>> origin/main
            ))}

          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Features Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
>>>>>>> origin/main
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
<<<<<<< HEAD
        </section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Enterprise</h1>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive enterprise-grade solutions designed for large-scale business operations. 
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Enterprise
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive enterprise-grade solutions designed for large-scale business operations. 
            Transform your organization with cutting-edge technology and expert implementation.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
              Get Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Case Studies
      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (;}
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}
                <div className="text-gray-300 text-sm">{stat.label}
            ))}
      {/* Features Section */}
      <section className="py-20 px-4">
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Enterprise-Grade Features;</h2>
            </h2>
            <p>Built for scale, security, and performance to meet the demands of large organizations.</p>
=======
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Enterprise-Grade Features
            </h2>
            <p></p>
>>>>>>> origin/main
              Built for scale, security, and performance to meet the demands of large organizations.
>>>>>>> origin/main
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
=======
>>>>>>> origin/main
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
=======
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
                  <feature>
                  </feature><h3 className="text-xl font-semibold text-white">{feature.title}</h3>
>>>>>>> origin/main
                </div>
<<<<<<< HEAD
                <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                <ul>
                  {feature.benefits.map((benefit, idx) => (} <li>
                      <CheckCircle />
=======
                <p className="text-gray-300 mb-4">{feature.description}</p>
<<<<<<< HEAD
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
=======
                <ul></ul>
                  {
    feature.benefits.map((benefit, idx) => (
  }
                    </ul><li>
                      </li><CheckCircle>
>>>>>>> origin/main

                      {benefit} </li>
>>>>>>> origin/main
                  ))}
                </ul>
              </div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
=======
>>>>>>> origin/main
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======

          </div>
        </div>
      </section>
<<<<<<< HEAD
            <h2>Comprehensive Solutions;</h2>
            </h2>
            <p>End-to-end enterprise solutions that address every aspect of your business operations.</p>
=======
            <h2></h2>
              Comprehensive Solutions
            </h2>
            <p></p>
>>>>>>> origin/main
              End-to-end enterprise solutions that address every aspect of your business operations.
>>>>>>> origin/main
            </p>
          </div>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <solution.icon className="w-12 h-12 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
=======
>>>>>>> origin/main
                    </li>
<<<<<<< HEAD
=======

>>>>>>> origin/main
                  ))}
                </ul>
              </div>
            ))}
<<<<<<< HEAD
=======

>>>>>>> origin/main
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Features
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for scale, security, and performance to meet the demands of large organizations.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}
                <p className="text-gray-300 mb-4">{feature.description}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                  ))}
            ))}
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Solutions
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end enterprise solutions that address every aspect of your business operations.
                  ))}
            ))}
      {/* Benefits Section */}
      <section className="py-20 px-4">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Enterprise Solutions?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Our enterprise solutions are designed to meet the unique challenges of large organizations, 
                providing the scalability, security, and performance you need to succeed.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your enterprise? Contact our experts to discuss your requirements 
                and get a customized solution that fits your business needs.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Schedule Consultation
                </button>
                <button className="w-full border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Download Brochure
=======
<<<<<<< HEAD
=======
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
>>>>>>> origin/main
        </section>
>>>>>>> origin/main
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      {/* CTA Section */}
      <section className="py-20 px-4">
<<<<<<< HEAD
        </section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
=======
          </section>< className="$2 />
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> origin/main
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
<<<<<<< HEAD
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2>Ready to Transform Your Enterprise?</h2>
          </h2>
          <p>Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
            <button>Contact Enterprise Sales;</button>
              <ArrowRight>
            </button>
            <button>Learn More;</button>
=======
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <h2></h2>
            Ready to Transform Your Enterprise?
          </h2>
          <p></p>
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" / /></div>
            <button></button>
>>>>>>> origin/main
              Contact Enterprise Sales
              </button><ArrowRight>
            </button>
<<<<<<< HEAD
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
=======
            <button></button>
>>>>>>> origin/main
              Learn More
>>>>>>> origin/main
            </button>
          </div>
        </div>
      </section>
      <Footer /></Footer>
  ),
}
export default EnterprisePage
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Contact Enterprise Sales
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More
      <Footer />
<<<<<<< HEAD
    </div>
  );
};

export default EnterprisePage;
<<<<<<< HEAD
=======
=======
  )
}
export default EnterprisePage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></button></button></button></button></p></p></p></p></p></h1></h2></h2></h2></h3></ul></li></section></section></section></section></section>
>>>>>>> origin/main
>>>>>>> origin/main
