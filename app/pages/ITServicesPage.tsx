import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  CloudIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

export default function ITServicesPage() {
  const itServices = [
    {
      id: 'cloud-infrastructure-management',
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, migration, and management services for AWS, Azure, and Google Cloud Platform.',
      features: [
        'Cloud migration strategy and execution',
        'Infrastructure as Code (IaC) implementation',
        'Auto-scaling and load balancing configuration',
        'Disaster recovery and backup solutions',
        'Cost optimization and resource management',
        'Security hardening and compliance',
        '24/7 monitoring and maintenance',
        'Performance optimization and tuning',
        'Multi-cloud strategy implementation',
        'DevOps and CI/CD pipeline setup'
      ],
      pricing: {
        basic: { price: 1999, period: 'month', features: ['Up to 10 servers', 'Basic monitoring', 'Email support'] },
        professional: { price: 4999, period: 'month', features: ['Up to 50 servers', 'Advanced monitoring', 'Phone support', 'Custom configurations'] },
        enterprise: { price: 9999, period: 'month', features: ['Unlimited servers', 'Dedicated team', '24/7 support', 'Custom solutions'] }
      },
      icon: CloudIcon,
      color: 'from-cyan-500 to-blue-500',
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure-management'
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat assessment, security implementation, and ongoing protection.',
      features: [
        'Security risk assessment and audit',
        'Penetration testing and vulnerability scanning',
        'Firewall configuration and management',
        'Endpoint protection and antivirus solutions',
        'Email security and phishing protection',
        'Network security monitoring',
        'Incident response and forensics',
        'Security awareness training',
        'Compliance management (GDPR, HIPAA, SOX)',
        '24/7 security operations center (SOC)'
      ],
      pricing: {
        basic: { price: 2999, period: 'month', features: ['Up to 25 endpoints', 'Basic protection', 'Monthly reports'] },
        professional: { price: 6999, period: 'month', features: ['Up to 100 endpoints', 'Advanced protection', 'Weekly reports', 'Incident response'] },
        enterprise: { price: 14999, period: 'month', features: ['Unlimited endpoints', 'Full SOC services', 'Daily reports', 'Dedicated team'] }
      },
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-pink-500',
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 'network-infrastructure',
      title: 'Network Infrastructure Services',
      description: 'Complete network design, implementation, and management services for enterprise-grade connectivity and performance.',
      features: [
        'Network design and architecture planning',
        'Router and switch configuration',
        'Wireless network setup and optimization',
        'VPN and remote access solutions',
        'Network monitoring and management',
        'Bandwidth optimization and QoS',
        'Network security implementation',
        'Disaster recovery planning',
        'Network performance tuning',
        '24/7 network support and maintenance'
      ],
      pricing: {
        basic: { price: 1499, period: 'month', features: ['Up to 50 devices', 'Basic monitoring', 'Email support'] },
        professional: { price: 3999, period: 'month', features: ['Up to 200 devices', 'Advanced monitoring', 'Phone support', 'Custom configurations'] },
        enterprise: { price: 7999, period: 'month', features: ['Unlimited devices', 'Dedicated engineer', '24/7 support', 'Custom solutions'] }
      },
      icon: ServerIcon,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'software-development',
      title: 'Custom Software Development',
      description: 'Full-stack software development services using modern technologies and agile methodologies.',
      features: [
        'Web application development (React, Angular, Vue)',
        'Mobile app development (iOS, Android, React Native)',
        'Backend API development (Node.js, Python, Java)',
        'Database design and optimization',
        'Microservices architecture implementation',
        'DevOps and deployment automation',
        'Code review and quality assurance',
        'Performance optimization and scaling',
        'Third-party integrations',
        'Ongoing maintenance and support'
      ],
      pricing: {
        basic: { price: 9999, period: 'project', features: ['Simple web app', 'Basic features', '3 months support'] },
        professional: { price: 24999, period: 'project', features: ['Complex application', 'Advanced features', '6 months support', 'Mobile app'] },
        enterprise: { price: 49999, period: 'project', features: ['Enterprise solution', 'Custom features', '12 months support', 'Full stack'] }
      },
      icon: CodeBracketIcon,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      id: 'it-consulting',
      title: 'IT Strategy & Consulting',
      description: 'Strategic IT consulting services to help businesses align technology with business objectives.',
      features: [
        'IT strategy development and planning',
        'Technology roadmap creation',
        'Digital transformation consulting',
        'IT budget planning and optimization',
        'Vendor evaluation and selection',
        'Technology architecture review',
        'Process improvement and automation',
        'Change management and training',
        'IT governance and compliance',
        'Performance metrics and KPIs'
      ],
      pricing: {
        basic: { price: 299, period: 'hour', features: ['Strategy sessions', 'Basic recommendations', 'Email follow-up'] },
        professional: { price: 499, period: 'hour', features: ['Comprehensive analysis', 'Detailed reports', 'Phone support', 'Implementation guidance'] },
        enterprise: { price: 799, period: 'hour', features: ['Full consulting', 'Dedicated consultant', '24/7 support', 'Ongoing partnership'] }
      },
      icon: ChartBarIcon,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting'
    },
    {
      id: 'managed-it-services',
      title: 'Managed IT Services',
      description: 'Comprehensive managed IT services including helpdesk, maintenance, and proactive monitoring.',
      features: [
        '24/7 helpdesk and technical support',
        'Proactive monitoring and maintenance',
        'Software updates and patch management',
        'Hardware maintenance and replacement',
        'Backup and disaster recovery',
        'Security monitoring and management',
        'User account management',
        'Asset tracking and management',
        'Performance optimization',
        'Monthly reporting and analytics'
      ],
      pricing: {
        basic: { price: 99, period: 'user/month', features: ['Basic support', 'Email helpdesk', 'Standard hours'] },
        professional: { price: 149, period: 'user/month', features: ['Advanced support', 'Phone helpdesk', 'Extended hours', 'Proactive monitoring'] },
        enterprise: { price: 199, period: 'user/month', features: ['Premium support', '24/7 helpdesk', 'Dedicated team', 'Custom services'] }
      },
      icon: WrenchScrewdriverIcon,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      link: 'https://ziontechgroup.com/managed-it-services'
    }
  ];

  const itCapabilities = [
    {
      title: 'Cloud Computing',
      description: 'AWS, Azure, and Google Cloud Platform expertise for scalable and secure cloud solutions.',
      icon: CloudIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      icon: ShieldCheckIcon,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Network Infrastructure',
      description: 'Enterprise-grade network design, implementation, and management services.',
      icon: ServerIcon,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Software Development',
      description: 'Custom software solutions using modern technologies and agile methodologies.',
      icon: CodeBracketIcon,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Consulting',
      description: 'Strategic IT consulting to align technology with business objectives.',
      icon: ChartBarIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Managed Services',
      description: 'Comprehensive managed IT services for proactive support and maintenance.',
      icon: WrenchScrewdriverIcon,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, network management, software development, and managed IT services." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, network infrastructure, software development, managed IT services, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions to keep your business running smoothly and securely
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From cloud infrastructure to cybersecurity, our expert IT team provides end-to-end technology 
              solutions that drive efficiency, security, and growth for your business.
            </p>
          </div>
        </div>
      </section>

      {/* IT Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT services across all technology domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {itCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div 
                  key={capability.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300 leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional IT services designed to meet your specific business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">
                        ${service.pricing.professional.price}
                        <span className="text-lg text-gray-400">/{service.pricing.professional.period}</span>
                      </div>
                      <div className="text-sm text-gray-400">Professional Plan</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 5).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans:</h4>
                    <div className="grid grid-cols-3 gap-2 text-sm">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="font-semibold text-white capitalize">{plan}</div>
                          <div className="text-gray-400">${details.price}/{details.period}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2`}
                    >
                      Get Quote
                      <ArrowRightIcon className="w-4 h-4" />
                    </a>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified professionals with years of experience in enterprise IT solutions and emerging technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security First</h3>
              <p className="text-gray-300">
                Security and compliance are built into every solution we design and implement.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChartBarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Track record of successful implementations with measurable business value and ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UsersIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure your systems run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT services can improve your business operations and security.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free IT Assessment
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}