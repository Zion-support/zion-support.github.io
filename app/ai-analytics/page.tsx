import React from 'react';
import { ArrowRight, CheckCircle, BarChart, Brain, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'AI-powered predictions to forecast trends and make data-driven decisions.',
      benefits: ['Future Trend Analysis', 'Risk Assessment', 'Demand Forecasting', 'Performance Prediction']
    },
    {
      icon: BarChart,
      title: 'Real-time Dashboards',
      description: 'Interactive dashboards with live data visualization and customizable metrics.',
      benefits: ['Live Data Updates', 'Custom Dashboards', 'Interactive Charts', 'Mobile Responsive']
    },
    {
      icon: TrendingUp,
      title: 'Advanced Reporting',
      description: 'Automated report generation with intelligent insights and recommendations.',
      benefits: ['Automated Reports', 'Smart Insights', 'Custom Formats', 'Scheduled Delivery']
    },
    {
      icon: Users,
      title: 'User Behavior Analysis',
      description: 'Deep insights into user behavior patterns and engagement metrics.',
      benefits: ['Behavior Tracking', 'Engagement Metrics', 'User Segmentation', 'Conversion Analysis']
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Analytics',
      description: 'Track sales performance, customer behavior, and inventory optimization.',
      metrics: ['300% increase in conversion rates', '45% reduction in cart abandonment']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure campaign effectiveness and optimize marketing spend.',
      metrics: ['250% ROI improvement', '60% better targeting accuracy']
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial performance and identify growth opportunities.',
      metrics: ['40% cost reduction', '85% faster financial reporting']
    },
    {
      title: 'Operational Analytics',
      description: 'Optimize business processes and improve operational efficiency.',
      metrics: ['70% process improvement', '50% time savings']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with intelligent analytics powered by cutting-edge AI technology.
          </p>
        </section>

        {/* Features Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI analytics platform provides comprehensive insights and intelligent recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <feature.icon className="w-12 h-12 text-cyan-400 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Use Cases</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how AI analytics can transform different aspects of your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our AI Analytics?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI analytics platform delivers actionable insights and measurable results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
                  <p className="text-gray-300">Process millions of data points in real-time</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Secure & Private</h3>
                  <p className="text-gray-300">Enterprise-grade security and data privacy</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                  <p className="text-gray-300">Track record of successful implementations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how AI analytics can transform your business and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiAnalyticsPage;