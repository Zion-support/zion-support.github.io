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
      description: 'Comprehensive cloud migration services with zero-downtime deployment, cost optimization, and ongoing management across AWS, Azure, and GCP.',
      features: [
        'Multi-cloud expertise (AWS, Azure, GCP)',
        'Zero-downtime migration strategy',
        'Cost optimization & monitoring',
        'Security compliance & governance',
        '24/7 cloud monitoring & support',
        'Disaster recovery & backup solutions',
        'Performance optimization',
        'Cloud security assessment'
      ],
      pricing: '$3,500/month',
      marketPrice: '$5,000-8,000/month',
      popular: true,
      link: '/cloud-migration',
      benefits: ['Reduce cloud costs by 35%', 'Improve performance by 50%', 'Ensure 99.9% uptime']
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: 'Cybersecurity Solutions Suite',
      description: 'Enterprise-grade cybersecurity solutions with threat detection, incident response, compliance management, and continuous security monitoring.',
      features: [
        'Comprehensive security assessment',
        'Advanced threat detection & prevention',
        'Incident response & forensics',
        'Compliance management (SOC2, GDPR, HIPAA)',
        'Security awareness training',
        'Penetration testing & vulnerability assessment',
        'Security operations center (SOC)',
        'Managed security services'
      ],
      pricing: '$2,800/month',
      marketPrice: '$4,500-7,500/month',
      popular: false,
      link: '/cybersecurity-solutions',
      benefits: ['Prevent 99.9% of cyber attacks', 'Reduce security incidents by 90%', 'Ensure compliance with regulations']
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: 'DevOps & CI/CD Platform',
      description: 'Complete DevOps transformation with automated CI/CD pipelines, container orchestration, and infrastructure as code for scalable development.',
      features: [
        'CI/CD pipeline automation',
        'Container orchestration (Kubernetes, Docker)',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Automated testing & quality assurance',
        'Deployment automation & rollback',
        'Performance monitoring & alerting',
        'GitOps workflow implementation',
        'DevSecOps security integration'
      ],
      pricing: '$3,200/month',
      marketPrice: '$5,000-9,000/month',
      popular: true,
      link: '/devops-cicd',
      benefits: ['Deploy 10x faster', 'Reduce deployment failures by 80%', 'Improve development efficiency by 60%']
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Analytics & Business Intelligence',
      description: 'Advanced data analytics platform with real-time insights, predictive analytics, and comprehensive business intelligence solutions.',
      features: [
        'Data warehousing & lake solutions',
        'Real-time analytics & dashboards',
        'Predictive analytics & machine learning',
        'Data visualization & reporting',
        'Data integration & ETL processes',
        'Self-service analytics platform',
        'Data governance & quality management',
        'Mobile analytics applications'
      ],
      pricing: '$2,500/month',
      marketPrice: '$4,000-7,000/month',
      popular: false,
      link: '/data-analytics',
      benefits: ['Make data-driven decisions 3x faster', 'Identify trends 2 weeks earlier', 'Reduce reporting time by 75%']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile & Web Development',
      description: 'Full-stack mobile and web development services with native, cross-platform, and progressive web application solutions.',
      features: [
        'Native iOS & Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'Progressive Web Applications (PWA)',
        'Custom UI/UX design',
        'App store optimization & deployment',
        'Performance optimization & testing',
        'Backend API development',
        'Ongoing maintenance & support'
      ],
      pricing: '$4,500/month',
      marketPrice: '$7,000-12,000/month',
      popular: false,
      link: '/mobile-development',
      benefits: ['Reduce development time by 40%', 'Improve app performance by 60%', 'Increase user engagement by 35%']
    },
    {
      icon: <Server className="w-12 h-12 text-yellow-500" />,
      title: 'Infrastructure Management & Support',
      description: 'Comprehensive IT infrastructure management with 24/7 monitoring, proactive maintenance, and optimization for maximum uptime.',
      features: [
        'Server & network management',
        'Infrastructure monitoring & alerting',
        'Backup & disaster recovery solutions',
        'Performance tuning & optimization',
        '24/7 technical support',
        'Patch management & updates',
        'Capacity planning & scaling',
        'IT asset management'
      ],
      pricing: '$2,200/month',
      marketPrice: '$3,500-6,000/month',
      popular: true,
      link: '/infrastructure-management',
      benefits: ['Ensure 99.9% uptime', 'Reduce IT costs by 30%', 'Prevent 90% of infrastructure issues']
    },
    {
      icon: <Wifi className="w-12 h-12 text-cyan-500" />,
      title: 'Network Security & Monitoring',
      description: 'Advanced network security solutions with real-time monitoring, threat detection, and automated response capabilities.',
      features: [
        'Network security assessment',
        'Firewall management & configuration',
        'Intrusion detection & prevention',
        'Network monitoring & analytics',
        'VPN & remote access solutions',
        'Network segmentation & micro-segmentation',
        'Bandwidth optimization',
        'Network performance tuning'
      ],
      pricing: '$1,800/month',
      marketPrice: '$3,000-5,500/month',
      popular: false,
      link: '/network-security',
      benefits: ['Prevent 95% of network attacks', 'Improve network performance by 45%', 'Reduce security incidents by 85%']
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-500" />,
      title: 'IT Consulting & Strategy',
      description: 'Strategic IT consulting services to align technology with business goals, digital transformation, and technology roadmap planning.',
      features: [
        'IT strategy & roadmap development',
        'Digital transformation consulting',
        'Technology assessment & planning',
        'Vendor evaluation & selection',
        'IT governance & best practices',
        'Change management & training',
        'ROI analysis & cost optimization',
        'Technology innovation advisory'
      ],
      pricing: '$2,000/month',
      marketPrice: '$3,500-6,500/month',
      popular: true,
      link: '/it-consulting',
      benefits: ['Align IT with business goals', 'Reduce technology costs by 25%', 'Accelerate digital transformation']
    },
    {
      icon: <Database className="w-12 h-12 text-pink-500" />,
      title: 'Database Management & Optimization',
      description: 'Comprehensive database services including design, optimization, migration, and ongoing management for maximum performance.',
      features: [
        'Database design & architecture',
        'Performance tuning & optimization',
        'Database migration & upgrades',
        'Backup & recovery solutions',
        'Database security & compliance',
        'Monitoring & alerting',
        'Query optimization',
        'Database as a Service (DBaaS)'
      ],
      pricing: '$1,600/month',
      marketPrice: '$2,800-5,000/month',
      popular: false,
      link: '/database-management',
      benefits: ['Improve database performance by 70%', 'Reduce downtime by 90%', 'Optimize storage costs by 40%']
    },
    {
      icon: <Cloud className="w-12 h-12 text-teal-500" />,
      title: 'Hybrid Cloud Solutions',
      description: 'Hybrid cloud architecture design and implementation for seamless integration between on-premises and cloud environments.',
      features: [
        'Hybrid cloud architecture design',
        'Cloud integration & connectivity',
        'Data synchronization & replication',
        'Workload migration & optimization',
        'Security & compliance management',
        'Cost optimization across environments',
        'Disaster recovery planning',
        'Multi-cloud management'
      ],
      pricing: '$3,800/month',
      marketPrice: '$6,000-10,000/month',
      popular: true,
      link: '/hybrid-cloud',
      benefits: ['Optimize costs across environments', 'Improve flexibility and scalability', 'Ensure seamless data flow']
    },
    {
      icon: <Shield className="w-12 h-12 text-violet-500" />,
      title: 'Compliance & Governance',
      description: 'Comprehensive compliance management services for SOC2, GDPR, HIPAA, and other regulatory requirements with ongoing monitoring.',
      features: [
        'Compliance assessment & gap analysis',
        'Policy development & implementation',
        'Audit preparation & support',
        'Risk assessment & management',
        'Training & awareness programs',
        'Ongoing compliance monitoring',
        'Documentation & reporting',
        'Remediation planning & execution'
      ],
      pricing: '$2,400/month',
      marketPrice: '$4,000-7,000/month',
      popular: false,
      link: '/compliance-governance',
      benefits: ['Ensure regulatory compliance', 'Reduce audit preparation time by 60%', 'Minimize compliance risks']
    },
    {
      icon: <Smartphone className="w-12 h-12 text-amber-500" />,
      title: 'IT Support & Help Desk',
      description: '24/7 IT support services with remote assistance, ticketing system, and proactive issue resolution for maximum productivity.',
      features: [
        '24/7 technical support',
        'Remote desktop assistance',
        'Ticketing & issue tracking',
        'Proactive monitoring & maintenance',
        'Software installation & updates',
        'Hardware troubleshooting',
        'User training & onboarding',
        'Knowledge base & documentation'
      ],
      pricing: '$1,200/month',
      marketPrice: '$2,000-3,500/month',
      popular: true,
      link: '/it-support',
      benefits: ['Resolve issues 3x faster', 'Reduce downtime by 80%', 'Improve user satisfaction by 90%']
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
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">
                      {service.pricing}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Market Price: <span className="line-through">{service.marketPrice}</span>
                    <span className="text-green-400 ml-2 font-semibold">Save up to 45%</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-300 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
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