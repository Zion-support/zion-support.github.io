import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import React  from 'react';
=======
import React from 'react';
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AICodeAssistantProPage() {
  const features = [
    {
      icon: <Bot className="w-6h-6text-cyan-400" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <Code className="w-6h-6text-emerald-400" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <Search className="w-6h-6text-purple-400" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <GitBranch className="w-6h-6text-orange-400" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems'
    },
    {
      icon: <Database className="w-6h-6text-pink-400" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more'
    },
    {
      icon: <Shield className="w-6h-6text-red-400" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality'
    }
  ]

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
        'Basic analytics',
        'VS Code extension'
      ],
      popular: false
    },
    {
      name: 'Team',
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
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Senior Software Engineer',
      content: 'Increased my coding speed by 300% and reduced bugs by 80%. The AI suggestions are incredibly accurate.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup CTO',
      content: 'Our team productivity skyrocketed. The code generation quality is enterprise-grade and saves us hours daily.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Full-Stack Developer',
      content: 'The debugging features are game-changing. It catches issues I would have missed and suggests perfect fixes.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-8h-8text-cyan-400" />,
      title: '300% Faster Development',
      description: 'AI-powered code generation accelerates development cycles'
    },
    {
      icon: <Target className="w-8h-8text-emerald-400" />,
      title: '80% Fewer Bugs',
      description: 'Advanced analysis and debugging reduce code issues significantly'
    },
    {
      icon: <Clock className="w-8h-8text-purple-400" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated code generation and optimization eliminate repetitive tasks'
    },
    {
      icon: <Shield className="w-8h-8text-orange-400" />,
      title: 'Enterprise Security',
      description: 'Built-in security scanning ensures code quality and compliance'
    }
  ]

  const integrations = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '☕' },
    { name: 'Sublime Text', icon: '📝' },
    { name: 'Atom', icon: '⚛️' },
    { name: 'Vim', icon: '📄' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'Bitbucket', icon: '🪣' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' }
  ]

  const supportedLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust',
    'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'SQL',
    'HTML', 'CSS', 'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask'
  ]

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet />
        <title   />AI Code Assistant Pro - Zion Tech Group | Intelligent Code Generation</title>
=======
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </div>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group | Intelligent Code Generation</title>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
        <meta name="description" content="Revolutionary AI-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month." / / />
        <meta name="keywords" content="AI code assistant, code generation, intelligent debugging, code analysis, programming AI, development tools" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
      </Helmet>

      {/* Hero Section */}
    <>
      <section className="relative py-20px-4overflow-hidden" />
<<<<<<< HEAD
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
            <Code className="w-4h-4" />
            <span   />AI-Powered Code Generation</span>
=======
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <div className="relative max-w-7 xlmx-autotext-center">
        </div>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </div>
            <Code className="w-4h-4" / />
            <span>AI-Powered Code Generation</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          </div>
          
          <h1 className="text-4xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8leading-tight" />
            AI Code Assistant
    <>
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent">Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
<<<<<<< HEAD
              Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View Pricing</span>
=======
            Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>
          
    <>
          <div className="flex flex-col sm:flex-row gap-6justify-centermb-16">
        </div>
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span>View Pricing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
<<<<<<< HEAD
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
            <div className="text-center">
              <div className="text-3 xl font-boldtext-cyan-400mb-2"   />300%</div>
              <div className="text-gray-300text-sm"   />Faster Development</div>
            <div className="text-center">
              <div className="text-3 xl font-boldtext-purple-400mb-2"   />80%</div>
              <div className="text-gray-300text-sm"   />Fewer Bugs</div>
            <div className="text-center">
              <div className="text-3 xl font-boldtext-pink-400mb-2"   />50+</div>
              <div className="text-gray-300text-sm"   />Languages Supported</div>
            <div className="text-center">
              <div className="text-3 xl font-boldtext-emerald-400mb-2"   />25 K+</div>
              <div className="text-gray-300text-sm"   />Active Developers</div>
=======
    <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto">
        </div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-cyan-400mb-2">300%</div>
              <div className="text-gray-300text-sm">Faster Development</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-purple-400mb-2">80%</div>
              <div className="text-gray-300text-sm">Fewer Bugs</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-pink-400mb-2">50+</div>
              <div className="text-gray-300text-sm">Languages Supported</div>
            <div className="text-center" />
              <div className="text-3 xl font-boldtext-emerald-400mb-2">25 K+</div>
              <div className="text-gray-300text-sm">Active Developers</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          </div>
      </section>

      {/* Benefits Section */}
    <>
      <section className="py-20px-4relative" />
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />AI Code Assistant?</span>
=======
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">AI Code Assistant?</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Experience the future of software development with cutting-edge AI technology that works for your team.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            {benefits.map((benefit, index) => (
    <>
              <div key="{index}" className="text-centergroup" />
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110transition-transformduration-300">{benefit.icon}
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                </h3>
                <p className="text-gray-300">
              {benefit.description}
