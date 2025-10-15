import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ServerIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence services including machine learning, natural language processing, and predictive analytics.',
      href: '/ai-solutions',
      icon: CpuChipIcon,
      price: 'Starting at $2,500/month',
      features: ['Machine Learning Models', 'NLP Processing', 'Predictive Analytics', 'AI Consulting'],
      popular: true
    },
    {
      title: 'IT Solutions',
      description: 'Comprehensive IT infrastructure, cloud migration, and digital transformation services.',
      href: '/it-solutions',
      icon: ServerIcon,
      price: 'Starting at $1,500/month',
      features: ['Cloud Migration', 'Infrastructure Setup', 'System Integration', 'IT Consulting'],
      popular: false
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Custom micro software-as-a-service applications tailored to your business needs.',
      href: '/micro-saas-solutions',
      icon: CodeBracketIcon,
      price: 'Starting at $3,000/month',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Maintenance & Support'],
      popular: true
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from cyber threats and data breaches.',
      href: '/cybersecurity',
      icon: ShieldCheckIcon,
      price: 'Starting at $2,000/month',
      features: ['Security Audits', 'Threat Detection', 'Data Protection', 'Compliance Management'],
      popular: false
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud Platform expertise.',
      href: '/cloud-infrastructure',
      icon: CloudIcon,
      price: 'Starting at $1,800/month',
      features: ['Cloud Migration', 'Auto-scaling', 'Cost Optimization', '24/7 Monitoring'],
      popular: false
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      href: '/digital-transformation',
      icon: RocketLaunchIcon,
      price: 'Starting at $5,000/month',
      features: ['Process Automation', 'Workflow Optimization', 'Technology Integration', 'Change Management'],
      popular: true
    }
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Our team consists of highly skilled professionals with years of experience in their respective fields.',
      icon: UserGroupIcon
    },
    {
      title: 'Proven Results',
      description: 'We have a track record of delivering successful projects for clients across various industries.',
      icon: ChartBarIcon
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support to ensure your systems are always running smoothly.',
      icon: ClockIcon
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs and requirements.',
      icon: WrenchScrewdriverIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation." />
        <meta name="keywords" content="services, AI solutions, IT services, cybersecurity, cloud infrastructure, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology services designed to accelerate your business growth and digital transformation.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started Today
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions to meet all your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:transform hover:scale-105 relative ${
                  service.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-700/50 hover:border-purple-500/50'
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  </div>
                  <ul className="text-sm text-gray-400 mb-6 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <Link to={service.href} className="flex items-center">
                      <span className="text-sm font-medium">Learn More</span>
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through our expertise, dedication, and commitment to excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover-lift hover-glow glass-dark">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform floating">
                    <reason.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 gradient-text">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
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
              Contact our experts today to discuss how our services can help accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glow-effect"
              >
                Get Service Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/pricing" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover-lift hover-glow flex items-center gap-2 glass"
              >
                View Pricing
                <CurrencyDollarIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;