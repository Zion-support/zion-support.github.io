<<<<<<< HEAD
const benefits = [
  'Data-driven decision making',
  'Improved business performance',
  'Better customer insights',
  'Reduced operational costs',
  'Enhanced competitive advantage',
  'Automated reporting and analytics'
];
export default function DataAnalyticsServices() {
  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Data Analytics Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics,
                business intelligence, and AI-powered data solutions.
=======
import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Database, Brain, CheckCircle, ArrowRight } from 'lucide-react';

const analyticsServices = [
  {
    title: "Business Intelligence",
    description: "Transform data into actionable business insights",
    icon: BarChart3,
    features: ["Data visualization", "Custom dashboards", "Real-time reporting", "KPI tracking"],
    pricing: "$2,000 - $10,000/month"
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered predictive modeling and forecasting",
    icon: TrendingUp,
    features: ["Machine learning models", "Forecasting", "Risk analysis", "Trend prediction"],
    pricing: "$3,000 - $15,000/month"
  },
  {
    title: "Data Management",
    description: "Comprehensive data management and warehousing",
    icon: Database,
    features: ["Data warehousing", "ETL processes", "Data quality", "Integration"],
    pricing: "$1,500 - $8,000/month"
  },
  {
    title: "AI Analytics",
    description: "Advanced AI-powered analytics and insights",
    icon: Brain,
    features: ["AI algorithms", "Natural language processing", "Computer vision", "Deep learning"],
    pricing: "$4,000 - $20,000/month"
  }
];

export default function DataAnalyticsPage() {
  return (
    <>
      <Head>
        <title>Data Analytics Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive data analytics services including business intelligence, predictive analytics, data management, and AI-powered insights." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analytics</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with our comprehensive analytics 
                solutions and AI-powered intelligence.
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
              </p>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Data Analytics Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive data analytics services designed to unlock the value
                in your data and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-purple-600" />
=======

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {analyticsServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-pink-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Unlock Your Data?</h3>
                <p className="text-lg mb-6">
                  Let our data analytics experts help you transform your data
                  into powerful insights that drive business success.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

=======
        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Unlock Your Data's Potential
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our data analytics services can transform your business insights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
