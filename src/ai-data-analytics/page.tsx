import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, Database, Eye, CheckCircle, Star, ArrowRight, Zap, Target } from 'lucide-react';

const AIDataAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Deep insights from your data using cutting-edge AI algorithms and machine learning'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Modeling',
      description: 'Forecast future trends and outcomes with high accuracy using predictive analytics'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and analyze data from multiple sources and platforms'
    },
    {
      icon: Eye,
      title: 'Real-Time Monitoring',
      description: 'Monitor key metrics and KPIs in real-time with intelligent dashboards'
    }
  ];

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify hidden patterns and opportunities',
    'Predict future trends and outcomes',
    'Optimize business processes automatically',
    'Reduce manual reporting by 90%',
    'Increase operational efficiency by 40%'
  ];

  const services = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      price: 'Starting at $3,000/month'
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast trends and customer behavior with AI models',
      price: 'Starting at $4,500/month'
    },
    {
      title: 'Real-Time Dashboards',
      description: 'Monitor KPIs and metrics with intelligent dashboards',
      price: 'Starting at $2,500/month'
    },
    {
      title: 'Data Visualization',
      description: 'Create compelling visualizations that tell your data story',
      price: 'Starting at $1,800/month'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Data Analytics
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Unlock the power of your data with AI-driven analytics that reveal insights and drive intelligent decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/consultation"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Free Data Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Analytics Features</h2>
            <p className="text-xl text-gray-600">Powerful AI capabilities that transform your data into insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AI Data Analytics?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered analytics solutions help you make smarter decisions by uncovering
                hidden patterns and insights in your data that traditional analytics miss.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Analytics Impact</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Decision Speed</span>
                  <span className="text-2xl font-bold text-green-600">5x Faster</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Accuracy Improvement</span>
                  <span className="text-2xl font-bold text-blue-600">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="text-2xl font-bold text-purple-600">60%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Insight Discovery</span>
                  <span className="text-2xl font-bold text-orange-600">300%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Analytics Services</h2>
            <p className="text-xl text-gray-600">Comprehensive data analytics solutions for every business need</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-lg font-semibold text-blue-600 mb-4">{service.price}</div>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center block flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Analytics Process</h2>
            <p className="text-xl text-gray-600">How we transform your data into actionable insights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Collection</h3>
              <p className="text-gray-600 text-sm">Gather and integrate data from all your sources and systems</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Processing</h3>
              <p className="text-gray-600 text-sm">Clean, transform, and prepare data for AI analysis</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Analysis</h3>
              <p className="text-gray-600 text-sm">Apply advanced AI algorithms to uncover insights and patterns</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Insight Delivery</h3>
              <p className="text-gray-600 text-sm">Present actionable insights through intuitive dashboards and reports</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl mb-8">Contact us today to discover how AI analytics can transform your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/consultation"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Free Data Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIDataAnalyticsPage;