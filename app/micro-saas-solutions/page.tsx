'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard Pro",
      description: "Enterprise-grade analytics solution with AI-driven insights, real-time data visualization, and predictive analytics.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing & visualization",
        "AI-powered predictive analytics",
        "Custom interactive dashboards",
        "Automated report generation",
        "Advanced data export (CSV, PDF, Excel)",
        "Multi-user collaboration & permissions",
        "API integrations (100+ connectors)",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$299/month",
      originalPrice: "$399/month",
      savings: "Save $100/month",
      benefits: ["40% increase in efficiency", "Better data-driven decisions", "50% cost reduction"],
      useCases: ["Business intelligence", "Performance tracking", "Financial analytics", "Marketing insights"],
      href: "/micro-saas/analytics-dashboard-pro",
      popular: true,
      freeTrial: "14-day free trial"
    },
    {
      title: "AI Content Studio Enterprise",
      description: "Advanced AI content creation platform with multi-language support, brand voice training, and SEO optimization.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation (50+ content types)",
        "Multi-language support (25+ languages)",
        "Advanced SEO optimization",
        "Brand voice consistency training",
        "Content scheduling & automation",
        "Performance analytics & insights",
        "Team collaboration tools",
        "Plagiarism detection & originality"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$199/month",
      originalPrice: "$299/month",
      savings: "Save $100/month",
      benefits: ["80% time savings", "Consistent brand voice", "300% SEO improvement"],
      useCases: ["Content marketing", "Social media management", "Blog automation", "Email campaigns"],
      href: "/micro-saas/content-studio-enterprise",
      freeTrial: "7-day free trial"
    },
    {
      title: "AI Customer Success Platform",
      description: "Comprehensive customer support solution with AI chatbots, sentiment analysis, and automated ticket routing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Advanced NLP & conversation AI",
        "24/7 multilingual support",
        "Sentiment analysis & mood tracking",
        "Automated ticket routing",
        "Live chat handoff to humans",
        "Knowledge base integration",
        "Customer satisfaction scoring",
        "Advanced analytics dashboard"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$399/month",
      originalPrice: "$599/month",
      savings: "Save $200/month",
      benefits: ["90% faster response times", "60% cost reduction", "95% customer satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation", "Support ticket management"],
      href: "/micro-saas/customer-success-platform",
      popular: true,
      freeTrial: "30-day free trial"
    },
    {
      title: "AI Project Intelligence Suite",
      description: "Smart project management with AI-powered resource optimization, risk prediction, and automated scheduling.",
      icon: CogIcon,
      features: [
        "AI task prioritization & optimization",
        "Resource allocation algorithms",
        "Risk prediction & mitigation",
        "Automated scheduling & deadlines",
        "Team performance analytics",
        "Budget tracking & forecasting",
        "Integration with 50+ tools",
        "Mobile project management"
      ],
      color: "from-orange-500 to-red-500",
      price: "$249/month",
      originalPrice: "$349/month",
      savings: "Save $100/month",
      benefits: ["35% productivity increase", "25% faster project delivery", "40% better resource utilization"],
      useCases: ["Project management", "Team coordination", "Resource planning", "Agile development"],
      href: "/micro-saas/project-intelligence-suite",
      freeTrial: "14-day free trial"
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Intelligent supply chain management with predictive analytics, automated reordering, and demand forecasting.",
      icon: EyeIcon,
      features: [
        "Predictive demand forecasting",
        "Automated inventory reordering",
        "Supply chain risk analysis",
        "Multi-location inventory sync",
        "Vendor performance tracking",
        "Cost optimization algorithms",
        "Real-time tracking & alerts",
        "Integration with ERP systems"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$499/month",
      originalPrice: "$799/month",
      savings: "Save $300/month",
      benefits: ["30% inventory reduction", "50% fewer stockouts", "25% cost savings"],
      useCases: ["Inventory management", "Supply chain optimization", "Retail operations", "Manufacturing"],
      href: "/micro-saas/supply-chain-optimizer",
      freeTrial: "21-day free trial"
    },
    {
      title: "AI Financial Intelligence Hub",
      description: "Comprehensive financial management with AI-powered expense tracking, budget forecasting, and tax optimization.",
      icon: CurrencyDollarIcon,
      features: [
        "AI expense categorization",
        "Receipt OCR & processing",
        "Budget forecasting & alerts",
        "Tax optimization suggestions",
        "Multi-currency support",
        "Financial reporting & insights",
        "Bank account integration",
        "Audit trail & compliance"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$149/month",
      originalPrice: "$199/month",
      savings: "Save $50/month",
      benefits: ["70% time savings", "Better financial visibility", "Automated tax compliance"],
      useCases: ["Expense management", "Financial planning", "Tax preparation", "Budget tracking"],
      href: "/micro-saas/financial-intelligence-hub",
      freeTrial: "14-day free trial"
    },
    {
      title: "AI Marketing Automation Pro",
      description: "Complete marketing automation platform with AI-driven campaign optimization, lead scoring, and personalization.",
      icon: LightBulbIcon,
      features: [
        "AI campaign optimization",
        "Advanced lead scoring",
        "Personalized content delivery",
        "Email marketing automation",
        "Social media scheduling",
        "A/B testing & optimization",
        "Customer journey mapping",
        "ROI tracking & analytics"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$349/month",
      originalPrice: "$499/month",
      savings: "Save $150/month",
      benefits: ["200% increase in lead quality", "150% higher conversion rates", "60% time savings"],
      useCases: ["Marketing automation", "Lead generation", "Email campaigns", "Social media management"],
      href: "/micro-saas/marketing-automation-pro",
      popular: true,
      freeTrial: "21-day free trial"
    },
    {
      title: "AI HR Management Suite",
      description: "Intelligent HR platform with AI-powered recruitment, employee analytics, and performance management.",
      icon: UserGroupIcon,
      features: [
        "AI resume screening & matching",
        "Employee performance analytics",
        "Predictive turnover analysis",
        "Automated scheduling & time tracking",
        "Skills gap analysis",
        "Employee engagement surveys",
        "Compliance monitoring",
        "Integration with HRIS systems"
      ],
      color: "from-teal-500 to-green-500",
      price: "$279/month",
      originalPrice: "$379/month",
      savings: "Save $100/month",
      benefits: ["50% faster hiring", "30% reduced turnover", "40% improved productivity"],
      useCases: ["Recruitment", "Performance management", "Employee analytics", "HR automation"],
      href: "/micro-saas/hr-management-suite",
      freeTrial: "14-day free trial"
    }
  ];

  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge artificial intelligence to automate and optimize your business processes.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business, from startup to enterprise scale.",
      icon: CloudIcon
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows.",
      icon: CogIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: UserGroupIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to streamline your business operations." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our comprehensive suite of micro SaaS solutions designed to streamline 
              your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SaaS solutions designed to transform your business operations.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {solutions.map((solution, index) => (
                <div key={index} className={`bg-white border-2 rounded-xl p-6 hover:shadow-xl transition-all duration-300 relative ${
                  solution.popular ? 'border-purple-500 shadow-lg' : 'border-gray-200 hover:border-blue-300'
                }`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{solution.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{solution.price}</span>
                      {solution.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{solution.originalPrice}</span>
                      )}
                    </div>
                    {solution.savings && (
                      <p className="text-green-600 font-semibold text-sm">{solution.savings}</p>
                    )}
                    {solution.freeTrial && (
                      <p className="text-blue-600 font-medium text-sm">{solution.freeTrial}</p>
                    )}
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {solution.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Benefits:</h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Link 
                      to={solution.href}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center font-semibold text-sm"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center font-medium text-sm"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your business needs with our flexible pricing options.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 3 micro SaaS tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Basic AI features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Email support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Standard integrations</span>
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-center block font-semibold"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$299</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 8 micro SaaS tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced AI features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Advanced integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom reporting</span>
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block font-semibold"
                >
                  Get Started
                </Link>
              </div>
              
              <div className="bg-white rounded-xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Unlimited micro SaaS tools</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Enterprise AI features</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">White-label options</span>
                  </li>
                </ul>
                <Link 
                  to="/contact"
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors text-center block font-semibold"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Our AI-powered micro SaaS solutions are designed to deliver maximum value with minimal complexity.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-purple-700">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                Schedule Demo
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-100">+1-302-464-0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;