=======
                <h3 className="text-xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{benefit.title}
                </h3>
                <p className="text-gray-300" />
                  {benefit.description}
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </p>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Supported Languages Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Support for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />50+ Languages</span>
=======
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Support for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">50+ Languages</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              From popular languages to cutting-edge frameworks, our AI understands and generates code in any language you need.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4lg:grid-cols-6gap-4">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            {supportedLanguages.map((language, index) => (
    <>
              <div key="{index}" className="grouptext-center" />
                <div className="w-full h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:bg-white/20 transition-allduration-300group-hover:scale-105">
<<<<<<< HEAD
                  <span className="text-gray-300 group-hover:text-whitetransition-colorsfont-medium"  />{language}
=======
        </div>
                  <span className="text-gray-300 group-hover:text-whitetransition-colorsfont-medium">{language}
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </span>
                </div>
            ))}
    <>
          </div>
      </section>

      {/* Features Section */}
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className="relative max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Smart Development</span>
=======
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Smart Development</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Everything you need to accelerate development with AI-powered intelligence and automation.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            {features.map((feature, index) => (
    <>
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </div>
<<<<<<< HEAD
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300leading-relaxed">
              {feature.description}
=======
                <h3 className="text-2 xl font-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p className="text-gray-300leading-relaxed" />
                  {feature.description}
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </p>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Integrations Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Integrations</span>
=======
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Integrations</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Works with your favorite development tools and platforms for a unified coding experience.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-2md:grid-cols-5gap-8">
<<<<<<< HEAD
            {integrations.map((integration, index) => (
              <div key="{index}" className="grouptext-center" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
                  <span className="text-3xl"   />{integration.icon}</span>
                </div>
                <div className="text-gray-300group-hover:text-whitetransition-colors"  />{integration.name}
                </div>
            ))}
=======
        </div>
            {integrations.map((integration, index) => (
    <>
              <div key="{index}" className="grouptext-center" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110">
        </div>
                  <span className="text-3xl">{integration.icon}</span>
                </div>
                <div className="text-gray-300group-hover:text-whitetransition-colors">{integration.name}
                </div>
            ))}
    <>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
          </div>
      </section>

      {/* Pricing Section */}
    <>
      <section id="pricing" className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
=======
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              Choose the plan that fits your development needs. All plans include our core AI features.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
<<<<<<< HEAD
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}
                
                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">
              {plan.description}</p>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-5 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <span className="text-gray-300ml-2"   />{plan.period}</span>
=======
    <>
                  <div className="absolute -top-4 left-1/2transform-translate-x-1/2">
        </div>
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </div>
                )}
                
    <>
                <div className="text-centermb-8">
        </div>
                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300text-smmb-4">{plan.description}</p>
                  <div className="flexitems-baselinejustify-center" />
                    <span className="text-5 xlfont-boldtext-cyan-400">{plan.price}</span>
                    <span className="text-gray-300ml-2">{plan.period}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  </div>
                
                <ul className="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
<<<<<<< HEAD
                    <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" />
                      <span className="text-gray-300"   />{feature}</span>
=======
    <>
                    <li key="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5text-green-400flex-shrink-0" / />
                      <span className="text-gray-300">{feature}</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
    <>
                </Link>
              </div>
            ))}
    <>
          </div>
      </section>

      {/* Testimonials Section */}
    <>
      <section className="py-20px-4relative" />
        <div className="relative max-w-7xlmx-auto">
<<<<<<< HEAD
          <div className="text-centermb-16">
            <h2 className="text-4xl md:text-5 xl font-bold text-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />25,000+</span> Developers
=======
        </div>
          <div className="text-centermb-16">
        </div>
            <h2 className="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">25,000+</span> Developers
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            </h2>
            <p className="text-xl text-gray-300 max-w-4xlmx-auto">
              See what our customers are saying about their success with our AI code assistant.
    <>
            </p>
          </div>
          
          <div className="grid grid-cols-1md:grid-cols-3gap-8">
<<<<<<< HEAD
=======
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
            {testimonials.map((testimonial, index) => (
    <>
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
<<<<<<< HEAD
                <div className="flex items-centermb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <div className="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className="text-gray-400text-sm"   />{testimonial.company}</div>
                </div>
                <div className="flexmb-4">
=======
                <div className="flexitems-centermb-4">
        </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-gray-400text-sm">{testimonial.company}</div>
                </div>
                <div className="flexmb-4">
        </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5text-yellow-400fill-current" />
                  ))}
    <>
                </div>
<<<<<<< HEAD
                <p className="text-gray-300italic">
              "{testimonial.content}"</p>
=======
                <p className="text-gray-300italic">"{testimonial.content}"</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
              </div>
            ))}
    <>
          </div>
      </section>

      {/* CTA Section */}
    <>
      <section className="py-20px-4relative" />
<<<<<<< HEAD
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" />
        <div className="relative max-w-7xlmx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
              <div className="relativez-10">
                <h2 className="text-4xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Development Workflow?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
              Join thousands of developers already coding 300% faster with our AI-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" >
           
          <span    />
        </Link>View All Plans</span>
=======
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <div className="relative max-w-7xlmx-auto">
        </div>
          <div className="text-center" />
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </div>
              <div className="relativez-10">
        </div>
                <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Development Workflow?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Join thousands of developers already coding 300% faster with our AI-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>
                
    <>
                <div className="flex flex-col sm:flex-row gap-6justify-centermb-8">
        </div>
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span>View All Plans</span>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                    <ArrowRight className="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>
                
<<<<<<< HEAD
                <div className="text-white/80text-sm">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
=======
    <>
                <div className="text-white/80text-sm">
        </div>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-3b8f
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
    </>