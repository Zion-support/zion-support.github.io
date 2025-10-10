'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, Target, Rocket } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular?: boolean;
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['AI-powered writing', 'Multiple content types', 'SEO optimization', 'Brand voice customization'],
      price: '$29/month',
      popular: true,
      category: 'Content'
    },
    {
      id: '2',
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$99/month',
      category: 'Security'
    },
    {
      id: '3',
      icon: <BarChart3 className="w-8 h-8 text-purple-500" />,
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$49/month',
      category: 'Productivity'
    },
    {
      id: '4',
      icon: <Cloud className="w-8 h-8 text-cyan-500" />,
      title: 'Cloud Cost Optimizer',
      description: 'Automatically optimize your cloud infrastructure costs with intelligent recommendations.',
      features: ['Cost analysis', 'Automated optimization', 'Budget alerts', 'Usage insights'],
      price: '$79/month',
      category: 'Cloud'
    },
    {
      id: '5',
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'Customer Support AI',
      description: 'Intelligent customer support chatbot with natural language processing and sentiment analysis.',
      features: ['24/7 support', 'Multi-language support', 'Sentiment analysis', 'Escalation management'],
      price: '$39/month',
      category: 'Support'
    },
    {
      id: '6',
      icon: <TrendingUp className="w-8 h-8 text-red-500" />,
      title: 'Analytics Dashboard',
      description: 'Comprehensive business analytics with real-time insights and predictive modeling.',
      features: ['Real-time analytics', 'Predictive modeling', 'Custom dashboards', 'Data visualization'],
      price: '$59/month',
      category: 'Analytics'
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless team coordination'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-500" />,
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      content: 'The AI Content Generator has revolutionized our content marketing. We can now produce high-quality content at scale.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Systems',
      content: 'The Security Monitoring Suite gives us peace of mind. We can detect and respond to threats in real-time.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'InnovateLabs',
      content: 'Project Management Pro has streamlined our workflow. The AI-powered task allocation is incredibly efficient.',
      rating: 5
    }
  ];

  const categories = ['All', 'Content', 'Security', 'Productivity', 'Cloud', 'Support', 'Analytics'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Specialized Software Tools</title>
        <meta name="description" content="Discover our collection of specialized micro SaaS solutions designed to solve specific business challenges with AI, automation, and modern technology." />
        <meta name="keywords" content="micro SaaS, specialized software, AI tools, business automation, productivity tools, cloud solutions" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Specialized software tools for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of specialized software tools designed to solve specific business challenges with AI, automation, and modern technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              Explore Solutions
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our specialized tools are designed to solve specific problems with precision and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of specialized tools designed to enhance your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:border-blue-400/50 ${
                  product.popular
                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/25'
                    : 'border-white/20'
                }`}
              >
                {product.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-semibold py-2 px-4 rounded-full text-center mb-6 w-fit">
                    Most Popular
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  {product.icon}
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.title}</h3>
                    <span className="text-sm text-gray-400">{product.category}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-2xl font-bold text-white">{product.price}</div>
                  <div className="text-sm text-gray-400">per month</div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">What Our Users Say</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our micro SaaS solutions are helping businesses achieve their goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using our micro SaaS solutions today and see the difference they can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105">
              <Rocket className="w-5 h-5" />
              Start Free Trial
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
              <Users className="w-5 h-5" />
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;