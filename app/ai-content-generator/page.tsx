'use client';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  SparklesIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const AIContentGeneratorPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    'Unlimited content generation',
    'SEO optimization for all content',
    'Multi-language support (50+ languages)',
    'Brand voice training and customization',
    'Content templates and frameworks',
    'Plagiarism detection and originality scoring',
    'Social media post scheduling',
    'Blog post optimization',
    'Email marketing content',
    'Product descriptions and reviews',
    'API access for integrations',
    '24/7 customer support'
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and freelancers',
      features: [
        '1,000 content generations/month',
        'Basic SEO optimization',
        '5 languages supported',
        'Email support',
        'Basic templates'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        'Unlimited content generations',
        'Advanced SEO optimization',
        '50+ languages supported',
        'Brand voice training',
        'Priority support',
        'API access',
        'Advanced analytics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Pro',
        'Custom AI model training',
        'White-label solution',
        'Dedicated account manager',
        'Custom integrations',
        'Advanced security features',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      content: 'AI Content Generator Pro has revolutionized our content strategy. We\'ve increased our content output by 300% while maintaining quality.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Content Manager',
      company: 'Digital Agency',
      content: 'The SEO optimization feature is incredible. Our organic traffic has increased by 150% in just 3 months.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Writer',
      company: 'Independent',
      content: 'This tool has saved me hours of work every day. The quality of generated content is impressive.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead 
        title="AI Content Generator Pro - Advanced AI Content Creation Tool"
        description="Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced AI. Try our AI Content Generator Pro today!"
        keywords="AI content generator, content creation, SEO optimization, blog writing, social media content, marketing automation"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-slate-900 to-blue-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <SparklesIcon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                AI Content Generator <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pro</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Generate high-quality, SEO-optimized content for blogs, social media, and marketing materials using advanced artificial intelligence. Save time and boost your content marketing ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="#demo"
                  className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  Watch Demo
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10M+</div>
                  <div className="text-gray-300">Content Pieces Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-gray-300">Languages Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                  <div className="text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                  <div className="text-gray-300">Average ROI Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Content Creation</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and distribute high-quality content at scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 p-6 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group"
                >
                  <CheckCircleIcon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content creation needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-slate-800/50 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-xl shadow-cyan-500/20' 
                      : 'border-slate-700 hover:border-cyan-500'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to="/contact"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white'
                        : 'border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-white'
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
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Customers</span> Say
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their content creation process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-slate-800/50 rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
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
        <section className="py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Content Strategy</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start your free trial today and experience the power of AI-driven content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link 
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-300 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGeneratorPage;
