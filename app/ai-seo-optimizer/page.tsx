import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Zap, TrendingUp, Shield, BarChart, Clock, CheckCircle, ArrowRight, Star, Award, Brain, Target, Globe, Monitor } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Discover high-value keywords and search trends using advanced AI algorithms and competitor analysis.',
      color: 'text-blue-400'
    },
    {
      icon: Brain,
      title: 'Content Optimization',
      description: 'Get AI-powered suggestions to optimize your content for better search rankings and user engagement.',
      color: 'text-purple-400'
    },
    {
      icon: TrendingUp,
      title: 'Rank Tracking',
      description: 'Monitor your search rankings across multiple keywords and search engines with real-time updates.',
      color: 'text-green-400'
    },
    {
      icon: Target,
      title: 'Competitor Analysis',
      description: 'Analyze your competitors\' SEO strategies and identify opportunities to outperform them.',
      color: 'text-orange-400'
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track your SEO performance with detailed reports and actionable insights for improvement.',
      color: 'text-cyan-400'
    },
    {
      icon: Shield,
      title: 'Technical SEO',
      description: 'Automatically identify and fix technical SEO issues that impact your search visibility.',
      color: 'text-pink-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$89',
      period: '/month',
      description: 'Perfect for small websites',
      features: [
        '1 website',
        '100 keywords tracked',
        'Basic AI suggestions',
        'Email support',
        'Monthly reports'
      ],
      color: 'border-blue-400',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Professional',
      price: '$179',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '5 websites',
        '500 keywords tracked',
        'Advanced AI features',
        'Priority support',
        'Weekly reports',
        'Competitor analysis'
      ],
      color: 'border-purple-400',
      buttonColor: 'bg-purple-600 hover:bg-purple-700',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$349',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited websites',
        'Unlimited keywords',
        'Custom AI models',
        '24/7 dedicated support',
        'Daily reports',
        'White-label solution'
      ],
      color: 'border-orange-400',
      buttonColor: 'bg-orange-600 hover:bg-orange-700'
    }
  ];

  const testimonials = [
    {
      name: 'James Wilson',
      company: 'E-commerce Store',
      role: 'Marketing Director',
      content: 'Our organic traffic increased by 200% in 6 months. The AI suggestions helped us identify content gaps we never knew existed.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Digital Agency',
      role: 'SEO Manager',
      content: 'We manage 50+ client websites. This tool helps us scale our SEO efforts and deliver better results faster.',
      rating: 5
    },
    {
      name: 'Michael Davis',
      company: 'SaaS Company',
      role: 'Growth Marketing Lead',
      content: 'The competitor analysis feature is game-changing. We discovered new keyword opportunities that our competitors missed.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            AI-Powered SEO Optimization
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI SEO Optimizer
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Dominate search results with AI-powered SEO
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Get AI-powered SEO insights, keyword research, content optimization, and rank tracking. 
            Boost your search visibility and drive more organic traffic with intelligent optimization.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free SEO Audit
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">200%</div>
              <div className="text-gray-300 text-sm">Traffic Increase</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300 text-sm">Faster Rankings</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Keywords Tracked</div>
            </div>
            <div className="quantum-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Advanced SEO Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Everything you need to optimize your search visibility
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className={`w-12 h-12 ${feature.color} mb-4`}>
                  <feature.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Start with a free SEO audit, scale as you grow
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 energy-pulse relative ${plan.color} ${plan.popular ? 'ring-2 ring-purple-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 ${plan.buttonColor} text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center`}>
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Success Stories
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            See how businesses are dominating search results with AI SEO
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="quantum-card p-12 energy-pulse">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start with a free SEO audit. No credit card required. See how AI can transform your search visibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto"
              >
                📞 Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISEOOptimizerPage;