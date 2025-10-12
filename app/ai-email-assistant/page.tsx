import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Zap, Brain, Mail, CheckCircle, Star, Clock, Users, 
  BarChart3, Sparkles, Target, Award, Lightbulb, Globe, Shield, 
  MessageCircle, Phone, MapPin, Play, Pause, Download, Upload,
  Edit, Copy, Share, Bookmark, Heart, ThumbsUp, RefreshCw, Settings,
  Palette, Type, Image, Video, Music, Code, Database, Cloud, Lock,
  Send, Inbox, Archive, Trash2, Filter, Search, Calendar, Clock3,
  FileText, Folder, Tag, Flag, Reply, Forward, ReplyAll
} from 'lucide-react'

export default function AIEmailAssistantPage() {
  const [selectedPlan, setSelectedPlan] = useState('pro')

  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Email Generation',
      description: 'AI-powered email composition with context awareness, tone matching, and personalized content.',
      benefits: ['Auto-compose responses', 'Tone detection', 'Context understanding', 'Personalization']
    },
    {
      icon: <Mail className="w-6 h-6 text-emerald-400" />,
      title: 'Email Management',
      description: 'Intelligent inbox organization, priority sorting, and automated email categorization.',
      benefits: ['Smart categorization', 'Priority scoring', 'Auto-archiving', 'Spam filtering']
    },
    {
      icon: <Reply className="w-6 h-6 text-purple-400" />,
      title: 'Auto-Response System',
      description: 'Automated email responses with natural language processing and sentiment analysis.',
      benefits: ['Instant responses', 'Sentiment analysis', 'Escalation detection', 'Follow-up scheduling']
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: 'Email Analytics',
      description: 'Comprehensive email performance tracking with engagement metrics and optimization insights.',
      benefits: ['Open rate tracking', 'Response time analysis', 'Engagement scoring', 'Performance reports']
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-400" />,
      title: 'Smart Scheduling',
      description: 'AI-powered email scheduling based on recipient time zones and optimal send times.',
      benefits: ['Time zone detection', 'Optimal timing', 'Send time optimization', 'Delivery tracking']
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Security & Compliance',
      description: 'Advanced email security with encryption, compliance monitoring, and threat detection.',
      benefits: ['End-to-end encryption', 'Compliance checks', 'Threat detection', 'Data protection']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        '1,000 emails/month',
        'Basic AI responses',
        'Email categorization',
        'Email support',
        'Standard integrations',
        'Basic analytics',
        '1 email account'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        '10,000 emails/month',
        'Advanced AI responses',
        'Smart email management',
        'Priority support',
        'All integrations',
        'Advanced analytics',
        'Up to 5 email accounts',
        'Custom templates',
        'API access',
        'Team collaboration'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with custom needs',
      features: [
        'Unlimited emails',
        'Premium AI responses',
        'Full email automation',
        '24/7 dedicated support',
        'Custom integrations',
        'Enterprise analytics',
        'Unlimited email accounts',
        'White-label solution',
        'Full API access',
        'Custom development',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ]

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'Marketing Director',
      company: 'GrowthCorp Inc.',
      content: 'Our email response time improved by 80% with the AI assistant. Customer satisfaction has never been higher.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Robert Chen',
      role: 'Sales Manager',
      company: 'TechStart Solutions',
      content: 'The smart email generation feature has revolutionized our outreach. Our conversion rates increased by 45%.',
      rating: 5,
      avatar: 'RC'
    },
    {
      name: 'Maria Rodriguez',
      role: 'Customer Success Lead',
      company: 'ServicePro Ltd.',
      content: 'Email management is now effortless. The AI categorizes and prioritizes emails perfectly every time.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  const useCases = [
    {
      title: 'Customer Support',
      description: 'Automated email responses with intelligent routing and escalation management.',
      icon: <MessageCircle className="w-8 h-8 text-cyan-400" />,
      examples: ['Ticket responses', 'FAQ automation', 'Escalation handling', 'Follow-up management']
    },
    {
      title: 'Sales & Marketing',
      description: 'Personalized email campaigns with AI-generated content and optimal timing.',
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      examples: ['Lead nurturing', 'Campaign optimization', 'Personalization', 'A/B testing']
    },
    {
      title: 'Internal Communications',
      description: 'Streamlined internal email management with smart scheduling and organization.',
      icon: <Users className="w-8 h-8 text-purple-400" />,
      examples: ['Meeting coordination', 'Project updates', 'Announcements', 'Team collaboration']
    },
    {
      title: 'Email Marketing',
      description: 'AI-powered email marketing with content generation and performance optimization.',
      icon: <Send className="w-8 h-8 text-pink-400" />,
      examples: ['Newsletter creation', 'Segmentation', 'Send time optimization', 'Performance tracking']
    }
  ]

  const emailTemplates = [
    {
      category: 'Customer Service',
      templates: ['Welcome email', 'Support response', 'Follow-up', 'Resolution confirmation']
    },
    {
      category: 'Sales',
      templates: ['Cold outreach', 'Follow-up sequence', 'Proposal email', 'Closing email']
    },
    {
      category: 'Marketing',
      templates: ['Newsletter', 'Product announcement', 'Event invitation', 'Survey request']
    },
    {
      category: 'Internal',
      templates: ['Meeting request', 'Project update', 'Policy change', 'Team announcement']
    }
  ]

  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Intelligent Email Management | Zion Tech Group</title>
        <meta name="description" content="Transform your email workflow with our AI Email Assistant. Smart responses, automated management, and intelligent analytics. Starting at $79/month." />
        <meta name="keywords" content="AI email assistant, email automation, smart email, email management, email AI, automated responses, email analytics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-email-assistant" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-40 right-20 w-12 h-12 bg-purple-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-20 left-1/4 w-8 h-8 bg-pink-400/20 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2.5s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Mail className="w-4 h-4" />
              <span>AI-Powered Email Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI Email
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your email workflow with intelligent automation, smart responses, and advanced analytics.
              <br />
              <span className="text-cyan-400 font-semibold">Smart responses • Auto-management • 80% time savings</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>15,000+ Email Accounts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.8/5 Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Intelligent Email <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Management</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Everything you need to manage, respond to, and optimize your email communications with AI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Email Templates Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Professional Email <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Templates</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose from hundreds of professionally designed email templates for every business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {emailTemplates.map((category, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.templates.map((template, templateIndex) => (
                      <div key={templateIndex} className="text-cyan-400 text-sm flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        {template}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Perfect for Every <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Email Need</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                From customer support to sales outreach, streamline your email communications across all departments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  <div className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-cyan-400 text-sm">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your email management needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' 
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Trusted by <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">15,000+ Users</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                See what our customers say about their experience with our AI Email Assistant.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
                
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Email Workflow?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    Join thousands of professionals using our AI Email Assistant to streamline their communications. 
                    Start your free trial today - no credit card required.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                    <button className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Start Free Trial</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact Sales</span>
                      <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                    <div className="flex items-center justify-center space-x-3">
                      <Phone className="w-5 h-5 text-cyan-300" />
                      <span className="text-sm">+1 302 464 0950</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <Mail className="w-5 h-5 text-purple-300" />
                      <span className="text-sm">kleber@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <MapPin className="w-5 h-5 text-pink-300" />
                      <span className="text-sm">Middletown DE 19709</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}