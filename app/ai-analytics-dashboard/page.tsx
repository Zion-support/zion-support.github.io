'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  BarChart3,
  TrendingUp,
  PieChart,
  Activity,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Zap,
  Shield,
  Brain,
  BarChart,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const AIAnalyticsDashboardPage: React.FC = () => {
  const features = [
    {
      icon: Activity,
      title: 'Real-time Analytics',
      description: 'Monitor your business performance with live data updates and instant insights across all key metrics.',
      benefits: ['Live data streaming', 'Instant updates', 'Real-time alerts', 'Performance monitoring']
    },
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Leverage AI to forecast trends, identify opportunities, and make data-driven decisions.',
      benefits: ['Trend forecasting', 'Opportunity identification', 'Risk assessment', 'Strategic planning']
    },
    {
      icon: BarChart3,
      title: 'Custom Dashboards',
      description: 'Create personalized dashboards tailored to your business needs and KPIs.',
      benefits: ['Custom widgets', 'Drag-and-drop interface', 'Multiple layouts', 'Role-based access']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Set, monitor, and achieve your business objectives with intelligent goal tracking.',
      benefits: ['Smart goal setting', 'Progress tracking', 'Achievement alerts', 'Performance insights']
    }]
  ];

  const benefits = [
    'Reduce data analysis time by 90%',
    'Increase decision-making speed by 75%',
    'Improve forecast accuracy by 60%',
    'Boost operational efficiency by 40%',
    'Enhance strategic planning capabilities']
  ];

  const useCases = [
    {
      title: 'Business Intelligence',
      description: 'Transform raw data into actionable business insights',
      icon: '📊'
    },
    {
      title: 'Marketing Analytics',
      description: 'Track campaign performance and optimize marketing ROI',
      icon: '📈'
    },
    {
      title: 'Financial Analysis',
      description: 'Monitor financial health and identify growth opportunities',
      icon: '💰'
    },
    {
      title: 'Operations Monitoring',
      description: 'Track operational metrics and optimize processes',
      icon: '⚙️'
    }]
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard - Zion Tech Group</title>
        <meta name="description" content="Transform your data into actionable insights with our advanced AI Analytics Dashboard. Real-time analytics, predictive modeling, and custom dashboards for better business decisions." />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Analytics
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into actionable insights with our advanced AI Analytics Dashboard. 
              Real-time analytics, predictive modeling, and custom dashboards for better business decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Analyzing
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful Analytics Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that makes data analysis accessible and actionable
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Analytics?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  </div><div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Perfect for businesses of all sizes and industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group text-center">
                  </div><div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start making data-driven decisions with our AI analytics platform today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AIAnalyticsDashboardPage;