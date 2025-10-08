import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, Zap, Shield, Clock, Users, TrendingUp, Brain, Database, Cloud, Smartphone, Globe, Lock, BarChart3, MessageSquare, FileText, Settings, Target, Lightbulb, Cpu, Network, Bot, Sparkles } from 'lucide-react';

const AIPoweredSolutionsPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('ai-services');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiSolutions = [
    {
      id: 'ai-services',
      title: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions for enterprise applications',
      icon: <Brain className="w-8 h-8" />,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Deep Learning',
        'Neural Networks',
        'AI Model Training',
        'Real-time Inference'
      ],
      pricing: 'Starting at $1,500/month',
      benefits: [
        'Increase efficiency by 300%',
        'Reduce operational costs by 40%',
        'Improve decision making',
        'Automate complex processes'
      ]
    },
    {
      id: 'ai-marketing',
      title: 'AI Marketing',
      description: 'Revolutionary AI-powered marketing automation and optimization',
      icon: <Target className="w-8 h-8" />,
      features: [
        'AI Content Generation',
        'Ad Optimization',
        'Customer Segmentation',
        'Predictive Marketing',
        'Social Media AI',
        'Email Marketing AI',
        'Campaign Optimization',
        'ROI Maximization'
      ],
      pricing: 'Starting at $199/month',
      benefits: [
        'Increase conversion rates by 250%',
        'Reduce marketing costs by 60%',
        'Improve customer engagement',
        'Automate marketing workflows'
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Automation',
      description: 'Intelligent business process automation with decision-making capabilities',
      icon: <Settings className="w-8 h-8" />,
      features: [
        'Workflow Automation',
        'Process Intelligence',
        'Decision Automation',
        'Exception Handling',
        'RPA Integration',
        'Smart Scheduling',
        'Resource Optimization',
        'Performance Monitoring'
      ],
      pricing: 'Starting at $399/month',
      benefits: [
        'Automate 90% of repetitive tasks',
        'Reduce errors by 95%',
        'Increase productivity by 400%',
        'Save 20+ hours weekly'
      ]
    },
    {
      id: 'ai-healthcare',
      title: 'AI Healthcare',
      description: 'Cutting-edge AI solutions for medical imaging and healthcare',
      icon: <Shield className="w-8 h-8" />,
      features: [
        'Medical Imaging AI',
        'Drug Discovery',
        'Personalized Medicine',
        'Clinical Decision Support',
        'Patient Monitoring',
        'Diagnostic Assistance',
        'Treatment Optimization',
        'Health Analytics'
      ],
      pricing: 'Starting at $1,999/month',
      benefits: [
        'Improve diagnostic accuracy by 40%',
        'Reduce treatment costs by 30%',
        'Enhance patient outcomes',
        'Accelerate drug development'
      ]
    },
    {
      id: 'ai-fintech',
      title: 'AI Fintech',
      description: 'Advanced AI-powered financial services and risk management',
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        'Algorithmic Trading',
        'Fraud Detection',
        'Credit Scoring',
        'Wealth Management',
        'Risk Assessment',
        'Compliance Monitoring',
        'Market Analysis',
        'Portfolio Optimization'
      ],
      pricing: 'Starting at $1,499/month',
      benefits: [
        'Increase trading profits by 35%',
        'Reduce fraud losses by 80%',
        'Improve risk management',
        'Automate financial processes'
      ]
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity',
      description: 'AI-powered security solutions with advanced threat detection',
      icon: <Lock className="w-8 h-8" />,
      features: [
        'AI Threat Detection',
        'Behavioral Analysis',
        'Vulnerability Assessment',
        'Incident Response',
        'Security Monitoring',
        'Threat Intelligence',
        'Compliance Automation',
        'Risk Management'
      ],
      pricing: 'Starting at $2,499/month',
      benefits: [
        'Prevent 99% of cyber attacks',
        'Reduce security incidents by 80%',
        'Ensure compliance',
        'Protect sensitive data'
      ]
    }
  ];

  const tabs = [
    { id: 'ai-services', label: 'AI Services', icon: <Brain className="w-4 h-4" /> },
    { id: 'ai-marketing', label: 'AI Marketing', icon: <Target className="w-4 h-4" /> },
    { id: 'ai-automation', label: 'AI Automation', icon: <Settings className="w-4 h-4" /> },
    { id: 'ai-healthcare', label: 'AI Healthcare', icon: <Shield className="w-4 h-4" /> },
    { id: 'ai-fintech', label: 'AI Fintech', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'ai-cybersecurity', label: 'AI Cybersecurity', icon: <Lock className="w-4 h-4" /> }
  ];

  const currentSolution = aiSolutions.find(sol => sol.id === activeTab) || aiSolutions[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
              <span className="text-3xl mr-2">⚡</span>
              Zion Tech Group
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/contact" className="cyber-button">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 neon-text transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            AI-Powered Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to automation, we deliver enterprise-grade AI that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button cyber-pulse"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* AI Solutions Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Choose Your AI Solution
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our comprehensive range of AI-powered solutions designed for modern businesses
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-600 text-white cyber-pulse'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="cyber-card hologram-card quantum-float">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="text-6xl mb-6 text-cyan-400">{currentSolution.icon}</div>
                <h3 className="text-4xl font-bold text-white mb-4">{currentSolution.title}</h3>
                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {currentSolution.description}
                </p>
                <div className="mb-8">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{currentSolution.pricing}</div>
                  <p className="text-gray-400">Enterprise-grade AI solutions</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="cyber-button"
                  >
                    Get Started Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-semibold hover:bg-cyan-400/10 transition-colors"
                  >
                    Call (302) 464-0950
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white mb-6">Key Features</h4>
                <div className="grid grid-cols-1 gap-4 mb-8">
                  {currentSolution.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <h4 className="text-2xl font-bold text-white mb-6">Business Benefits</h4>
                <div className="space-y-3">
                  {currentSolution.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      <span className="text-cyan-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              Our AI Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest in artificial intelligence technology to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300">Advanced ML algorithms for predictive analytics and pattern recognition</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300">Image and video analysis for automated visual processing</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Natural Language</h3>
              <p className="text-gray-300">NLP for text analysis, chatbots, and language understanding</p>
            </div>
            <div className="cyber-card text-center quantum-float">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Real-time AI</h3>
              <p className="text-gray-300">Instant AI processing for time-critical applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 neon-text">
              AI Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Increase in Efficiency</div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Zion Tech Group's AI automation solution increased our operational efficiency by 300% and reduced costs by 40%."
              </p>
              <div className="font-semibold text-white">Sarah Johnson</div>
              <div className="text-sm text-gray-400">CTO, Fortune 500 Company</div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-green-400 mb-2">$50M</div>
                <div className="text-gray-300">Annual Savings</div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "Their AI-powered analytics platform helped us identify $50M in annual cost savings opportunities."
              </p>
              <div className="font-semibold text-white">Michael Chen</div>
              <div className="text-sm text-gray-400">VP Operations, Global Corp</div>
            </div>

            <div className="cyber-card hologram-card">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">95%</div>
                <div className="text-gray-300">Process Automation</div>
              </div>
              <p className="text-gray-300 italic mb-4">
                "We achieved 95% process automation with their AI solutions, freeing up our team for strategic work."
              </p>
              <div className="font-semibold text-white">Emily Rodriguez</div>
              <div className="text-sm text-gray-400">Director of Technology, Tech Giant</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our AI solutions to drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button cyber-pulse"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free AI Consultation
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free AI assessment • ✓ Custom solution design • ✓ 30-day trial • ✓ 24/7 support</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIPoweredSolutionsPage;