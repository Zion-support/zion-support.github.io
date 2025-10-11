import React from 'react';
import { CheckCircle, ArrowRight, Zap, Globe, Database, Smartphone, Cpu, Shield, Users, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function DigitalTransformationPage() {
  const transformationServices = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and streamline workflows with intelligent automation solutions.',
      features: [
        'Workflow automation',
        'Document processing',
        'Data entry automation',
        'Task scheduling',
        'Error handling',
        'Performance monitoring'
      ],
      pricing: '$2,000/month',
      popular: true,
      link: '/process-automation'
    },
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Empower your team with digital tools and technologies for enhanced productivity.',
      features: [
        'Digital collaboration tools',
        'Remote work solutions',
        'Training and development',
        'Performance tracking',
        'Knowledge management',
        'Change management'
      ],
      pricing: '$1,500/month',
      popular: false,
      link: '/digital-workforce'
    },
    {
      icon: <Globe className="w-12 h-12 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Transform customer interactions with digital channels and personalized experiences.',
      features: [
        'Omnichannel strategy',
        'Customer journey mapping',
        'Personalization engines',
        'Analytics and insights',
        'Mobile experiences',
        'Social media integration'
      ],
      pricing: '$1,800/month',
      popular: true,
      link: '/customer-experience'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-500" />,
      title: 'Data Strategy',
      description: 'Leverage data as a strategic asset with comprehensive data management and analytics.',
      features: [
        'Data governance',
        'Analytics platforms',
        'Business intelligence',
        'Data visualization',
        'Predictive analytics',
        'Data security'
      ],
      pricing: '$2,500/month',
      popular: false,
      link: '/data-strategy'
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-500" />,
      title: 'Mobile Transformation',
      description: 'Enable mobile-first experiences with responsive design and native applications.',
      features: [
        'Mobile app development',
        'Responsive web design',
        'Progressive web apps',
        'Mobile optimization',
        'Cross-platform solutions',
        'App store optimization'
      ],
      pricing: 'Starting at $5,000',
      popular: false,
      link: '/mobile-transformation'
    },
    {
      icon: <Cpu className="w-12 h-12 text-yellow-500" />,
      title: 'AI Integration',
      description: 'Integrate artificial intelligence into your business processes for intelligent automation.',
      features: [
        'AI strategy development',
        'Machine learning models',
        'Natural language processing',
        'Computer vision',
        'Predictive analytics',
        'AI training and support'
      ],
      pricing: 'Starting at $3,000',
      popular: true,
      link: '/ai-integration'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Improve operational efficiency by up to 40% with automated processes and digital tools.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Better Customer Experience',
      description: 'Enhance customer satisfaction with personalized, omnichannel digital experiences.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time analytics and business intelligence insights.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with cutting-edge digital technologies and strategies.'
    }
  ];

  const stats = [
    { number: '40%', label: 'Efficiency Gain' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '85%', label: 'Customer Satisfaction' },
    { number: '200%', label: 'ROI Increase' }
  ];

  const transformationSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Analyze current state and identify transformation opportunities.',
      icon: <Target className="w-8 h-8 text-blue-500" />
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive digital transformation roadmap.',
      icon: <Globe className="w-8 h-8 text-green-500" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the transformation plan with expert guidance.',
      icon: <Zap className="w-8 h-8 text-purple-500" />
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize digital processes.',
      icon: <Cpu className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation services. Process automation, AI integration, and modern technology solutions." />
        <meta name="keywords" content="digital transformation, process automation, AI integration, business transformation, digital strategy" />
      </Helmet>
      
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Digital Transformation
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Transform your business for the digital age with comprehensive digital transformation services. 
                Embrace innovation, efficiency, and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Transformation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/ai-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View AI Services
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Services Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Transformation Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Comprehensive solutions to modernize your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {transformationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Zap className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    </div>
                  )}
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-white">{service.pricing}</div>
                    <div className="flex items-center text-sm text-gray-400">
                      <Zap className="w-4 h-4 text-yellow-400 mr-1" />
                      4.7
                    </div>
                  </div>
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transformation Process Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                A proven methodology for successful digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {transformationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="mb-4 flex justify-center">{step.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Digital Transformation?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Experience the benefits of modern digital solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let our digital transformation experts help you modernize your business and stay competitive in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Get Free Assessment
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    View IT Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}