import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, BarChart, Brain, Target, Zap } from 'lucide-react';

const AIPredictiveAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      title: 'Advanced Predictive Modeling',
      description: 'Build sophisticated machine learning models to predict future trends, behaviors, and outcomes with high accuracy.',
      icon: '🔮',
      price: '$2,200/month',
      features: [
        'Time Series Forecasting',
        'Customer Behavior Prediction',
        'Risk Assessment Models',
        'Demand Forecasting',
        'Churn Prediction',
        'Real-time Predictions'
      ],
      benefits: [
        'Improve accuracy by 60-85%',
        'Reduce forecasting errors by 70%',
        'Enable proactive decision making',
        'Increase revenue by 25-40%'
      ],
      marketPrice: '$5,000-10,000/month',
      category: 'Predictive Analytics',
      technologies: ['Machine Learning', 'Deep Learning', 'Time Series', 'Statistical Modeling', 'Big Data'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Business Intelligence & Insights',
      description: 'Transform raw data into actionable insights with AI-powered analytics and visualization tools.',
      icon: '📊',
      price: '$1,800/month',
      features: [
        'Interactive Dashboards',
        'Automated Reporting',
        'Data Visualization',
        'Trend Analysis',
        'Performance Metrics',
        'Custom Analytics'
      ],
      benefits: [
        'Reduce reporting time by 80%',
        'Improve decision speed by 50%',
        'Identify hidden opportunities',
        'Optimize business processes'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Business Intelligence',
      technologies: ['Power BI', 'Tableau', 'Python', 'R', 'SQL', 'Cloud Analytics'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Real-time Analytics Platform',
      description: 'Monitor and analyze data streams in real-time to make instant decisions and respond to changes immediately.',
      icon: '⚡',
      price: '$2,500/month',
      features: [
        'Real-time Data Processing',
        'Stream Analytics',
        'Live Dashboards',
        'Alert Systems',
        'Anomaly Detection',
        'Scalable Infrastructure'
      ],
      benefits: [
        'Process millions of events/second',
        'Reduce response time by 90%',
        'Detect issues before they impact business',
        'Enable real-time optimization'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Real-time Analytics',
      technologies: ['Apache Kafka', 'Apache Spark', 'Redis', 'Elasticsearch', 'Kubernetes'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Predictive Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced predictive analytics solutions powered by AI. Forecast trends, predict behaviors, and make data-driven decisions with machine learning." />
        <meta name="keywords" content="predictive analytics, AI analytics, machine learning, forecasting, business intelligence, data science" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-predictive-analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Predictive Analytics</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of AI to predict future trends, behaviors, and outcomes. Make data-driven decisions with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Analytics Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered analytics services designed to unlock insights from your data.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
                          <TrendingUp className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Predict the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join industry leaders who trust our AI predictive analytics to make smarter decisions and stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
              >
                Start Your Analytics Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIPredictiveAnalyticsPage;