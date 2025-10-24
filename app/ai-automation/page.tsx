<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';
export default function AiAutomation() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-900 text-white">
=======
    <React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
      <Helmet>
        <title>Ai Automation - Zion Tech Group</title>
        <meta name="description" content="Ai Automation solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Automation</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai automation solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
=======
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
    'Intelligent process automation',
    'Workflow optimization',
    'Data processing automation',
    'Customer service automation',
    'Document processing',
    'Email automation',
    'Task scheduling',
    'Report generation',
    'Data validation',
    'Integration management'
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, Mail, ArrowRight, Brain, Target, BarChart, Globe, Database, Smartphone, Lock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
      title: 'Process Automation',
      description: 'Streamline repetitive tasks with intelligent automation',
      icon: Zap,
      features: ['Task scheduling', 'Data processing', 'Report generation', 'Email automation'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Workflow Optimization',
      description: 'Optimize business processes for maximum efficiency',
      icon: Settings,
      features: ['Process mapping', 'Bottleneck identification', 'Performance metrics', 'Continuous improvement'],
      color: 'from-purple-400 to-pink-500'
    },
    {
      popular: false;
    },
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Up to 10 user accounts',
        'API access',
        'Real-time monitoring'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Premium AI capabilities',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label solution',
        'Custom workflows',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      icon: 'headphones',
      examples: ['Chatbot responses', 'Ticket classification', 'Escalation routing', 'Knowledge base updates']
    },
    {
      title: 'Sales & Marketing',
      description: 'Automate lead scoring, email campaigns, and customer segmentation',
      icon: 'trending-up',
      examples: ['Lead qualification', 'Email sequences', 'Social media posting', 'Campaign optimization']
    },
    {
      title: 'Finance & Accounting',
      description: 'Automate invoice processing, expense management, and financial reporting',
      icon: 'dollar-sign',
      examples: ['Invoice processing', 'Expense categorization', 'Financial reporting', 'Compliance checks']
    },
    {
      title: 'HR & Operations',
      description: 'Automate recruitment, onboarding, and employee management processes',
      icon: 'users',
      examples: ['Resume screening', 'Interview scheduling', 'Onboarding workflows', 'Performance tracking']
    }
  ];

      title: 'Customer Service Automation',
      description: 'Enhance customer experience with AI-powered support',
      icon: Users,
      features: ['Chatbots', 'Ticket routing', 'Response templates', 'Sentiment analysis'],
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Data Analysis Automation',
      description: 'Automate data collection, processing, and insights generation',
      icon: TrendingUp,
      features: ['Real-time analytics', 'Predictive modeling', 'Automated reporting', 'Data visualization'],
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Marketing Automation',
      description: 'Automate marketing campaigns and customer engagement',
      icon: Target,
      features: ['Campaign optimization', 'Customer segmentation', 'Content generation', 'Performance tracking'],
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Security Automation',
      description: 'Automate security monitoring and threat response',
      icon: Shield,
      features: ['Threat detection', 'Incident response', 'Vulnerability scanning', 'Compliance monitoring'],
      color: 'from-red-400 to-pink-500'
    }
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual work by up to 80%',
      icon: Zap
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs significantly',
      icon: TrendingUp
    },
    {
      title: 'Scalability',
      description: 'Handle growing workloads automatically',
      icon: BarChart
    },
    {
      title: 'Accuracy',
      description: 'Minimize human errors in repetitive tasks',
      icon: Shield
    }
  ];

<<<<<<< HEAD
  return (
    <>
      <Helmet>
        <title>AI Automation - Intelligent Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with intelligent process automation. Achieve 80% efficiency increase and 60% time savings with AI-powered automation." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Streamline your business processes with intelligent automation
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                AI Automation
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Intelligent process automation with decision-making capabilities
              </p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Transform your business operations with cutting-edge AI automation. Achieve 80% efficiency increase, 
                60% time savings, and zero human error with our intelligent automation platform.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
=======
  const industries = [
    { name: 'Healthcare', description: 'Patient data management, appointment scheduling, medical record automation' },
    { name: 'Finance', description: 'Transaction processing, fraud detection, compliance reporting' },
    { name: 'E-commerce', description: 'Inventory management, order processing, customer service automation' },
    { name: 'Manufacturing', description: 'Quality control, supply chain optimization, predictive maintenance' },
    { name: 'Real Estate', description: 'Property management, lead generation, document processing' },
    { name: 'Education', description: 'Student enrollment, grading automation, learning analytics' }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_automation_phone_number'});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline processes, reduce costs, and increase efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <Navigation />
        <main className="pt-24 pb-16 px-4"></main>
          <div className="max-w-7xl mx-auto"></div>
            {/* Hero Section */}
            <section className="text-center mb-16"></section>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Automation</h1><p className="text-xl text-cyan-400 mb-8">Intelligent process automation with decision-making capabilities</p><p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Transform your business operations with cutting-edge AI automation. Achieve 80% efficiency increase,</p>
                60% time savings, and zero human error with our intelligent automation platform.</p>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">)
        <Navigation />)
        <main className="pt-24 pb-16 px-4">)
          <div className="max-w-7xl mx-auto">),
            {/* Hero Section */}
            <section className="text-center mb-16"></section>
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text"></h1>
                AI Automation;
              </h1>
              <p className="text-xl text-cyan-400 mb-8"></p>
                Intelligent process automation with decision-making capabilities;
              </p>,
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">,
                Transform your business operations with cutting-edge AI automation. Achieve 80% efficiency increase),
                60% time savings, and zero human error with our intelligent automation platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
                ></a>
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a;
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                ></a>
                  View Demo;
                </a>
              </div>,
            </section>,
