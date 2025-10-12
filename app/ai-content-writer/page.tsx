import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Brain, Zap, Star, Users, Clock, Shield, Globe, FileText, BarChart3, Target } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-purple-500" />,
      title: 'AI-Powered Content Generation',
      description: 'Generate high-quality content using advanced AI models trained on millions of articles and marketing materials.'
    },
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'SEO Optimization',
      description: 'Automatically optimize content for search engines with keyword suggestions and readability improvements.'
    },
    {
      icon: <FileText className="w-6 h-6 text-green-500" />,
      title: 'Brand Voice Training',
      description: 'Train the AI to match your unique brand voice and tone across all content types.'
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: 'Multi-Language Support',
      description: 'Create content in 50+ languages with native-level quality and cultural adaptation.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-red-500" />,
      title: 'Content Analytics',
      description: 'Track content performance with detailed analytics and engagement metrics.'
    },
    {
      icon: <Clock className="w-6 h-6 text-cyan-500" />,
      title: 'Content Scheduling',
      description: 'Plan and schedule content across multiple platforms with automated publishing.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words/month',
        '5 brand voice profiles',
        'Basic SEO optimization',
        '3 languages',
        'Email support',
        'Content templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '50,000 words/month',
        'Unlimited brand voices',
        'Advanced SEO optimization',
        '10 languages',
        'Priority support',
        'Content calendar',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited words',
        'Custom AI training',
        'White-label solution',
        'All languages',
        'Dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Content Marketing Manager',
      content: 'AI Content Writer Pro has increased our content output by 300% while maintaining quality. The brand voice training is incredible.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Mike Chen',
      company: 'Startup Founder',
      content: 'As a non-writer, this tool has been a game-changer. I can now create professional content that converts.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Agency Owner',
      content: 'Our clients love the quality and speed. We can now handle 5x more content projects with the same team.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Writer Pro - Advanced AI Content Creation | Zion Tech Group</title>
        <meta name="description" content="Create high-quality, SEO-optimized content with AI Content Writer Pro. Brand voice training, multi-language support, and advanced analytics included." />
        <meta name="keywords" content="AI content writer, content creation, SEO optimization, brand voice, content marketing, AI writing tools" />
      </Helmet>

      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-500/20 rounded-full px-4 py-2 mb-6">
              <Brain className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-purple-300 text-sm font-medium">AI-Powered Content Creation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Content Writer
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Pro</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Create high-quality, SEO-optimized content at scale with our advanced AI writing assistant. 
              Train it to match your brand voice and watch your content strategy transform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">2,500+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Languages</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-gray-400">User Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful Features for Content Creators
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, optimize, and manage content at scale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your content needs. All plans include our core AI features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                  plan.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-6">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border border-white text-white hover:bg-white hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of content creators who trust AI Content Writer Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Start your free trial today and experience the power of AI-driven content creation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/micro-saas-services"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AIContentWriterPage;