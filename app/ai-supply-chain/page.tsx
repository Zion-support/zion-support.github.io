'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Truck, Package, BarChart, Users, Clock, Shield, Brain, Zap, Target, Star, ArrowRight, Globe } from 'lucide-react';

const AISupplyChainPage: React.FC = () => {
  const supplyChainServices = [
    {
      title: 'AI Supply Chain Optimizer Pro',
      description: 'Advanced AI-powered supply chain optimization with demand forecasting, inventory management, and logistics automation.',
      icon: '🚚',
      price: '$499/month',
      features: [
        'Demand Forecasting & Planning',
        'Inventory Optimization',
        'Route Optimization',
        'Supplier Risk Assessment',
        'Cost Reduction Analysis',
        'Real-time Tracking',
        'Predictive Maintenance',
        'Sustainability Metrics'
      ],
      benefits: [
        'Reduce costs by 25-40%',
        'Improve delivery times by 35%',
        'Reduce inventory by 30%',
        'Increase efficiency by 50%',
        'Minimize supply disruptions'
      ],
      marketPrice: '$800-2,000/month',
      category: 'Supply Chain Management',
      technologies: ['Machine Learning', 'IoT Sensors', 'Blockchain', 'Python', 'React', 'AWS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-supply-chain-optimizer',
      popular: true,
      stats: {
        companies: '200+',
        costReduction: '35%',
        efficiencyGain: '50%',
        inventoryReduction: '30%'
      }
    },
    {
      title: 'Smart Warehouse Management AI',
      description: 'Intelligent warehouse automation with robotic integration, space optimization, and real-time inventory tracking.',
      icon: '🏭',
      price: '$399/month',
      features: [
        'Automated Inventory Tracking',
        'Space Optimization',
        'Robotic Integration',
        'Pick & Pack Optimization',
        'Quality Control AI',
        'Energy Management',
        'Safety Monitoring',
        'Performance Analytics'
      ],
      benefits: [
        'Increase throughput by 60%',
        'Reduce errors by 90%',
        'Optimize space utilization',
        'Improve worker safety'
      ],
      marketPrice: '$600-1,500/month',
      category: 'Warehouse Management',
      technologies: ['Computer Vision', 'Robotics', 'IoT', 'AI/ML', 'React', 'Python'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/smart-warehouse-management'
    },
    {
      title: 'AI Logistics Tracker',
      description: 'Real-time logistics tracking with predictive analytics, delay prevention, and automated customer notifications.',
      icon: '📦',
      price: '$199/month',
      features: [
        'Real-time Shipment Tracking',
        'Predictive Delay Detection',
        'Automated Notifications',
        'Route Optimization',
        'Carrier Performance Analysis',
        'Customs Documentation',
        'Insurance Claims Processing',
        'Customer Portal'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Reduce delivery delays by 40%',
        'Automate 80% of tracking tasks',
        'Increase delivery accuracy'
      ],
      marketPrice: '$300-800/month',
      category: 'Logistics Tracking',
      technologies: ['GPS Tracking', 'Machine Learning', 'Mobile Apps', 'React Native', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/ai-logistics-tracker'
    },
    {
      title: 'Supply Chain Risk Intelligence',
      description: 'AI-powered risk assessment and mitigation with supplier monitoring, disruption prediction, and contingency planning.',
      icon: '⚠️',
      price: '$299/month',
      features: [
        'Supplier Risk Assessment',
        'Disruption Prediction',
        'Alternative Sourcing',
        'Financial Risk Analysis',
        'Geopolitical Monitoring',
        'Contingency Planning',
        'Risk Mitigation Strategies',
        'Compliance Monitoring'
      ],
      benefits: [
        'Reduce supply disruptions by 70%',
        'Improve risk visibility',
        'Minimize financial losses',
        'Ensure business continuity'
      ],
      marketPrice: '$400-1,200/month',
      category: 'Risk Management',
      technologies: ['Risk Analytics', 'Machine Learning', 'Data Mining', 'Python', 'React'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950',
      link: 'https://ziontechgroup.com/supply-chain-risk-intelligence'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Supply Chain Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered supply chain solutions including optimization, warehouse management, logistics tracking, and risk intelligence. Transform your supply chain operations with cutting-edge technology." />
        <meta name="keywords" content="AI supply chain, supply chain optimization, warehouse management, logistics tracking, risk intelligence, supply chain technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Supply Chain Solutions
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Optimize Your Supply Chain with AI Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12">
              Advanced AI-powered supply chain solutions that optimize operations, 
              reduce costs, and improve efficiency. Transform your logistics with cutting-edge technology.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400">200+</div>
                <div className="text-gray-300">Companies</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400">35%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400">50%</div>
                <div className="text-gray-300">Efficiency Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400">30%</div>
                <div className="text-gray-300">Inventory Reduction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Demo
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Our AI Supply Chain Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supplyChainServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="text-6xl mb-6 text-center">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-cyan-400 text-center mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-center text-sm">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <TrendingUp className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and see how AI can revolutionize your supply chain operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex items-center text-white">
                <Phone className="w-6 h-6 mr-2 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center text-white">
                <Mail className="w-6 h-6 mr-2 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center text-white">
                <MapPin className="w-6 h-6 mr-2 text-cyan-400" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISupplyChainPage;