import React from 'react';
import { CheckCircle, ArrowRight, Zap, Users, Target, TrendingUp, DollarSign, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows to increase efficiency and reduce errors.',
      features: ['Workflow automation', 'Task scheduling', 'Data processing', 'Integration management'],
      pricing: 'Starting at $3,000',
      link: '/process-automation',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce',
      description: 'Transform your workforce with digital tools and training programs.',
      features: ['Digital training', 'Tool implementation', 'Change management', 'Performance tracking'],
      pricing: 'Starting at $2,500',
      link: '/digital-workforce',
      popular: false
    },
    {
      icon: <Target className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience',
      description: 'Enhance customer experience with digital touchpoints and personalization.',
      features: ['Customer journey mapping', 'Personalization', 'Omnichannel experience', 'Analytics'],
      pricing: 'Starting at $4,000',
      link: '/customer-experience',
      popular: true
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: 'Data Strategy',
      description: 'Develop a comprehensive data strategy for better decision making.',
      features: ['Data governance', 'Analytics setup', 'Reporting dashboards', 'Data quality'],
      pricing: 'Starting at $3,500',
      link: '/data-strategy',
      popular: false
    },
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: 'Revenue Optimization',
      description: 'Optimize revenue streams through digital channels and automation.',
      features: ['Revenue analytics', 'Channel optimization', 'Pricing strategies', 'Growth planning'],
      pricing: 'Starting at $5,000',
      link: '/revenue-optimization',
      popular: false
    },
    {
      icon: <Clock className="w-8 h-8 text-indigo-500" />,
      title: 'Agile Transformation',
      description: 'Implement agile methodologies for faster delivery and better outcomes.',
      features: ['Agile coaching', 'Team training', 'Process optimization', 'Tool implementation'],
      pricing: 'Starting at $2,000',
      link: '/agile-transformation',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Streamline operations and reduce manual work by up to 70%.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, seamless experiences across all touchpoints.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions with real-time insights and analytics.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge digital solutions.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'Comprehensive analysis of your current digital maturity and opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a customized digital transformation roadmap aligned with your goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the transformation with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor and optimize for maximum ROI and performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business for the digital age with comprehensive digital transformation services. Process automation, digital workforce, and customer experience solutions." />
        <meta name="keywords" content="digital transformation, process automation, digital workforce, customer experience, data strategy, agile transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business for the digital age with comprehensive digital transformation services. Process automation, digital workforce, and customer experience solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions to transform your business for the digital age
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  </div>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-bold text-white">{service.pricing}</span>
                  <Link 
                    to={service.link}
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Digital Transformation Services?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the benefits of comprehensive digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Digital Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our digital transformation services can help you achieve your business goals and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;
