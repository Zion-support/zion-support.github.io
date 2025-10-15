import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Brain, 
  BarChart3, 
  Users, 
  CheckCircle, 
  Smartphone, 
  Globe, 
  Database, 
  Zap, 
  Shield, 
  Lock, 
  ArrowRight, 
  Star, 
  Award, 
  TrendingUp, 
  Target, 
  Rocket,
  Cpu,
  Eye,
  MessageSquare,
  BarChart,
  Cloud,
  Settings,
  Lightbulb,
  Target as TargetIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon
} from 'lucide-react';

const AISolutionsPage: React.FC = () => {
  const aiServices = [
    {
      name: "Machine Learning Platform",
      description: "Comprehensive ML platform for building, training, and deploying custom machine learning models at scale.",
      price: "Starting at $3,000/month",
      features: [
        "Custom model development",
        "Data preprocessing pipelines",
        "Model training infrastructure",
        "Automated model deployment",
        "Performance monitoring",
        "A/B testing framework",
        "Model versioning",
        "Real-time inference"
      ],
      icon: Brain,
      category: "Machine Learning",
      complexity: "Advanced",
      link: "/ai-ml-platform",
      popular: true
    },
    {
      name: "Computer Vision Solutions",
      description: "Advanced image and video analysis solutions for object detection, recognition, and visual intelligence.",
      price: "Starting at $2,200/month",
      features: [
        "Object detection and classification",
        "Facial recognition systems",
        "Quality inspection automation",
        "Real-time video analysis",
        "Custom model training",
        "Edge deployment",
        "API integration",
        "Performance optimization"
      ],
      icon: Eye,
      category: "Computer Vision",
      complexity: "Advanced",
      link: "/ai-computer-vision"
    },
    {
      name: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding services for business intelligence.",
      price: "Starting at $1,800/month",
      features: [
        "Text classification and categorization",
        "Sentiment analysis",
        "Language translation",
        "Chatbot development",
        "Document processing",
        "Entity extraction",
        "Text summarization",
        "Multi-language support"
      ],
      icon: MessageSquare,
      category: "NLP",
      complexity: "Intermediate",
      link: "/ai-nlp"
    },
    {
      name: "Predictive Analytics",
      description: "Data-driven insights and forecasting solutions for business optimization and decision making.",
      price: "Starting at $2,500/month",
      features: [
        "Demand forecasting",
        "Risk assessment models",
        "Customer behavior analysis",
        "Market trend prediction",
        "Anomaly detection",
        "Time series analysis",
        "Custom dashboards",
        "Real-time alerts"
      ],
      icon: BarChart,
      category: "Analytics",
      complexity: "Advanced",
      link: "/ai-predictive-analytics",
      popular: true
    },
    {
      name: "AI Automation Suite",
      description: "Comprehensive automation platform using AI to streamline business processes and workflows.",
      price: "Starting at $2,000/month",
      features: [
        "Process automation",
        "Workflow optimization",
        "Document processing",
        "Email automation",
        "Data entry automation",
        "Report generation",
        "Integration capabilities",
        "Custom automation rules"
      ],
      icon: Zap,
      category: "Automation",
      complexity: "Intermediate",
      link: "/ai-automation-suite"
    },
    {
      name: "AI Cybersecurity Suite",
      description: "Advanced AI-powered security solutions for threat detection, prevention, and response.",
      price: "Starting at $3,500/month",
      features: [
        "Threat detection and analysis",
        "Anomaly detection",
        "Automated incident response",
        "Security monitoring",
        "Vulnerability assessment",
        "Compliance reporting",
        "Real-time alerts",
        "Integration with SIEM"
      ],
      icon: Shield,
      category: "Security",
      complexity: "Advanced",
      link: "/ai-cybersecurity-suite"
    },
    {
      name: "AI Healthcare Solutions",
      description: "Specialized AI solutions for healthcare including diagnostics, patient monitoring, and treatment optimization.",
      price: "Starting at $4,000/month",
      features: [
        "Medical image analysis",
        "Diagnostic assistance",
        "Patient monitoring",
        "Treatment recommendations",
        "Drug discovery support",
        "Clinical trial optimization",
        "HIPAA compliance",
        "Integration with EHR systems"
      ],
      icon: Users,
      category: "Healthcare",
      complexity: "Advanced",
      link: "/ai-healthcare-solutions"
    },
    {
      name: "AI Financial Services",
      description: "AI-powered financial solutions for fraud detection, risk management, and algorithmic trading.",
      price: "Starting at $2,800/month",
      features: [
        "Fraud detection and prevention",
        "Credit risk assessment",
        "Algorithmic trading",
        "Portfolio optimization",
        "Regulatory compliance",
        "Real-time monitoring",
        "Risk modeling",
        "Financial forecasting"
      ],
      icon: BarChart3,
      category: "Finance",
      complexity: "Advanced",
      link: "/ai-financial-services"
    }
  ];

  const industries = [
    { name: "Healthcare", icon: Users, count: 12 },
    { name: "Finance", icon: BarChart3, count: 15 },
    { name: "Manufacturing", icon: Settings, count: 8 },
    { name: "Retail", icon: Smartphone, count: 10 },
    { name: "Education", icon: Lightbulb, count: 6 },
    { name: "Government", icon: Shield, count: 4 }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning",
      description: "Custom ML model development and deployment",
      icon: Brain,
      features: ["Deep Learning", "Neural Networks", "Reinforcement Learning", "Transfer Learning"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions",
      icon: Eye,
      features: ["Object Detection", "Image Classification", "Facial Recognition", "Video Analytics"]
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis and language understanding",
      icon: MessageSquare,
      features: ["Text Classification", "Sentiment Analysis", "Language Translation", "Chatbots"]
    },
    {
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting",
      icon: BarChart,
      features: ["Time Series Analysis", "Forecasting", "Anomaly Detection", "Risk Assessment"]
    },
    {
      title: "AI Automation",
      description: "Intelligent process automation",
      icon: Zap,
      features: ["Workflow Automation", "Document Processing", "Email Automation", "Data Entry"]
    },
    {
      title: "AI Security",
      description: "AI-powered cybersecurity solutions",
      icon: Shield,
      features: ["Threat Detection", "Anomaly Detection", "Incident Response", "Compliance"]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Solutions - Zion Tech Group | Advanced Artificial Intelligence Services"
        description="Transform your business with our cutting-edge AI solutions. Machine learning, computer vision, NLP, predictive analytics, and automation services. Custom AI development for enterprise."
        keywords="ai solutions, machine learning, computer vision, nlp, predictive analytics, ai automation, artificial intelligence, ai development, ai consulting"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Solutions
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                for Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to computer vision, we deliver AI that drives real results.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore AI Solutions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Get AI Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Model Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive AI solutions cover all major artificial intelligence domains, 
              from machine learning to computer vision and natural language processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    <p className="text-gray-300 text-sm">{capability.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs. 
              From custom model development to complete AI transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-xl relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                        <span className="bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-400">Complexity:</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      service.complexity === 'Advanced' 
                        ? 'bg-red-900 text-red-300' 
                        : service.complexity === 'Intermediate'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-green-900 text-green-300'
                    }`}>
                      {service.complexity}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/contact"
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are trusted by leading organizations across various industries, 
              delivering measurable results and competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-cyan-400 font-bold">{industry.count} Solutions</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Development Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver AI solutions that meet your business objectives 
              and deliver measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TargetIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Discovery</h3>
              <p className="text-gray-300">We analyze your business needs and identify AI opportunities for maximum impact.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Design</h3>
              <p className="text-gray-300">We design custom AI solutions tailored to your specific requirements and constraints.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Development</h3>
              <p className="text-gray-300">Our expert team develops and trains AI models using cutting-edge technologies.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">4. Deployment</h3>
              <p className="text-gray-300">We deploy your AI solution with full monitoring and ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Solutions */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine deep AI expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">PhD-level AI researchers and engineers with 10+ years of experience.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">100+ successful AI implementations with measurable ROI and business impact.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with compliance, encryption, and data protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">AI solutions that grow with your business from startup to enterprise scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Transform your business with our advanced AI solutions. Get a free consultation and custom AI strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free AI Consultation
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsPage;