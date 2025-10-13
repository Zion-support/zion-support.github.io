import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UsersIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  RocketLaunchIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  PlayIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      description: 'Advanced AI-powered content creation tool that generates high-quality articles, blog posts, social media content, and marketing copy.',
      price: '$29/month',
      features: [
        'GPT-4 powered content generation',
        '50+ content templates',
        'SEO optimization suggestions',
        'Multi-language support',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      category: 'Content & Marketing',
      icon: DocumentTextIcon,
      popular: true,
      link: '/ai-content-generator'
    },
    {
      id: 'ai-analytics-dashboard',
      name: 'AI Analytics Dashboard',
      description: 'Intelligent business analytics platform with predictive insights, automated reporting, and real-time data visualization.',
      price: '$49/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Data source integrations',
        'Mobile app access',
        'Team collaboration tools',
        'API access'
      ],
      category: 'Analytics & Data',
      icon: ChartBarIcon,
      popular: true,
      link: '/ai-analytics-dashboard'
    },
    {
      id: 'ai-customer-support-bot',
      name: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution that provides 24/7 customer support with natural language processing and multi-channel integration.',
      price: '$39/month',
      features: [
        'Natural language processing',
        'Multi-channel support (web, email, chat)',
        'Knowledge base integration',
        'Sentiment analysis',
        'Escalation to human agents',
        'Custom branding',
        'Analytics and insights',
        'Easy setup and deployment'
      ],
      category: 'Customer Service',
      icon: UsersIcon,
      popular: false,
      link: '/ai-customer-support-bot'
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant Pro',
      description: 'Advanced coding assistant that helps developers write better code, debug issues, and learn new technologies with AI-powered suggestions.',
      price: '$19/month',
      features: [
        'Code completion and suggestions',
        'Bug detection and fixes',
        'Code review assistance',
        'Documentation generation',
        'Multiple language support',
        'IDE integrations',
        'Learning recommendations',
        'Team collaboration features'
      ],
      category: 'Development',
      icon: CpuChipIcon,
      popular: true,
      link: '/ai-code-assistant'
    },
    {
      id: 'ai-cybersecurity-monitor',
      name: 'AI Cybersecurity Monitor',
      description: 'Comprehensive security monitoring solution that uses AI to detect threats, vulnerabilities, and suspicious activities in real-time.',
      price: '$79/month',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Security compliance monitoring',
        'Incident response automation',
        'Security reports and alerts',
        'Multi-cloud support',
        'API security monitoring',
        '24/7 security operations'
      ],
      category: 'Security',
      icon: ShieldCheckIcon,
      popular: false,
      link: '/ai-cybersecurity-monitor'
    },
    {
      id: 'ai-automation-platform',
      name: 'AI Automation Platform',
      description: 'No-code automation platform that helps businesses automate repetitive tasks and workflows using AI and machine learning.',
      price: '$59/month',
      features: [
        'Visual workflow builder',
        'AI-powered task automation',
        'Integration with 100+ apps',
        'Custom automation scripts',
        'Performance monitoring',
        'Team collaboration tools',
        'API and webhook support',
        'Advanced scheduling options'
      ],
      category: 'Automation',
      icon: CogIcon,
      popular: true,
      link: '/ai-automation-platform'
    },
    {
      id: 'ai-3d-generation',
      name: 'AI 3D Model Generator',
      description: 'Revolutionary AI-powered 3D model generation tool that creates high-quality 3D assets from text descriptions and images.',
      price: '$89/month',
      features: [
        'Text-to-3D generation',
        'Image-to-3D conversion',
        'High-resolution output',
        'Multiple format exports',
        'Custom style training',
        'Batch processing',
        'API integration',
        'Cloud rendering'
      ],
      category: '3D & Graphics',
      icon: GlobeAltIcon,
      popular: false,
      link: '/ai-3d-generation'
    },
    {
      id: 'ai-blockchain-analytics',
      name: 'AI Blockchain Analytics',
      description: 'Advanced blockchain analysis platform that provides insights into cryptocurrency transactions, DeFi protocols, and market trends.',
      price: '$99/month',
      features: [
        'Transaction analysis',
        'DeFi protocol monitoring',
        'Market trend prediction',
        'Risk assessment tools',
        'Portfolio tracking',
        'Compliance reporting',
        'Real-time alerts',
        'Custom dashboard'
      ],
      category: 'Blockchain & Crypto',
      icon: ChartBarIcon,
      popular: false,
      link: '/ai-blockchain-analytics'
    }
  ];

  const categories = [
    'All',
    'Content & Marketing',
    'Analytics & Data',
    'Customer Service',
    'Development',
    'Security',
    'Automation',
    '3D & Graphics',
    'Blockchain & Crypto'
  ];

  const benefits = [
    {
      icon: RocketLaunchIcon,
      title: 'Rapid Deployment',
      description: 'Get your micro SaaS up and running in days, not months, with our pre-built solutions and easy setup process.'
    },
    {
      icon: CurrencyDollarIcon,
      title: 'Cost Effective',
      description: 'Start with affordable monthly plans that scale with your business. No upfront costs or long-term commitments.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption, compliance standards, and regular security updates to protect your data.'
    },
    {
      icon: CloudIcon,
      title: 'Scalable Infrastructure',
      description: 'Built on cloud infrastructure that automatically scales with your user base and business growth.'
    },
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Features',
      description: 'Leverage cutting-edge AI and machine learning to provide intelligent features and automation capabilities.'
    },
    {
      icon: UsersIcon,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and customer service to ensure your micro SaaS runs smoothly.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive collection of micro SaaS solutions designed to solve specific business challenges with AI-powered features and modern technology." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, AI-powered tools, business automation, software as a service, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Micro SaaS Solutions
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive collection of AI-powered micro SaaS solutions designed to solve specific business challenges with modern technology and intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
                >
                  Get Started Today
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed with modern businesses in mind, offering powerful features at affordable prices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Portfolio</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of specialized micro SaaS solutions, each designed to address specific business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover-lift group relative">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <span className="inline-block bg-slate-700 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  
                  <div className="flex space-x-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-purple-400 text-purple-300 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-400 hover:text-white transition-all duration-300 text-center"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our micro SaaS solutions can accelerate your growth and streamline your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="neon-button px-8 py-4 rounded-lg font-semibold text-lg"
              >
                Start Your Project
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;