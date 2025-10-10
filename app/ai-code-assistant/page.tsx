'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText, ArrowRight, Zap, Brain, Shield, Users, Star, Phone, Mail, MapPin } from 'lucide-react';

const AICodeAssistantPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
<<<<<<< HEAD
      icon: Code,
    {}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions.',
      benefits: ['Natural language to code', 'Code completion', 'Smart suggestions', 'Multi-language support']
    },
    {
<<<<<<< HEAD
      icon: Bug,
    {}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality.',
      benefits: ['Bug detection', 'Auto-fix suggestions', 'Code optimization', 'Quality analysis']
    },
    {
<<<<<<< HEAD
      icon: Terminal,
    {}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
      icon: Terminal,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more.',
      benefits: ['50+ languages', 'Syntax highlighting', 'Language-specific features', 'Cross-platform support']
    },
    {
<<<<<<< HEAD
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git, GitHub, and other version control systems.',
      benefits: ['Git integration', 'GitHub support', 'Branch management', 'Commit assistance']
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Learn from your coding patterns and provide personalized suggestions and improvements.',
      benefits: ['Pattern learning', 'Personalized suggestions', 'Code style adaptation', 'Continuous improvement']
    },
    {
      icon: Shield,
      title: 'Security Analysis',
      description: 'Automatically scan code for security vulnerabilities and suggest secure coding practices.',
      benefits: ['Vulnerability scanning', 'Security recommendations', 'Best practices', 'Compliance checking']
      icon: GitBranch,
    {}
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git, GitHub, and other version control systems',
      color: 'text-orange-400'}
  ];

  const pricingPlans = [
    {}
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [,
        'Up to 1,000 code generations/month',
        'Basic debugging assistance',
        '10 programming languages',
        'Email support',
        'VS Code extension',
        'API access'
      ],
      popular: false},
      popular: false,
    },
    {
    {}
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [,
        'Up to 10,000 code generations/month',
        'Advanced debugging & optimization',
        '50+ programming languages',
        'Priority support',
        'Team collaboration features',
        'Custom integrations',
        'Code review assistance'
      ],
      popular: true},
      popular: true,
    },
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Unlimited code generations',
        'AI-powered code review',
        'All programming languages',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced security features',
        'Custom AI models'
      ],
      popular: false}
      popular: false,
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
    }
  ];

  const benefits = [
    'Increase coding speed by 70%',
    'Reduce bugs by 80%',
    'Improve code quality by 90%',
    'Lower development time by 60%',
    'Enable faster learning',
    'Automate repetitive tasks',
    'Scale development teams',
    'Enhance code security'
  ];

  const useCases = [
<<<<<<< HEAD
    {
      title: 'Software Development',
      description: 'Accelerate software development with AI-powered coding assistance',
      icon: '💻'
    },
    {
      title: 'Code Review',
      description: 'Automate code reviews and improve code quality with AI analysis',
      icon: '🔍'
    },
    {
      title: 'Learning & Training',
      description: 'Learn new programming languages and concepts with AI guidance',
      icon: '📚'
    },
    {
      title: 'Legacy Code Migration',
      description: 'Modernize legacy codebases with AI-powered refactoring tools',
      icon: '🔄'
    },
    {
      title: 'API Development',
      description: 'Build and document APIs faster with AI-generated code and documentation',
      icon: '🔌'
    },
    {
      title: 'Testing & QA',
      description: 'Generate comprehensive test cases and improve testing coverage',
      icon: '🧪'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Assistant - Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI Code Assistant. Intelligent code generation, debugging, and optimization for faster, better software development." />
        <meta name="keywords" content="AI code assistant, code generation, debugging, programming, software development, code optimization, AI coding" />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-8">
              <Code className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Code Assistant
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Boost your coding productivity with our AI Code Assistant. Intelligent code generation, 
              debugging, and optimization for faster, better software development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center">
                Start Coding
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-indigo-400 text-indigo-300 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all duration-300">
                View Demo
              </button>
    {}
      title: 'Code Generation',
      description: 'Generate boilerplate code, functions, and complete modules from descriptions',
      icon: Code,
      result: '90% faster'},
    {}
      title: 'Bug Fixing',
      description: 'Automatically detect and fix common bugs and security vulnerabilities',
      icon: Bug,
      result: '95% accuracy'},
    {}
      title: 'Code Review',
      description: 'AI-powered code review with suggestions for improvements and best practices',
      icon: FileText,
      result: '80% quality'},
    {}
      title: 'Documentation',
      description: 'Generate comprehensive documentation and comments for your code',
      icon: FileText,
      result: '100% coverage'}
  ];

  const supportedLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
    'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'Perl', 'Haskell', 'Clojure', 'Elixir', 'Dart'
  ];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet>
        <title>AI Code Assistant - Intelligent Programming Assistant | Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Generate code, debug issues, and improve code quality with intelligent suggestions." />
        <meta name="keywords" content="AI code assistant, code generation, programming assistant, debugging, code review, developer tools" />
        <meta property="og: title" content="AI Code Assistant - Intelligent Programming Assistant" />
        <meta property="og:description" content="Boost your coding productivity with our AI-powered code assistant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-code-assistant" />
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></section>
            <Code className="w-4 h-4" />
            <span>AI-Powered Development</span><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Code Assistant</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Supercharge your development workflow with our intelligent AI code assistant.</p>
            Generate code, debug issues, and improve code quality with advanced AI technology.</p>
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-code-assistant" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}</div>
        <section className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Code className="w-4 h-4" />
            <span>AI-Powered Development</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
            AI Code Assistant;</h1>
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Supercharge your development workflow with our intelligent AI code assistant.),
            Generate code, debug issues, and improve code quality with advanced AI technology.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950<a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >Start Coding Smarter</a>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >
              Start Coding Smarter;
            </a>
          </div>,
        </section>,
