import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Users, TrendingUp, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AILogisticsPage: React.FC = () => {
  const logisticsServices = [
    {
      title: 'AI Route Optimization Pro',
      description: 'Intelligent route planning with real-time traffic analysis, fuel optimization, and delivery time prediction.',
      icon: '🗺️',
      price: '$299/month',
      features: [
        'Real-time traffic analysis',
        'Fuel consumption optimization',
        'Delivery time prediction',
        'Multi-vehicle coordination',
        'Dynamic rerouting',
        'Cost reduction analytics'
      ],
      benefits: [
        'Reduce fuel costs by 25%',
        'Improve delivery efficiency by 40%',
        'Decrease delivery time by 30%',
        'Optimize vehicle utilization'
      ],
      marketPrice: '$600-1200/month',
      technologies: ['Machine Learning', 'Google Maps API', 'Python', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Warehouse Management System',
      description: 'Smart warehouse operations with inventory optimization, automated picking, and predictive maintenance.',
      icon: '📦',
      price: '$399/month',
      features: [
        'Inventory optimization',
        'Automated picking algorithms',
        'Predictive maintenance',
        'Space utilization optimization',
        'Real-time tracking',
        'Performance analytics'
      ],
      benefits: [
        'Increase warehouse efficiency by 50%',
        'Reduce inventory costs by 30%',
        'Minimize picking errors by 80%',
        'Optimize space utilization'
      ],
      marketPrice: '$800-1500/month',
      technologies: ['IoT Sensors', 'Machine Learning', 'React', 'Python', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Supply Chain Visibility',
      description: 'End-to-end supply chain tracking with real-time monitoring, risk assessment, and predictive analytics.',
      icon: '🔍',
      price: '$249/month',
      features: [
        'Real-time shipment tracking',
        'Risk assessment algorithms',
        'Predictive delay detection',
        'Supplier performance monitoring',
        'Compliance tracking',
        'Automated alerts'
      ],
      benefits: [
        'Improve visibility by 90%',
        'Reduce supply chain risks by 60%',
        'Decrease delays by 45%',
        'Enhance supplier relationships'
      ],
      marketPrice: '$500-1000/month',
      technologies: ['Blockchain', 'IoT', 'Machine Learning', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Demand Forecasting Engine',
      description: 'Advanced demand prediction with seasonal analysis, market trends, and inventory optimization.',
      icon: '📊',
      price: '$199/month',
      features: [
        'Seasonal demand analysis',
        'Market trend prediction',
        'Inventory optimization',
        'Supplier coordination',
        'Price elasticity analysis',
        'Automated reordering'
      ],
      benefits: [
        'Improve forecast accuracy by 70%',
        'Reduce stockouts by 60%',
        'Optimize inventory levels by 40%',
        'Minimize overstock situations'
      ],
      marketPrice: '$400-800/month',
      technologies: ['Time Series Analysis', 'Machine Learning', 'Python', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Fleet Management Suite',
      description: 'Intelligent fleet operations with vehicle tracking, maintenance scheduling, and driver optimization.',
      icon: '🚛',
      price: '$179/month',
      features: [
        'Real-time vehicle tracking',
        'Predictive maintenance',
        'Driver behavior analysis',
        'Fuel efficiency optimization',
        'Route performance analytics',
        'Compliance monitoring'
      ],
      benefits: [
        'Reduce maintenance costs by 35%',
        'Improve fuel efficiency by 20%',
        'Enhance driver safety by 50%',
        'Optimize fleet utilization'
      ],
      marketPrice: '$350-700/month',
      technologies: ['IoT', 'Machine Learning', 'React', 'Node.js', 'MongoDB'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Last-Mile Delivery Optimizer',
      description: 'Smart last-mile delivery with dynamic routing, customer preferences, and delivery time optimization.',
      icon: '🏠',
      price: '$149/month',
      features: [
        'Dynamic delivery routing',
        'Customer preference learning',
        'Delivery time optimization',
        'Real-time customer updates',
        'Failed delivery prediction',
        'Cost optimization'
      ],
      benefits: [
        'Improve delivery success rate by 25%',
        'Reduce delivery costs by 30%',
        'Enhance customer satisfaction by 40%',
        'Optimize delivery windows'
      ],
      marketPrice: '$300-600/month',
      technologies: ['Machine Learning', 'Maps API', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Logistics Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered logistics solutions for supply chain optimization, route planning, warehouse management, and fleet operations. Transform your logistics operations." />
        <meta name="keywords" content="AI logistics, supply chain optimization, route planning, warehouse management, fleet management, demand forecasting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Logistics Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
                Revolutionary AI-powered logistics solutions for supply chain optimization, route planning, and warehouse management. Streamline your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  ✉️ Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI Logistics Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology combined with deep logistics expertise to optimize your supply chain operations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Optimization</h3>
                <p className="text-gray-600">Intelligent algorithms for maximum efficiency</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Tracking</h3>
                <p className="text-gray-600">Monitor and optimize operations in real-time</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                <p className="text-gray-600">Reduce operational costs by up to 40%</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Anticipate issues and optimize proactively</p>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Logistics Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered logistics tools for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {logisticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-orange-600 text-orange-600 py-2 px-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your Logistics Operations?
            </h2>
            <p className="text-xl mb-8 text-orange-100">
              Contact our AI logistics experts for a free consultation and custom optimization strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+13024640950"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-orange-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AILogisticsPage;