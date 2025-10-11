import React from 'react';
import { CheckCircle, BarChart3, TrendingUp, Database, ArrowRight, Users, Clock, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataAnalyticsPage: React.FC = () => {
  const analyticsServices = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced BI dashboards and reports.',
      features: ['Interactive dashboards', 'Custom reports', 'Data visualization', 'KPI tracking'],
      pricing: 'Starting at $2,000/month',
      duration: 'Ongoing'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using machine learning and statistical models.',
      features: ['Predictive modeling', 'Trend analysis', 'Risk assessment', 'Forecasting'],
      pricing: 'Starting at $3,500/month',
      duration: 'Ongoing'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Warehousing',
      description: 'Centralized data storage and management for efficient analytics and reporting.',
      features: ['Data integration', 'ETL processes', 'Data quality', 'Scalable storage'],
      pricing: 'Starting at $1,500/month',
      duration: 'Ongoing'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor and analyze data in real-time for immediate insights and decision making.',
      features: ['Real-time processing', 'Live dashboards', 'Instant alerts', 'Stream analytics'],
      pricing: 'Starting at $2,500/month',
      duration: 'Ongoing'
    }
  ];

  const industries = [
    {
      title: 'E-commerce',
      description: 'Customer behavior analysis, sales forecasting, and inventory optimization.',
      icon: '🛒'
    },
    {
      title: 'Healthcare',
      description: 'Patient data analysis, treatment outcomes, and operational efficiency.',
      icon: '🏥'
    },
    {
      title: 'Finance',
      description: 'Risk assessment, fraud detection, and investment analysis.',
      icon: '💰'
    },
    {
      title: 'Manufacturing',
      description: 'Quality control, predictive maintenance, and supply chain optimization.',
      icon: '🏭'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics services including business intelligence, predictive analytics, data warehousing, and real-time analytics. Transform your data into insights." />
        <meta name="keywords" content="data analytics, business intelligence, predictive analytics, data warehousing, real-time analytics, data science" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Data Analytics Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your data into actionable insights with our advanced analytics solutions. 
              Make data-driven decisions that drive business growth and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Analytics Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>

          {/* Industries Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Tailored analytics solutions for various industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{industry.title}</h3>
                  <p className="text-gray-300 text-sm">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Analytics Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Analytics Services</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive data analytics solutions to unlock your data's potential
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {analyticsServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
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
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{service.pricing}</span>
                    <span className="text-sm text-gray-400">{service.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Unlock Your Data's Potential?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our data analytics services can help you make better decisions 
                and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Analytics Consultation
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
        </div>
      </main>
    </div>
  );
};

export default DataAnalyticsPage;
