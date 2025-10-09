import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, CheckCircle, Star, 
  TrendingUp, Building, Clock, Phone, Mail, MapPin, Target, Globe, Database, 
  Smartphone, Lock, Settings, FileText, Search, Bot, Palette, Camera, Music, 
  Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, 
  Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, 
  Activity, DollarSign, Eye, MessageSquare, Package, Truck, PenTool, Network
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      title: 'AI-Powered Business Intelligence',
      description: 'Transform raw data into actionable insights with advanced AI analytics and predictive modeling.',
      icon: BarChart,
      price: 'Starting at $299/month',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Automated reporting',
        'Custom dashboards',
        'Machine learning models',
        'Natural language queries'
      ],
      benefits: [
        'Increase decision speed by 400%',
        'Reduce manual analysis by 90%',
        'Improve accuracy by 95%',
        'Generate 10x more insights'
      ],
      useCases: ['Enterprise Analytics', 'Financial Services', 'Healthcare', 'Manufacturing'],
      link: '/ai-services/business-intelligence'
    },
    {
      title: 'Intelligent Document Processing',
      description: 'AI-powered document analysis, extraction, and workflow automation for maximum efficiency.',
      icon: FileText,
      price: 'Starting at $199/month',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data validation',
        'Workflow automation',
        'Compliance checking',
        'Multi-format support'
      ],
      benefits: [
        'Process documents 15x faster',
        'Reduce errors by 98%',
        'Save 30+ hours weekly',
        'Improve compliance by 100%'
      ],
      useCases: ['Legal Firms', 'Accounting', 'Insurance', 'Healthcare'],
      link: '/ai-services/document-processing'
    },
    {
      title: 'AI Customer Experience Platform',
      description: 'Revolutionize customer interactions with AI-powered chatbots, voice assistants, and sentiment analysis.',
      icon: MessageSquare,
      price: 'Starting at $149/month',
      features: [
        'Intelligent chatbots',
        'Voice recognition',
        'Sentiment analysis',
        'Multi-language support',
        'Emotion detection',
        'Personalized responses'
      ],
      benefits: [
        'Improve satisfaction by 60%',
        'Reduce response time by 85%',
        'Increase conversion by 45%',
        'Handle 20x more inquiries'
      ],
      useCases: ['E-commerce', 'SaaS Platforms', 'Healthcare', 'Financial Services'],
      link: '/ai-services/customer-experience'
    },
    {
      title: 'Predictive Maintenance AI',
      description: 'Prevent equipment failures with AI-powered predictive maintenance and anomaly detection.',
      icon: Wrench,
      price: 'Starting at $399/month',
      features: [
        'Equipment monitoring',
        'Failure prediction',
        'Maintenance scheduling',
        'Anomaly detection',
        'Cost optimization',
        'IoT integration'
      ],
      benefits: [
        'Reduce downtime by 70%',
        'Cut maintenance costs by 50%',
        'Extend equipment life by 40%',
        'Prevent 95% of failures'
      ],
      useCases: ['Manufacturing', 'Energy', 'Transportation', 'Healthcare'],
      link: '/ai-services/predictive-maintenance'
    },
    {
      title: 'AI-Powered Marketing Automation',
      description: 'Intelligent marketing campaigns with AI-driven personalization and optimization.',
      icon: Target,
      price: 'Starting at $179/month',
      features: [
        'Behavioral analysis',
        'Content personalization',
        'Campaign optimization',
        'A/B testing automation',
        'ROI prediction',
        'Multi-channel management'
      ],
      benefits: [
        'Increase engagement by 300%',
        'Boost conversion by 80%',
        'Reduce costs by 60%',
        'Improve ROI by 250%'
      ],
      useCases: ['E-commerce', 'SaaS Companies', 'Agencies', 'Retail'],
      link: '/ai-services/marketing-automation'
    },
    {
      title: 'Intelligent Supply Chain Optimization',
      description: 'Optimize supply chain operations with AI-powered demand forecasting and logistics management.',
      icon: Truck,
      price: 'Starting at $349/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route optimization',
        'Supplier management',
        'Risk assessment',
        'Cost analysis'
      ],
      benefits: [
        'Reduce costs by 35%',
        'Improve efficiency by 60%',
        'Reduce stockouts by 90%',
        'Optimize routes by 40%'
      ],
      useCases: ['Logistics', 'Retail', 'Manufacturing', 'E-commerce'],
      link: '/ai-services/supply-chain'
    },
    {
      title: 'AI-Powered Fraud Detection',
      description: 'Advanced fraud prevention with real-time AI analysis and behavioral pattern recognition.',
      icon: Shield,
      price: 'Starting at $249/month',
      features: [
        'Real-time monitoring',
        'Pattern recognition',
        'Risk scoring',
        'Anomaly detection',
        'Machine learning models',
        'API integration'
      ],
      benefits: [
        'Detect fraud 99.9% accurately',
        'Reduce false positives by 80%',
        'Save millions in losses',
        'Process transactions instantly'
      ],
      useCases: ['Financial Services', 'E-commerce', 'Insurance', 'Gaming'],
      link: '/ai-services/fraud-detection'
    },
    {
      title: 'Intelligent Content Generation',
      description: 'Create high-quality content at scale with AI-powered writing, design, and video generation.',
      icon: PenTool,
      price: 'Starting at $129/month',
      features: [
        'Text generation',
        'Image creation',
        'Video production',
        'Voice synthesis',
        'Brand consistency',
        'Multi-language support'
      ],
      benefits: [
        'Create content 10x faster',
        'Reduce costs by 70%',
        'Improve quality by 85%',
        'Scale content production'
      ],
      useCases: ['Marketing', 'Publishing', 'E-learning', 'Entertainment'],
      link: '/ai-services/content-generation'
    },
    {
      title: 'AI-Powered HR Analytics',
      description: 'Optimize human resources with AI-driven talent acquisition, performance analysis, and retention strategies.',
      icon: Users,
      price: 'Starting at $199/month',
      features: [
        'Resume screening',
        'Performance analysis',
        'Retention prediction',
        'Skill matching',
        'Bias detection',
        'Workforce planning'
      ],
      benefits: [
        'Improve hiring by 60%',
        'Reduce turnover by 40%',
        'Save 25+ hours weekly',
        'Increase diversity by 50%'
      ],
      useCases: ['HR Departments', 'Recruiting', 'Consulting', 'Enterprise'],
      link: '/ai-services/hr-analytics'
    },
    {
      title: 'Intelligent Process Automation',
      description: 'Automate complex business processes with AI-powered workflow optimization and decision making.',
      icon: Settings,
      price: 'Starting at $279/month',
      features: [
        'Process mining',
        'Workflow optimization',
        'Decision automation',
        'Exception handling',
        'Performance monitoring',
        'Continuous improvement'
      ],
      benefits: [
        'Automate 80% of processes',
        'Reduce errors by 95%',
        'Save 40+ hours weekly',
        'Improve efficiency by 200%'
      ],
      useCases: ['Finance', 'Operations', 'Compliance', 'Customer Service'],
      link: '/ai-services/process-automation'
    },
    {
      title: 'AI-Powered Quality Assurance',
      description: 'Ensure product quality with AI-driven testing, inspection, and defect detection systems.',
      icon: Eye,
      price: 'Starting at $229/month',
      features: [
        'Visual inspection',
        'Defect detection',
        'Quality scoring',
        'Predictive quality',
        'Real-time monitoring',
        'Statistical analysis'
      ],
      benefits: [
        'Improve quality by 90%',
        'Reduce defects by 85%',
        'Save 20+ hours weekly',
        'Increase customer satisfaction'
      ],
      useCases: ['Manufacturing', 'Food & Beverage', 'Pharmaceuticals', 'Electronics'],
      link: '/ai-services/quality-assurance'
    },
    {
      title: 'Intelligent Energy Management',
      description: 'Optimize energy consumption with AI-powered monitoring, prediction, and automated control systems.',
      icon: Zap,
      price: 'Starting at $179/month',
      features: [
        'Energy monitoring',
        'Consumption prediction',
        'Automated control',
        'Cost optimization',
        'Carbon tracking',
        'Renewable integration'
      ],
      benefits: [
        'Reduce energy costs by 30%',
        'Improve efficiency by 50%',
        'Cut carbon footprint by 40%',
        'Optimize usage patterns'
      ],
      useCases: ['Buildings', 'Manufacturing', 'Data Centers', 'Utilities'],
      link: '/ai-services/energy-management'
    }
  ];

  const aiTechnologies = [
    {
      name: 'Machine Learning',
      description: 'Advanced algorithms that learn and improve from data',
      icon: Brain,
      applications: ['Predictive Analytics', 'Pattern Recognition', 'Recommendation Systems']
    },
    {
      name: 'Natural Language Processing',
      description: 'AI that understands and processes human language',
      icon: MessageSquare,
      applications: ['Chatbots', 'Text Analysis', 'Language Translation']
    },
    {
      name: 'Computer Vision',
      description: 'AI that interprets and analyzes visual information',
      icon: Eye,
      applications: ['Image Recognition', 'Quality Control', 'Medical Imaging']
    },
    {
      name: 'Deep Learning',
      description: 'Neural networks that mimic human brain functions',
      icon: Network,
      applications: ['Speech Recognition', 'Image Generation', 'Complex Predictions']
    },
    {
      name: 'Reinforcement Learning',
      description: 'AI that learns through trial and error',
      icon: Target,
      applications: ['Game AI', 'Robotics', 'Optimization Problems']
    },
    {
      name: 'Generative AI',
      description: 'AI that creates new content and solutions',
      icon: PenTool,
      applications: ['Content Creation', 'Design Generation', 'Code Writing']
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and intelligent automation for business transformation." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, NLP, computer vision, business intelligence, automation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                AI Services
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Harness the power of artificial intelligence to transform your business operations, 
                automate complex processes, and unlock unprecedented insights from your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get AI Consultation
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </div>
          </section>

          {/* AI Technologies */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge AI technologies to deliver intelligent solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiTechnologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <tech.icon className="w-8 h-8 text-purple-400 mr-3" />
                    <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                    </div>
                  <p className="text-gray-300 mb-4">{tech.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Applications:</h4>
                    <ul className="space-y-1">
                      {tech.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* AI Services Grid */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to solve complex business challenges and drive innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="cyber-card hologram-card p-6 group hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <p className="text-cyan-400 font-semibold text-sm">{service.price}</p>
                    </div>
                  </div>
=======
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                    </ul>
                    
                    <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <TrendingUp className="w-3 h-3 text-purple-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Ideal for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="px-2 py-1 bg-slate-700 text-xs text-gray-300 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
=======
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful AI implementation and maximum ROI.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Discovery & Analysis</h3>
                <p className="text-gray-300">We analyze your business processes and identify AI opportunities</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Strategy & Planning</h3>
                <p className="text-gray-300">Develop a comprehensive AI strategy tailored to your needs</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Development & Testing</h3>
                <p className="text-gray-300">Build and rigorously test AI solutions in controlled environments</p>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Deployment & Support</h3>
                <p className="text-gray-300">Deploy solutions and provide ongoing support and optimization</p>
              </div>
            </div>
          </section>

          {/* Success Metrics */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Proven AI Success Metrics</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our AI implementations consistently deliver measurable results across all industries and use cases.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">400%</div>
                  <div className="text-gray-300">Average Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
                  <div className="text-gray-300">Accuracy Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
                  <div className="text-gray-300">ROI Achievement</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Free AI Assessment
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AIServicesPage;
=======
        </div>
      </>
    );
};

export default AIServicesPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-0133
