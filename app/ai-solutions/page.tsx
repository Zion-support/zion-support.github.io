import React from 'react'
import { Helmet  } from 'react-helmet-async'
import { Link  } from 'react-router-dom'
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
  LightBulbIcon
} from '@heroicons/react/24/outline'
export default function AISolutionsPage() {
  const aiServices = [{]      title: "Machine Learning Models,
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon", "
      features: [Custom algorithm development","]        "Real-time model training", "
        "A/B testing framework, ""
        Model performance monitoring", "
        "Automated retraining", "
        "Edge deployment""
      ],
      color: from-purple-50 to-pink-50",
      price: "Starting at $3,50o0/month,
      benefits: ["95% accuracy", Real-time processing", "Custom algorithms],""
      useCases: [Predictive analytics", "Recommendation engines, "Fraud detection"],"
      href: "/ai-machine-learning"
    },
    {
      title: "Natural Language Processing,
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon", "
      features: [Sentiment analysis","]        "Text classification", "
        "Language translation, ""
        Named entity recognition", "
        "Text summarization", "
        "Conversational AI""
      ],
      color: from-blue-50 to-cyan-50",
      price: "Starting at $2,80o0/month,
      benefits: ["Multi-language support", Real-time processing", "High accuracy],""
      useCases: [Customer support", "Content analysis, "Language translation"],"
      href: "/ai-nlp"
    },
    {
      title: "Computer Vision,
      description: "Advanced computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon", "
      features: [Image classification","]        "Object detection", "
        "Facial recognition, ""
        OCR (Optical Character Recognition)", "
        "Video analysis", "
        "Real-time processing""
      ],
      color: from-green-50 to-emerald-50",
      price: "Starting at $4,20o0/month,
      benefits: ["High accuracy", Real-time processing", "Custom models],""
      useCases: [Quality control", "Security systems, "Medical imaging"],"
      href: "/ai-computer-vision"
    },
    {
      title: "Predictive Analytics,
      description: "Data-driven predictions and forecasting using advanced machine learning algorithms and statistical models.",
      icon: ChartBarIcon", "
      features: [Time series forecasting","]        "Demand prediction", "
        "Risk assessment, ""
        Trend analysis", "
        "Anomaly detection", "
        "Performance optimization""
      ],
      color: from-orange-50 to-red-50",
      price: "Starting at $3,0o00/month,
      benefits: ["Accurate forecasts", Real-time insights", "Custom models],""
      useCases: [Sales forecasting", "Risk management, "Inventory optimization"],"
      href: "/ai-predictive-analytics"
    },
    {
      title: "AI Automation,
      description: "Intelligent automation solutions that streamline business processes and reduce manual work.",
      icon: CogIcon", "
      features: [Process automation","]        "Workflow optimization", "
        "Intelligent routing, ""
        Decision automation", "
        "Resource optimization", "
        "Performance monitoring""
      ],
      color: from-indigo-50 to-purple-50",
      price: "Starting at $2,50o0/month,
      benefits: ["Increased efficiency", Cost reduction", "Error reduction],""
      useCases: [Business processes", "Customer service, "Data processing"],"
      href: "/ai-automation"
    },
    {title: "AI Consulting,
      description: "Strategic AI consulting to help you identify opportunities, develop roadmaps, and implement AI solutions.",
      icon: LightBulbIcon", "
      features: [AI strategy development","]        "Technology assessment", "
        "Implementation planning, ""
        ROI analysis", "
        "Change management", "
        "Training and support""
      ],
      color: from-cyan-500 to-blue-500",
      price: "Starting at ,500/month,
      benefits: ["Expert guidance", Strategic planning", "Risk mitigation],""
      useCases: [AI transformation", "Technology adoption, "Process improvement"],"
      href: "/ai-consulting"}
  ]
