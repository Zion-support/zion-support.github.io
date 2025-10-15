import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { 
  CheckCircleIcon, 
  StarIcon, 
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  CpuChipIcon,
  CogIcon,
  CloudIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  BoltIcon,
  SparklesIcon,
  UserGroupIcon,
  EyeIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon
} from '@heroicons/react/24/outline';

const PricingPage: React.FC = () => {
  const microSAASServices = [
    {
      name: 'AI Content Generator Pro',
      price: '$199',
      originalPrice: '$299',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI with 99.9% accuracy.',
      features: ['Unlimited content generation', 'SEO optimization & keyword research', 'Multi-language support (50+ languages)', 'Plagiarism detection & originality'],
      icon: SparklesIcon,
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-content-generator'
    },
    {
      name: 'Business Analytics Pro',
      price: '$349',
      originalPrice: '$499',
      description: 'Comprehensive business intelligence and analytics platform with real-time insights, predictive analytics, and custom reporting.',
      features: ['Real-time dashboards & KPIs', 'AI-powered predictive analytics', 'Custom reports & data visualization', 'API integration & webhooks'],
      icon: ChartBarIcon,
      gradient: 'from-purple-500 to-pink-500',
      href: '/analytics-dashboard'
    },
    {
      name: 'Task Manager Pro',
      price: '$29',
      originalPrice: '$49',
      description: 'Advanced task management with AI-powered prioritization, team collaboration, and intelligent scheduling features.',
      features: ['AI task prioritization & scheduling', 'Team collaboration & project management', 'Time tracking & productivity analytics', 'Mobile app & desktop sync'],
      icon: CheckCircleIcon,
      gradient: 'from-green-500 to-emerald-500',
      href: '/task-manager'
    },
    {
      name: 'AI Code Assistant Pro',
      price: '$99',
      originalPrice: '$149',
      description: 'Intelligent code generation, debugging, and optimization with support for 50+ programming languages and frameworks.',
      features: ['AI code generation & completion', 'Bug detection & fixing suggestions', 'Code optimization & refactoring', 'Documentation generation'],
      icon: CodeBracketIcon,
      gradient: 'from-orange-500 to-red-500',
      href: '/ai-code-assistant'
    },
    {
      name: 'AI Video Generator Pro',
      price: '$149',
      originalPrice: '$199',
      description: 'Create professional videos from text prompts with AI-powered voice synthesis, animations, and effects.',
      features: ['Text-to-video generation', 'AI voice synthesis (100+ voices)', 'Professional templates & effects', '4K export & social media formats'],
      icon: BoltIcon,
      gradient: 'from-pink-500 to-rose-500',
      href: '/ai-video-generator'
    },
    {
      name: 'AI Legal Assistant Pro',
      price: '$299',
      originalPrice: '$399',
      description: 'Comprehensive legal document analysis, contract review, and compliance checking with AI-powered insights.',
      features: ['Contract analysis & review', 'Legal document generation', 'Compliance monitoring & alerts', 'Case law research & analysis'],
      icon: ShieldCheckIcon,
      gradient: 'from-indigo-500 to-purple-500',
      href: '/ai-legal-assistant'
    },
    {
      name: 'AI Medical Assistant Pro',
      price: '$499',
      originalPrice: '$699',
      description: 'Advanced medical diagnosis support, patient data analysis, and treatment recommendations with AI-powered insights.',
      features: ['Symptom analysis & diagnosis support', 'Medical image analysis (X-ray, MRI, CT)', 'Treatment recommendation engine', 'HIPAA compliant & secure'],
      icon: UserGroupIcon,
      gradient: 'from-teal-500 to-cyan-500',
      href: '/ai-medical-assistant'
    },
    {
      name: 'AI Supply Chain Optimizer Pro',
      price: '$399',
      originalPrice: '$599',
      description: 'Optimize supply chain operations with AI-powered demand forecasting, inventory management, and logistics optimization.',
      features: ['Demand forecasting & planning', 'Inventory optimization algorithms', 'Route optimization & logistics', 'Risk assessment & mitigation'],
      icon: CogIcon,
      gradient: 'from-yellow-500 to-orange-500',
      href: '/ai-supply-chain-optimizer'
    }
  ];

  const aiServices = [
    {
      name: 'AI Email Optimizer Pro',
      price: '$79',
      originalPrice: '$119',
      description: 'Optimize email campaigns with AI-powered subject line generation, content optimization, and send time optimization.',
      features: ['AI subject line optimization', 'Content personalization engine', 'Send time optimization', 'A/B testing automation'],
      icon: EnvelopeIcon,
      gradient: 'from-blue-500 to-indigo-500',
      href: '/ai-email-optimizer'
    },
    {
      name: 'AI Social Media Manager Pro',
      price: '$129',
      originalPrice: '$179',
      description: 'Automate social media management with AI-powered content creation, scheduling, and engagement optimization.',
      features: ['AI content generation for all platforms', 'Optimal posting time analysis', 'Hashtag optimization & trending topics', 'Engagement rate optimization'],
      icon: ShareIcon,
      gradient: 'from-pink-500 to-purple-500',
      href: '/ai-social-media-manager'
    },
    {
      name: 'AI Website Analyzer Pro',
      price: '$89',
      originalPrice: '$129',
      description: 'Comprehensive website analysis with AI-powered SEO recommendations, performance optimization, and competitor insights.',
      features: ['AI-powered SEO analysis & recommendations', 'Performance optimization suggestions', 'Competitor analysis & benchmarking', 'Technical SEO auditing'],
      icon: EyeIcon,
      gradient: 'from-green-500 to-teal-500',
      href: '/ai-website-analyzer'
    },
    {
      name: 'AI 3D Model Generator Pro',
      price: '$199',
      originalPrice: '$299',
      description: 'Generate high-quality 3D models from text descriptions with AI-powered modeling, texturing, and animation tools.',
      features: ['Text-to-3D model generation', 'AI-powered texturing & materials', 'Animation & rigging automation', 'Export to multiple formats'],
      icon: BoltIcon,
      gradient: 'from-purple-500 to-pink-500',
      href: '/ai-3d-model-generator'
    },
    {
      name: 'AI Audio Processor Pro',
      price: '$149',
      originalPrice: '$199',
      description: 'Advanced audio processing with AI-powered noise reduction, enhancement, and real-time audio manipulation tools.',
      features: ['AI noise reduction & enhancement', 'Real-time audio processing', 'Voice cloning & synthesis', 'Audio format conversion'],
      icon: BoltIcon,
      gradient: 'from-orange-500 to-red-500',
      href: '/ai-audio-processor'
    },
    {
      name: 'AI Education Tutor Pro',
      price: '$79',
      originalPrice: '$119',
      description: 'Personalized AI tutoring system with adaptive learning, progress tracking, and interactive educational content.',
      features: ['Personalized learning paths', 'Adaptive difficulty adjustment', 'Progress tracking & analytics', 'Interactive content generation'],
      icon: UserGroupIcon,
      gradient: 'from-indigo-500 to-blue-500',
      href: '/ai-education-tutor'
    },
    {
      name: 'AI Real Estate Analyzer Pro',
      price: '$199',
      originalPrice: '$299',
      description: 'Comprehensive real estate market analysis with AI-powered property valuation, investment insights, and market trends.',
      features: ['AI property valuation & pricing', 'Market trend analysis & forecasting', 'Investment opportunity scoring', 'Neighborhood analysis'],
      icon: ChartBarIcon,
      gradient: 'from-emerald-500 to-green-500',
      href: '/ai-real-estate-analyzer'
    },
    {
      name: 'AI Translator Pro',
      price: '$49',
      originalPrice: '$79',
      description: 'Advanced AI translation service supporting 100+ languages with context-aware translation and real-time processing.',
      features: ['100+ language support', 'Context-aware translation', 'Real-time voice translation', 'Document translation'],
      icon: GlobeAltIcon,
      gradient: 'from-cyan-500 to-blue-500',
      href: '/ai-translator'
    }
  ];

  const itServices = [
    {
      name: 'Cloud Infrastructure',
      price: '$1,000',
      originalPrice: '$1,500',
      description: 'Scalable cloud solutions and infrastructure management with 99.9% uptime guarantee.',
      features: ['AWS/Azure/GCP setup & management', 'Auto-scaling & load balancing', '24/7 monitoring & support', 'Disaster recovery & backup'],
      icon: CloudIcon,
      gradient: 'from-blue-500 to-cyan-500',
      href: '/cloud-infrastructure'
    },
    {
      name: 'DevOps Automation Pro',
      price: '$2,000',
      originalPrice: '$3,000',
      description: 'Comprehensive DevOps solutions with CI/CD pipelines, infrastructure as code, and automated deployments.',
      features: ['CI/CD pipeline setup', 'Infrastructure as Code (IaC)', 'Automated testing & deployment', 'Container orchestration'],
      icon: CogIcon,
      gradient: 'from-purple-500 to-pink-500',
      href: '/devops-automation'
    },
    {
      name: 'API Development Pro',
      price: '$3,000',
      originalPrice: '$4,500',
      description: 'Comprehensive API development and integration services with documentation and testing.',
      features: ['RESTful & GraphQL APIs', 'API documentation & testing', 'Rate limiting & security', 'Third-party integrations'],
      icon: CodeBracketIcon,
      gradient: 'from-green-500 to-emerald-500',
      href: '/api-development'
    },
    {
      name: 'Data Engineering Pro',
      price: '$4,000',
      originalPrice: '$6,000',
      description: 'Comprehensive data engineering and ETL solutions with real-time processing and analytics.',
      features: ['Data pipeline development', 'ETL/ELT processes', 'Real-time data processing', 'Data warehousing solutions'],
      icon: CircleStackIcon,
      gradient: 'from-orange-500 to-red-500',
      href: '/data-engineering'
    },
    {
      name: 'Blockchain Solutions Pro',
      price: '$8,000',
      originalPrice: '$12,000',
      description: 'Comprehensive blockchain and Web3 development with smart contracts and DApps.',
      features: ['Smart contract development', 'DApp development', 'NFT marketplace creation', 'DeFi protocol development'],
      icon: ShieldCheckIcon,
      gradient: 'from-indigo-500 to-purple-500',
      href: '/blockchain-solutions'
    },
    {
      name: 'IoT Solutions Pro',
      price: '$5,000',
      originalPrice: '$7,500',
      description: 'Comprehensive IoT and edge computing solutions with real-time monitoring and analytics.',
      features: ['IoT device integration', 'Edge computing solutions', 'Real-time monitoring', 'Data analytics & insights'],
      icon: SignalIcon,
      gradient: 'from-teal-500 to-cyan-500',
      href: '/iot-solutions'
    },
    {
      name: 'Security Audit Pro',
      price: '$3,000',
      originalPrice: '$4,500',
      description: 'Comprehensive security assessment and penetration testing with detailed reports and recommendations.',
      features: ['Penetration testing', 'Vulnerability assessment', 'Security compliance audit', 'Security recommendations'],
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-pink-500',
      href: '/security-audit'
    },
    {
      name: 'Web Development Pro',
      price: '$3,000',
      originalPrice: '$4,500',
      description: 'Modern web development with responsive design, performance optimization, and SEO.',
      features: ['Responsive web design', 'Performance optimization', 'SEO optimization', 'Content management systems'],
      icon: CodeBracketIcon,
      gradient: 'from-blue-500 to-indigo-500',
      href: '/web-development'
    },
    {
      name: 'Mobile Development Pro',
      price: '$5,000',
      originalPrice: '$7,500',
      description: 'Native and cross-platform mobile app development with modern frameworks and best practices.',
      features: ['Native iOS & Android apps', 'Cross-platform development', 'App store optimization', 'Push notifications & analytics'],
      icon: DevicePhoneMobileIcon,
      gradient: 'from-purple-500 to-pink-500',
      href: '/mobile-development'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing"
        description="Transparent pricing for our AI and IT services. Choose the perfect plan for your business needs with flexible options and no hidden fees."
        keywords="AI pricing, IT services pricing, cloud pricing, AI tools pricing, business solutions pricing, micro SAAS pricing"
      />
      
      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        {/* Cyber Grid Background */}
        <div className="cyber-grid"></div>
        
        {/* Particle System */}
        <div className="particles">
          <div className="particle" style={{left: '5%', animationDelay: '0s'}}></div>
          <div className="particle" style={{left: '15%', animationDelay: '1s'}}></div>
          <div className="particle" style={{left: '25%', animationDelay: '2s'}}></div>
          <div className="particle" style={{left: '35%', animationDelay: '3s'}}></div>
          <div className="particle" style={{left: '45%', animationDelay: '4s'}}></div>
          <div className="particle" style={{left: '55%', animationDelay: '5s'}}></div>
          <div className="particle" style={{left: '65%', animationDelay: '6s'}}></div>
          <div className="particle" style={{left: '75%', animationDelay: '7s'}}></div>
          <div className="particle" style={{left: '85%', animationDelay: '8s'}}></div>
          <div className="particle" style={{left: '95%', animationDelay: '9s'}}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gradient-holographic mb-6 glitch" data-text="Transparent Pricing">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Choose the perfect plan for your business needs. All plans include our core AI and IT services 
              with no hidden fees or long-term contracts. Start with a 14-day free trial.
            </p>
            
            {/* Contact Information */}
            <div className="glass-card-cyber p-6 max-w-2xl mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+13024640950" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Website</p>
                  <a href="https://ziontechgroup.com" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card-cyber p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$299<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small businesses getting started with AI</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 AI tools
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic AI consultation
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Monthly reports
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <Link to="/contact" className="w-full btn-cyber py-3 rounded-lg text-center block font-semibold">
                Get Started
              </Link>
            </div>
            
            <div className="glass-card-holographic p-8 hover:scale-105 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold neon-glow">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient-holographic">Professional</h3>
              <div className="text-4xl font-bold text-purple-400 mb-2">$799<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses with advanced AI needs</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Up to 10 AI tools
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Advanced AI solutions
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Weekly reports
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <Link to="/contact" className="w-full btn-holographic py-3 rounded-lg text-center block font-semibold">
                Get Started
              </Link>
            </div>
            
            <div className="glass-card-cyber p-8 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-4 text-gradient-cyber">Enterprise</h3>
              <div className="text-4xl font-bold text-orange-400 mb-2">Custom<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Tailored solutions for large organizations</p>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited AI tools
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Full AI transformation
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  24/7 support
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated team
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  White-label solutions
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  SLA guarantee
                </li>
              </ul>
              <Link to="/contact" className="w-full btn-futuristic py-3 rounded-lg text-center block font-semibold">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Micro SAAS Services Pricing */}
          <div className="glass-card-cyber p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient-cyber">Micro SAAS Solutions Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {microSAASServices.map((service, index) => (
                <div key={index} className="glass-card-holographic p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-cyan-400 font-medium">Micro SAAS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}<span className="text-sm text-gray-400">/mo</span></span>
                    <span className="text-sm text-gray-500 line-through">{service.originalPrice}/mo</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={service.href} className="block w-full btn-cyber text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Try Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* AI Services Pricing */}
          <div className="glass-card-holographic p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient-holographic">AI Services Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {aiServices.map((service, index) => (
                <div key={index} className="glass-card-cyber p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-purple-400 font-medium">AI Service</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-400">{service.price}<span className="text-sm text-gray-400">/mo</span></span>
                    <span className="text-sm text-gray-500 line-through">{service.originalPrice}/mo</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={service.href} className="block w-full btn-holographic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Try Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* IT Solutions Pricing */}
          <div className="glass-card-cyber p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient-cyber">IT Solutions Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service, index) => (
                <div key={index} className="glass-card-holographic p-6 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform neon-glow`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm text-orange-400 font-medium">IT Solution</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-orange-400">{service.price}<span className="text-sm text-gray-400">/mo</span></span>
                    <span className="text-sm text-gray-500 line-through">{service.originalPrice}/mo</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={service.href} className="block w-full btn-futuristic text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="glass-card-cyber p-8 mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8 text-gradient">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">Can I change my plan anytime?</h3>
                <p className="text-gray-300">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately with prorated billing.</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">Is there a free trial?</h3>
                <p className="text-gray-300">Yes, we offer a 14-day free trial for all our plans with no credit card required. Full access to all features.</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">What payment methods do you accept?</h3>
                <p className="text-gray-300">We accept all major credit cards, PayPal, bank transfers, and cryptocurrency for enterprise plans.</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">Do you offer custom pricing?</h3>
                <p className="text-gray-300">Yes, we offer custom pricing for enterprise clients with specific requirements and volume discounts.</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">What's included in support?</h3>
                <p className="text-gray-300">All plans include email support. Professional and Enterprise plans include priority support and dedicated account managers.</p>
              </div>
              <div className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 text-cyan-400">Can I cancel anytime?</h3>
                <p className="text-gray-300">Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="glass-card-holographic p-8 text-center relative overflow-hidden">
            {/* Energy Field */}
            <div className="energy-field"></div>
            
            <h2 className="text-3xl font-bold mb-4 text-gradient-holographic">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-300">
              Choose the perfect plan for your business and start transforming with AI today. 
              All plans include a 14-day free trial with no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/contact" className="btn-holographic px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Start Free Trial
              </Link>
              <Link to="/contact" className="btn-cyber px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Contact Sales
              </Link>
              <Link to="/demo" className="btn-futuristic px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="glass-card-cyber p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a href="tel:+13024640950" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-2 neon-glow">
                    <GlobeAltIcon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm text-gray-300">Website</p>
                  <a href="https://ziontechgroup.com" className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                    ziontechgroup.com
                  </a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-cyan-500/30">
                <p className="text-sm text-gray-400">
                  📍 364 E Main St STE 1008, Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;