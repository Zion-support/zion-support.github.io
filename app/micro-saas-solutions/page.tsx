import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CodeBracketIcon,
  CloudIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  CogIcon,
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  UserIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Custom Web Applications',
      description: 'Build powerful web applications tailored to your specific business needs with modern technologies.',
      icon: CodeBracketIcon,
      features: [
        'React/Next.js Development',
        'Node.js Backend',
        'Database Design',
        'API Integration',
        'Responsive Design',
        'Performance Optimization'
      ],
      pricing: 'Starting at $8,000',
      duration: '8-12 weeks',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      icon: RocketLaunchIcon,
      features: [
        'iOS & Android Development',
        'Cross-platform Solutions',
        'Push Notifications',
        'Offline Functionality',
        'App Store Optimization',
        'Maintenance & Updates'
      ],
      pricing: 'Starting at $12,000',
      duration: '12-16 weeks',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'API Development',
      description: 'Robust and scalable APIs that power your applications and integrate with third-party services.',
      icon: CogIcon,
      features: [
        'RESTful API Design',
        'GraphQL Implementation',
        'Authentication & Security',
        'Rate Limiting',
        'Documentation',
        'Testing & Monitoring'
      ],
      pricing: 'Starting at $5,000',
      duration: '4-6 weeks',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Dashboard & Analytics',
      description: 'Comprehensive dashboards and analytics platforms for data-driven decision making.',
      icon: ChartBarIcon,
      features: [
        'Real-time Dashboards',
        'Data Visualization',
        'Custom Reports',
        'User Management',
        'Export Capabilities',
        'Automated Insights'
      ],
      pricing: 'Starting at $6,000',
      duration: '6-8 weeks',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment processing, inventory management, and order tracking.',
      icon: UserGroupIcon,
      features: [
        'Product Management',
        'Shopping Cart',
        'Payment Integration',
        'Order Management',
        'Customer Portal',
        'Analytics & Reporting'
      ],
      pricing: 'Starting at $10,000',
      duration: '10-14 weeks',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure setup and management for your SaaS applications.',
      icon: CloudIcon,
      features: [
        'AWS/Azure/GCP Setup',
        'Auto-scaling',
        'Load Balancing',
        'Database Management',
        'Security Configuration',
        'Monitoring & Alerts'
      ],
      pricing: 'Starting at $3,000',
      duration: '4-6 weeks',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const benefits = [
    'Custom Development',
    'Scalable Architecture',
    'Modern Technologies',
    'Expert Team',
    'Ongoing Support',
    'Cost Effective'
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We understand your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'We design the user interface and create interactive prototypes.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our expert team builds your solution using modern technologies.'
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'We thoroughly test your solution and deploy it to production.'
    }
  ];

  const technologies = [
    {
      name: 'React',
      description: 'Modern frontend framework',
      icon: '⚛️'
    },
    {
      name: 'Node.js',
      description: 'Scalable backend runtime',
      icon: '🟢'
    },
    {
      name: 'TypeScript',
      description: 'Type-safe JavaScript',
      icon: '🔷'
    },
    {
      name: 'PostgreSQL',
      description: 'Reliable database system',
      icon: '🐘'
    },
    {
      name: 'Docker',
      description: 'Containerization platform',
      icon: '🐳'
    },
    {
      name: 'AWS',
      description: 'Cloud infrastructure',
      icon: '☁️'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions including web applications, mobile apps, APIs, and cloud infrastructure." />
        <meta name="keywords" content="micro SaaS, custom development, web applications, mobile apps, API development, cloud solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Build powerful, scalable micro SaaS applications that solve specific business problems. 
                From concept to deployment, we bring your ideas to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive development services for modern SaaS applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {solution.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <UserIcon className="w-4 h-4" />
                      Expert Team
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-purple-400 font-semibold">{solution.pricing}</span>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies in the industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-400 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional micro SaaS solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver custom solutions that drive business success
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and bring your micro SaaS idea to life with our expert development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;