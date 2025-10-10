import React from 'react';
<<<<<<< HEAD
import { CheckCircle, Clock, Shield, Zap, Settings, Phone, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone, Mail, ArrowRight, Brain, Target, BarChart, Globe, Database, Smartphone, Lock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174

const AIAutomationPage: React.FC = () => {
  const automationServices = [
    {
<<<<<<< HEAD
      icon: Settings;
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
    {
      icon: Zap;
=======
      title: 'Process Automation',
      description: 'Streamline repetitive tasks with intelligent automation',
      icon: Zap,
      features: ['Task scheduling', 'Data processing', 'Report generation', 'Email automation'],
      color: 'from-blue-400 to-cyan-500'
    },
    {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      title: 'Workflow Optimization',
      description: 'Optimize business processes for maximum efficiency',
      icon: Settings,
      features: ['Process mapping', 'Bottleneck identification', 'Performance metrics', 'Continuous improvement'],
      color: 'from-purple-400 to-pink-500'
    },
    {
<<<<<<< HEAD
      icon: Shield;
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock;
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
    }
  ];

  const benefits = [
    'Reduce operational costs by 60%',
    'Increase process efficiency by 80%',
    'Eliminate human error completely',
    'Scale operations without additional staff',
    '24/7 automated operations',
    'Real-time monitoring and alerts'
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$499/month',
      description: 'Perfect for small businesses',
      features: [,
        'Up to 10 automated processes',
        'Basic AI capabilities',
        'Email support',
        'Standard integrations',
        '1 user account'
      ],
<<<<<<< HEAD
      popular: false},
=======
      popular: false;
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    {
      name: 'Professional',
      price: '$1,299/month',
      description: 'Ideal for growing companies',
      features: [,
        'Up to 50 automated processes',
        'Advanced AI capabilities',
        'Priority support',
        'Custom integrations',
        'Up to 10 user accounts',
        'API access',
        'Real-time monitoring'
      ],
<<<<<<< HEAD
      popular: true},
=======
      popular: true;
    },
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
    {
      name: 'Enterprise',
      price: '$2,999/month',
      description: 'For large organizations',
      features: [,
        'Unlimited processes',
        'Premium AI capabilities',
        'Dedicated support',
        'Advanced analytics',
        'Unlimited users',
        'White-label solution',
        'Custom workflows',
        'SLA guarantee'
      ],
<<<<<<< HEAD
      popular: false}
=======
      popular: false;
    }
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
  ];

  const useCases = [
    {
      title: 'Customer Service',
      description: 'Automate customer inquiries, ticket routing, and response generation',
      icon: '🎧',
      examples: ['Chatbot responses', 'Ticket classification', 'Escalation routing', 'Knowledge base updates']
    },
    {
      title: 'Sales & Marketing',
      description: 'Automate lead scoring, email campaigns, and customer segmentation',
      icon: '📈',
      examples: ['Lead qualification', 'Email sequences', 'Social media posting', 'Campaign optimization']
    },
    {
      title: 'Finance & Accounting',
      description: 'Automate invoice processing, expense management, and financial reporting',
      icon: '💰',
      examples: ['Invoice processing', 'Expense categorization', 'Financial reporting', 'Compliance checks']
    },
    {
      title: 'HR & Operations',
      description: 'Automate recruitment, onboarding, and employee management processes',
      icon: '👥',
      examples: ['Resume screening', 'Interview scheduling', 'Onboarding workflows', 'Performance tracking']
    }
  ];

<<<<<<< HEAD
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
=======
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
  ];

  const benefits = [
    {
      title: 'Increased Efficiency',
      description: 'Reduce manual work by up to 80% with intelligent automation',
      icon: TrendingUp,
      stat: '80%'
    },
    {
      title: 'Cost Savings',
      description: 'Lower operational costs through automated processes',
      icon: BarChart,
      stat: '60%'
    },
    {
      title: '24/7 Operations',
      description: 'Run your business around the clock with automated systems',
      icon: Clock,
      stat: '24/7'
    },
    {
      title: 'Error Reduction',
      description: 'Minimize human errors with consistent automated processes',
      icon: Shield,
      stat: '95%'
    }
  ];

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
        event_label: 'ai_automation_phone_number',
      });
    }
  };

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
      <Helmet>
        <title>AI Automation Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with AI-powered automation solutions. Streamline processes, reduce costs, and increase efficiency." />
        <meta name="keywords" content="AI automation, process automation, workflow optimization, business automation, intelligent automation" />
<<<<<<< HEAD
        <link rel="canonical" href="https: //ziontechgroup.com/ai-automation" />
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      </Helmet>

