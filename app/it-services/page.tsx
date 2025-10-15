import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Server, Cloud, Database, Shield, Code, Users, Clock, DollarSign, Target, Award, Phone, Wrench, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const ItServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, maintenance, and optimization for maximum performance and reliability.',
      price: 'From $2,500/month',
      features: ['Server management', 'Network optimization', 'Hardware maintenance', 'Performance monitoring']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-400" />,
      title: 'Cloud Migration & Management',
      description: 'Seamless migration to cloud platforms with ongoing management and optimization services.',
      price: 'From $3,500/month',
      features: ['AWS/Azure/GCP migration', 'Cloud architecture design', 'Cost optimization', 'Security implementation']
    },
    {
      icon: <Database className="w-8 h-8 text-purple-400" />,
      title: 'Database Administration',
      description: 'Professional database design, optimization, and maintenance for optimal performance and security.',
      price: 'From $2,000/month',
      features: ['Database design', 'Performance tuning', 'Backup & recovery', 'Security hardening']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity Services',
      description: 'Comprehensive security solutions including vulnerability assessments, penetration testing, and incident response.',
      price: 'From $4,000/month',
      features: ['Security audits', 'Penetration testing', 'Incident response', 'Compliance management']
    },
    {
      icon: <Code className="w-8 h-8 text-yellow-400" />,
      title: 'Software Development',
      description: 'Custom software development, API integration, and legacy system modernization services.',
      price: 'From $5,000/month',
      features: ['Custom applications', 'API development', 'Legacy modernization', 'Quality assurance']
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'IT Support & Helpdesk',
      description: '24/7 technical support and helpdesk services for end-users and IT infrastructure.',
      price: 'From $1,500/month',
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base']
    }
  ];

  const solutions = [
    {
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure with high availability and security.',
      price: '$8,000 - $25,000',
      duration: '2-4 weeks'
    },
    {
      title: 'Data Center Setup',
      description: 'Complete data center design and implementation with power, cooling, and security systems.',
      price: '$50,000 - $150,000',
      duration: '6-12 weeks'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive disaster recovery planning and implementation with automated failover systems.',
      price: '$15,000 - $40,000',
      duration: '4-8 weeks'
    },
    {
      title: 'IT Compliance',
      description: 'Ensure compliance with industry standards including SOX, HIPAA, PCI-DSS, and GDPR.',
      price: '$10,000 - $30,000',
      duration: '3-6 weeks'
    },
    {
      title: 'System Integration',
      description: 'Integrate disparate systems and applications for seamless data flow and operations.',
      price: '$20,000 - $60,000',
      duration: '8-16 weeks'
    },
    {
      title: 'IT Strategy Consulting',
      description: 'Strategic IT planning and digital transformation consulting for business growth.',
      price: '$5,000 - $15,000',
      duration: '2-4 weeks'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: 'Cost Optimization',
      description: 'Reduce IT costs by 30% with optimized infrastructure and efficient processes'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-400" />,
      title: 'Improved Efficiency',
      description: 'Increase system performance and user productivity with modern IT solutions'
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: 'Reliability',
      description: '99.9% uptime guarantee with proactive monitoring and maintenance'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-400" />,
      title: 'Rapid Deployment',
      description: 'Fast implementation with minimal business disruption'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic IT Support',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic infrastructure management',
        'Email support',
        'Monthly maintenance',
        'Basic security',
        'Up to 25 users',
        'Standard backup'
      ],
      popular: false
    },
    {
      name: 'Professional IT Services',
      price: '$7,500',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Complete IT management',
        'Priority support',
        'Weekly maintenance',
        'Advanced security',
        'Up to 100 users',
        'Automated backup',
        'Cloud integration',
        'Performance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT Solutions',
      price: '$15,000',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Full IT transformation',
        '24/7 dedicated support',
        'Daily maintenance',
        'Enterprise security',
        'Unlimited users',
        'Disaster recovery',
        'Custom solutions',
        'White-label services',
        'Dedicated team'
      ],
      popular: false
    }
  ];

  const technologies = [
    { name: 'Microsoft Azure', category: 'Cloud Platform' },
    { name: 'Amazon AWS', category: 'Cloud Platform' },
    { name: 'Google Cloud', category: 'Cloud Platform' },
    { name: 'VMware', category: 'Virtualization' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Microsoft 365', category: 'Productivity' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'SAP', category: 'ERP' },
    { name: 'Oracle', category: 'Database' },
    { name: 'Cisco', category: 'Networking' },
    { name: 'Fortinet', category: 'Security' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud migration, cybersecurity, and software development. Starting at $2,500/month." />
        <meta name="keywords" content="IT services, infrastructure management, cloud migration, cybersecurity, software development, IT support" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services for infrastructure, cloud, security, and development needs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Professional
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}IT Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions for modern businesses. From infrastructure management 
                to cloud migration, cybersecurity to software development - we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call +1 302 464 0950
                </a>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300">Support Available</div>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
                  <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                  <div className="text-gray-300">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive technology solutions for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-cyan-400 font-semibold text-lg mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Custom IT Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored solutions for specific business requirements
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {solution.description}
                  </p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-cyan-400 font-semibold">{solution.price}</span>
                    <span className="text-gray-400">{solution.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Expertise across leading technology platforms and tools
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-cyan-500 transition-colors text-center">
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-xs">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and commitment to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible IT Service Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border transition-all duration-300 ${
                  plan.popular 
                    ? 'border-cyan-500 shadow-lg shadow-cyan-500/25 scale-105' 
                    : 'border-slate-700 hover:border-cyan-500'
                }`}>
                  {plan.popular && (
                    <div className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white text-sm font-bold py-1 px-3 rounded-full text-center mb-4">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      {plan.price}
                      <span className="text-lg text-gray-400">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full inline-flex items-center justify-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 p-12 rounded-lg border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free IT assessment and discover how we can optimize your technology
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="inline-flex items-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;