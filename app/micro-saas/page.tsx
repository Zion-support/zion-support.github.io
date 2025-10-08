import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, BarChart3, FileText, Heart, Share2, Package, Mail, Smartphone, MapPin, Clock, Users, Shield, TrendingUp } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive analytics and automated insights.',
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      features: ['Real-time Data Processing', 'Predictive Analytics', 'Custom Dashboards', 'Automated Reports', 'Mobile App', 'API Integration'],
      price: '$299/month',
      category: 'Analytics',
      benefits: ['300% ROI improvement', '50% faster decision making', '24/7 monitoring'],
      popular: true,
      setupTime: '24 hours',
      freeTrial: '14 days'
    },
    {
      title: 'Smart Document Processor',
      description: 'AI-powered document processing with OCR, classification, and data extraction.',
      icon: <FileText className="w-12 h-12 text-green-600" />,
      features: ['OCR Technology', 'Smart Classification', 'Data Extraction', 'Workflow Automation', 'Batch Processing', 'Cloud Storage'],
      price: '$199/month',
      category: 'Productivity',
      benefits: ['90% accuracy', '80% time savings', 'Zero manual errors'],
      popular: false,
      setupTime: '2 hours',
      freeTrial: '7 days'
    },
    {
      title: 'Customer Sentiment Analyzer',
      description: 'Real-time sentiment analysis across all customer touchpoints and channels.',
      icon: <Heart className="w-12 h-12 text-red-600" />,
      features: ['Multi-channel Analysis', 'Real-time Alerts', 'Trend Analysis', 'Actionable Insights', 'Integration APIs', 'Custom Reports'],
      price: '$149/month',
      category: 'Customer Experience',
      benefits: ['95% accuracy', 'Real-time insights', 'Customer satisfaction boost'],
      popular: false,
      setupTime: '1 hour',
      freeTrial: '10 days'
    },
    {
      title: 'Automated Social Media Manager',
      description: 'AI-driven social media content creation, scheduling, and engagement optimization.',
      icon: <Share2 className="w-12 h-12 text-purple-600" />,
      features: ['Content Generation', 'Optimal Timing', 'Engagement Optimization', 'Brand Voice Consistency', 'Multi-platform', 'Analytics'],
      price: '$249/month',
      category: 'Marketing',
      benefits: ['300% engagement increase', '50% time savings', 'Consistent brand voice'],
      popular: true,
      setupTime: '4 hours',
      freeTrial: '14 days'
    },
    {
      title: 'Smart Inventory Optimizer',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      icon: <Package className="w-12 h-12 text-orange-600" />,
      features: ['Demand Forecasting', 'Automated Reordering', 'Cost Optimization', 'Waste Reduction', 'Supplier Integration', 'Real-time Tracking'],
      price: '$399/month',
      category: 'Operations',
      benefits: ['25% cost reduction', '99% stock accuracy', 'Zero stockouts'],
      popular: false,
      setupTime: '1 day',
      freeTrial: '21 days'
    },
    {
      title: 'Intelligent Email Marketing',
      description: 'AI-driven email campaigns with personalization, A/B testing, and performance optimization.',
      icon: <Mail className="w-12 h-12 text-indigo-600" />,
      features: ['Personalization Engine', 'A/B Testing', 'Send Time Optimization', 'Performance Analytics', 'Template Library', 'Automation Workflows'],
      price: '$179/month',
      category: 'Marketing',
      benefits: ['40% open rate increase', '60% click-through boost', 'Automated optimization'],
      popular: false,
      setupTime: '2 hours',
      freeTrial: '14 days'
    },
    {
      title: 'AI-Powered CRM Assistant',
      description: 'Intelligent customer relationship management with automated follow-ups and lead scoring.',
      icon: <Users className="w-12 h-12 text-cyan-600" />,
      features: ['Lead Scoring', 'Automated Follow-ups', 'Contact Management', 'Sales Pipeline', 'Integration Hub', 'Mobile Access'],
      price: '$329/month',
      category: 'Sales',
      benefits: ['35% conversion increase', '60% time savings', 'Better lead quality'],
      popular: true,
      setupTime: '6 hours',
      freeTrial: '30 days'
    },
    {
      title: 'Smart Project Manager',
      description: 'AI-enhanced project management with automated task allocation and progress tracking.',
      icon: <TrendingUp className="w-12 h-12 text-emerald-600" />,
      features: ['Task Automation', 'Progress Tracking', 'Resource Allocation', 'Deadline Management', 'Team Collaboration', 'Reporting'],
      price: '$279/month',
      category: 'Productivity',
      benefits: ['40% efficiency gain', 'Better project visibility', 'Reduced delays'],
      popular: false,
      setupTime: '3 hours',
      freeTrial: '14 days'
    },
    {
      title: 'AI Security Monitor',
      description: 'Automated security monitoring and threat detection for your digital assets.',
      icon: <Shield className="w-12 h-12 text-red-600" />,
      features: ['Threat Detection', 'Vulnerability Scanning', 'Incident Response', 'Compliance Monitoring', 'Real-time Alerts', 'Security Reports'],
      price: '$449/month',
      category: 'Security',
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Compliance assurance'],
      popular: false,
      setupTime: '1 day',
      freeTrial: '7 days'
    }
  ];

  const categories = ['All', 'Analytics', 'Productivity', 'Customer Experience', 'Marketing', 'Operations', 'Sales', 'Security'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SAAS Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Powerful, affordable software-as-a-service solutions for modern businesses
            </p>
            <p className="text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
              Transform your business operations with our innovative micro SAAS applications. 
              Each solution is designed to solve specific business challenges with AI-powered automation and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                to="#services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Browse Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Banner */}
      <section className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center">
              <Smartphone className="w-5 h-5 mr-2" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-semibold transition-colors duration-200 ${
                  category === 'All' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of micro SAAS applications designed to streamline your business operations
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border-2 ${
                service.popular ? 'border-blue-500' : 'border-gray-100'
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  {service.icon}
                  <div className="ml-4">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-green-600">{service.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-blue-500" />
                    <span>Setup: {service.setupTime}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Zap className="w-4 h-4 mr-2 text-green-500" />
                    <span>Trial: {service.freeTrial}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-4 mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
                    Start Free Trial
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Pay only for what you use, when you use it.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Individual</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">$99<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Up to 3 micro SAAS apps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Basic support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Standard features</span>
                </li>
              </ul>
              <button className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            
            <div className="bg-blue-600 text-white rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Business</h3>
              <div className="text-4xl font-bold mb-6">$299<span className="text-lg text-blue-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Unlimited micro SAAS apps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>Advanced features</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  <span>API access</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
            
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">Custom<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Custom solutions</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>Dedicated support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>White-label options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span>On-premise deployment</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Start your free trial today and experience the power of our micro SAAS solutions. 
            No credit card required, cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a 
              href="tel:+13024640950"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;