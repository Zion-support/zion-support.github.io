<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ServerIcon,
  ShieldCheckIcon,
  CloudIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
<<<<<<< HEAD
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

<<<<<<< HEAD
const ITSolutionsPage: React.FC = () => {
  const solutions = [
=======
export default function ITSolutionsPage() {
  const itServices = [
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.",
      icon: CloudIcon,
      features: [
        "Scalable architecture",
        "High availability",
        "Security compliance",
        "Cost optimization",
        "24/7 monitoring",
        "Disaster recovery"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,500/month",
      benefits: ["Scalability", "Reliability", "Cost efficiency"],
      useCases: ["Web hosting", "Data storage", "Application hosting"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Risk mitigation", "Compliance"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor selection",
        "Implementation guidance",
        "Change management",
        "Training and support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      benefits: ["Expert guidance", "Cost savings", "Risk reduction"],
      useCases: ["Technology planning", "Digital transformation", "System integration"],
      href: "/it-consulting"
    },
    {
      title: "Network Solutions",
      description: "Advanced networking solutions for reliable and secure connectivity.",
      icon: GlobeAltIcon,
      features: [
        "Network design",
        "Security implementation",
        "Performance optimization",
        "Monitoring and maintenance",
        "Disaster recovery",
        "Remote access"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,800/month",
      benefits: ["Reliable connectivity", "Enhanced security", "Performance"],
      useCases: ["Office networking", "Remote work", "Data centers"],
      href: "/network-solutions"
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions for storage, processing, and analytics.",
      icon: ChartBarIcon,
      features: [
        "Data storage",
        "Data processing",
        "Analytics and reporting",
        "Data security",
        "Backup and recovery",
        "Data governance"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,000/month",
      benefits: ["Better insights", "Data security", "Compliance"],
      useCases: ["Business intelligence", "Data analytics", "Compliance"],
      href: "/data-management"
    },
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your systems running smoothly.",
      icon: UserGroupIcon,
      features: [
        "24/7 support",
        "Remote assistance",
        "System maintenance",
        "Software updates",
        "Hardware support",
        "User training"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,000/month",
      benefits: ["Reduced downtime", "Expert support", "Cost efficiency"],
      useCases: ["Help desk", "System maintenance", "User support"],
      href: "/it-support"
    }
  ];
<<<<<<< HEAD

  const features = [
    {
      title: "Expert Solutions",
      description: "Our team of certified professionals delivers cutting-edge IT solutions.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Solutions that grow with your business and adapt to changing needs.",
      icon: CloudIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems are always running.",
      icon: UserGroupIcon
    },
    {
      title: "Security First",
      description: "Security is built into every solution we deliver.",
      icon: ShieldCheckIcon
    }
  ];
<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89

=======
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const solutions = [
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete IT infrastructure setup, monitoring, and maintenance services.',
      features: ['Server Setup', 'Network Configuration', 'Performance Monitoring', '24/7 Support'],
      pricing: 'Starting at $299/month'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security measures to protect your business from cyber threats.',
      features: ['Firewall Setup', 'Antivirus Management', 'Security Audits', 'Incident Response'],
      pricing: 'Starting at $199/month'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud platforms with minimal downtime.',
      features: ['Assessment', 'Migration Planning', 'Data Transfer', 'Post-Migration Support'],
      pricing: 'Starting at $499/project'
    },
    {
      icon: CogIcon,
      title: 'System Integration',
      description: 'Connect and integrate your existing systems for better efficiency.',
      features: ['API Development', 'Database Integration', 'Workflow Automation', 'Custom Solutions'],
      pricing: 'Starting at $399/project'
    },
    {
      icon: ChartBarIcon,
      title: 'IT Consulting',
      description: 'Strategic IT planning and technology roadmap development.',
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Implementation Support'],
      pricing: 'Starting at $150/hour'
    },
    {
      icon: GlobeAltIcon,
      title: 'Web Development',
      description: 'Custom web applications and websites for your business needs.',
      features: ['Custom Development', 'Responsive Design', 'SEO Optimization', 'Maintenance'],
      pricing: 'Starting at $2,999/project'
    }
  ];

  const benefits = [
    'Expert IT professionals with years of experience',
    '24/7 technical support and monitoring',
    'Scalable solutions that grow with your business',
    'Proactive maintenance and updates',
    'Cost-effective solutions tailored to your budget',
    'Compliance with industry standards and regulations'
  ];

>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, and consulting services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our IT Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our IT Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our IT solutions can help you achieve your business goals.
=======
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cybersecurity, cloud migration, and system integration." />
        <meta name="keywords" content="IT solutions, infrastructure management, cybersecurity, cloud migration, system integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IT <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT services to keep your business running smoothly and securely. 
              From infrastructure management to cybersecurity, we've got you covered.
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
<<<<<<< HEAD
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
=======
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, system integration, and technical support." />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to support and enhance your business technology infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Infrastructure Management</h3>
              <p className="text-gray-300 mb-6">Complete management of your IT infrastructure and systems.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">System Integration</h3>
              <p className="text-gray-300 mb-6">Seamless integration of various systems and applications.</p>
            </div>
            
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-300 mb-6">24/7 technical support and maintenance services.</p>
            </div>
          </div>
        </div>
>>>>>>> cursor/analyze-improve-and-deploy-application-4227
      </div>
=======
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud migration, cybersecurity, database management, and more. Expert IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud migration, cybersecurity, database management, IT support, network security" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive IT solutions to power your business infrastructure
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From infrastructure management to cybersecurity, our expert IT solutions 
              ensure your technology infrastructure is secure, scalable, and optimized for performance.
            </p>
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-green-400">{service.price}</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hover:bg-purple-400/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 font-semibold"
                    >
                      Get Started
=======
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of IT solutions designed to meet your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{solution.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-blue-400 font-semibold">{solution.pricing}</span>
                    <Link 
                      to="/contact" 
                      className="text-blue-400 hover:text-blue-300 font-semibold flex items-center"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Why Choose Our IT Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert IT services backed by years of experience and cutting-edge technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ServerIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Certified IT professionals with extensive experience in enterprise infrastructure and cloud technologies.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and support to ensure your IT infrastructure runs smoothly at all times.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security measures and compliance standards to protect your critical business data.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300">
                Flexible IT solutions that grow with your business and adapt to changing requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to delivering reliable and efficient IT solutions
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
              <p className="text-gray-300">
                We assess your current IT infrastructure and develop a comprehensive implementation plan.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Design & Configuration</h3>
              <p className="text-gray-300">
                We design and configure your IT solutions according to best practices and your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Implementation & Testing</h3>
              <p className="text-gray-300">
                We implement the solutions and conduct thorough testing to ensure everything works perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Monitoring & Support</h3>
              <p className="text-gray-300">
                We provide ongoing monitoring, maintenance, and support to keep your systems running optimally.
              </p>
=======
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IT Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300">
                We provide reliable, secure, and scalable IT solutions that help your business thrive.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our IT solutions can enhance your business operations and security
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free IT Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule IT Demo
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
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
    </>
  );
<<<<<<< HEAD
}
<<<<<<< HEAD
export default ITSolutionsPage;
=======
};

export default ITSolutionsPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-5bf7
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-9e89
=======
      <section className="py-20 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let's discuss how our IT solutions can help improve your business operations and security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITSolutionsPage;
>>>>>>> cursor/analyze-improve-and-deploy-application-19e3
