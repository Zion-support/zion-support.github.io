import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Target,
  BarChart,
  Bot,
  FileText,
  DollarSign,
  Users,
  Mail,
  Share,
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Activity,
  Phone,
  MessageSquare,
  Award,
  Sparkles,
  Zap,
  Shield,
  Database,
  Settings,
  Globe,
  Cpu,
  Lock,
  Eye,
  Stethoscope,
  Briefcase,
  Calendar,
  Clock,
  PieChart,
  TrendingDown,
  Home,
  Heart,
  GraduationCap,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  Navigation as NavIcon,
  Truck,
  Smartphone,
  ChefHat,
  Rocket,
  Sprout,
  Scale,
  Mic,
  FlaskConical
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Project Manager Pro',
      description: 'Intelligent project management with predictive analytics and automated resource allocation',
      icon: Target,
      price: '$99/mo',
      features: [
        'Smart Scheduling & Resource Allocation',
        'Predictive Risk Assessment',
        'Team Performance Analytics',
        'Automated Progress Tracking',
        'Budget Optimization',
        'Stakeholder Communication'
      ],
      benefits: [
        'Increase project success rate by 40%',
        'Reduce project delays by 60%',
        'Optimize resource utilization',
        'Improve team collaboration'
      ],
      popular: true,
      href: '/ai-project-manager'
    },
    {
      name: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence with AI-powered insights and predictive analytics',
      icon: BarChart,
      price: '$149/mo',
      features: [
        'Real-time Data Visualization',
        'Predictive Analytics & Forecasting',
        'Custom Dashboard Creation',
        'Automated Report Generation',
        'Data Integration & ETL',
        'Mobile App Access'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Reduce manual reporting by 80%',
        'Improve business performance'
      ],
      popular: true,
      href: '/ai-analytics-dashboard'
    },
    {
      name: 'AI Customer Support Bot',
      description: '24/7 AI-powered customer support with natural language processing and instant responses',
      icon: Bot,
      price: '$199/mo',
      features: [
        'Multi-channel Support (Chat, Email, Phone)',
        'Natural Language Processing',
        'Sentiment Analysis & Escalation',
        'Knowledge Base Integration',
        'Multi-language Support',
        'Performance Analytics'
      ],
      benefits: [
        'Provide instant customer support',
        'Reduce response time by 90%',
        'Handle multiple queries simultaneously',
        'Improve customer satisfaction'
      ],
      popular: false,
      href: '/ai-customer-support-bot'
    },
    {
      name: 'AI Content Writer Pro',
      description: 'Advanced AI-powered content creation and optimization for all your marketing needs',
      icon: FileText,
      price: '$79/mo',
      features: [
        'Multi-format Content Creation',
        'SEO Optimization & Keyword Research',
        'Brand Voice Matching',
        'Content Personalization',
        'Plagiarism Detection',
        'Social Media Integration'
      ],
      benefits: [
        'Scale content production 10x',
        'Maintain consistent brand voice',
        'Optimize for search engines',
        'Reduce content creation costs'
      ],
      popular: true,
      href: '/ai-content-writer'
    },
    {
      name: 'AI Financial Advisor',
      description: 'Personalized financial planning and investment advice powered by advanced AI algorithms',
      icon: DollarSign,
      price: '$129/mo',
      features: [
        'Portfolio Analysis & Optimization',
        'Risk Assessment & Management',
        'Investment Recommendations',
        'Market Trend Analysis',
        'Retirement Planning',
        'Tax Optimization Strategies'
      ],
      benefits: [
        'Make informed investment decisions',
        'Optimize portfolio performance',
        'Reduce financial risks',
        'Plan for long-term goals'
      ],
      popular: false,
      href: '/ai-financial-advisor'
    },
    {
      name: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with AI-powered insights and automation',
      icon: Users,
      price: '$89/mo',
      features: [
        'Lead Management & Scoring',
        'Sales Pipeline Automation',
        'Customer Behavior Analysis',
        'Email Marketing Automation',
        'Performance Analytics',
        'Integration with Popular Tools'
      ],
      benefits: [
        'Increase sales conversion by 35%',
        'Automate repetitive tasks',
        'Improve customer relationships',
        'Boost team productivity'
      ],
      popular: false,
      href: '/ai-crm-assistant'
    },
    {
      name: 'AI Email Marketing Suite',
      description: 'Advanced email marketing automation with AI-powered personalization and optimization',
      icon: Mail,
      price: '$69/mo',
      features: [
        'Smart Email Segmentation',
        'AI-powered Personalization',
        'A/B Testing Automation',
        'Send Time Optimization',
        'Subject Line Generation',
        'Performance Analytics'
      ],
      benefits: [
        'Increase email open rates by 50%',
        'Improve click-through rates',
        'Automate email campaigns',
        'Personalize customer experience'
      ],
      popular: false,
      href: '/ai-email-marketing'
    },
    {
      name: 'AI Social Media Manager',
      description: 'Automated social media management with AI-powered content creation and scheduling',
      icon: Share,
      price: '$59/mo',
      features: [
        'Content Creation & Curation',
        'Optimal Posting Times',
        'Hashtag Research & Optimization',
        'Engagement Analytics',
        'Multi-platform Management',
        'Trend Analysis'
      ],
      benefits: [
        'Increase social media engagement',
        'Save time on content creation',
        'Improve brand visibility',
        'Grow your social following'
      ],
      popular: false,
      href: '/ai-social-media-manager'
    }
  ];

  const categories = [
    { name: 'Productivity', icon: Target, count: 3 },
    { name: 'Analytics', icon: BarChart, count: 2 },
    { name: 'Marketing', icon: Share, count: 2 },
    { name: 'Support', icon: Bot, count: 1 }
  ];

  const features = [
    {
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows',
      icon: Settings
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow with your business with flexible pricing and features',
      icon: TrendingUp
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our expert team',
      icon: Phone
    },
    {
      title: 'Regular Updates',
      description: 'Continuous improvements and new features added regularly',
      icon: Sparkles
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Applications</title>
        <meta name="description" content="Ready-to-use AI-powered micro SaaS applications for immediate business impact. Project management, analytics, customer support, content creation, and more." />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use AI-powered applications that deliver immediate business value
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#products"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center"
              >
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 inline-flex items-center"
              >
                Get Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <p className="text-xl text-gray-300">Choose from our comprehensive range of AI-powered solutions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/30 rounded-xl p-6 text-center hover:border-green-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.count} products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 flex items-center justify-center">
              <Code className="w-8 h-8 mr-3 text-green-400" />
              Our Micro SaaS Products
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, ready-to-use applications that solve real business problems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 relative ${
                  product.popular 
                    ? 'border-green-400/60 shadow-lg shadow-green-500/10' 
                    : 'border-green-400/30 hover:border-green-400/60'
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <div className="text-2xl font-bold text-green-400">{product.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                  <ul className="space-y-2">
                    {product.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <a
                    href={product.href}
                    className={`w-full font-bold py-3 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center ${
                      product.popular
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white'
                        : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white'
                    }`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Get Free Trial
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Micro SaaS?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with enterprise-grade technology, designed for ease of use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 inline-flex items-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Start Free Trial
            </a>
            <a
              href="/consultation"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;