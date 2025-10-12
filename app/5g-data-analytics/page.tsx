import React from 'react';
import { CheckCircle, ArrowRight, BarChart3, Zap, Globe, Cpu, Users, Clock, Star, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const FiveGDataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Monitoring',
      description: 'Comprehensive real-time monitoring of 5G network performance and user experience.',
      features: ['Network monitoring', 'Performance metrics', 'Real-time alerts', 'Dashboard visualization', 'Custom reports'],
      pricing: 'Starting at $5,000/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Performance Analytics',
      description: 'Advanced analytics for network optimization and performance improvement.',
      features: ['Performance analysis', 'Trend identification', 'Optimization recommendations', 'Capacity planning', 'ROI analysis'],
      pricing: 'Starting at $8,000/month'
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Maintenance',
      description: 'AI-powered predictive maintenance to prevent network issues before they occur.',
      features: ['Predictive modeling', 'Anomaly detection', 'Maintenance scheduling', 'Risk assessment', 'Cost optimization'],
      pricing: 'Starting at $10,000/month'
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'Traffic Analysis',
      description: 'Deep analysis of network traffic patterns and user behavior for optimization.',
      features: ['Traffic analysis', 'User behavior insights', 'Capacity optimization', 'Quality of service metrics', 'Usage patterns'],
      pricing: 'Starting at $6,000/month'
    }
  ];

  const analyticsFeatures = [
    {
      title: 'Real-time Insights',
      description: 'Get instant insights into network performance and user experience',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'Predictive Analytics',
      description: 'Anticipate issues and optimize performance with AI-powered predictions',
      icon: <TrendingUp className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Custom Dashboards',
      description: 'Tailored dashboards for different stakeholders and use cases',
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />
    },
    {
      title: 'Automated Reporting',
      description: 'Automated reports and alerts for proactive network management',
      icon: <Clock className="w-6 h-6 text-orange-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900">
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced 5G data analytics platform with real-time monitoring, performance analytics, predictive maintenance, and traffic analysis for network optimization." />
        <meta name="keywords" content="5G data analytics, network monitoring, performance analytics, predictive maintenance, traffic analysis, 5G optimization" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Data Analytics
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced analytics platform for 5G networks with real-time monitoring, performance optimization, 
              predictive maintenance, and comprehensive insights to maximize your network efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/5g-implementation" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Back to 5G Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytics Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete data analytics solutions for 5G networks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
            {analyticsServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
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
                <div className="text-2xl font-bold text-white mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Analytics Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful features for comprehensive 5G network analytics
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your 5G Network?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get a free analytics assessment and discover how we can optimize your 5G network performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Assessment
                </Link>
                <Link 
                  to="/5g-implementation" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  View All 5G Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FiveGDataAnalyticsPage;