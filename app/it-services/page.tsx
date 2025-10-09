'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Briefcase, Globe, Smartphone, Code, BarChart, Wrench, Lock, Cpu, Link, HardDrive, FileCheck, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      title: 'Cloud Migration & Management',
      description: 'Comprehensive cloud migration, setup, optimization, and management services',
      icon: Cloud,
      price: '$1,299/month',
      features: ['AWS/Azure/GCP Setup', 'Migration Services', 'Cost Optimization', 'Security Configuration', 'Multi-cloud Strategy', 'Disaster Recovery'],
      color: 'text-blue-400',
      category: 'Cloud Computing'
    },
    {
      title: 'Edge Computing Solutions',
      description: 'Advanced edge computing infrastructure for real-time processing and low-latency applications',
      icon: Cpu,
      price: '$1,800/month',
      features: ['Edge Infrastructure', 'Real-time Processing', 'Low Latency', 'IoT Integration', 'Distributed Computing', '5G Optimization'],
      color: 'text-cyan-500',
      category: 'Edge Computing'
    },
    {
      title: 'Quantum Computing Services',
      description: 'Quantum computing infrastructure and algorithm development for complex problem solving',
      icon: Settings,
      price: '$5,000/month',
      features: ['Quantum Hardware', 'Algorithm Development', 'Quantum Simulation', 'Cryptography', 'Optimization', 'Research Support'],
      color: 'text-purple-500',
      category: 'Quantum Computing'
    },
    {
      title: 'AI Infrastructure & MLOps',
      description: 'Complete AI infrastructure setup with GPU clusters, model deployment, and MLOps pipelines',
      icon: Settings,
      price: '$2,500/month',
      features: ['GPU Clusters', 'Model Deployment', 'MLOps Pipelines', 'Data Pipelines', 'Model Monitoring', 'Auto-scaling'],
      color: 'text-indigo-500',
      category: 'AI Infrastructure'
    },
    {
      title: 'Blockchain & Web3 Development',
      description: 'Comprehensive blockchain solutions including smart contracts, DeFi, and Web3 applications',
      icon: Lock,
      price: '$2,200/month',
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Marketplaces', 'DApp Development', 'Token Economics', 'Web3 Integration'],
      color: 'text-yellow-500',
      category: 'Blockchain'
    },
    {
      title: 'IoT & Smart City Solutions',
      description: 'Internet of Things infrastructure and smart city technology implementation',
      icon: Globe,
      price: '$1,600/month',
      features: ['IoT Infrastructure', 'Sensor Networks', 'Data Collection', 'Smart City Apps', 'Real-time Monitoring', 'Urban Analytics'],
      color: 'text-green-500',
      category: 'IoT Solutions'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions with threat detection, prevention, and response automation',
      icon: Shield,
      price: '$1,599/month',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Monitoring', 'Incident Response', 'Compliance Management', 'Penetration Testing'],
      color: 'text-red-400',
      category: 'Security'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring',
      icon: Settings,
      price: '$1,199/month',
      features: ['CI/CD Pipelines', 'Automated Testing', 'Container Orchestration', 'Monitoring Setup', 'Infrastructure as Code', 'GitOps Implementation'],
      color: 'text-green-400',
      category: 'DevOps'
    },
    {
      title: 'Database Services',
      description: 'Database design, optimization, and management with AI-powered tuning and analytics',
      icon: Database,
      price: '$899/month',
      features: ['Database Design', 'Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Data Migration', 'Real-time Analytics'],
      color: 'text-purple-400',
      category: 'Data Management'
    },
    {
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting for digital transformation, optimization, and innovation',
      icon: Briefcase,
      price: '$1,000/month',
      features: ['Strategic Planning', 'Technology Assessment', 'Digital Transformation', 'Process Optimization', 'Change Management', 'ROI Analysis'],
      color: 'text-yellow-400',
      category: 'Consulting'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design and implement robust network infrastructure solutions with security and performance optimization',
      icon: Globe,
      price: '$1,400/month',
      features: ['Network Design', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring', 'SD-WAN Solutions', 'Network Automation'],
      color: 'text-indigo-400',
      category: 'Networking'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development with modern frameworks',
      icon: Smartphone,
      price: '$1,500/month',
      features: ['iOS/Android Apps', 'Cross-platform Development', 'UI/UX Design', 'App Store Optimization', 'Progressive Web Apps', 'Mobile Security'],
      color: 'text-pink-400',
      category: 'Mobile Development'
    },
    {
      title: 'Web Development',
      description: 'Modern web applications with cutting-edge technologies and performance optimization',
      icon: Code,
      price: '$1,200/month',
      features: ['Frontend Development', 'Backend Development', 'API Integration', 'Performance Optimization', 'Progressive Web Apps', 'Microservices Architecture'],
      color: 'text-cyan-400',
      category: 'Web Development'
    },
    {
      title: 'Data Analytics & BI',
      description: 'Business intelligence and data analytics solutions with real-time insights',
      icon: BarChart,
      price: '$1,300/month',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Dashboards', 'Data Mining', 'Predictive Analytics', 'Data Visualization'],
      color: 'text-orange-400',
      category: 'Data Analytics'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support and system maintenance services with proactive monitoring',
      icon: Wrench,
      price: '$800/month',
      features: ['24/7 Support', 'System Maintenance', 'Software Updates', 'Hardware Management', 'Remote Monitoring', 'Help Desk Services'],
      color: 'text-gray-400',
      category: 'Support'
    },
    {
      title: 'Enterprise Integration',
      description: 'Enterprise system integration, API development, and legacy system modernization',
      icon: Link,
      price: '$1,400/month',
      features: ['API Development', 'System Integration', 'Legacy Modernization', 'Data Synchronization', 'Workflow Automation', 'Enterprise Architecture'],
      color: 'text-blue-500',
      category: 'Integration'
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery, backup solutions, and business continuity planning',
      icon: HardDrive,
      price: '$1,100/month',
      features: ['Backup Solutions', 'Disaster Recovery', 'Business Continuity', 'Data Replication', 'Recovery Testing', 'Compliance Backup'],
      color: 'text-red-500',
      category: 'Data Protection'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance, governance, and regulatory adherence solutions',
      icon: FileCheck,
      price: '$1,300/month',
      features: ['Compliance Management', 'Audit Preparation', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting', 'Governance Framework'],
      color: 'text-indigo-500',
      category: 'Compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud migration, cybersecurity, DevOps, and enterprise solutions. Transform your business with our cutting-edge technology."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'enterprise solutions', 'digital transformation']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
        enableCriticalCSS={true}
        enableResourceHints={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
        enableAriaLabels={true}
        enableReducedMotion={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
            IT Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT solutions for modern enterprise infrastructure. From cloud migration to cybersecurity, we provide end-to-end technology services.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {itServices.map((service, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold mb-2 neon-text ${service.color}`}>{service.price}</div>
                  <a 
                    href="/contact" 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our IT Services?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cutting-Edge Technology</h3>
              <p className="text-gray-300">We use the latest technologies and best practices to deliver superior IT solutions</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for your critical data and infrastructure</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock support and monitoring to keep your systems running smoothly</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cost Effective</h3>
              <p className="text-gray-300">Optimize your IT costs with our efficient and scalable solutions</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3>
              <p className="text-gray-300">Tailored IT solutions designed to meet your specific business requirements</p>
            </div>
            
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Scalable Growth</h3>
              <p className="text-gray-300">IT infrastructure that grows with your business and adapts to changing needs</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our expert team help you build a robust, secure, and scalable IT infrastructure that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started Today
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Call +1 302 464 0950
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;