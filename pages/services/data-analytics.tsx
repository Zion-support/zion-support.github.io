import React from 'react';
import Layout from '../../components/Layout';
import { BarChart3, Database, TrendingUp, Brain, CheckCircle, Zap } from 'lucide-react';

const services = [
  {
    title: "Data Strategy",
    description: "Develop comprehensive data strategies to drive business growth",
    icon: Database,
    features: ["Data Architecture", "Data Governance", "Data Quality", "Data Integration"]
  },
  {
    title: "Business Intelligence",
    description: "Transform raw data into actionable business insights",
    icon: BarChart3,
    features: ["Dashboard Development", "Report Automation", "KPI Tracking", "Performance Analytics"]
  },
  {
    title: "Advanced Analytics",
    description: "Leverage AI and machine learning for predictive insights",
    icon: Brain,
    features: ["Predictive Modeling", "Machine Learning", "Statistical Analysis", "Data Mining"]
  },
  {
    title: "Data Visualization",
    description: "Create compelling visualizations to communicate insights",
    icon: TrendingUp,
    features: ["Interactive Dashboards", "Custom Visualizations", "Real-time Analytics", "Mobile Reporting"]
  }
];

const analyticsFeatures = [
  "Real-time Data Processing",
  "Advanced Machine Learning",
  "Interactive Dashboards",
  "Automated Reporting",
  "Data Quality Assurance",
  "Scalable Infrastructure"
];

export default function DataAnalyticsPage() {
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive analytics services. Business intelligence, machine learning, and data visualization solutions."
      keywords="data analytics, business intelligence, machine learning, data visualization, predictive analytics, data strategy"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Data Analytics
                <span className="block text-green-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Transform your data into actionable insights that drive business growth
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Start Analytics Project
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Analytics Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Data Analytics Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive analytics solutions to unlock the power of your data
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analytics Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Advanced Analytics Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our analytics platform includes cutting-edge features for maximum insight extraction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {analyticsFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock Your Data's Potential
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Start making data-driven decisions with our comprehensive analytics solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Get Analytics Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}