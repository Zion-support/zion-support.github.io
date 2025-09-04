import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

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
    },
    {
      name: "AI Document Intelligence Platform",
      description: "Advanced document processing and analysis system that extracts insights, automates workflows, and ensures compliance across all document types.",
      price: "$449/month",
      features: [
        "Intelligent document parsing",
        "Automated data extraction",
        "Contract analysis and review",
        "Compliance monitoring",
        "Document classification",
        "Version control and tracking",
        "OCR and text recognition",
        "Workflow automation"
      ],
      benefits: [
        "Reduce document processing time by 90%",
        "Eliminate manual data entry errors",
        "Ensure regulatory compliance",
        "Improve document searchability"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $750/month"
    },
    {
      name: "AI Voice Assistant Platform",
      description: "Enterprise-grade voice AI platform with natural language processing, voice analytics, and multi-channel voice automation.",
      price: "$399/month",
      features: [
        "Natural language understanding",
        "Voice command processing",
        "Multi-language support",
        "Voice analytics and insights",
        "Integration with business systems",
        "Custom voice training",
        "Real-time transcription",
        "Voice biometric authentication"
      ],
      benefits: [
        "Improve customer experience with voice",
        "Reduce call center costs by 50%",
        "Enable hands-free operations",
        "Enhance accessibility"
      ],
      marketPrice: "$700-1000/month",
      savings: "Save up to $600/month"
    },
    {
      name: "AI Predictive Maintenance System",
      description: "IoT-powered predictive maintenance platform that uses AI to predict equipment failures and optimize maintenance schedules.",
      price: "$599/month",
      features: [
        "IoT sensor integration",
        "Machine learning algorithms",
        "Failure prediction models",
        "Maintenance scheduling optimization",
        "Real-time monitoring dashboards",
        "Cost-benefit analysis",
        "Integration with existing systems",
        "Mobile alerts and notifications"
      ],
      benefits: [
        "Reduce unplanned downtime by 70%",
        "Lower maintenance costs by 40%",
        "Extend equipment lifespan",
        "Improve operational efficiency"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Code Generation Platform",
      description: "Advanced AI-powered code generation and development assistance platform that accelerates software development and improves code quality.",
      price: "$299/month",
      features: [
        "Intelligent code generation",
        "Bug detection and fixing",
        "Code optimization suggestions",
        "Multi-language support",
        "Integration with IDEs",
        "Code review automation",
        "Documentation generation",
        "Testing assistance"
      ],
      benefits: [
        "Accelerate development by 60%",
        "Reduce bugs and technical debt",
        "Improve code quality and consistency",
        "Enable faster time-to-market"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Social Media Management",
      description: "Comprehensive AI-powered social media management platform with automated posting, engagement, and analytics across all major platforms.",
      price: "$199/month",
      features: [
        "Automated content scheduling",
        "AI-powered engagement responses",
        "Sentiment analysis and monitoring",
        "Hashtag optimization",
        "Influencer identification",
        "Crisis management alerts",
        "Performance analytics",
        "Multi-platform management"
      ],
      benefits: [
        "Increase social media engagement by 80%",
        "Reduce social media management time",
        "Improve brand reputation monitoring",
        "Optimize social media ROI"
      ],
      marketPrice: "$300-500/month",
      savings: "Save up to $300/month"
    },
    {
      name: "AI HR Analytics Platform",
      description: "Advanced human resources analytics platform with AI-powered insights for recruitment, employee engagement, and workforce optimization.",
      price: "$399/month",
      features: [
        "Resume screening and matching",
        "Employee performance analytics",
        "Retention prediction models",
        "Skills gap analysis",
        "Diversity and inclusion metrics",
        "Recruitment optimization",
        "Employee sentiment analysis",
        "Workforce planning tools"
      ],
      benefits: [
        "Improve hiring success rates by 50%",
        "Reduce employee turnover by 30%",
        "Optimize workforce planning",
        "Enhance employee satisfaction"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Supply Chain Optimization",
      description: "Intelligent supply chain management platform with AI-powered demand forecasting, inventory optimization, and logistics automation.",
      price: "$799/month",
      features: [
        "Demand forecasting algorithms",
        "Inventory optimization",
        "Supplier performance analytics",
        "Risk assessment and mitigation",
        "Route optimization",
        "Cost analysis and reduction",
        "Sustainability tracking",
        "Real-time supply chain visibility"
      ],
      benefits: [
        "Reduce inventory costs by 25%",
        "Improve demand forecasting accuracy",
        "Minimize supply chain disruptions",
        "Optimize logistics operations"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1200/month"
    },
    {
      name: "AI Legal Document Analysis",
      description: "Specialized AI platform for legal document analysis, contract review, and compliance monitoring with advanced natural language processing.",
      price: "$599/month",
      features: [
        "Contract analysis and review",
        "Legal document search",
        "Compliance monitoring",
        "Risk assessment",
        "Clause extraction and comparison",
        "Legal research assistance",
        "Document summarization",
        "Deadline tracking and alerts"
      ],
      benefits: [
        "Reduce legal review time by 80%",
        "Improve contract accuracy",
        "Ensure regulatory compliance",
        "Lower legal costs significantly"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Video Analytics Platform",
      description: "Advanced video analysis platform with AI-powered content recognition, sentiment analysis, and automated video processing capabilities.",
      price: "$349/month",
      features: [
        "Video content analysis",
        "Object and face recognition",
        "Sentiment analysis from video",
        "Automated video editing",
        "Content moderation",
        "Video search and indexing",
        "Real-time video processing",
        "Custom model training"
      ],
      benefits: [
        "Automate video content processing",
        "Improve content moderation efficiency",
        "Enhance video search capabilities",
        "Reduce manual video review time"
      ],
      marketPrice: "$600-900/month",
      savings: "Save up to $550/month"
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