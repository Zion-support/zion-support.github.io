
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Code, Search, GitBranch, Database, Shield, CheckCircle, Zap, Brain, BarChart, Users } from 'lucide-react';
const AICodeAssistantProPage: React.FC = () => {
import React from 'react'
import { Link } from 'react-router-dom'
export default function AICodeAssistantProPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality',
      color: 'from-red-500 to-pink-500';
    };
  ];
  const useCases = [
    {
      title: 'Rapid Prototyping',
      description: 'Quickly build and test new features with AI-generated code',
      benefits: ['Reduce development time by 70%', 'Generate boilerplate code instantly', 'Focus on business logic']
    },
    {
      title: 'Code Review & Optimization',
      description: 'Automatically review code for best practices and performance',
      benefits: ['Catch bugs before deployment', 'Improve code quality', 'Learn from AI suggestions']
    },
    {
      title: 'Legacy Code Modernization',
      description: 'Update and modernize existing codebases with AI assistance',
      benefits: ['Refactor complex code', 'Update deprecated patterns', 'Maintain functionality']
    }
  ];
  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI features',
        '5 programming languages',
        'Email support',
        'Basic analytics'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced AI features',
        'All programming languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Advanced security',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false;
    }
  ];
export default function AICodeAssistantPro() {
  return (
    <div><div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
      <Helmet></div>
        <title>AI Code Assistant Pro - Zion Tech Group<div><div></title>
        <meta name="description" content="Professional AI-powered code generation and assistance tool. Boost productivity with intelligent code completion, debugging, and analysis." /></div></div>
        <meta name="keywords" content="AI code assistant, code generation, programming AI, developer tools, code completion" /><div></div>
      </Helmet></div></div>
        <>
      <title>AI Code Assistant Pro - Zion Tech Group</title>
            <h1 className="text-4xl font-bold text-white mb-6">AI Code Assistant Pro</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI code assistant pro services coming soon.</p>
              Contact Us
  );
      </>
      {/* Hero Section */}
      <div><div><section className="relative py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-7xl mx-auto text-center"></div><div><div></div></div></div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"><div></h1></div></div></div>
            AI Code Assistant
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {' '}Pro
            <div><div></span>
          </h1></div></div>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"><div></div></p></div></div>
            Boost your development productivity with AI-powered code generation, intelligent completion,
            and automated debugging. Built for professional developers and teams.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><div></div></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Free Trial
              <div><div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div></div>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              View Demo
            <div><div></Link>
          </div></div></div>
        </div><div></div>
      </section></div></div>
      {/* Features Section */}
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Powerful Development Features
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><div></p></div></div></div>
              Everything you need to accelerate your development workflow and write better code faster.
            <div><div></p>
          </div></div></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><div></div></div></div></div>
            {features.map((feature, index) => (
              <div><div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"></div></div></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}><div></div></div></div></div>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* Use Cases Section */}
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Perfect for Every Developer
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><div></p></div></div></div>
              Whether you're a solo developer or part of a large team, our AI assistant adapts to your needs.
            <div><div></p>
          </div></div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div></div></div></div></div>
            {useCases.map((useCase, index) => (
              <div><div><div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"></div></div></div>
                <h3 className="text-xl font-semibold text-white mb-3"></div>{useCase.title}</h3>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* Pricing Section */}
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-7xl mx-auto"></div><div><div></div></div></div>
          <div className="text-center mb-16"><div></div></div></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
              Simple, Transparent Pricing
            <div></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"><div></p></div></div></div>
              Choose the plan that fits your development needs. No hidden fees, no surprises.
            <div><div></p>
          </div></div></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div></div></div></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${plan.popular ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/20'} relative`}></div>
                {plan.popular && (
                  <div><div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div></div></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                      Most Popular
                    </span>
                  </div>
                )}
                <div><div><div className="text-center mb-6"></div></div></div>
                  <h3 className="text-2xl font-bold text-white mb-2"></div>{plan.name}<div></h3>
                  <div className="flex items-baseline justify-center"><div></div></div></div></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}<div><div></span>
                  </div></div></div>
                  <p className="text-gray-300 mt-2"></div>{plan.description}<div><div></p>
                </div></div></div>
                <ul className="space-y-3 mb-8"></div>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
    <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
      <Helmet><div></div></Helmet></div></div>
        <title>AI Code Assistant Pro - Zion Tech Group | Intelligent Code Generation<div></title>
        <meta name="description" content="Revolutionary AI-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month."><div></meta></div></div></div>
        <div><div><meta name="keywords" content="AI code assistant, code generation, intelligent debugging, code analysis, programming AI, development tools"></meta></div></div>
        <meta name="robots" content="index, follow"></div><div><div></meta></div></div>
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro"><div></link></div></div></div>
      </Helmet>
      {/* Hero Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
        <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
            <Code className="w-5h-5ml-2"><div></Code></div></div></div>
            <span />AI-Powered Code Generation<div><div></span>
          </div></div></div>
          <h1 className="w-5h-5ml-2"><div></div></h1></div></div>
            AI Code Assistant;
            <div><div><br></br></div></div>
            <span className="w-5h-5ml-2" /></div>Pro;
            <div><div></span>
          </h1></div></div>
          <p className="w-5h-5ml-2"></div>Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis.
            Increase development speed by 300% while reducing bugs by 80%.
          <div></p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <div><div><Link to="/contact" className="groupbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105"></Link></div></div>
              <span /></div>Start Free Trial<div></span>
              <ArrowRight className="w-5h-5ml-2"><div></ArrowRight></div></div></div>
            <div></Link>
            <Link to="#pricing" className="groupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm"><div></Link></div></div></div>
              <span />View Pricing<div></span>
              <ArrowRight className="w-5h-5ml-2"><div></ArrowRight></div></div></div>
            </Link>
          </div>
          {/* Key Stats */}
          <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">300%</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Faster Development<div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">80%</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Fewer Bugs<div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">50+</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Languages Supported<div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">25 K+</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Active Developers<div><div></div>
          </div></div></div>
      </section></div>
      {/* Benefits Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
          <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <h2 className="w-5h-5ml-2"><div></div></h2></div></div>
              Why Choose Our <span className="w-5h-5ml-2" />AI Code Assistant?<div><div></span>
            </h2></div></div>
            <p className="w-5h-5ml-2"></div>Experience the future of software development with cutting-edge AI technology that works for your team.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {benefits.map((benefit, index) => (
              <div><div><div key={index} className="text-centergroup"></div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>{benefit.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>
      {/* Supported Languages Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2"></h2>
              Support for <span className="w-5h-5ml-2" />50+ Languages<div><div></span>
            </h2></div></div>
            <p className="w-5h-5ml-2"></div>From popular languages to cutting-edge frameworks, our AI understands and generates code in any language you need.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {supportedLanguages.map((language, index) => (
              <div><div><div key={index} className="grouptext-center"></div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                  <span className="w-5h-5ml-2" />{language}
                  </span>
                </div>
            ))}
          </div>
      </section>
      {/* Features Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2"></h2>
              Powerful Features for <span className="w-5h-5ml-2" />Smart Development<div><div></span>
            </h2></div></div>
            <p className="w-5h-5ml-2"></div>Everything you need to accelerate development with AI-powered intelligence and automation.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {features.map((feature, index) => (
              <div><div><div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10"></div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>
      {/* Integrations Section */}
      <div><div><section className="w-5h-5ml-2"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2"></h2>
              Seamless <span className="w-5h-5ml-2" />Integrations<div><div></span>
            </h2></div></div>
            <p className="w-5h-5ml-2"></div>Works with your favorite development tools and platforms for a unified coding experience.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {integrations.map((integration, index) => (
              <div><div><div key={index} className="grouptext-center"></div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                  <span className="w-5h-5ml-2" />{integration.icon}<div><div></span>
                </div></div></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>{integration.name}
                </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}
      <div><div><section id="pricing" className="py-20px-4relative"></section></div></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div><div></div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            <h2 className="w-5h-5ml-2"></h2>
              Simple, Transparent <span className="w-5h-5ml-2" />Pricing<div><div></span>
            </h2></div></div>
            <p className="w-5h-5ml-2"></div>Choose the plan that fits your development needs. All plans include our core AI features.
            <div><div></p>
          </div></div></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10'
                  : 'border-white/20 hover: border-cyan-400/30'
              }`}></div>
                {plan.popular && (
                  <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>Most Popular;
                    </div>
                )}
                <div><div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                  <h3 className="w-5h-5ml-2" /></div>{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}<div></p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"><div></div></div></div></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}<div><div></span>
                  </div></div></div>
                <ul className="w-5h-5ml-2"><div></div></ul></div></div>
                  {plan.features.map((feature, featureIndex) => (
                    <div><div><li key={featureIndex} className="flex items-centerspace-x-3"></li></div></div>
                      <CheckCircle className="w-5h-5ml-2"><div></div></CheckCircle></div></div>
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                <div></ul>
                <Link;</Link><div></Link></div></div></div>
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          <div><div></div>
        </div></div></div>
      </section></div>
      {/* CTA Section */}
      <div><div><section className="py-20 px-4 sm:px-6 lg:px-8"></section></div></div>
        <div className="max-w-4xl mx-auto text-center"></div><div><div></div></div></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"><div></h2></div></div></div>
            Ready to Supercharge Your Development?
          <div></h2>
          <p className="text-xl text-gray-300 mb-8"><div></p></div></div></div>
            Join thousands of developers already using our AI assistant to write better code faster.
          <div></p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"><div></div></div></div></div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Free Trial
              <div><div><ArrowRight className="w-5 h-5 ml-2" />
            </Link></div></div>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            ></div>
              Schedule a Demo
            <div><div></Link>
          </div></div></div>
        </div><div></div>
      </section></div></div>
    </div>
  );
};
export default AICodeAssistantProPage;