'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Search, Target, BarChart, Eye, ArrowRight, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Smartphone, Settings, BarChart3, FileText, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const [urlInput, setUrlInput] = useState('');
  const [seoAnalysis, setSeoAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSEOAnalysis = async () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setSeoAnalysis({
        overallScore: 78,
        pageSpeed: 85,
        mobileFriendly: 92,
        seoScore: 75,
        issues: [
          { type: 'critical', message: 'Missing meta description', severity: 'high' },
          { type: 'warning', message: 'Images missing alt text', severity: 'medium' },
          { type: 'info', message: 'Consider adding more internal links', severity: 'low' }
        ],
        recommendations: [
          'Add a compelling meta description (150-160 characters)',
          'Optimize images with descriptive alt text',
          'Improve page loading speed by compressing images',
          'Add more relevant internal links to improve site structure'
        ],
        keywords: [
          { keyword: 'AI SEO optimization', volume: 1200, difficulty: 'Medium', opportunity: 'High' },
          { keyword: 'automated SEO tools', volume: 800, difficulty: 'Low', opportunity: 'High' },
          { keyword: 'SEO analysis software', volume: 600, difficulty: 'Medium', opportunity: 'Medium' }
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const features = [
    {
      icon: Search,
      title: 'Comprehensive SEO Analysis',
      description: 'AI-powered analysis of your website\'s SEO performance across all major factors',
      benefits: ['Technical SEO audit', 'Content optimization', 'Keyword analysis', 'Competitor insights']
    },
    {
      icon: Target,
      title: 'Keyword Research & Strategy',
      description: 'Advanced keyword research with AI-driven insights and opportunity identification',
      benefits: ['Long-tail keyword discovery', 'Search volume analysis', 'Competition assessment', 'Content gap analysis']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Real-time monitoring of your SEO performance with detailed analytics and reporting',
      benefits: ['Ranking tracking', 'Traffic analysis', 'Conversion monitoring', 'ROI measurement']
    },
    {
      icon: BarChart,
      title: 'Competitive Intelligence',
      description: 'Monitor competitors and identify opportunities to outperform them in search results',
      benefits: ['Competitor analysis', 'Gap identification', 'Strategy recommendations', 'Market insights']
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
        '100 keyword analyses per month',
        'Basic SEO audit',
        'Monthly reports',
        'Email support',
        'Standard integrations'
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
        '500 keyword analyses per month',
        'Advanced SEO audit',
        'Weekly reports',
        'Priority support',
        'Advanced integrations',
        'Competitor analysis',
        'White-label reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex SEO needs',
      features: [
        'Unlimited websites',
        'Unlimited keyword analyses',
        'Comprehensive SEO audit',
        'Real-time monitoring',
        '24/7 dedicated support',
        'Custom integrations',
        'API access',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'Digital Marketing Manager',
      company: 'GrowthCorp',
      content: 'Our organic traffic increased by 150% in just 3 months using the AI SEO Optimizer. The keyword insights are incredibly valuable.',
      rating: 5
    },
    {
      name: 'David Kim',
      role: 'SEO Specialist',
      company: 'Digital Agency Pro',
      content: 'This tool has revolutionized our SEO process. The competitive analysis features help us stay ahead of the competition.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      role: 'E-commerce Director',
      company: 'ShopSmart',
      content: 'The AI recommendations are spot-on. We\'ve seen a 40% improvement in our search rankings and a 25% increase in conversions.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI SEO Optimizer - Zion Tech Group"
        description="Boost your search rankings with AI-powered SEO analysis and optimization. Get comprehensive insights, keyword research, and performance tracking to dominate search results."
        keywords={['AI SEO optimizer', 'SEO analysis', 'keyword research', 'search optimization', 'SEO tools', 'digital marketing']}
        canonicalUrl="https://ziontechgroup.com/ai-seo-optimizer"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI SEO Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dominate search results with our AI-powered SEO optimization platform. Get comprehensive analysis, 
              keyword insights, and actionable recommendations to boost your rankings and drive more organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Try Free Analysis
              </button>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Started
              </a>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">150%</div>
                <div className="text-gray-300">Average Traffic Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">10K+</div>
                <div className="text-gray-300">Websites Optimized</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Try Our Free SEO Analysis
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Enter Your Website URL</h3>
                  <div className="space-y-4">
                    <input
                      type="url"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                      placeholder="https://yourwebsite.com"
                      className="w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-600 focus:border-cyan-500 focus:outline-none"
                    />
                    <button
                      onClick={handleSEOAnalysis}
                      disabled={!urlInput.trim() || isAnalyzing}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Website'}
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">SEO Analysis Results</h3>
                  {seoAnalysis ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{seoAnalysis.overallScore}</div>
                          <div className="text-gray-300 text-sm">Overall Score</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{seoAnalysis.pageSpeed}</div>
                          <div className="text-gray-300 text-sm">Page Speed</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{seoAnalysis.mobileFriendly}</div>
                          <div className="text-gray-300 text-sm">Mobile Friendly</div>
                        </div>
                        <div className="bg-white/10 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400 mb-1">{seoAnalysis.seoScore}</div>
                          <div className="text-gray-300 text-sm">SEO Score</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">Issues Found</h4>
                        <div className="space-y-2">
                          {seoAnalysis.issues.map((issue, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <div className={`w-3 h-3 rounded-full mt-1 ${
                                issue.severity === 'high' ? 'bg-red-400' : 
                                issue.severity === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
                              }`}></div>
                              <span className="text-gray-300 text-sm">{issue.message}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <h4 className="text-white font-medium mb-3">Top Keywords</h4>
                        <div className="space-y-2">
                          {seoAnalysis.keywords.map((keyword, index) => (
                            <div key={index} className="flex justify-between items-center">
                              <span className="text-gray-300 text-sm">{keyword.keyword}</span>
                              <div className="flex space-x-2">
                                <span className="text-xs text-gray-400">{keyword.volume} searches</span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  keyword.opportunity === 'High' ? 'bg-green-500/20 text-green-400' :
                                  keyword.opportunity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                  'bg-red-500/20 text-red-400'
                                }`}>
                                  {keyword.opportunity}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/10 rounded-lg p-8 text-center">
                      <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">Analysis results will appear here after you enter a URL and click "Analyze Website"</p>
                    </div>
                  )}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
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

        {/* Pricing Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 relative ${
                  plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''
                } cyber-card`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Results?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses who trust our AI SEO Optimizer to boost their search rankings and drive more organic traffic.
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
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-100 hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AISEOOptimizerPage;