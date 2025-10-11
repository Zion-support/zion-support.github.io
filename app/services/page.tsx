import React from 'react';
import { CheckCircle, ArrowRight, Shield, Cloud, Brain, Cpu, Network, BarChart3 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: <Brain className="w-12 h-12 text-blue-500" />,
      title: 'AI Solutions',
      description: 'Comprehensive artificial intelligence solutions to automate processes, gain insights, and drive innovation.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Intelligent Automation'
      ],
      link: '/ai-services'
    },
    {
      icon: <Network className="w-12 h-12 text-green-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions to power your digital transformation with ultra-fast speeds and low latency.',
      features: [
        '5G Network Design',
        'Edge Computing',
        'IoT Integration',
        'Network Optimization',
        'Security Implementation',
        'Performance Monitoring'
      ],
      link: '/5g-implementation'
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-500" />,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and services to modernize your IT environment and improve operational efficiency.',
      features: [
        'Cloud Migration',
        'Multi-Cloud Strategy',
        'DevOps Implementation',
        'Container Orchestration',
        'Serverless Architecture',
        'Cost Optimization'
      ],
      link: '/cloud-services'
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets and ensure compliance with industry standards.',
      features: [
        'Threat Detection',
        'Security Audits',
        'Compliance Management',
        'Incident Response',
        'Security Training',
        'Risk Assessment'
      ],
      link: '/cybersecurity'
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-500" />,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Data Visualization',
        'Predictive Modeling',
        'Real-time Analytics',
        'Data Warehousing',
        'ETL Processes',
        'Dashboard Development'
      ],
      link: '/data-analytics'
    },
    {
      icon: <Cpu className="w-12 h-12 text-cyan-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
      features: [
        'Web Applications',
        'Mobile Apps',
        'API Development',
        'System Integration',
        'Legacy Modernization',
        'Quality Assurance'
      ],
      link: '/custom-development'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current systems, identify challenges, and understand your business objectives.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed implementation plan tailored to your needs.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'We thoroughly test the solution and optimize performance to ensure maximum efficiency.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy the solution and provide ongoing support and maintenance services.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions, 5G implementation, cloud services, cybersecurity, and custom development. Transform your business with our expert IT services." />
        <meta name="keywords" content="AI solutions, 5G implementation, cloud services, cybersecurity, data analytics, custom development, IT services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer a comprehensive range of technology services to meet all your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                    <p className="text-gray-300">Our team consists of certified professionals with deep expertise in AI, cloud computing, and enterprise solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Proven Track Record</h3>
                    <p className="text-gray-300">We've successfully delivered 500+ projects for clients across various industries and company sizes.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                    <p className="text-gray-300">Round-the-clock support and monitoring to ensure your systems run smoothly and efficiently.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
                    <p className="text-gray-300">Our solutions are designed to grow with your business and adapt to changing requirements.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project requirements and how we can help you achieve your business goals with our technology solutions.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="w-full border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Transform Your Business Today</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Ready to leverage cutting-edge technology to drive growth and innovation? Let's discuss your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Project
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;