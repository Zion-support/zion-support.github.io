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
  BeakerIcon,
  CodeBracketIcon,
  SparklesIcon,
  CommandLineIcon,
  PaintBrushIcon,
  ShoppingCartIcon,
  CreditCardIcon,
  CalendarIcon,
  MapPinIcon,
  VideoCameraIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const solutions = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Comprehensive analytics solution with AI-driven insights and real-time data visualization for business intelligence.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Data export capabilities",
        "Multi-user access"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $99/month",
      benefits: ["Increased efficiency", "Better decision making", "Cost savings"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis"],
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Content Generator",
      description: "Advanced content creation tool powered by artificial intelligence for blogs, social media, and marketing materials.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation",
        "Multiple content types",
        "SEO optimization",
        "Brand voice consistency",
        "Content scheduling",
        "Performance analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $79/month",
      benefits: ["Time savings", "Consistent quality", "SEO optimization"],
      useCases: ["Content marketing", "Social media", "Blog management"],
      href: "/micro-saas/content-generator"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent chatbot solution that provides 24/7 customer support with natural language processing capabilities.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language processing",
        "24/7 availability",
        "Multi-language support",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $149/month",
      benefits: ["24/7 support", "Reduced costs", "Improved satisfaction"],
      useCases: ["Customer service", "Lead qualification", "FAQ automation"],
      href: "/micro-saas/ai-customer-support-chatbot"
    },
    {
      title: "AI Project Manager",
      description: "Intelligent project management tool with AI-powered task optimization and team collaboration features.",
      icon: CogIcon,
      features: [
        "AI task optimization",
        "Team collaboration",
        "Progress tracking",
        "Resource management",
        "Automated scheduling",
        "Performance insights"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $129/month",
      benefits: ["Better organization", "Improved productivity", "Resource optimization"],
      useCases: ["Project management", "Team coordination", "Task automation"],
      href: "/micro-saas/ai-project-manager"
    },
    {
      title: "AI Inventory Manager",
      description: "Smart inventory management system with predictive analytics and automated reordering capabilities.",
      icon: EyeIcon,
      features: [
        "Predictive analytics",
        "Automated reordering",
        "Stock optimization",
        "Multi-location support",
        "Integration APIs",
        "Real-time tracking"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $199/month",
      benefits: ["Reduced waste", "Optimized stock", "Cost savings"],
      useCases: ["Inventory management", "Supply chain", "Retail operations"],
      href: "/micro-saas/ai-inventory-manager"
    },
    {
      title: "AI Expense Tracker",
      description: "Intelligent expense tracking and categorization system with automated receipt processing and reporting.",
      icon: CurrencyDollarIcon,
      features: [
        "Automated categorization",
        "Receipt processing",
        "Expense reporting",
        "Budget tracking",
        "Tax preparation",
        "Multi-currency support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $59/month",
      benefits: ["Time savings", "Better tracking", "Tax compliance"],
      useCases: ["Expense management", "Financial tracking", "Tax preparation"],
      href: "/micro-saas/ai-expense-tracker"
    },
    {
      title: "AI Social Media Manager",
      description: "Comprehensive social media management tool with AI-powered content creation and scheduling capabilities.",
      icon: GlobeAltIcon,
      features: [
        "AI content creation",
        "Multi-platform posting",
        "Engagement analytics",
        "Hashtag optimization",
        "Scheduling automation",
        "Performance tracking"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $89/month",
      benefits: ["Increased engagement", "Time savings", "Better reach"],
      useCases: ["Social media marketing", "Brand management", "Content strategy"],
      href: "/micro-saas/ai-social-media-manager"
    },
    {
      title: "AI Email Marketing",
      description: "Advanced email marketing platform with AI-powered personalization and automation features.",
      icon: EnvelopeIcon,
      features: [
        "AI personalization",
        "Automated campaigns",
        "A/B testing",
        "Segmentation",
        "Analytics dashboard",
        "Template library"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "Starting at $69/month",
      benefits: ["Higher open rates", "Better conversions", "Automated campaigns"],
      useCases: ["Email marketing", "Lead nurturing", "Customer retention"],
      href: "/micro-saas/ai-email-marketing"
    },
    {
      title: "AI Design Assistant",
      description: "AI-powered design tool that creates professional graphics, logos, and marketing materials automatically.",
      icon: PaintBrushIcon,
      features: [
        "AI design generation",
        "Brand consistency",
        "Template library",
        "Custom branding",
        "Export options",
        "Collaboration tools"
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $119/month",
      benefits: ["Professional designs", "Time savings", "Brand consistency"],
      useCases: ["Graphic design", "Marketing materials", "Brand assets"],
      href: "/micro-saas/ai-design-assistant"
    },
    {
      title: "AI E-commerce Assistant",
      description: "Comprehensive e-commerce management tool with AI-powered product optimization and customer insights.",
      icon: ShoppingCartIcon,
      features: [
        "Product optimization",
        "Price monitoring",
        "Inventory management",
        "Customer insights",
        "Sales analytics",
        "Automated marketing"
      ],
      color: "from-emerald-500 to-green-500",
      price: "Starting at $179/month",
      benefits: ["Increased sales", "Better insights", "Automated operations"],
      useCases: ["E-commerce management", "Product optimization", "Sales analytics"],
      href: "/micro-saas/ai-ecommerce-assistant"
    },
    {
      title: "AI Payment Processor",
      description: "Intelligent payment processing system with fraud detection and automated reconciliation capabilities.",
      icon: CreditCardIcon,
      features: [
        "Fraud detection",
        "Multi-currency support",
        "Automated reconciliation",
        "Payment analytics",
        "Compliance management",
        "API integration"
      ],
      color: "from-sky-500 to-blue-500",
      price: "Starting at $139/month",
      benefits: ["Enhanced security", "Reduced fraud", "Automated processing"],
      useCases: ["Payment processing", "Fraud prevention", "Financial management"],
      href: "/micro-saas/ai-payment-processor"
    },
    {
      title: "AI Calendar Assistant",
      description: "Smart calendar management tool with AI-powered scheduling and meeting optimization features.",
      icon: CalendarIcon,
      features: [
        "AI scheduling",
        "Meeting optimization",
        "Time zone handling",
        "Conflict resolution",
        "Integration capabilities",
        "Analytics dashboard"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $49/month",
      benefits: ["Better scheduling", "Time optimization", "Reduced conflicts"],
      useCases: ["Calendar management", "Meeting scheduling", "Time optimization"],
      href: "/micro-saas/ai-calendar-assistant"
    },
    {
      title: "AI Location Tracker",
      description: "Advanced location tracking and analytics tool for businesses with mobile workforce or delivery services.",
      icon: MapPinIcon,
      features: [
        "Real-time tracking",
        "Route optimization",
        "Geofencing",
        "Analytics dashboard",
        "Mobile app",
        "API integration"
      ],
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $159/month",
      benefits: ["Route optimization", "Real-time visibility", "Cost savings"],
      useCases: ["Fleet management", "Delivery tracking", "Field services"],
      href: "/micro-saas/ai-location-tracker"
    },
    {
      title: "AI Video Editor",
      description: "AI-powered video editing tool that automatically creates professional videos from raw footage.",
      icon: VideoCameraIcon,
      features: [
        "AI video editing",
        "Auto-cropping",
        "Music synchronization",
        "Text overlay",
        "Export options",
        "Template library"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $199/month",
      benefits: ["Professional videos", "Time savings", "Easy editing"],
      useCases: ["Video marketing", "Content creation", "Social media"],
      href: "/micro-saas/ai-video-editor"
    },
    {
      title: "AI Photo Editor",
      description: "Advanced photo editing tool with AI-powered enhancement and automatic background removal capabilities.",
      icon: PhotoIcon,
      features: [
        "AI enhancement",
        "Background removal",
        "Color correction",
        "Batch processing",
        "Template library",
        "Export options"
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $89/month",
      benefits: ["Professional photos", "Time savings", "Easy editing"],
      useCases: ["Photo editing", "Product images", "Marketing materials"],
      href: "/micro-saas/ai-photo-editor"
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
      description: "Built to grow with your business, from startup to enterprise scale with cloud-native infrastructure.",
      icon: CloudIcon
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows through comprehensive APIs.",
      icon: CogIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success with dedicated customer success managers.",
      icon: UserGroupIcon
    }
  ];

  const stats = [
    { number: "500+", label: "Micro SaaS Solutions" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "1000+", label: "Happy Customers" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools, SaaS development, software solutions" />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Launch and scale your software business with our comprehensive micro SaaS solutions. From AI tools to automation platforms." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Launch and scale your software business with our comprehensive micro SaaS solutions. 
              From AI tools to automation platforms, we help you build the future of software.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-green-400 font-semibold">{solution.price}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-green-400 hover:text-green-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SaaS Development Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Ideation & Planning</h3>
                <p className="text-gray-300">
                  We help you identify market opportunities and plan your micro SaaS solution strategy.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Design & Development</h3>
                <p className="text-gray-300">
                  Our team designs and develops your micro SaaS solution with modern technologies and best practices.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Testing & Launch</h3>
                <p className="text-gray-300">
                  We thoroughly test your solution and help you launch it with a comprehensive go-to-market strategy.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Growth & Support</h3>
                <p className="text-gray-300">
                  We provide ongoing support, monitoring, and optimization to help your micro SaaS grow and scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Launch Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our micro SaaS solutions can help you build and scale your software business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-green-500 text-green-400 hover:bg-green-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
