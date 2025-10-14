import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, CheckCircle, Star, Globe, Mail, Phone, Database, Settings, Monitor, Sparkles, Lightbulb } from "lucide-react";

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Monitor your data in real-time with advanced visualization tools and interactive dashboards.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered Insights',
      description: 'Get intelligent recommendations and predictions based on your data patterns and trends.'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: 'Data Integration',
      description: 'Connect multiple data sources and create unified views of your business metrics.'
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-500" />,
      title: 'Custom Dashboards',
      description: 'Build personalized dashboards tailored to your specific business needs and KPIs.'
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500" />,
      title: 'Performance Monitoring',
      description: 'Track system performance and identify bottlenecks with comprehensive monitoring tools.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-500" />,
      title: 'Automated Reports',
      description: 'Generate detailed reports automatically and schedule them for regular delivery.'
    }
  ];

  const benefits = [
    'Increase data-driven decision making by 85%',
    'Reduce reporting time by 70%',
    'Improve operational efficiency by 60%',
    'Enhance customer insights and satisfaction',
    'Streamline business processes',
    'Gain competitive advantage through data'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solutions for data-driven decision making." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-6">AI Analytics Solutions</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your data into actionable insights with our advanced AI-powered analytics platform. 
            Make smarter decisions faster with real-time data visualization and intelligent predictions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to unlock the full potential of your data
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Analytics?</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience measurable improvements in your business performance
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Contact our team to learn more about how our AI analytics solutions can transform your business.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Transform Your Data Today</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI analytics platform to make better decisions faster.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsPage;