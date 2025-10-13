import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function AIServicesPage() {
  const aiServices = [
    {
      title: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform that predicts trends, identifies opportunities, and automates reporting.",
      icon: ChartBarIcon,
      features: [
        "Predictive analytics and forecasting",
        "Real-time data visualization",
        "Automated report generation",
        "Natural language query interface",
        "Anomaly detection and alerts",
        "Custom dashboard creation"
      ],
      pricing: {
        basic: { price: 299, period: "month", features: ["Up to 10 data sources", "Basic AI models", "Standard reports", "Email support"] },
        professional: { price: 799, period: "month", features: ["Up to 50 data sources", "Advanced AI models", "Custom dashboards", "Priority support"] },
        enterprise: { price: 1999, period: "month", features: ["Unlimited data sources", "Custom AI training", "White-label solution", "Dedicated support"] }
      },
      color: "from-purple-500 to-pink-500",
      href: "/ai-business-intelligence",
      marketPrice: "$299-1,999/month",
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting by 90%",
        "Identify revenue opportunities worth $2M+ annually",
        "Improve forecast accuracy by 85%"
      ],
      useCases: ["Financial forecasting", "Sales prediction", "Customer behavior analysis", "Supply chain optimization"]
    },
    {
      title: "Intelligent Document Processing",
      description: "Automate document workflows with AI that can read, understand, and extract information from any document type with 99.5% accuracy.",
      icon: DocumentTextIcon,
      features: [
        "OCR and text extraction",
        "Document classification",
        "Data validation and verification",
        "Automated data entry",
        "Multi-language support",
        "Integration with existing systems"
      ],
      pricing: {
        basic: { price: 199, period: "month", features: ["1,000 documents/month", "Basic templates", "Email support"] },
        professional: { price: 599, period: "month", features: ["10,000 documents/month", "Custom templates", "API access", "Priority support"] },
        enterprise: { price: 1499, period: "month", features: ["Unlimited documents", "Custom AI training", "White-label", "Dedicated support"] }
      },
      color: "from-cyan-500 to-blue-500",
      href: "/ai-document-processing",
      marketPrice: "$199-1,499/month",
      benefits: [
        "Process documents 50x faster than manual entry",
        "Reduce data entry errors by 95%",
        "Save 40+ hours per week on document processing",
        "Achieve 99.5% accuracy in data extraction"
      ],
      useCases: ["Invoice processing", "Contract analysis", "Medical records", "Legal document review"]
    },
    {
      title: "AI Customer Service Automation",
      description: "Deploy intelligent chatbots and virtual assistants that handle 80% of customer inquiries with human-like responses and seamless escalation.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural language processing",
        "Multi-channel support (chat, email, phone)",
        "Sentiment analysis and emotion detection",
        "Automated ticket routing",
        "Knowledge base integration",
        "Performance analytics and optimization"
      ],
      pricing: {
        basic: { price: 149, period: "month", features: ["500 conversations/month", "Basic chatbot", "Email support"] },
        professional: { price: 499, period: "month", features: ["5,000 conversations/month", "Advanced AI", "Multi-channel", "Analytics"] },
        enterprise: { price: 1299, period: "month", features: ["Unlimited conversations", "Custom AI training", "White-label", "Dedicated support"] }
      },
      color: "from-green-500 to-emerald-500",
      href: "/ai-customer-service",
      marketPrice: "$149-1,299/month",
      benefits: [
        "Reduce customer service costs by 60%",
        "Improve response time by 95%",
        "Increase customer satisfaction scores by 40%",
        "Handle 24/7 customer support without additional staff"
      ],
      useCases: ["E-commerce support", "Technical support", "Sales inquiries", "Appointment scheduling"]
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement advanced computer vision AI for quality control, object detection, facial recognition, and automated visual inspection systems.",
      icon: EyeIcon,
      features: [
        "Real-time object detection",
        "Quality control automation",
        "Facial recognition and verification",
        "Image classification and tagging",
        "Video analytics and monitoring",
        "Custom model training"
      ],
      pricing: {
        basic: { price: 399, period: "month", features: ["1,000 images/month", "Pre-trained models", "Basic API", "Email support"] },
        professional: { price: 999, period: "month", features: ["10,000 images/month", "Custom models", "Advanced API", "Priority support"] },
        enterprise: { price: 2499, period: "month", features: ["Unlimited processing", "Custom training", "On-premise deployment", "Dedicated support"] }
      },
      color: "from-yellow-500 to-orange-500",
      href: "/computer-vision",
      marketPrice: "$399-2,499/month",
      benefits: [
        "Improve quality control accuracy by 98%",
        "Reduce inspection time by 80%",
        "Eliminate human error in visual tasks",
        "Enable 24/7 automated monitoring"
      ],
      useCases: ["Manufacturing QC", "Security surveillance", "Medical imaging", "Retail analytics"]
    },
    {
      title: "AI Content Generation & Marketing",
      description: "Create high-quality, engaging content at scale with AI that understands your brand voice and generates personalized marketing materials.",
      icon: DocumentTextIcon,
      features: [
        "Multi-format content generation",
        "Brand voice customization",
        "SEO optimization",
        "A/B testing and optimization",
        "Multi-language support",
        "Content performance analytics"
      ],
      pricing: {
        basic: { price: 99, period: "month", features: ["10,000 words/month", "Basic templates", "Email support"] },
        professional: { price: 299, period: "month", features: ["50,000 words/month", "Custom templates", "SEO optimization", "Priority support"] },
        enterprise: { price: 799, period: "month", features: ["Unlimited words", "Custom AI training", "White-label", "Dedicated support"] }
      },
      color: "from-pink-500 to-rose-500",
      href: "/ai-content-generation",
      marketPrice: "$99-799/month",
      benefits: [
        "Increase content production by 500%",
        "Reduce content creation costs by 70%",
        "Improve SEO rankings by 150%",
        "Maintain consistent brand voice across all content"
      ],
      useCases: ["Blog writing", "Social media content", "Email campaigns", "Product descriptions"]
    },
    {
      title: "AI Process Automation",
      description: "Automate complex business processes with intelligent RPA that learns from your workflows and continuously improves efficiency.",
      icon: CogIcon,
      features: [
        "Workflow automation",
        "Process mining and optimization",
        "Exception handling",
        "Integration with 500+ applications",
        "Process monitoring and analytics",
        "Custom automation development"
      ],
      pricing: {
        basic: { price: 249, period: "month", features: ["5 automated processes", "Basic integrations", "Email support"] },
        professional: { price: 699, period: "month", features: ["25 automated processes", "Advanced integrations", "Custom development", "Priority support"] },
        enterprise: { price: 1799, period: "month", features: ["Unlimited processes", "Custom AI training", "White-label", "Dedicated support"] }
      },
      color: "from-indigo-500 to-purple-500",
      href: "/ai-process-automation",
      marketPrice: "$249-1,799/month",
      benefits: [
        "Reduce manual work by 80%",
        "Improve process accuracy by 99%",
        "Save 100+ hours per month",
        "Scale operations without additional staff"
      ],
      useCases: ["Data entry automation", "Invoice processing", "Customer onboarding", "Report generation"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including business intelligence, document processing, customer service automation, computer vision, and process automation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business intelligence, document processing, computer vision" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions designed for real-world impact
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our AI services combine advanced machine learning, natural language processing, 
              and computer vision to solve complex business challenges and drive innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{service.marketPrice}</div>
                      <div className="text-sm text-gray-400">Starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <StarIcon className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-3 py-1 bg-slate-700 text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="text-center p-3 bg-slate-700 rounded-lg">
                        <div className="text-lg font-bold text-white">${details.price}</div>
                        <div className="text-xs text-gray-400">/{details.period}</div>
                        <div className="text-xs text-gray-300 capitalize">{plan}</div>
                      </div>
                    ))}
                  </div>
                  
                  <Link 
                    to={service.href}
                    className={`inline-flex items-center gap-2 text-${service.color.split(' ')[1].split('-')[1]}-400 hover:text-${service.color.split(' ')[1].split('-')[1]}-300 font-semibold group-hover:gap-3 transition-all`}
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to deliver solutions that 
              are not just innovative, but also practical and immediately valuable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Machine Learning</h3>
              <p className="text-gray-300">
                Advanced ML algorithms for predictive analytics, pattern recognition, and automated decision making.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChatBubbleLeftRightIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Natural Language Processing</h3>
              <p className="text-gray-300">
                Understand and generate human language for chatbots, content creation, and document analysis.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <EyeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Computer Vision</h3>
              <p className="text-gray-300">
                Image and video analysis for quality control, object detection, and automated visual inspection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Process Automation</h3>
              <p className="text-gray-300">
                Intelligent automation that learns from your workflows and continuously improves efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver AI solutions that 
              provide immediate value and long-term competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <RocketLaunchIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
              <p className="text-gray-300">
                Our AI solutions have helped clients increase efficiency by 300%, 
                reduce costs by 60%, and improve accuracy by 95%.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with end-to-end encryption, compliance with 
                industry standards, and dedicated security monitoring.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Support</h3>
              <p className="text-gray-300">
                Dedicated AI specialists provide ongoing support, training, 
                and optimization to ensure maximum value from your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how our AI services can transform your business and give you a competitive edge
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}