'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Mail, Target, BarChart, Eye, ArrowRight, Phone, MapPin, DollarSign, Award, Lock, Database, Cloud, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const AIMarketingAutomationPage: React.FC = () => {
  const [campaignData, setCampaignData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateCampaign = async () => {
    setIsGenerating(true);
    // Simulate AI campaign generation
    setTimeout(() => {
      setCampaignData({
        campaignName: 'Summer Product Launch 2024',
        targetAudience: 'Tech-savvy professionals aged 25-45',
        channels: ['Email', 'Social Media', 'Google Ads', 'LinkedIn'],
        budget: '$5,000',
        expectedROI: '340%',
        timeline: '4 weeks',
        content: {
          emailSubject: 'Revolutionary AI Tools for Your Business - 50% Off!',
          socialPost: 'Transform your workflow with our AI-powered solutions. Limited time offer - 50% off! #AI #Productivity #Tech',
          adCopy: 'Boost productivity by 300% with AI automation. Start your free trial today!',
          landingPage: 'Welcome to the future of business automation. Get started with our AI tools.'
        },
        metrics: {
          openRate: 24.5,
          clickRate: 8.7,
          conversionRate: 3.2,
          costPerLead: 12.50
        }
      });
      setIsGenerating(false);
    }, 3000);
  };

  const features = [
    {
      icon: Target,
      title: 'AI-Powered Targeting',
      description: 'Intelligent audience segmentation and targeting based on behavior and preferences',
      benefits: ['Behavioral analysis', 'Demographic targeting', 'Interest-based segmentation', 'Lookalike audiences']
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Create and send personalized email campaigns with AI-optimized content',
      benefits: ['Drip campaigns', 'A/B testing', 'Personalization', 'Send time optimization']
    },
    {
      icon: BarChart,
      title: 'Multi-Channel Campaigns',
      description: 'Manage campaigns across email, social media, and paid advertising platforms',
      benefits: ['Cross-platform sync', 'Unified analytics', 'Budget optimization', 'Performance tracking']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Real-time insights and recommendations to optimize campaign performance',
      benefits: ['Real-time monitoring', 'ROI tracking', 'Conversion analysis', 'AI recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$249',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5,000 contacts',
        'Basic email automation',
        'Social media posting',
        'Basic analytics',
        'Email support',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        'Up to 25,000 contacts',
        'Advanced email automation',
        'Multi-channel campaigns',
        'Advanced analytics',
        'Priority support',
        'Custom templates',
        'A/B testing',
        'Lead scoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'Enterprise automation',
        'All channels included',
        'Advanced AI insights',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label solution',
        'API access',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Amanda Rodriguez',
      role: 'Marketing Manager',
      company: 'TechStart Inc.',
      content: 'Our email open rates increased by 65% and our conversion rate doubled after implementing AI Marketing Automation.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'GrowthAgency',
      content: 'The AI recommendations have helped us optimize our campaigns and reduce costs while increasing ROI by 200%.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Digital Marketing Director',
      company: 'E-commerce Plus',
      content: 'The multi-channel automation has streamlined our marketing process and improved our customer engagement significantly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Marketing Automation - Zion Tech Group"
        description="Automate your marketing campaigns with AI-powered tools. Increase engagement, boost conversions, and optimize ROI with intelligent marketing automation across all channels."
        keywords={['AI marketing automation', 'email marketing', 'campaign automation', 'marketing AI', 'lead generation', 'conversion optimization']}
        canonicalUrl="https://ziontechgroup.com/ai-marketing-automation"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-3xl"></div>
          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                AI Marketing Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Automate your marketing campaigns with AI-powered intelligence. Increase engagement, boost conversions, 
              and optimize ROI with intelligent marketing automation across email, social media, and paid advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button
                onClick={() => document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                Generate Campaign
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
                <div className="text-3xl font-bold text-cyan-400 mb-2">65%</div>
                <div className="text-gray-300">Higher Open Rates</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">200%</div>
                <div className="text-gray-300">ROI Improvement</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300">Time Savings</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Automation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section id="demo-section" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              AI Campaign Generator
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
              <div className="text-center mb-8">
                <button
                  onClick={handleGenerateCampaign}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? 'Generating Campaign...' : 'Generate AI Marketing Campaign'}
                </button>
              </div>
              
              {campaignData ? (
                <div className="space-y-8">
                  {/* Campaign Overview */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Campaign Overview</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <div className="text-gray-400 text-sm">Campaign Name</div>
                        <div className="text-white font-medium">{campaignData.campaignName}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Target Audience</div>
                        <div className="text-white font-medium">{campaignData.targetAudience}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Budget</div>
                        <div className="text-cyan-400 font-bold">{campaignData.budget}</div>
                      </div>
                      <div>
                        <div className="text-gray-400 text-sm">Expected ROI</div>
                        <div className="text-green-400 font-bold">{campaignData.expectedROI}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content Generated */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Email Content</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-gray-400 text-sm mb-2">Subject Line</div>
                          <div className="text-white bg-gray-800 p-3 rounded border-l-4 border-cyan-400">
                            {campaignData.content.emailSubject}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm mb-2">Landing Page Copy</div>
                          <div className="text-gray-300 bg-gray-800 p-3 rounded">
                            {campaignData.content.landingPage}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-6">
                      <h4 className="text-lg font-bold text-white mb-4">Social Media & Ads</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="text-gray-400 text-sm mb-2">Social Media Post</div>
                          <div className="text-white bg-gray-800 p-3 rounded border-l-4 border-purple-400">
                            {campaignData.content.socialPost}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-sm mb-2">Ad Copy</div>
                          <div className="text-gray-300 bg-gray-800 p-3 rounded">
                            {campaignData.content.adCopy}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="bg-white/10 rounded-lg p-6">
                    <h4 className="text-lg font-bold text-white mb-4">Predicted Performance</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{campaignData.metrics.openRate}%</div>
                        <div className="text-gray-300 text-sm">Open Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{campaignData.metrics.clickRate}%</div>
                        <div className="text-gray-300 text-sm">Click Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{campaignData.metrics.conversionRate}%</div>
                        <div className="text-gray-300 text-sm">Conversion Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">${campaignData.metrics.costPerLead}</div>
                        <div className="text-gray-300 text-sm">Cost Per Lead</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Target className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-400">Click "Generate AI Marketing Campaign" to see AI-powered campaign creation in action</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Marketing Features
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
              Choose Your Marketing Plan
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
              Ready to Automate Your Marketing?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of businesses who trust our AI Marketing Automation to boost their campaigns and drive better results.
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

export default AIMarketingAutomationPage;