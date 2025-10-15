import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  SignalIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  CogIcon,
  EyeIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const MicroSaaSPage: React.FC = () => {
  const solutions = [
    {
      title: "AI Analytics Dashboard",
      description: "Comprehensive analytics solution with AI-driven insights and real-time data visualization.",
      icon: ChartBarIcon,
      features: [
        "Real-time data processing",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Data export capabilities",
        "Multi-user access"
      ],
      price: "Starting at $99/month",
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Content Generator",
      description: "Advanced content creation tool powered by artificial intelligence for blogs, social media, and marketing.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation",
        "Multiple content types",
        "SEO optimization",
        "Brand voice consistency",
        "Content scheduling",
        "Performance analytics"
      ],
      price: "Starting at $79/month",
      href: "/micro-saas/content-generator"
    },
    {
      title: "AI Customer Support Chatbot",
      description: "Intelligent chatbot solution that provides 24/7 customer support with natural language processing.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language processing",
        "24/7 availability",
        "Multi-language support",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training"
      ],
      price: "Starting at $149/month",
      href: "/micro-saas/ai-customer-support-chatbot"
    },
    {
      title: "AI Project Manager",
      description: "Intelligent project management tool with AI-powered task optimization and team collaboration.",
      icon: CogIcon,
      features: [
        "AI task optimization",
        "Team collaboration",
        "Progress tracking",
        "Resource management",
        "Automated scheduling",
        "Performance insights"
      ],
      price: "Starting at $129/month",
      href: "/micro-saas/ai-project-manager"
    },
    {
      title: "AI Inventory Manager",
      description: "Smart inventory management system with predictive analytics and automated reordering.",
      icon: EyeIcon,
      features: [
        "Predictive analytics",
        "Automated reordering",
        "Stock optimization",
        "Multi-location support",
        "Integration APIs",
        "Real-time tracking"
      ],
      price: "Starting at $199/month",
      href: "/micro-saas/ai-inventory-manager"
    },
    {
      title: "AI Expense Tracker",
      description: "Intelligent expense tracking and categorization system with automated receipt processing.",
      icon: CurrencyDollarIcon,
      features: [
        "Automated categorization",
        "Receipt processing",
        "Expense reporting",
        "Budget tracking",
        "Tax preparation",
        "Multi-currency support"
      ],
      price: "Starting at $59/month",
      href: "/micro-saas/ai-expense-tracker"
    }
  ];

  const features = [
    "AI-Powered Solutions",
    "Scalable Architecture",
    "Easy Integration",
    "24/7 Support",
    "Custom Development",
    "Proven Results"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive micro SaaS solutions designed to streamline your business operations with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, productivity tools, SaaS development, software solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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

        {/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Micro SaaS Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                  <p className="text-gray-300 mb-6">{solution.description}</p>
                  <div className="mb-6">
                    <p className="text-green-400 font-semibold text-lg">{solution.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature}</h3>
                </div>
              ))}
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
};

export default MicroSaaSPage;
