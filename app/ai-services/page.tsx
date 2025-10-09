import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, 
  Mail, Phone, DollarSign, Clock, Award, CheckCircle, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Compass, PieChart, TrendingDown, Activity, Search
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const aiServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by machine learning to drive data-driven decisions',
      category: 'ai-analytics',
      icon: BarChart,
      price: '$2,999/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time dashboard creation',
        'Natural language querying',
        'Automated report generation',
        'Multi-source data integration',
        'Custom ML model development',
        'Advanced visualization tools',
        'API integration capabilities'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce decision-making time by 70%',
        'Identify new business opportunities',
        'Improve operational efficiency',
        'Predict market trends accurately'
      ],
      targetAudience: 'Enterprise companies, Data-driven organizations',
      setupTime: '2-4 weeks',
      freeTrial: '30 days',
      support: 'Dedicated data scientist and support team',
      integrations: ['Salesforce', 'HubSpot', 'Google Analytics', 'AWS', 'Azure', 'Snowflake', 'Tableau', 'Power BI'],
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for enterprise workflows',
      category: 'ai-automation',
      icon: FileText,
      price: '$1,999/month',
      features: [
        'OCR and text extraction',
        'Document classification and routing',
        'Data validation and verification',
        'Automated workflow creation',
        'Multi-language support',
        'Compliance monitoring',
        'Version control and audit trails',
        'Custom field extraction'
      ],
      benefits: [
        'Process documents 20x faster',
        'Reduce errors by 95%',
        'Eliminate manual data entry',
        'Ensure compliance automatically',
        'Scale document processing'
      ],
      targetAudience: 'Legal firms, Insurance companies, Financial services, Healthcare',
      setupTime: '1-2 weeks',
      freeTrial: '14 days',
      support: 'Implementation specialist and ongoing support',
      integrations: ['SharePoint', 'Box', 'Dropbox', 'Salesforce', 'SAP', 'Oracle', 'Microsoft 365'],
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      description: 'Personalized customer interactions and journey optimization using advanced AI',
      category: 'ai-customer',
      icon: Users,
      price: '$2,499/month',
      features: [
        'Customer behavior analysis',
        'Personalized recommendations',
        'Sentiment analysis and monitoring',
        'Churn prediction and prevention',
        'Automated customer segmentation',
        'Real-time interaction optimization',
        'Multi-channel orchestration',
        'Customer lifetime value prediction'
      ],
      benefits: [
        'Increase customer satisfaction by 40%',
        'Reduce churn rate by 30%',
        'Boost conversion rates by 25%',
        'Improve customer lifetime value',
        'Enhance brand loyalty'
      ],
      targetAudience: 'E-commerce, SaaS companies, Retail, Service businesses',
      setupTime: '2-3 weeks',
      freeTrial: '21 days',
      support: 'Customer success manager and technical support',
      integrations: ['Salesforce', 'HubSpot', 'Zendesk', 'Intercom', 'Shopify', 'WooCommerce', 'Magento'],
      link: 'https://ziontechgroup.com/ai-customer-experience'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Globe },
    { id: 'ai-analytics', name: 'AI Analytics', icon: BarChart },
    { id: 'ai-automation', name: 'AI Automation', icon: Settings },
    { id: 'ai-customer', name: 'AI Customer', icon: Users },
    { id: 'ai-marketing', name: 'AI Marketing', icon: Target },
    { id: 'ai-industrial', name: 'AI Industrial', icon: Settings },
    { id: 'ai-logistics', name: 'AI Logistics', icon: Globe },
    { id: 'ai-security', name: 'AI Security', icon: Shield },
    { id: 'ai-content', name: 'AI Content', icon: FileText },
    { id: 'ai-hr', name: 'AI HR', icon: Users },
    { id: 'ai-quality', name: 'AI Quality', icon: CheckSquare },
    { id: 'ai-energy', name: 'AI Energy', icon: Zap }
  ];

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to intelligent automation, we deliver enterprise-grade AI services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
            >
              <Mail className="w-5 h-5 inline mr-2" />
              Get AI Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search AI services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-b8f2
              </div>
            </div>
            
            {/* Search and Filter Section */}
            <div className="flex flex-col lg:flex-row gap-6 mb-8">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    <service.icon className="w-12 h-12" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Setup Time:</span>
                    <span className="text-white">{service.setupTime}</span>
                  </div>
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
=======
                  <div className="flex justify-between">
                    <span className="text-gray-400">Free Trial:</span>
                    <span className="text-green-400">{service.freeTrial}</span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-3845
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Target:</span>
                    <span className="text-white">{service.targetAudience}</span>
                  </div>
                </div>

                {service.caseStudy && (
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg">
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>
                  </div>
                )}

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Get Demo
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        <service.icon className="w-12 h-12" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white">{service.price}</div>
                        <div className="text-sm text-gray-400">per month</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.slice(0, 2).map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Setup Time:</span>
                        <span className="text-white">{service.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Free Trial:</span>
                        <span className="text-green-400">{service.freeTrial}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Target:</span>
                        <span className="text-white">{service.targetAudience}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Start Free Trial
                      </a>
                      <a
                        href="tel:+13024640950"
                        className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Phone className="w-4 h-4 inline mr-2" />
                        Get Demo
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-cyan-400 mb-8 neon-glow">
                Our AI services are designed to deliver measurable results. 
                All implementations include free trials, dedicated support, and ongoing optimization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Phone className="w-5 h-5" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50"
                >
                  <Mail className="w-5 h-5" />
                  Get Custom AI Strategy
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