const AISolutionsPage: React.FC = () => {
  ]
  const features = [{]      title: "Custom AI Solutions,
      description: "Tailored AI implementations designed specifically for your business needs and requirements.",
      icon: CpuChipIcon},
    {
      title: Scalable Architecture",
      description: "AI solutions that grow with your business and handle increasing data volumes and complexity.,
      icon: CloudIcon},
    {
      title: "Real-time Processing",
      description: High-performance AI systems that process data in real-time for immediate insights and actions.",
      icon: RocketLaunchIcon},
    {title: "Expert Support,
      description: "Dedicated AI experts who provide ongoing support, monitoring, and optimization of your AI systems.",
      icon: UserGroupIcon}
  ]
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>
        <meta name=description" content="Explore our advanced AI solutions including machine learning, natural language processing, and predictive analytics. />"
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-90 via-purple-90o0 to-slate-90>"
        <div className="container mx-auto px-4>"
          <div className="max-w-4xl mx-auto text-center>"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 gradient-text neon-text>"
              AI Solutions
            </h1>
            <p className="text-xl text-gray-30 mb-8 leading-relaxed>"
              Transform your business with cutting-edge artificial intelligence solutions
            </p>
            <p className="text-lg text-gray-40 max-w-3xl mx-auto>"
              From machine learning models to conversational AI, our comprehensive AI solutions
              help businesses automate processes, gain insights, and deliver exceptional customer experiences.
            </p></div>
        </div></section>
      {/* AI Services Grid */}
      <section className="py-20 bg-slate-90>"
        <div className="container mx-auto px-4>;"
          <div className="grid md: grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto>;"
            {aiServices.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="group bg-gradient-to-br from-slate-80 to-slate-70 p-8 rounded-xl border border-slate-60 hover:border-purple-50 transition-all duration-30o0 hover-lift hover-glow glass-dark>"
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover: "scale-110 transition-transform floating`}>"```                    <Icon className="w-8 h-8 text-white />"
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 gradient-text>{service.title}</h3>"
                  <p className="text-gray-30 mb-6 leading-relaxed>"
                    {service.description}
                  </p>
                  {/* Pricing */}
                  <div className="mb-6>"
                    <span className="text-3xl font-bold text-green-40>{service.price}</span>"
                  </div>
                  {/* Features */}
                  <div className="mb-6>"
                    <h4 className="text-sm font-semibold text-gray-40 mb-3>Key Features: "</h4>", 
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-30">
                          <CheckCircleIcon className="w-4 h-4 text-green-40 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul></div>
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-2">Benefits: </h4>", "
                      {service.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className=text-xs bg-green-90"/30 text-green-30 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div></div>
                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-40 mb-2">Perfect for: </h4>", "
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className=text-xs bg-blue-90"/30 text-blue-30 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div></div>
                  <div className="flex gap-2">
                    <Link>
                      to={service.href}
                      className="flex-1 inline-flex items-center justify-center gap-2 text-purple-40 hover: text-purple-30 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg hove,r:bg-purple-40"/10"
                    >
                      Learn More <ArrowRightIcon className="w-4 h-4 />"
                    </Link>
                    <Link>
                      to="/contact""
                      className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-4 py-2 rounded-lg hover: from-purple-70 hove,r:to-cyan-70 transition-all duration-30o0 font-semibold"
                    >
                      Get Started
                    </Link></div></div>);)}
          </div></div>
      </section>
      {/* Why Choose Our AI Solutions */}
      <section className="py-20 bg-gradient-to-r from-slate-90 to-purple-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-scale performance
            </p></div>
          <div className="grid md: grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CpuChipIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Advanced Algorithms</h3>
              <p className="text-gray-30">
                State-of-the-art AI algorithms and models trained on massive datasets for superior performance.
              </p></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ClockIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Real-time Processing</h3>
              <p className="text-gray-30">
                Lightning-fast AI processing with sub-second response times for real-time applications.
              </p></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-30">
                Bank-level security with encryption, compliance, and privacy protection built-in.
              </p></div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CogIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Custom Solutions</h3>
              <p className="text-gray-30">
                Tailored AI solutions designed specifically for your business needs and use cases.
              </p></div>
          </div></div>
      </section>
      {/* AI Implementation Process */}
      <section className="py-20 bg-slate-90">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-30 max-w-3xl mx-auto">
              A proven methodology for successful AI implementation and deployment
            </p></div>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Discovery & Analysis</h3>
              <p className="text-gray-30">
                We analyze your business processes, data, and requirements to identify AI opportunities.
              </p></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
              <p className="text-gray-30">
                We design custom AI solutions tailored to your specific needs and business objectives.
              </p></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Development & Training</h3>
              <p className="text-gray-30">
                Our AI experts develop and train models using your data for optimal performance.
              </p></div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Deployment & Support</h3>
              <p className="text-gray-30">
                We deploy your AI solution and provide ongoing support, monitoring, and optimization.
              </p></div>
          </div></div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-90 to-purple-90">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-30 mb-12>"              Let's discuss how our AI solutions can transform your business and drive innovation'
            </p>
            <div className=flex flex-col sm:flex-row gap-4 justify-center mb-12">"
              <Link>
                to="/contact""
                className="bg-gradient-to-r from-purple-60 to-cyan-60 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-70 hover:to-cyan-70 transition-all duration-30o0 transform hove,r:scale-10o5 flex items-center justify-center gap-2"
              >
                Get Free AI Consultation
                <ArrowRightIcon className="w-5 h-5 />"
              </Link>
              <Link>
                to="/demo""
                className="border-2 border-purple-40 text-purple-30 px-8 py-4 rounded-lg font-semibold hover: bg-purple-40 hove,r:text-white transition-all duration-30o0 flex items-center justify-center gap-2"
              >
                Schedule AI Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link></div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-30">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-purple-40" />
                <span>+1-30o2-464-0o950</span></div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-purple-40" />
                <span>kleber@ziontechgroup.com</span></div>
            </div></div>
        </div></section></>
      </section>
    </>
  );
}
export default AISolutionsPage;
        <meta name="description" content=Comprehensive AI solutions including machine learning, NLP, computer vision, and predictive analytics." />"
        <meta name=keywords" content="AI solutions, machine learning, NLP, computer vision, predictive analytics, AI consulting />"
      </Helmet>
      <div className="min-h-screen bg-slate-90>"
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: px-6 lg:px-8>"
          <div className="max-w-7xl mx-auto text-center>"
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>"
              AI Solutions
            </h1>
            <p className="text-xl text-gray-30 mb-8 max-w-3xl mx-auto>"
              Transform your business with cutting-edge artificial intelligence solutions.
              From machine learning to computer vision, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center>"
              <button className="bg-gradient-to-r from-purple-60 to-cyan-60 hover: from-purple-70 hover:to-cyan-70 text-white font-bold py-3 px-8 rounded-lg transition-all duration-30o0 transform hove,r:scale-10o5>"
                Get Started
              </button>
              <button className="border border-purple-50 text-purple-40 hover: bg-purple-50 hove,r:text-white font-bold py-3 px-8 rounded-lg transition-all duration-30o0>"
                Learn More
              </button></div>
          </div></section>
        {/* Services Grid */}
        <section className="py-20 px-4 sm: px-6 lg:px-8>"
          <div className="max-w-7xl mx-auto>"
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12>"
              Our AI Solutions
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8>"
              {aiServices.map((service, index) => (
                <div key={index} className="bg-slate-80 rounded-lg p-6 hover: bg-slate-70 transition-all duration-30o0 transform hove,r:scale-10o5>"
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>```                    <service.icon className="w-6 h-6 text-white />"
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3>{service.title}</h3>"
                  <p className="text-gray-30 mb-4>{service.description}</p>"
                  <div className="mb-4>"
                    <p className="text-purple-40 font-semibold>{service.price}</p>"
                  </div>
                  <Link>
                    to={service.href}
                    className="text-purple-40 hover:text-purple-30 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1 />"
                  </Link></div>
              ))}
            </div></div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-80>"
          <div className="max-w-7xl mx-auto>"
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12>"
              Why Choose Our AI Solutions?
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8>"
              {features.map((feature, index) => (
                <div key={index} className="text-center>"
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-50 to-cyan-50 rounded-lg flex items-center justify-center mb-4>"
                    <feature.icon className="w-8 h-8 text-white />"
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3>{feature.title}</h3>"
                  <p className="text-gray-30>{feature.description}</p>"
                </div>
              ))}
            </div></div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8>"
          <div className="max-w-4xl mx-auto text-center>"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6>"
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-30 mb-8>              Let's discuss how our AI solutions can help you achieve your goals.'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-60 to-cyan-60 hover: from-purple-70 hover:to-cyan-70 text-white font-bold py-3 px-8 rounded-lg transition-all duration-30o0 transform hove,r:scale-10o5">
                Schedule Consultation
              </button>
              <button className="border border-purple-50 text-purple-40 hover: bg-purple-50 hove,r:text-white font-bold py-3 px-8 rounded-lg transition-all duration-30o0">"
                View Portfolio
              </button></div>
          </div></section>
      </div>
    </>
  )}