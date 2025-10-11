import React from 'react';
import { CheckCircle, ArrowRight, BarChart, FileText, Clock, Zap, TrendingUp, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIAutomatedReportingPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'Real-time Analytics',
      description: 'Get instant insights from your data with AI-powered real-time analytics and reporting.',
      benefits: ['Live data processing', 'Instant insights', 'Custom dashboards', 'Alert system']
    },
    {
      icon: <FileText className="w-8 h-8 text-green-500" />,
      title: 'Automated Report Generation',
      description: 'Generate comprehensive reports automatically with AI-driven analysis and formatting.',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Brand customization']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and patterns using advanced machine learning algorithms.',
      benefits: ['Trend forecasting', 'Pattern recognition', 'Risk assessment', 'Performance prediction']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Team Collaboration',
      description: 'Share insights and collaborate on reports with your team in real-time.',
      benefits: ['Shared dashboards', 'Comment system', 'Version control', 'Access management']
    }
  ];

  const stats = [
    { number: '95%', label: 'Time Saved' },
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '24/7', label: 'Monitoring' },
    { number: '50+', label: 'Report Types' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Automated Reporting - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with AI-powered automated reporting. Generate comprehensive reports, real-time analytics, and predictive insights." />
        <meta name="keywords" content="AI reporting, automated reports, data analytics, business intelligence, predictive analytics" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              AI Automated Reporting
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Transform your data into actionable insights with AI-powered automated reporting. Generate comprehensive reports, real-time analytics, and predictive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/ai-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View AI Services
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Powerful AI-driven reporting capabilities for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Ready to Automate Your Reporting?</h2>
              <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Let's discuss how AI-powered reporting can transform your data analysis and decision-making process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/micro-saas-services" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Explore Micro SAAS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAutomatedReportingPage;
