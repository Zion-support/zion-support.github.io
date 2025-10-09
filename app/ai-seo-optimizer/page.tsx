'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, CheckCircle, AlertTriangle, Zap, Star, Users, Clock, Shield, Brain, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Settings, BarChart3, FileText, Search as SearchIcon, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, TrendingUp, Target, Globe } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const [urlInput, setUrlInput] = useState('');
  const [seoAnalysis, setSeoAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeSEO = async () => {
    setIsAnalyzing(true);
    // Simulate AI SEO analysis
    setTimeout(() => {
      setSeoAnalysis({
        overallScore: 78,
        technical: 85,
        content: 72,
        backlinks: 65,
        mobile: 90,
        speed: 88,
        issues: [
          { type: 'error', message: 'Missing meta description', priority: 'high' },
          { type: 'warning', message: 'Images missing alt text', priority: 'medium' },
          { type: 'info', message: 'Consider adding more internal links', priority: 'low' },
          { type: 'suggestion', message: 'Optimize page loading speed', priority: 'medium' }
        ],
        keywords: [
          { keyword: 'ai seo optimizer', volume: 1200, difficulty: 65, position: 0 },
          { keyword: 'seo automation', volume: 800, difficulty: 45, position: 0 },
          { keyword: 'ai marketing tools', volume: 1500, difficulty: 70, position: 0 }
        ],
        suggestions: [
          'Add more long-tail keywords to your content',
          'Improve page loading speed by optimizing images',
          'Create more high-quality backlinks',
          'Optimize for featured snippets'
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const features = [
    {
      icon: Search,
      title: 'AI Keyword Research',
      description: 'Advanced AI algorithms discover high-value keywords and analyze search trends'
    },
    {
      icon: BarChart3,
      title: 'Competitor Analysis',
      description: 'Comprehensive analysis of competitor SEO strategies and opportunities'
    },
    {
      icon: Zap,
      title: 'Technical SEO Audit',
      description: 'Deep technical analysis covering site speed, mobile optimization, and crawlability'
    },
    {
      icon: Brain,
      title: 'Content Optimization',
      description: 'AI-powered content suggestions to improve relevance and search rankings'
    },
    {
      icon: TrendingUp,
      title: 'Rank Tracking',
      description: 'Monitor keyword rankings and track performance improvements over time'
    },
    {
      icon: Target,
      title: 'Local SEO',
      description: 'Optimize for local search with location-based keyword strategies'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and bloggers',
      features: [
        'Up to 5 websites',
        'Basic keyword research',
        'Technical SEO audit',
        'Monthly reports',
        'Email support',
        'Basic rank tracking'
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
        'Competitor analysis',
        'Content optimization',
        'Priority support',
        'Advanced rank tracking',
        'API access',
        'White-label reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,199',
      period: '/month',
      description: 'For large organizations with complex SEO needs',
      features: [
        'Unlimited websites',
        'AI-powered content generation',
        'Advanced competitor analysis',
        'Custom SEO strategies',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Training sessions'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI SEO Optimizer - Zion Tech Group</title>
        <meta name="description" content="AI-powered SEO analysis and optimization tools. Starting at $299/month. Improve search rankings with intelligent keyword research and technical SEO audits." />
        <meta name="keywords" content="ai seo optimizer, seo automation, keyword research, technical seo, content optimization, search rankings, seo tools" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4 mr-2" />
            AI-Powered SEO Analysis
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI SEO Optimizer
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Boost your search rankings with intelligent SEO analysis. Get AI-powered keyword research, 
            technical audits, and content optimization recommendations.
          </p>
          
          {/* Interactive Demo */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12 cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">Try Our AI SEO Analysis</h3>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <input
                  type="url"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Enter your website URL for SEO analysis..."
                  className="flex-1 bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                />
                <button
                  onClick={analyzeSEO}
                  disabled={!urlInput.trim() || isAnalyzing}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze SEO'}
                </button>
              </div>
            </div>
            
            {seoAnalysis && (
              <div className="mt-8 bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-bold text-white mb-4">SEO Analysis Results</h4>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{seoAnalysis.overallScore}%</div>
                    <div className="text-sm text-gray-300">Overall Score</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{seoAnalysis.technical}%</div>
                    <div className="text-sm text-gray-300">Technical</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{seoAnalysis.content}%</div>
                    <div className="text-sm text-gray-300">Content</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{seoAnalysis.mobile}%</div>
                    <div className="text-sm text-gray-300">Mobile</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{seoAnalysis.speed}%</div>
                    <div className="text-sm text-gray-300">Speed</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-white mb-2">Issues Found:</h5>
                    <div className="space-y-2">
                      {seoAnalysis.issues.map((issue, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          {issue.priority === 'high' && <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5" />}
                          {issue.priority === 'medium' && <AlertTriangle className="w-4 h-4 text-yellow-400 mt-0.5" />}
                          {issue.priority === 'low' && <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5" />}
                          <div className="text-sm text-gray-300">
                            <span className="font-medium capitalize">{issue.priority} priority:</span> {issue.message}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-white mb-2">Keyword Opportunities:</h5>
                    <div className="space-y-2">
                      {seoAnalysis.keywords.map((keyword, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span className="text-gray-300">{keyword.keyword}</span>
                          <div className="flex space-x-2 text-xs">
                            <span className="text-blue-400">Vol: {keyword.volume}</span>
                            <span className="text-yellow-400">Diff: {keyword.difficulty}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5 className="font-semibold text-white mb-2">AI Suggestions:</h5>
                  <ul className="space-y-1">
                    {seoAnalysis.suggestions.map((suggestion, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {suggestion}
                      </li>
                    ))}
                  </ul>
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
            Powerful SEO Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 cyber-card relative ${
                plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
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
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
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
            Ready to Boost Your Search Rankings?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Start using our AI SEO Optimizer today and see the difference intelligent analysis can make.
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

export default AISEOOptimizerPage;