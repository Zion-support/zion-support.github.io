'use client';
import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  ChartBarIcon,
  CheckCircleIcon,
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CpuChipIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

const AIEmailOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Subject Lines',
      description: 'Generate compelling subject lines that increase open rates by up to 40% using advanced natural language processing.',
      benefits: ['40% higher open rates', 'A/B testing automation', 'Personalized recommendations', 'Real-time optimization']
    },
    {
      icon: ChartBarIcon,
      title: 'Send Time Optimization',
      description: 'AI analyzes recipient behavior patterns to determine the optimal send time for maximum engagement.',
      benefits: ['35% higher click rates', 'Personalized send times', 'Timezone optimization', 'Behavioral analysis']
    },
    {
      icon: EyeIcon,
      title: 'Content Optimization',
      description: 'Automatically optimize email content, formatting, and structure for better readability and engagement.',
      benefits: ['25% higher engagement', 'Mobile optimization', 'Readability scoring', 'Content suggestions']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Deliverability Protection',
      description: 'Advanced spam detection and deliverability optimization to ensure your emails reach the inbox.',
      benefits: ['99.5% deliverability rate', 'Spam score monitoring', 'Reputation management', 'ISP compliance']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10,000 emails/month',
        'Basic AI optimization',
        '5 email templates',
        'Email support',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100,000 emails/month',
        'Advanced AI features',
        'Unlimited templates',
        'Priority support',
        'Advanced analytics',
        'A/B testing',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited emails',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const optimizationFeatures = [
    { name: 'Subject Line Optimization', description: 'AI generates high-converting subject lines' },
    { name: 'Send Time Optimization', description: 'Optimal timing for each recipient' },
    { name: 'Content Personalization', description: 'Dynamic content based on user behavior' },
    { name: 'A/B Testing Automation', description: 'Automated testing of email variations' },
    { name: 'Mobile Optimization', description: 'Perfect rendering on all devices' },
    { name: 'Spam Score Analysis', description: 'Ensure inbox delivery' },
    { name: 'Engagement Prediction', description: 'Predict email performance before sending' },
    { name: 'List Segmentation', description: 'Smart audience targeting' },
    { name: 'Unsubscribe Optimization', description: 'Reduce unsubscribe rates' },
    { name: 'Click-Through Optimization', description: 'Maximize click-through rates' },
    { name: 'Conversion Tracking', description: 'Track email-to-sale conversions' },
    { name: 'Performance Analytics', description: 'Comprehensive email performance insights' }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'MarketingPro Inc.',
      role: 'Email Marketing Manager',
      content: 'AI Email Optimizer increased our open rates by 40% and click-through rates by 35%. The AI suggestions are spot-on and save us hours of work.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      company: 'E-commerce Solutions',
      role: 'Digital Marketing Director',
      content: 'The send time optimization feature is incredible. We now send emails when our customers are most likely to engage, resulting in 35% higher click rates.',
      rating: 5
    },
    {
      name: 'Amanda Foster',
      company: 'Growth Marketing Co.',
      role: 'VP of Marketing',
      content: 'Our email campaigns have never been more effective. The AI content optimization and A/B testing automation have transformed our email marketing strategy.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Email Optimizer - Smart Email Marketing Automation | Zion Tech Group"
        description="Boost email performance with AI-powered optimization. Increase open rates by 40%, click rates by 35%, and conversions with intelligent automation."
        keywords="email marketing, AI optimization, email automation, subject line optimization, email deliverability, marketing automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">AI-Powered Email Marketing</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  AI Email Optimizer
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email marketing with AI-powered optimization that increases open rates by 40% and click rates by 35%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">Higher Open Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">35%</div>
                  <div className="text-gray-300 text-sm">Higher Click Rates</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.5%</div>
                  <div className="text-gray-300 text-sm">Deliverability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">AI</div>
                  <div className="text-gray-300 text-sm">Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage advanced AI to optimize every aspect of your email marketing campaigns.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 mb-4">
                        {feature.description}
                      </p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimization Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Complete Optimization Suite</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to optimize your email marketing campaigns for maximum performance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {optimizationFeatures.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/20">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-300 transition-colors">
                    {feature.name}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your email marketing needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-green-500 shadow-green-500/20' 
                    : 'border-slate-700 hover:border-green-500 hover:shadow-green-500/20'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-green-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:from-green-700 hover:to-blue-700'
                      : 'border-2 border-green-400 text-green-300 hover:bg-green-400 hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                What Our <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of marketers who have transformed their email campaigns with AI optimization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-green-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-900/40 via-slate-900 to-blue-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Ready to Optimize Your Emails?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how AI can transform your email marketing performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIEmailOptimizerPage;