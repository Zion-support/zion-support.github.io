import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { 
  CpuChipIcon,
=======
import { CpuChipIcon,
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ArrowRightIcon,
<<<<<<< HEAD
  CheckCircleIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
=======
  CheckCircleIcon } from '@heroicons/react/24/outline';

export default function AISolutionsPage() { const aiServices = [
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
    {
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: [
        "Custom algorithm development",
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment"
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,500/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection"],
      href: "/ai-machine-learning" },
    { title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: [
        "Text analysis and processing",
        "Sentiment analysis",
<<<<<<< HEAD
        "Text classification",
=======
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
        "Language translation",
        "Chatbot development",
        "Voice recognition",
        "Document summarization"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,800/month",
      benefits: ["Multi-language support", "Real-time processing", "High accuracy"],
<<<<<<< HEAD
      useCases: ["Customer support", "Content analysis", "Language translation"],
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision",
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: [
        "Object detection",
        "Image classification",
        "Facial recognition",
        "OCR (Optical Character Recognition)",
        "Video analysis",
        "Real-time processing"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $4,200/month",
      benefits: ["High accuracy", "Real-time processing", "Custom models"],
      useCases: ["Quality control", "Security systems", "Medical imaging"],
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.",
      icon: ChartBarIcon,
      features: [
        "Time series forecasting",
        "Demand prediction",
        "Risk assessment",
        "Trend analysis",
        "Anomaly detection",
        "Performance optimization"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,000/month",
      benefits: ["Accurate forecasts", "Real-time insights", "Custom models"],
      useCases: ["Sales forecasting", "Risk management", "Inventory optimization"],
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Intelligent routing",
        "Decision automation",
        "Resource optimization",
        "Performance monitoring"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Increased efficiency", "Cost reduction", "Error reduction"],
      useCases: ["Business processes", "Customer service", "Data processing"],
      href: "/ai-automation"
    },
    {
      title: "AI Consulting",
      description: "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions.",
      icon: LightBulbIcon,
      features: [
        "AI strategy development",
        "Technology assessment",
        "Implementation planning",
        "ROI analysis",
        "Change management",
        "Training and support"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,500/month",
      benefits: ["Expert guidance", "Strategic planning", "Risk mitigation"],
      useCases: ["AI transformation", "Technology adoption", "Process improvement"],
      href: "/ai-consulting"
    }
=======
      useCases: ["Customer service", "Content analysis", "Language translation"],
      href: "/ai-nlp" },
    { title: "Computer Vision",
      description: "Image and video analysis solutions for object detection, facial recognition, and visual content understanding.",
      icon: EyeIcon,
      features: [
        "Object detection and recognition",
        "Facial recognition",
        "Image classification",
        "Video analysis",
        "OCR (Optical Character Recognition)",
        "Medical imaging analysis"
      ],
      color: "from-green-500 to-teal-500",
      price: "Starting at $4,200/month",
      benefits: ["High accuracy", "Real-time processing", "Custom models"],
      useCases: ["Security systems", "Medical diagnosis", "Quality control"],
      href: "/ai-computer-vision" },
    { title: "Predictive Analytics",
      description: "Data-driven insights and predictions to help businesses make informed decisions and optimize operations.",
      icon: DocumentTextIcon,
      features: [
        "Data analysis and visualization",
        "Predictive modeling",
        "Trend analysis",
        "Risk assessment",
        "Performance optimization",
        "Custom dashboards"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $3,000/month",
      benefits: ["Data-driven insights", "Accurate predictions", "Real-time analytics"],
      useCases: ["Business intelligence", "Risk management", "Operational optimization"],
      href: "/ai-predictive-analytics" },
    { title: "AI Automation",
      description: "Intelligent automation solutions to streamline business processes and reduce manual work.",
      icon: LightBulbIcon,
      features: [
        "Process automation",
        "Workflow optimization",
        "Task automation",
        "Data processing",
        "Report generation",
        "System integration"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Increased efficiency", "Reduced errors", "Cost savings"],
      useCases: ["Business process automation", "Data processing", "Workflow optimization"],
      href: "/ai-automation" }
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
  ];

  const benefits = [
    "Increased efficiency and productivity",
    "Reduced operational costs",
    "Improved decision making",
    "Enhanced customer experience",
    "Scalable solutions",
    "24/7 support and monitoring"
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name="description" content="Advanced AI solutions including machine learning, natural language processing, computer vision, and automation services." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, AI automation, artificial intelligence" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text">
              AI Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              From machine learning models to conversational AI, our comprehensive AI solutions 
              help businesses automate processes, gain insights, and deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
=======
  const industries = [
    "Healthcare",
    "Finance",
    "E-commerce",
    "Manufacturing",
    "Education",
    "Retail"
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group | Advanced Artificial Intelligence</title>
        <meta name="description" content="Comprehensive AI solutions including machine learning, NLP, computer vision, and predictive analytics. Transform your business with cutting-edge artificial intelligence." />
        <meta name="keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, artificial intelligence, automation" />
        <meta property="og:title" content="AI Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with advanced AI solutions and artificial intelligence technologies." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we deliver AI that works.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  View Solutions
                </button>
              </div>
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* AI Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI solutions designed to solve complex business challenges.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold mb-2">{service.price}</div>
=======
        { /* Services Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our AI Solutions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to solve real business challenges
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              { aiServices.map((service, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start mb-6">
                    <div className={ `p-3 rounded-lg bg-gradient-to-r ${service.color } mr-4`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{ service.title }</h3>
                      <p className="text-gray-300 mb-4">{ service.description }</p>
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{ service.price }</div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      { service.features.map((feature, featureIndex) => (
                        <li key={featureIndex } className="flex items-center text-gray-300 text-sm">
                          <CheckCircleIcon className="w-4 h-4 text-cyan-400 mr-2" />
                          { feature }
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
                    <div className="flex flex-wrap gap-2">
                      { service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex } className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                          { benefit }
                        </span>
                      ))}
                    </div>
                  </div>
<<<<<<< HEAD
=======
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      { service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex } className="bg-purple-400/20 text-purple-400 px-3 py-1 rounded-full text-sm">
                          { useCase }
                        </span>
                      ))}
                    </div>
                  </div>
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
                  
                  <Link 
                    to={ service.href }
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Learn More
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
=======
        { /* Benefits Section */ }
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of artificial intelligence in your business
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              { benefits.map((benefit, index) => (
                <div key={index } className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <CheckCircleIcon className="w-6 h-6 text-cyan-400 mr-4 flex-shrink-0" />
                  <span className="text-white">{ benefit }</span>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss how our AI solutions can transform your business and give you a competitive edge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your AI Journey
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/case-studies"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Case Studies
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutionsPage;
=======
        { /* Industries Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are trusted across various industries
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              { industries.map((industry, index) => (
                <div key={index } className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{ industry }</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        { /* CTA Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business with AI?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get started with our AI solutions and experience the future of business intelligence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
>>>>>>> 0030dc29551cef3d712867a05efd73f15c1feb05
