import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  CheckIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CloudIcon,
  CpuChipIcon,
  ChartBarIcon,
  GlobeAltIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CogIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

export default function AISolutionsPage() {
  const aiServices = [
    {
      id: 1,
      name: "AI-Powered Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform that predicts trends and optimizes decision-making.",
      price: "From $299/month",
      features: [
        "Predictive Analytics",
        "Real-time Data Processing",
        "Custom Dashboard Creation",
        "Automated Report Generation",
        "Natural Language Queries",
        "Multi-source Data Integration"
      ],
      category: "Analytics & BI",
      icon: ChartBarIcon,
      color: "from-purple-500 to-pink-500",
      popular: true,
      implementation: "2-4 weeks"
    },
    {
      id: 2,
      name: "Conversational AI Platform",
      description: "Build intelligent chatbots and virtual assistants with natural language processing capabilities for enhanced customer engagement.",
      price: "From $199/month",
      features: [
        "Natural Language Processing",
        "Multi-language Support",
        "Voice Integration",
        "Sentiment Analysis",
        "Custom Training Models",
        "API Integration"
      ],
      category: "Conversational AI",
      icon: ChatBubbleLeftRightIcon,
      color: "from-cyan-500 to-blue-500",
      popular: true,
      implementation: "1-3 weeks"
    },
    {
      id: 3,
      name: "Computer Vision Solutions",
      description: "Advanced image and video analysis for quality control, security monitoring, and automated visual inspection systems.",
      price: "From $399/month",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition",
        "Quality Control Automation",
        "Real-time Video Analysis",
        "Custom Model Training",
        "Edge Computing Support"
      ],
      category: "Computer Vision",
      icon: EyeIcon,
      color: "from-green-500 to-emerald-500",
      popular: false,
      implementation: "3-6 weeks"
    },
    {
      id: 4,
      name: "AI Content Generation Suite",
      description: "Automated content creation platform with AI writing, image generation, and multimedia content optimization.",
      price: "From $149/month",
      features: [
        "AI Writing Assistant",
        "Image Generation",
        "Video Content Creation",
        "SEO Optimization",
        "Brand Voice Training",
        "Multi-format Export"
      ],
      category: "Content Creation",
      icon: DocumentTextIcon,
      color: "from-orange-500 to-red-500",
      popular: true,
      implementation: "1-2 weeks"
    },
    {
      id: 5,
      name: "Predictive Maintenance AI",
      description: "IoT-enabled predictive maintenance system that prevents equipment failures and optimizes maintenance schedules.",
      price: "From $499/month",
      features: [
        "Equipment Health Monitoring",
        "Failure Prediction Models",
        "Maintenance Scheduling",
        "IoT Sensor Integration",
        "Real-time Alerts",
        "Cost Optimization"
      ],
      category: "Industrial AI",
      icon: CogIcon,
      color: "from-indigo-500 to-purple-500",
      popular: false,
      implementation: "4-8 weeks"
    },
    {
      id: 6,
      name: "AI-Powered Cybersecurity",
      description: "Advanced threat detection and response system using machine learning to identify and prevent cyber attacks.",
      price: "From $599/month",
      features: [
        "Threat Detection & Analysis",
        "Behavioral Analytics",
        "Automated Response",
        "Zero-day Attack Prevention",
        "Compliance Monitoring",
        "24/7 Security Operations"
      ],
      category: "Cybersecurity",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500",
      popular: true,
      implementation: "2-4 weeks"
    },
    {
      id: 7,
      name: "AI Process Automation",
      description: "Intelligent process automation that learns and adapts to optimize business workflows and reduce manual tasks.",
      price: "From $249/month",
      features: [
        "Workflow Automation",
        "Document Processing",
        "Data Extraction",
        "Decision Automation",
        "Process Optimization",
        "Integration Management"
      ],
      category: "Process Automation",
      icon: RocketLaunchIcon,
      color: "from-blue-500 to-cyan-500",
      popular: false,
      implementation: "2-5 weeks"
    },
    {
      id: 8,
      name: "AI Innovation Lab",
      description: "Custom AI solution development and research services for unique business challenges and cutting-edge applications.",
      price: "Custom Pricing",
      features: [
        "Custom AI Development",
        "Research & Development",
        "Proof of Concept",
        "Technology Consulting",
        "AI Strategy Planning",
        "Ongoing Support"
      ],
      category: "Custom Development",
      icon: LightBulbIcon,
      color: "from-pink-500 to-rose-500",
      popular: false,
      implementation: "8-16 weeks"
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for pattern recognition, prediction, and optimization",
      icon: CpuChipIcon,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment detection, and language understanding capabilities",
      icon: ChatBubbleLeftRightIcon,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis for automated visual inspection and recognition",
      icon: EyeIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven forecasting and trend analysis for informed decision making",
      icon: ChartBarIcon,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Process Automation",
      description: "Intelligent automation of complex business processes and workflows",
      icon: CogIcon,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "AI Security",
      description: "Advanced threat detection and cybersecurity using artificial intelligence",
      icon: ShieldCheckIcon,
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and predictive analytics for modern businesses." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, artificial intelligence, automation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Harness the Power of Artificial Intelligence
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Transform your business with cutting-edge AI solutions including machine learning, natural language processing, 
              computer vision, and predictive analytics. Our expert team delivers intelligent systems that drive innovation and growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Get AI Consultation
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/demo" 
                className="group border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                View AI Demo
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-cyan-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 bg-pink-500 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI expertise across multiple domains to solve your most complex challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-r ${capability.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className={`group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 relative ${service.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        <StarIcon className="w-4 h-4" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-purple-400 font-semibold">{service.category}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <CurrencyDollarIcon className="w-5 h-5 text-green-400" />
                        <span className="text-2xl font-bold text-white">{service.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <ClockIcon className="w-4 h-4" />
                        <span className="text-sm">{service.implementation}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <CheckIcon className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-semibold text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                    <Link 
                      to={`/demo?service=${service.id}`} 
                      className="w-full border border-purple-400 text-purple-300 py-3 rounded-lg font-semibold text-center hover:bg-purple-400 hover:text-white transition-all duration-300"
                    >
                      View Demo
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our AI solutions are built by experts with deep industry knowledge and cutting-edge technology expertise
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CpuChipIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Expert AI Team</h3>
                <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise Ready</h3>
                <p className="text-gray-300">Scalable, secure, and compliant solutions for enterprise environments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Proven Results</h3>
                <p className="text-gray-300">Average 40% efficiency improvement and 60% cost reduction for our clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let's discuss how AI can revolutionize your business operations and drive unprecedented growth
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <PhoneIcon className="w-6 h-6 text-purple-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <EnvelopeIcon className="w-6 h-6 text-purple-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 text-gray-300">
                <MapPinIcon className="w-6 h-6 text-purple-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get AI Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}