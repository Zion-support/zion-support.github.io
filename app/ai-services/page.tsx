'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Cpu, 
  Target, 
  Users, 
  Database, 
  FileText, 
  Shield, 
  TrendingUp, 
  Workflow, 
  Eye, 
  ShoppingCart, 
  Heart, 
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  BookOpen
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AiServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const aiServices = [
    {
      id: 'ai-chatbot-enterprise',
      name: 'AI Chatbot Enterprise',
      description: 'Advanced conversational AI platform with GPT-4 integration, multi-language support, and enterprise-grade security.',
      price: '$299/month',
      marketPrice: '$500-1500/month',
      features: [
        'GPT-4 powered conversations',
        'Multi-language support',
        'Enterprise security',
        'Custom training',
        'Analytics dashboard',
        'API integration',
        'Live agent handoff',
        'Compliance tools'
      ],
      benefits: [
        'Reduce support costs by 60%',
        '24/7 customer availability',
        'Improved response time',
        'Better customer satisfaction',
        'Scalable support'
      ],
      category: 'Customer Service',
      popular: true,
      icon: MessageSquare,
      link: 'https://chatbot.ziontechgroup.com'
    },
    {
      id: 'ai-analytics-pro',
      name: 'AI Analytics Pro',
      description: 'Advanced business intelligence platform with AI-powered predictive analytics and real-time insights.',
      price: '$399/month',
      marketPrice: '$800-2000/month',
      features: [
        'Predictive analytics',
        'Real-time dashboards',
        'Custom ML models',
        'Data visualization',
        'Automated reporting',
        'API integration',
        'Mobile app',
        'Team collaboration'
      ],
      benefits: [
        'Data-driven decisions',
        'Predictive insights',
        'Automated reporting',
        'Competitive advantage',
        'ROI optimization'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,
      link: 'https://analytics.ziontechgroup.com'
    },
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator',
      description: 'Comprehensive AI content creation platform for blogs, social media, marketing materials, and more.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Multi-format content generation',
        'SEO optimization',
        'Brand voice consistency',
        'Plagiarism detection',
        'Content calendar',
        'Team collaboration',
        'Performance analytics',
        'Template library'
      ],
      benefits: [
        'Save 80% content time',
        'Consistent brand voice',
        'SEO optimized content',
        'Multi-platform publishing',
        'Better engagement'
      ],
      category: 'Content Generation',
      popular: true,
      icon: FileText,
      link: 'https://content.ziontechgroup.com'
    },
    {
      id: 'ai-quantum-computing',
      name: 'AI Quantum Computing',
      description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
      price: '$2,999/month',
      marketPrice: '$5000-15000/month',
      features: [
        'Quantum algorithm development',
        'Optimization problems',
        'Cryptography solutions',
        'Simulation capabilities',
        'Research support',
        'Custom development',
        'Performance monitoring',
        'Expert consultation'
      ],
      benefits: [
        'Exponential computing power',
        'Solve complex problems',
        'Future-proof technology',
        'Competitive edge',
        'Innovation leadership'
      ],
      category: 'Quantum Computing',
      popular: false,
      icon: Cpu,
      link: 'https://quantum.ziontechgroup.com'
    },
    {
      id: 'ai-autonomous-systems',
      name: 'AI Autonomous Systems',
      description: 'Intelligent autonomous systems for various business applications and process automation.',
      price: '$599/month',
      marketPrice: '$1200-3000/month',
      features: [
        'Self-learning algorithms',
        'Decision making AI',
        'Process automation',
        'Adaptive behavior',
        'Real-time monitoring',
        'Predictive maintenance',
        'Integration capabilities',
        'Performance analytics'
      ],
      benefits: [
        'Reduced human intervention',
        'Improved efficiency',
        '24/7 operation',
        'Cost savings',
        'Scalable automation'
      ],
      category: 'Autonomous Systems',
      popular: true,
      icon: Target,
      link: 'https://autonomous.ziontechgroup.com'
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity Suite',
      description: 'Advanced AI-powered cybersecurity solutions for threat detection and prevention.',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'AI threat detection',
        'Behavioral analysis',
        'Automated response',
        'Risk assessment',
        'Compliance monitoring',
        'Incident response',
        'Security analytics',
        '24/7 monitoring'
      ],
      benefits: [
        'Enhanced security posture',
        'Real-time protection',
        'Reduced false positives',
        'Automated response',
        'Peace of mind'
      ],
      category: 'Cybersecurity',
      popular: false,
      icon: Shield,
      link: 'https://security.ziontechgroup.com'
    },
    {
      id: 'ai-hr-solutions',
      name: 'AI HR Solutions',
      description: 'Comprehensive AI-powered human resources management and talent acquisition platform.',
      price: '$299/month',
      marketPrice: '$600-1800/month',
      features: [
        'AI resume screening',
        'Candidate matching',
        'Interview scheduling',
        'Performance analysis',
        'Employee engagement',
        'Predictive analytics',
        'Compliance management',
        'Talent pipeline'
      ],
      benefits: [
        'Faster hiring process',
        'Better candidate fit',
        'Reduced bias',
        'Improved retention',
        'Streamlined HR processes'
      ],
      category: 'Human Resources',
      popular: false,
      icon: Users,
      link: 'https://hr.ziontechgroup.com'
    },
    {
      id: 'ai-sales-automation',
      name: 'AI Sales Automation',
      description: 'Intelligent sales process automation and lead qualification platform.',
      price: '$399/month',
      marketPrice: '$800-2000/month',
      features: [
        'AI lead scoring',
        'Sales forecasting',
        'Pipeline management',
        'Customer insights',
        'Automated follow-ups',
        'Performance analytics',
        'CRM integration',
        'Mobile app'
      ],
      benefits: [
        'Higher conversion rates',
        'Better lead quality',
        'Automated processes',
        'Data-driven sales',
        'Increased revenue'
      ],
      category: 'Sales',
      popular: true,
      icon: TrendingUp,
      link: 'https://sales.ziontechgroup.com'
    },
    {
      id: 'ai-workflow-automation',
      name: 'AI Workflow Automation',
      description: 'Intelligent business process automation and workflow optimization platform.',
      price: '$249/month',
      marketPrice: '$500-1500/month',
      features: [
        'Process mapping',
        'Task automation',
        'Decision trees',
        'Integration hub',
        'Performance monitoring',
        'Optimization suggestions',
        'Team collaboration',
        'Custom triggers'
      ],
      benefits: [
        'Increased efficiency',
        'Reduced errors',
        'Cost savings',
        'Scalable processes',
        'Better productivity'
      ],
      category: 'Automation',
      popular: false,
      icon: Workflow,
      link: 'https://workflow.ziontechgroup.com'
    },
    {
      id: 'ai-computer-vision',
      name: 'AI Computer Vision',
      description: 'Advanced computer vision solutions for image and video analysis applications.',
      price: '$349/month',
      marketPrice: '$700-2000/month',
      features: [
        'Object detection',
        'Image recognition',
        'Video analysis',
        'Quality control',
        'Facial recognition',
        'OCR capabilities',
        'Real-time processing',
        'Custom models'
      ],
      benefits: [
        'Automated visual tasks',
        'Improved accuracy',
        'Real-time processing',
        'Cost reduction',
        'Enhanced capabilities'
      ],
      category: 'Computer Vision',
      popular: false,
      icon: Eye,
      link: 'https://vision.ziontechgroup.com'
    },
    {
      id: 'ai-data-processing',
      name: 'AI Data Processing',
      description: 'Intelligent data processing and analysis platform for large datasets.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Data cleaning',
        'Pattern recognition',
        'Predictive modeling',
        'Real-time processing',
        'Data integration',
        'Quality assurance',
        'Scalable processing',
        'Custom algorithms'
      ],
      benefits: [
        'Faster data processing',
        'Better insights',
        'Automated cleaning',
        'Scalable solutions',
        'Improved accuracy'
      ],
      category: 'Data Processing',
      popular: false,
      icon: Database,
      link: 'https://data.ziontechgroup.com'
    },
    {
      id: 'ai-ecommerce-optimizer',
      name: 'AI E-commerce Optimizer',
      description: 'AI-powered e-commerce optimization and personalization platform.',
      price: '$299/month',
      marketPrice: '$600-1800/month',
      features: [
        'Product recommendations',
        'Price optimization',
        'Inventory management',
        'Customer segmentation',
        'Fraud detection',
        'Personalization engine',
        'A/B testing',
        'Analytics dashboard'
      ],
      benefits: [
        'Increased sales',
        'Better customer experience',
        'Reduced fraud',
        'Optimized pricing',
        'Higher conversion rates'
      ],
      category: 'E-commerce',
      popular: true,
      icon: ShoppingCart,
      link: 'https://ecommerce.ziontechgroup.com'
    },
    {
      id: 'ai-financial-advisor',
      name: 'AI Financial Advisor',
      description: 'Intelligent financial advisory platform with automated analysis and recommendations.',
      price: '$399/month',
      marketPrice: '$800-2000/month',
      features: [
        'Portfolio analysis',
        'Risk assessment',
        'Investment recommendations',
        'Market predictions',
        'Tax optimization',
        'Retirement planning',
        'Real-time monitoring',
        'Custom strategies'
      ],
      benefits: [
        'Better investment decisions',
        'Risk management',
        'Automated analysis',
        'Cost optimization',
        'Financial growth'
      ],
      category: 'Finance',
      popular: false,
      icon: TrendingUp,
      link: 'https://finance.ziontechgroup.com'
    },
    {
      id: 'ai-healthcare-assistant',
      name: 'AI Healthcare Assistant',
      description: 'AI-powered healthcare solutions for patient care, diagnosis support, and medical research.',
      price: '$599/month',
      marketPrice: '$1200-4000/month',
      features: [
        'Diagnosis support',
        'Patient monitoring',
        'Medical image analysis',
        'Drug discovery',
        'Treatment recommendations',
        'Clinical trials',
        'Compliance management',
        'Research tools'
      ],
      benefits: [
        'Improved diagnosis accuracy',
        'Better patient care',
        'Faster research',
        'Cost reduction',
        'Better outcomes'
      ],
      category: 'Healthcare',
      popular: false,
      icon: Heart,
      link: 'https://healthcare.ziontechgroup.com'
    },
    {
      id: 'ai-education-platform',
      name: 'AI Education Platform',
      description: 'Intelligent educational platform with personalized learning and assessment capabilities.',
      price: '$199/month',
      marketPrice: '$400-1200/month',
      features: [
        'Personalized learning paths',
        'Adaptive assessments',
        'Content generation',
        'Progress tracking',
        'Tutoring support',
        'Skill analysis',
        'Gamification',
        'Analytics dashboard'
      ],
      benefits: [
        'Personalized education',
        'Better learning outcomes',
        'Adaptive content',
        'Progress tracking',
        'Engaging experience'
      ],
      category: 'Education',
      popular: false,
      icon: BookOpen,
      link: 'https://education.ziontechgroup.com'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimizer',
      description: 'Intelligent supply chain management with predictive analytics and optimization.',
      price: '$499/month',
      marketPrice: '$1000-3000/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Route planning',
        'Supplier management',
        'Risk assessment',
        'Cost optimization',
        'Real-time tracking',
        'Predictive maintenance'
      ],
      benefits: [
        'Reduced costs',
        'Better efficiency',
        'Risk mitigation',
        'Optimized operations',
        'Improved delivery'
      ],
      category: 'Supply Chain',
      popular: false,
      icon: Package,
      link: 'https://supplychain.ziontechgroup.com'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', count: aiServices.length },
    { id: 'Customer Service', name: 'Customer Service', count: aiServices.filter(s => s.category === 'Customer Service').length },
    { id: 'Analytics', name: 'Analytics', count: aiServices.filter(s => s.category === 'Analytics').length },
    { id: 'Content Generation', name: 'Content Generation', count: aiServices.filter(s => s.category === 'Content Generation').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: aiServices.filter(s => s.category === 'Quantum Computing').length },
    { id: 'Autonomous Systems', name: 'Autonomous Systems', count: aiServices.filter(s => s.category === 'Autonomous Systems').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: aiServices.filter(s => s.category === 'Cybersecurity').length },
    { id: 'Human Resources', name: 'Human Resources', count: aiServices.filter(s => s.category === 'Human Resources').length },
    { id: 'Sales', name: 'Sales', count: aiServices.filter(s => s.category === 'Sales').length },
    { id: 'Automation', name: 'Automation', count: aiServices.filter(s => s.category === 'Automation').length },
    { id: 'Computer Vision', name: 'Computer Vision', count: aiServices.filter(s => s.category === 'Computer Vision').length },
    { id: 'Data Processing', name: 'Data Processing', count: aiServices.filter(s => s.category === 'Data Processing').length },
    { id: 'E-commerce', name: 'E-commerce', count: aiServices.filter(s => s.category === 'E-commerce').length },
    { id: 'Finance', name: 'Finance', count: aiServices.filter(s => s.category === 'Finance').length },
    { id: 'Healthcare', name: 'Healthcare', count: aiServices.filter(s => s.category === 'Healthcare').length },
    { id: 'Education', name: 'Education', count: aiServices.filter(s => s.category === 'Education').length },
    { id: 'Supply Chain', name: 'Supply Chain', count: aiServices.filter(s => s.category === 'Supply Chain').length }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Comprehensive AI services including chatbots, analytics, content generation, quantum computing, and autonomous systems for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, chatbots, analytics, quantum computing, machine learning, autonomous systems" />
        <meta property="og:title" content="AI Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced AI solutions for your business" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Transform Your Business with Advanced AI
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to transform your business operations. 
              From intelligent chatbots to quantum computing, we provide cutting-edge AI solutions 
              that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                Get Started Today
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      {service.popular && (
                        <span className="inline-block px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 text-sm ml-2 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{service.category}</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </a>
                    <a
                      href="/contact"
                      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-16">
                <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No AI services found</h3>
                <p className="text-gray-300 mb-6">
                  Try adjusting your search terms or category filter.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                  }}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-lg rounded-3xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join hundreds of companies already using our AI solutions to drive growth, 
                improve efficiency, and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Get Free Consultation
                </Link>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-lg"
                >
                  Call: (302) 464-0950
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

export default AiServicesPage;