<<<<<<< HEAD
<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">AI Automation</h1><p className="text-xl text-cyan-400 mb-8">Intelligent process automation with decision-making capabilities</p><p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">Transform your business operations with cutting-edge AI automation. Achieve 80% efficiency increase,</p>
                60% time savings, and zero human error with our intelligent automation platform.</p>
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,)
        <Navigation />,)
        <main className="pt-24 pb-16 px-4">,)
          <div className="max-w-7xl mx-auto">),
            {/* Hero Section */}
            <section className="text-center mb-16">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
                AI Automation;
              </h1>
              <p className="text-xl text-cyan-400 mb-8">
                Intelligent process automation with decision-making capabilities;
              </p>,
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">,
                Transform your business operations with cutting-edge AI automation. Achieve 80% efficiency increase),
                60% time savings, and zero human error with our intelligent automation platform.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
              </p>

<<<<<<< HEAD
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a;
=======
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
                <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center"
<<<<<<< HEAD
                >Get Started</a>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >View Demo</a>
=======
                >
                  Get Started;
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a;
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </a>
              </div>,
            </section>,
,
            {/* Stats Section */}
            <section className="mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</div>
=======
              <div className="grid grid-cols-2 md: grid-cols-4 gap-8">,
                {stats.map((stat, index) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (}
>>>>>>> origin/merge-error-fixes
                  <div key={index} className="text-center cyber-card p-6">
=======
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, index) => (</section>
                  <div key={index} className="text-center cyber-card p-6"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div><div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced Automation Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
                Advanced Automation Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (}
>>>>>>> origin/merge-error-fixes
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center neon-text">
                Advanced Automation Features;
              </h2>,
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">,
                {features.map((feature, index) => (
                  <div key={index} className="cyber-card p-8 hover: scale-105 transition-all duration-300">
                    <div className="flex items-start space-x-4">,
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">,
                        <feature.icon className="w-6 h-6 text-white" />,
                      </div>,
                      <div>,
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-300 mb-4">{feature.description}</p>
                        <ul className="space-y-2">
<<<<<<< HEAD
                          {feature.benefits.map((benefit, benefitIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced Automation Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
                  <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300"></div>
                    <div className="flex items-start space-x-4"></div>
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <div></div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
=======
                          {feature.benefits.map((benefit, benefitIndex) => (}
>>>>>>> origin/merge-error-fixes
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
            <section className="mb-16">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Choose Your Plan<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Choose Your Plan</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingPlans.map((plan, index) => (</section><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
=======
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-12 text-center">
                Choose Your Plan;
              </h2>,
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">,
                {pricingPlans.map((plan, index) => (
=======
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                Choose Your Plan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (}
>>>>>>> origin/merge-error-fixes
                  <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                    {plan.popular && (}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                        </div>
                      </div>
                    )}

<<<<<<< HEAD
                    <div className="text-center mb-8"></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center"></div>
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-300 ml-1">{plan.period}</span><ul className="space-y-4 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
=======
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                        <span className="text-gray-300 ml-1">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (}
>>>>>>> origin/merge-error-fixes
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                        </CheckCircle>
                      ))}
<<<<<<< HEAD
                    <a
=======
                    </ul>

                    <a;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      href="/contact"
<<<<<<< HEAD
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular;
                          ? 'cyber-button'}
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}
=======
                      className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                        plan.popular
                          ? 'cyber-button'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
>>>>>>> origin/merge-error-fixes
                      }`}
<<<<<<< HEAD
                    >Get Started</a>
=======
                    >
                      Get Started;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </a>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center">
<<<<<<< HEAD
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card">
<<<<<<< HEAD
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Automate Your Business?<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.</p>
=======
                <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
                  Ready to Automate Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a;
=======
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card"></section>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Automate Your Business?</h2><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.</p>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                  <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    href="/contact"
                    className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center"
<<<<<<< HEAD
                  >Start Free Trial</a>
=======
                  >
                    Start Free Trial;
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  </a>
                  <a;
                    href="tel:+13024640950"
                    className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
<<<<<<< HEAD
                    <Phone className="w-5 h-5" >+1 302 464 0950</Phone>
                  </Phone>
                </div>
<<<<<<< HEAD
                <div className="mt-8 text-sm opacity-90">
=======
                    <Phone className="w-5 h-5" />
                    +1 302 464 0950;
                  </a>,
                </div>,
                <div className="mt-8 text-sm opacity-90">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
=======
                <div className="mt-8 text-sm opacity-90"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
=======
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with intelligent automation solutions that streamline processes, reduce costs, and increase efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI automation solutions designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {automationServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Why Choose AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automation</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the transformative power of intelligent automation in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-6">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI automation solutions are tailored for various industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to implementing AI automation in your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Analyze your current processes and identify automation opportunities.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy</h3>
                <p className="text-gray-300">Develop a comprehensive automation strategy tailored to your needs.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Deploy AI automation solutions with minimal disruption to operations.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Optimization</h3>
                <p className="text-gray-300">Continuously monitor and optimize automation performance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how AI automation can transform your business operations and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  onClick={handlePhoneClick}
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      </div>
    </>
  );
};

export default AIAutomationPage;