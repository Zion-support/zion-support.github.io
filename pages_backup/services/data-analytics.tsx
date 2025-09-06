import React from 'react';


  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting dashboards for data-driven decisions'
  },
  {
    icon: Database,
    title: 'Data Warehousing',
    description: 'Centralized data storage and management solutions'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Machine learning models for forecasting and trend analysis'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Artificial intelligence for automated data analysis and insights'
  },
  {
    icon: CheckCircle,
    title: 'Real-time Analytics',
    description: 'Live data processing and real-time business intelligence'
  },
  {
    icon: ArrowRight,
    title: 'Data Visualization',
    description: 'Interactive charts, graphs, and visual data representations'
  }
];


  return (
    <Layout
      title="Data Analytics Services - Zion Tech Group"
      description="Transform your data into actionable insights with our comprehensive data analytics services. Business intelligence, predictive analytics, and AI-powered insights."
      keywords="data analytics, business intelligence, data warehousing, predictive analytics, data visualization, AI insights"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
=======
  {
    icon: BarChart3,
    title: 'Business Intelligence',
    description: 'Advanced analytics and reporting dashboards for data-driven decisions'
  },
  {
    icon: Database,
    title: 'Data Warehousing',
    description: 'Centralized data storage and management solutions'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Machine learning models for forecasting and trend analysis'
  },
  {
    icon: Brain,
    title: 'AI-Powered Insights',
    description: 'Artificial intelligence for automated data analysis and insights'
  },
  {
    icon: CheckCircle,
    title: 'Real-time Analytics',
    description: 'Live data processing and real-time business intelligence'
  },
  {
    icon: ArrowRight,
    title: 'Data Visualization',
    description: 'Interactive charts, graphs, and visual data representations'
  }
];
const benefits = [
  'Data-driven decision making',
  'Improved business performance',
  'Better customer insights',
  'Reduced operational costs',
  'Enhanced competitive advantage',
  'Automated reporting and analytics'
];
export default function DataAnalyticsServices() {

export default function DataAnalyticsPage() {

export default function DataAnalyticsPage() {
  
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        <section className="bg-gradient-to-r from-purple-600 to-pink-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Data Analytics Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform your data into actionable insights with advanced analytics,
                business intelligence, and AI-powered data solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>


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


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>


=======
        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Our Data Analytics Services?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our data analytics experts help you transform raw data into
                  actionable insights that drive business growth and innovation.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
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


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-c7b5
        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our data analytics team to discuss your specific requirements
              and discover how we can help unlock the value in your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Contact Analytics Team
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Analytics Guide
              </button>
            </div>
          </div>
        </section>
      </div>


>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
  );
