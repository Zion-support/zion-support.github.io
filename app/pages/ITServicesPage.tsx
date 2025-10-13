import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Database, 
  Smartphone, 
  Server, 
  Network, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  TrendingUp,
  Code,
  Globe,
  Zap
} from 'lucide-react';

export default function ITServicesPage() {
  const itServices = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including migration, management, and optimization.',
      price: 'Starting at $199/month',
      features: [
        'Cloud strategy and planning',
        'Migration and deployment services',
        'Multi-cloud management',
        'Cost optimization and monitoring',
        'Disaster recovery and backup',
        'Security and compliance management'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Enable remote work capabilities'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security services to protect your business from evolving threats.',
      price: 'Starting at $399/month',
      features: [
        'Security assessment and auditing',
        'Threat detection and response',
        'Vulnerability management',
        'Security awareness training',
        'Compliance and governance',
        'Incident response planning'
      ],
      benefits: [
        'Protect against 99.9% of cyber threats',
        'Ensure regulatory compliance',
        'Reduce security incidents by 95%',
        'Maintain business continuity'
      ],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'Zero Trust']
    },
    {
      icon: Database,
      title: 'Database Management & Analytics',
      description: 'Expert database administration, optimization, and analytics solutions.',
      price: 'Starting at $299/month',
      features: [
        'Database design and optimization',
        'Performance tuning and monitoring',
        'Backup and recovery strategies',
        'Data migration and integration',
        'Analytics and reporting setup',
        '24/7 database monitoring'
      ],
      benefits: [
        'Improve database performance by 60%',
        'Reduce downtime by 90%',
        'Enable data-driven decisions',
        'Ensure data integrity and security'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'SQL Server']
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Custom mobile applications for iOS and Android with modern UI/UX design.',
      price: 'Starting at $2,999/project',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions',
        'UI/UX design and optimization',
        'API integration and backend services',
        'App store optimization',
        'Ongoing maintenance and support'
      ],
      benefits: [
        'Reach customers on mobile devices',
        'Improve user engagement',
        'Increase brand visibility',
        'Generate additional revenue streams'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      icon: Server,
      title: 'Server Management & Maintenance',
      description: 'Complete server administration, monitoring, and maintenance services.',
      price: 'Starting at $149/month',
      features: [
        'Server setup and configuration',
        'Performance monitoring and optimization',
        'Security hardening and updates',
        'Backup and disaster recovery',
        'Capacity planning and scaling',
        '24/7 server monitoring'
      ],
      benefits: [
        'Ensure 99.9% server uptime',
        'Reduce maintenance costs by 50%',
        'Improve system performance',
        'Prevent security vulnerabilities'
      ],
      technologies: ['Linux', 'Windows Server', 'VMware', 'Hyper-V', 'Docker']
    },
    {
      icon: Network,
      title: 'Network Infrastructure & Security',
      description: 'Design, implement, and manage secure network infrastructure solutions.',
      price: 'Starting at $249/month',
      features: [
        'Network design and architecture',
        'Firewall configuration and management',
        'VPN setup and maintenance',
        'Network monitoring and optimization',
        'Wireless network solutions',
        'Network security assessment'
      ],
      benefits: [
        'Improve network performance by 70%',
        'Enhance security and compliance',
        'Reduce network downtime',
        'Enable remote connectivity'
      ],
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'Ubiquiti', 'Meraki']
    }
  ];

  const itCapabilities = [
    {
      title: 'Cloud Computing',
      description: 'Multi-cloud solutions and migration services',
      services: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud', 'Cloud Security']
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions and compliance',
      services: ['Threat Detection', 'Vulnerability Assessment', 'Compliance', 'Incident Response', 'Security Training']
    },
    {
      title: 'Database Management',
      description: 'Database administration and optimization',
      services: ['Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring', 'Analytics']
    },
    {
      title: 'Mobile Development',
      description: 'Custom mobile applications and solutions',
      services: ['iOS Development', 'Android Development', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    }
  ];

  const supportLevels = [
    {
      name: 'Basic Support',
      price: '$99/month',
      features: [
        'Email support (24-48h response)',
        'Basic troubleshooting',
        'Documentation access',
        'Monthly health checks',
        'Standard business hours'
      ],
      popular: false
    },
    {
      name: 'Professional Support',
      price: '$199/month',
      features: [
        '24/7 phone and email support',
        'Priority response times',
        'Remote assistance',
        'Weekly health checks',
        'Dedicated support engineer',
        'Emergency response'
      ],
      popular: true
    },
    {
      name: 'Enterprise Support',
      price: '$399/month',
      features: [
        '24/7 dedicated support team',
        'On-site support available',
        'SLA guarantees',
        'Custom monitoring',
        'Account manager',
        'Priority feature requests'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud computing, cybersecurity, database management, mobile development, and network infrastructure. Expert IT solutions for your business." />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, database management, mobile development, network infrastructure, IT consulting" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Expert IT solutions to optimize your technology infrastructure, enhance security, 
              and drive business growth with reliable, scalable, and cost-effective services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get IT Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">IT Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end IT services designed to modernize your infrastructure and optimize your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-900 rounded-xl p-8 hover:bg-slate-800 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      <div className="text-cyan-400 font-semibold">{service.price}</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-slate-700 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Capabilities */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              IT <span className="text-cyan-400">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across all major IT domains and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itCapabilities.map((capability, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 text-center hover:bg-slate-700 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                <p className="text-gray-300 mb-6">{capability.description}</p>
                <div className="space-y-2">
                  {capability.services.map((service, serviceIndex) => (
                    <span key={serviceIndex} className="block bg-slate-700 text-cyan-400 px-3 py-1 rounded text-sm">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Support <span className="text-cyan-400">Levels</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportLevels.map((level, index) => (
              <div key={index} className={`bg-slate-900 rounded-xl p-8 ${level.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {level.popular && (
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{level.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400">{level.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  level.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                    : 'border-2 border-slate-600 text-white hover:border-cyan-500 hover:bg-slate-800'
                }`}>
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our <span className="text-cyan-400">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience in enterprise IT solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">Track record of successful IT implementations and measurable business improvements.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">IT solutions that grow with your business and adapt to changing needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get IT Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}