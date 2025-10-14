import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CogIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const microSaaSProducts = [
    {
      title: "AI Analytics Dashboard",
      description: "Comprehensive business intelligence dashboard with AI-powered insights and real-time data visualization.",
      icon: ChartBarIcon,
      category: "analytics",
      features: [
        "Real-time data visualization",
        "AI-powered insights",
        "Custom dashboards",
        "Automated reporting",
        "Data integration",
        "Mobile responsive"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$99/month",
      benefits: ["Data-driven decisions", "Time savings", "Custom insights"],
      href: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content creation tool for blogs, social media, and marketing materials.",
      icon: ComputerDesktopIcon,
      category: "content",
      features: [
        "Blog and article writing",
        "Social media content",
        "Marketing copy",
        "SEO optimization",
        "Brand voice consistency",
        "Content scheduling"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$79/month",
      benefits: ["High-quality content", "Brand consistency", "Time savings"],
      href: "/micro-saas/content-generator"
    },
    {
      title: "AI Project Manager",
      description: "Intelligent project management tool with AI-powered task optimization and team collaboration.",
      icon: CogIcon,
      category: "productivity",
      features: [
        "Task automation",
        "Team collaboration",
        "Progress tracking",
        "Resource optimization",
        "Deadline management",
        "Performance analytics"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$129/month",
      benefits: ["Improved efficiency", "Better collaboration", "Smart automation"],
      href: "/micro-saas/project-manager"
    },
    {
      title: "AI Email Marketing",
      description: "Automated email marketing platform with AI-driven personalization and campaign optimization.",
      icon: GlobeAltIcon,
      category: "marketing",
      features: [
        "Email automation",
        "AI personalization",
        "Campaign optimization",
        "A/B testing",
        "Analytics and reporting",
        "List management"
      ],
      color: "from-orange-500 to-red-500",
      price: "$89/month",
      benefits: ["Higher engagement", "Automated campaigns", "Better ROI"],
      href: "/micro-saas/email-marketing"
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot for 24/7 customer support with natural language processing.",
      icon: ComputerDesktopIcon,
      category: "support",
      features: [
        "24/7 customer support",
        "Natural conversations",
        "Multi-language support",
        "Integration capabilities",
        "Analytics and insights",
        "Human handoff"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$149/month",
      benefits: ["24/7 availability", "Instant responses", "Cost effective"],
      href: "/micro-saas/support-bot"
    },
    {
      title: "AI Inventory Manager",
      description: "Smart inventory management system with predictive analytics and automated reordering.",
      icon: ServerIcon,
      category: "inventory",
      features: [
        "Inventory tracking",
        "Predictive analytics",
        "Automated reordering",
        "Supplier management",
        "Cost optimization",
        "Reporting and insights"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$119/month",
      benefits: ["Reduced waste", "Cost savings", "Automated management"],
      href: "/micro-saas/inventory-manager"
    },
    {
      title: "AI Expense Tracker",
      description: "Intelligent expense tracking and financial management with automated categorization.",
      icon: CurrencyDollarIcon,
      category: "finance",
      features: [
        "Expense tracking",
        "Automated categorization",
        "Receipt scanning",
        "Budget management",
        "Financial reporting",
        "Tax preparation"
      ],
      color: "from-yellow-500 to-orange-500",
      price: "$69/month",
      benefits: ["Easy tracking", "Automated categorization", "Tax ready"],
      href: "/micro-saas/expense-tracker"
    },
    {
      title: "AI Social Media Manager",
      description: "Automated social media management with AI-powered content scheduling and analytics.",
      icon: GlobeAltIcon,
      category: "marketing",
      features: [
        "Content scheduling",
        "AI content suggestions",
        "Multi-platform posting",
        "Engagement analytics",
        "Hashtag optimization",
        "Competitor analysis"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$99/month",
      benefits: ["Consistent posting", "Better engagement", "Time savings"],
      href: "/micro-saas/social-manager"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'content', name: 'Content' },
    { id: 'productivity', name: 'Productivity' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'support', name: 'Support' },
    { id: 'inventory', name: 'Inventory' },
    { id: 'finance', name: 'Finance' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? microSaaSProducts 
    : microSaaSProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | AI-Powered Business Tools</title>
        <meta name="description" content="Discover cutting-edge micro SaaS solutions powered by AI. From analytics dashboards to cybersecurity platforms, transform your business with our intelligent tools. Starting from $69/month." />
        <meta name="keywords" content="micro SaaS, AI solutions, business intelligence, marketing automation, project management, analytics, cybersecurity, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful AI-driven micro SaaS tools designed to solve specific business challenges with intelligent automation and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Micro SaaS Products</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our collection of AI-powered micro SaaS solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center mb-6`}>
                  <product.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                <p className="text-gray-300 mb-6">{product.description}</p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <div className="text-2xl font-bold text-purple-400 mb-2">{product.price}</div>
                  <div className="text-sm text-gray-400">Monthly subscription</div>
                </div>
                <Link 
                  to={product.href}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start with any of our micro SaaS solutions and scale as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}