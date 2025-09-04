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
    },
    {
      name: "AI Computer Vision Platform",
      description: "Advanced computer vision platform with object detection, facial recognition, and image analysis capabilities for various industries.",
      price: "$599/month",
      features: [
        "Real-time object detection and classification",
        "Facial recognition and verification",
        "OCR and text extraction from images",
        "Quality control and defect detection",
        "Medical image analysis",
        "Security and surveillance monitoring",
        "Custom model training",
        "API integration and SDK"
      ],
      benefits: [
        "Automate visual inspection processes",
        "Improve accuracy by 95%",
        "Reduce manual inspection costs",
        "Enable 24/7 monitoring capabilities"
      ],
      marketPrice: "$1000-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Natural Language Processing Suite",
      description: "Comprehensive NLP platform with sentiment analysis, language translation, text summarization, and chatbot development tools.",
      price: "$449/month",
      features: [
        "Sentiment analysis and emotion detection",
        "Multi-language translation (100+ languages)",
        "Text summarization and extraction",
        "Named entity recognition",
        "Intent classification and understanding",
        "Chatbot and virtual assistant development",
        "Document analysis and processing",
        "Custom model fine-tuning"
      ],
      benefits: [
        "Understand customer sentiment in real-time",
        "Break language barriers globally",
        "Automate text processing workflows",
        "Improve customer service automation"
      ],
      marketPrice: "$700-1200/month",
      savings: "Save up to $750/month"
    },
    {
      name: "AI Predictive Analytics Engine",
      description: "Advanced predictive analytics platform with machine learning models for forecasting, risk assessment, and decision optimization.",
      price: "$699/month",
      features: [
        "Time series forecasting",
        "Risk assessment and scoring",
        "Customer lifetime value prediction",
        "Churn prediction and prevention",
        "Market trend analysis",
        "Anomaly detection",
        "Recommendation engines",
        "Automated model deployment"
      ],
      benefits: [
        "Make data-driven predictions with 90% accuracy",
        "Reduce business risks significantly",
        "Optimize customer retention strategies",
        "Improve strategic decision making"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1300/month"
    },
    {
      name: "AI Voice Recognition & Processing",
      description: "Advanced voice AI platform with speech-to-text, voice commands, and intelligent voice analytics for business applications.",
      price: "$399/month",
      features: [
        "Real-time speech-to-text conversion",
        "Voice command recognition",
        "Speaker identification and verification",
        "Voice emotion analysis",
        "Multi-language voice support",
        "Custom wake word training",
        "Voice biometrics authentication",
        "Call center analytics"
      ],
      benefits: [
        "Enable hands-free operations",
        "Improve accessibility for all users",
        "Enhance security with voice biometrics",
        "Automate voice-based workflows"
      ],
      marketPrice: "$600-1000/month",
      savings: "Save up to $600/month"
    },
    {
      name: "AI Recommendation Engine",
      description: "Intelligent recommendation system that personalizes content, products, and services based on user behavior and preferences.",
      price: "$349/month",
      features: [
        "Collaborative filtering algorithms",
        "Content-based recommendations",
        "Hybrid recommendation models",
        "Real-time personalization",
        "A/B testing for recommendations",
        "Cold start problem solutions",
        "Multi-armed bandit optimization",
        "Performance analytics dashboard"
      ],
      benefits: [
        "Increase conversion rates by 40%",
        "Improve user engagement significantly",
        "Boost revenue through better targeting",
        "Enhance customer satisfaction"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $450/month"
    },
    {
      name: "AI Fraud Detection System",
      description: "Advanced fraud detection platform with real-time monitoring, pattern recognition, and automated response capabilities.",
      price: "$799/month",
      features: [
        "Real-time transaction monitoring",
        "Machine learning fraud models",
        "Behavioral pattern analysis",
        "Risk scoring and assessment",
        "Automated fraud prevention",
        "False positive reduction",
        "Multi-channel fraud detection",
        "Compliance reporting tools"
      ],
      benefits: [
        "Detect fraud with 99.5% accuracy",
        "Reduce false positives by 80%",
        "Prevent financial losses",
        "Ensure regulatory compliance"
      ],
      marketPrice: "$1200-2000/month",
      savings: "Save up to $1200/month"
    },
    {
      name: "AI Chatbot Development Platform",
      description: "Comprehensive chatbot development platform with natural language understanding, multi-channel deployment, and analytics.",
      price: "$299/month",
      features: [
        "Visual chatbot builder",
        "Natural language understanding",
        "Multi-channel deployment (web, mobile, social)",
        "Integration with CRM and databases",
        "Conversation analytics",
        "A/B testing capabilities",
        "Human handoff functionality",
        "Custom training data management"
      ],
      benefits: [
        "Reduce customer service costs by 60%",
        "Provide 24/7 customer support",
        "Improve response time to seconds",
        "Scale customer service efficiently"
      ],
      marketPrice: "$500-800/month",
      savings: "Save up to $500/month"
    },
    {
      name: "AI Data Labeling & Annotation",
      description: "Automated data labeling platform with AI-powered annotation tools for machine learning model training and validation.",
      price: "$249/month",
      features: [
        "Automated data annotation",
        "Human-in-the-loop validation",
        "Multi-modal data support",
        "Quality assurance tools",
        "Collaborative annotation workflows",
        "Custom annotation schemas",
        "Progress tracking and reporting",
        "API integration for ML pipelines"
      ],
      benefits: [
        "Reduce labeling time by 70%",
        "Improve annotation accuracy",
        "Scale data preparation processes",
        "Accelerate ML model development"
      ],
      marketPrice: "$400-700/month",
      savings: "Save up to $450/month"
    },
    {
      name: "AI Edge Computing Platform",
      description: "Edge AI platform for deploying machine learning models on edge devices with real-time inference and optimization.",
      price: "$599/month",
      features: [
        "Model optimization for edge devices",
        "Real-time inference capabilities",
        "Edge device management",
        "Offline operation support",
        "Model versioning and updates",
        "Performance monitoring",
        "Security and encryption",
        "Multi-device synchronization"
      ],
      benefits: [
        "Reduce latency to milliseconds",
        "Enable offline AI capabilities",
        "Lower bandwidth requirements",
        "Improve privacy and security"
      ],
      marketPrice: "$900-1500/month",
      savings: "Save up to $900/month"
    },
    {
      name: "AI Model Monitoring & MLOps",
      description: "Comprehensive MLOps platform for monitoring, managing, and maintaining machine learning models in production.",
      price: "$499/month",
      features: [
        "Model performance monitoring",
        "Data drift detection",
        "Model versioning and management",
        "Automated retraining pipelines",
        "A/B testing for models",
        "Model governance and compliance",
        "Alert and notification system",
        "Integration with CI/CD pipelines"
      ],
      benefits: [
        "Ensure model reliability and accuracy",
        "Automate model lifecycle management",
        "Reduce model degradation risks",
        "Improve operational efficiency"
      ],
      marketPrice: "$800-1200/month",
      savings: "Save up to $700/month"
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