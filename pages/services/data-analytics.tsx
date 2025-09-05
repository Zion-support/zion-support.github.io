import React from 'react';
import Layout from '../../components/Layout';
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Transform raw data into actionable insights with powerful dashboards',
    features: ['Interactive Dashboards', 'Real-time Analytics', 'Custom Reports', 'Data Visualization']
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Build robust data pipelines and data warehouses',
    features: ['ETL/ELT Pipelines', 'Data Warehousing', 'Data Lake Solutions', 'Real-time Processing']
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Leverage machine learning for forecasting and trend analysis',
    features: ['Machine Learning Models', 'Predictive Modeling', 'Statistical Analysis', 'Risk Assessment']
  },
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Advanced analytics with artificial intelligence and automation',
    features: ['Natural Language Processing', 'Computer Vision', 'Anomaly Detection', 'Automated Insights']
  }
];

const benefits = [
  'Data-Driven Decision Making',
  'Real-time Business Insights',
  'Improved Operational Efficiency',
  'Enhanced Customer Experience',
  'Reduced Costs & Risks',
  'Competitive Advantage'
];

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive analytics solutions. Business intelligence, data engineering, and AI-powered analytics."
      keywords="data analytics, business intelligence, data engineering, predictive analytics, machine learning, data visualization"
    >
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Data Analytics
                <span className="block text-purple-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive analytics solutions. 
                From business intelligence to AI-powered analytics, we help you make data-driven decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Start Analytics Project
                </button>
                <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                  View Analytics Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Data Analytics Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics solutions to unlock the value in your data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Analytics Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise in delivering actionable insights from complex data
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Unlock the Power of Your Data
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let our data analytics experts help you transform your data into actionable business insights.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Analytics Journey
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}