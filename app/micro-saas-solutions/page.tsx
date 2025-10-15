import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  Lock, 
  ArrowRight, 
  Star, 
  Award, 
  TrendingUp, 
  Target, 
  Rocket,
  Clock,
  DollarSign,
  Shield as ShieldIcon,
  Zap as ZapIcon
} from 'lucide-react';

const MicroSaasSolutionsPage: React.FC = () => {
  const microSaasServices = [
    {
      name: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation platform for blogs, social media, marketing materials, and more.",
      price: "$29/month",
      originalPrice: "$49/month",
      features: [
        "Unlimited content generation",
        "Multi-language support (50+ languages)",
        "SEO optimization built-in",
        "Brand voice customization",
        "Content templates library",
        "Plagiarism detection",
        "Social media scheduling",
        "Analytics dashboard"
      ],
      icon: Brain,
      category: "Content Creation",
      rating: 4.9,
      reviews: 1247,
      link: "/ai-content-generator",
      popular: true
    },
    {
      name: "Smart Analytics Dashboard",
      description: "Real-time business intelligence and data visualization platform with AI-powered insights.",
      price: "$49/month",
      originalPrice: "$79/month",
      features: [
        "Custom dashboard builder",
        "Real-time data streaming",
        "Automated report generation",
        "Team collaboration tools",
        "Data export capabilities",
        "Mobile app included",
        "API integrations",
        "White-label options"
      ],
      icon: BarChart3,
      category: "Analytics",
      rating: 4.8,
      reviews: 892,
      link: "/ai-analytics-dashboard",
      popular: true
    },
    {
      name: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for 24/7 customer service automation.",
      price: "$39/month",
      originalPrice: "$59/month",
      features: [
        "24/7 availability",
        "Multi-channel support",
        "Sentiment analysis",
        "Easy integration",
        "Custom training data",
        "Human handoff capability",
        "Multi-language support",
        "Performance analytics"
      ],
      icon: Users,
      category: "Customer Service",
      rating: 4.7,
      reviews: 1563,
      link: "/ai-customer-support-bot"
    },
    {
      name: "Automated Testing Suite",
      description: "AI-powered software testing and quality assurance automation for web and mobile applications.",
      price: "$59/month",
      originalPrice: "$89/month",
      features: [
        "Automated test generation",
        "Cross-browser testing",
        "Performance monitoring",
        "CI/CD integration",
        "Visual regression testing",
        "API testing",
        "Load testing",
        "Test reporting"
      ],
      icon: CheckCircle,
      category: "Quality Assurance",
      rating: 4.9,
      reviews: 743,
      link: "/ai-automated-testing"
    },
    {
      name: "Smart Invoice Manager",
      description: "AI-driven invoice processing and financial management system with OCR and automation.",
      price: "$25/month",
      originalPrice: "$39/month",
      features: [
        "OCR invoice scanning",
        "Automated categorization",
        "Payment tracking",
        "Tax compliance",
        "Expense management",
        "Multi-currency support",
        "Integration with accounting software",
        "Mobile receipt capture"
      ],
      icon: Smartphone,
      category: "Finance",
      rating: 4.6,
      reviews: 1024,
      link: "/ai-smart-invoice"
    },
    {
      name: "AI Project Manager",
      description: "Intelligent project management with predictive analytics and resource optimization.",
      price: "$45/month",
      originalPrice: "$69/month",
      features: [
        "Task automation",
        "Resource planning",
        "Risk assessment",
        "Progress tracking",
        "Team collaboration",
        "Time tracking",
        "Budget management",
        "Gantt charts"
      ],
      icon: Globe,
      category: "Project Management",
      rating: 4.8,
      reviews: 1156,
      link: "/ai-project-manager"
    },
    {
      name: "AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with code generation, debugging, and optimization.",
      price: "$35/month",
      originalPrice: "$55/month",
      features: [
        "Code generation",
        "Bug detection and fixing",
        "Code optimization",
        "Documentation generation",
        "Multi-language support",
        "IDE integration",
        "Code review assistance",
        "Learning recommendations"
      ],
      icon: Database,
      category: "Development",
      rating: 4.9,
      reviews: 2134,
      link: "/ai-code-assistant"
    },
    {
      name: "AI Marketing Automation",
      description: "Comprehensive marketing automation platform with AI-driven campaign optimization.",
      price: "$55/month",
      originalPrice: "$85/month",
      features: [
        "Email marketing automation",
        "Social media management",
        "Lead scoring",
        "Campaign optimization",
        "A/B testing",
        "Customer segmentation",
        "ROI tracking",
        "Multi-channel campaigns"
      ],
      icon: Zap,
      category: "Marketing",
      rating: 4.7,
      reviews: 987,
      link: "/ai-marketing-automation"
    },
    {
      name: "AI Cybersecurity Monitor",
      description: "Real-time security monitoring and threat detection with AI-powered analysis.",
      price: "$65/month",
      originalPrice: "$99/month",
      features: [
        "Threat detection",
        "Vulnerability scanning",
        "Incident response",
        "Compliance monitoring",
        "Security reporting",
        "Real-time alerts",
        "Integration with SIEM",
        "24/7 monitoring"
      ],
      icon: Shield,
      category: "Security",
      rating: 4.8,
      reviews: 456,
      link: "/ai-cybersecurity-monitor"
    }
  ];

  const categories = [
    { name: "All", count: microSaasServices.length, active: true },
    { name: "Content Creation", count: microSaasServices.filter(s => s.category === "Content Creation").length },
    { name: "Analytics", count: microSaasServices.filter(s => s.category === "Analytics").length },
    { name: "Customer Service", count: microSaasServices.filter(s => s.category === "Customer Service").length },
    { name: "Quality Assurance", count: microSaasServices.filter(s => s.category === "Quality Assurance").length },
    { name: "Finance", count: microSaasServices.filter(s => s.category === "Finance").length },
    { name: "Project Management", count: microSaasServices.filter(s => s.category === "Project Management").length },
    { name: "Development", count: microSaasServices.filter(s => s.category === "Development").length },
    { name: "Marketing", count: microSaasServices.filter(s => s.category === "Marketing").length },
    { name: "Security", count: microSaasServices.filter(s => s.category === "Security").length }
  ];

  return (
    <>
      <SEOHead
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions. AI-powered tools for content creation, analytics, customer service, project management, and more. Starting at $25/month."
        keywords="micro saas, ai tools, business automation, content creation, analytics, customer service, project management, ai solutions"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Micro SAAS
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Powerful, affordable micro SAAS applications designed to solve specific business challenges 
              and boost productivity across your organization. AI-powered tools that deliver real results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Solutions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Get Custom Quote
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Micro SAAS Solutions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">10K+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-lg relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                        <span className="text-gray-500 line-through text-sm">{service.originalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{service.description}</p>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{service.rating}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.reviews.toLocaleString()} reviews
                  </div>
                  <div className="bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded">
                    {service.category}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-cyan-400">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex space-x-2">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg text-center transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/contact"
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS applications are designed with modern businesses in mind, 
              offering powerful features at affordable prices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Quick Setup</h3>
              <p className="text-gray-300">Get started in minutes with our intuitive setup process and comprehensive documentation.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with encryption, compliance, and regular security audits.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300">Leverage cutting-edge AI technology to automate tasks and gain intelligent insights.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable</h3>
              <p className="text-gray-300">Grow with your business - our solutions scale from startup to enterprise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              No hidden fees, no long-term contracts. Choose the plan that fits your needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$25<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Perfect for small businesses and startups</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  1 micro SAAS solution
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic analytics
                </li>
              </ul>
              <a href="/contact" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl p-8 ring-2 ring-cyan-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">$49<span className="text-lg text-gray-400">/month</span></div>
              <p className="text-gray-300 mb-6">Ideal for growing businesses</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 25 users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 5 micro SAAS solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  API access
                </li>
              </ul>
              <a href="/contact" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300">
                Get Started
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-2">Custom</div>
              <p className="text-gray-300 mb-6">For large organizations with specific needs</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited users
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  All micro SAAS solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label options
                </li>
              </ul>
              <a href="/contact" className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors">
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Start with our micro SAAS solutions today. Get a free consultation and custom implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MicroSaasSolutionsPage;