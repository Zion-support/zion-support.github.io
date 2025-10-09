import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, CheckCircle, ArrowRight, Phone, Mail, ExternalLink, Star, Clock, Shield, Zap, BarChart, Target, Award, Globe, Download, Play, Code, Database, Cloud, Lock, Settings, TrendingUp, DollarSign, Calendar, MessageSquare, Share2, Eye, Search, Filter, RefreshCw, Brain, Heart, Activity, PieChart, LineChart } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AICRMAutomationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const features = [
    'AI-powered lead scoring and qualification',
    'Automated email sequences and follow-ups',
    'Predictive analytics for sales forecasting',
    'Customer sentiment analysis',
    'Smart task prioritization',
    'Automated data entry and enrichment',
    'Custom dashboard and reporting',
    'Mobile app for on-the-go access',
    'Integration with 100+ tools',
    'Advanced workflow automation'
  ];

  const benefits = [
    'Increase sales conversion by 35%',
    'Reduce manual data entry by 90%',
    'Improve customer satisfaction by 45%',
    'Save 15 hours per week per sales rep',
    'Boost lead qualification accuracy by 60%',
    'Enhance customer retention by 25%'
  ];

  const capabilities = [
    'Lead management and tracking',
    'Sales pipeline automation',
    'Customer communication history',
    'Deal forecasting and analytics',
    'Email marketing automation',
    'Task and activity management',
    'Document and file storage',
    'Team collaboration tools'
  ];

  const useCases = [
    'Sales teams managing leads and opportunities',
    'Customer service departments',
    'Real estate agencies',
    'Insurance companies',
    'Financial services',
    'Healthcare practices',
    'E-commerce businesses'
  ];

  const technologies = [
    'Machine Learning algorithms',
    'Natural Language Processing',
    'Predictive analytics',
    'RESTful API',
    'React and Node.js',
    'MongoDB database',
    'Redis caching',
    'AWS cloud services'
  ];

  const testimonials = [
    {
      name: "David Martinez",
      company: "Sales Director, TechCorp",
      content: "AI CRM Automation has transformed our sales process. We've seen a 40% increase in conversion rates and our team is 50% more productive.",
      rating: 5,
      avatar: "DM"
    },
    {
      name: "Lisa Thompson",
      company: "Marketing Manager, GrowthCo",
      content: "The predictive analytics feature is incredible. We can now forecast sales with 85% accuracy and plan our resources accordingly.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      company: "CEO, StartupXYZ",
      content: "This CRM learns from our data and gets smarter over time. It's like having an AI assistant that knows our business inside and out.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      price: 49,
      period: 'month',
      description: 'Perfect for small teams getting started',
      features: [
        'Up to 1,000 contacts',
        'Basic AI lead scoring',
        'Email automation',
        'Mobile app access',
        'Email support',
        'Standard integrations'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional',
      price: 149,
      period: 'month',
      description: 'Ideal for growing sales teams',
      features: [
        'Up to 10,000 contacts',
        'Advanced AI features',
        'Predictive analytics',
        'Custom dashboards',
        'Priority support',
        'Advanced integrations',
        'Team collaboration',
        'API access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 399,
      period: 'month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited contacts',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Advanced security',
        'SLA guarantee',
        'Training and onboarding'
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
        <title>AI-Powered CRM Automation Suite - Zion Tech Group</title>
        <meta name="description" content="Transform your sales and customer service with our AI-powered CRM that learns from your data to predict customer behavior and automate follow-ups." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, lead scoring, predictive analytics, customer service" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-cyan-400 font-semibold">Micro SAAS Solution</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI-Powered CRM <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation Suite</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your sales and customer service with intelligent CRM that learns from your data to predict customer behavior, automate follow-ups, and optimize your sales pipeline.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>35% Higher Conversion</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>90% Less Manual Work</span>
                </div>
                <div className="flex items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span>100+ Integrations</span>
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
                    <span className="text-gray-400 text-sm ml-4">AI CRM Dashboard</span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Lead Score: 95/100</span>
                        <span className="text-green-400 text-xs">Hot Lead</span>
                      </div>
                      <div className="text-white text-sm">John Smith - TechCorp Inc.</div>
                      <div className="text-gray-400 text-xs">AI predicts 85% conversion probability</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Next Action</span>
                        <span className="text-yellow-400 text-xs">Due Today</span>
                      </div>
                      <div className="text-white text-sm">Follow up on proposal</div>
                      <div className="text-gray-400 text-xs">AI suggests: Send case study</div>
                    </div>
                    <div className="bg-slate-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-cyan-400 text-sm">Pipeline Value</span>
                        <span className="text-green-400 text-xs">+12%</span>
                      </div>
                      <div className="text-white text-sm">$2.4M this quarter</div>
                      <div className="text-gray-400 text-xs">AI forecast: 92% confidence</div>
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
                  Intelligent CRM That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Learns & Adapts</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Our AI-powered CRM doesn't just store data—it learns from your interactions, predicts customer behavior, and automates your sales process to maximize conversions and customer satisfaction.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Intelligence</h3>
                  <p className="text-gray-300">Machine learning algorithms analyze your data to provide insights, predictions, and automated actions that drive results.</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Smart Lead Scoring</h3>
                  <p className="text-gray-300">Automatically score and prioritize leads based on their likelihood to convert, helping your team focus on the right prospects.</p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <Zap className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Workflow Automation</h3>
                  <p className="text-gray-300">Automate repetitive tasks, follow-ups, and data entry so your team can focus on building relationships and closing deals.</p>
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
                  Everything you need to manage customer relationships, automate sales processes, and drive growth with AI-powered intelligence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                        <p className="text-gray-300 text-sm">AI-powered automation that learns and improves over time.</p>
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
                  Choose the plan that fits your team size and business needs. All plans include our core AI features with no hidden fees.
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
                  Join thousands of sales teams who have transformed their processes with AI-powered CRM automation.
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
                  Experience the power of AI-powered CRM with our interactive demo. See how it can transform your sales process.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
                <div className="text-center mb-8">
                  <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">Interactive Demo</h3>
                  <p className="text-gray-300 mb-6">Try our AI CRM with sample data and see the AI features in action.</p>
                  <a
                    href="https://ziontechgroup.com/demo/ai-crm"
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
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of sales teams already using AI CRM Automation to increase conversions and streamline their processes.
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
              href="mailto:crm@ziontechgroup.com"
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

export default AICRMAutomationPage;