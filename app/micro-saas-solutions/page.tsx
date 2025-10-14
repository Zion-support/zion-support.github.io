'use client';'use client';
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
      title: "AI-Powered Analytics Dashboard",
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
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $99/month",
      benefits: ["Increased efficiency", "Better decision making", "Cost savings"],
      useCases: ["Business intelligence", "Performance tracking", "Data analysis"],
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
      color: "from-green-500 to-emerald-500",
      price: "Starting at $79/month",
      benefits: ["Time savings", "Consistent quality", "SEO optimization"],
      useCases: ["Content marketing", "Social media", "Blog management"],
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
import React from 'react';
import { Helmet } from 'react-helmet-async';

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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Micro SaaS Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our Micro SaaS Solutions?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our micro SaaS solutions can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default MicroSaaSSolutionsPage;
};

export default MicroSaaSSolutionsPage;
