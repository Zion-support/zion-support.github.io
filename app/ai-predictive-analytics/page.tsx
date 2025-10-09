import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart, Target, Zap, Brain, Database } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Demand Forecasting',
      description: 'Predict future demand with advanced machine learning models',
      icon: BarChart,
      features: ['Time Series Analysis', 'Seasonal Pattern Recognition', 'External Factor Integration', 'Real-time Updates'],
      benefits: ['Improve Forecast Accuracy by 60%', 'Reduce Inventory Costs by 25%', 'Optimize Supply Chain', 'Increase Revenue by 30%'],
      price: 'Starting at $1,500/month'
    },
    {
      title: 'Customer Lifetime Value Prediction',
      description: 'Identify high-value customers and predict their future behavior',
      icon: Target,
      features: ['Customer Segmentation', 'Churn Prediction', 'Upselling Opportunities', 'Retention Strategies'],
      benefits: ['Increase CLV by 40%', 'Reduce Churn by 35%', 'Improve Marketing ROI', 'Personalize Customer Experience'],
      price: 'Starting at $1,200/month'
    },
    {
      title: 'Risk Assessment & Fraud Detection',
      description: 'Advanced risk modeling and real-time fraud prevention',
      icon: Brain,
      features: ['Real-time Risk Scoring', 'Anomaly Detection', 'Pattern Recognition', 'Automated Alerts'],
      benefits: ['Detect 99.9% of Fraud', 'Reduce False Positives by 80%', 'Prevent Financial Losses', 'Compliance Assurance'],
      price: 'Starting at $2,000/month'
    },
    {
      title: 'Sales Forecasting',
      description: 'Accurate sales predictions to optimize revenue planning',
      icon: TrendingUp,
      features: ['Pipeline Analysis', 'Conversion Probability', 'Revenue Projections', 'Performance Tracking'],
      benefits: ['Improve Sales Accuracy by 50%', 'Optimize Resource Allocation', 'Increase Win Rates', 'Better Planning'],
      price: 'Starting at $1,800/month'
    },
    {
      title: 'Market Trend Analysis',
      description: 'Predict market trends and identify business opportunities',
      icon: Database,
      features: ['Market Sentiment Analysis', 'Competitive Intelligence', 'Trend Identification', 'Opportunity Scoring'],
      benefits: ['Identify New Opportunities', 'Stay Ahead of Competition', 'Optimize Market Timing', 'Strategic Planning'],
      price: 'Starting at $1,600/month'
    },
    {
      title: 'Operational Efficiency Prediction',
      description: 'Predict and optimize operational performance metrics',
      icon: Zap,
      features: ['Performance Modeling', 'Bottleneck Identification', 'Resource Optimization', 'Efficiency Scoring'],
      benefits: ['Improve Efficiency by 45%', 'Reduce Operational Costs', 'Optimize Resource Usage', 'Predict Maintenance Needs'],
      price: 'Starting at $1,400/month'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced predictive analytics solutions using AI and machine learning. Forecast demand, predict customer behavior, and optimize business performance." />
        <meta name="keywords" content="predictive analytics, AI forecasting, machine learning, demand forecasting, customer analytics, risk assessment" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              AI Predictive Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with advanced predictive analytics powered by AI
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Accuracy Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">25%</div>
                <div className="text-gray-300">Cost Reduction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Fraud Detection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-orange-400 mb-2">40%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="text-white font-medium">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="text-white font-medium">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="text-white font-medium">Middletown, DE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Our Predictive Analytics Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-green-600 mb-4">{service.price}</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center">
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Predict Your Future Success?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let our predictive analytics experts help you unlock the power of your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;