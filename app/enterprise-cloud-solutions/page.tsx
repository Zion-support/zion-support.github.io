'use client'
import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { Cloud, Server, Shield, Zap, BarChart, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, DollarSign, Award, Rocket, Layers, Workflow, BarChart3, MessageSquare, Headphones, Monitor, HardDrive, Wifi, Printer, Router, Package, Heart, Users, Clock, Target, CheckCircle, ArrowRight, Star, Cpu, Eye, Mic, Code, Brain } from 'lucide-react'

const EnterpriseCloudSolutionsPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Multi-Cloud Architecture',
      description: 'Comprehensive multi-cloud strategy and implementation across AWS, Azure, and Google Cloud',
      price: '$15,000/month',
      marketPrice: '$25,000-50,000/month',
      features: ['Multi-cloud migration', 'Cloud cost optimization', 'Disaster recovery', 'Compliance management', '24/7 monitoring'],
      benefits: ['99.9% uptime guarantee', '50% cost reduction', 'Enhanced security', 'Scalable infrastructure']
    },
    {
      icon: Server,
      title: 'Hybrid Cloud Solutions',
      description: 'Seamless integration between on-premises and cloud infrastructure for optimal performance',
      price: '$12,000/month',
      marketPrice: '$20,000-40,000/month',
      features: ['Hybrid connectivity', 'Data synchronization', 'Workload optimization', 'Security management', 'Performance monitoring'],
      benefits: ['Flexible deployment', 'Reduced latency', 'Cost efficiency', 'Enhanced security']
    },
    {
      icon: Shield,
      title: 'Cloud Security & Compliance',
      description: 'Advanced security solutions and compliance management for enterprise cloud environments',
      price: '$8,000/month',
      marketPrice: '$15,000-30,000/month',
      features: ['Zero-trust architecture', 'Compliance automation', 'Threat detection', 'Data encryption', 'Access management'],
      benefits: ['Enhanced security posture', 'Regulatory compliance', 'Risk mitigation', 'Automated monitoring']
    },
    {
      icon: Database,
      title: 'Cloud Database Management',
      description: 'Optimized database solutions with automated scaling, backup, and performance tuning',
      price: '$6,000/month',
      marketPrice: '$10,000-25,000/month',
      features: ['Auto-scaling databases', 'Automated backups', 'Performance optimization', 'Data migration', 'Monitoring & alerting'],
      benefits: ['Improved performance', 'Reduced downtime', 'Cost optimization', 'Automated management']
    },
    {
      icon: Zap,
      title: 'Cloud Automation & DevOps',
      description: 'Complete CI/CD pipelines and infrastructure automation for faster deployments',
      price: '$10,000/month',
      marketPrice: '$18,000-35,000/month',
      features: ['CI/CD pipelines', 'Infrastructure as Code', 'Automated testing', 'Deployment automation', 'Monitoring & logging'],
      benefits: ['Faster deployments', 'Reduced errors', 'Improved efficiency', 'Better collaboration']
    },
    {
      icon: BarChart,
      title: 'Cloud Analytics & Monitoring',
      description: 'Comprehensive monitoring, analytics, and business intelligence for cloud environments',
      price: '$5,000/month',
      marketPrice: '$8,000-20,000/month',
      features: ['Real-time monitoring', 'Performance analytics', 'Cost tracking', 'Custom dashboards', 'Alert management'],
      benefits: ['Better visibility', 'Cost optimization', 'Proactive management', 'Data-driven decisions']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$5,000/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Basic cloud migration',
        'Standard security',
        'Email support',
        'Monthly reports',
        'Up to 50 users'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$15,000/month',
      description: 'Comprehensive solution for growing enterprises',
      features: [
        'Multi-cloud architecture',
        'Advanced security',
        'Priority support',
        'Up to 500 users',
        'Custom integrations',
        '24/7 monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$35,000/month',
      description: 'Complete cloud solutions for large organizations',
      features: [
        'Full cloud transformation',
        'Custom security solutions',
        'Dedicated support team',
        'Unlimited users',
        'White-label solutions',
        'On-premise integration'
      ],
      popular: false
    }
  ]

  const technologies = [
    { name: 'Amazon Web Services (AWS)', icon: Cloud },
    { name: 'Microsoft Azure', icon: Server },
    { name: 'Google Cloud Platform', icon: Globe },
    { name: 'Kubernetes', icon: Settings },
    { name: 'Docker', icon: Package },
    { name: 'Terraform', icon: Code }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mr-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Enterprise Cloud <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Solutions</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with comprehensive cloud solutions designed for enterprise-scale operations. 
              From migration to optimization, we provide end-to-end cloud services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                Start Cloud Journey
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Trusted Cloud Technologies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with leading cloud providers and cutting-edge technologies to deliver the best solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <tech.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Comprehensive Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our enterprise cloud solutions cover every aspect of your cloud journey, from strategy to optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-blue-400 font-semibold">{service.price}</span>
                      <span className="text-gray-400 text-sm">Market: {service.marketPrice}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="text-white font-semibold">Key Features:</h4>
                  {service.features.map((feature, featIndex) => (
                    <div key={featIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-semibold">Benefits:</h4>
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-300">
                      <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose Your Cloud Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your organization's cloud needs and budget requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700' 
                    : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join leading enterprises using our cloud solutions to drive innovation and growth. 
            Contact us today to start your cloud transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default EnterpriseCloudSolutionsPage