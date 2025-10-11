'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Server, Shield, Cloud, Code, CheckCircle, ArrowRight, Database, Wifi, Monitor, Settings, Users, Globe, Smartphone, BarChart, TrendingUp, Lock, Cpu, HardDrive, Network, Zap, Rocket, Phone, Mail, Calendar, FileText, MessageSquare, ShoppingCart, Heart, Lightbulb, Gauge, DollarSign, Star, Award, Clock, Sparkles, Target, Shield as ShieldIcon, Code as CodeIcon, BarChart as BarChartIcon, Zap as ZapIcon } from 'lucide-react'

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: Server,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure solutions including server management, network configuration, and system monitoring.',
      features: ['Server Management', 'Network Configuration', 'System Monitoring', 'Backup Solutions', 'Disaster Recovery'],
      pricing: 'Starting at $1,500/month',
      category: 'Infrastructure',
      benefits: ['99.9% uptime', '24/7 monitoring', 'Proactive maintenance', 'Cost optimization']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your business from cyber threats and ensure compliance.',
      features: ['Threat Detection', 'Data Protection', 'Compliance Management', 'Incident Response', 'Security Audits'],
      pricing: 'Starting at $2,200/month',
      category: 'Security',
      benefits: ['Advanced threat protection', 'Compliance ready', 'Real-time monitoring', 'Expert support']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions with migration, optimization, and ongoing management.',
      features: ['Cloud Migration', 'Hybrid Solutions', 'Cost Optimization', 'Multi-cloud Management', 'Auto-scaling'],
      pricing: 'Starting at $1,800/month',
      category: 'Cloud',
      benefits: ['Scalable infrastructure', 'Cost savings', 'Enhanced security', 'Global availability']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built to meet your specific business requirements and objectives.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration', 'Legacy Modernization'],
      pricing: 'Starting at $3,500/month',
      category: 'Development',
      benefits: ['Custom solutions', 'Modern technology', 'Scalable architecture', 'Ongoing support']
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Expert database administration, optimization, and management for optimal performance and security.',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
      pricing: 'Starting at $1,200/month',
      category: 'Database',
      benefits: ['Optimized performance', 'Data security', 'Automated backups', 'Expert administration']
    },
    {
      icon: Wifi,
      title: 'Network Solutions',
      description: 'Advanced networking solutions including design, implementation, and ongoing management.',
      features: ['Network Design', 'Wireless Solutions', 'VPN Setup', 'Load Balancing', 'Network Security'],
      pricing: 'Starting at $1,000/month',
      category: 'Networking',
      benefits: ['Reliable connectivity', 'Enhanced security', 'Scalable design', 'Performance optimization']
    },
    {
      icon: Monitor,
      title: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services with 24/7 helpdesk and technical assistance.',
      features: ['24/7 Support', 'Remote Assistance', 'Hardware Support', 'Software Support', 'User Training'],
      pricing: 'Starting at $800/month',
      category: 'Support',
      benefits: ['24/7 availability', 'Fast response times', 'Expert technicians', 'Proactive support']
    },
    {
      icon: Settings,
      title: 'System Administration',
      description: 'Professional system administration services for Windows, Linux, and hybrid environments.',
      features: ['User Management', 'System Updates', 'Security Patches', 'Performance Monitoring', 'Troubleshooting'],
      pricing: 'Starting at $1,100/month',
      category: 'Administration',
      benefits: ['Proactive management', 'Security updates', 'Performance optimization', 'Expert administration']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to help you make informed technology decisions and plan for the future.',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Cost Analysis', 'Roadmap Development'],
      pricing: 'Starting at $150/hour',
      category: 'Consulting',
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology roadmap', 'Expert advice']
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern web development services including responsive design, e-commerce, and web applications.',
      features: ['Responsive Design', 'E-commerce Solutions', 'Content Management', 'SEO Optimization', 'Performance Tuning'],
      pricing: 'Starting at $2,500/month',
      category: 'Web Development',
      benefits: ['Modern design', 'Mobile responsive', 'SEO optimized', 'Fast loading']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile app development for iOS and Android devices.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Optimization', 'Maintenance'],
      pricing: 'Starting at $3,000/month',
      category: 'Mobile',
      benefits: ['Native performance', 'Cross-platform', 'App store ready', 'Ongoing support']
    },
    {
      icon: BarChart,
      title: 'Business Intelligence',
      description: 'Data analytics and business intelligence solutions to help you make data-driven decisions.',
      features: ['Data Visualization', 'Reporting Dashboards', 'Data Integration', 'Predictive Analytics', 'KPI Tracking'],
      pricing: 'Starting at $2,000/month',
      category: 'Analytics',
      benefits: ['Data insights', 'Visual dashboards', 'Predictive analytics', 'Better decisions']
    }
  ]

  const supportPlans = [
    {
      name: 'Basic Support',
      price: '$800',
      period: 'per month',
      features: [
        'Business hours support (9 AM - 5 PM)',
        'Email and phone support',
        'Remote assistance',
        'Basic troubleshooting',
        'Software installation',
        'User account management'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      price: '$1,500',
      period: 'per month',
      features: [
        '24/7 support coverage',
        'Priority response times',
        'Remote and on-site support',
        'Proactive monitoring',
        'Security updates',
        'Performance optimization',
        'Backup management',
        'Network monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '$3,000',
      period: 'per month',
      features: [
        'Dedicated account manager',
        '24/7 priority support',
        'On-site support included',
        'Custom SLA agreements',
        'Advanced security monitoring',
        'Disaster recovery planning',
        'Compliance management',
        'Strategic IT planning',
        'Unlimited support tickets'
      ],
      popular: false
    }
  ]

  const technologies = [
    { name: 'Microsoft Azure', icon: Cloud, description: 'Cloud computing and services' },
    { name: 'Amazon AWS', icon: Server, description: 'Scalable cloud infrastructure' },
    { name: 'Google Cloud', icon: Globe, description: 'AI and data analytics platform' },
    { name: 'Microsoft 365', icon: Settings, description: 'Productivity and collaboration' },
    { name: 'VMware', icon: Monitor, description: 'Virtualization and cloud management' },
    { name: 'Cisco', icon: Wifi, description: 'Networking and security solutions' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions to keep your business running smoothly, securely, and efficiently. 
              From infrastructure management to custom development, we provide end-to-end IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Get IT Support
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-300">
              Choose from our extensive portfolio of IT services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <span className="text-sm text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <TrendingUp className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-lg font-bold text-white">{service.pricing}</div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Support Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the support plan that best fits your business needs and budget.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 ${plan.popular ? 'border-2 border-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                <div className="text-gray-400 mb-6">{plan.period}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Partners
            </h2>
            <p className="text-xl text-gray-300">
              We work with leading technology providers to deliver the best solutions for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{tech.name}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our IT services can help optimize your technology infrastructure and drive business growth.
            Contact us at <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">kleber@ziontechgroup.com</a> or call <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
              <ArrowRight className="w-5 h-5 mr-2" />
              Get Started
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Schedule Assessment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ITServicesPage