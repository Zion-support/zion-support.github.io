import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities and develop AI roadmaps.",
      icon: LightBulbIcon,
      features: ["AI strategy development", "Technology assessment", "ROI analysis", "Implementation planning"],
      color: "from-blue-500 to-purple-500",
      price: "Starting at $150/hour",
      benefits: ["Strategic guidance", "Risk mitigation", "Cost optimization", "Competitive advantage"],
      useCases: ["AI strategy", "Technology selection", "Project planning", "Change management"],
      href: "/ai-consulting"
    },
    {
      title: "Machine Learning Development",
      description: "Custom ML models and algorithms tailored to your specific business needs.",
      icon: CpuChipIcon,
      features: ["Custom model development", "Data preprocessing", "Model training", "Performance optimization"],
      color: "from-green-500 to-teal-500",
      price: "Starting at $5,000/project",
      benefits: ["Improved accuracy", "Automated processes", "Scalable solutions", "Real-time insights"],
      useCases: ["Predictive analytics", "Pattern recognition", "Automated decision making", "Data analysis"],
      href: "/ml-development"
    },
    {
      title: "AI Chatbot Development",
      description: "Intelligent conversational AI solutions for customer service and engagement.",
      icon: ChatBubbleLeftRightIcon,
      features: ["Natural language processing", "Multi-channel support", "Integration capabilities", "Analytics dashboard"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $3,000/project",
      benefits: ["24/7 availability", "Reduced support costs", "Improved response time", "Scalable support"],
      useCases: ["Customer service", "Lead generation", "Technical support", "Sales assistance"],
      href: "/ai-chatbot-development"
    },
    {
      title: "Computer Vision Solutions",
      description: "Image and video analysis solutions for various business applications.",
      icon: EyeIcon,
      features: ["Object detection", "Image classification", "Facial recognition", "Video analysis"],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $4,500/project",
      benefits: ["Automated visual inspection", "Enhanced security", "Quality control", "Real-time monitoring"],
      useCases: ["Manufacturing", "Security systems", "Medical imaging", "Retail analytics"],
      href: "/computer-vision"
    },
    {
      title: "AI Data Analytics",
      description: "Advanced analytics and insights using AI to drive business decisions.",
      icon: ChartBarIcon,
      features: ["Predictive analytics", "Trend analysis", "Data visualization", "Automated reporting"],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["Better decision making", "Risk mitigation", "Resource optimization", "Competitive advantage"],
      useCases: ["Financial planning", "Inventory management", "Market analysis", "Operational efficiency"],
      href: "/ai-data-analytics"
    },
    {
      title: "AI Process Automation",
      description: "Intelligent automation solutions to streamline business processes.",
      icon: CogIcon,
      features: ["Workflow automation", "Document processing", "Data extraction", "Task scheduling"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $3,500/project",
      benefits: ["Increased efficiency", "Error reduction", "Cost savings", "Scalable operations"],
      useCases: ["Document processing", "Data entry", "Report generation", "Workflow management"],
      href: "/ai-automation"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities.",
      icon: LightBulbIcon
    },
    {
      step: "2", 
      title: "Strategy & Planning",
      description: "We develop a comprehensive AI strategy and implementation plan.",
      icon: ChartBarIcon
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "We build and test your AI solutions with rigorous quality assurance.",
      icon: CogIcon
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your solutions and provide ongoing support and maintenance.",
      icon: CheckCircleIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Professional AI services including consulting, development, and implementation. Transform your business with our expert AI solutions." />
        <meta name="keywords" content="AI services, AI consulting, machine learning development, AI chatbot, computer vision, AI automation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional AI services to transform your business
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From consulting to implementation, our expert AI services help you leverage artificial intelligence
                to drive innovation, efficiency, and growth across your organization.
              </p>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">Professional service</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI services can transform your business and drive innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;