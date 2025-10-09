import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart, 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
  Brain,
  Target,
  TrendingUp,
  Settings,
  MessageSquare,
  Image,
  FileText,
  Search,
  Lock
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const aiServices = [
    {
      id: 'machine-learning',
      name: 'Machine Learning Solutions',
      description: 'Custom machine learning models and algorithms tailored to your specific business needs and data.',
      price: '$2,500/month',
      features: [
        'Custom model development',
        'Data preprocessing & cleaning',
        'Model training & optimization',
        'Real-time predictions',
        'Model monitoring & maintenance',
        'A/B testing framework',
        'API integration',
        'Performance analytics'
      ],
      icon: Brain,
      category: 'Core AI',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/machine-learning',
      benefits: [
        'Increase operational efficiency by 40%',
        'Reduce manual processing time by 60%',
        'Improve decision accuracy by 85%',
        'Scale predictions to millions of records'
      ]
    },
    {
      id: 'natural-language-processing',
      name: 'Natural Language Processing',
      description: 'Advanced NLP solutions for text analysis, sentiment analysis, and language understanding.',
      price: '$1,800/month',
      features: [
        'Text classification & categorization',
        'Sentiment analysis',
        'Named entity recognition',
        'Language translation',
        'Text summarization',
        'Chatbot development',
        'Document analysis',
        'Multi-language support'
      ],
      icon: MessageSquare,
      category: 'Language AI',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/nlp',
      benefits: [
        'Process 10,000+ documents per hour',
        'Achieve 95% accuracy in text classification',
        'Reduce customer service workload by 70%',
        'Enable real-time language translation'
      ]
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision Solutions',
      description: 'Image and video analysis using advanced computer vision and deep learning techniques.',
      price: '$2,200/month',
      features: [
        'Object detection & recognition',
        'Image classification',
        'Facial recognition',
        'OCR text extraction',
        'Video analysis',
        'Quality inspection',
        'Medical imaging analysis',
        'Real-time processing'
      ],
      icon: Image,
      category: 'Vision AI',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/computer-vision',
      benefits: [
        'Automate visual quality control',
        'Process images 50x faster than humans',
        'Achieve 99% accuracy in object detection',
        'Enable real-time video analysis'
      ]
    },
    {
      id: 'predictive-analytics',
      name: 'Predictive Analytics',
      description: 'Advanced predictive modeling to forecast trends, behaviors, and business outcomes.',
      price: '$1,900/month',
      features: [
        'Demand forecasting',
        'Customer behavior prediction',
        'Risk assessment',
        'Sales forecasting',
        'Churn prediction',
        'Market trend analysis',
        'Financial modeling',
        'Scenario planning'
      ],
      icon: TrendingUp,
      category: 'Analytics',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/predictive-analytics',
      benefits: [
        'Improve forecast accuracy by 60%',
        'Reduce inventory costs by 30%',
        'Increase customer retention by 25%',
        'Optimize resource allocation'
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI Process Automation',
      description: 'Intelligent automation of business processes using AI and machine learning.',
      price: '$1,600/month',
      features: [
        'Workflow automation',
        'Document processing',
        'Data entry automation',
        'Email automation',
        'Task scheduling',
        'Exception handling',
        'Process optimization',
        'Performance monitoring'
      ],
      icon: Settings,
      category: 'Automation',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-automation',
      benefits: [
        'Reduce manual work by 80%',
        'Process 1000+ documents per day',
        'Eliminate human errors',
        'Scale operations efficiently'
      ]
    },
    {
      id: 'ai-chatbots',
      name: 'AI Chatbots & Virtual Assistants',
      description: 'Intelligent conversational AI for customer service, sales, and internal support.',
      price: '$1,200/month',
      features: [
        'Natural conversation flow',
        'Multi-channel support',
        'Intent recognition',
        'Context awareness',
        'Integration with CRM',
        'Analytics & reporting',
        'Custom training',
        'Voice capabilities'
      ],
      icon: MessageSquare,
      category: 'Conversational AI',
      popular: true,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-chatbots',
      benefits: [
        'Handle 90% of customer inquiries',
        'Available 24/7',
        'Reduce response time by 95%',
        'Improve customer satisfaction'
      ]
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and communication.',
      price: '$800/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'Product descriptions',
        'Technical documentation',
        'Multilingual content',
        'SEO optimization',
        'Brand voice consistency'
      ],
      icon: FileText,
      category: 'Content AI',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-content-generation',
      benefits: [
        'Generate 100+ articles per day',
        'Maintain consistent brand voice',
        'Optimize for SEO automatically',
        'Scale content production 10x'
      ]
    },
    {
      id: 'ai-search',
      name: 'AI-Powered Search',
      description: 'Intelligent search solutions with semantic understanding and personalization.',
      price: '$1,400/month',
      features: [
        'Semantic search',
        'Personalized results',
        'Auto-complete suggestions',
        'Faceted search',
        'Search analytics',
        'Multi-language support',
        'Voice search',
        'Visual search'
      ],
      icon: Search,
      category: 'Search AI',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-search',
      benefits: [
        'Improve search relevance by 70%',
        'Reduce search time by 60%',
        'Increase conversion rates by 40%',
        'Enable voice and visual search'
      ]
    },
    {
      id: 'ai-cybersecurity',
      name: 'AI Cybersecurity',
      description: 'Advanced threat detection and security analysis using artificial intelligence.',
      price: '$2,800/month',
      features: [
        'Threat detection',
        'Anomaly detection',
        'Behavioral analysis',
        'Incident response',
        'Vulnerability assessment',
        'Security monitoring',
        'Compliance reporting',
        'Real-time alerts'
      ],
      icon: Shield,
      category: 'Security AI',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-cybersecurity',
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Prevent 95% of security breaches',
        'Automate incident response'
      ]
    },
    {
      id: 'ai-recommendation',
      name: 'AI Recommendation Engine',
      description: 'Personalized recommendation systems for products, content, and services.',
      price: '$1,500/month',
      features: [
        'Collaborative filtering',
        'Content-based filtering',
        'Hybrid recommendations',
        'Real-time personalization',
        'A/B testing',
        'Performance analytics',
        'Multi-domain support',
        'API integration'
      ],
      icon: Target,
      category: 'Recommendation AI',
      popular: false,
      freeTrial: true,
      link: 'https://ziontechgroup.com/ai-recommendation',
      benefits: [
        'Increase click-through rates by 50%',
        'Boost conversion rates by 35%',
        'Improve customer engagement',
        'Maximize revenue per user'
      ]
    }
  ];

  const categories = [
    'All',
    'Core AI',
    'Language AI',
    'Vision AI',
    'Analytics',
    'Automation',
    'Conversational AI',
    'Content AI',
    'Search AI',
    'Security AI',
    'Recommendation AI'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = aiServices.filter(service => {
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From machine learning to computer vision, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300">AI Models Deployed</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-gray-300">Cost Savings Delivered</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">AI Monitoring</div>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search AI services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === category
                          ? 'bg-cyan-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative"
              >
                {service.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <service.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 4 && (
                    <div className="text-sm text-gray-400">
                      +{service.features.length - 4} more features
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </a>
                  
                  {service.freeTrial && (
                    <button className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-200">
                      Start Free Trial
                    </button>
                  )}
                </div>

                {/* Benefits */}
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="text-xs text-gray-400 flex items-start">
                        <span className="text-green-400 mr-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Capabilities Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Capabilities</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies and frameworks to deliver solutions that 
              drive measurable business value and competitive advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-white mb-3">Deep Learning</h3>
              <p className="text-gray-300 text-sm">
                Advanced neural networks for complex pattern recognition and decision making.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-white mb-3">Computer Vision</h3>
              <p className="text-gray-300 text-sm">
                Image and video analysis for automation, quality control, and insights.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-white mb-3">Natural Language</h3>
              <p className="text-gray-300 text-sm">
                Understanding and generating human language for better communication.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-3">Predictive Analytics</h3>
              <p className="text-gray-300 text-sm">
                Forecasting future trends and behaviors to optimize business decisions.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold text-white mb-3">Process Automation</h3>
              <p className="text-gray-300 text-sm">
                Intelligent automation of repetitive tasks and complex workflows.
              </p>
            </div>

            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">AI Security</h3>
              <p className="text-gray-300 text-sm">
                Advanced threat detection and security analysis using AI.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Flexible AI Service Plans</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Choose the AI service plan that matches your business needs and budget. 
              All plans include implementation, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 3 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic model training
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Standard support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly reporting
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center relative border-2 border-cyan-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Up to 8 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced model training
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Real-time monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all">
                Start Free Trial
              </button>
            </div>

            <div className="cyber-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8 text-left">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Unlimited AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom model development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Advanced analytics
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-label solutions
                </li>
              </ul>
              <button className="w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Harness the Power of AI?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI solutions. Get started with a free consultation 
            and discover how AI can drive growth and efficiency in your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIServicesPage;