import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cpu, 
  Eye, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Target, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Bot,
  Sparkles,
  Network,
  Database,
  Shield,
  Rocket,
  Lightbulb,
  Code,
  Palette,
  Camera,
  Video,
  Music,
  Search,
  Filter,
  SortAsc,
  SortDesc
} from 'lucide-react';

export default function AdvancedAIServices2029() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    {
      id: 'ai-chatbot-platform',
      category: 'automation',
      name: 'AI-Powered Chatbot Platform',
      description: 'Intelligent conversational AI that handles customer service, sales, and support 24/7',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Integration with CRM systems',
        'Sentiment analysis',
        'Learning and improvement',
        'Analytics dashboard'
      ],
      pricing: {
        starter: '$299/month',
        professional: '$799/month',
        enterprise: '$1,999/month',
        custom: 'Quote'
      },
      benefits: [
        'Reduce customer service costs by 60%',
        'Improve response time by 90%',
        'Handle 1000+ conversations simultaneously',
        '24/7 availability'
      ],
      useCases: [
        'Customer support automation',
        'Sales lead qualification',
        'FAQ handling',
        'Appointment scheduling'
      ],
      icon: Bot,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'computer-vision-ai',
      category: 'vision',
      name: 'Computer Vision AI Solutions',
      description: 'Advanced image and video analysis for quality control, security, and automation',
      features: [
        'Object detection and recognition',
        'Image classification',
        'Video analytics',
        'Quality control automation',
        'Security monitoring',
        'Real-time processing'
      ],
      pricing: {
        basic: '$499/month',
        professional: '$1,299/month',
        enterprise: '$2,999/month',
        custom: 'Quote'
      },
      benefits: [
        'Improve quality control accuracy by 95%',
        'Reduce manual inspection time by 80%',
        '24/7 monitoring capabilities',
        'Real-time alerts and notifications'
      ],
      useCases: [
        'Manufacturing quality control',
        'Retail inventory management',
        'Security surveillance',
        'Medical imaging analysis'
      ],
      icon: Eye,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'predictive-analytics',
      category: 'analytics',
      name: 'Predictive Analytics Platform',
      description: 'AI-driven forecasting and predictive modeling for business intelligence',
      features: [
        'Machine learning models',
        'Data preprocessing',
        'Feature engineering',
        'Model training and validation',
        'Real-time predictions',
        'Performance monitoring'
      ],
      pricing: {
        starter: '$399/month',
        professional: '$999/month',
        enterprise: '$2,499/month',
        custom: 'Quote'
      },
      benefits: [
        'Improve forecast accuracy by 40%',
        'Reduce decision-making time by 70%',
        'Identify hidden patterns in data',
        'Proactive business insights'
      ],
      useCases: [
        'Sales forecasting',
        'Demand planning',
        'Risk assessment',
        'Customer behavior prediction'
      ],
      icon: BarChart3,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'ai-content-generation',
      category: 'content',
      name: 'AI Content Generation Suite',
      description: 'Automated content creation for marketing, documentation, and communication',
      features: [
        'Text generation and editing',
        'Content optimization',
        'SEO-friendly writing',
        'Multi-format support',
        'Brand voice consistency',
        'Plagiarism detection'
      ],
      pricing: {
        basic: '$199/month',
        professional: '$599/month',
        enterprise: '$1,499/month',
        custom: 'Quote'
      },
      benefits: [
        'Increase content production by 300%',
        'Reduce content creation costs by 50%',
        'Improve SEO performance',
        'Consistent brand messaging'
      ],
      useCases: [
        'Marketing content creation',
        'Product descriptions',
        'Blog and article writing',
        'Social media posts'
      ],
      icon: FileText,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-process-automation',
      category: 'automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation of complex business processes and workflows',
      features: [
        'Process mining and analysis',
        'Workflow automation',
        'Document processing',
        'Decision automation',
        'Integration capabilities',
        'Performance analytics'
      ],
      pricing: {
        starter: '$599/month',
        professional: '$1,499/month',
        enterprise: '$3,999/month',
        custom: 'Quote'
      },
      benefits: [
        'Reduce process time by 70%',
        'Eliminate manual errors by 90%',
        'Improve efficiency by 60%',
        'Scalable automation'
      ],
      useCases: [
        'Invoice processing',
        'Customer onboarding',
        'Order fulfillment',
        'Compliance reporting'
      ],
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 'ai-recommendation-engine',
      category: 'personalization',
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendations for products, content, and services',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Real-time recommendations',
        'A/B testing framework',
        'Performance analytics',
        'Multi-platform support'
      ],
      pricing: {
        basic: '$299/month',
        professional: '$799/month',
        enterprise: '$1,999/month',
        custom: 'Quote'
      },
      benefits: [
        'Increase conversion rates by 35%',
        'Improve customer engagement by 50%',
        'Boost average order value by 25%',
        'Personalized user experience'
      ],
      useCases: [
        'E-commerce recommendations',
        'Content personalization',
        'Product suggestions',
        'Service recommendations'
      ],
      icon: Target,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const categories = [
    { id: 'all', name: 'All AI Services', icon: Brain },
    { id: 'automation', name: 'Automation', icon: Bot },
    { id: 'vision', name: 'Computer Vision', icon: Eye },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'content', name: 'Content AI', icon: FileText },
    { id: 'personalization', name: 'Personalization', icon: Target }
  ];

  const filteredServices = services.filter(service => {
    const matchesCategory = activeTab === 'all' || service.category === activeTab;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Advanced
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {' '}AI Services
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Transform your business with cutting-edge artificial intelligence solutions that drive innovation and growth
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explore AI Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/comprehensive-pricing-guide-2029"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-all duration-300"
              >
                View Pricing
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for AI services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                {/* Service Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <service.icon className="w-12 h-12" />
                    <div className="text-right">
                      <div className="text-sm opacity-90">Starting at</div>
                      <div className="text-2xl font-bold">{service.pricing.starter}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                  <p className="text-sm opacity-90">{service.description}</p>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <TrendingUp className="w-5 h-5 text-blue-500 mr-2" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-2">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Target className="w-5 h-5 text-purple-500 mr-2" />
                      Use Cases
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.slice(0, 2).map((useCase, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                      Pricing Tiers
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(service.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between text-sm">
                          <span className="capitalize text-gray-600 dark:text-gray-400">{tier}</span>
                          <span className="font-semibold text-gray-900 dark:text-white">{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-center block"
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No AI services found</h3>
              <p className="text-gray-600 dark:text-gray-400">Try adjusting your search terms or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and transform your business with intelligent automation and insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start AI Journey
              <Rocket className="ml-2 w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Get in Touch
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-700 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Address</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}