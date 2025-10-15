'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Eye,
  MessageSquare,
  Cpu,
  Network,
  FileText,
  Settings,
  Cloud,
  Lock,
  Wrench,
  Monitor,
  HardDrive,
  Wifi,
  Building
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure-pro',
      name: 'Cloud Infrastructure Pro',
      price: '$1,299/mo',
      originalPrice: '$1,999/mo',
      description: 'Complete cloud infrastructure setup and management',
      longDescription: 'Transform your business with our comprehensive cloud infrastructure solutions including AWS, Azure, and Google Cloud Platform setup and management.',
      features: [
        'Multi-cloud Strategy & Migration',
        'Infrastructure as Code (IaC)',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery & Backup',
        'Security & Compliance',
        'Cost Optimization',
        '24/7 Monitoring & Support',
        'Performance Optimization',
        'Container Orchestration (Kubernetes)',
        'Serverless Architecture'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and flexibility',
        'Enhance security and compliance',
        'Increase system reliability',
        'Enable remote work capabilities'
      ],
      category: 'Cloud Services',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      id: 'cybersecurity-suite-pro',
      name: 'Cybersecurity Suite Pro',
      price: '$899/mo',
      originalPrice: '$1,299/mo',
      description: 'Comprehensive cybersecurity protection and monitoring',
      longDescription: 'Protect your business with our advanced cybersecurity suite featuring threat detection, incident response, and compliance management.',
      features: [
        'Threat Detection & Response',
        'Security Assessment & Auditing',
        'Penetration Testing',
        'Vulnerability Management',
        'Security Awareness Training',
        'Compliance Management (SOC2, GDPR, HIPAA)',
        'Firewall & Network Security',
        'Endpoint Protection',
        'Data Loss Prevention',
        '24/7 Security Operations Center'
      ],
      benefits: [
        'Reduce security risks by 95%',
        'Ensure regulatory compliance',
        'Protect sensitive data',
        'Minimize downtime from attacks',
        'Build customer trust'
      ],
      category: 'Cybersecurity',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure',
      price: '$699/mo',
      originalPrice: '$999/mo',
      description: 'Enterprise-grade network design and implementation',
      longDescription: 'Build robust, scalable network infrastructure with our expert network design, implementation, and management services.',
      features: [
        'Network Design & Architecture',
        'WAN/LAN Implementation',
        'Wireless Network Setup',
        'Network Security Configuration',
        'Performance Monitoring',
        'Bandwidth Management',
        'VPN & Remote Access',
        'Network Documentation',
        'Troubleshooting & Support',
        'Hardware Procurement'
      ],
      benefits: [
        'Improve network performance by 60%',
        'Reduce connectivity issues',
        'Enhance security posture',
        'Support remote workforce',
        'Scale with business growth'
      ],
      category: 'Networking',
      icon: <Network className="w-8 h-8 text-green-400" />,
      popular: false
    },
    {
      id: 'data-center-solutions',
      name: 'Data Center Solutions',
      price: '$1,499/mo',
      originalPrice: '$2,199/mo',
      description: 'Complete data center design and management',
      longDescription: 'Optimize your data center operations with our comprehensive solutions including design, implementation, and ongoing management.',
      features: [
        'Data Center Design & Planning',
        'Server & Storage Solutions',
        'Power & Cooling Management',
        'Physical Security Systems',
        'Environmental Monitoring',
        'Backup & Recovery Systems',
        'Disaster Recovery Planning',
        'Capacity Planning',
        'Energy Efficiency Optimization',
        'Compliance & Certification'
      ],
      benefits: [
        'Maximize data center efficiency',
        'Reduce operational costs',
        'Improve reliability and uptime',
        'Ensure regulatory compliance',
        'Support business continuity'
      ],
      category: 'Data Center',
      icon: <Server className="w-8 h-8 text-purple-400" />,
      popular: false
    },
    {
      id: 'it-support-managed',
      name: 'Managed IT Support',
      price: '$399/mo',
      originalPrice: '$599/mo',
      description: 'Comprehensive IT support and maintenance services',
      longDescription: 'Keep your IT systems running smoothly with our proactive managed IT support services including helpdesk, maintenance, and troubleshooting.',
      features: [
        '24/7 Helpdesk Support',
        'Proactive System Monitoring',
        'Software Updates & Patches',
        'Hardware Maintenance',
        'User Account Management',
        'Backup & Recovery Services',
        'Security Updates',
        'Performance Optimization',
        'IT Asset Management',
        'Remote Support & Troubleshooting'
      ],
      benefits: [
        'Reduce IT downtime by 80%',
        'Lower IT operational costs',
        'Improve system performance',
        'Ensure security compliance',
        'Focus on core business activities'
      ],
      category: 'Support',
      icon: <Wrench className="w-8 h-8 text-orange-400" />,
      popular: true
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      price: '$2,999/mo',
      originalPrice: '$4,499/mo',
      description: 'Bespoke software solutions for your business needs',
      longDescription: 'Transform your business processes with custom software solutions built specifically for your requirements and industry.',
      features: [
        'Custom Application Development',
        'Web Application Development',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Development',
        'UI/UX Design',
        'Quality Assurance & Testing',
        'Deployment & DevOps',
        'Maintenance & Support',
        'Technology Consulting'
      ],
      benefits: [
        'Streamline business processes',
        'Improve operational efficiency',
        'Gain competitive advantage',
        'Reduce manual work',
        'Scale with business growth'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      popular: false
    }
  ];

  const categories = ['All', 'Cloud Services', 'Cybersecurity', 'Networking', 'Data Center', 'Support', 'Development'];

  const useCases = [
    {
      title: 'Enterprise Migration',
      description: 'Seamlessly migrate to cloud infrastructure',
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      benefits: ['Cost Reduction', 'Improved Scalability', 'Enhanced Security', 'Better Performance']
    },
    {
      title: 'Security Hardening',
      description: 'Strengthen your security posture',
      icon: <Shield className="w-6 h-6 text-red-400" />,
      benefits: ['Threat Protection', 'Compliance', 'Risk Mitigation', 'Peace of Mind']
    },
    {
      title: 'Network Optimization',
      description: 'Optimize network performance and reliability',
      icon: <Network className="w-6 h-6 text-green-400" />,
      benefits: ['Faster Speeds', 'Better Reliability', 'Enhanced Security', 'Cost Savings']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your IT infrastructure',
      icon: <Rocket className="w-6 h-6 text-purple-400" />,
      benefits: ['Process Automation', 'Improved Efficiency', 'Better Collaboration', 'Future-Proofing']
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$299/mo',
      description: 'Perfect for small businesses',
      features: [
        'Basic IT support',
        'Email support',
        'Standard security',
        'Monthly maintenance',
        'Basic monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$799/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Advanced IT support',
        'Priority support',
        'Enhanced security',
        'Weekly maintenance',
        'Advanced monitoring',
        'Cloud services'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Dedicated IT team',
        '24/7 support',
        'Enterprise security',
        'Daily maintenance',
        'Comprehensive monitoring',
        'Custom solutions'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, networking, data center management, and custom software development. Transform your business with expert technology services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, networking, data center, managed IT support, software development, technology consulting" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, networking, and custom software development." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with our comprehensive IT solutions including cloud infrastructure, 
              cybersecurity, networking, and custom software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions for Every Business Need
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From cloud migration to cybersecurity, our IT solutions are designed to solve real business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 group">
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT services designed to transform your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-blue-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-blue-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Solutions Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect IT solution plan for your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-blue-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                      : 'border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white'
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with our expert IT team to modernize your infrastructure, enhance security, 
            and drive business growth with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;