import React from 'react';
import { CheckCircle, ArrowRight, Globe, Zap, Users, Database, Shield, DollarSign, Star, Clock, Smartphone, Brain } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Digital Strategy Consulting',
      description: 'Comprehensive digital transformation strategy to modernize your business processes and operations.',
      features: ['Digital assessment', 'Strategy development', 'Roadmap creation', 'Change management', 'KPI tracking', 'Implementation support'],
      pricing: 'Starting at $5,000',
      link: '/digital-strategy',
      popular: true,
      category: 'Strategy',
      duration: '4-8 weeks'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Process Automation',
      description: 'Automate repetitive business processes to improve efficiency and reduce operational costs.',
      features: ['Process analysis', 'Workflow automation', 'RPA implementation', 'Integration setup', 'Performance monitoring', 'Optimization'],
      pricing: 'Starting at $3,000',
      link: '/process-automation',
      popular: false,
      category: 'Automation',
      duration: '2-6 weeks'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Digital Workforce Training',
      description: 'Train your team on new digital tools and technologies to maximize productivity and adoption.',
      features: ['Skills assessment', 'Training programs', 'Tool adoption', 'Change management', 'Support systems', 'Performance tracking'],
      pricing: 'Starting at $2,500',
      link: '/digital-training',
      popular: false,
      category: 'Training',
      duration: '2-4 weeks'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Strategy & Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      features: ['Data audit', 'Strategy development', 'Analytics setup', 'Dashboard creation', 'Insight generation', 'Decision support'],
      pricing: 'Starting at $4,000',
      link: '/data-strategy',
      popular: true,
      category: 'Analytics',
      duration: '3-6 weeks'
    },
    {
      icon: <Smartphone className="w-8 h-8 text-orange-500" />,
      title: 'Customer Experience Digitalization',
      description: 'Enhance customer experience through digital channels and modern engagement platforms.',
      features: ['CX assessment', 'Digital channels', 'Omnichannel setup', 'Customer journey mapping', 'Engagement tools', 'Analytics'],
      pricing: 'Starting at $6,000',
      link: '/customer-experience',
      popular: false,
      category: 'Customer Experience',
      duration: '4-8 weeks'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Digital Security & Compliance',
      description: 'Ensure your digital transformation is secure and compliant with industry regulations.',
      features: ['Security audit', 'Compliance assessment', 'Security implementation', 'Policy development', 'Training programs', 'Monitoring'],
      pricing: 'Starting at $3,500',
      link: '/digital-security',
      popular: false,
      category: 'Security',
      duration: '2-5 weeks'
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      title: 'Increased Efficiency',
      description: 'Improve operational efficiency by up to 40% through process automation and digital tools.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-blue-500" />,
      title: 'Cost Reduction',
      description: 'Reduce operational costs by 25-35% through digital transformation and automation.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-purple-500" />,
      title: 'Better Customer Experience',
      description: 'Enhance customer satisfaction with digital channels and improved service delivery.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-orange-500" />,
      title: 'Competitive Advantage',
      description: 'Stay ahead of competitors with modern digital capabilities and innovative solutions.'
    }
  ];

  const stats = [
    { number: '40%', label: 'Efficiency Gain' },
    { number: '35%', label: 'Cost Reduction' },
    { number: '90%', label: 'Success Rate' },
    { number: '500+', label: 'Projects Completed' }
  ];

  const industries = [
    {
      title: 'Healthcare',
      description: 'Electronic health records, telemedicine, and patient management systems',
      icon: '🏥'
    },
    {
      title: 'Manufacturing',
      description: 'Smart factories, IoT integration, and predictive maintenance',
      icon: '🏭'
    },
    {
      title: 'Finance',
      description: 'Digital banking, fintech solutions, and automated trading',
      icon: '🏦'
    },
    {
      title: 'Retail',
      description: 'E-commerce platforms, omnichannel experiences, and inventory management',
      icon: '🛍️'
    },
    {
      title: 'Education',
      description: 'Online learning platforms, student management, and virtual classrooms',
      icon: '🎓'
    },
    {
      title: 'Government',
      description: 'Digital services, citizen portals, and automated processes',
      icon: '🏛️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes, improve efficiency, and drive growth. Transform your business for the digital age." />
        <meta name="keywords" content="digital transformation, business modernization, process automation, digital strategy, customer experience" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Digital Transformation Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your business for the digital age with comprehensive digital transformation services. 
              Improve efficiency, reduce costs, and drive growth with our proven methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Explore AI Services
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

      {/* Industries Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Industries We Transform</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              We have experience across multiple industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{industry.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{industry.title}</h3>
                <p className="text-gray-300 text-sm">{industry.description}</p>
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
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {service.category}
                  </span>
                </div>
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
                  <div className="text-2xl font-bold text-white">{service.pricing}</div>
                  <div className="text-sm text-gray-400">{service.duration}</div>
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

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Digital Transformation Services?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience the benefits of comprehensive digital transformation
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
                Get a free digital transformation assessment and discover how we can modernize your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
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
