import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Brain, 
  BarChart3, 
  Shield, 
  Zap, 
  Users, 
  Code,
  Mail,
  Database,
  Globe,
  Target,
  Sparkles,
  Rocket,
  Award,
  Clock,
  Lock,
  TrendingUp,
  MessageSquare,
  Image,
  FileText,
  Search,
  Bot,
  Cpu,
  Eye,
  Mic,
  Camera
} from "lucide-react";

const AIServices = () => {
  const [activeTab, setActiveTab] = useState('all');

  const aiServices = [
    {
      id: 'ai-analytics-pro',
      name: 'AI Analytics Pro',
      description: 'Advanced AI-powered business intelligence with predictive analytics, automated insights, and real-time dashboards',
      price: 'From $299/month',
      features: ['Predictive analytics', 'Automated insights', 'Real-time dashboards', 'Natural language queries', 'Custom models'],
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'analytics',
      popular: true,
      link: '/ai-analytics-dashboard-pro',
      benefits: ['60% faster insights', 'Predictive accuracy', 'Automated reporting', 'ROI optimization'],
      technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'TensorFlow']
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Revolutionary AI content creation platform for blogs, social media, marketing materials, and technical documentation',
      price: 'From $199/month',
      features: ['Multi-format content', 'SEO optimization', 'Brand voice training', 'Plagiarism detection', 'Multi-language support'],
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'content',
      popular: true,
      link: '/ai-content-generator',
      benefits: ['10x content output', 'SEO optimized', 'Brand consistent', 'Multi-platform ready'],
      technologies: ['GPT-4', 'BERT', 'Transformer', 'NLP', 'Content Analysis']
    },
    {
      id: 'ai-cybersecurity-suite',
      name: 'AI Cybersecurity Suite',
      description: 'Next-generation AI-powered security platform with threat detection, behavioral analysis, and automated response',
      price: 'From $399/month',
      features: ['Threat detection', 'Behavioral analysis', 'Automated response', 'Zero-day protection', 'Compliance monitoring'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'security',
      popular: true,
      link: '/ai-cybersecurity-suite-pro',
      benefits: ['99.9% threat detection', 'Real-time protection', 'Automated response', 'Compliance ready'],
      technologies: ['Deep Learning', 'Anomaly Detection', 'SIEM', 'EDR', 'Behavioral Analytics']
    },
    {
      id: 'ai-customer-support',
      name: 'AI Customer Support',
      description: 'Intelligent customer service platform with chatbots, sentiment analysis, and automated ticket routing',
      price: 'From $249/month',
      features: ['AI chatbots', 'Sentiment analysis', 'Ticket routing', 'Knowledge base', 'Multi-channel support'],
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      category: 'customer',
      popular: false,
      link: '/ai-customer-support-chatbot',
      benefits: ['24/7 availability', 'Instant responses', 'Customer satisfaction', 'Cost reduction'],
      technologies: ['NLP', 'Sentiment Analysis', 'Chatbots', 'Machine Learning', 'API Integration']
    },
    {
      id: 'ai-code-assistant',
      name: 'AI Code Assistant',
      description: 'Advanced AI-powered coding assistant with code generation, debugging, optimization, and documentation',
      price: 'From $179/month',
      features: ['Code generation', 'Debugging assistance', 'Code optimization', 'Documentation', 'Multi-language support'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      category: 'development',
      popular: true,
      link: '/ai-code-assistant-pro',
      benefits: ['50% faster coding', 'Bug reduction', 'Code quality', 'Learning acceleration'],
      technologies: ['Codex', 'GitHub Copilot', 'Static Analysis', 'Code Generation', 'ML Models']
    },
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Comprehensive AI-driven BI platform with automated reporting, trend analysis, and strategic insights',
      price: 'From $349/month',
      features: ['Automated reporting', 'Trend analysis', 'Strategic insights', 'Data visualization', 'Forecasting'],
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'analytics',
      popular: false,
      link: '/ai-business-intelligence-pro',
      benefits: ['Data-driven decisions', 'Automated insights', 'Strategic planning', 'Competitive advantage'],
      technologies: ['Machine Learning', 'Data Mining', 'Predictive Analytics', 'Big Data', 'Cloud Computing']
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced image and video analysis platform with object detection, facial recognition, and visual search',
      price: 'From $279/month',
      features: ['Object detection', 'Facial recognition', 'Visual search', 'Image classification', 'Video analysis'],
      icon: <Eye className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'vision',
      popular: false,
      link: '/ai-computer-vision',
      benefits: ['Visual automation', 'Quality control', 'Security enhancement', 'User experience'],
      technologies: ['CNN', 'OpenCV', 'TensorFlow', 'PyTorch', 'Image Processing']
    },
    {
      id: 'ai-voice-assistant',
      name: 'AI Voice Assistant',
      description: 'Intelligent voice processing platform with speech recognition, natural language understanding, and voice synthesis',
      price: 'From $229/month',
      features: ['Speech recognition', 'Voice synthesis', 'Natural language', 'Multi-language', 'Custom voices'],
      icon: <Mic className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'voice',
      popular: false,
      link: '/ai-voice-assistant',
      benefits: ['Hands-free operation', 'Accessibility', 'User engagement', 'Multilingual support'],
      technologies: ['Speech Recognition', 'Text-to-Speech', 'NLP', 'Voice Cloning', 'Audio Processing']
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation platform for business processes with RPA, workflow optimization, and decision automation',
      price: 'From $199/month',
      features: ['Process automation', 'Workflow optimization', 'Decision automation', 'Integration', 'Monitoring'],
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      category: 'automation',
      popular: true,
      link: '/ai-automation',
      benefits: ['Process efficiency', 'Cost reduction', 'Error elimination', 'Scalable automation'],
      technologies: ['RPA', 'Workflow Engines', 'Decision Trees', 'API Integration', 'Machine Learning']
    },
    {
      id: 'ai-data-analytics',
      name: 'AI Data Analytics',
      description: 'Advanced data analysis platform with machine learning, pattern recognition, and predictive modeling',
      price: 'From $259/month',
      features: ['Data mining', 'Pattern recognition', 'Predictive modeling', 'Statistical analysis', 'Visualization'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      category: 'analytics',
      popular: false,
      link: '/ai-data-analytics',
      benefits: ['Data insights', 'Predictive accuracy', 'Pattern discovery', 'Business intelligence'],
      technologies: ['Machine Learning', 'Statistical Analysis', 'Data Mining', 'Big Data', 'Visualization']
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'analytics').length },
    { id: 'content', name: 'Content', count: aiServices.filter(s => s.category === 'content').length },
    { id: 'security', name: 'Security', count: aiServices.filter(s => s.category === 'security').length },
    { id: 'customer', name: 'Customer', count: aiServices.filter(s => s.category === 'customer').length },
    { id: 'development', name: 'Development', count: aiServices.filter(s => s.category === 'development').length },
    { id: 'vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'vision').length },
    { id: 'voice', name: 'Voice', count: aiServices.filter(s => s.category === 'voice').length },
    { id: 'automation', name: 'Automation', count: aiServices.filter(s => s.category === 'automation').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>AI Services & Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Cutting-edge AI services including machine learning, natural language processing, computer vision, and automation solutions. Transform your business with artificial intelligence."
        />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, NLP, computer vision, automation, AI solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                AI Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business. 
              From machine learning to computer vision, we provide cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Try AI Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-gray-300">AI Models</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">95%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">10x</div>
                <div className="text-gray-300">Performance Boost</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-purple-400">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <Sparkles className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-pink-400">AI Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Explore AI Solution
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Capabilities Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our AI Solutions?
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Our AI services are built on cutting-edge technology and designed to deliver measurable business value.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Advanced AI</h3>
                <p className="text-gray-300 text-sm">Latest machine learning models and algorithms</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Fast Implementation</h3>
                <p className="text-gray-300 text-sm">Quick deployment and integration</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-300 text-sm">Enterprise-grade security and reliability</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300 text-sm">Measurable business impact and ROI</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-gray-300 mb-8">
              Join the AI revolution and discover how artificial intelligence can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Start AI Consultation
                <Brain className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                View AI Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServices;