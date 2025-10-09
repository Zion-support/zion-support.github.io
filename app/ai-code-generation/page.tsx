'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Star, Users, Clock, Target, BarChart, Zap, Shield, Globe, Brain, Cpu, Database, Cloud, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Award, TrendingUp, Lock, Code, BarChart3, PieChart as PieChartIcon, LineChart, Activity as ActivityIcon, Target as TargetIcon, Users as UsersIcon, Clock as ClockIcon, Calendar as CalendarIcon, FileText as FileTextIcon, Settings as SettingsIcon, Search as SearchIcon, Bot as BotIcon, Palette as PaletteIcon, Camera as CameraIcon, Music as MusicIcon, Video as VideoIcon, Gamepad2 as Gamepad2Icon, ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon, Building as BuildingIcon, Factory as FactoryIcon, Car as CarIcon, Plane as PlaneIcon, Ship as ShipIcon, Train as TrainIcon, Home as HomeIcon, Heart as HeartIcon, Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon, Briefcase as BriefcaseIcon, Wrench as WrenchIcon, Hammer as HammerIcon, Paintbrush as PaintbrushIcon, Scissors as ScissorsIcon, BookOpen as BookOpenIcon, Calculator as CalculatorIcon, Calendar as CalendarIcon, Clock3 as Clock3Icon, Compass as CompassIcon, Navigation as NavigationIcon, PieChart as PieChartIcon, TrendingDown as TrendingDownIcon, Activity as ActivityIcon, Zap as LightningIcon, Target as CrosshairIcon, Shield as SecurityIcon, Users as PeopleIcon, Star as StarIcon, CheckCircle as CheckIcon, ArrowRight as ArrowIcon, Phone as PhoneIcon, Mail as MailIcon, MapPin as LocationIcon, Code2, Terminal, GitBranch, GitCommit, GitMerge, GitPullRequest, GitPush, GitRepository, GitBranch2, GitCommit2, GitMerge2, GitPullRequest2, GitPush2, GitRepository2, GitBranch3, GitCommit3, GitMerge3, GitPullRequest3, GitPush3, GitRepository3, GitBranch4, GitCommit4, GitMerge4, GitPullRequest4, GitPush4, GitRepository4, GitBranch5, GitCommit5, GitMerge5, GitPullRequest5, GitPush5, GitRepository5, GitBranch6, GitCommit6, GitMerge6, GitPullRequest6, GitPush6, GitRepository6, GitBranch7, GitCommit7, GitMerge7, GitPullRequest7, GitPush7, GitRepository7, GitBranch8, GitCommit8, GitMerge8, GitPullRequest8, GitPush8, GitRepository8, GitBranch9, GitCommit9, GitMerge9, GitPullRequest9, GitPush9, GitRepository9, GitBranch10, GitCommit10, GitMerge10, GitPullRequest10, GitPush10, GitRepository10 } from 'lucide-react';

const AICodeGenerationPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI Code Generation',
      description: 'Generate high-quality code using advanced AI algorithms and machine learning',
      benefits: ['Natural language to code', 'Multi-language support', 'Context-aware generation']
    },
    {
      icon: Code2,
      title: 'Code Review & Analysis',
      description: 'Automated code review with AI-powered suggestions and optimization',
      benefits: ['Bug detection', 'Performance optimization', 'Security analysis']
    },
    {
      icon: Terminal,
      title: 'Auto-completion',
      description: 'Intelligent code completion with context-aware suggestions',
      benefits: ['Smart suggestions', 'API integration', 'Framework support']
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'AI-powered version control with intelligent merge conflict resolution',
      benefits: ['Auto-merge', 'Conflict resolution', 'Branch optimization']
    },
    {
      icon: Shield,
      title: 'Security Scanning',
      description: 'Automated security vulnerability detection and remediation',
      benefits: ['Vulnerability detection', 'Security best practices', 'Compliance checking']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'AI-driven performance analysis and optimization recommendations',
      benefits: ['Performance profiling', 'Optimization suggestions', 'Resource monitoring']
    }
  ];

  const supportedLanguages = [
    { name: 'JavaScript', icon: '🟨', popularity: '95%' },
    { name: 'Python', icon: '🐍', popularity: '90%' },
    { name: 'TypeScript', icon: '🔷', popularity: '88%' },
    { name: 'Java', icon: '☕', popularity: '85%' },
    { name: 'C++', icon: '⚡', popularity: '80%' },
    { name: 'Go', icon: '🐹', popularity: '75%' },
    { name: 'Rust', icon: '🦀', popularity: '70%' },
    { name: 'PHP', icon: '🐘', popularity: '65%' }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$99',
      period: '/month',
      description: 'Perfect for individual developers and freelancers',
      features: [
        '5,000 lines of code/month',
        'Basic AI features',
        'Standard languages',
        'Email support',
        'Git integration',
        'Basic security scanning'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Team',
      price: '$299',
      period: '/month',
      description: 'Ideal for development teams and small companies',
      features: [
        '50,000 lines of code/month',
        'Advanced AI features',
        'All languages',
        'Priority support',
        'Team collaboration',
        'Advanced security',
        'Code review automation',
        'Performance optimization'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited code generation',
        'Full AI suite',
        'Custom integrations',
        '24/7 dedicated support',
        'White-label options',
        'Advanced security',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Senior Developer',
      company: 'TechCorp Solutions',
      content: 'AI Code Generation has increased our development speed by 300% and reduced bugs by 80%. It\'s like having a senior developer on demand.',
      rating: 5,
      avatar: '👨‍💻'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      company: 'StartupHub',
      content: 'The code quality is incredible. Our team can now focus on architecture while AI handles the implementation details.',
      rating: 5,
      avatar: '👩‍💼'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      content: 'The security scanning has saved us from multiple potential vulnerabilities. The AI suggestions are always spot-on.',
      rating: 5,
      avatar: '👨‍🔬'
    }
  ];

  const useCases = [
    {
      industry: 'Web Development',
      description: 'Accelerate web application development with AI-generated components and APIs',
      benefits: ['400% faster development', '90% fewer bugs', '95% code quality']
    },
    {
      industry: 'Mobile Development',
      description: 'Build mobile apps faster with AI-generated native and cross-platform code',
      benefits: ['350% faster development', '85% code reuse', '90% performance optimization']
    },
    {
      industry: 'Data Science',
      description: 'Generate data analysis scripts and machine learning models with AI assistance',
      benefits: ['500% faster prototyping', '95% accuracy', '90% optimization']
    },
    {
      industry: 'DevOps',
      description: 'Automate infrastructure code and deployment scripts with AI generation',
      benefits: ['300% faster deployment', '99% reliability', '95% security compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            <span>AI-Powered Code Generation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            AI Code Generation
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-medium cyber-glow">
            Intelligent Code Development Platform
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your development workflow with AI-powered code generation, automated reviews, 
            and intelligent optimization. Increase development speed by 300% and reduce bugs by 80%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">300%</div>
              <div className="text-gray-300">Faster Development</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">80%</div>
              <div className="text-gray-300">Fewer Bugs</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Code Quality</div>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Supported Programming Languages
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Generate high-quality code in all major programming languages
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {supportedLanguages.map((language, index) => (
            <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-3">{language.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{language.name}</h3>
              <div className="text-sm text-blue-400">{language.popularity} accuracy</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to enhance your development workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="quantum-card p-6 energy-pulse">
              <div className="text-4xl mb-4 text-center">
                <feature.icon className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Industry Applications
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple industries and development teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                {useCase.industry}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {useCase.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="text-center">
                    <div className="text-lg font-bold text-blue-400">{benefit}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose the plan that fits your development needs. All plans include our core AI features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-blue-400 border-2' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">{plan.period}</span>
                </div>
                <p className="text-gray-300">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.cta === 'Contact Sales' ? 'mailto:kleber@ziontechgroup.com' : 'tel:+13024640950'}
                className={`w-full text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-gray-600'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied developers who have transformed their coding workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-4">{testimonial.avatar}</div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
            Ready to Transform Your Development Workflow?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of developers already using AI Code Generation to write better code, 
            faster, and with fewer bugs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeGenerationPage;