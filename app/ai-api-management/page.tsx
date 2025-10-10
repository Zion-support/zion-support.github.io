'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {

  const features = [
    {
      title: 'Intelligent API Monitoring',
      description: 'Real-time monitoring and analytics for all your APIs with AI-powered insights and anomaly detection.',
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts'],

    },

    {
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']
    },
    {];];
  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI API Management | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered API management solutions by Zion Tech Group. Intelligent monitoring, security, and optimization for your APIs." />
        <meta name="keywords" content="API management, AI solutions, API monitoring, rate limiting, API security, Zion Tech Group" />

      </Helmet>
      <Navigation />{/* Hero Section */}</Navigation>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">AI-Powered API Management
</h1>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">Intelligent API management with AI-driven monitoring, security, and optimization for enterprise-grade performance</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Start Free Trial</button>
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">View Demo,</button>
  </
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</div>
              <div key={index}, className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powerful Features</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive API management with AI-powered intelligence</p>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
              <div key={index}, className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                    <li key={benefitIndex}, className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the benefits of our proven solutions</p>
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => (</div>
              <div key={index}, className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            </h2>
            <p className="text-xl text-gray-300 mb-8">Contact our experts to discuss your API management requirements and get started today.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">Contact Us</button>
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">Learn More</button>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  ),
};

export default AIApiManagementPage;
