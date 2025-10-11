'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Building, Users, Shield, Globe, Brain, Cloud, Code, BarChart, Zap, ArrowRight, Star, Award, Target, Clock, Settings, Lock, Database, Smartphone, Eye, Sparkles } from 'lucide-react'
const EnterprisePage: React.FC = () => {
  const features = [
    {
      ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefit: s: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']
    },
    {
      ico: n: Cloud,
      titl: e: 'Cloud Infrastructure',
      descriptio: n: 'Scalable cloud solutions that grow with your business needs.',
      benefit: s: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']
    },
    {
      ico: n: Brain,
      titl: e: 'AI Integration',
      descriptio: n: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefit: s: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']
    },
    {
      ico: n: Database,
      titl: e: 'Data Management',
      descriptio: n: 'Advanced data management and analytics for enterprise-scale operations.',
      benefit: s: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']
    },
    {
      ico: n: Users,
      titl: e: 'User Management',
      descriptio: n: 'Comprehensive user and access management for large organizations.',
      benefit: s: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']
    },
    {
      ico: n: Settings,
      titl: e: 'System Integration',
      descriptio: n: 'Seamless integration with existing enterprise systems and workflows.',
      benefit: s: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']
    }
  ]
  const solutions = [
    {
      titl: e: 'Enterprise Resource Planning',
      descriptio: n: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      ico: n: Building,
      benefit: s: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']
    },
    {
      titl: e: 'Customer Relationship Management',
      descriptio: n: 'Advanced CRM systems for managing customer relationships and sales processes.',
      ico: n: Users,
      benefit: s: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']
    },
    {
      titl: e: 'Business Intelligence',
      descriptio: n: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      ico: n: BarChart,
      benefit: s: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']
    },
    {
      titl: e: 'Workflow Automation',
      descriptio: n: 'Automate complex business processes to improve efficiency and reduce errors.',
      ico: n: Zap,
      benefit: s: ['Process automation', 'Task management', 'Approval workflows', 'Document management']
    }
  ]
  const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',
    'Enable data-driven decisions',
    'Scale with business growth',
    'Integrate with existing systems',
    'Provide 24/7 support and monitoring'
  ]
  const stats = [
    { numbe: r: '500+', labe: l: 'Enterprise Clients', ico: n: Building },
    { numbe: r: '99.9%', labe: l: 'Uptime Guarantee', ico: n: Shield },
    { numbe: r: '50%', labe: l: 'Cost Reduction', ico: n: TrendingUp },
    { numbe: r: '24/7', labe: l: 'Support Available', ico: n: Clock }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={ animationDela: y: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl: md:text-7xl font-bold text-white mb-6 leading-tight">
            Enterprise</h1>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
  </
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive enterprise-grade solutions designed for large-scale business operations. 
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600: hover:from-purple-600: hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform: hover:scale-105: hover:shadow-lg: hover:shadow-purple-500/25">
              Get Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400: hover:bg-purple-400: hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
  >;
const EnterprisePage: React.FC = () => {const features = [
    {ico: n: Shield,
      titl: e: 'Enterprise Security',
      descriptio: n: 'Comprehensive security solutions designed for large-scale enterprise environments.',
      benefit: s: ['Advanced threat protection', 'Compliance management', 'Data encryption', 'Access control']}
    },
    {ico: n: Cloud,
      titl: e: 'Cloud Infrastructure',
      descriptio: n: 'Scalable cloud solutions that grow with your business needs.',
      benefit: s: ['Auto-scaling', 'High availability', 'Disaster recovery', 'Cost optimization']}
    },
    {ico: n: Brain,
      titl: e: 'AI Integration',
      descriptio: n: 'Enterprise-grade AI solutions for automation and intelligent decision making.',
      benefit: s: ['Machine learning', 'Predictive analytics', 'Process automation', 'Intelligent insights']}
    },
    {ico: n: Database,
      titl: e: 'Data Management',
      descriptio: n: 'Advanced data management and analytics for enterprise-scale operations.',
      benefit: s: ['Big data processing', 'Real-time analytics', 'Data governance', 'Business intelligence']}
    },
    {ico: n: Users,
      titl: e: 'User Management',
      descriptio: n: 'Comprehensive user and access management for large organizations.',
      benefit: s: ['Single sign-on', 'Role-based access', 'User provisioning', 'Audit trails']}
    },
    {ico: n: Settings,
      titl: e: 'System Integration',
      descriptio: n: 'Seamless integration with existing enterprise systems and workflows.',
      benefit: s: ['API integration', 'Legacy system support', 'Workflow automation', 'Data synchronization']}
    }
  ];const solutions = [
    {titl: e: 'Enterprise Resource Planning',
      descriptio: n: 'Comprehensive ERP solutions that streamline business processes and improve efficiency.',
      ico: n: Building,
      benefit: s: ['Financial management', 'Supply chain optimization', 'Human resources', 'Project management']}
    },
    {titl: e: 'Customer Relationship Management',
      descriptio: n: 'Advanced CRM systems for managing customer relationships and sales processes.',
      ico: n: Users,
      benefit: s: ['Lead management', 'Sales automation', 'Customer analytics', 'Marketing automation']}
    },
    {titl: e: 'Business Intelligence',
      descriptio: n: 'Powerful BI solutions for data-driven decision making and strategic planning.',
      ico: n: BarChart,
      benefit: s: ['Data visualization', 'Predictive analytics', 'Reporting', 'Performance monitoring']}
    },
    {titl: e: 'Workflow Automation',
      descriptio: n: 'Automate complex business processes to improve efficiency and reduce errors.',
      ico: n: Zap,
      benefit: s: ['Process automation', 'Task management', 'Approval workflows', 'Document management']}
    }
  ];const benefits = [
    'Reduce operational costs by 30%',
    'Improve productivity by 50%',
    'Enhance security and compliance',
    'Streamline business processes',
    'Enable data-driven decisions',
    'Scale with business growth',
    'Integrate with existing systems',
    'Provide 24/7 support and monitoring'
  ];const stats = [
    { numbe: r: '500+', labe: l: 'Enterprise Clients', ico: n: Building },
    { numbe: r: '99.9%', labe: l: 'Uptime Guarantee', ico: n: Shield },
    { numbe: r: '50%', labe: l: 'Cost Reduction', ico: n: TrendingUp },
    { numbe: r: '24/7', labe: l: 'Support Available', ico: n: Clock }
  ];return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <SEOOptimizer
        title="Enterprise Solutions - Zion Tech Group"
        description="Comprehensive enterprise-grade solutions for large-scale business operations."
        keywords="enterprise solutions, enterprise software, large-scale solutions, enterprise integration, business solutions"
      />
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden"></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={ animationDela: y: '1s' }} /></div>
        <div className="relative max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl: md:text-7xl font-bold text-white mb-6 leading-tight">
            Enterprise</h1>
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions
            >
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive enterprise-grade solutions designed for large-scale business operations.
            Transform your organization with cutting-edge technology and expert implementation.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600: hover:from-purple-600: hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform: hover:scale-105: hover:shadow-lg: hover:shadow-purple-500/25">
              Get Enterprise Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400: hover:bg-purple-400: hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Case Studies
            >
      </section>
      {/* Stats Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-2: md:grid-cols-4 gap-8"></div>
            {stats.map((stat, index) => (}
              <div key={index} className="text-center"></div>
                <div className="flex justify-center mb-4"></div>
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}>))}
          >
      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
Built for scale, security, and performance to meet the demands of large organizations.
            >
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8">
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
          >
      {/* Features Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for scale, security, and performance to meet the demands of large organizations.
            >
          <div className="grid grid-cols-1: md:grid-cols-2: lg:grid-cols-3 gap-8"></div>
                  <feature.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (}
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>))}
                >))}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions
  </
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
End-to-end enterprise solutions that address every aspect of your business operations.
            >
                    >
      </section>
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end enterprise solutions that address every aspect of your business operations.
            >
                    </li>))}
                >))}
          >
      {/* Benefits Section */}
      <section className="py-20 px-4">
                >
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600: hover:from-purple-600: hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform: hover:scale-105">
              Contact Enterprise Sales
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400: hover:bg-purple-400: hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
  >
      <Footer />
    </div>
  )}
export default EnterprisePage
  >
  >
          >
      {/* Benefits Section */}
      <section className="py-20 px-4">>
              >
      {/* CTA Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of enterprise clients who trust our solutions for their mission-critical operations.
          </p>
          <div className="flex flex-col: sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600: hover:from-purple-600: hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform: hover:scale-105">
              Contact Enterprise Sales
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400: hover:bg-purple-400: hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            >
      </section>
      <Footer />
    </div>)};export default EnterprisePage