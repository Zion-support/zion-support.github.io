import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Brain, Shield, Code, BarChart, Users, Clock, DollarSign, TrendingUp, Globe, Smartphone, Database, Cloud, Lock, Target, BarChart3, PieChart, LineChart, Activity, Award, Rocket, Sparkles, Mail, ShoppingCart, Eye, MousePointer, Share2, MessageSquare, Image, Video, Mic, Calendar, Filter, Search, Settings, Monitor, Smartphone as PhoneIcon } from 'lucide-react';

const AIMarketingPage: React.FC = () => {
  const marketingServices = [
    {
      id: 'ai-content-creation',
      title: 'AI Content Creation Suite',
      description: 'Generate high-quality marketing content across all channels with AI-powered tools.',
      icon: Brain,
      price: 199,
      period: 'month',
      features: [
        'Blog post generation (unlimited)',
        'Social media content creation',
        'Email marketing copy',
        'Ad copy optimization',
        'SEO-optimized content',
        'Multi-language support',
        'Brand voice consistency',
        'Content calendar automation'
      ],
      popular: true,
      category: 'Content Creation',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'social-media-automation',
      title: 'Social Media AI Manager',
      description: 'Automate your social media presence with intelligent posting and engagement.',
      icon: Share2,
      price: 149,
      period: 'month',
      features: [
        'Multi-platform posting',
        'Optimal timing analysis',
        'Hashtag optimization',
        'Engagement prediction',
        'Content performance tracking',
        'Influencer identification',
        'Trend analysis',
        'Automated responses'
      ],
      popular: false,
      category: 'Social Media',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'email-marketing-ai',
      title: 'AI Email Marketing Platform',
      description: 'Personalized email campaigns with AI-driven segmentation and optimization.',
      icon: Mail,
      price: 179,
      period: 'month',
      features: [
        'AI-powered segmentation',
        'Personalized subject lines',
        'Send time optimization',
        'A/B testing automation',
        'Behavioral triggers',
        'Deliverability optimization',
        'Advanced analytics',
        'CRM integration'
      ],
      popular: true,
      category: 'Email Marketing',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'ad-optimization',
      title: 'AI Ad Optimization Suite',
      description: 'Maximize ROI with AI-powered ad campaign optimization across all platforms.',
      icon: Target,
      price: 299,
      period: 'month',
      features: [
        'Multi-platform ad management',
        'Bid optimization',
        'Audience targeting AI',
        'Creative testing automation',
        'Budget allocation optimization',
        'Performance prediction',
        'Competitor analysis',
        'ROI maximization'
      ],
      popular: false,
      category: 'Advertising',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'seo-ai-tools',
      title: 'AI SEO Optimization',
      description: 'Advanced SEO tools powered by AI for keyword research and content optimization.',
      icon: Search,
      price: 129,
      period: 'month',
      features: [
        'Keyword research automation',
        'Content optimization suggestions',
        'Technical SEO analysis',
        'Competitor gap analysis',
        'Link building opportunities',
        'Ranking prediction',
        'Local SEO optimization',
        'Performance tracking'
      ],
      popular: false,
      category: 'SEO',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'marketing-analytics',
      title: 'AI Marketing Analytics',
      description: 'Comprehensive marketing analytics with predictive insights and recommendations.',
      icon: BarChart3,
      price: 249,
      period: 'month',
      features: [
        'Cross-channel attribution',
        'Customer journey mapping',
        'Predictive analytics',
        'ROI forecasting',
        'Campaign performance analysis',
        'Customer lifetime value prediction',
        'Churn prediction',
        'Custom reporting'
      ],
      popular: true,
      category: 'Analytics',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: '10x Faster Content Creation',
      description: 'Generate marketing content 10x faster than traditional methods while maintaining quality.'
    },
    {
      icon: TrendingUp,
      title: '300% Average ROI Increase',
      description: 'Our AI tools typically increase marketing ROI by 300% within the first 6 months.'
    },
    {
      icon: Clock,
      title: '24/7 Marketing Automation',
      description: 'Automate your marketing campaigns to run 24/7 without manual intervention.'
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'AI-powered audience targeting that reaches the right customers at the right time.'
    }
  ];

  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'SaaS',
      challenge: 'Low content production and poor social media engagement',
      solution: 'AI Content Creation Suite + Social Media AI Manager',
      results: [
        '500% increase in content output',
        '300% improvement in social engagement',
        '250% increase in lead generation',
        '40% reduction in marketing costs'
      ],
      timeframe: '6 months'
    },
    {
      company: 'E-commerce Plus',
      industry: 'Retail',
      challenge: 'Low email open rates and poor ad performance',
      solution: 'AI Email Marketing + Ad Optimization Suite',
      results: [
        '85% increase in email open rates',
        '200% improvement in click-through rates',
        '180% increase in conversion rates',
        '60% reduction in cost per acquisition'
      ],
      timeframe: '4 months'
    },
    {
      company: 'Local Services Co.',
      industry: 'Services',
      challenge: 'Poor local SEO and limited online visibility',
      solution: 'AI SEO Optimization + Marketing Analytics',
      results: [
        '400% increase in organic traffic',
        '150% improvement in local search rankings',
        '300% increase in qualified leads',
        '50% reduction in marketing spend'
      ],
      timeframe: '8 months'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'AI Content Creation Suite transformed our content strategy. We went from struggling to create 2 blog posts per week to publishing 10 high-quality pieces daily.',
      rating: 5,
      service: 'AI Content Creation Suite'
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Plus',
      role: 'CEO',
      content: 'The AI Email Marketing platform increased our revenue by 200% in just 4 months. The personalization features are incredible.',
      rating: 5,
      service: 'AI Email Marketing Platform'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Services Co.',
      role: 'Marketing Manager',
      content: 'Our local SEO improved dramatically with AI SEO Optimization. We now rank #1 for all our target keywords.',
      rating: 5,
      service: 'AI SEO Optimization'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text-intense">
              AI Marketing Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-400 max-w-3xl mx-auto">
              Revolutionize your marketing with AI-powered automation, personalization, and optimization. 
              Increase ROI by 300% while reducing costs by 50%.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="cyber-button-advanced w-full sm:w-auto text-center"
              >
                Start Free Trial
              </Link>
              <Link
                to="#services"
                className="cyber-button-advanced w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                View All Services
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card hologram-card-advanced text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI Increase</div>
              </div>
              <div className="cyber-card hologram-card-advanced text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                <div className="text-gray-300">Faster Content Creation</div>
              </div>
              <div className="cyber-card hologram-card-advanced text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-gray-300">Happy Customers</div>
              </div>
              <div className="cyber-card hologram-card-advanced text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Marketing Automation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-intense">
              AI Marketing Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI-powered marketing solutions designed to maximize your ROI and streamline your campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <div key={service.id} className={`cyber-card hologram-card-advanced p-6 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">
                    ${service.price}<span className="text-lg text-gray-400">/{service.period}</span>
                  </div>
                  <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-all duration-200 ${
                      service.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                        : 'bg-gray-700 text-white hover:bg-gray-600'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="w-full py-2 px-4 rounded-lg border border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 text-center transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-intense">
              Why Choose AI Marketing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your marketing with AI-powered automation and optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card-advanced text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-intense">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real results from businesses using our AI marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="cyber-card hologram-card-advanced p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{study.industry}</p>
                  <p className="text-gray-300 text-sm mb-4">{study.timeframe}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Challenge:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.challenge}</p>
                  
                  <h4 className="text-white font-semibold mb-2">Solution:</h4>
                  <p className="text-gray-300 text-sm mb-3">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="text-green-400 text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-intense">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of businesses already transforming their marketing with AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card hologram-card-advanced p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-700 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  <div className="text-xs text-cyan-400 mt-1">Using {testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text-intense">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven marketing automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button-advanced w-full sm:w-auto text-center"
            >
              Start Free Trial
            </Link>
            <a
              href="tel:+13024640950"
              className="cyber-button-advanced w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              📞 Call: (302) 464-0950
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingPage;