,
            {/* Stats Section */}
            <section className="mb-16"></section>
              <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,
                {stats.map((stat, index) => (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
                {stats.map((stat, index) => (}
                  <div key={index} className="text-center cyber-card p-6"></div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</section>
                  <div key={index} className="text-center cyber-card p-6"></div>
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div><div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
            </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1

<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Automation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai automation solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
=======
=======
            {/* Features Section */}
            <section className="mb-16"></section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
                Advanced Automation Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
                {features.map((feature, index) => (}
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                    <div className="flex items-start space-x-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div></div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text"></h2>
                Advanced Automation Features;
              </h2>,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300"></div>
                    <div className="flex items-start space-x-4">,
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">,
                        <feature.icon className="w-6 h-6 text-white" />,
                      </div>,
                      <div>,
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <ul className="space-y-2"></ul>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced Automation Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                    <div className="flex items-start space-x-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div></div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
                          {feature.benefits.map((benefit, benefitIndex) => (}
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></li>
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing Section */}
            <section className="mb-16"></section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Choose Your Plan</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingPlans.map((plan, index) => (</section><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center"></h2>
                Choose Your Plan;
              </h2>,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
                {pricingPlans.map((plan, index) => (
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"></h2>
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"></div>
                {pricingPlans.map((plan, index) => (}
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}></div>
                    {plan.popular && (}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold"></div>
                          Most Popular;
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-8"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center"></div>
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8"></ul>
                      {plan.features.map((feature, featureIndex) => (}
                        <li key={featureIndex} className="flex items-center text-gray-300"></li>
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
                    </ul>

                    <a;
                      href="/contact"
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                        plan.popular
                          ? 'cyber-button'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    ></a>
                      Get Started;
                    </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
<<<<<<< HEAD
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a free consultation and discover how AI automation can transform your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
=======
            <section className="text-center"></section>
                <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text"></h2>
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                  Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <a;
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card"></section>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Automate Your Business?</h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.</p>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <a
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
                  ></a>
                    Start Free Trial;
                  </a>
                  <a;
                    href="tel:+13024640950"
                    className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  ></a>
                    <Phone className="w-5 h-5" />
                    +1 302 464 0950;
                  </a>,
                </div>,
                <div className="mt-8 text-sm opacity-90">,
                <div className="mt-8 text-sm opacity-90"></div>
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
            </section>
          </div>
        </main>

        <Footer />
<<<<<<< HEAD
      </div>
    </>
  );
};

        <main className="pt-16">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Automate your business processes with intelligent AI solutions that save time, reduce costs, and improve efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="bg-transparent text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors">
                Learn More
              </button>
=======
        {/* Hero Section */}
        <section className="pt-24 pb-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                Transform your business with intelligent automation solutions that streamline processes, reduce costs, and increase efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive AI automation solutions designed to transform your business operations.
              </p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </section>

          {/* Stats Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center cyber-card p-6">
                  <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Advanced Automation Features
            </h2>
            
<<<<<<< HEAD
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Choose Your Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
                  )}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group"></div>
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}></div>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3"></ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
=======
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Why Choose AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the transformative power of intelligent automation in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our AI automation solutions are tailored for various industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"></div>
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </div>
          </div>
        </div>
=======
        {/* Process Section */}
        <section className="py-16 bg-white/5"></section>
          <div className="container mx-auto px-4"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                A systematic approach to implementing AI automation in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Analyze your current processes and identify automation opportunities.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive automation strategy tailored to your needs.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy AI automation solutions with minimal disruption to operations.</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6"></div>
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize automation performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16"></section>
          <div className="container mx-auto px-4"></div>
            <div className="max-w-4xl mx-auto text-center"></div>
              <h2 className="text-4xl font-bold text-white mb-6"></h2>
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Let's discuss how AI automation can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                ></a>
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                ></Link>
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      </div>
<<<<<<< HEAD
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
}
=======
    </>
  );
};

export default AIAutomationPage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03b1
=======
import React from 'react';
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
