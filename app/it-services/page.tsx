import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Cloud, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  Zap,
  Database,
  Smartphone,
  Globe,
  BarChart3,
  Mail,
  FileText,
  Calendar,
  Target,
  Rocket,
  Award,
  DollarSign,
  Server,
  Lock,
  Wrench,
  Monitor,
  Code,
  Smartphone as Mobile,
  Network,
  HardDrive,
  Settings,
  Headphones,
  CheckSquare,
  Globe as Web,
  Database as Data,
  Cpu,
  Layers
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-migration-services',
      title: 'Cloud Migration Services',
      description: 'Complete cloud migration solutions for AWS, Azure, and Google Cloud with zero downtime and enhanced security.',
      features: [
        'Zero-downtime migration strategy',
        'Multi-cloud and hybrid cloud solutions',
        'Data security and compliance',
        'Cost optimization and monitoring',
        'Disaster recovery planning',
        'Performance optimization',
        '24/7 cloud monitoring',
        'Post-migration support'
      ],
      pricing: {
        starter: { price: '$5,999', period: '/project', features: ['Up to 10 servers', 'Basic migration', 'Email support', '30-day warranty'] },
        professional: { price: '$19,999', period: '/project', features: ['Up to 50 servers', 'Advanced migration', 'Priority support', '90-day warranty'] },
        enterprise: { price: '$49,999', period: '/project', features: ['Unlimited servers', 'Custom migration', 'Dedicated support', '1-year warranty'] }
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      category: 'Cloud Services'
    },
    {
      id: 'cybersecurity-solutions',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive cybersecurity services including threat detection, vulnerability assessment, and security compliance.',
      features: [
        'Advanced threat detection and response',
        'Vulnerability assessment and penetration testing',
        'Security compliance (SOC 2, ISO 27001)',
        'Endpoint protection and monitoring',
        'Network security and firewall management',
        'Security awareness training',
        'Incident response planning',
        '24/7 security monitoring'
      ],
      pricing: {
        starter: { price: '$2,999', period: '/month', features: ['Basic security monitoring', 'Email support', 'Standard compliance', 'Monthly reports'] },
        professional: { price: '$7,999', period: '/month', features: ['Advanced monitoring', 'Priority support', 'Full compliance', 'Weekly reports'] },
        enterprise: { price: '$19,999', period: '/month', features: ['Complete security suite', 'Dedicated support', 'Custom compliance', 'Real-time monitoring'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      category: 'Security'
    },
    {
      id: 'devops-automation',
      title: 'DevOps & Automation',
      description: 'Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployment solutions.',
      features: [
        'CI/CD pipeline development',
        'Infrastructure as Code (IaC)',
        'Container orchestration (Kubernetes)',
        'Automated testing and deployment',
        'Monitoring and logging solutions',
        'Configuration management',
        'Performance optimization',
        'Team training and support'
      ],
      pricing: {
        starter: { price: '$4,999', period: '/month', features: ['Basic CI/CD setup', 'Email support', 'Standard tools', 'Monthly maintenance'] },
        professional: { price: '$12,999', period: '/month', features: ['Advanced automation', 'Priority support', 'Premium tools', 'Weekly maintenance'] },
        enterprise: { price: '$29,999', period: '/month', features: ['Complete DevOps suite', 'Dedicated support', 'Custom tools', '24/7 monitoring'] }
      },
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      category: 'DevOps'
    },
    {
      id: 'web-development',
      title: 'Web Development Services',
      description: 'Custom web applications, e-commerce solutions, and responsive websites built with modern technologies.',
      features: [
        'Custom web application development',
        'E-commerce platform development',
        'Responsive and mobile-first design',
        'Progressive Web App (PWA) development',
        'API development and integration',
        'Performance optimization',
        'SEO optimization',
        'Ongoing maintenance and support'
      ],
      pricing: {
        starter: { price: '$9,999', period: '/project', features: ['Basic website', '5 pages', 'Email support', '3-month warranty'] },
        professional: { price: '$24,999', period: '/project', features: ['Custom web app', 'Unlimited pages', 'Priority support', '6-month warranty'] },
        enterprise: { price: '$59,999', period: '/project', features: ['Complex web solution', 'Custom features', 'Dedicated support', '1-year warranty'] }
      },
      icon: Web,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      category: 'Development'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.',
      features: [
        'Native iOS and Android development',
        'Cross-platform development (React Native, Flutter)',
        'Modern UI/UX design',
        'App store optimization',
        'Push notifications and analytics',
        'Backend API development',
        'App testing and quality assurance',
        'Post-launch support and updates'
      ],
      pricing: {
        starter: { price: '$19,999', period: '/project', features: ['Basic mobile app', '1 platform', 'Email support', '3-month warranty'] },
        professional: { price: '$39,999', period: '/project', features: ['Advanced mobile app', '2 platforms', 'Priority support', '6-month warranty'] },
        enterprise: { price: '$79,999', period: '/project', features: ['Complex mobile solution', 'All platforms', 'Dedicated support', '1-year warranty'] }
      },
      icon: Mobile,
      color: 'from-orange-500 to-red-500',
      popular: false,
      category: 'Mobile'
    },
    {
      id: 'data-analytics-solutions',
      title: 'Data Analytics Solutions',
      description: 'Comprehensive data analytics and business intelligence solutions for data-driven decision making.',
      features: [
        'Data warehouse design and implementation',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Real-time data processing',
        'Machine learning integration',
        'Data visualization and reporting',
        'Data governance and security',
        'Training and support'
      ],
      pricing: {
        starter: { price: '$3,999', period: '/month', features: ['Basic analytics', '5 data sources', 'Email support', 'Standard reports'] },
        professional: { price: '$9,999', period: '/month', features: ['Advanced analytics', '25 data sources', 'Priority support', 'Custom reports'] },
        enterprise: { price: '$24,999', period: '/month', features: ['Complete BI suite', 'Unlimited sources', 'Dedicated support', 'Real-time analytics'] }
      },
      icon: BarChart3,
      color: 'from-indigo-500 to-purple-500',
      popular: true,
      category: 'Analytics'
    }
  ];

  const itCapabilities = [
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Complete cloud migration, management, and optimization across AWS, Azure, and Google Cloud.'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, compliance, and incident response.'
    },
    {
      icon: Wrench,
      title: 'DevOps & Automation',
      description: 'CI/CD pipelines, infrastructure automation, and deployment optimization for faster delivery.'
    },
    {
      icon: Web,
      title: 'Web Development',
      description: 'Custom web applications, e-commerce solutions, and responsive websites with modern technologies.'
    },
    {
      icon: Mobile,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with exceptional UX.'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Business intelligence, data warehousing, and analytics solutions for data-driven decisions.'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Fast implementation with proven methodologies and experienced teams.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with compliance, encryption, and regular security audits.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and monitoring from our expert team.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Future-proof solutions that grow with your business requirements.'
    }
  ];

  const technologies = [
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure', icon: '🔷' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'Kubernetes', icon: '⚙️' },
    { name: 'Docker', icon: '🐳' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, DevOps, web development, mobile apps, and data analytics. Professional IT solutions for modern businesses." />
        <meta name="keywords" content="it services, cloud migration, cybersecurity, devops, web development, mobile development, data analytics, it consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive IT services designed to modernize your infrastructure, enhance security, and drive digital transformation. 
              From cloud migration to cybersecurity, we deliver enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* IT Capabilities */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our IT Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itCapabilities.map((capability, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
                  <capability.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies We Use */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Technologies We Use</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 text-center hover:bg-white/15 transition-all duration-300">
                  <div className="text-2xl mb-2">{tech.icon}</div>
                  <div className="text-white font-semibold">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center">
                <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-400 font-semibold">{service.category}</div>
                        <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                    {service.popular && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-3 gap-3">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center">
                          <div className="text-2xl font-bold text-white">{details.price}</div>
                          <div className="text-sm text-gray-400">{details.period}</div>
                          <div className="text-xs text-gray-500 capitalize">{plan}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={`/it-services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Partner with Zion Tech Group for comprehensive IT solutions that drive efficiency, security, and growth. 
              Get a free IT assessment and discover how we can modernize your technology stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Schedule IT Assessment
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Get Custom IT Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItServicesPage;