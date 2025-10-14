import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ArrowPathIcon,
  RocketLaunchIcon,
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Process Automation',
        'AI Security'
      ],
      href: '/ai-solutions'
    },
    {
      icon: ShieldCheckIcon,
      title: 'IT Services',
      description: 'Comprehensive IT support, infrastructure management, and technology consulting services.',
      features: [
        'Infrastructure Management',
        'Cloud Solutions',
        'Cybersecurity',
        'Network Design',
        'Technical Support',
        'System Integration'
      ],
      href: '/it-solutions'
    },
    {
      icon: CloudIcon,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions, migration services, and infrastructure optimization.',
      features: [
        'Cloud Migration',
        'Multi-cloud Strategy',
        'Cost Optimization',
        'Disaster Recovery',
        'Cloud Security',
        'DevOps Implementation'
      ],
      href: '/cloud-infrastructure'
    },
    {
      icon: ArrowPathIcon,
      title: 'Digital Transformation',
      description: 'Transform your business with digital solutions and process automation.',
      features: [
        'Process Automation',
        'Change Management',
        'Digital Strategy',
        'Workflow Optimization',
        'Technology Integration',
        'Performance Monitoring'
      ],
      href: '/digital-transformation'
    },
    {
      icon: RocketLaunchIcon,
      title: 'Micro SaaS Solutions',
      description: 'Custom software-as-a-service solutions tailored to your business needs.',
      features: [
        'Custom SaaS Development',
        'API Integration',
        'User Management',
        'Payment Processing',
        'Analytics Dashboard',
        'Scalable Architecture'
      ],
      href: '/micro-saas-solutions'
    },
    {
      icon: CogIcon,
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for enhanced connectivity and performance.',
      features: [
        '5G Network Planning',
        'IoT Integration',
        'Edge Computing',
        'Low Latency Solutions',
        'Network Optimization',
        '5G Security'
      ],
      href: '/5g-solutions'
    }
  ];

  const benefits = [
    'Expert Team',
    'Proven Track Record',
    '24/7 Support',
    'Scalable Solutions',
    'Cost Effective',
    'Latest Technology'
  ];

  const process = [
    {
      step: '1',
      title: 'Consultation',
      description: 'We start with a thorough consultation to understand your needs and challenges.'
    },
    {
      step: '2',
      title: 'Strategy',
      description: 'Develop a comprehensive strategy tailored to your business objectives.'
    },
    {
      step: '3',
      title: 'Implementation',
      description: 'Execute the solution with expert guidance and continuous support.'
    },
    {
      step: '4',
      title: 'Optimization',
      description: 'Monitor, measure, and optimize for continuous improvement and success.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, IT services, cloud infrastructure, digital transformation, and more." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth. 
                From AI and IT services to cloud infrastructure and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/demo" 
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What We Offer
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive suite of services covers every aspect of modern technology needs, 
                from artificial intelligence to infrastructure management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={service.href}
                    className="text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-2 group"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, dedication, and commitment to client success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <CheckCircleIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900 to-cyan-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our experts help you choose the right services and implement solutions 
              that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 hover:scale-105"
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

export default ServicesPage;