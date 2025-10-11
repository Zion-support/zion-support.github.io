'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { BarChart, TrendingUp, Database, Brain, CheckCircle, ArrowRight, Star, Clock, Users, Target } from 'lucide-react';

const AiAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis'],
    },
    {
      icon: BarChart,
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive'],
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your business performance with AI-driven recommendations and insights.',
      benefits: ['Performance tracking', 'Optimization suggestions', 'ROI analysis', 'Growth strategies'],
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing'],
    },
    {
      icon: Eye,
      title: 'Visual Analytics',
      description: 'Transform complex data into intuitive visualizations and interactive charts.',
      benefits: ['Interactive charts', 'Custom visualizations', 'Data storytelling', 'Export capabilities'],
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Enterprise-grade security to protect your sensitive business data and analytics.',
      benefits: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance support'],
    },
  ];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]
  const useCases = [
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models to predict future trends and outcomes',
      benefits: ['95% accuracy in predictions', 'Real-time forecasting', 'Automated insights']
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Process and analyze large datasets with lightning-fast performance',
      benefits: ['Handle petabytes of data', 'Real-time processing', 'Scalable infrastructure']
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models tailored to your specific business needs',
      benefits: ['Custom model development', 'Continuous learning', 'Model optimization']
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      benefits: ['Interactive dashboards', 'Automated reporting', 'KPI tracking']
    }
  ];

  const useCases = [
    {
      title: 'Sales Forecasting',
      description: 'Predict sales trends and optimize inventory management',
      result: '40% improvement in forecast accuracy'
    },
    {
      title: 'Customer Behavior Analysis',
      description: 'Understand customer patterns and preferences',
      result: '60% increase in customer engagement'
    },
    {
      title: 'Risk Assessment',
      description: 'Identify potential risks and opportunities',
      result: '85% reduction in risk exposure'
    },
    {
      title: 'Market Analysis',
      description: 'Analyze market trends and competitive landscape',
      result: '50% faster market insights'
    }
  ];

  return (
    <React.Fragment>
      </React><Helmet>
        </Helmet><title>AI Analytics - Zion Tech Group</title>
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
      </Helmet>
      
      <Helmet>
        <title>AI Analytics - Zion Tech Group
<meta name="description" content="Advanced AI-powered analytics solution for modern businesses." />
        <meta name="keywords" content="AI analytics, artificial intelligence, data analytics, AI solutions, intelligent automation" />
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        </main></main><section className="relative py-20 px-4 sm: px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center">
              </div><h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Analytics
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent analytics powered by cutting-edge AI technology.
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                </div><button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More,
  </
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Analytics Features,
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI analytics platform can revolutionize your business intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  </div><div className="flex items-center mb-4">
                    </div><feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Get Started
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">Learn More
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful AI Analytics Features
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI analytics platform can revolutionize your business intelligence.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}
                  <p className="text-gray-600 mb-4">{feature.description}
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        </li><CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {benefit}
                    ))}
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Use Cases</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See how our AI analytics solutions have helped businesses across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 text-center">
                  <h3 className="text-lg font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{useCase.description}</p>
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-3">
                    <p className="text-cyan-400 font-semibold text-sm">{useCase.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Pricing</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your analytics needs. All plans include 24/7 support.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$299<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Up to 1M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Basic analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Email support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">$599<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Up to 10M data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Predictive analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Priority support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-300 text-center block">
                  Get Started
                </a>
              </div>
              
              <div className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-gray-600">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-cyan-400 mb-4">Custom</div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Unlimited data points
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Custom analytics platform
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    Machine learning models
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                    24/7 dedicated support
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition-colors text-center block">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-blue-600">
          </section><div className="
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Analytics?
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI analytics platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial
  </
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AiAnalyticsPage;
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">Start Your Free Trial
      <Footer />
  )
}
export default AiAnalyticsPage</div></div></div></div></div></div></div></div></div></button></button></button></p></p></p></p></h1></h2></h2></h3></ul></li></main></section></section></section>
