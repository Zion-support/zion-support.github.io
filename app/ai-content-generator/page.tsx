import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CheckCircle, ArrowRight, Phone, Mail, ExternalLink, Star, Users, Clock, Shield, Zap, BarChart, Target, Award, Globe, Download, Play, Code, Database, Cloud, Lock, Settings, TrendingUp, DollarSign, Calendar, MessageSquare, Share2, Eye, Search, Filter, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIContentGeneratorPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('pro');

  const features = [
    'Multi-format content generation (blogs, social media, emails, ads)',
    'SEO optimization with keyword research integration',
    'Brand voice customization and tone adjustment',
    'Plagiarism detection and originality scoring',
    'Multi-language support (50+ languages)',
    'Content calendar and scheduling',
    'Team collaboration tools',
    'Analytics and performance tracking',
    'API integration for existing workflows',
    'Custom template creation'
  ];

  const benefits = [
    'Save 80% time on content creation',
    'Increase content output by 500%',
    'Improve SEO rankings by 40%',
    'Reduce content costs by 60%',
    'Maintain consistent brand voice',
    'Scale content production effortlessly'
  ];

  const capabilities = [
    'Blog post generation (500-3000 words)',
    'Social media content creation',
    'Email marketing campaigns',
    'Product descriptions',
    'Ad copy generation',
    'Press releases',
    'Technical documentation',
    'Creative writing'
  ];

  const useCases = [
    'Marketing agencies scaling content production',
    'E-commerce businesses creating product descriptions',
    'Bloggers and content creators',
    'SaaS companies needing documentation',
    'Real estate agents creating property listings',
    'Restaurants updating menus and descriptions'
  ];

  const technologies = [
    'GPT-4 and Claude AI models',
    'Natural Language Processing',
    'Machine Learning algorithms',
    'RESTful API architecture',
    'React and Node.js frontend',
    'PostgreSQL database',
    'Redis caching',
    'AWS cloud infrastructure'
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Digital Marketing Agency",
      content: "AI Content Generator Pro has revolutionized our content production. We're now creating 5x more content with better quality and consistency.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Store",
      content: "The product description generation feature alone has saved us 20 hours per week. Our conversion rates have improved by 35%.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Tech Startup",
      content: "Perfect for our technical documentation needs. The AI understands our industry jargon and creates accurate, helpful content.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 29,
      period: 'month',
      description: 'Perfect for individuals and small teams',
      features: [
        '10,000 words per month',
        '5 content templates',
        'Basic SEO optimization',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Professional',
      price: 97,
      period: 'month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '100,000 words per month',
        'Unlimited templates',
        'Advanced SEO optimization',
        'Priority support',
        '5 user accounts',
        'Team collaboration',
        'Analytics dashboard',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 299,
      period: 'month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited words',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Unlimited users',
        'Custom integrations',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: Eye },
    { id: 'features', name: 'Features', icon: CheckCircle },
    { id: 'pricing', name: 'Pricing', icon: DollarSign },
    { id: 'testimonials', name: 'Testimonials', icon: Star },
    { id: 'demo', name: 'Demo', icon: Play }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content at scale with our AI Content Generator Pro. Create blogs, social media posts, emails, and more with advanced AI technology." />
        <meta name="keywords" content="AI content generator, content creation, blog writing, social media content, email marketing, SEO content" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold">Micro SAAS Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Content Generator <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pro</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Generate high-quality content at scale with advanced AI technology. Create blogs, social media posts, emails, and more with 80% time savings and 500% increased output.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>50+ Languages Supported</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>SEO Optimized</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>Plagiarism Detection</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#demo"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Try Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">AI Content Generator Pro</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-cyan-400 text-sm mb-2">Blog Post Generated:</div>
                      <div className="text-white text-sm">"10 Essential Digital Marketing Strategies for 2024"</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-cyan-400 text-sm mb-2">Social Media Post:</div>
                      <div className="text-white text-sm">"🚀 Transform your business with AI-powered content creation..."</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="text-cyan-400 text-sm mb-2">Email Subject:</div>
                      <div className="text-white text-sm">"Boost Your ROI with Our AI Content Solutions"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Content <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Creation Process</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI Content Generator Pro uses cutting-edge natural language processing to create engaging, SEO-optimized content that resonates with your audience and drives results.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Zap className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
                  <p className="text-gray-300">Generate high-quality content in seconds, not hours. Our AI processes your requirements and delivers ready-to-publish content.</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">SEO Optimized</h3>
                  <p className="text-gray-300">Every piece of content is optimized for search engines with keyword research integration and readability optimization.</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Plagiarism Free</h3>
                  <p className="text-gray-300">Advanced originality detection ensures all content is unique and original, protecting your brand reputation.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Key Capabilities</h3>
                  <div className="space-y-4">
                    {capabilities.map((capability, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h4 className="text-xl font-bold text-white mb-4">Perfect For</h4>
                  <div className="space-y-3">
                    {useCases.map((useCase, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Features</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to create, manage, and optimize content at scale with AI-powered intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                        <p className="text-gray-300 text-sm">Advanced AI technology ensures high-quality, relevant content every time.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-2xl p-12 text-center border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-6">Technology Stack</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {technologies.map((tech, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                      <Code className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                      <span className="text-white text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'pricing' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your content creation needs. All plans include our core features with no hidden fees.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {pricingPlans.map((plan) => (
                  <div key={plan.id} className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400' : 'border-white/20'
                  } relative`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-cyan-400 mb-2">
                        ${plan.price}
                        <span className="text-lg text-gray-400">/{plan.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`/contact?plan=${plan.id}`}
                      className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white hover:from-cyan-700 hover:to-purple-700'
                          : 'bg-slate-800 text-white hover:bg-slate-700'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-gray-300 mb-4">Need a custom solution? We offer enterprise plans tailored to your needs.</p>
                <a
                  href="tel:+13024640950"
                  className="text-cyan-400 hover:text-cyan-300 font-semibold"
                >
                  Contact us for custom pricing
                </a>
              </div>
            </div>
          )}

          {activeTab === 'testimonials' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Clients Say</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of satisfied customers who have transformed their content creation process.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                        <span className="text-white font-bold">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'demo' && (
            <div className="space-y-16">
              <div className="text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Try Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Live Demo</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Experience the power of AI content generation with our interactive demo. See how easy it is to create professional content.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
                <div className="text-center mb-8">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo</h3>
                  <p className="text-gray-300 mb-6">Try our AI Content Generator with sample prompts and see the results instantly.</p>
                  <a
                    href="https://ziontechgroup.com/demo/ai-content-generator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Launch Demo
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Content Creation?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using AI Content Generator Pro to scale their content production and drive better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:content@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIContentGeneratorPage;