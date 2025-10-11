<<<<<<< HEAD
'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const PagePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';

const AiContentGeneratorPage: React.FC = () => {
=======
import React from 'react'
import Navigation from '../components/Navigation'import Footer from '../components/Footer'
import {  PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic  } from 'lucide-react'const AiContentGeneratorPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

<<<<<<< HEAD
  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Ai Content Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
=======
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '1,000 words/month',
        'Basic AI models',
        '5 content types',
        'Standard templates',
        'Email support',
        '1 user'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for content creators and agencies',
      features: [
        '10,000 words/month',
        'Advanced AI models',
        'All content types',
        'Custom templates',
        'Priority support',
        '3 users',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large teams and organizations',
      features: [
        'Unlimited words',
        'Premium AI models',
        'All features included',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations'
      ],
      popular: false
    }
  ]

  const stats = [
    { value: '10x', label: 'Faster Content Creation', icon: <Clock className="w-8 h-8 text-green-400" /&gt; },
    { value: '95%', label: 'Content Quality Score', icon: <Star className="w-8 h-8 text-blue-400" /&gt; },
    { value: '80%', label: 'Time Savings', icon: <Zap className="w-8 h-8 text-purple-400" /&gt; },
    { value: '50+', label: 'Content Types', icon: <FileText className="w-8 h-8 text-cyan-400" /&gt; }
  ]

  const contentTypes = [
    {
      title: 'Blog Posts',
      description: 'Long-form articles optimized for SEO and engagement',
      icon: <FileText className="w-8 h-8 text-green-400" /&gt;
    },
    {
      title: 'Social Media',
      description: 'Captions, posts, and stories for all platforms',
      icon: <Users className="w-8 h-8 text-blue-400" /&gt;
    },
    {
      title: 'Email Marketing',
      description: 'Newsletters, campaigns, and automated sequences',
      icon: <Target className="w-8 h-8 text-yellow-400" /&gt;
    },
    {
      title: 'Product Descriptions',
      description: 'Compelling product copy that converts',
      icon: <BarChart className="w-8 h-8 text-purple-400" /&gt;
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Manager, TechBlog',
      content: 'AI Content Generator increased our content output by 500% while maintaining quality.',
      rating: 5,
      company: 'TechBlog'
    },
    {
      name: 'Mike Chen',
      role: 'Marketing Director, E-commerce Plus',
      content: 'The SEO optimization feature improved our organic traffic by 200% in 3 months.',
      rating: 5,
      company: 'E-commerce Plus'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Founder, Creative Agency',
      content: 'We can now serve 3x more clients with the same team. Game-changing tool!',
      rating: 5,
      company: 'Creative Agency'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              AI <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></span></span>Content Generator</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Create high-quality content 10x faster with AI. Generate blogs, social media posts, 
              emails, and more with just a few clicks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"></button>
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
                Try Demo
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
=======
      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div></div>
            {stats.map((stat, index) => (
              <div key={index} className="text-center"></div></div>
                <div className="flex justify-center mb-4"></div></div>
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2"></div></div>
                  {stat.value}
                </div>
                <div className="text-gray-300"></div></div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Everything you need to create professional content at scale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4"></div></div>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white"></h3></h3>{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6"></p></p>{feature.description}</p>
                <ul className="space-y-2"></ul>
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Content Types
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Generate any type of content your business needs.
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
            </div>
          </div>
<<<<<<< HEAD
        </section>
<<<<<<< HEAD
      </div>
      
      <Footer />
    </>
=======
      </main>

      <Footer />
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  );
};
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div></div>
            {contentTypes.map((type, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300"></div></div>
                <div className="flex justify-center mb-4"></div></div>
                  {type.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{type.title}</h3>
                <p className="text-gray-300"></p></p>{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Simple Pricing
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Choose the plan that fits your content needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`bg-white/10" backdrop-blur-sm rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-cyan-400 bg-white/15' : ''
              }`}></div></div>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"&gt;</div&gt;
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium"&gt;</span&gt;
                      Most Popular
                    </span&gt;
                  </div&gt;
                )}
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></h3></h3>{plan.name}</h3>
                  <p className="text-gray-300 mb-4"></p></p>{plan.description}</p>
                  <div className="flex items-baseline justify-center"></div></div>
                    <span className="text-4xl font-bold text-white"></span></span>{plan.price}</span>
                    <span className="text-gray-300 ml-1"></span></span>{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="{`w-full" py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transform hover:scale-105' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                }`}></button>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Join thousands of content creators using our AI platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8"></div></div>
                <div className="flex items-center mb-4"></div></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic"></p></p>"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white"></div></div>{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm"></div></div>{testimonial.role}</div>
                  <div className="text-gray-400 text-sm"></div></div>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2></h2>
            Ready to Create Amazing Content?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p></p>
            Start your free trial today and experience the power of AI content generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"></button>
              <ArrowRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300"></button>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

export default AiContentGeneratorPage;