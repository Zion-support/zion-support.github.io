'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Palette, Image, Type, Layers, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Shield, Clock, Users, Award, Globe, Database, Cpu, Eye, BarChart3, PieChart, LineChart, Activity, Brain, Target, TrendingUp, Download, Share2, Sparkles } from 'lucide-react';

const AIDesignStudioPage: React.FC = () => {
  const features = [
    {
      icon: Palette,
      title: 'AI-Powered Design Generation',
      description: 'Create stunning designs in seconds with AI that understands your brand',
      details: ['Logo Generation', 'Brand Identity', 'Color Palette', 'Typography Selection']
    },
    {
      icon: Image,
      title: 'Smart Image Processing',
      description: 'Advanced image editing and enhancement with AI technology',
      details: ['Background Removal', 'Image Upscaling', 'Style Transfer', 'Object Detection']
    },
    {
      icon: Type,
      title: 'Intelligent Typography',
      description: 'AI-powered text design and layout optimization',
      details: ['Font Pairing', 'Text Layout', 'Readability Analysis', 'Brand Consistency']
    },
    {
      icon: Layers,
      title: 'Automated Layouts',
      description: 'Generate perfect layouts for any design project automatically',
      details: ['Responsive Design', 'Grid Systems', 'Spacing Optimization', 'Visual Hierarchy']
    }
  ];

  const designTools = [
    {
      name: 'Logo Generator',
      icon: Sparkles,
      description: 'Create professional logos in minutes with AI',
      features: ['Brand Analysis', 'Multiple Variations', 'Vector Export', 'Brand Guidelines'],
      price: '$49/logo',
      time: '5 minutes'
    },
    {
      name: 'Social Media Creator',
      icon: Share2,
      description: 'Generate engaging social media content automatically',
      features: ['Post Templates', 'Story Designs', 'Banner Creation', 'Brand Consistency'],
      price: '$29/month',
      time: '2 minutes'
    },
    {
      name: 'Website Builder',
      icon: Globe,
      description: 'AI-powered website design and development',
      features: ['Responsive Design', 'SEO Optimization', 'Content Generation', 'Performance Tuning'],
      price: '$199/site',
      time: '30 minutes'
    },
    {
      name: 'Print Design Suite',
      icon: Download,
      description: 'Professional print materials with AI assistance',
      features: ['Business Cards', 'Flyers', 'Brochures', 'Print Optimization'],
      price: '$79/design',
      time: '10 minutes'
    }
  ];

  const industries = [
    {
      name: 'E-commerce',
      icon: Globe,
      applications: ['Product Mockups', 'Banner Ads', 'Email Templates', 'Social Media'],
      results: { efficiency: '+70%', cost: '-60%', quality: '+85%' }
    },
    {
      name: 'Marketing Agencies',
      icon: Target,
      applications: ['Client Presentations', 'Campaign Materials', 'Brand Guidelines', 'Creative Assets'],
      results: { efficiency: '+90%', cost: '-75%', quality: '+95%' }
    },
    {
      name: 'Startups',
      icon: Zap,
      applications: ['Brand Identity', 'Pitch Decks', 'Website Design', 'Marketing Materials'],
      results: { efficiency: '+80%', cost: '-85%', quality: '+90%' }
    },
    {
      name: 'Content Creators',
      icon: Image,
      applications: ['Thumbnail Creation', 'Channel Art', 'Video Graphics', 'Social Posts'],
      results: { efficiency: '+65%', cost: '-70%', quality: '+80%' }
    }
  ];

  const pricingTiers = [
    {
      name: 'Creator',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual creators and small projects',
      features: [
        'Up to 100 designs/month',
        'Basic AI tools',
        'Standard templates',
        'Email support',
        'PNG/JPG export',
        'Basic brand kit'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Advanced tools for professional designers and agencies',
      features: [
        'Unlimited designs',
        'Advanced AI tools',
        'Premium templates',
        'Priority support',
        'Vector export (SVG, PDF)',
        'Advanced brand kit',
        'Team collaboration',
        'API access'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Complete design solution for large teams and organizations',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'White-label solution',
        '24/7 dedicated support',
        'All export formats',
        'Custom brand guidelines',
        'Advanced analytics',
        'Custom integrations',
        'On-premise deployment',
        'Dedicated account manager'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jessica Martinez',
      role: 'Creative Director',
      company: 'DesignStudio Pro',
      content: 'Zion Tech Group\'s AI design tools have revolutionized our workflow. We can now deliver client projects 3x faster with higher quality results.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'Alex Chen',
      role: 'Founder',
      company: 'TechStart Inc.',
      content: 'As a non-designer, this platform helped me create professional-looking materials that look like they were made by a design agency. Incredible value.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Sarah Johnson',
      role: 'Marketing Manager',
      company: 'BrandCorp',
      content: 'The AI understands our brand perfectly and creates consistent designs across all channels. Our brand consistency has improved dramatically.',
      rating: 5,
      avatar: 'SJ'
    }
  ];

  const designStats = [
    {
      metric: 'Designs Created',
      value: '1M+',
      description: 'Professional designs generated'
    },
    {
      metric: 'Time Saved',
      value: '85%',
      description: 'Average time reduction'
    },
    {
      metric: 'Cost Savings',
      value: '70%',
      description: 'Compared to traditional design'
    },
    {
      metric: 'User Satisfaction',
      value: '98%',
      description: 'Happy customers worldwide'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>AI Design Studio - Zion Tech Group</title>
        <meta name="description" content="AI-powered design studio with advanced tools for logos, graphics, websites, and marketing materials. Create professional designs in minutes. Starting at $29/month." />
        <meta name="keywords" content="AI design, logo generator, graphic design, website builder, social media creator, design automation, creative AI" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Palette className="w-4 h-4" />
            <span>AI-Powered Design Studio</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Create Stunning Designs with
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional design tools powered by AI. Create logos, graphics, websites, and marketing materials 
            in minutes, not hours. No design experience required.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1M+</div>
              <div className="text-gray-300">Designs Created</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <div className="text-gray-300">Time Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-300">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-gray-300">Satisfaction</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Design Studio Inquiry"
              className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Try Free Demo
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Powerful Design Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Design Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designTools.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <tool.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{tool.name}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{tool.price}</span>
                  <span className="text-sm text-gray-300">{tool.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Industry Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                <industry.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Applications:</h4>
                  <ul className="space-y-1">
                    {industry.applications.map((app, appIndex) => (
                      <li key={appIndex} className="text-sm text-gray-300 flex items-center">
                        <ArrowRight className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-lg font-bold text-green-400">{industry.results.efficiency}</div>
                    <div className="text-xs text-gray-300">Efficiency</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-cyan-400">{industry.results.cost}</div>
                    <div className="text-xs text-gray-300">Cost</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-purple-400">{industry.results.quality}</div>
                    <div className="text-xs text-gray-300">Quality</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Stats */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Design Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center cyber-card">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <h3 className="text-lg font-bold text-white mb-2">{stat.metric}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 cyber-card ${tier.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tier.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                  className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                      : 'bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Designer Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-slate-900 font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.role}</p>
                    <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Creating Amazing Designs Today
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of creators using our AI design studio to bring their ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com?subject=AI Design Studio Demo Request"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Try Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIDesignStudioPage;