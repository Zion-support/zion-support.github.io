import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Code, CheckCircle, Star, Users, Zap, Shield, 
  ArrowRight, Phone, Mail, MapPin, ExternalLink,
  Brain, Terminal, GitBranch, Database, Cloud,
  Lock, Clock, Award, Target, Rocket
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FuturisticBackground from '../components/FuturisticBackground';

const AICodeAssistantPro: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Code Suggestions',
      description: 'Get intelligent code completions powered by advanced machine learning models that understand your coding patterns and context.'
    },
    {
      icon: Terminal,
      title: 'Real-time Code Review',
      description: 'Automated code analysis with instant feedback on code quality, performance, and security vulnerabilities.'
    },
    {
      icon: GitBranch,
      title: 'Git Integration',
      description: 'Seamless integration with Git repositories, automatic commit message generation, and branch management assistance.'
    },
    {
      icon: Database,
      title: 'Multi-language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, TypeScript, Java, C++, Go, and more.'
    },
    {
      icon: Cloud,
      title: 'Cloud Sync',
      description: 'Sync your coding preferences and AI models across all your devices with secure cloud storage.'
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Built-in security vulnerability detection and suggestions for secure coding practices.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'AI code suggestions',
        'Basic code review',
        '5 programming languages',
        'Git integration',
        'Email support',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Best for professional developers',
      features: [
        'Advanced AI suggestions',
        'Comprehensive code review',
        'All programming languages',
        'Advanced Git features',
        'Priority support',
        '3 user accounts',
        'Custom AI models',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For teams and organizations',
      features: [
        'Everything in Professional',
        'Team collaboration tools',
        'Unlimited user accounts',
        'Custom integrations',
        'Dedicated support',
        'On-premise deployment',
        'Advanced analytics',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Developer',
      company: 'TechCorp Inc.',
      content: 'AI Code Assistant Pro has revolutionized my development workflow. The code suggestions are incredibly accurate and save me hours every day.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The security scanning feature caught several vulnerabilities we missed. It\'s like having a senior developer reviewing every line of code.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Full Stack Developer',
      company: 'DevStudio',
      content: 'The multi-language support is fantastic. I can work on Python, JavaScript, and Go projects seamlessly with the same AI assistant.',
      rating: 5
    }
  ];

  const stats = [
    { number: '50+', label: 'Programming Languages', icon: Code },
    { number: '10K+', label: 'Active Developers', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Clock },
    { number: '4.9/5', label: 'User Rating', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group | Advanced AI Coding Tool</title>
        <meta name="description" content="Boost your coding productivity with AI Code Assistant Pro. Advanced AI-powered code suggestions, real-time review, and multi-language support for developers." />
        <meta name="keywords" content="AI code assistant, coding tool, code review, programming, developer tools, AI coding" />
      </Helmet>

      <FuturisticBackground />
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
                  <Code className="w-4 h-4 mr-2" />
                  AI-Powered Development Tool
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  AI Code Assistant
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Pro
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Supercharge your coding productivity with our advanced AI-powered assistant. 
                  Get intelligent code suggestions, real-time reviews, and seamless Git integration.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  <a
                    href="#demo"
                    className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    Watch Demo
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Free 14-day trial
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    No credit card required
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="font-mono text-sm text-gray-300">
                    <div className="text-cyan-400">// AI Code Assistant Pro</div>
                    <div className="text-white">function optimizeCode() {`{`}</div>
                    <div className="text-green-400 ml-4">// AI suggests improvements</div>
                    <div className="text-white ml-4">const result = data</div>
                    <div className="text-cyan-400 ml-8">.map(item =&gt; item.value)</div>
                    <div className="text-cyan-400 ml-8">.filter(val =&gt; val &gt; 0)</div>
                    <div className="text-cyan-400 ml-8">.reduce((a, b) =&gt; a + b, 0);</div>
                    <div className="text-white ml-4">return result;</div>
                    <div className="text-white">{`}`}</div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12 text-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to write better code faster with AI assistance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your development needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                    plan.popular 
                      ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                      : 'border-slate-700/50'
                  } hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block w-full py-3 rounded-lg text-center font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">What Developers Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of developers who have transformed their coding experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Code Smarter?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the future of AI-powered development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <a
                href="tel:+13024640950"
                className="group border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Phone className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">+1 302 464 0950</div>
                  <div className="text-sm text-gray-400">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">kleber@ziontechgroup.com</div>
                  <div className="text-sm text-gray-400">Email Support</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <div>
                  <div className="font-semibold">Middletown, DE</div>
                  <div className="text-sm text-gray-400">Headquarters</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeAssistantPro;