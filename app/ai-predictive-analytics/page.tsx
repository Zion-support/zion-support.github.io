import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, BarChart, Brain, Target, Shield, Clock, Users, ArrowRight } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Advanced Predictive Modeling',
      description: 'Build sophisticated predictive models using machine learning to forecast business outcomes with high accuracy.',
      icon: '📊',
      price: '$2,500/month',
      features: [
        'Custom Model Development',
        'Data Preprocessing',
        'Feature Engineering',
        'Model Training & Validation',
        'Performance Monitoring',
        'Continuous Learning'
      ],
      benefits: [
        'Achieve 90%+ prediction accuracy',
        'Reduce forecasting errors by 75%',
        'Enable proactive decision making',
        'Increase revenue by 25-40%'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Predictive Modeling',
      technologies: ['Machine Learning', 'Deep Learning', 'Time Series Analysis', 'Statistical Modeling', 'Python/R', 'Cloud Computing'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive dashboards with real-time predictive insights and automated alerts for immediate action.',
      icon: '📈',
      price: '$1,800/month',
      features: [
        'Real-time Data Processing',
        'Interactive Visualizations',
        'Custom Dashboards',
        'Automated Alerts',
        'Mobile Access',
        'API Integration'
      ],
      benefits: [
        'Monitor KPIs in real-time',
        'Respond to changes instantly',
        'Improve decision speed by 80%',
        'Reduce manual reporting by 90%'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Analytics Platform',
      technologies: ['React', 'D3.js', 'WebSockets', 'REST APIs', 'Real-time Processing', 'Cloud Infrastructure'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Customer Behavior Prediction',
      description: 'Predict customer actions, churn risk, and lifetime value using advanced behavioral analytics.',
      icon: '👥',
      price: '$1,200/month',
      features: [
        'Churn Prediction',
        'Lifetime Value Analysis',
        'Purchase Probability',
        'Segmentation Models',
        'Personalization Engine',
        'A/B Testing Framework'
      ],
      benefits: [
        'Reduce churn by 30-50%',
        'Increase customer lifetime value by 40%',
        'Improve targeting accuracy by 60%',
        'Boost conversion rates by 25%'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Customer Analytics',
      technologies: ['Machine Learning', 'Customer Data Platform', 'Behavioral Analytics', 'Personalization', 'CRM Integration', 'Marketing Automation'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  const industries = [
    {
      title: 'Financial Services',
      description: 'Risk assessment, fraud detection, and market prediction',
      icon: '🏦',
      results: ['95% fraud detection', '60% risk reduction', '$5M saved annually']
    },
    {
      title: 'E-commerce',
      description: 'Demand forecasting, inventory optimization, and customer behavior',
      icon: '🛒',
      results: ['40% inventory reduction', '25% sales increase', '90% demand accuracy']
    },
    {
      title: 'Healthcare',
      description: 'Patient outcome prediction, resource optimization, and treatment planning',
      icon: '🏥',
      results: ['30% better outcomes', '50% cost reduction', '80% resource efficiency']
    },
    {
      title: 'Manufacturing',
      description: 'Predictive maintenance, quality control, and supply chain optimization',
      icon: '🏭',
      results: ['70% downtime reduction', '45% quality improvement', '35% cost savings']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered predictive analytics. Achieve 90%+ prediction accuracy, reduce forecasting errors by 75%, and increase revenue by 25-40%." />
        <meta name="keywords" content="predictive analytics, AI analytics, machine learning, forecasting, business intelligence, data science" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-analytics" />
      </Helmet>
      
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Predictive Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of AI to predict future outcomes, optimize decisions, and drive business growth with advanced predictive analytics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Predictive Analytics Services</h2>
              <p className="text-xl text-gray-300">Advanced AI-powered analytics solutions for data-driven decision making</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-3xl font-bold text-cyan-400">${service.price.replace('$', '').replace('/month', '')}</span>
                      <span className="text-sm text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400 line-through">Market: {service.marketPrice}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-300">See how predictive analytics transforms different industries</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-3xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <ul className="space-y-2">
                    {industry.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-sm text-cyan-400 flex items-center">
                        <ArrowRight className="w-3 h-3 mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Predict Your Future Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders using our AI predictive analytics to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default AIPredictiveAnalyticsPage;