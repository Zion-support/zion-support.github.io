'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
=======
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield, Zap, Settings, Phone } from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-d933
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  const features = [
<<<<<<< HEAD
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

=======
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Intelligent automation of complex business processes with decision-making capabilities',
      benefits: ['80% process efficiency', 'Zero human error', '24/7 operation']
    },
    {
      icon: Zap,
      title: 'Workflow Optimization',
      description: 'AI-powered workflow analysis and optimization for maximum productivity',
      benefits: ['60% time savings', 'Smart routing', 'Dynamic optimization']
    },
    {
      icon: Shield,
      title: 'Decision Trees',
      description: 'Advanced decision-making algorithms for complex business scenarios',
      benefits: ['Consistent decisions', 'Risk mitigation', 'Compliance assurance']
    },
    {
      icon: Clock,
      title: 'Exception Handling',
      description: 'Intelligent handling of exceptions and edge cases in automated processes',
      benefits: ['Smart escalation', 'Context awareness', 'Learning capabilities']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,400',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 automated processes',
        'Basic AI decision making',
        'Email support',
        'Standard integrations',
        'Basic analytics'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$2,800',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 50 automated processes',
        'Advanced AI decision making',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'Workflow optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$5,600',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited processes',
        'Premium AI features',
        '24/7 support',
        'Custom development',
        'White-label options',
        'API access',
        'Dedicated support'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, value: '200+', label: 'Automated Processes' },
    { icon: TrendingUp, value: '80%', label: 'Efficiency Increase' },
    { icon: Clock, value: '60%', label: 'Time Saved' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
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
<<<<<<< HEAD
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

<<<<<<< HEAD
export default AIAutomationPage;
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
        
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
<<<<<<< HEAD
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="/demo"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 inline-flex items-center"
                >
                  View Demo
                </a>
              </div>
            </section>

            {/* Features Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{feature}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Why Choose AI Automation?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit}</h3>
                  </div>
                ))}
              </div>
            </section>

            {/* Automation Types Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Types of Automation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {automationTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-6">
                      <type.icon className="w-12 h-12 text-blue-600 mr-4" />
                      <h3 className="text-xl font-bold text-gray-900">{type.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.examples.map((example, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
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
=======
                  Get Started Today
>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
<<<<<<< HEAD
              <div className="mt-8 text-sm opacity-90">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
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
>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
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
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
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
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'cyber-button'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center cyber-card">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Automate Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of businesses already using AI Automation to achieve unprecedented efficiency and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5ca5
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-5a2f
export default AIAutomationPage;