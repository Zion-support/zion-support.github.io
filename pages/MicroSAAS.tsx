import React from 'react';
import { Link } from 'react-router-dom';

export default function MicroSAAS() {
  const microSAASServices = [
    {
      name: "AI Invoice Generator Pro",
      description: "Intelligent invoice creation and payment tracking platform with AI-powered templates, automated follow-ups, and multi-currency support.",
      price: "$29/month",
      features: [
        "AI-powered invoice generation",
        "Automated payment reminders",
        "Multi-currency support",
        "Client management system",
        "Payment tracking dashboard",
        "Custom branding options",
        "Tax calculation automation",
        "Integration with accounting software"
      ],
      benefits: [
        "Save 80% time on invoicing",
        "Reduce payment delays by 60%",
        "Professional invoice templates",
        "Automated follow-up system"
      ],
      marketPrice: "$49-79/month",
      savings: "Save up to $50/month",
      category: "Financial Tools"
    },
    {
      name: "Smart Meeting Scheduler AI",
      description: "AI-powered meeting scheduling that eliminates back-and-forth emails with intelligent time optimization and calendar integration.",
      price: "$19/month",
      features: [
        "AI time optimization",
        "Calendar integration (Google, Outlook, Apple)",
        "Automatic time zone handling",
        "Meeting room booking",
        "Follow-up reminders",
        "Custom availability rules",
        "Team scheduling coordination",
        "Meeting analytics dashboard"
      ],
      benefits: [
        "Eliminate scheduling conflicts",
        "Save 90% time on meeting coordination",
        "Reduce no-shows by 70%",
        "Improve meeting efficiency"
      ],
      marketPrice: "$39-59/month",
      savings: "Save up to $40/month",
      category: "Productivity"
    },
    {
      name: "Social Media AI Manager",
      description: "Comprehensive social media management with AI content suggestions, optimal posting times, and engagement analytics.",
      price: "$39/month",
      features: [
        "AI content suggestions",
        "Multi-platform posting (Facebook, Instagram, Twitter, LinkedIn)",
        "Hashtag optimization",
        "Engagement analytics",
        "Content calendar management",
        "Brand voice consistency",
        "Competitor analysis",
        "Crisis management alerts"
      ],
      benefits: [
        "Increase engagement by 150%",
        "Save 70% time on content creation",
        "Improve brand consistency",
        "Optimize posting schedules"
      ],
      marketPrice: "$79-149/month",
      savings: "Save up to $110/month",
      category: "Marketing"
    },
    {
      name: "Smart Password Manager Enterprise",
      description: "Enterprise-grade password management with AI security recommendations, team sharing, and breach monitoring.",
      price: "$15/month",
      features: [
        "AI security recommendations",
        "Team password sharing",
        "Breach monitoring and alerts",
        "Multi-factor authentication",
        "Password strength analysis",
        "Secure password generation",
        "Cross-device synchronization",
        "Admin dashboard and controls"
      ],
      benefits: [
        "Enhance security by 95%",
        "Reduce password-related incidents",
        "Simplify team access management",
        "Ensure compliance requirements"
      ],
      marketPrice: "$25-45/month",
      savings: "Save up to $30/month",
      category: "Security"
    },
    {
      name: "AI Email Signature Generator",
      description: "Professional email signature generator with AI-powered design suggestions, compliance checking, and brand consistency.",
      price: "$12/month",
      features: [
        "AI design suggestions",
        "Brand consistency checking",
        "Compliance validation",
        "Multi-format export",
        "Team signature management",
        "Social media integration",
        "Legal disclaimer templates",
        "Analytics and tracking"
      ],
      benefits: [
        "Professional brand image",
        "Ensure compliance requirements",
        "Save 90% time on signature creation",
        "Maintain brand consistency"
      ],
      marketPrice: "$25-40/month",
      savings: "Save up to $28/month",
      category: "Branding"
    },
    {
      name: "Smart Expense Tracker AI",
      description: "Intelligent expense tracking with AI categorization, receipt scanning, and automated reporting for businesses.",
      price: "$24/month",
      features: [
        "AI receipt scanning",
        "Automatic categorization",
        "Expense policy compliance",
        "Multi-currency support",
        "Tax preparation integration",
        "Approval workflows",
        "Real-time reporting",
        "Mobile app access"
      ],
      benefits: [
        "Reduce expense processing time by 85%",
        "Improve accuracy by 95%",
        "Ensure policy compliance",
        "Simplify tax preparation"
      ],
      marketPrice: "$45-75/month",
      savings: "Save up to $51/month",
      category: "Financial Tools"
    },
    {
      name: "AI Content Calendar Pro",
      description: "Intelligent content planning and scheduling with AI-powered content suggestions and optimal timing recommendations.",
      price: "$34/month",
      features: [
        "AI content suggestions",
        "Optimal timing recommendations",
        "Multi-platform scheduling",
        "Content performance analytics",
        "Team collaboration tools",
        "Content approval workflows",
        "Holiday and event planning",
        "Competitor content tracking"
      ],
      benefits: [
        "Increase content engagement by 120%",
        "Save 75% time on content planning",
        "Improve content consistency",
        "Optimize posting schedules"
      ],
      marketPrice: "$59-99/month",
      savings: "Save up to $65/month",
      category: "Content Management"
    },
    {
      name: "Smart Lead Qualifier AI",
      description: "AI-powered lead qualification and scoring system that automatically identifies high-value prospects and prioritizes follow-ups.",
      price: "$49/month",
      features: [
        "AI lead scoring",
        "Behavioral analysis",
        "Intent detection",
        "Automated follow-up sequences",
        "CRM integration",
        "Lead nurturing campaigns",
        "Conversion prediction",
        "Performance analytics"
      ],
      benefits: [
        "Increase qualified leads by 200%",
        "Reduce sales cycle by 40%",
        "Improve conversion rates by 85%",
        "Automate lead prioritization"
      ],
      marketPrice: "$99-199/month",
      savings: "Save up to $150/month",
      category: "Sales Automation"
    },
    {
      name: "AI Website Analyzer Pro",
      description: "Comprehensive website analysis tool with AI-powered insights, performance optimization, and SEO recommendations.",
      price: "$29/month",
      features: [
        "AI-powered website analysis",
        "Performance optimization suggestions",
        "SEO recommendations",
        "Security vulnerability scanning",
        "Mobile responsiveness check",
        "Page speed optimization",
        "Competitor analysis",
        "Monthly reporting"
      ],
      benefits: [
        "Improve website performance by 60%",
        "Increase SEO rankings by 80%",
        "Reduce bounce rate by 45%",
        "Enhance user experience"
      ],
      marketPrice: "$59-99/month",
      savings: "Save up to $70/month",
      category: "Web Analytics"
    },
    {
      name: "Smart Document Processor AI",
      description: "AI-powered document processing and management system with intelligent categorization, search, and workflow automation.",
      price: "$39/month",
      features: [
        "AI document categorization",
        "Intelligent search capabilities",
        "OCR text extraction",
        "Document version control",
        "Workflow automation",
        "Collaboration tools",
        "Compliance monitoring",
        "Integration with cloud storage"
      ],
      benefits: [
        "Reduce document processing time by 90%",
        "Improve search efficiency by 95%",
        "Ensure document compliance",
        "Streamline workflows"
      ],
      marketPrice: "$79-149/month",
      savings: "Save up to $110/month",
      category: "Document Management"
    },
    {
      name: "AI Customer Feedback Analyzer",
      description: "Intelligent customer feedback analysis with sentiment analysis, trend identification, and actionable insights generation.",
      price: "$44/month",
      features: [
        "Sentiment analysis",
        "Trend identification",
        "Actionable insights generation",
        "Multi-channel feedback collection",
        "Competitor comparison",
        "Custom reporting",
        "Alert system",
        "Integration with support tools"
      ],
      benefits: [
        "Improve customer satisfaction by 65%",
        "Reduce churn rate by 40%",
        "Identify improvement opportunities",
        "Make data-driven decisions"
      ],
      marketPrice: "$89-149/month",
      savings: "Save up to $105/month",
      category: "Customer Analytics"
    },
    {
      name: "Smart Inventory Optimizer AI",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and cost optimization for small businesses.",
      price: "$59/month",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Cost optimization",
        "Supplier performance tracking",
        "Dead stock identification",
        "Multi-location management",
        "Integration with POS systems",
        "Real-time reporting"
      ],
      benefits: [
        "Reduce inventory costs by 35%",
        "Eliminate stockouts by 90%",
        "Improve cash flow by 50%",
        "Optimize supplier relationships"
      ],
      marketPrice: "$119-199/month",
      savings: "Save up to $140/month",
      category: "Inventory Management"
    },
    {
      name: "AI Time Tracking Assistant",
      description: "Intelligent time tracking with AI-powered project categorization, productivity insights, and automated reporting.",
      price: "$19/month",
      features: [
        "AI project categorization",
        "Productivity insights",
        "Automated time tracking",
        "Project profitability analysis",
        "Team performance metrics",
        "Integration with project tools",
        "Custom reporting",
        "Mobile time tracking"
      ],
      benefits: [
        "Improve productivity by 40%",
        "Accurate project billing",
        "Identify time-wasting activities",
        "Optimize team performance"
      ],
      marketPrice: "$39-69/month",
      savings: "Save up to $50/month",
      category: "Time Management"
    },
    {
      name: "Smart Email Template Builder",
      description: "AI-powered email template creation with personalization, A/B testing, and performance optimization for marketing campaigns.",
      price: "$34/month",
      features: [
        "AI template generation",
        "Personalization engine",
        "A/B testing automation",
        "Performance optimization",
        "Multi-language support",
        "Brand consistency checking",
        "Integration with email platforms",
        "Analytics and reporting"
      ],
      benefits: [
        "Increase email open rates by 85%",
        "Save 80% time on template creation",
        "Improve conversion rates by 60%",
        "Ensure brand consistency"
      ],
      marketPrice: "$69-119/month",
      savings: "Save up to $85/month",
      category: "Email Marketing"
    },
    {
      name: "AI Contract Analyzer Pro",
      description: "Intelligent contract analysis and review system with risk assessment, compliance checking, and automated clause extraction.",
      price: "$79/month",
      features: [
        "AI contract analysis",
        "Risk assessment scoring",
        "Compliance checking",
        "Clause extraction and comparison",
        "Deadline tracking",
        "Legal research integration",
        "Team collaboration tools",
        "Custom reporting"
      ],
      benefits: [
        "Reduce contract review time by 90%",
        "Identify risks early",
        "Ensure compliance requirements",
        "Improve contract accuracy"
      ],
      marketPrice: "$149-299/month",
      savings: "Save up to $220/month",
      category: "Legal Tech"
    },
    {
      name: "Smart Backup Manager AI",
      description: "Intelligent backup management with AI-powered scheduling, storage optimization, and automated recovery testing.",
      price: "$24/month",
      features: [
        "AI backup scheduling",
        "Storage optimization",
        "Automated recovery testing",
        "Multi-cloud support",
        "Version control",
        "Security encryption",
        "Compliance monitoring",
        "Real-time monitoring"
      ],
      benefits: [
        "Ensure data protection",
        "Reduce storage costs by 40%",
        "Minimize recovery time",
        "Automate backup processes"
      ],
      marketPrice: "$49-89/month",
      savings: "Save up to $65/month",
      category: "Data Protection"
    }
  ];

  const categories = [...new Set(microSAASServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Head>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Innovative micro SAAS solutions designed to boost productivity and streamline business operations with AI-powered tools." />
        <meta name="keywords" content="micro saas, productivity tools, AI automation, business software, small business solutions" />
      </Head>

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SAAS Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, affordable micro SAAS solutions that transform your business operations with AI-powered automation and intelligence
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our Micro SAAS Solutions?</h2>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Affordable</h3>
                <p className="text-gray-300">Starting from $12/month</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300">Intelligent automation and insights</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Easy Setup</h3>
                <p className="text-gray-300">Get started in minutes</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-cyan-500 text-white rounded-lg font-semibold">
              All Categories
            </button>
            {categories.map((category) => (
              <button key={category} className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-colors">
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {microSAASServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-cyan-400">
                      {service.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">{service.price}</div>
                    <div className="text-sm text-gray-400">Market: {service.marketPrice}</div>
                    <div className="text-sm text-green-400 font-semibold">{service.savings}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <ul className="text-gray-300 space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Link
                    href="/contact"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="/request-quote"
                    className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Free Trial
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Incredible Value Proposition
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Average Savings</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
              <p className="text-gray-300">Compared to market alternatives</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Setup Time</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">5 min</div>
              <p className="text-gray-300">Average time to get started</p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">ROI Timeline</h3>
              <div className="text-4xl font-bold text-green-400 mb-2">30 days</div>
              <p className="text-gray-300">Average return on investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start your free trial today and experience the power of AI-driven micro SAAS solutions
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}