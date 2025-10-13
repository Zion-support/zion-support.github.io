import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  Network, 
  Server, 
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Globe,
  Zap,
  Lock,
  Monitor,
  Cpu,
  HardDrive
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ITServicesComprehensivePage = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Comprehensive cloud migration, management, and optimization services',
      price: '$199/month',
      features: [
        'Cloud migration planning',
        'Multi-cloud management',
        'Cost optimization',
        'Security implementation',
        'Disaster recovery',
        '24/7 monitoring',
        'Auto-scaling setup',
        'Performance tuning'
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Cloud Services',
      popular: true
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      description: 'Advanced security services to protect your business from cyber threats',
      price: '$299/month',
      features: [
        'Security assessment',
        'Threat monitoring',
        'Incident response',
        'Compliance management',
        'Security training',
        'Penetration testing',
        'Vulnerability scanning',
        'Security policy development'
      ],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'Security',
      popular: true
    },
    {
      id: 'web-development',
      name: 'Web Development Services',
      description: 'Custom web applications and websites built with modern technologies',
      price: '$149/month',
      features: [
        'Custom web applications',
        'Responsive design',
        'E-commerce solutions',
        'CMS development',
        'API integration',
        'Performance optimization',
        'SEO implementation',
        'Maintenance & support'
      ],
      icon: <Code className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Development',
      popular: false
    },
    {
      id: 'mobile-development',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: '$179/month',
      features: [
        'iOS app development',
        'Android app development',
        'Cross-platform solutions',
        'UI/UX design',
        'App store optimization',
        'Push notifications',
        'Backend integration',
        'App maintenance'
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Development',
      popular: false
    },
    {
      id: 'database-management',
      name: 'Database Management',
      description: 'Comprehensive database design, optimization, and management services',
      price: '$129/month',
      features: [
        'Database design',
        'Performance optimization',
        'Data migration',
        'Backup & recovery',
        'Security implementation',
        'Monitoring & maintenance',
        'Query optimization',
        'Data modeling'
      ],
      icon: <Database className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      category: 'Data Services',
      popular: false
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      description: 'Complete network design, implementation, and management solutions',
      price: '$159/month',
      features: [
        'Network design',
        'Hardware installation',
        'Security configuration',
        'Performance monitoring',
        'Troubleshooting',
        'Upgrade planning',
        'Wireless solutions',
        'Network documentation'
      ],
      icon: <Network className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      category: 'Infrastructure',
      popular: false
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      description: 'Complete DevOps implementation with CI/CD pipelines and automation',
      price: '$219/month',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure as Code',
        'Monitoring & logging',
        'Automated testing',
        'Deployment automation',
        'Environment management',
        'Performance optimization'
      ],
      icon: <Settings className="w-8 h-8" />,
      color: 'from-teal-500 to-green-500',
      category: 'DevOps',
      popular: true
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics Solutions',
      description: 'Advanced data analytics and business intelligence services',
      price: '$189/month',
      features: [
        'Data visualization',
        'Business intelligence',
        'Predictive analytics',
        'Data warehousing',
        'ETL processes',
        'Reporting dashboards',
        'Data governance',
        'Machine learning integration'
      ],
      icon: <Monitor className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'Analytics',
      popular: false
    },
    {
      id: 'iot-solutions',
      name: 'IoT Solutions',
      description: 'Internet of Things implementation and management services',
      price: '$249/month',
      features: [
        'IoT device integration',
        'Data collection & processing',
        'Real-time monitoring',
        'Security implementation',
        'Cloud connectivity',
        'Analytics & insights',
        'Device management',
        'Custom solutions'
      ],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500',
      category: 'IoT',
      popular: false
    },
    {
      id: 'blockchain-development',
      name: 'Blockchain Development',
      description: 'Blockchain solutions and smart contract development services',
      price: '$329/month',
      features: [
        'Smart contract development',
        'Blockchain integration',
        'Cryptocurrency solutions',
        'DeFi applications',
        'NFT development',
        'Security auditing',
        'Token development',
        'Consensus mechanisms'
      ],
      icon: <Lock className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'Blockchain',
      popular: false
    },
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models and AI implementation services',
      price: '$279/month',
      features: [
        'Custom ML models',
        'Data preprocessing',
        'Model training & tuning',
        'Model deployment',
        'Performance monitoring',
        'A/B testing',
        'Feature engineering',
        'Model optimization'
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-rose-500 to-pink-500',
      category: 'AI/ML',
      popular: false
    },
    {
      id: 'quantum-computing',
      name: 'Quantum Computing Services',
      description: 'Quantum computing solutions and quantum algorithm development',
      price: '$499/month',
      features: [
        'Quantum algorithm development',
        'Quantum simulation',
        'Optimization problems',
        'Cryptography solutions',
        'Research & development',
        'Quantum software',
        'Hardware integration',
        'Consulting services'
      ],
      icon: <HardDrive className="w-8 h-8" />,
      color: 'from-slate-500 to-gray-500',
      category: 'Quantum',
      popular: false
    }
  ];

  const categories = [
    'All',
    'Cloud Services',
    'Security',
    'Development',
    'Data Services',
    'Infrastructure',
    'DevOps',
    'Analytics',
    'IoT',
    'Blockchain',
    'AI/ML',
    'Quantum'
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$199/month',
      description: 'Essential IT services for small businesses',
      features: [
        'Up to 3 services',
        'Basic monitoring',
        'Email support',
        'Standard maintenance',
        'Monthly reports',
        'Basic security'
      ],
      color: 'from-gray-500 to-gray-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'Up to 6 services',
        'Advanced monitoring',
        'Priority support',
        'Proactive maintenance',
        'Weekly reports',
        'Advanced security',
        '24/7 monitoring',
        'Custom solutions'
      ],
      color: 'from-blue-500 to-cyan-500',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'Complete IT solutions for large organizations',
      features: [
        'Unlimited services',
        'Enterprise monitoring',
        'Dedicated support',
        'Continuous maintenance',
        'Real-time reports',
        'Enterprise security',
        '24/7 dedicated support',
        'Custom development',
        'SLA guarantee'
      ],
      color: 'from-purple-500 to-pink-500',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="IT Services - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Professional technology solutions for modern businesses."
        keywords="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, network infrastructure"
        canonical="https://ziontechgroup.com/it-services-comprehensive"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Suite
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive information technology services designed to modernize and secure your business infrastructure. 
            From cloud solutions to cybersecurity, we provide the IT expertise you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to solve specific technology challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div
                key={service.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    {service.icon}
                  </div>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-gray-400 text-sm">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>
                
                <Link
                  to={`/${service.id}`}
                  className={`w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              IT Services Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your IT needs. All plans include our core IT services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 relative ${
                  plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">per month</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  className={`w-full bg-gradient-to-r ${plan.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Modernize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to learn more about our IT services and how they can transform your business technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="tel:+13024640950"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Call: +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesComprehensivePage;