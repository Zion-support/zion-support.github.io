import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  DocumentTextIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

export default function MicroSaaSSolutionsPage() {
  const microSaaSProducts = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Transform your data into actionable insights with our intelligent analytics platform that learns from your business patterns.",
      icon: ChartBarIcon,
      features: [
        "Real-time data visualization",
        "Predictive analytics",
        "Custom report generation",
        "Automated insights",
        "Multi-source data integration",
        "Mobile-responsive design"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$199/month",
      setupFee: "$500",
      benefits: ["Data-driven decisions", "Time savings", "Scalable insights"],
      useCases: ["E-commerce analytics", "Marketing insights", "Performance tracking"],
      href: "/ai-analytics-dashboard"
    },
    {
      title: "Smart Customer Support Bot",
      description: "Deploy an intelligent chatbot that provides 24/7 customer support with natural language processing and context awareness.",
      icon: CpuChipIcon,
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Escalation to human agents",
        "Knowledge base integration",
        "Sentiment analysis",
        "Custom training"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$149/month",
      setupFee: "$800",
      benefits: ["24/7 availability", "Reduced support costs", "Better customer satisfaction"],
      useCases: ["E-commerce support", "SaaS customer service", "Lead qualification"],
      href: "/smart-support-bot"
    },
    {
      title: "Automated Social Media Manager",
      description: "Streamline your social media presence with AI-powered content creation, scheduling, and engagement optimization.",
      icon: CogIcon,
      features: [
        "AI content generation",
        "Optimal posting times",
        "Hashtag optimization",
        "Engagement tracking",
        "Multi-platform management",
        "Brand voice consistency"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$179/month",
      setupFee: "$600",
      benefits: ["Increased engagement", "Time savings", "Consistent branding"],
      useCases: ["Small business marketing", "Personal branding", "Content marketing"],
      href: "/social-media-manager"
    },
    {
      title: "Intelligent Inventory Tracker",
      description: "Optimize your inventory management with predictive analytics and automated reordering based on demand patterns.",
      icon: DocumentTextIcon,
      features: [
        "Demand forecasting",
        "Automated reordering",
        "Low stock alerts",
        "Supplier management",
        "Cost optimization",
        "Integration with existing systems"
      ],
      color: "from-orange-500 to-red-500",
      price: "$229/month",
      setupFee: "$700",
      benefits: ["Reduced stockouts", "Lower inventory costs", "Improved cash flow"],
      useCases: ["Retail inventory", "Manufacturing", "E-commerce management"],
      href: "/inventory-tracker"
    },
    {
      title: "AI-Powered Email Marketing",
      description: "Create personalized email campaigns that automatically adapt to customer behavior and preferences for maximum engagement.",
      icon: UserGroupIcon,
      features: [
        "Personalized content",
        "Send time optimization",
        "A/B testing automation",
        "Segmentation intelligence",
        "Performance analytics",
        "Template library"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$159/month",
      setupFee: "$400",
      benefits: ["Higher open rates", "Better conversions", "Automated optimization"],
      useCases: ["E-commerce marketing", "Newsletter campaigns", "Lead nurturing"],
      href: "/email-marketing-ai"
    },
    {
      title: "Smart Event Management",
      description: "Organize and manage events with AI-powered attendee matching, scheduling optimization, and engagement tracking.",
      icon: LightBulbIcon,
      features: [
        "Attendee matching",
        "Schedule optimization",
        "Engagement tracking",
        "Feedback analysis",
        "Networking suggestions",
        "Mobile app integration"
      ],
      color: "from-teal-500 to-cyan-500",
      price: "$249/month",
      setupFee: "$1,200",
      benefits: ["Better engagement", "Optimized planning", "Success metrics"],
      useCases: ["Conferences", "Webinars", "Corporate events"],
      href: "/ai-event-management"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Requirements",
      description: "We analyze your business needs and identify the perfect micro SaaS solution for your specific use case."
    },
    {
      step: "02",
      title: "Customization & Setup",
      description: "Configure and customize the solution to match your brand, workflows, and specific requirements."
    },
    {
      step: "03",
      title: "Integration & Testing",
      description: "Integrate with your existing systems and thoroughly test to ensure everything works seamlessly."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploy your solution and provide ongoing support, training, and optimization services."
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SaaS Solutions" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "30%", label: "Average Cost Savings" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group</title>
        <meta name="description" content="Custom micro SaaS solutions designed to solve specific business challenges with AI-powered tools and automation." />
        <meta name="keywords" content="micro SaaS, custom software, business automation, AI tools, specialized solutions" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized software solutions that solve specific business challenges
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto">
              Our micro SaaS products are designed to address specific business needs with focused, 
              AI-powered solutions that integrate seamlessly into your existing workflows.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Micro SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Products</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Specialized solutions designed to solve specific business challenges
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {microSaaSProducts.map((product, index) => {
                const Icon = product.icon;
                return (
                  <div key={index} className="bg-slate-800/50 rounded-xl p-8 hover:bg-slate-700/50 transition-all duration-300">
                    <div className="flex items-start mb-6">
                      <div className={`p-3 bg-gradient-to-r ${product.color} rounded-lg mr-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                        <p className="text-gray-300 mb-4">{product.description}</p>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="text-purple-400 font-semibold">{product.price}</div>
                          <div className="text-gray-400 text-sm">Setup: {product.setupFee}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.useCases.map((useCase, useCaseIndex) => (
                          <span key={useCaseIndex} className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">
                            {useCase}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      to={product.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Micro SaaS <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A streamlined approach to delivering specialized software solutions
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/20 to-cyan-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Micro SaaS Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can create a specialized solution tailored to your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Solution
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                View Examples
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}