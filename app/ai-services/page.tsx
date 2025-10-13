import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CodeBracketIcon,
  EyeIcon,
  MicrophoneIcon,
  CameraIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function AIServicesPage() {
  const aiServices = [
    {
      name: "AI Chatbot & Virtual Assistant",
      description: "Intelligent conversational AI that understands context and provides human-like responses for customer support, sales, and internal operations.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Natural Language Processing (NLP)",
        "Multi-language Support (50+ languages)",
        "24/7 Availability",
        "Integration APIs (REST, GraphQL)",
        "Custom Training on Your Data",
        "Sentiment Analysis",
        "Conversation Analytics",
        "Voice Integration"
      ],
      pricing: "Starting at $299/month",
      href: "/ai-chatbot-enterprise",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI Content Generation Pro",
      description: "Generate high-quality content for blogs, social media, marketing materials, and more using advanced AI models.",
      icon: DocumentTextIcon,
      features: [
        "SEO-Optimized Content",
        "Multiple Languages Support",
        "Brand Voice Training",
        "Plagiarism Detection",
        "Content Templates",
        "Bulk Content Generation",
        "Content Optimization",
        "Multi-format Output"
      ],
      pricing: "Starting at $199/month",
      href: "/ai-content-generation-pro",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Analytics Dashboard",
      description: "Advanced analytics and business intelligence powered by AI for data-driven decisions and insights.",
      icon: ChartBarIcon,
      features: [
        "Real-time Analytics",
        "Predictive Insights",
        "Custom Dashboards",
        "Automated Reports",
        "Data Visualization",
        "Trend Analysis",
        "Anomaly Detection",
        "ROI Tracking"
      ],
      pricing: "Starting at $399/month",
      href: "/ai-analytics-dashboard-pro",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "AI Cybersecurity Monitor",
      description: "AI-powered threat detection and security monitoring for comprehensive protection against cyber threats.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time Threat Detection",
        "Behavioral Analysis",
        "Automated Response",
        "Compliance Reporting",
        "Vulnerability Assessment",
        "Incident Response",
        "Security Analytics",
        "Threat Intelligence"
      ],
      pricing: "Starting at $599/month",
      href: "/ai-cybersecurity-monitor-pro",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "AI Code Assistant Pro",
      description: "AI-powered coding assistant that helps developers write better code faster with intelligent suggestions.",
      icon: CodeBracketIcon,
      features: [
        "Code Generation",
        "Bug Detection",
        "Code Review",
        "Documentation Generation",
        "Refactoring Suggestions",
        "Test Case Generation",
        "Code Optimization",
        "Multi-language Support"
      ],
      pricing: "Starting at $149/month",
      href: "/ai-code-assistant-pro",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "AI Computer Vision",
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analysis.",
      icon: EyeIcon,
      features: [
        "Image Recognition",
        "Object Detection",
        "Facial Recognition",
        "OCR (Optical Character Recognition)",
        "Video Analysis",
        "Quality Inspection",
        "Visual Search",
        "Real-time Processing"
      ],
      pricing: "Starting at $499/month",
      href: "/ai-computer-vision",
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "AI Voice Assistant",
      description: "Voice-enabled AI assistant for hands-free interaction and voice command processing.",
      icon: MicrophoneIcon,
      features: [
        "Voice Recognition",
        "Speech-to-Text",
        "Text-to-Speech",
        "Voice Commands",
        "Multi-language Support",
        "Noise Cancellation",
        "Voice Analytics",
        "Integration APIs"
      ],
      pricing: "Starting at $349/month",
      href: "/ai-voice-assistant",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "AI Content Moderation",
      description: "Automated content moderation using AI to detect and filter inappropriate content across platforms.",
      icon: ShieldCheckIcon,
      features: [
        "Content Classification",
        "Toxic Content Detection",
        "Image Moderation",
        "Video Moderation",
        "Real-time Processing",
        "Custom Rules Engine",
        "Audit Trails",
        "API Integration"
      ],
      pricing: "Starting at $279/month",
      href: "/ai-content-moderation-pro",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Advanced AI services including chatbots, content generation, analytics, cybersecurity, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, chatbots, content generation, analytics, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From chatbots to analytics, we provide comprehensive AI services that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Pricing
                <CurrencyDollarIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.name}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6">
                    <div className="flex items-center text-purple-400 font-semibold mb-2">
                      <CurrencyDollarIcon className="w-5 h-5 mr-2" />
                      <span>{service.pricing}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to={service.href}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-purple-400 text-purple-300 px-6 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Latest AI Technology</h3>
              <p className="text-gray-300">
                We use the most advanced AI models and frameworks to ensure optimal performance and accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our AI specialists have years of experience in machine learning, deep learning, and AI implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Fast Implementation</h3>
              <p className="text-gray-300">
                We deliver AI solutions quickly without compromising on quality, typically within 2-4 weeks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <SparklesIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Continuous Innovation</h3>
              <p className="text-gray-300">
                We continuously update and improve our AI solutions to stay ahead of the competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss your AI needs and create a custom solution that drives real business value.
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
                Schedule Demo
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