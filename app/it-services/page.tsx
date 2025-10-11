'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Settings, 
  Monitor, 
  BarChart, 
  Wifi, 
  Package, 
  Lock, 
  Calendar, 
  Cpu, 
  Link, 
  ShoppingCart, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  TrendingUp,
  Server,
  Zap
} from 'lucide-react'

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure & Migration',
      icon: Cloud,
      description: 'Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.',
      features: [
        'Cloud migration and modernization',
        'Infrastructure as Code (IaC)',
        'Cost optimization and monitoring',
        'Multi-cloud and hybrid solutions',
        'Disaster recovery planning',
        '24/7 cloud monitoring'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic cloud setup', 'Email support', 'Monthly reports'] },
        professional: { price: 799, period: 'month', features: ['Advanced cloud management', 'Phone support', 'Weekly reports', 'Cost optimization'] },
        enterprise: { price: 1999, period: 'month', features: ['Full cloud suite', 'Dedicated support', 'Custom solutions', 'White-label'] }
      },
      category: 'Cloud Services',
      popular: true,
      capabilities: [
        'AWS, Azure, GCP Expertise',
        'Cloud Architecture Design',
        'Migration Planning & Execution',
        'Cost Optimization',
        'Security & Compliance',
        'Performance Monitoring'
      ]
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity & Information Security',
      icon: Shield,
      description: 'Comprehensive cybersecurity solutions to protect your digital assets, data, and infrastructure from evolving threats.',
      features: [
        'Security assessment and auditing',
        'Threat detection and response',
        'Vulnerability management',
        'Compliance and governance',
        'Security training and awareness',
        'Incident response planning'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic security monitoring', 'Email alerts', 'Monthly reports'] },
        professional: { price: 999, period: 'month', features: ['Advanced security suite', 'Real-time monitoring', 'Phone support', 'Compliance help'] },
        enterprise: { price: 2499, period: 'month', features: ['Full security suite', 'Dedicated team', 'Custom solutions', 'White-label'] }
      },
      category: 'Security',
      popular: true,
      capabilities: [
        'Security Architecture Design',
        'Threat Intelligence',
        'Penetration Testing',
        'Compliance Management',
        'Security Operations Center',
        'Incident Response'
      ]
    },
    {
      id: 'web-development',
      name: 'Web Development & Applications',
      icon: Globe,
      description: 'Modern web applications built with cutting-edge technologies, responsive design, and optimal performance.',
      features: [
        'Custom web application development',
        'Responsive and mobile-first design',
        'E-commerce solutions',
        'API development and integration',
        'Performance optimization',
        'Maintenance and support'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic website', 'Email support', 'Standard hosting'] },
        professional: { price: 599, period: 'month', features: ['Advanced web app', 'Phone support', 'Custom features', 'Performance optimization'] },
        enterprise: { price: 1499, period: 'month', features: ['Enterprise web solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Development',
      popular: true,
      capabilities: [
        'Frontend Development (React, Vue, Angular)',
        'Backend Development (Node.js, Python, .NET)',
        'Database Design & Management',
        'API Development & Integration',
        'Performance Optimization',
        'Security Implementation'
      ]
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      icon: Smartphone,
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'iOS and Android app development',
        'Cross-platform solutions (React Native, Flutter)',
        'UI/UX design and optimization',
        'App store deployment',
        'Push notifications and analytics',
        'Maintenance and updates'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic mobile app', 'Email support', 'Standard features'] },
        professional: { price: 799, period: 'month', features: ['Advanced mobile app', 'Phone support', 'Custom features', 'Analytics integration'] },
        enterprise: { price: 1999, period: 'month', features: ['Enterprise mobile solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Development',
      popular: false,
      capabilities: [
        'Native iOS Development (Swift)',
        'Native Android Development (Kotlin)',
        'Cross-platform Development',
        'UI/UX Design',
        'App Store Optimization',
        'Performance Tuning'
      ]
    },
    {
      id: 'api-development',
      name: 'API Development & Integration',
      icon: Code,
      description: 'RESTful and GraphQL APIs, microservices architecture, and seamless system integration solutions.',
      features: [
        'RESTful and GraphQL API development',
        'Microservices architecture',
        'Third-party integrations',
        'API documentation and testing',
        'Rate limiting and security',
        'Monitoring and analytics'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic API development', 'Email support', 'Standard documentation'] },
        professional: { price: 599, period: 'month', features: ['Advanced API suite', 'Phone support', 'Custom integrations', 'Performance monitoring'] },
        enterprise: { price: 1499, period: 'month', features: ['Enterprise API solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Integration',
      popular: false,
      capabilities: [
        'RESTful API Design',
        'GraphQL Implementation',
        'Microservices Architecture',
        'Third-party Integrations',
        'API Security',
        'Performance Optimization'
      ]
    },
    {
      id: 'devops-cicd',
      name: 'DevOps & CI/CD Pipeline',
      icon: Settings,
      description: 'Automated deployment pipelines, infrastructure management, and continuous integration/continuous deployment solutions.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure automation',
        'Container orchestration (Docker, Kubernetes)',
        'Monitoring and logging',
        'Security scanning and compliance',
        'Performance optimization'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic CI/CD setup', 'Email support', 'Standard monitoring'] },
        professional: { price: 799, period: 'month', features: ['Advanced DevOps suite', 'Phone support', 'Custom automation', 'Performance optimization'] },
        enterprise: { price: 1999, period: 'month', features: ['Enterprise DevOps solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'DevOps',
      popular: true,
      capabilities: [
        'CI/CD Pipeline Design',
        'Infrastructure as Code',
        'Container Orchestration',
        'Monitoring & Logging',
        'Security Automation',
        'Performance Optimization'
      ]
    },
    {
      id: 'data-analytics-bi',
      name: 'Data Analytics & Business Intelligence',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and business intelligence solutions.',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Predictive analytics and modeling',
        'Data visualization and reporting',
        'Real-time analytics'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic analytics setup', 'Email support', 'Standard reports'] },
        professional: { price: 999, period: 'month', features: ['Advanced analytics suite', 'Phone support', 'Custom dashboards', 'Real-time analytics'] },
        enterprise: { price: 2499, period: 'month', features: ['Enterprise analytics solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Analytics',
      popular: false,
      capabilities: [
        'Data Warehouse Design',
        'ETL/ELT Pipeline Development',
        'Business Intelligence Dashboards',
        'Predictive Analytics',
        'Data Visualization',
        'Real-time Processing'
      ]
    },
    {
      id: 'database-management',
      name: 'Database Management & Optimization',
      icon: Database,
      description: 'Database design, optimization, migration, and management services for improved performance and reliability.',
      features: [
        'Database design and architecture',
        'Performance tuning and optimization',
        'Data migration and consolidation',
        'Backup and recovery solutions',
        'Security and compliance',
        'Monitoring and maintenance'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic database management', 'Email support', 'Standard monitoring'] },
        professional: { price: 599, period: 'month', features: ['Advanced database suite', 'Phone support', 'Performance optimization', 'Custom solutions'] },
        enterprise: { price: 1499, period: 'month', features: ['Enterprise database solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Database',
      popular: false,
      capabilities: [
        'Database Architecture Design',
        'Performance Tuning',
        'Data Migration',
        'Backup & Recovery',
        'Security Implementation',
        'Monitoring & Maintenance'
      ]
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure & Security',
      icon: Wifi,
      description: 'Network design, implementation, and security solutions for reliable and secure connectivity.',
      features: [
        'Network design and architecture',
        'Wireless network implementation',
        'Network security and monitoring',
        'VPN and remote access solutions',
        'Load balancing and optimization',
        '24/7 network monitoring'
      ],
      pricing: {
        starter: { price: 299, period: 'month', features: ['Basic network setup', 'Email support', 'Standard monitoring'] },
        professional: { price: 799, period: 'month', features: ['Advanced network suite', 'Phone support', 'Custom solutions', 'Performance optimization'] },
        enterprise: { price: 1999, period: 'month', features: ['Enterprise network solution', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Infrastructure',
      popular: false,
      capabilities: [
        'Network Architecture Design',
        'Wireless Network Implementation',
        'Network Security',
        'VPN Solutions',
        'Load Balancing',
        'Performance Monitoring'
      ]
    },
    {
      id: 'it-support',
      name: 'IT Support & Help Desk',
      icon: Monitor,
      description: '24/7 IT support services including help desk, technical assistance, and system maintenance.',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'System maintenance and updates',
        'User training and documentation',
        'Hardware and software support',
        'Incident management'
      ],
      pricing: {
        starter: { price: 149, period: 'month', features: ['Basic IT support', 'Email support', 'Standard response time'] },
        professional: { price: 399, period: 'month', features: ['Advanced IT support', 'Phone support', 'Faster response time', 'Custom solutions'] },
        enterprise: { price: 999, period: 'month', features: ['Enterprise IT support', 'Dedicated support', 'Custom development', 'White-label'] }
      },
      category: 'Support',
      popular: true,
      capabilities: [
        'Technical Support',
        'Remote Assistance',
        'System Maintenance',
        'User Training',
        'Incident Management',
        'Documentation'
      ]
    }
  ]

  const categories = ['All', 'Cloud Services', 'Security', 'Development', 'Integration', 'DevOps', 'Analytics', 'Database', 'Infrastructure', 'Support']

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <Server className="w-8 h-8 text-cyan-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions and services to modernize your infrastructure, enhance security, and drive digital transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-cyan-500/30"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div key={service.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-cyan-500/20 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-cyan-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${service.pricing.professional.price}</span>
                    <span className="text-gray-400">/{service.pricing.professional.period}</span>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.pricing.professional.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our IT <span className="text-cyan-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide end-to-end IT solutions using cutting-edge technologies and industry best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Solutions</h3>
              <p className="text-gray-300">Comprehensive cloud services including migration, optimization, and management across all major platforms.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-gray-300">Advanced security solutions to protect your digital assets and ensure compliance with industry standards.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Development</h3>
              <p className="text-gray-300">Tailored software solutions built with modern technologies and best practices for optimal performance.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">DevOps & Automation</h3>
              <p className="text-gray-300">Streamline your development and deployment processes with automated CI/CD pipelines and infrastructure management.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <BarChart className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Data Analytics</h3>
              <p className="text-gray-300">Transform your data into actionable insights with advanced analytics and business intelligence solutions.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Monitor className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">IT Support</h3>
              <p className="text-gray-300">24/7 technical support and maintenance services to keep your systems running smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technology <span className="text-cyan-400">Stack</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest technologies and frameworks to deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
              'React', 'Vue.js', 'Angular', 'Node.js', 'Python', 'Java',
              'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL', 'DynamoDB',
              'Jenkins', 'GitLab CI', 'GitHub Actions', 'Ansible', 'Puppet', 'Chef',
              'Nginx', 'Apache', 'HAProxy', 'CDN', 'Load Balancer', 'Firewall'
            ].map((tech) => (
              <div key={tech} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-300">
                <span className="text-white font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our IT experts help you design, implement, and manage the perfect technology solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              <span>Schedule Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ItServicesPage