import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Brain,
  Zap,
  Target,
  Shield,
  TrendingUp,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Rocket,
  BarChart3,
  Cog,
} from 'lucide-react';

const AISolutions: React.FC = () => {
  const aiServices = [
    {
      icon: Brain,
      title: 'AI Workflow Automation',
      description: 'Automate complex business processes with intelligent AI workflows that adapt and learn.',
      features: ['Process Optimization', 'Smart Routing', 'Predictive Analytics', 'Real-time Decision Making'],
      path: '/services/ai-workflow-automation'
    },
    {
      icon: Users,
      title: 'AI Virtual Assistant',
      description: 'Intelligent virtual assistants that understand context and provide personalized support.',
      features: ['Natural Language Processing', 'Multi-channel Support', '24/7 Availability', 'Continuous Learning'],
      path: '/services/ai-virtual-assistant'
    },
    {
      icon: BarChart3,
      title: 'AI Data Analytics',
      description: 'Transform raw data into actionable insights with advanced AI-powered analytics.',
      features: ['Predictive Modeling', 'Real-time Analysis', 'Automated Reporting', 'Data Visualization'],
      path: '/services/ai-data-analytics'
    },
    {
      icon: Cog,
      title: 'Intelligent Document Processing',
      description: 'Extract, analyze, and process documents with advanced AI and machine learning.',
      features: ['OCR Technology', 'Content Extraction', 'Automated Classification', 'Smart Search'],
      path: '/services/ai-intelligent-document-processing'
    },
    {
      icon: Zap,
      title: 'Real-Time Cognitive Automation',
      description: 'Implement cognitive automation that thinks, learns, and adapts in real-time.',
      features: ['Cognitive Processing', 'Adaptive Learning', 'Real-time Optimization', 'Intelligent Automation'],
      path: '/services/real-time-cognitive-automation'
    },
    {
      icon: Shield,
      title: 'Advanced Cybersecurity AI',
      description: 'AI-powered security solutions that detect and prevent threats before they impact your business.',
      features: ['Threat Detection', 'Behavioral Analysis', 'Automated Response', 'Security Intelligence'],
      path: '/services/advanced-cybersecurity-ai'
    }
  ];

  const aiCapabilities = [
    {
      title: 'Machine Learning',
      description: 'Advanced ML algorithms for predictive analytics and pattern recognition.',
      icon: Brain
    },
    {
      title: 'Natural Language Processing',
      description: 'Understand and process human language for better user experiences.',
      icon: Users
    },
    {
      title: 'Computer Vision',
      description: 'Extract insights from images and videos using advanced visual AI.',
      icon: Target
    },
    {
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with high accuracy.',
      icon: TrendingUp
    },
    {
      title: 'Automated Decision Making',
      description: 'AI systems that make intelligent decisions based on data and context.',
      icon: Clock
    },
    {
      title: 'Intelligent Automation',
      description: 'Automate complex processes with AI that learns and adapts.',
      icon: Cog
    }
  ];

  const industries = [
    { name: 'Healthcare', useCases: ['Medical Diagnosis', 'Drug Discovery', 'Patient Care'] },
    { name: 'Finance', useCases: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'] },
    { name: 'Manufacturing', useCases: ['Quality Control', 'Predictive Maintenance', 'Supply Chain'] },
    { name: 'Retail', useCases: ['Personalization', 'Inventory Management', 'Customer Service'] },
    { name: 'Education', useCases: ['Adaptive Learning', 'Student Assessment', 'Content Generation'] },
    { name: 'Transportation', useCases: ['Route Optimization', 'Autonomous Vehicles', 'Traffic Management'] }
  ];

  return (
    <>
      <Helmet>
        <title>AI Solutions Hub - Zion Tech Group | Advanced Artificial Intelligence Services</title>
        <meta
          name="description"
          content="Explore our comprehensive AI solutions hub featuring machine learning, natural language processing, computer vision, and intelligent automation services."
        />
        <meta
          name="keywords"
          content="AI solutions, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, intelligent automation, AI consulting"
        />
        <link rel="canonical" href="https://ziontechgroup.com/ai-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-6">
                <Brain className="h-4 w-4 mr-2" />
                AI Solutions Hub
              </div>
              <h1 className="text-5xl font-bold text-white mb-6">
                Advanced Artificial Intelligence Solutions
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Harness the power of cutting-edge AI technologies to transform your business operations, 
                enhance customer experiences, and drive innovation across all industries.
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span>Industry-Leading AI</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-400" />
                  <span>Proven Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-blue-400" />
                  <span>Rapid Deployment</span>
                </div>
              </div>
            </div>

            {/* AI Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {aiServices.map((service) => (
                <div
                  key={service.path}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <service.icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-3">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                AI Capabilities & Technologies
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Our AI solutions leverage the latest technologies and methodologies to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center"
                >
                  <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-slate-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                AI Solutions Across Industries
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Discover how our AI solutions are transforming businesses across various industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{industry.name}</h3>
                  <ul className="space-y-2">
                    {industry.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our AI Solutions */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Zion Tech Group for AI Solutions?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                We combine cutting-edge AI technology with deep industry expertise to deliver solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="p-4 bg-blue-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Expert AI Team</h3>
                <p className="text-slate-300 text-sm">
                  Our team includes PhD-level AI researchers and experienced practitioners.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-green-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Proven ROI</h3>
                <p className="text-slate-300 text-sm">
                  Our AI solutions consistently deliver measurable business improvements.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-purple-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Secure & Compliant</h3>
                <p className="text-slate-300 text-sm">
                  Enterprise-grade security and compliance with industry standards.
                </p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-yellow-500/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">Rapid Deployment</h3>
                <p className="text-slate-300 text-sm">
                  Get your AI solutions up and running quickly with our proven methodologies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Let our AI experts help you identify the best solutions for your specific needs and industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
              >
                Get AI Consultation
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-slate-600 text-white hover:bg-slate-800 font-semibold rounded-lg transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AISolutions;