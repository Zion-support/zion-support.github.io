'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Smartphone, Code, BarChart, Wrench, Lock, Cpu, Brain, Link, RefreshCw, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Services & Migration',
      description: 'Comprehensive cloud migration, setup, optimization, and management services across all major platforms',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery'],
      benefits: ['40% cost reduction', '99.9% uptime', 'Scalable infrastructure', 'Enhanced security'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and incident response capabilities',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Penetration Testing', 'Compliance Auditing'],
      benefits: ['99% threat detection', 'Faster response times', 'Compliance assurance', 'Risk reduction'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring solutions',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Workflows'],
      benefits: ['50% faster deployments', '90% fewer errors', 'Automated processes', 'Better collaboration'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and performance monitoring',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'AI-powered Optimization', 'Real-time Monitoring'],
      benefits: ['60% performance boost', 'Zero data loss', 'Automated optimization', 'Cost savings'],
      color: 'text-purple-400',
      category: 'Database'
    },
    {
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting for digital transformation, technology assessment, and process optimization',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'ROI Analysis', 'Change Management'],
      benefits: ['Better technology decisions', 'Cost optimization', 'Improved efficiency', 'Competitive advantage'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation'],
      benefits: ['99.9% uptime', 'Enhanced security', 'Better performance', 'Reduced costs'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks and best practices',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      benefits: ['Faster time to market', 'Better user experience', 'Cross-platform efficiency', 'App store success'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies, performance optimization, and responsive design',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'SEO Optimization'],
      benefits: ['Faster loading times', 'Better user experience', 'SEO optimized', 'Mobile responsive'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with AI-powered insights and real-time reporting',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Real-time Processing'],
      benefits: ['Better decisions', 'Faster insights', 'Data-driven culture', 'Competitive advantage'],
      color: 'text-orange-400',
      category: 'Data & Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring and management',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Proactive Monitoring', 'Help Desk Services'],
      benefits: ['Reduced downtime', 'Faster resolution', 'Proactive maintenance', 'Cost predictability'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Blockchain development and cryptocurrency solutions with smart contracts and DeFi applications',
      icon: Lock,
      price: '$2,000/month',
      features: ['Smart Contracts', 'DApp Development', 'Token Creation', 'DeFi Solutions', 'NFT Platforms', 'Blockchain Integration'],
      benefits: ['Transparent transactions', 'Reduced costs', 'Enhanced security', 'New business models'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT Solutions',
      description: 'Internet of Things development and implementation with edge computing and real-time analytics',
      icon: Cpu,
      price: '$1,600/month',
      features: ['IoT Device Development', 'Sensor Integration', 'Data Collection', 'Real-time Monitoring', 'Edge Computing', 'Predictive Maintenance'],
      benefits: ['Operational efficiency', 'Cost reduction', 'Predictive insights', 'Automated processes'],
      color: 'text-green-500',
      category: 'IoT'
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, database management, and digital transformation. Expert IT solutions for modern businesses."
        keywords="IT services, cloud migration, cybersecurity, DevOps, database, digital transformation, IT consulting"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="pt-20 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive IT services. From cloud migration to cybersecurity, 
              we provide end-to-end technology solutions that drive efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className={`w-8 h-8 ${service.color} mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                      <span className="text-sm text-cyan-400">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our IT experts are ready to help you implement the perfect technology solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Start Your IT Transformation
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ITServicesPage;