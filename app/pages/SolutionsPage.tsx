import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CogIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions including machine learning, computer vision, natural language processing, and automation.',
      features: [
        'Machine Learning Models',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'Automated Decision Making',
        'Custom AI Development'
      ],
      icon: CpuChipIcon,
      href: '/ai-solutions',
      pricing: 'Starting from $299/month'
    },
    {
      id: 'it-solutions',
      title: 'IT Solutions',
      description: 'Complete IT infrastructure and services including cloud computing, network management, cybersecurity, and digital transformation.',
      features: [
        'Cloud Infrastructure',
        'Network Management',
        'Cybersecurity',
        'Data Center Solutions',
        'IT Support Services',
        'Digital Transformation'
      ],
      icon: ServerIcon,
      href: '/it-solutions',
      pricing: 'Starting from $199/month'
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Specialized software solutions designed to solve specific business problems with AI-powered intelligence and automation.',
      features: [
        'AI Content Generation',
        'Social Media Management',
        'Email Marketing Automation',
        'Project Management',
        'Customer Support Bots',
        'Inventory Management'
      ],
      icon: GlobeAltIcon,
      href: '/micro-saas-solutions',
      pricing: 'Starting from $29/month'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Advanced security solutions to protect your digital assets with threat detection, vulnerability assessment, and compliance management.',
      features: [
        'Threat Detection',
        'Vulnerability Assessment',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      icon: ShieldCheckIcon,
      href: '/cybersecurity',
      pricing: 'Starting from $199/month'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform expertise for modern business needs.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Auto-scaling',
        'Load Balancing',
        'Disaster Recovery',
        'Cost Optimization'
      ],
      icon: CloudIcon,
      href: '/cloud-solutions',
      pricing: 'Starting from $299/month'
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes and technology infrastructure.',
      features: [
        'Process Analysis',
        'Technology Assessment',
        'Digital Strategy',
        'System Integration',
        'Change Management',
        'Performance Monitoring'
      ],
      icon: RocketLaunchIcon,
      href: '/digital-transformation',
      pricing: 'Starting from $399/month'
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: '🏥', description: 'AI-powered medical solutions and secure data management' },
    { name: 'Finance', icon: '💼', description: 'Fintech solutions and fraud detection systems' },
    { name: 'Manufacturing', icon: '🏭', description: 'IoT integration and predictive maintenance' },
    { name: 'Retail', icon: '🛍️', description: 'E-commerce optimization and customer analytics' },
    { name: 'Education', icon: '🎓', description: 'Learning management systems and AI tutoring' },
    { name: 'Government', icon: '🏛️', description: 'Secure infrastructure and citizen services' }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for businesses. AI, IT, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta name="keywords" content="technology solutions, AI solutions, IT services, cybersecurity, cloud computing, digital transformation" />
        <meta property="og:title" content="Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive technology solutions for businesses. AI, IT, cybersecurity, cloud infrastructure, and digital transformation services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20 animated-grid"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse floating"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse floating" style={{animationDelay: '1s'}}></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text neon-text">
              Our Solutions
            </h1>
            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation across all industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge solutions powered by artificial intelligence, cloud computing, and advanced cybersecurity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized solutions tailored to the unique needs of different industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div 
                  key={industry.name}
                  className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-6">{industry.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-white">Solutions:</h4>
                    {industry.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="flex items-center gap-2 text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )})}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from real clients who have transformed their businesses with our solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div 
                key={study.title}
                className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl border border-slate-600 p-8"
              >
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="text-sm text-gray-400 mb-1">Starting from</div>
                  <div className="text-xl font-bold text-purple-400">{solution.pricing}</div>
                </div>

                <Link 
                  to={solution.href}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all glow-effect"
                >
                  Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our solutions are tailored to meet the unique needs of various industries and sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={industry.name} className="bg-slate-800/50 p-6 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Contact us today to discuss your specific needs and get a customized solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  )}
