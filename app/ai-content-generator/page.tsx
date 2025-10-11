import React from 'react'
<<<<<<< HEAD
import Navigation from '../components/Navigation'import Footer from '../components/Footer'
import {  PenTool, Brain, Zap, Target, CheckCircle, Star, ArrowRight, Users, BarChart, Clock, FileText, Image, Video, Mic  } from 'lucide-react'const AiContentGeneratorPage: React.FC = () => {
=======
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'

const AiContentGeneratorPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

<<<<<<< HEAD
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
=======
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
    <>
      <Helmet>
        <title>Ai Content Generator - Zion Tech Group</title>
        <meta name="description" content="AI-powered ai content generator solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, ai, content, generator, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Ai Content Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered ai content generator solution for intelligent automation and optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
          </div>
        </section>

<<<<<<< HEAD
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
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Ai Content Generator?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
          </div>
        </section>

<<<<<<< HEAD
      {/* Content Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8"></section></section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Content Types
            </h2>
            <p className="text-xl text-gray-300"></p></p>
              Generate any type of content your business needs.
=======
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our Ai Content Generator and experience the future of intelligent automation.
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
<<<<<<< HEAD
          
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
=======
        </section>
      </div>
    </>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
  )
}

export default AiContentGeneratorPage