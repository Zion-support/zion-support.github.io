'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Share2, TrendingUp, Users, BarChart, Clock, CheckCircle, Zap, Brain, ArrowRight, Star, Target, Globe, Phone, Mail, MapPin, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AISocialMediaManager: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Content Generation',
      description: 'Automatically create engaging posts, captions, and hashtags using advanced AI',
      benefits: ['100+ posts per day', 'Multi-platform optimization', 'Trending hashtag integration']
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Comprehensive social media analytics with AI-powered insights and recommendations',
      benefits: ['Real-time performance tracking', 'ROI measurement', 'Audience insights']
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'AI-optimized posting times for maximum engagement across all platforms',
      benefits: ['Optimal timing algorithms', 'Cross-platform coordination', 'Automated posting']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'AI-powered community management with automated responses and engagement',
      benefits: ['24/7 automated responses', 'Sentiment analysis', 'Crisis management']
    }
  ];

  const platforms = [
    { name: 'Instagram', icon: Instagram, color: 'text-pink-400', users: '2B+' },
    { name: 'Facebook', icon: Facebook, color: 'text-blue-400', users: '3B+' },
    { name: 'Twitter', icon: Twitter, color: 'text-cyan-400', users: '450M+' },
    { name: 'YouTube', icon: Youtube, color: 'text-red-400', users: '2.7B+' }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses and influencers',
      features: [
        '3 social media accounts',
        '50 posts per month',
        'Basic analytics',
        'AI content generation',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '10 social media accounts',
        'Unlimited posts',
        'Advanced analytics',
        'AI content generation',
        'Scheduling & automation',
        'Priority support',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations and agencies',
      features: [
        'Unlimited accounts',
        'Unlimited posts',
        'White-label solution',
        'Custom AI models',
        'Dedicated support',
        'API access',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Marketing Director',
      company: 'Fashion Forward',
      content: 'AI Social Media Manager increased our engagement by 300% and saved us 20 hours per week.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'CEO',
      company: 'TechStart Inc.',
      content: 'The AI content generation is incredible. Our social media presence has never been stronger.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Social Media Manager',
      company: 'Creative Agency',
      content: 'Finally, a tool that understands our brand voice and creates content that actually converts.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network particle-system">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
            <Share2 className="w-5 h-5 text-pink-400" />
            <span className="text-pink-400 text-sm font-medium">AI-Powered Social Media Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 cyber-text-enhanced neon-flicker-enhanced">
            AI Social Media Manager
          </h1>
          
          <p className="text-xl md:text-2xl text-pink-400 mb-8 font-medium cyber-glow-enhanced">
            Automate Your Social Media with AI
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your social media presence with AI-powered content generation, smart scheduling, 
            and automated engagement. Increase engagement by 300% and save 20+ hours per week.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="cyber-button px-8 py-4 text-lg"
              style={{background: 'linear-gradient(45deg, #ec4899, #8b5cf6)'}}
            >
              Start Free Trial
            </Link>
          </div>

          {/* Platform Support */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-6 text-center">
                <platform.icon className={`w-8 h-8 ${platform.color} mx-auto mb-3`} />
                <div className="text-white font-bold mb-1">{platform.name}</div>
                <div className="text-sm text-gray-400">{platform.users} users</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to revolutionize your social media strategy
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="cyber-card-enhanced holographic-card quantum-field p-8 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">300%</div>
              <div className="text-gray-300">Increase in Engagement</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-8 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">20+</div>
              <div className="text-gray-300">Hours Saved Per Week</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Content Approval Rate</div>
            </div>
            <div className="cyber-card-enhanced holographic-card quantum-field p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Automated Management</div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose the plan that fits your social media needs and budget
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card-enhanced holographic-card quantum-field p-8 relative ${
                plan.popular ? 'border-2 border-pink-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-400 to-purple-600 text-black px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-pink-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-400 to-purple-600 text-black hover:from-pink-500 hover:to-purple-700'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center neon-text">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join thousands of businesses who have transformed their social media with AI
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card-enhanced holographic-card quantum-field p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-pink-400">{testimonial.role}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card-enhanced holographic-card quantum-field p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses who have revolutionized their social media with AI. 
              Start your free trial today and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <Link
                to="/contact"
                className="cyber-button px-8 py-4 text-lg"
                style={{background: 'linear-gradient(45deg, #ec4899, #8b5cf6)'}}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AISocialMediaManager;