'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SparklesIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ClockIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CogIcon,
  ShieldCheckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

const AIContentGenerator: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');
  const [contentType, setContentType] = useState('blog');
  const [topic, setTopic] = useState('');

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate AI content generation
    setTimeout(() => {
      setGeneratedContent(`# ${topic}\n\nThis is AI-generated content about ${topic}. The content is optimized for SEO and includes relevant keywords, engaging headlines, and actionable insights. Our AI analyzes trending topics and creates content that resonates with your target audience.\n\n## Key Benefits\n\n- High-quality, original content\n- SEO-optimized structure\n- Engaging and readable\n- Time-saving automation\n- Consistent brand voice\n\n## Next Steps\n\n1. Review the generated content\n2. Customize as needed\n3. Publish to your platform\n4. Track performance metrics`);
      setIsGenerating(false);
    }, 2000);
  };

  const features = [
    {
      icon: SparklesIcon,
      title: 'AI-Powered Generation',
      description: 'Advanced GPT-4 technology creates high-quality, original content tailored to your needs.',
      price: 'Included'
    },
    {
      icon: DocumentTextIcon,
      title: 'Multiple Content Types',
      description: 'Blog posts, social media, emails, product descriptions, and more.',
      price: 'Included'
    },
    {
      icon: ChartBarIcon,
      title: 'SEO Optimization',
      description: 'Automatically optimizes content for search engines with relevant keywords.',
      price: 'Included'
    },
    {
      icon: ClockIcon,
      title: 'Time Saving',
      description: 'Generate content 10x faster than manual writing.',
      price: 'Included'
    },
    {
      icon: UserGroupIcon,
      title: 'Team Collaboration',
      description: 'Share and collaborate on content with your team members.',
      price: 'Pro Plan'
    },
    {
      icon: GlobeAltIcon,
      title: 'Multi-Language',
      description: 'Generate content in 25+ languages for global reach.',
      price: 'Pro Plan'
    },
    {
      icon: CogIcon,
      title: 'Custom Templates',
      description: 'Create and save custom content templates for your brand.',
      price: 'Enterprise'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Plagiarism Check',
      description: 'Built-in plagiarism detection ensures 100% original content.',
      price: 'Pro Plan'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individuals and small businesses',
      features: [
        '10,000 words/month',
        '5 content types',
        'Basic SEO optimization',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '50,000 words/month',
        'All content types',
        'Advanced SEO optimization',
        'Team collaboration (5 users)',
        'Priority support',
        'Plagiarism check',
        'Multi-language support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations with advanced needs',
      features: [
        'Unlimited words',
        'All features included',
        'Custom templates',
        'Unlimited users',
        '24/7 phone support',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Content Marketing Manager',
      company: 'TechCorp Inc.',
      content: 'AI Content Generator has revolutionized our content strategy. We produce 5x more content with better quality and SEO performance.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'StartupXYZ',
      content: 'As a startup founder, I need to focus on growth, not content writing. This tool saves me 20 hours per week.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Director',
      company: 'Global Brands Ltd.',
      content: 'The multi-language feature is incredible. We can now create content for all our international markets effortlessly.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Content Generator Pro - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality, SEO-optimized content with our AI-powered content generator. Save time and boost your content marketing strategy." />
        <meta name="keywords" content="AI content generator, content creation, SEO content, blog writing, social media content, automated content" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">AI-Powered Content Creation</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Content Generator Pro
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Create high-quality, SEO-optimized content in minutes, not hours. Our advanced AI technology generates engaging content that drives traffic and conversions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25"
                >
                  Try Free Demo
                  <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
                </button>
                <button
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Pricing
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">10M+</div>
                  <div className="text-gray-400 text-sm">Words Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
                  <div className="text-gray-400 text-sm">Happy Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                  <div className="text-gray-400 text-sm">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
                  <div className="text-gray-400 text-sm">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Try Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Generator</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the power of AI content generation. Enter a topic and watch our AI create engaging content in seconds.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Content Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Content Type</label>
                        <select
                          value={contentType}
                          onChange={(e) => setContentType(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="blog">Blog Post</option>
                          <option value="social">Social Media</option>
                          <option value="email">Email</option>
                          <option value="product">Product Description</option>
                          <option value="ad">Advertisement</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                        <input
                          type="text"
                          value={topic}
                          onChange={(e) => setTopic(e.target.value)}
                          placeholder="Enter your topic here..."
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <button
                        onClick={handleGenerate}
                        disabled={!topic || isGenerating}
                        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isGenerating ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Generating...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center">
                            <SparklesIcon className="w-5 h-5 mr-2" />
                            Generate Content
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Generated Content</h3>
                    <div className="bg-slate-700 rounded-lg p-4 h-64 overflow-y-auto border border-slate-600">
                      {generatedContent ? (
                        <div className="prose prose-invert max-w-none">
                          <pre className="whitespace-pre-wrap text-sm text-gray-300">{generatedContent}</pre>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-gray-500">
                          <div className="text-center">
                            <DocumentTextIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                            <p>Generated content will appear here</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Powerful <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Everything you need to create, optimize, and manage content at scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-3 text-sm">
                    {feature.description}
                  </p>
                  <span className="text-xs text-purple-400 font-medium">{feature.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Simple <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your content needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-purple-500 shadow-lg shadow-purple-500/25' 
                    : 'border-slate-700 hover:border-purple-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                      : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
                  }`}>
                    Get Started
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
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                What Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Customers Say</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their content strategy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Start generating high-quality content today. No credit card required for the free trial.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/25">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIContentGenerator;
