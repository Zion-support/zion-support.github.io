import React from 'react';
import { CheckCircle, ArrowRight, Globe, Zap, Users, BarChart, Shield, Clock, DollarSign, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DigitalTransformationPage: React.FC = () => {
  const transformationServices = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: 'Digital Strategy & Consulting',
      description: 'Comprehensive digital transformation strategy development and implementation planning.',
      features: ['Digital Assessment', 'Strategy Development', 'Technology Roadmap', 'Change Management', 'ROI Analysis'],
      pricing: 'Starting at $5,000',
      popular: true,
      category: 'Strategy'
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'Process Automation',
      description: 'Automate business processes with intelligent workflow solutions and RPA.',
      features: ['Workflow Analysis', 'RPA Implementation', 'Process Optimization', 'Integration Services', 'Monitoring & Support'],
      pricing: 'Starting at $3,500',
      popular: false,
      category: 'Automation'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Customer Experience Transformation',
      description: 'Enhance customer experience through digital channels and omnichannel solutions.',
      features: ['CX Assessment', 'Omnichannel Strategy', 'Digital Touchpoints', 'Personalization', 'Analytics & Insights'],
      pricing: 'Starting at $4,500',
      popular: true,
      category: 'CX'
    },
    {
      icon: <BarChart className="w-8 h-8 text-orange-500" />,
      title: 'Data & Analytics Modernization',
      description: 'Transform your data infrastructure and enable data-driven decision making.',
      features: ['Data Architecture', 'Analytics Platform', 'BI Dashboards', 'Data Governance', 'AI/ML Integration'],
      pricing: 'Starting at $6,000',
      popular: false,
      category: 'Analytics'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Security & Compliance',
      description: 'Implement robust security measures and ensure regulatory compliance.',
      features: ['Security Assessment', 'Compliance Framework', 'Identity Management', 'Threat Protection', 'Audit Support'],
      pricing: 'Starting at $2,500',
      popular: false,
      category: 'Security'
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-500" />,
      title: 'Legacy System Modernization',
      description: 'Modernize legacy systems and migrate to cloud-native architectures.',
      features: ['System Assessment', 'Migration Planning', 'Cloud Migration', 'API Development', 'Testing & Validation'],
      pricing: 'Starting at $8,000',
      popular: false,
      category: 'Modernization'
    }
  ];

  const transformationPhases = [
    {
      phase: '01',
      title: 'Assessment & Strategy',
      description: 'Comprehensive analysis of current state and development of transformation roadmap.',
      duration: '2-4 weeks'
    },
    {
      phase: '02',
      title: 'Planning & Design',
      description: 'Detailed planning and design of new digital solutions and processes.',
      duration: '4-6 weeks'
    },
    {
      phase: '03',
      title: 'Implementation',
      description: 'Execution of transformation initiatives with minimal business disruption.',
      duration: '8-16 weeks'
    },
    {
      phase: '04',
      title: 'Optimization',
      description: 'Continuous monitoring, optimization, and scaling of digital solutions.',
      duration: 'Ongoing'
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: '🏥',
      description: 'Digital health records, telemedicine, and patient engagement solutions.',
      benefits: ['Improved Patient Care', 'Operational Efficiency', 'Compliance', 'Data Security']
    },
    {
      name: 'Finance',
      icon: '💰',
      description: 'Digital banking, fintech solutions, and regulatory compliance.',
      benefits: ['Enhanced Security', 'Better UX', 'Regulatory Compliance', 'Cost Reduction']
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Smart manufacturing, IoT integration, and supply chain optimization.',
      benefits: ['Operational Efficiency', 'Quality Control', 'Predictive Maintenance', 'Cost Savings']
    },
    {
      name: 'Retail',
      icon: '🛍️',
      description: 'E-commerce platforms, omnichannel experiences, and customer analytics.',
      benefits: ['Increased Sales', 'Customer Loyalty', 'Inventory Optimization', 'Market Insights']
    }
  ];

  const stats = [
    { number: '200+', label: 'Transformations Completed' },
    { number: '85%', label: 'Success Rate' },
    { number: '60%', label: 'Cost Reduction' },
    { number: '3x', label: 'Efficiency Gain' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including strategy, process automation, customer experience, and legacy modernization. Transform your business for the digital age." />
        <meta name="keywords" content="digital transformation, business automation, process optimization, customer experience, legacy modernization, digital strategy" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business for the digital age with comprehensive digital transformation solutions. From strategy to implementation, we guide your journey to digital excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Transformation
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

      {/* Transformation Phases */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Transformation Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology for successful digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {transformationPhases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{phase.phase}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300 mb-2 text-sm">{phase.description}</p>
                <div className="text-purple-400 text-sm font-medium">{phase.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored digital transformation solutions for your industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{industry.description}</p>
                </div>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Transformation Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital transformation solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {transformationServices.map((service, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular Choice
                    </span>
                  </div>
                )}
                <div className="mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-white mb-2">{service.pricing}</div>
                  <div className="text-gray-400 text-sm">project-based</div>
                </div>
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional digital transformation with proven expertise and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Certified professionals with years of experience in digital transformation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Process</h3>
              <p className="text-gray-300">Methodology proven across 200+ successful transformations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Change Management</h3>
              <p className="text-gray-300">Comprehensive change management to ensure smooth transitions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">ROI Focused</h3>
              <p className="text-gray-300">Measurable results with clear ROI and business value delivery.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformationPage;
