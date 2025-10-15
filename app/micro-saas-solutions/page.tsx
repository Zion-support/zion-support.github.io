import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { 
  CheckCircleIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CogIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  AcademicCapIcon,
  HomeIcon,
  TruckIcon,
  HeartIcon,
  ScaleIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  SignalIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const MicroSAASSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'zion-ai-content-generator',
      title: 'Zion AI Content Generator Pro',
      description: 'Advanced AI-powered content creation platform with 95% accuracy, supporting 50+ languages and multiple content types.',
      shortDescription: 'Generate high-quality content with AI precision',
      icon: SparklesIcon,
      features: [
        'Unlimited content generation',
        'SEO optimization',
        'Multi-language support',
        'Brand voice customization',
        'Content templates',
        'Plagiarism detection',
        'Social media optimization',
        'Email marketing content',
        'Blog post generation',
        'Product descriptions'
      ],
      pricing: {
        basic: 199,
        pro: 499,
        enterprise: 1299
      },
      marketPrice: '$199 - $1,299/month',
      benefits: [
        'Save 80% content creation time',
        'Increase SEO rankings by 60%',
        'Boost engagement by 45%',
        'Reduce content costs by 70%',
        'Maintain consistent brand voice',
        'Scale content production'
      ],
      useCases: [
        'Blog content creation',
        'Social media posts',
        'Email marketing campaigns',
        'Product descriptions',
        'SEO-optimized articles',
        'Marketing copy'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/ai-content-generator'
      },
      gradient: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/25'
    },
    {
      id: 'zion-smart-crm-automation',
      title: 'Zion Smart CRM Automation',
      description: 'Intelligent CRM system with AI-powered lead scoring, automated workflows, and predictive analytics for 40% higher conversion rates.',
      shortDescription: 'Transform sales with AI-powered CRM automation',
      icon: UserGroupIcon,
      features: [
        'AI lead scoring',
        'Automated follow-ups',
        'Predictive analytics',
        'Pipeline management',
        'Email automation',
        'Sales forecasting',
        'Customer segmentation',
        'Integration capabilities',
        'Real-time notifications',
        'Performance analytics'
      ],
      pricing: {
        basic: 299,
        pro: 799,
        enterprise: 1999
      },
      marketPrice: '$299 - $1,999/month',
      benefits: [
        '40% higher conversion rates',
        'Reduce manual work by 60%',
        'Improve lead quality by 50%',
        'Increase sales velocity by 35%',
        'Better customer insights',
        'Automated reporting'
      ],
      useCases: [
        'Lead management',
        'Sales pipeline tracking',
        'Customer relationship management',
        'Marketing automation',
        'Sales forecasting',
        'Customer support'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-smart-crm-automation'
      },
      gradient: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/25'
    },
    {
      id: 'zion-smart-analytics-dashboard',
      title: 'Zion Smart Analytics Dashboard',
      description: 'Comprehensive business intelligence platform with real-time analytics, custom dashboards, and AI-powered insights for data-driven decisions.',
      shortDescription: 'Transform data into actionable insights with AI',
      icon: ChartBarIcon,
      features: [
        'Real-time dashboards',
        'Custom visualizations',
        'AI-powered insights',
        'Data integration',
        'Automated reporting',
        'Predictive analytics',
        'Mobile accessibility',
        'Team collaboration',
        'Export capabilities',
        'Alert system'
      ],
      pricing: {
        basic: 149,
        pro: 399,
        enterprise: 999
      },
      marketPrice: '$149 - $999/month',
      benefits: [
        'Make data-driven decisions',
        'Identify trends and patterns',
        'Improve operational efficiency',
        'Reduce reporting time by 80%',
        'Increase revenue by 25%',
        'Better resource allocation'
      ],
      useCases: [
        'Business performance tracking',
        'Financial analysis',
        'Marketing metrics',
        'Sales performance',
        'Customer analytics',
        'Operational insights'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-smart-analytics-dashboard'
      },
      gradient: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/25'
    },
    {
      id: 'zion-smart-inventory-manager',
      title: 'Zion Smart Inventory Manager',
      description: 'AI-powered inventory management system with demand forecasting, automated reordering, and real-time tracking for optimal stock levels.',
      shortDescription: 'Optimize inventory with AI-powered management',
      icon: CogIcon,
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Real-time tracking',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Reporting & analytics',
        'Mobile app',
        'Integration APIs'
      ],
      pricing: {
        basic: 199,
        pro: 499,
        enterprise: 1299
      },
      marketPrice: '$199 - $1,299/month',
      benefits: [
        'Reduce stockouts by 70%',
        'Lower inventory costs by 30%',
        'Improve cash flow by 40%',
        'Automate 90% of reordering',
        'Reduce waste by 50%',
        'Increase efficiency by 60%'
      ],
      useCases: [
        'Retail inventory management',
        'Manufacturing materials',
        'E-commerce stock control',
        'Warehouse optimization',
        'Supply chain management',
        'Multi-channel selling'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-smart-inventory-manager'
      },
      gradient: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/25'
    },
    {
      id: 'zion-smart-expense-tracker',
      title: 'Zion Smart Expense Tracker',
      description: 'Intelligent expense management platform with receipt scanning, automated categorization, and financial insights for better budget control.',
      shortDescription: 'Streamline expense management with AI automation',
      icon: CurrencyDollarIcon,
      features: [
        'Receipt scanning',
        'Automated categorization',
        'Expense approval workflows',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support',
        'Mobile app',
        'Team management',
        'Reporting & analytics',
        'Integration capabilities'
      ],
      pricing: {
        basic: 99,
        pro: 299,
        enterprise: 799
      },
      marketPrice: '$99 - $799/month',
      benefits: [
        'Save 80% time on expense processing',
        'Reduce errors by 95%',
        'Improve compliance by 90%',
        'Better budget control',
        'Faster reimbursements',
        'Detailed financial insights'
      ],
      useCases: [
        'Business expense tracking',
        'Travel expense management',
        'Team expense control',
        'Tax preparation',
        'Budget monitoring',
        'Financial reporting'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-smart-expense-tracker'
      },
      gradient: 'from-yellow-500 to-orange-500',
      glow: 'shadow-yellow-500/25'
    },
    {
      id: 'zion-ai-legal-assistant',
      title: 'Zion AI Legal Assistant',
      description: 'Advanced legal document analysis and contract review platform with AI-powered insights, compliance checking, and risk assessment.',
      shortDescription: 'Streamline legal processes with AI assistance',
      icon: ScaleIcon,
      features: [
        'Contract analysis',
        'Document review',
        'Compliance checking',
        'Risk assessment',
        'Legal research',
        'Template generation',
        'Deadline tracking',
        'Client management',
        'Billing automation',
        'Case management'
      ],
      pricing: {
        basic: 399,
        pro: 999,
        enterprise: 2499
      },
      marketPrice: '$399 - $2,499/month',
      benefits: [
        'Reduce review time by 70%',
        'Improve accuracy by 85%',
        'Lower legal costs by 50%',
        'Better risk management',
        'Faster contract processing',
        'Enhanced compliance'
      ],
      useCases: [
        'Contract review',
        'Legal document analysis',
        'Compliance monitoring',
        'Risk assessment',
        'Legal research',
        'Case preparation'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-ai-legal-assistant'
      },
      gradient: 'from-indigo-500 to-purple-500',
      glow: 'shadow-indigo-500/25'
    },
    {
      id: 'zion-ai-medical-assistant',
      title: 'Zion AI Medical Assistant',
      description: 'Healthcare-focused AI platform for patient data analysis, diagnostic support, treatment recommendations, and medical record management.',
      shortDescription: 'Enhance healthcare with AI-powered medical assistance',
      icon: HeartIcon,
      features: [
        'Patient data analysis',
        'Diagnostic support',
        'Treatment recommendations',
        'Medical record management',
        'Appointment scheduling',
        'Prescription tracking',
        'Lab result analysis',
        'Patient monitoring',
        'HIPAA compliance',
        'Integration with EHRs'
      ],
      pricing: {
        basic: 599,
        pro: 1499,
        enterprise: 3999
      },
      marketPrice: '$599 - $3,999/month',
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce administrative time by 60%',
        'Better patient outcomes',
        'Enhanced care coordination',
        'Reduced medical errors',
        'Improved efficiency'
      ],
      useCases: [
        'Diagnostic support',
        'Patient monitoring',
        'Medical record analysis',
        'Treatment planning',
        'Appointment management',
        'Healthcare analytics'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-ai-medical-assistant'
      },
      gradient: 'from-red-500 to-pink-500',
      glow: 'shadow-red-500/25'
    },
    {
      id: 'zion-ai-education-tutor',
      title: 'Zion AI Education Tutor',
      description: 'Personalized learning platform with AI-powered tutoring, adaptive curriculum, progress tracking, and interactive educational content.',
      shortDescription: 'Revolutionize education with AI-powered tutoring',
      icon: AcademicCapIcon,
      features: [
        'Personalized learning paths',
        'Adaptive curriculum',
        'Progress tracking',
        'Interactive content',
        'Assessment tools',
        'Student analytics',
        'Parent dashboard',
        'Multi-subject support',
        'Gamification',
        'Mobile learning'
      ],
      pricing: {
        basic: 149,
        pro: 399,
        enterprise: 999
      },
      marketPrice: '$149 - $999/month',
      benefits: [
        'Improve learning outcomes by 60%',
        'Personalize education for each student',
        'Reduce teaching workload by 40%',
        'Better student engagement',
        'Real-time progress tracking',
        'Adaptive learning experience'
      ],
      useCases: [
        'K-12 education',
        'Higher education',
        'Professional training',
        'Language learning',
        'Skill development',
        'Test preparation'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-ai-education-tutor'
      },
      gradient: 'from-cyan-500 to-blue-500',
      glow: 'shadow-cyan-500/25'
    },
    {
      id: 'zion-ai-real-estate-analyzer',
      title: 'Zion AI Real Estate Analyzer',
      description: 'Comprehensive real estate analysis platform with market trends, property valuation, investment insights, and automated property research.',
      shortDescription: 'Make informed real estate decisions with AI insights',
      icon: HomeIcon,
      features: [
        'Property valuation',
        'Market analysis',
        'Investment insights',
        'Rental yield calculations',
        'Neighborhood analysis',
        'Price predictions',
        'Property comparison',
        'Investment portfolio tracking',
        'Market alerts',
        'Report generation'
      ],
      pricing: {
        basic: 199,
        pro: 499,
        enterprise: 1299
      },
      marketPrice: '$199 - $1,299/month',
      benefits: [
        'Make better investment decisions',
        'Identify profitable opportunities',
        'Reduce research time by 80%',
        'Improve accuracy by 70%',
        'Better risk assessment',
        'Comprehensive market insights'
      ],
      useCases: [
        'Property investment analysis',
        'Real estate valuation',
        'Market research',
        'Portfolio management',
        'Rental property analysis',
        'Commercial real estate'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-ai-real-estate-analyzer'
      },
      gradient: 'from-teal-500 to-green-500',
      glow: 'shadow-teal-500/25'
    },
    {
      id: 'zion-ai-supply-chain-optimizer',
      title: 'Zion AI Supply Chain Optimizer',
      description: 'Advanced supply chain management platform with demand forecasting, route optimization, supplier management, and real-time tracking.',
      shortDescription: 'Optimize supply chain operations with AI intelligence',
      icon: TruckIcon,
      features: [
        'Demand forecasting',
        'Route optimization',
        'Supplier management',
        'Inventory optimization',
        'Risk assessment',
        'Cost analysis',
        'Performance tracking',
        'Integration capabilities',
        'Real-time monitoring',
        'Predictive analytics'
      ],
      pricing: {
        basic: 399,
        pro: 999,
        enterprise: 2499
      },
      marketPrice: '$399 - $2,499/month',
      benefits: [
        'Reduce costs by 25%',
        'Improve efficiency by 40%',
        'Reduce delays by 60%',
        'Better demand planning',
        'Optimized logistics',
        'Enhanced visibility'
      ],
      useCases: [
        'Manufacturing supply chain',
        'Retail logistics',
        'E-commerce fulfillment',
        'Food & beverage distribution',
        'Pharmaceutical supply chain',
        'Automotive logistics'
      ],
      contactInfo: {
        phone: '+1 302 464 0950',
        email: 'kleber@ziontechgroup.com',
        website: 'https://ziontechgroup.com/zion-ai-supply-chain-optimizer'
      },
      gradient: 'from-gray-500 to-slate-500',
      glow: 'shadow-gray-500/25'
    }
  ];

  return (
    <>
      <SEOHead
        title="Micro SaaS Solutions - Zion Tech Group"
        description="Discover our comprehensive suite of intelligent micro SaaS solutions designed to solve specific business challenges. From AI content generation to smart analytics, we provide real, functional applications that drive business growth."
        keywords="micro saas, business software, AI solutions, task management, crm, analytics, inventory management, expense tracking, legal assistant, medical assistant, education tutor, real estate analyzer, supply chain optimizer"
        canonicalUrl="https://ziontechgroup.com/micro-saas-solutions"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-slate-900 to-cyan-900/30"></div>
          <div className="absolute inset-0 cyber-grid opacity-20"></div>
          
          {/* Floating Particles */}
          <div className="floating-particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 holographic leading-tight">
                Micro SaaS <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive suite of intelligent micro SaaS applications designed to solve specific business challenges with real functionality and AI-powered intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact"
                  className="relative group cyber-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Today
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link to="/pricing"
                  className="border-2 border-purple-400 text-purple-300 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-purple-400/25 neon-border-animated"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
                Real, functional applications that solve specific business challenges with AI-powered intelligence and automation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={service.id} 
                  className="group relative bg-slate-800/50 p-6 sm:p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <span className="text-sm text-purple-400 font-medium neon-text">AI Powered</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors text-sm sm:text-base">
                      {service.description}
                    </p>
                    
                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-white">Key Features:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2 text-white">Pricing:</h4>
                      <div className="text-2xl font-bold text-purple-400 neon-text">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting from ${service.pricing.basic.toLocaleString()}/month</div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link 
                        to={`/contact?service=${service.id}`}
                        className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-center py-2 sm:py-3 px-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 text-sm font-semibold hover:scale-105"
                      >
                        Get Started
                      </Link>
                      <Link 
                        to={service.contactInfo.website}
                        className="flex-1 border border-purple-400 text-purple-300 text-center py-2 sm:py-3 px-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm font-semibold"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 sm:py-20 bg-gradient-to-r from-purple-900/40 via-slate-900 to-cyan-900/40 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8">
              Let our expert team help you choose the right micro SaaS solutions for your business needs. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="relative group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-lg shadow-purple-500/25"
              >
                <span className="relative z-10 flex items-center">
                  Get Free Consultation
                  <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
              <a href="tel:+13024640950"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base hover:shadow-lg hover:shadow-white/25"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSAASSolutionsPage;