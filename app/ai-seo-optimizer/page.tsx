import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Search, BarChart3, FileText, Link, Image, Monitor } from 'lucide-react';

const AISEOOptimizerPage: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: 'AI Content Optimization',
      description: 'Intelligent content analysis and optimization suggestions to improve search rankings and user engagement.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: 'Keyword Research Automation',
      description: 'Advanced keyword research with AI-powered suggestions, competition analysis, and search volume insights.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Competitor Analysis',
      description: 'Comprehensive competitor analysis with gap identification and opportunity discovery.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Technical SEO Audit',
      description: 'Automated technical SEO auditing with actionable recommendations for site performance.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Rank Tracking',
      description: 'Real-time keyword ranking monitoring with detailed analytics and trend analysis.'
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: 'Content Gap Analysis',
      description: 'Identify content opportunities and gaps in your SEO strategy with AI-powered insights.'
    }
  ];

  const benefits = [
    'Increase organic traffic by 150% within 6 months',
    'Improve search rankings for target keywords',
    'Save 25+ hours per week on SEO tasks',
    'Beat competitors with advanced AI insights',
    'Automate technical SEO monitoring',
    'Generate high-quality, SEO-optimized content'
  ];

  const tools = [
    'Google Search Console API', 'Ahrefs API', 'SEMrush API', 'Moz API', 'OpenAI GPT', 'Claude AI', 'React', 'Node.js'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small websites',
      features: [
        'Up to 5 websites',
        'Basic keyword research',
        'Content optimization',
        'Rank tracking (100 keywords)',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 websites',
        'Advanced AI analysis',
        'Competitor analysis',
        'Rank tracking (500 keywords)',
        'Priority support',
        'Custom reports'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited websites',
        'Custom AI models',
        'White-label reports',
        'Dedicated support',
        'SLA guarantee',
        'API access'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI SEO Optimizer Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered SEO optimization with content analysis, keyword research, and competitor analysis. Increase organic traffic by 150% and save 25+ hours per week." />
        <meta name="keywords" content="ai seo, seo optimization, keyword research, content optimization, competitor analysis, search rankings" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Search className="w-4 h-4" />
            <span>Marketing Tools</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            AI SEO Optimizer Pro
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Advanced SEO analysis and optimization with AI-driven content suggestions, keyword research, 
            and competitor analysis. Dominate search rankings with intelligent automation.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">150%</div>
              <div className="text-gray-300 text-sm">Traffic Increase</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">25+</div>
              <div className="text-gray-300 text-sm">Hours Saved/Week</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Keywords Tracked</div>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Monitoring</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI SEO Optimizer Pro Inquiry"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Get Free SEO Audit
            </a>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2 text-cyan-300">
                <Phone className="w-5 h-5" />
                <span className="font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <Mail className="w-5 h-5" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-300">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Advanced SEO Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our AI SEO Optimizer?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <div className="cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Market Comparison</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Our AI SEO Optimizer Pro</span>
                  <span className="text-cyan-400 font-bold">$199/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ahrefs Enterprise</span>
                  <span className="text-gray-400">$999/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">SEMrush Pro</span>
                  <span className="text-gray-400">$400/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Moz Pro</span>
                  <span className="text-gray-400">$300/month</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                <p className="text-green-300 text-sm">
                  <strong>Save up to 80%</strong> compared to enterprise SEO tools while getting superior AI-powered insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Integrated SEO Tools
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-2xl mb-3">🔗</div>
                <div className="text-white font-medium">{tool}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/30 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Affordable SEO Solutions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=${plan.name} Plan - AI SEO Optimizer Pro`}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses using our AI-powered SEO tools to increase organic traffic and improve search rankings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISEOOptimizerPage;