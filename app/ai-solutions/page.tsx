'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  MapPinIcon,
  StarIcon,
  FireIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      title: "AI-Powered Machine Learning Platform",
      description: "Enterprise-grade machine learning platform with automated model training, deployment, and monitoring capabilities.",
      icon: CpuChipIcon,
      features: [
        "Automated model training & optimization",
        "Real-time model deployment",
        "A/B testing framework",
        "Model performance monitoring",
        "Auto-scaling infrastructure",
        "Edge computing deployment",
        "Multi-cloud support",
        "Advanced security & compliance"
      ],
      color: "from-purple-500 to-pink-500",
      price: "$4,999/month",
      originalPrice: "$7,999/month",
      savings: "Save $3,000/month",
      benefits: ["98% accuracy", "10x faster training", "99.9% uptime"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection", "Demand forecasting"],
      href: "/ai-machine-learning-platform",
      popular: true,
      freeTrial: "30-day free trial"
    },
    {
      title: "Advanced Natural Language Processing Suite",
      description: "Comprehensive NLP solution with sentiment analysis, language translation, text generation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Multi-language sentiment analysis",
        "Real-time language translation (100+ languages)",
        "Advanced text generation & summarization",
        "Named entity recognition",
        "Conversational AI & chatbots",
        "Document processing & analysis",
        "API integration & webhooks",
        "Custom model training"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "$3,499/month",
      originalPrice: "$5,499/month",
      savings: "Save $2,000/month",
      benefits: ["95% accuracy", "Real-time processing", "Multi-language support"],
      useCases: ["Customer support", "Content analysis", "Language translation", "Document processing"],
      href: "/ai-nlp-suite",
      freeTrial: "21-day free trial"
    },
    {
      title: "Computer Vision & Image Recognition Pro",
      description: "Advanced computer vision solutions for image recognition, object detection, facial recognition, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Real-time image classification",
        "Advanced object detection & tracking",
        "Facial recognition & analysis",
        "OCR & document digitization",
        "Video analysis & processing",
        "Medical imaging analysis",
        "Quality control automation",
        "Custom model development"
      ],
      color: "from-green-500 to-emerald-500",
      price: "$5,999/month",
      originalPrice: "$9,999/month",
      savings: "Save $4,000/month",
      benefits: ["99% accuracy", "Real-time processing", "Custom models"],
      useCases: ["Quality control", "Security systems", "Medical imaging", "Automotive"],
      href: "/ai-computer-vision-pro",
      popular: true,
      freeTrial: "30-day free trial"
    },
    {
      title: "Predictive Analytics & Forecasting Engine",
      description: "Advanced predictive analytics platform with time series forecasting, demand prediction, and risk assessment capabilities.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand & sales prediction",
        "Risk assessment & scoring",
        "Anomaly detection",
        "Trend analysis & insights",
        "Performance optimization",
        "Real-time dashboards",
        "Custom algorithm development"
      ],
      color: "from-orange-500 to-red-500",
      price: "$3,999/month",
      originalPrice: "$6,499/month",
      savings: "Save $2,500/month",
      benefits: ["90% forecast accuracy", "Real-time insights", "Custom models"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization", "Financial planning"],
      href: "/ai-predictive-analytics-engine",
      freeTrial: "21-day free trial"
    },
    {
      title: "AI Automation & Workflow Intelligence",
      description: "Intelligent automation platform that streamlines business processes, optimizes workflows, and reduces manual work.",
      icon: CogIcon,
      features: [
        "Intelligent process automation",
        "Workflow optimization algorithms",
        "Smart decision automation",
        "Resource allocation optimization",
        "Performance monitoring & analytics",
        "Integration with 200+ tools",
        "Custom automation rules",
        "Real-time process insights"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "$2,999/month",
      originalPrice: "$4,999/month",
      savings: "Save $2,000/month",
      benefits: ["80% efficiency gain", "60% cost reduction", "Error-free automation"],
      useCases: ["Business process automation", "Customer service", "Data processing", "Workflow optimization"],
      href: "/ai-automation-platform",
      freeTrial: "14-day free trial"
    },
    {
      title: "AI Consulting & Strategy Services",
      description: "Strategic AI consulting to help identify opportunities, develop roadmaps, and implement AI solutions across your organization.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment & selection",
        "Implementation planning & roadmaps",
        "ROI analysis & business case development",
        "Change management & training",
        "Ongoing support & optimization",
        "AI governance & compliance",
        "Custom AI solutions design"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "$1,999/month",
      originalPrice: "$3,499/month",
      savings: "Save $1,500/month",
      benefits: ["Expert guidance", "Strategic planning", "Risk mitigation", "Proven methodologies"],
      useCases: ["AI transformation", "Technology adoption", "Process improvement", "Digital strategy"],
      href: "/ai-consulting-services",
      freeTrial: "7-day free trial"
    },
    {
      title: "AI Content Generation & Marketing Suite",
      description: "Comprehensive AI-powered content creation platform for marketing, social media, and brand communication.",
      icon: DocumentTextIcon,
      features: [
        "AI content generation (50+ content types)",
        "Multi-language content creation",
        "Brand voice consistency training",
        "SEO optimization & keyword research",
        "Social media content automation",
        "Email marketing campaigns",
        "Content performance analytics",
        "Plagiarism detection & originality"
      ],
      color: "from-pink-500 to-rose-500",
      price: "$1,499/month",
      originalPrice: "$2,499/month",
      savings: "Save $1,000/month",
      benefits: ["300% content output", "Consistent brand voice", "SEO optimization"],
      useCases: ["Content marketing", "Social media management", "Email campaigns", "Brand communication"],
      href: "/ai-content-generation-suite",
      freeTrial: "14-day free trial"
    },
    {
      title: "AI Cybersecurity & Threat Detection",
      description: "Advanced AI-powered cybersecurity solution with threat detection, anomaly analysis, and automated response capabilities.",
      icon: ShieldCheckIcon,
      features: [
        "Real-time threat detection",
        "Behavioral anomaly analysis",
        "Automated incident response",
        "Predictive security analytics",
        "Network traffic analysis",
        "Malware detection & prevention",
        "Compliance monitoring",
        "Security orchestration"
      ],
      color: "from-red-500 to-orange-500",
      price: "$4,499/month",
      originalPrice: "$7,499/month",
      savings: "Save $3,000/month",
      benefits: ["99.9% threat detection", "Real-time response", "Automated protection"],
      useCases: ["Cybersecurity", "Threat detection", "Compliance", "Incident response"],
      href: "/ai-cybersecurity-suite",
      popular: true,
      freeTrial: "30-day free trial"
    }
  ];

  const features = [
    {
      title: "Enterprise-Grade AI",
      description: "Production-ready AI solutions built for scale, security, and performance with enterprise-level support.",
      icon: CpuChipIcon
    },
    {
      title: "Real-Time Processing",
      description: "Lightning-fast AI processing with sub-second response times for real-time applications and decision making.",
      icon: RocketLaunchIcon
    },
    {
      title: "Custom Solutions",
      description: "Tailored AI implementations designed specifically for your business needs, data, and use cases.",
      icon: CogIcon
    },
    {
      title: "Expert Support",
      description: "Dedicated AI experts providing ongoing support, monitoring, optimization, and training for your team.",
      icon: UserGroupIcon
    }
  ];

  const implementationSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business processes, data, and requirements to identify the best AI opportunities and use cases.",
      icon: LightBulbIcon
    },
    {
      step: "2", 
      title: "Solution Design",
      description: "We design custom AI solutions tailored to your specific needs, objectives, and technical requirements.",
      icon: CogIcon
    },
    {
      step: "3",
      title: "Development & Training",
      description: "Our AI experts develop and train models using your data for optimal performance and accuracy.",
      icon: CpuChipIcon
    },
    {
      step: "4",
      title: "Deployment & Support",
      description: "We deploy your AI solution and provide ongoing support, monitoring, and continuous optimization.",
      icon: RocketLaunchIcon
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, predictive analytics, and more. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, natural language processing, computer vision, predictive analytics, AI chatbots, artificial intelligence" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                <SparklesIcon className="w-4 h-4 mr-2" />
                Leading AI Solutions Provider
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Solutions That
              <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Transform Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence with our comprehensive suite of AI solutions. 
              From machine learning to computer vision, we deliver enterprise-grade AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400">AI Models Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400">Enterprise Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Expert Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI solutions designed to solve real business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className={`bg-slate-900 rounded-xl p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 relative ${
                  service.popular ? 'ring-2 ring-purple-500 shadow-lg' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline space-x-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      {service.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{service.originalPrice}</span>
                      )}
                    </div>
                    {service.savings && (
                      <p className="text-green-400 font-semibold text-sm">{service.savings}</p>
                    )}
                    {service.freeTrial && (
                      <p className="text-blue-400 font-medium text-sm">{service.freeTrial}</p>
                    )}
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-sm">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircleIcon className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 text-sm">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <Link 
                      to={service.href}
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center font-semibold text-sm"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="w-full border border-gray-600 text-gray-300 py-3 px-4 rounded-lg hover:bg-gray-700 hover:text-white transition-colors flex items-center justify-center font-medium text-sm"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Solutions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900 to-purple-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built with cutting-edge technology and designed for enterprise-scale performance and reliability.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Implementation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for successful AI implementation and deployment that ensures maximum ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {implementationSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-cyan-600">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join industry leaders who trust our AI solutions to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300 font-semibold text-lg"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="grid md:grid-cols-3 gap-8 text-white">
              <div className="flex items-center justify-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <p className="text-blue-100">+1-302-464-0950</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">kleber@ziontechgroup.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPinIcon className="w-6 h-6 text-blue-200" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">Middletown, DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AISolutionsPage;