,
        {/* Key Benefits */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">90%<div className="text-white font-semibold mb-2">Faster Development<div className="text-gray-400 text-sm">Generate code 90% faster than traditional methods</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></section>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
              <div className="text-3xl font-bold text-purple-400 mb-2">90%</div><div className="text-white font-semibold mb-2">Faster Development</div><div className="text-gray-400 text-sm">Generate code 90% faster than traditional methods</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div><div className="text-white font-semibold mb-2">Languages</div><div className="text-gray-400 text-sm">Support for 50+ programming languages</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div><div className="text-white font-semibold mb-2">Bug Detection</div><div className="text-gray-400 text-sm">Automatically detect and fix 95% of common bugs</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7<div className="text-white font-semibold mb-2">Available<div className="text-gray-400 text-sm">AI assistant available around the clock</div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div><div className="text-white font-semibold mb-2">Available</div><div className="text-gray-400 text-sm">AI assistant available around the clock</div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced Code Assistant Features
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Our AI Code Assistant combines cutting-edge technology with developer expertise
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (}</div>
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Available</div>
              <div className="text-gray-400 text-sm">AI assistant available around the clock</div>,
            </div>,
          </div>,
        </section>,
,
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,</div>
                <div className="flex items-start space-x-4">,</div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-indigo-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Applications & Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                From individual developers to enterprise teams, our AI Code Assistant serves diverse needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300">{useCase.description}</p>
        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (}</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,</div>
                <div className="flex items-center justify-between mb-4">,</div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Code Assistant?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the future of software development with our revolutionary AI technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white font-medium">{benefit}</p>
        {/* Supported Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Programming Languages<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">{supportedLanguages.map((language, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Programming Languages</h2>
          <div className="grid grid-cols-2 md: grid-cols-4 lg:grid-cols-5 gap-4">,
            {supportedLanguages.map((language, index) => (</div>
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300 text-center">,</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Programming Languages</h2><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">{supportedLanguages.map((language, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {supportedLanguages.map((language, index) => (}</div>
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
                <div className="text-white font-medium">{language}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
            {pricingPlans.map((plan, index) => (</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (}</div>
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (}</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular;</div>
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><p className="text-gray-400 mt-2">{plan.description}</p><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                    </ul><li key={featureIndex} className="flex items-center space-x-3">
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Boost Your Coding?
              </h2>
              <p className="text-xl text-indigo-100 mb-8">
                Join thousands of developers who are already using our AI Code Assistant
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Code Smarter?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 2,000+ developers already using our AI Code Assistant to boost their productivity.</p>
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <a;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ></a><MessageSquare className="w-5 h-5 mr-2" >Email Us</MessageSquar>
            </MessageSquare>
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      >
              <MessageSquare className="w-5 h-5 mr-2" />
              Email Us;
            </a>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b629
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AICodeAssistantPage;
