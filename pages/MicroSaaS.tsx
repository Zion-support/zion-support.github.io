import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function MicroSaaS() {
  const microSaasServices = [
    {
      name: "E-commerce Return Management",
      description: "Automated return request system with intelligent label generation, status tracking, and analytics for e-commerce businesses.",
      price: "$149/month",
      features: [
        "Automated return request processing",
        "Intelligent return label generation",
        "Real-time status tracking",
        "Return analytics and insights",
        "Integration with major e-commerce platforms",
        "Custom return policies",
        "Customer notification system",
        "Inventory management integration"
      ],
      benefits: [
        "Reduce return processing time by 80%",
        "Improve customer satisfaction by 45%",
        "Lower return processing costs by 60%",
        "Increase customer retention by 30%"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $350/month"
    },
    {
      name: "AI Customer Support Platform",
      description: "Comprehensive customer support platform with AI-powered chatbots, ticket management, and knowledge base integration.",
      price: "$299/month",
      features: [
        "AI-powered chatbot system",
        "Intelligent ticket routing",
        "Knowledge base management",
        "Multi-channel support (email, chat, phone)",
        "Sentiment analysis",
        "Automated response suggestions",
        "Performance analytics",
        "Integration with CRM systems"
      ],
      benefits: [
        "Handle 70% of inquiries automatically",
        "Reduce response time by 60%",
        "Improve customer satisfaction scores",
        "Scale support without additional staff"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Project Management Tool",
      description: "Intelligent project management platform with AI-driven task assignment, progress tracking, and resource optimization.",
      price: "$199/month",
      features: [
        "AI-powered task assignment",
        "Smart progress tracking",
        "Resource optimization algorithms",
        "Team collaboration tools",
        "Automated reporting",
        "Risk assessment and mitigation",
        "Time tracking and billing",
        "Integration with popular tools"
      ],
      benefits: [
        "Increase project completion rate by 40%",
        "Reduce project delays by 50%",
        "Improve resource utilization by 35%",
        "Enhance team productivity by 45%"
      ],
      marketPrice: "$400-600/month",
      savings: "Save up to $400/month"
    },
    {
      name: "Email Marketing Automation",
      description: "Advanced email marketing platform with AI-driven personalization, campaign optimization, and customer segmentation.",
      price: "$249/month",
      features: [
        "AI-powered personalization",
        "Automated campaign optimization",
        "Advanced customer segmentation",
        "A/B testing automation",
        "Email template library",
        "Performance analytics",
        "Integration with e-commerce platforms",
        "Compliance management (GDPR, CAN-SPAM)"
      ],
      benefits: [
        "Increase email open rates by 50%",
        "Boost conversion rates by 35%",
        "Reduce email marketing costs by 40%",
        "Improve customer engagement by 60%"
      ],
      marketPrice: "$400-700/month",
      savings: "Save up to $450/month"
    },
    {
      name: "Inventory Management System",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and real-time tracking.",
      price: "$179/month",
      features: [
        "AI demand forecasting",
        "Automated reorder points",
        "Real-time inventory tracking",
        "Multi-location support",
        "Supplier management",
        "Cost optimization",
        "Integration with POS systems",
        "Mobile app access"
      ],
      benefits: [
        "Reduce stockouts by 70%",
        "Lower inventory costs by 25%",
        "Improve cash flow by 30%",
        "Eliminate manual inventory tracking"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $320/month"
    },
    {
      name: "Financial Analytics Dashboard",
      description: "Comprehensive financial analytics platform with real-time reporting, forecasting, and business intelligence.",
      price: "$399/month",
      features: [
        "Real-time financial dashboards",
        "Automated financial reporting",
        "Cash flow forecasting",
        "Profit and loss analysis",
        "Budget planning and tracking",
        "Tax preparation assistance",
        "Integration with accounting software",
        "Custom report builder"
      ],
      benefits: [
        "Improve financial visibility by 80%",
        "Reduce financial reporting time by 70%",
        "Enhance decision making accuracy",
        "Ensure compliance with regulations"
      ],
      marketPrice: "$600-1000/month",
      savings: "Save up to $600/month"
    },
    {
      name: "Social Media Management",
      description: "AI-powered social media management platform with content scheduling, engagement tracking, and performance analytics.",
      price: "$199/month",
      features: [
        "AI content suggestions",
        "Automated posting schedule",
        "Multi-platform management",
        "Engagement tracking",
        "Hashtag optimization",
        "Competitor analysis",
        "Influencer identification",
        "ROI tracking and analytics"
      ],
      benefits: [
        "Increase social media engagement by 65%",
        "Save 10+ hours per week on social media",
        "Improve brand visibility by 50%",
        "Grow follower base by 40%"
      ],
      marketPrice: "$300-600/month",
      savings: "Save up to $400/month"
    },
    {
      name: "Lead Generation Platform",
      description: "Intelligent lead generation system with automated prospecting, qualification, and nurturing capabilities.",
      price: "$349/month",
      features: [
        "AI-powered lead scoring",
        "Automated prospecting",
        "Email sequence automation",
        "Lead qualification workflows",
        "CRM integration",
        "Performance analytics",
        "A/B testing for campaigns",
        "Compliance with data regulations"
      ],
      benefits: [
        "Increase qualified leads by 80%",
        "Reduce lead generation costs by 50%",
        "Improve conversion rates by 45%",
        "Automate repetitive prospecting tasks"
      ],
      marketPrice: "$500-900/month",
      savings: "Save up to $550/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Innovative, focused software solutions designed to solve specific business problems with maximum efficiency
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <div className="grid md:grid-cols-4 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Focused Solutions</h3>
                <p className="text-gray-300">Specialized tools for specific business needs</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Save up to 70% compared to enterprise solutions</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
                <p className="text-gray-300">Get started in minutes, not months</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Scalable</h3>
                <p className="text-gray-300">Grow with your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold text-cyan-400">
                    {service.name}
                  </h3>
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
                    Request Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Streamline Your Business Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to find the perfect Micro SaaS solution for your business
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
              Contact Us Now
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}