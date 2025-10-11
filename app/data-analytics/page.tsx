import React from 'react';
import { CheckCircle, ArrowRight, BarChart, TrendingUp, Database, PieChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const DataAnalyticsPage: React.FC = () => {
  const services = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable insights with our advanced BI solutions.',
      features: ['Interactive Dashboards', 'Real-time Reporting', 'Data Visualization', 'KPI Tracking'],
      pricing: 'Starting at $1,500/month'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and behaviors using machine learning algorithms.',
      features: ['Demand Forecasting', 'Customer Behavior Analysis', 'Risk Assessment', 'Trend Analysis'],
      pricing: 'Starting at $2,000/month'
    },
    {
      icon: <Database className="w-8 h-8 text-purple-500" />,
      title: 'Data Management',
      description: 'Clean, organize, and optimize your data for better analysis.',
      features: ['Data Cleaning', 'Data Integration', 'Data Warehousing', 'Data Quality'],
      pricing: 'Starting at $1,200/month'
    },
    {
      icon: <PieChart className="w-8 h-8 text-orange-500" />,
      title: 'Custom Analytics',
      description: 'Tailored analytics solutions designed for your specific business needs.',
      features: ['Custom Dashboards', 'Advanced Analytics', 'API Integration', 'Automated Reports'],
      pricing: 'Starting at $2,500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Data Analytics Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced data analytics solutions including business intelligence, predictive analytics, and custom reporting." />
        <meta name="keywords" content="data analytics, business intelligence, predictive analytics, data visualization, reporting, dashboards" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Data Analytics Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Turn your data into actionable insights with our advanced analytics and business intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Analyzing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Our Analytics Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Comprehensive data analytics solutions to drive informed decision-making
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {services.map((service, index) => (
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
                <div className="text-green-400 font-semibold mb-4">{service.pricing}</div>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-green-400 hover:text-green-300 font-semibold transition-colors"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Unlock Your Data's Potential</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let our experts help you transform your data into actionable business insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Your Analytics Journey
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
      </section>
    </div>
  );
};

export default DataAnalyticsPage;