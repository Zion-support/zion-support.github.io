import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Star, 
  Users, 
  Shield, 
  Clock, 
  TrendingUp,
  BarChart3,
  Database,
  Smartphone,
  Globe,
  Target,
  Lightbulb,
  Rocket,
  Award,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const MicroSaaSSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      id: 'ai-accounting-assistant',
      name: 'AI Accounting Assistant',
      price: '$29/mo',
      originalPrice: '$49/mo',
      description: 'Automated bookkeeping and financial analysis powered by AI',
      longDescription: 'Revolutionize your accounting with our AI-powered assistant that handles invoice processing, expense tracking, tax preparation, and financial reporting automatically.',
      features: [
        'Automated Invoice Processing',
        'Real-time Expense Tracking',
        'Tax Preparation & Filing',
        'Financial Report Generation',
        'Bank Reconciliation',
        'Multi-currency Support',
        'Integration with 50+ Banks',
        'Mobile App Access',
        '24/7 Customer Support',
        'Data Security & Encryption'
      ],
      benefits: [
        'Save 20+ hours per week on accounting tasks',
        'Reduce human errors by 95%',
        'Real-time financial insights',
        'Compliance with tax regulations',
        'Scalable for growing businesses'
      ],
      category: 'Finance & Accounting',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      popular: true
    },
    {
      id: 'ai-content-moderation-pro',
      name: 'AI Content Moderation Pro',
      price: '$49/mo',
      originalPrice: '$79/mo',
      description: 'Advanced content filtering and moderation for platforms',
      longDescription: 'Protect your platform with our advanced AI content moderation system that automatically detects and filters inappropriate content across text, images, and videos.',
      features: [
        'Real-time Content Monitoring',
        'Multi-language Support (50+ languages)',
        'Image & Video Analysis',
        'Custom Moderation Rules',
        'Analytics Dashboard',
        'API Integration',
        'Bulk Content Processing',
        'User Behavior Analysis',
        'Compliance Reporting',
        'White-label Solutions'
      ],
      benefits: [
        '99.9% accuracy in content detection',
        'Reduce moderation costs by 80%',
        '24/7 automated monitoring',
        'Customizable for any industry',
        'Scalable to millions of posts'
      ],
      category: 'Content Management',
      icon: <Shield className="w-8 h-8 text-green-400" />,
      popular: false
    },
    {
      id: 'ai-climate-solutions-pro',
      name: 'AI Climate Solutions Pro',
      price: '$79/mo',
      originalPrice: '$129/mo',
      description: 'Environmental monitoring and sustainability tracking',
      longDescription: 'Track and optimize your environmental impact with our comprehensive AI-powered climate solutions platform for carbon footprint analysis and sustainability reporting.',
      features: [
        'Carbon Footprint Analysis',
        'Sustainability Reporting',
        'Compliance Monitoring',
        'Green Initiative Tracking',
        'Energy Usage Optimization',
        'Waste Management Analytics',
        'Supply Chain Sustainability',
        'ESG Reporting Tools',
        'Environmental Risk Assessment',
        'Green Certification Support'
      ],
      benefits: [
        'Reduce carbon footprint by 30%',
        'Achieve ESG compliance goals',
        'Save on energy costs',
        'Improve brand reputation',
        'Meet regulatory requirements'
      ],
      category: 'Sustainability',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      popular: true
    },
    {
      id: 'ai-agricultural-intelligence-pro',
      name: 'AI Agricultural Intelligence Pro',
      price: '$99/mo',
      originalPrice: '$149/mo',
      description: 'Smart farming and crop optimization platform',
      longDescription: 'Maximize your agricultural yield with our AI-powered farming intelligence platform that provides crop monitoring, weather analysis, and resource optimization.',
      features: [
        'Crop Health Monitoring',
        'Weather Pattern Analysis',
        'Yield Prediction Models',
        'Resource Optimization',
        'Pest & Disease Detection',
        'Soil Analysis',
        'Irrigation Management',
        'Harvest Planning',
        'Market Price Tracking',
        'Farm Equipment Integration'
      ],
      benefits: [
        'Increase crop yield by 25%',
        'Reduce water usage by 40%',
        'Minimize pesticide use',
        'Optimize planting schedules',
        'Maximize profit margins'
      ],
      category: 'Agriculture',
      icon: <Target className="w-8 h-8 text-green-400" />,
      popular: false
    },
    {
      id: 'ai-business-intelligence-pro',
      name: 'AI Business Intelligence Pro',
      price: '$149/mo',
      originalPrice: '$199/mo',
      description: 'Advanced analytics and business insights platform',
      longDescription: 'Transform your data into actionable insights with our comprehensive AI-powered business intelligence platform that provides predictive analytics and custom dashboards.',
      features: [
        'Predictive Analytics',
        'Custom Dashboard Builder',
        'Real-time Data Visualization',
        'Automated Report Generation',
        'KPI Tracking & Alerts',
        'Data Integration (100+ sources)',
        'Machine Learning Models',
        'Collaborative Workspaces',
        'Mobile Analytics App',
        'White-label Solutions'
      ],
      benefits: [
        'Make data-driven decisions faster',
        'Identify trends and opportunities',
        'Improve operational efficiency',
        'Reduce reporting time by 90%',
        'Scale with your business growth'
      ],
      category: 'Analytics',
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      popular: true
    },
    {
      id: 'ai-code-assistant-pro',
      name: 'AI Code Assistant Pro',
      price: '$199/mo',
      originalPrice: '$299/mo',
      description: 'AI-powered coding assistant and code generation',
      longDescription: 'Accelerate your development process with our advanced AI code assistant that provides intelligent code completion, generation, and debugging capabilities.',
      features: [
        'Intelligent Code Completion',
        'Code Generation from Comments',
        'Bug Detection & Fixing',
        'Code Review & Optimization',
        'Multi-language Support (20+ languages)',
        'IDE Integration',
        'Documentation Generation',
        'Test Case Generation',
        'Code Refactoring',
        'Security Vulnerability Scanning'
      ],
      benefits: [
        'Increase coding speed by 50%',
        'Reduce bugs by 70%',
        'Improve code quality',
        'Learn new technologies faster',
        'Focus on complex problem-solving'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-purple-400" />,
      popular: false
    }
  ];

  const categories = ['All', 'Finance & Accounting', 'Content Management', 'Sustainability', 'Agriculture', 'Analytics', 'Development'];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$29/mo',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 transactions/month',
        'Basic AI features',
        'Email support',
        'Standard integrations',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99/mo',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 transactions/month',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Advanced analytics',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited transactions',
        'Full AI capabilities',
        '24/7 dedicated support',
        'Custom development',
        'White-label solutions',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - AI-Powered Business Tools | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SAAS solutions including AI accounting, content moderation, climate solutions, and more. Affordable, scalable, and powerful business tools." />
        <meta name="keywords" content="micro SAAS, AI accounting, content moderation, climate solutions, agricultural intelligence, business intelligence, code assistant" />
        <meta property="og:title" content="Micro SAAS Solutions - AI-Powered Business Tools" />
        <meta property="og:description" content="Discover our comprehensive micro SAAS solutions including AI accounting, content moderation, climate solutions, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Powerful, affordable micro software-as-a-service solutions designed for modern businesses. 
              Scale your operations with AI-powered tools that grow with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 flex items-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#pricing"
                className="border-2 border-white/30 hover:border-purple-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Pricing
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for modern businesses that need powerful, scalable, and cost-effective solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Deploy and start using our solutions in minutes, not weeks.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with 99.9% uptime guarantee.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
              <p className="text-gray-300">Solutions that grow with your business needs.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Expert support whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS solutions designed for every business need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group relative ${
                service.popular ? 'ring-2 ring-purple-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-purple-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-3xl font-bold text-purple-400">{service.price}</span>
                    <span className="text-lg text-gray-400 line-through">{service.originalPrice}</span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-purple-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <Link
                    to={`/${service.id}`}
                    className="block w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Start Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include 14-day free trial and no setup fees.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`bg-slate-800/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                tier.popular ? 'ring-2 ring-purple-500 bg-slate-700/50' : ''
              }`}>
                {tier.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white'
                      : 'border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              to="/demo"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaaSSolutionsPage;