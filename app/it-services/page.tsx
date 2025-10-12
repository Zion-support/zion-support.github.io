import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle, ArrowRight, Cloud, Shield, Code, Smartphone, Database, Cpu, Wifi, Server } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function ITServicesPage() {
  const itServices = [
    {
      icon: <Cloud className="w-12 h-12 text-blue-500" />,
      title: 'Cloud Migration & Management',
      description: 'Complete cloud transformation services with seamless migration, optimization, and ongoing management across all major cloud platforms.',
      features: [
        'AWS, Azure, GCP expertise',
        'Zero-downtime migration',
        'Cost optimization (up to 40% savings)',
        'Security compliance (SOC 2, ISO 27001)',
        '24/7 monitoring & support',
        'Disaster recovery planning',
        'Multi-cloud strategies',
        'Cloud-native architecture'
      ],
      pricing: 'Starting at $3,500/month',
      popular: true,
      link: '/cloud-migration'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Enterprise Cybersecurity Suite',
      description: 'Comprehensive cybersecurity solutions including threat detection, incident response, compliance management, and security training.',
      features: [
        'Security assessment & auditing',
        'Advanced threat detection',
        '24/7 SOC monitoring',
        'Incident response team',
        'Compliance management (GDPR, HIPAA)',
        'Security awareness training',
        'Penetration testing',
        'Vulnerability management'
      ],
      pricing: 'Starting at $2,800/month',
      popular: true,
      link: '/cybersecurity-solutions'
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD Automation',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, container orchestration, and infrastructure automation.',
      features: [
        'CI/CD pipeline setup',
        'Kubernetes orchestration',
        'Infrastructure as Code (Terraform)',
        'Automated testing & deployment',
        'GitOps workflows',
        'Performance monitoring',
        'Security scanning integration',
        'Blue-green deployments'
      ],
      pricing: 'Starting at $3,200/month',
      popular: true,
      link: '/devops-cicd'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Advanced Data Analytics Platform',
      description: 'Enterprise-grade data analytics platform with real-time processing, machine learning integration, and advanced visualization.',
      features: [
        'Data warehousing & lakes',
        'Real-time analytics',
        'Machine learning integration',
        'Advanced dashboards',
        'Data visualization tools',
        'Predictive analytics',
        'Data governance',
        'Self-service analytics'
      ],
      pricing: 'Starting at $2,500/month',
      popular: false,
      link: '/data-analytics'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile & Web Development',
      description: 'Full-stack mobile and web application development with modern frameworks, cloud integration, and performance optimization.',
      features: [
        'Native iOS & Android apps',
        'React Native & Flutter',
        'Progressive Web Apps',
        'UI/UX design services',
        'API development & integration',
        'App store optimization',
        'Performance optimization',
        'Maintenance & support'
      ],
      pricing: 'Starting at $4,500/month',
      popular: false,
      link: '/mobile-development'
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-500" />,
      title: 'Infrastructure Management Pro',
      description: 'Complete infrastructure management including server administration, network optimization, backup solutions, and disaster recovery.',
      features: [
        'Server administration',
        'Network design & optimization',
        'Backup & disaster recovery',
        'Performance monitoring',
        'Capacity planning',
        'Security hardening',
        'Patch management',
        '24/7 NOC support'
      ],
      pricing: 'Starting at $2,200/month',
      popular: true,
      link: '/infrastructure-management'
    },
    {
      icon: <Wifi className="w-12 h-12 text-indigo-500" />,
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring, threat detection, and automated response capabilities.',
      features: [
        'Network security assessment',
        'Firewall management',
        'Intrusion detection systems',
        'Network monitoring & alerting',
        'VPN solutions',
        'Wireless security',
        'Network segmentation',
        'Compliance reporting'
      ],
      pricing: 'Starting at $1,800/month',
      popular: false,
      link: '/network-security'
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyan-500" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to help align technology with business goals and drive digital transformation.',
      features: [
        'IT strategy development',
        'Technology roadmapping',
        'Digital transformation planning',
        'Vendor management',
        'IT governance',
        'Cost optimization analysis',
        'Technology assessment',
        'Change management'
      ],
      pricing: 'Starting at $2,000/month',
      popular: false,
      link: '/it-consulting'
    },
    {
      icon: <Database className="w-12 h-12 text-emerald-500" />,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and ongoing management for all major database platforms.',
      features: [
        'Database design & architecture',
        'Performance optimization',
        'Database migration',
        'Backup & recovery planning',
        'Security hardening',
        'Monitoring & alerting',
        'Query optimization',
        'High availability setup'
      ],
      pricing: 'Starting at $1,500/month',
      popular: false,
      link: '/database-management'
    },
    {
      icon: <Shield className="w-12 h-12 text-rose-500" />,
      title: 'Compliance & Risk Management',
      description: 'Comprehensive compliance management services to ensure adherence to industry regulations and standards.',
      features: [
        'Compliance assessment',
        'Risk management framework',
        'Audit preparation',
        'Policy development',
        'Training & awareness',
        'Incident management',
        'Regulatory reporting',
        'Continuous monitoring'
      ],
      pricing: 'Starting at $2,300/month',
      popular: false,
      link: '/compliance-management'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Engineers' }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Expert Team',
      description: 'Certified professionals with years of experience in enterprise IT solutions.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring for your peace of mind.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Scalable Solutions',
      description: 'Flexible solutions that grow with your business needs and requirements.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Cost Effective',
      description: 'Optimized solutions that reduce costs while improving performance.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, data analytics, and infrastructure management." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, data analytics, infrastructure management" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional IT Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive IT solutions to accelerate your digital transformation and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  {service.popular && (
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">
                    {service.pricing}
                  </span>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-purple-500/25"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional IT solutions with unmatched expertise and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-purple-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our IT services and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/about"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}