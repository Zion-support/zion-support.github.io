'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, TrendingUp, Target, BarChart, CheckCircle, AlertTriangle, Star, Zap, Shield, Clock, Users, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Eye, Sparkles } from 'lucide-react';

const AISEOOptimizer: React.FC = () => {
  const [urlInput, setUrlInput] = useState('');
  const [seoAnalysis, setSeoAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSEOAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI SEO analysis
    setTimeout(() => {
      setSeoAnalysis({
        overallScore: 78,
        technical: 85,
        content: 72,
        performance: 80,
        mobile: 90,
        issues: [
          { type: 'error', message: 'Missing meta description', priority: 'high' },
          { type: 'warning', message: 'Images missing alt text', priority: 'medium' },
          { type: 'info', message: 'Consider adding more internal links', priority: 'low' }
        ],
        suggestions: [
          'Optimize page title for target keywords',
          'Improve page loading speed',
          'Add structured data markup',
          'Create more engaging content'
        ],
        keywords: [
          { keyword: 'ai seo optimizer', volume: 1200, difficulty: 65, opportunity: 'high' },
          { keyword: 'seo automation', volume: 800, difficulty: 45, opportunity: 'medium' },
          { keyword: 'ai marketing tools', volume: 1500, difficulty: 70, opportunity: 'high' }
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your website for SEO opportunities and issues',
      benefits: ['Real-time SEO analysis', 'Competitor analysis', 'Trend identification']
    },
    {
      icon: Target,
      title: 'Keyword Research',
      description: 'Intelligent keyword discovery and optimization suggestions based on search trends',
      benefits: ['Long-tail keyword suggestions', 'Search volume analysis', 'Competition analysis']
    },
    {
      icon: BarChart,
      title: 'Performance Tracking',
      description: 'Monitor your SEO performance with detailed analytics and reporting',
      benefits: ['Rank tracking', 'Traffic analysis', 'Conversion tracking']
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'AI automatically optimizes your content and technical SEO elements',
      benefits: ['Content optimization', 'Technical fixes', 'Schema markup']
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and bloggers',
      features: [
        'Up to 5 websites',
        'Basic keyword research',
        'Monthly SEO reports',
        'Email support',
        'Core optimization features'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25 websites',
        'Advanced keyword research',
        'Weekly SEO reports',
        'Priority support',
        'Competitor analysis',
        'Custom optimization rules'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'For large organizations and SEO agencies',
      features: [
        'Unlimited websites',
        'Advanced AI features',
        'Real-time monitoring',
        '24/7 dedicated support',
        'White-label reports',
        'API access'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Organic Traffic by 150%',
      description: 'Our AI optimization strategies deliver measurable results'
    },
    {
      icon: Clock,
      title: 'Save 80% SEO Time',
      description: 'Automated analysis and optimization reduce manual work'
    },
    {
      icon: Target,
      title: 'Higher Search Rankings',
      description: 'AI-driven strategies improve your search visibility'
    },
    {
      icon: BarChart,
      title: 'Better ROI',
      description: 'Track and measure your SEO success with detailed analytics'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered SEO analysis and optimization tool. Increase organic traffic by 150% and save 80% SEO time with intelligent automation." />
        <meta name="keywords" content="ai seo optimizer, seo automation, keyword research, seo analysis, search engine optimization, ai marketing" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            AI-powered SEO analysis and optimization tool that increases organic traffic by 150% 
            and saves 80% of your SEO time with intelligent automation.
          </p>
          
          {/* Live Demo */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Analyze Your Website SEO</h3>
            <div className="space-y-4">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="Enter your website URL for AI SEO analysis..."
                className="w-full p-4 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
              />
              <button
                onClick={handleSEOAnalysis}
                disabled={isAnalyzing || !urlInput.trim()}
                className="cyber-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAnalyzing ? 'Analyzing SEO...' : 'Analyze SEO with AI'}
              </button>
            </div>
            
            {seoAnalysis && (
              <div className="mt-6 p-6 bg-slate-800/50 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-4">SEO Analysis Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{seoAnalysis.overallScore}%</div>
                    <div className="text-sm text-gray-300">Overall Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{seoAnalysis.technical}%</div>
                    <div className="text-sm text-gray-300">Technical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{seoAnalysis.content}%</div>
                    <div className="text-sm text-gray-300">Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{seoAnalysis.performance}%</div>
                    <div className="text-sm text-gray-300">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{seoAnalysis.mobile}%</div>
                    <div className="text-sm text-gray-300">Mobile</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="text-md font-semibold text-white mb-2">Issues Found:</h5>
                    <div className="space-y-2">
                      {seoAnalysis.issues.map((issue, index) => (
                        <div key={index} className={`flex items-center space-x-2 p-2 rounded ${
                          issue.priority === 'high' ? 'bg-red-500/20' :
                          issue.priority === 'medium' ? 'bg-yellow-500/20' : 'bg-blue-500/20'
                        }`}>
                          {issue.priority === 'high' ? <AlertTriangle className="w-4 h-4 text-red-400" /> :
                           issue.priority === 'medium' ? <AlertTriangle className="w-4 h-4 text-yellow-400" /> :
                           <CheckCircle className="w-4 h-4 text-blue-400" />}
                          <span className="text-sm text-gray-300">{issue.message}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-md font-semibold text-white mb-2">Keyword Opportunities:</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {seoAnalysis.keywords.map((keyword, index) => (
                        <div key={index} className="bg-slate-700/50 p-3 rounded-lg">
                          <div className="font-medium text-white">{keyword.keyword}</div>
                          <div className="text-sm text-gray-300">Volume: {keyword.volume.toLocaleString()}</div>
                          <div className="text-sm text-gray-300">Difficulty: {keyword.difficulty}%</div>
                          <div className={`text-sm ${
                            keyword.opportunity === 'high' ? 'text-green-400' :
                            keyword.opportunity === 'medium' ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {keyword.opportunity.charAt(0).toUpperCase() + keyword.opportunity.slice(1)} Opportunity
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Advanced AI SEO Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI SEO Optimizer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your SEO Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-400' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                  <span className="text-gray-300">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Plan - AI SEO Optimizer`}
                  className="w-full cyber-button text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses using our AI SEO optimizer to increase organic traffic.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISEOOptimizer;