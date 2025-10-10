'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { CheckCircle, ArrowRight, PenTool, Zap, Users, BarChart3 } from 'lucide-react';
const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI algorithms that understand context, tone, and audience.',
      benefits: ['Context-aware writing', 'Multiple tones', 'Audience targeting', 'Quality optimization']
    },
    {
      title: 'Content Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with intelligent suggestions.',
      benefits: ['SEO optimization', 'Readability scoring', 'Engagement metrics', 'A/B testing']
    },
    {
      title: 'Multi-Format Support',
      description: 'Create content in various formats including blogs, social media, emails, and marketing copy.',
      benefits: ['Blog posts', 'Social media', 'Email campaigns', 'Marketing copy']
    }
  ];
  const benefits = [
    '10x faster content creation',
    'Improved SEO performance',
    'Consistent brand voice',
    'Multi-language support',
    'Content analytics',
    'Team collaboration'
  ];
  const stats = [
    { icon: <PenTool className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Articles Created' },
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '90%', label: 'Time Saved' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '500+', label: 'Happy Users' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '300%', label: 'Engagement Boost' }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer | Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered content writing tool by Zion Tech Group. Generate high-quality, SEO-optimized content at scale." />
        <meta name="keywords" content="AI content writer, content generation, SEO writing, content marketing, AI writing tool, Zion Tech Group" />
      </Helmet>
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Content Writer
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Solutions;
  </
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Create high-quality, engaging content at scale with our advanced AI-powered writing assistant
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Writing
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              View Demo;
  </
          </div>
        </div>
      </section>
              Try Demo
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Writing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Advanced solutions designed for modern business needs;
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              Everything you need to create compelling content
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Writer?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of our proven solutions;
  </
              Experience the benefits of AI-powered content creation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Transform your content creation with our AI Content Writer solutions today;
  </
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Free Trial;
  </
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Contact Sales;
  </
          </div>
        </div>
      </section>
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Content Writer;
  </
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent solutions powered by cutting-edge AI technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started;
  </
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  Learn More;
  </
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Powerful AI Features;
  </
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how our AI platform can revolutionize your business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of businesses already using our AI platform.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Start Your Free Trial;
  </
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
};
export default AiContentWriterPage;
  </button>
  </h2>
  </button>
  </button>
  </h1>
  </button>
  </button>
  </p>
  </p>
  </p>
  </button>
  </span>
  </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Create Amazing Content?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start creating high-quality content with our AI-powered writing assistant today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Writing Now
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default AIContentWriterPage;