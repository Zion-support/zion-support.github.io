import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart3, TrendingUp, PieChart, Activity, Target, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Real-time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Leverage AI to predict future trends and make data-driven decisions.',
      benefits: ['Forecasting models', 'Trend analysis', 'Risk assessment', 'Performance optimization']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights with advanced visualization.',
      benefits: ['Interactive charts', 'Custom reports', 'Export capabilities', 'Collaborative sharing']
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Track and analyze system performance with comprehensive monitoring tools.',
      benefits: ['Real-time alerts', 'Performance metrics', 'Bottleneck identification', 'Capacity planning']
    }
  ];

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify opportunities and risks early',
    'Optimize business processes and performance',
    'Reduce costs through better resource allocation',
    'Improve customer satisfaction and retention',
    'Gain competitive advantage through insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group | Advanced Data Analytics Solutions</title>
        <meta name="description" content="Transform your data into actionable insights with our AI-powered analytics solutions. Real-time dashboards, predictive analytics, and advanced data visualization." />
        <meta name="keywords" content="AI analytics, data analytics, business intelligence, predictive analytics, data visualization, real-time dashboards" />
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI-powered analytics solutions. 
              Make smarter decisions, predict trends, and optimize your business performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-16 h-16 flex items-center justify-center mr-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Analytics?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics solutions help you unlock the full potential of your data and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <Target className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start leveraging the power of AI analytics to make better decisions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiAnalyticsPage;