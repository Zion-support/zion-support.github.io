import React from 'react';
import { Link } from 'react-router-dom';

export default function AIServices() {
  const aiServices = [
    {
      name: "AI Content Creation Studio",
      description: "Revolutionary AI-powered content creation platform that generates high-quality, brand-consistent content across multiple channels.",
      price: "$299/month",
      features: [
        "Automated blog post generation",
        "Social media content creation",
        "Email marketing campaigns",
        "SEO-optimized content",
        "Multi-language support",
        "Brand voice customization",
        "Content calendar management",
        "Performance analytics"
      ],
      benefits: [
        "Reduce content creation time by 80%",
        "Maintain consistent brand voice",
        "Scale content production effortlessly",
        "Improve SEO rankings"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Email Automation Platform",
      description: "Intelligent email management system that reads, categorizes, and responds to emails automatically while learning from your preferences.",
      price: "$199/month",
      features: [
        "Smart email categorization",
        "Automated response generation",
        "Priority message flagging",
        "Sentiment analysis",
        "Follow-up automation",
        "Email analytics dashboard",
        "Integration with CRM systems",
        "Custom response templates"
      ],
      benefits: [
        "Handle 90% of routine emails automatically",
        "Never miss important messages",
        "Improve response time by 70%",
        "Reduce email management overhead"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $300/month"
    },
    {
      name: "AI Business Intelligence Suite",
      description: "Advanced analytics platform that provides real-time insights, predictive analytics, and automated reporting for data-driven decision making.",
      price: "$499/month",
      features: [
        "Real-time data visualization",
        "Predictive analytics models",
        "Automated report generation",
        "Custom dashboard creation",
        "Data integration from multiple sources",
        "Anomaly detection",
        "Trend analysis",
        "Executive summary reports"
      ],
      benefits: [
        "Make data-driven decisions faster",
        "Identify opportunities and risks early",
        "Reduce manual reporting by 85%",
        "Improve business performance metrics"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $700/month"
    },
    {
      name: "AI Customer Support Automation",
      description: "Comprehensive customer support platform with AI-powered chatbots, ticket routing, and automated resolution capabilities.",
      price: "$399/month",
      features: [
        "Intelligent chatbot system",
        "Automatic ticket routing",
        "Knowledge base integration",
        "Sentiment analysis",
        "Multi-language support",
        "Escalation management",
        "Performance analytics",
        "Custom workflow automation"
      ],
      benefits: [
        "Reduce support response time by 60%",
        "Handle 70% of inquiries automatically",
        "Improve customer satisfaction scores",
        "Scale support without additional staff"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Marketing Automation Platform",
      description: "End-to-end marketing automation with AI-driven personalization, campaign optimization, and customer journey mapping.",
      price: "$599/month",
      features: [
        "AI-powered personalization",
        "Automated campaign optimization",
        "Customer journey mapping",
        "A/B testing automation",
        "Lead scoring and nurturing",
        "Cross-channel marketing",
        "ROI tracking and analytics",
        "Integration with major platforms"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Reduce marketing costs by 30%",
        "Improve customer engagement",
        "Automate complex marketing workflows"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Financial Analytics Platform",
      description: "Advanced financial analysis tool with AI-powered forecasting, risk assessment, and automated financial reporting.",
      price: "$699/month",
      features: [
        "Financial forecasting models",
        "Risk assessment algorithms",
        "Automated financial reporting",
        "Cash flow optimization",
        "Investment analysis",
        "Compliance monitoring",
        "Fraud detection",
        "Real-time financial dashboards"
      ],
      benefits: [
        "Improve financial forecasting accuracy",
        "Reduce financial risk exposure",
        "Automate compliance reporting",
        "Optimize cash flow management"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1300/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary artificial intelligence solutions that transform your business operations and drive growth
          </p>
          <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Why Choose Our AI Services?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Save up to 70% compared to market rates</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Average 40% improvement in efficiency</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
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
                    to="/contact"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex-1 text-center"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/request-quote"
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
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today to discuss your AI needs and get a customized solution
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
              to="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us Now
            </Link>
            <Link
              to="/request-quote"
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