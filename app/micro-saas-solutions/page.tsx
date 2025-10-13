import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  CogIcon,
  GlobeAltIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  RocketLaunchIcon,
  CloudIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaaSProducts = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time business analytics with AI-driven insights and predictive modeling for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboard creation",
        "Automated reporting",
        "Multi-source data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-indigo-500",
      price: "$299/month",
      setupFee: "$1,500",
      benefits: ["40% faster insights", "Real-time updates", "Custom dashboards"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "AI Content Management System",
      description: "Intelligent content management with AI-powered optimization, SEO tools, and automated content generation.",
      icon: GlobeAltIcon,
      features: [
        "AI content generation",
        "SEO optimization",
        "Multi-language support",
        "Content scheduling",
        "Performance analytics",
        "Team collaboration tools"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$199/month",
      setupFee: "$800",
      benefits: ["80% time savings", "SEO optimized", "Multi-language"],
      useCases: ["Blog management", "E-commerce content", "Marketing campaigns"],
      href: "/ai-content-management"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent customer support automation with natural language processing and sentiment analysis.",
      icon: PhoneIcon,
      features: [
        "24/7 AI chatbot",
        "Sentiment analysis",
        "Ticket automation",
        "Knowledge base integration",
        "Multi-channel support",
        "Performance analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$149/month",
      setupFee: "$600",
      benefits: ["24/7 availability", "Instant responses", "95% satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation"],
      href: "/ai-customer-support-bot"
    },
    {
      title: "AI Project Management Suite",
      description: "Smart project management with AI-powered task optimization, resource allocation, and deadline prediction.",
      icon: CogIcon,
      features: [
        "AI task optimization",
        "Resource allocation",
        "Deadline prediction",
        "Team collaboration",
        "Progress tracking",
        "Risk assessment"
      ],
      color: "from-orange-500 to-red-500",
      price: "$249/month",
      setupFee: "$1,200",
      benefits: ["30% efficiency gain", "Predictive planning", "Risk mitigation"],
      useCases: ["Software development", "Marketing campaigns", "Event planning"],
      href: "/ai-project-management"
    },
    {
      title: "AI E-commerce Optimizer",
      description: "Complete e-commerce optimization with AI-powered product recommendations, pricing strategies, and inventory management.",
      icon: ChartBarIcon,
      features: [
        "AI product recommendations",
        "Dynamic pricing",
        "Inventory optimization",
        "Customer segmentation",
        "Sales forecasting",
        "A/B testing tools"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$399/month",
      setupFee: "$2,000",
      benefits: ["25% sales increase", "Optimized pricing", "Reduced inventory costs"],
      useCases: ["Online stores", "Marketplace optimization", "Retail analytics"],
      href: "/ai-ecommerce-optimizer"
    },
    {
      title: "AI HR Management System",
      description: "Intelligent HR management with AI-powered recruitment, employee analytics, and performance optimization.",
      icon: UserGroupIcon,
      features: [
        "AI resume screening",
        "Employee analytics",
        "Performance tracking",
        "Training recommendations",
        "Retention prediction",
        "Compliance monitoring"
      ],
      color: "from-teal-500 to-green-500",
      price: "$179/month",
      setupFee: "$900",
      benefits: ["50% faster hiring", "Reduced turnover", "Better performance"],
      useCases: ["Recruitment", "Performance management", "Employee development"],
      href: "/ai-hr-management"
    },
    {
      title: "AI Financial Analytics",
      description: "Advanced financial analytics with AI-powered forecasting, risk assessment, and automated reporting.",
      icon: CurrencyDollarIcon,
      features: [
        "Financial forecasting",
        "Risk assessment",
        "Automated reporting",
        "Expense tracking",
        "Investment analysis",
        "Compliance monitoring"
      ],
      color: "from-emerald-500 to-teal-500",
      price: "$329/month",
      setupFee: "$1,500",
      benefits: ["Accurate forecasting", "Risk mitigation", "Automated compliance"],
      useCases: ["Financial planning", "Investment analysis", "Risk management"],
      href: "/ai-financial-analytics"
    },
    {
      title: "AI Marketing Automation",
      description: "Comprehensive marketing automation with AI-powered campaign optimization, lead scoring, and personalization.",
      icon: RocketLaunchIcon,
      features: [
        "AI campaign optimization",
        "Lead scoring",
        "Email personalization",
        "Social media automation",
        "ROI tracking",
        "A/B testing"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$279/month",
      setupFee: "$1,200",
      benefits: ["300% ROI increase", "Personalized campaigns", "Automated optimization"],
      useCases: ["Email marketing", "Social media", "Lead generation"],
      href: "/ai-marketing-automation"
    },
    {
      title: "AI Inventory Management",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and optimization.",
      icon: CloudIcon,
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Inventory optimization",
        "Supplier management",
        "Cost analysis",
        "Real-time tracking"
      ],
      color: "from-violet-500 to-purple-500",
      price: "$219/month",
      setupFee: "$1,000",
      benefits: ["30% cost reduction", "Zero stockouts", "Optimized inventory"],
      useCases: ["Retail management", "Manufacturing", "Supply chain"],
      href: "/ai-inventory-management"
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document processing with AI-powered OCR, data extraction, and automated workflow management.",
      icon: ShieldCheckIcon,
      features: [
        "AI OCR technology",
        "Data extraction",
        "Workflow automation",
        "Document classification",
        "Version control",
        "Security compliance"
      ],
      color: "from-indigo-500 to-blue-500",
      price: "$159/month",
      setupFee: "$700",
      benefits: ["90% accuracy", "80% time savings", "Automated workflows"],
      useCases: ["Document management", "Data entry", "Compliance processing"],
      href: "/ai-document-processing"
    },
    {
      title: "AI Social Media Manager",
      description: "Intelligent social media management with AI-powered content creation, scheduling, and engagement optimization.",
      icon: GlobeAltIcon,
      features: [
        "AI content creation",
        "Optimal posting times",
        "Engagement optimization",
        "Hashtag suggestions",
        "Performance analytics",
        "Multi-platform management"
      ],
      color: "from-rose-500 to-pink-500",
      price: "$129/month",
      setupFee: "$500",
      benefits: ["200% engagement increase", "Automated posting", "Optimized timing"],
      useCases: ["Social media marketing", "Brand management", "Community building"],
      href: "/ai-social-media-manager"
    },
    {
      title: "AI Email Marketing Suite",
      description: "Advanced email marketing with AI-powered personalization, send time optimization, and performance analytics.",
      icon: EnvelopeIcon,
      features: [
        "AI personalization",
        "Send time optimization",
        "Subject line testing",
        "Segmentation",
        "Performance analytics",
        "A/B testing"
      ],
      color: "from-amber-500 to-orange-500",
      price: "$99/month",
      setupFee: "$400",
      benefits: ["40% open rates", "Personalized content", "Optimized timing"],
      useCases: ["Email campaigns", "Newsletter management", "Lead nurturing"],
      href: "/ai-email-marketing"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive micro SaaS solutions with AI-powered features, competitive pricing, and rapid deployment for modern businesses." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, cloud applications, software as a service" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Powerful, AI-powered micro SaaS applications designed to solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From AI analytics to automated workflows, our micro SaaS solutions provide enterprise-grade 
              functionality at startup-friendly prices with rapid deployment and minimal maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Micro SaaS Products Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {microSaaSProducts.map((product, _index) => {
              const Icon = product.icon;
              return (
                <div 
                  key={product.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-green-400">{product.price}</span>
                      <span className="text-gray-400">/month</span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Setup fee: <span className="text-yellow-400 font-semibold">{product.setupFee}</span>
                    </div>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Perfect for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link 
                      to={product.href}
                      className={`flex-1 inline-flex items-center justify-center gap-2 text-${product.color.split(' ')[1].split('-')[1]}-400 hover:text-${product.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg`}
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Micro SaaS */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with modern technology and designed for rapid deployment and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rapid Deployment</h3>
              <p className="text-gray-300">
                Get your micro SaaS up and running in days, not months. Our pre-built solutions are ready to deploy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CurrencyDollarIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Start with affordable monthly plans. No large upfront investments or long-term commitments required.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300">
                Every solution includes AI capabilities for automation, optimization, and intelligent insights.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with encryption, compliance, and regular security updates included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no surprises. Choose the plan that fits your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$99-299<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic AI features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Standard setup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Monthly updates</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-800 to-pink-800 p-8 rounded-xl border border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">$299-599<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced AI features</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom setup</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Weekly updates</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>API access</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-all">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-green-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Full AI capabilities</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>24/7 dedicated support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>White-label solution</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Daily updates</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom integrations</span>
                </li>
              </ul>
              <Link to="/contact" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Choose from our comprehensive suite of micro SaaS solutions and start seeing results immediately
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}