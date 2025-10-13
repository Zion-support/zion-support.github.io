import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Database, 
  Cpu, 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Globe
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI Analytics',
      description: 'Transform your data into actionable insights with our advanced AI analytics platform.',
      icon: <BarChart3 className="w-8 h-8" />,
      path: '/ai-analytics',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards']
    },
    {
      title: 'AI Automation',
      description: 'Streamline your business processes with intelligent automation solutions.',
      icon: <Zap className="w-8 h-8" />,
      path: '/ai-automation',
      features: ['Workflow automation', 'Process optimization', 'Smart scheduling']
    },
    {
      title: 'AI Content Generation',
      description: 'Create high-quality content at scale with our AI-powered content generation tools.',
      icon: <Sparkles className="w-8 h-8" />,
      path: '/ai-content-generation',
      features: ['Blog posts', 'Social media content', 'Marketing copy']
    },
    {
      title: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent chatbots and support systems.',
      icon: <Users className="w-8 h-8" />,
      path: '/ai-customer-service',
      features: ['24/7 support', 'Natural language processing', 'Sentiment analysis']
    },
    {
      title: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI-driven analytics.',
      icon: <Database className="w-8 h-8" />,
      path: '/ai-data-analytics',
      features: ['Data visualization', 'Pattern recognition', 'Trend analysis']
    },
    {
      title: 'AI Marketing',
      description: 'Optimize your marketing campaigns with AI-powered insights and automation.',
      icon: <TrendingUp className="w-8 h-8" />,
      path: '/ai-marketing',
      features: ['Campaign optimization', 'Audience targeting', 'ROI analysis']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, automation, content generation, and more. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, content generation" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {' '}Transform Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive AI solutions designed to meet your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Start Your AI Journey
                </Link>
                <Link
                  to="/case-studies"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AIServicesPage;
