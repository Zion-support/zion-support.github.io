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
      description: "Advanced business intelligence platform with real-time data processing, predictive analytics, and custom reporting capabilities.",
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
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $299/month",
      marketPrice: "$500-800/month",
      benefits: ["40% faster decision making", "60% reduction in manual reporting", "ROI tracking"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis", "Executive reporting"],
      href: "/micro-saas/analytics-dashboard-pro",
      popular: true
    },
    {
      title: "AI Content Studio Enterprise",
      description: "Comprehensive content creation suite with AI writing, image generation, SEO optimization, and multi-platform publishing.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation (GPT-4 powered)",
        "Multi-format content creation",
        "SEO optimization & keyword research",
        "Brand voice training & consistency",
        "Content calendar & scheduling",
        "Performance analytics & A/B testing",
        "Team collaboration tools",
        "Multi-language support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $199/month",
      marketPrice: "$300-500/month",
      benefits: ["80% time savings", "3x content output", "Improved SEO rankings"],
      useCases: ["Content marketing", "Social media management", "Blog operations", "E-commerce"],
      href: "/micro-saas/content-studio-enterprise",
      popular: true
    },
    {
      title: "AI Customer Success Platform",
      description: "Intelligent customer support and success platform with chatbots, sentiment analysis, and automated workflows.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Advanced NLP chatbot (GPT-4)",
        "24/7 multilingual support",
        "Sentiment analysis & monitoring",
        "Automated ticket routing",
        "Knowledge base integration",
        "Live chat & video support",
        "Customer journey mapping",
        "Performance analytics"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $399/month",
      marketPrice: "$600-1000/month",
      benefits: ["90% faster response times", "50% cost reduction", "95% customer satisfaction"],
      useCases: ["Customer service", "Lead qualification", "Support automation", "Customer success"],
      href: "/micro-saas/customer-success-platform"
    },
    {
      title: "AI Project Management Suite",
      description: "Intelligent project management with AI task optimization, resource allocation, and predictive project analytics.",
      icon: CogIcon,
      features: [
        "AI-powered task prioritization",
        "Resource optimization algorithms",
        "Predictive project analytics",
        "Team collaboration & communication",
        "Time tracking & productivity metrics",
        "Risk assessment & mitigation",
        "Integration with 50+ tools",
        "Mobile & desktop apps"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $249/month",
      marketPrice: "$400-700/month",
      benefits: ["35% improved efficiency", "25% faster delivery", "Better resource utilization"],
      useCases: ["Project management", "Team coordination", "Agile development", "Remote work"],
      href: "/micro-saas/project-management-suite"
    },
    {
      title: "AI Inventory Intelligence System",
      description: "Smart inventory management with predictive analytics, automated reordering, and supply chain optimization.",
      icon: EyeIcon,
      features: [
        "Predictive demand forecasting",
        "Automated reorder optimization",
        "Multi-location inventory tracking",
        "Supplier performance analytics",
        "Cost optimization algorithms",
        "Real-time stock alerts",
        "Integration with major ERPs",
        "Mobile barcode scanning"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $499/month",
      marketPrice: "$800-1200/month",
      benefits: ["30% inventory reduction", "40% fewer stockouts", "20% cost savings"],
      useCases: ["Retail operations", "Manufacturing", "E-commerce", "Supply chain"],
      href: "/micro-saas/inventory-intelligence"
    },
    {
      title: "AI Financial Intelligence Platform",
      description: "Comprehensive financial management with AI expense tracking, budgeting, forecasting, and tax optimization.",
      icon: CurrencyDollarIcon,
      features: [
        "AI-powered expense categorization",
        "Receipt OCR & processing",
        "Automated budget management",
        "Financial forecasting & planning",
        "Tax optimization & preparation",
        "Multi-currency & multi-entity support",
        "Integration with banks & accounting",
        "Compliance & audit trails"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $149/month",
      marketPrice: "$250-400/month",
      benefits: ["90% time savings", "Better financial visibility", "Tax compliance"],
      useCases: ["Financial management", "Expense tracking", "Tax preparation", "Business accounting"],
      href: "/micro-saas/financial-intelligence"
    },
    {
      title: "AI HR Management System",
      description: "Intelligent human resources platform with AI recruitment, employee analytics, and performance management.",
      icon: UserGroupIcon,
      features: [
        "AI-powered candidate screening",
        "Employee performance analytics",
        "Automated onboarding workflows",
        "Skills gap analysis",
        "Retention prediction models",
        "Compliance monitoring",
        "Integration with HRIS systems",
        "Mobile employee portal"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $199/month",
      marketPrice: "$350-600/month",
      benefits: ["50% faster hiring", "30% improved retention", "Better performance insights"],
      useCases: ["Recruitment", "Performance management", "Employee analytics", "HR automation"],
      href: "/micro-saas/hr-management-system"
    },
    {
      title: "AI Marketing Automation Hub",
      description: "Advanced marketing automation with AI campaign optimization, lead scoring, and customer journey mapping.",
      icon: RocketLaunchIcon,
      features: [
        "AI campaign optimization",
        "Predictive lead scoring",
        "Customer journey mapping",
        "Email & SMS automation",
        "Social media management",
        "A/B testing & optimization",
        "ROI tracking & analytics",
        "Integration with CRM systems"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $299/month",
      marketPrice: "$500-800/month",
      benefits: ["3x lead conversion", "40% cost reduction", "Better customer engagement"],
      useCases: ["Lead generation", "Email marketing", "Social media", "Campaign management"],
      href: "/micro-saas/marketing-automation-hub"
    },
    {
      title: "AI Security & Compliance Monitor",
      description: "Comprehensive security monitoring with AI threat detection, compliance tracking, and automated incident response.",
      icon: ShieldCheckIcon,
      features: [
        "AI threat detection & analysis",
        "Real-time security monitoring",
        "Compliance tracking (GDPR, HIPAA, SOX)",
        "Automated incident response",
        "Vulnerability assessment",
        "Security training & awareness",
        "Audit trail & reporting",
        "Integration with security tools"
      ],
      color: "from-red-500 to-orange-500",
      price: "Starting at $399/month",
      marketPrice: "$600-1000/month",
      benefits: ["99.9% threat detection", "Automated compliance", "Reduced security risks"],
      useCases: ["Cybersecurity", "Compliance management", "Risk assessment", "Incident response"],
      href: "/micro-saas/security-compliance-monitor"
    },
    {
      title: "AI Data Pipeline & ETL Platform",
      description: "Intelligent data processing platform with automated ETL, data quality monitoring, and real-time analytics.",
      icon: CloudIcon,
      features: [
        "Automated ETL processes",
        "Data quality monitoring",
        "Real-time data streaming",
        "Data transformation & cleansing",
        "API management & integration",
        "Data lineage tracking",
        "Scalable cloud infrastructure",
        "Custom data connectors"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $599/month",
      marketPrice: "$900-1500/month",
      benefits: ["90% faster data processing", "99.9% data accuracy", "Reduced manual work"],
      useCases: ["Data engineering", "Analytics", "Business intelligence", "Data migration"],
      href: "/micro-saas/data-pipeline-platform"
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
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to streamline your business operations with AI-powered tools and enterprise-grade features." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools, enterprise software, AI-powered platforms" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our AI-powered micro SaaS solutions. From analytics to automation, we provide enterprise-grade tools at competitive prices." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive suite of AI-powered micro SaaS solutions. 
              Enterprise-grade tools at competitive prices, designed to scale with your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">10+</div>
                <div className="text-gray-300 text-sm lg:text-base">AI Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300 text-sm lg:text-base">Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm lg:text-base">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300 text-sm lg:text-base">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SaaS solutions, 
                each designed to solve specific business challenges with measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                  solution.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-slate-600 hover:border-purple-500'
                }`}>
                  {solution.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-purple-400">{solution.price}</span>
                      <span className="text-sm text-gray-400 line-through">{solution.marketPrice}</span>
                    </div>
                    <p className="text-sm text-green-400 font-semibold">Save up to 40% vs market rates</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-xs">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={solution.href}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group-hover:gap-3"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Why Choose Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Micro SaaS Solutions?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are built with enterprise-grade security, scalability, and performance in mind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Comparison */}
        <section className="py-20 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Our micro SaaS solutions offer enterprise-grade features at a fraction of the cost of traditional enterprise software.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">Traditional Enterprise</h3>
                <div className="text-4xl font-bold text-red-400 mb-4">$2,000-5,000</div>
                <div className="text-gray-300 mb-6">per month per solution</div>
                <ul className="space-y-2 text-gray-400">
                  <li>• Complex setup & configuration</li>
                  <li>• Long implementation cycles</li>
                  <li>• High maintenance costs</li>
                  <li>• Limited customization</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-purple-800 to-cyan-800 p-8 rounded-xl border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Our Solutions
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Zion Tech Group</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">$149-599</div>
                <div className="text-gray-300 mb-6">per month per solution</div>
                <ul className="space-y-2 text-white">
                  <li>• Quick setup & deployment</li>
                  <li>• AI-powered automation</li>
                  <li>• Scalable architecture</li>
                  <li>• Full customization</li>
                </ul>
              </div>
              
              <div className="bg-slate-800 p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-white mb-4">Savings</h3>
                <div className="text-4xl font-bold text-green-400 mb-4">70-85%</div>
                <div className="text-gray-300 mb-6">cost reduction</div>
                <ul className="space-y-2 text-gray-400">
                  <li>• Lower total cost of ownership</li>
                  <li>• Faster time to value</li>
                  <li>• Reduced maintenance</li>
                  <li>• Better ROI</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of businesses already using our micro SaaS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Contact us for custom enterprise solutions</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">+1-302-464-0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-4 h-4 text-purple-400 mr-2" />
                  <span className="text-gray-300">kleber@ziontechgroup.com</span>
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
