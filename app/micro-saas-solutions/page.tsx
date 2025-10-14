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
  LightBulbIcon,
  SparklesIcon,
  BoltIcon,
  StarIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const MicroSaaSSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard Pro",
      description: "Advanced business intelligence platform with real-time AI insights, predictive analytics, and automated reporting for data-driven decision making.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing & visualization",
        "AI-powered predictive analytics",
        "Custom dashboard builder",
        "Automated report generation",
        "Multi-source data integration",
        "Advanced security & compliance",
        "API access & webhooks",
        "White-label customization"
      ],
      color: "from-blue-500 via-cyan-500 to-teal-500",
      price: "$299/month",
      originalPrice: "$399/month",
      savings: "Save $100/month",
      benefits: ["40% increase in efficiency", "Better decision making", "50% cost savings"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis", "Executive reporting"],
      href: "/micro-saas/analytics-dashboard",
      popular: true,
      category: "Analytics & BI"
    },
    {
      title: "AI Content Studio Enterprise",
      description: "Comprehensive content creation suite powered by advanced AI for blogs, social media, marketing materials, and multi-channel content distribution.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation (50+ formats)",
        "SEO optimization & keyword research",
        "Brand voice consistency engine",
        "Multi-language content creation",
        "Content scheduling & automation",
        "Performance analytics & insights",
        "Team collaboration tools",
        "Plagiarism detection & originality"
      ],
      color: "from-green-500 via-emerald-500 to-teal-500",
      price: "$199/month",
      originalPrice: "$299/month",
      savings: "Save $100/month",
      benefits: ["80% time savings", "Consistent quality", "SEO optimization", "Multi-channel reach"],
      useCases: ["Content marketing", "Social media management", "Blog management", "Marketing automation"],
      href: "/micro-saas/content-generator",
      popular: false,
      category: "Content & Marketing"
    },
    {
      title: "AI Customer Support Suite",
      description: "Intelligent 24/7 customer support platform with advanced NLP, sentiment analysis, and seamless human handoff capabilities.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Advanced natural language processing",
        "24/7 multilingual support (50+ languages)",
        "Sentiment analysis & mood detection",
        "Seamless human agent handoff",
        "Knowledge base integration",
        "Live chat & voice support",
        "Customer satisfaction tracking",
        "Custom training & learning"
      ],
      color: "from-purple-500 via-pink-500 to-rose-500",
      price: "$399/month",
      originalPrice: "$599/month",
      savings: "Save $200/month",
      benefits: ["90% faster response times", "60% cost reduction", "Improved satisfaction", "24/7 availability"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation", "Support ticket management"],
      href: "/micro-saas/ai-customer-support-chatbot",
      popular: true,
      category: "Customer Support"
    },
    {
      title: "AI Project Management Hub",
      description: "Intelligent project management platform with AI-powered task optimization, resource allocation, and predictive project analytics.",
      icon: CogIcon,
      features: [
        "AI task optimization & prioritization",
        "Smart resource allocation",
        "Predictive project analytics",
        "Team collaboration & communication",
        "Automated scheduling & deadlines",
        "Risk assessment & mitigation",
        "Performance insights & reporting",
        "Integration with 100+ tools"
      ],
      color: "from-orange-500 via-red-500 to-pink-500",
      price: "$249/month",
      originalPrice: "$349/month",
      savings: "Save $100/month",
      benefits: ["35% productivity increase", "Better resource utilization", "Reduced project delays", "Improved team coordination"],
      useCases: ["Project management", "Team coordination", "Task automation", "Resource planning"],
      href: "/micro-saas/ai-project-manager",
      popular: false,
      category: "Project Management"
    },
    {
      title: "AI Inventory Intelligence",
      description: "Smart inventory management system with predictive analytics, automated reordering, and supply chain optimization.",
      icon: EyeIcon,
      features: [
        "Predictive demand forecasting",
        "Automated reorder optimization",
        "Multi-location inventory tracking",
        "Supplier performance analytics",
        "Real-time stock monitoring",
        "Integration with ERP systems",
        "Cost optimization algorithms",
        "Compliance & audit trails"
      ],
      color: "from-indigo-500 via-purple-500 to-pink-500",
      price: "$449/month",
      originalPrice: "$649/month",
      savings: "Save $200/month",
      benefits: ["30% inventory reduction", "95% stockout prevention", "25% cost savings", "Optimized supply chain"],
      useCases: ["Inventory management", "Supply chain optimization", "Retail operations", "Manufacturing"],
      href: "/micro-saas/ai-inventory-manager",
      popular: true,
      category: "Inventory & Supply Chain"
    },
    {
      title: "AI Financial Intelligence",
      description: "Comprehensive financial management platform with AI-powered expense tracking, budgeting, and financial forecasting.",
      icon: CurrencyDollarIcon,
      features: [
        "AI-powered expense categorization",
        "Receipt scanning & processing",
        "Automated financial reporting",
        "Budget tracking & alerts",
        "Tax preparation assistance",
        "Multi-currency support",
        "Investment tracking & analysis",
        "Fraud detection & prevention"
      ],
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      price: "$149/month",
      originalPrice: "$199/month",
      savings: "Save $50/month",
      benefits: ["90% time savings", "Better financial visibility", "Tax compliance", "Fraud prevention"],
      useCases: ["Expense management", "Financial tracking", "Tax preparation", "Budget planning"],
      href: "/micro-saas/ai-expense-tracker",
      popular: false,
      category: "Finance & Accounting"
    },
    {
      title: "AI HR Management Suite",
      description: "Complete human resources management platform with AI-powered recruitment, employee analytics, and performance management.",
      icon: UserGroupIcon,
      features: [
        "AI-powered candidate screening",
        "Employee performance analytics",
        "Automated onboarding workflows",
        "Skills gap analysis",
        "Employee engagement tracking",
        "Payroll & benefits management",
        "Compliance monitoring",
        "Predictive retention modeling"
      ],
      color: "from-teal-500 via-cyan-500 to-blue-500",
      price: "$349/month",
      originalPrice: "$499/month",
      savings: "Save $150/month",
      benefits: ["50% faster hiring", "Improved retention", "Better performance insights", "Reduced HR workload"],
      useCases: ["Recruitment", "Performance management", "Employee engagement", "HR analytics"],
      href: "/micro-saas/ai-hr-management",
      popular: false,
      category: "Human Resources"
    },
    {
      title: "AI Marketing Automation Pro",
      description: "Advanced marketing automation platform with AI-driven campaign optimization, customer segmentation, and personalized messaging.",
      icon: SparklesIcon,
      features: [
        "AI campaign optimization",
        "Advanced customer segmentation",
        "Personalized messaging engine",
        "Multi-channel campaign management",
        "Lead scoring & nurturing",
        "A/B testing automation",
        "ROI tracking & analytics",
        "Email & SMS marketing"
      ],
      color: "from-pink-500 via-rose-500 to-red-500",
      price: "$399/month",
      originalPrice: "$599/month",
      savings: "Save $200/month",
      benefits: ["300% higher engagement", "40% better conversion", "Automated optimization", "Multi-channel reach"],
      useCases: ["Email marketing", "Campaign management", "Lead nurturing", "Customer segmentation"],
      href: "/micro-saas/ai-marketing-automation",
      popular: true,
      category: "Marketing & Sales"
    }
  ];

  const features = [
    {
      title: "AI-Powered Intelligence",
      description: "Leverage cutting-edge artificial intelligence and machine learning to automate and optimize your business processes.",
      icon: CpuChipIcon,
      color: "from-purple-500 to-cyan-500"
    },
    {
      title: "Enterprise-Grade Security",
      description: "Bank-level security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.",
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalable Cloud Architecture",
      description: "Built on robust cloud infrastructure that scales seamlessly from startup to enterprise level.",
      icon: CloudIcon,
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with 500+ popular business tools and platforms through our robust API.",
      icon: CogIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock support from our team of AI and business experts to ensure your success.",
      icon: UserGroupIcon,
      color: "from-teal-500 to-cyan-500"
    },
    {
      title: "Real-Time Analytics",
      description: "Comprehensive analytics and reporting with real-time insights to drive data-driven decisions.",
      icon: ChartBarIcon,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const categories = [
    "All Solutions",
    "Analytics & BI",
    "Content & Marketing", 
    "Customer Support",
    "Project Management",
    "Inventory & Supply Chain",
    "Finance & Accounting",
    "Human Resources",
    "Marketing & Sales"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SaaS solutions designed to streamline business operations, boost productivity, and drive growth." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools, analytics, content generation, customer support, project management" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SaaS solutions. Real tools, real results, real pricing." />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-cyan-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/20 rounded-full animate-bounce delay-1000"></div>

        <div className="relative z-10">
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-500/30 mb-8">
                <SparklesIcon className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-300 font-medium">AI-Powered Micro SaaS Solutions</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Micro SaaS Solutions
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover our comprehensive suite of <span className="text-cyan-400 font-semibold">AI-powered micro SaaS solutions</span> designed to 
                streamline business operations, boost productivity, and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <Link 
                  to="/contact" 
                  className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg shadow-2xl hover:shadow-purple-500/25"
                >
                  <RocketLaunchIcon className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                  Get Started Today
                </Link>
                <Link 
                  to="/demo" 
                  className="group border-2 border-purple-500 text-purple-300 px-8 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
                >
                  <EyeIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                  View Live Demo
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-400">Integrations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">50+</div>
                  <div className="text-gray-400">Languages</div>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Our Micro SaaS Solutions
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose from our comprehensive suite of AI-powered tools designed to transform every aspect of your business.
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-6 py-3 bg-slate-800/50 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-cyan-600/20 border border-slate-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden">
                    {/* Popular Badge */}
                    {solution.popular && (
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                        <StarIcon className="w-4 h-4 mr-1" />
                        Popular
                      </div>
                    )}

                    {/* Category Badge */}
                    <div className="inline-block bg-slate-700/50 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {solution.category}
                    </div>

                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {solution.title}
                    </h3>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-white">{solution.price}</span>
                        <span className="text-lg text-gray-400 line-through">{solution.originalPrice}</span>
                        <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm font-semibold">
                          {solution.savings}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">per month, billed annually</p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <BoltIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {solution.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        <li className="text-sm text-cyan-400 font-medium">
                          +{solution.features.length - 4} more features
                        </li>
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center">
                        <FireIcon className="w-5 h-5 text-orange-400 mr-2" />
                        Benefits
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, idx) => (
                          <span key={idx} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to={solution.href}
                      className="group/btn w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold"
                    >
                      Learn More
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 bg-slate-800/30">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Why Choose Our Solutions?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Built with cutting-edge technology and designed for maximum impact on your business.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="group text-center bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-3xl p-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of businesses already using our AI-powered micro SaaS solutions to drive growth and efficiency.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Link 
                    to="/contact" 
                    className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-10 py-4 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg shadow-2xl hover:shadow-purple-500/25"
                  >
                    <RocketLaunchIcon className="w-6 h-6 mr-2 group-hover:rotate-12 transition-transform" />
                    Start Your Free Trial
                  </Link>
                  <Link 
                    to="/demo" 
                    className="group border-2 border-purple-500 text-purple-300 px-10 py-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
                  >
                    <EyeIcon className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform" />
                    Schedule Demo
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <PhoneIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div>+1 (302) 464-0950</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <div>kleber@ziontechgroup.com</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-3 text-gray-300">
                    <ClockIcon className="w-6 h-6 text-purple-400" />
                    <div>
                      <div className="font-semibold">Response Time</div>
                      <div>Within 2 hours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MicroSaaSSolutionsPage;