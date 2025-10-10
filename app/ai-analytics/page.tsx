'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'
const AiAnalyticsPage: React.FC = () => {
const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence','
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.','
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics','
      description: 'Comprehensive analytics dashboard with real-time data visualization.','
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']'
    },
    {
      icon: Target,
      title: 'Precision Targeting','
      description: 'Target specific goals and objectives with precision and accuracy.','
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']'
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization','
      description: 'Optimize your business growth with data-driven strategies.','
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']'
    },
    {
      icon: Globe,
      title: 'Real-Time Dashboards','
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.','
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']'
    },
    {
      icon: Shield,
      title: 'Data Security','
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.','
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support']'
    }
  ]
const benefits = [
    'Transform raw data into actionable insights','
    'Make data-driven decisions with confidence','
    'Identify trends and opportunities early','
    'Optimize business processes and workflows','
    'Reduce costs through intelligent automation','
    'Gain competitive advantage with advanced technology'
  ]
const useCases = [
    {
      title: 'Business Intelligence','
      description: 'Transform raw data into actionable business insights','
      icon: BarChart
    },
    {
      title: 'Predictive Analytics','
      description: 'Forecast future trends and customer behavior','
      icon: Brain
    },
    {
      title: 'Performance Monitoring','
      description: 'Track and optimize key performance indicators','
      icon: Target
    },
    {
      title: 'Customer Analytics','
      description: 'Understand customer behavior and preferences','
      icon: Users
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Analytics - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />"
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" /> " </Helmet>"
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"> " <div className="max-w-7xl mx-auto">"
            <div className="text-center"> " <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">"
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Analytics </span>"
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
                Transform your data into actionable insights with our advanced AI analytics platform.
                Make smarter decisions, predict trends, and optimize your business performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"> "
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />"
                </button>
                <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">"
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-7xl mx-auto"> " <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> "
                Powerful Analytics Features </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"> "
                Our AI analytics platform provides everything you need to unlock the power of your data </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"> " <div className="flex items-center mb-4">"
                    <feature.icon className="h-8 w-8 text-blue-400 mr-3" /> " <h3 className="text-xl font-semibold text-white">{feature.title}</h3> " </div>"
                  <p className="text-gray-300 mb-4">{feature.description}</p>"
                  <ul className="space-y-2">"
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">}}"
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />"
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">"
          <div className="max-w-7xl mx-auto"> " <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"> "
                Why Choose Our AI Analytics? </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"> "
                Experience the benefits of intelligent data analysis </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">"
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"> " <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />"
                  <p className="text-gray-300">{benefit}</p>"
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"> " <div className="max-w-7xl mx-auto">"
            <div className="text-center mb-16"> " <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
                Discover how AI analytics can transform your business
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">}}"
                  <div className="flex items-center mb-4"> " <useCase.icon className="h-8 w-8 text-blue-400 mr-3" />"
                    <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>"
                  </div>
                  <p className="text-gray-300">{useCase.description}</p> " </div>"
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">"
          <div className="max-w-4xl mx-auto text-center"> " <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
              Start your AI analytics journey today and unlock the full potential of your data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center"> "
                Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />"
              </button>
              <button className="border border-gray-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">"
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};
export default AiAnalyticsPage;