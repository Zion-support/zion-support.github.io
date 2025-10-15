'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Smartphone, 
  Globe, 
  Settings,
  Users,
  BarChart3,
  Lock,
  Zap,
  Monitor,
  Code,
  Cpu,
  HardDrive,
  Wifi,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Award,
  Sparkles,
  Layers,
  Activity,
  Key,
  FileText,
  MessageSquare,
  ShoppingCart,
  Search,
  Target,
  Workflow
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure-management',
      name: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure management services including AWS, Azure, and Google Cloud setup, optimization, and ongoing maintenance.',
      icon: Cloud,
      category: 'Cloud Services',
      features: [
        'Multi-cloud strategy and migration',
        'Infrastructure as Code (IaC) implementation',
        'Auto-scaling and load balancing',
        'Cost optimization and monitoring',
        'Security hardening and compliance',
        'Disaster recovery and backup solutions',
        '24/7 monitoring and support',
        'Performance optimization'
      ],
      pricing: {
        starter: { price: 999, period: 'month', features: ['Basic cloud setup', 'Monthly monitoring', 'Email support'] },
        professional: { price: 2499, period: 'month', features: ['Advanced optimization', 'Real-time monitoring', 'Phone support'] },
        enterprise: { price: 4999, period: 'month', features: ['Full management', 'Dedicated team', 'Custom solutions'] }
      },
      benefits: [
        'Reduce cloud costs by 30%',
        'Improve uptime to 99.9%',
        'Enhance security posture',
        'Scale infrastructure efficiently'
      ],
      useCases: ['Cloud migration', 'Infrastructure optimization', 'Disaster recovery', 'Cost management'],
      link: 'https://ziontechgroup.com/cloud-infrastructure-management'
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, security implementation, monitoring, and incident response.',
      icon: Shield,
      category: 'Security',
      features: [
        'Security assessment and penetration testing',
        'Firewall and network security implementation',
        'Endpoint protection and antivirus solutions',
        'Security awareness training',
        'Incident response and forensics',
        'Compliance management (SOC2, GDPR, HIPAA)',
        '24/7 security monitoring',
        'Vulnerability management'
      ],
      pricing: {
        starter: { price: 799, period: 'month', features: ['Basic security setup', 'Monthly assessments', 'Email alerts'] },
        professional: { price: 1999, period: 'month', features: ['Advanced monitoring', 'Real-time alerts', 'Phone support'] },
        enterprise: { price: 3999, period: 'month', features: ['Full security suite', 'Dedicated team', 'Custom policies'] }
      },
      benefits: [
        'Reduce security incidents by 85%',
        'Achieve compliance faster',
        'Lower security costs by 40%',
        'Protect business reputation'
      ],
      useCases: ['Security assessment', 'Compliance management', 'Threat monitoring', 'Incident response'],
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network infrastructure design, implementation, and management including LAN, WAN, wireless, and security solutions.',
      icon: Network,
      category: 'Infrastructure',
      features: [
        'Network design and architecture',
        'LAN and WAN implementation',
        'Wireless network setup and optimization',
        'Network security and firewall configuration',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Performance optimization',
        'Disaster recovery planning'
      ],
      pricing: {
        starter: { price: 599, period: 'month', features: ['Basic network setup', 'Monthly monitoring', 'Standard support'] },
        professional: { price: 1499, period: 'month', features: ['Advanced features', 'Real-time monitoring', 'Priority support'] },
        enterprise: { price: 2999, period: 'month', features: ['Full management', 'Dedicated team', 'Custom solutions'] }
      },
      benefits: [
        'Improve network performance by 50%',
        'Reduce downtime by 70%',
        'Enhance security posture',
        'Scale network infrastructure'
      ],
      useCases: ['Network setup', 'Performance optimization', 'Security implementation', 'Remote access'],
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database management services including design, implementation, optimization, backup, and maintenance.',
      icon: Database,
      category: 'Data Management',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Backup and disaster recovery',
        'Security and access control',
        'Monitoring and alerting',
        'Migration and upgrades',
        'Data integrity and validation',
        '24/7 support and maintenance'
      ],
      pricing: {
        starter: { price: 699, period: 'month', features: ['Basic database management', 'Monthly optimization', 'Email support'] },
        professional: { price: 1799, period: 'month', features: ['Advanced optimization', 'Real-time monitoring', 'Phone support'] },
        enterprise: { price: 3599, period: 'month', features: ['Full management', 'Dedicated DBA', 'Custom solutions'] }
      },
      benefits: [
        'Improve database performance by 60%',
        'Reduce downtime by 80%',
        'Enhance data security',
        'Optimize storage costs'
      ],
      useCases: ['Database optimization', 'Migration services', 'Backup solutions', 'Performance tuning'],
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      description: 'Custom mobile application development for iOS and Android platforms with native and cross-platform solutions.',
      icon: Smartphone,
      category: 'Development',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'UI/UX design and optimization',
        'API integration and backend services',
        'App store deployment and management',
        'Performance optimization',
        'Security implementation',
        'Ongoing maintenance and updates'
      ],
      pricing: {
        starter: { price: 4999, period: 'project', features: ['Basic mobile app', 'Standard features', '3 months support'] },
        professional: { price: 14999, period: 'project', features: ['Advanced features', 'Custom design', '6 months support'] },
        enterprise: { price: 49999, period: 'project', features: ['Full-featured app', 'Custom backend', '12 months support'] }
      },
      benefits: [
        'Reach mobile users effectively',
        'Improve customer engagement',
        'Increase business revenue',
        'Enhance brand presence'
      ],
      useCases: ['Business apps', 'E-commerce apps', 'Customer portals', 'Internal tools'],
      link: 'https://ziontechgroup.com/mobile-app-development'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      description: 'Custom web application development including frontend, backend, and full-stack solutions with modern technologies.',
      icon: Globe,
      category: 'Development',
      features: [
        'Frontend development (React, Vue, Angular)',
        'Backend development (Node.js, Python, Java)',
        'Database design and integration',
        'API development and integration',
        'Responsive design and optimization',
        'Security implementation',
        'Performance optimization',
        'SEO and accessibility'
      ],
      pricing: {
        starter: { price: 2999, period: 'project', features: ['Basic website', 'Standard features', '3 months support'] },
        professional: { price: 9999, period: 'project', features: ['Advanced features', 'Custom design', '6 months support'] },
        enterprise: { price: 29999, period: 'project', features: ['Full-featured app', 'Custom backend', '12 months support'] }
      },
      benefits: [
        'Establish online presence',
        'Improve user experience',
        'Increase conversions',
        'Scale with business growth'
      ],
      useCases: ['Business websites', 'E-commerce platforms', 'Web applications', 'Portals'],
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      description: 'Comprehensive DevOps services including CI/CD pipeline setup, infrastructure automation, and deployment optimization.',
      icon: Settings,
      category: 'DevOps',
      features: [
        'CI/CD pipeline implementation',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Docker, Kubernetes)',
        'Automated testing and deployment',
        'Monitoring and logging solutions',
        'Security integration',
        'Performance optimization',
        'Disaster recovery automation'
      ],
      pricing: {
        starter: { price: 1299, period: 'month', features: ['Basic CI/CD setup', 'Monthly optimization', 'Email support'] },
        professional: { price: 2999, period: 'month', features: ['Advanced automation', 'Real-time monitoring', 'Phone support'] },
        enterprise: { price: 5999, period: 'month', features: ['Full DevOps suite', 'Dedicated team', 'Custom solutions'] }
      },
      benefits: [
        'Reduce deployment time by 80%',
        'Improve code quality',
        'Increase deployment frequency',
        'Reduce operational costs'
      ],
      useCases: ['CI/CD implementation', 'Infrastructure automation', 'Deployment optimization', 'Monitoring setup'],
      link: 'https://ziontechgroup.com/devops-solutions'
    },
    {
      id: 'it-support-services',
      name: 'IT Support Services',
      description: 'Comprehensive IT support services including help desk, technical support, and IT consulting for businesses of all sizes.',
      icon: Users,
      category: 'Support',
      features: [
        '24/7 help desk support',
        'Remote and on-site support',
        'Hardware and software troubleshooting',
        'User training and onboarding',
        'IT asset management',
        'System maintenance and updates',
        'Security patch management',
        'IT consulting and strategy'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic support', 'Email tickets', 'Business hours'] },
        professional: { price: 899, period: 'month', features: ['Priority support', 'Phone support', 'Extended hours'] },
        enterprise: { price: 1799, period: 'month', features: ['Dedicated support', '24/7 availability', 'On-site support'] }
      },
      benefits: [
        'Reduce IT downtime by 60%',
        'Improve user productivity',
        'Lower IT support costs',
        'Ensure system reliability'
      ],
      useCases: ['Help desk support', 'Technical troubleshooting', 'User training', 'System maintenance'],
      link: 'https://ziontechgroup.com/it-support-services'
    },
    {
      id: 'data-analytics-solutions',
      name: 'Data Analytics Solutions',
      description: 'Comprehensive data analytics services including data warehousing, business intelligence, and advanced analytics implementation.',
      icon: BarChart3,
      category: 'Analytics',
      features: [
        'Data warehouse design and implementation',
        'Business intelligence dashboard creation',
        'Data visualization and reporting',
        'Advanced analytics and machine learning',
        'Data integration and ETL processes',
        'Real-time analytics and monitoring',
        'Data quality management',
        'Custom analytics solutions'
      ],
      pricing: {
        starter: { price: 1299, period: 'month', features: ['Basic analytics setup', 'Standard reports', 'Email support'] },
        professional: { price: 2999, period: 'month', features: ['Advanced analytics', 'Custom dashboards', 'Phone support'] },
        enterprise: { price: 5999, period: 'month', features: ['Full analytics suite', 'Dedicated team', 'Custom solutions'] }
      },
      benefits: [
        'Improve data-driven decisions',
        'Reduce reporting time by 70%',
        'Enhance business insights',
        'Scale analytics capabilities'
      ],
      useCases: ['Business intelligence', 'Data warehousing', 'Reporting solutions', 'Advanced analytics'],
      link: 'https://ziontechgroup.com/data-analytics-solutions'
    },
    {
      id: 'backup-disaster-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions including data protection, business continuity planning, and recovery testing.',
      icon: HardDrive,
      category: 'Data Protection',
      features: [
        'Automated backup solutions',
        'Disaster recovery planning',
        'Business continuity testing',
        'Data replication and synchronization',
        'Recovery time optimization',
        'Compliance and audit support',
        '24/7 monitoring and alerts',
        'Custom recovery procedures'
      ],
      pricing: {
        starter: { price: 599, period: 'month', features: ['Basic backup solution', 'Monthly testing', 'Email support'] },
        professional: { price: 1499, period: 'month', features: ['Advanced features', 'Weekly testing', 'Phone support'] },
        enterprise: { price: 2999, period: 'month', features: ['Full DR suite', 'Daily testing', 'Dedicated support'] }
      },
      benefits: [
        'Minimize data loss risk',
        'Reduce recovery time by 80%',
        'Ensure business continuity',
        'Meet compliance requirements'
      ],
      useCases: ['Data backup', 'Disaster recovery', 'Business continuity', 'Compliance management'],
      link: 'https://ziontechgroup.com/backup-disaster-recovery'
    }
  ];

  const categories = [
    { name: 'Cloud Services', icon: Cloud, count: 2 },
    { name: 'Security', icon: Shield, count: 2 },
    { name: 'Infrastructure', icon: Network, count: 2 },
    { name: 'Data Management', icon: Database, count: 2 },
    { name: 'Development', icon: Code, count: 2 },
    { name: 'DevOps', icon: Settings, count: 1 },
    { name: 'Support', icon: Users, count: 1 },
    { name: 'Analytics', icon: BarChart3, count: 1 },
    { name: 'Data Protection', icon: HardDrive, count: 1 }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '30-day', label: 'Free Consultation' }
  ];

  return (
    <>
      <SEOHead 
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and custom development solutions for modern businesses."
        keywords="IT services, cloud infrastructure, cybersecurity, network management, web development, mobile development, DevOps"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 lg:mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent leading-tight">
                IT Services
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                Comprehensive IT services designed to modernize your infrastructure, enhance security, 
                and drive digital transformation across your organization.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto px-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-slate-800/30 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-cyan-400 mb-1 lg:mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-xs sm:text-sm lg:text-base">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                IT Service <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Categories</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Explore our comprehensive range of IT services across different domains and specializations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
              {categories.map((category, index) => (
                <div key={index} className="group bg-slate-800/30 p-6 rounded-lg border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {category.count} Services
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">IT Services</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Discover our comprehensive suite of IT services designed to modernize and secure your business infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
                <div key={service.id} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {service.name}
                        </h3>
                        <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                          {service.category}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Starter</div>
                        <div className="text-cyan-400">${service.pricing.starter.price}/{service.pricing.starter.period}</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Pro</div>
                        <div className="text-cyan-400">${service.pricing.professional.price}/{service.pricing.professional.period}</div>
                      </div>
                      <div className="text-center p-2 bg-slate-700/50 rounded">
                        <div className="font-semibold text-white">Enterprise</div>
                        <div className="text-cyan-400">${service.pricing.enterprise.price}/{service.pricing.enterprise.period}</div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                    <div className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-cyan-400 text-cyan-300 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Ready to Modernize Your IT?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let our expert team help you transform your IT infrastructure and drive digital innovation. 
              Start with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;