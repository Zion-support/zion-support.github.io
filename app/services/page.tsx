import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Check, Star, Zap, Shield, Clock, Users, BarChart, Code, Brain, Cloud, Smartphone, Mail, FileText, Image, Video, Globe, Database, Settings, Lock, ArrowRight, Play, Download, ExternalLink, Phone, Mail as MailIcon } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const allServices = [
    // AI Services
    {
      id: 'ai-services',
      name: 'AI Services',
      category: 'ai',
      icon: Brain,
      description: 'Comprehensive AI solutions including machine learning, natural language processing, computer vision, and predictive analytics.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Consulting',
        'Custom AI Development',
        'AI Integration',
        'Performance Optimization'
      ],
      pricing: {
        starter: { price: 1500, period: 'month', features: ['Basic AI models', 'Standard support', 'Monthly reports'] },
        pro: { price: 5000, period: 'month', features: ['Advanced AI models', 'Priority support', 'Weekly reports', 'Custom training'] },
        enterprise: { price: 15000, period: 'month', features: ['Custom AI solutions', '24/7 support', 'Real-time monitoring', 'Dedicated team'] }
      },
      rating: 4.9,
      reviews: 1247,
      status: 'popular',
      link: '/ai-services'
    },
    {
      id: 'ai-marketing',
      name: 'AI Marketing',
      category: 'ai',
      icon: Mail,
      description: 'Revolutionary AI-powered marketing automation, ad optimization, and content generation for maximum ROI.',
      features: [
        'AI Campaign Optimization',
        'Personalization Engine',
        'A/B Testing Automation',
        'Content Generation',
        'Lead Scoring',
        'Customer Segmentation',
        'ROI Optimization',
        'Multi-channel Integration'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['Basic automation', 'Email campaigns', 'Analytics dashboard'] },
        pro: { price: 599, period: 'month', features: ['Advanced automation', 'Multi-channel campaigns', 'AI optimization', 'Custom templates'] },
        enterprise: { price: 1999, period: 'month', features: ['Full AI suite', 'Custom integrations', 'Dedicated manager', 'White-label options'] }
      },
      rating: 4.8,
      reviews: 892,
      status: 'trending',
      link: '/ai-marketing'
    },
    {
      id: 'ai-automation',
      name: 'AI Automation',
      category: 'ai',
      icon: Settings,
      description: 'Intelligent automation of business processes with decision-making capabilities and exception handling.',
      features: [
        'Process Automation',
        'Decision Making',
        'Exception Handling',
        'Workflow Optimization',
        'Integration APIs',
        'Monitoring & Alerts',
        'Custom Triggers',
        'Performance Analytics'
      ],
      pricing: {
        starter: { price: 399, period: 'month', features: ['Basic workflows', 'Email notifications', 'Standard integrations'] },
        pro: { price: 999, period: 'month', features: ['Advanced workflows', 'SMS alerts', 'Custom integrations', 'API access'] },
        enterprise: { price: 2999, period: 'month', features: ['Unlimited workflows', 'Custom development', 'Dedicated support', 'White-label'] }
      },
      rating: 4.7,
      reviews: 634,
      status: 'popular',
      link: '/ai-automation'
    },
    {
      id: 'ai-healthcare',
      name: 'AI Healthcare',
      category: 'ai',
      icon: Shield,
      description: 'Cutting-edge AI solutions for medical imaging, drug discovery, and personalized medicine.',
      features: [
        'Medical Image Analysis',
        'Drug Discovery AI',
        'Personalized Medicine',
        'Diagnostic Assistance',
        'Treatment Optimization',
        'Clinical Decision Support',
        'Patient Monitoring',
        'Compliance Management'
      ],
      pricing: {
        starter: { price: 1999, period: 'month', features: ['Basic AI models', 'Standard compliance', 'Email support'] },
        pro: { price: 5999, period: 'month', features: ['Advanced AI models', 'Full compliance', 'Priority support', 'Custom training'] },
        enterprise: { price: 19999, period: 'month', features: ['Custom AI solutions', 'Regulatory compliance', '24/7 support', 'Dedicated team'] }
      },
      rating: 4.9,
      reviews: 445,
      status: 'new',
      link: '/ai-healthcare'
    },
    {
      id: 'ai-fintech',
      name: 'AI Fintech',
      category: 'ai',
      icon: BarChart,
      description: 'Revolutionary AI-powered financial services including trading, fraud detection, and risk management.',
      features: [
        'Algorithmic Trading',
        'Fraud Detection',
        'Risk Management',
        'Credit Scoring',
        'Market Analysis',
        'Regulatory Compliance',
        'Real-time Monitoring',
        'Custom Algorithms'
      ],
      pricing: {
        starter: { price: 1499, period: 'month', features: ['Basic algorithms', 'Standard monitoring', 'Email support'] },
        pro: { price: 4999, period: 'month', features: ['Advanced algorithms', 'Real-time monitoring', 'Priority support', 'Custom development'] },
        enterprise: { price: 14999, period: 'month', features: ['Custom algorithms', 'Full monitoring', '24/7 support', 'Dedicated team'] }
      },
      rating: 4.8,
      reviews: 567,
      status: 'trending',
      link: '/ai-fintech'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      category: 'ai',
      icon: FileText,
      description: 'Revolutionary AI-powered content creation for blogs, social media, emails, and marketing materials.',
      features: [
        'Content Templates',
        'Multi-language Support',
        'SEO Optimization',
        'Plagiarism Detection',
        'Brand Voice Customization',
        'Bulk Generation',
        'API Integration',
        'Analytics Dashboard'
      ],
      pricing: {
        starter: { price: 199, period: 'month', features: ['10,000 words/month', '5 templates', 'Basic analytics'] },
        pro: { price: 599, period: 'month', features: ['50,000 words/month', 'All templates', 'Advanced analytics', 'API access'] },
        enterprise: { price: 1999, period: 'month', features: ['Unlimited words', 'Custom templates', 'White-label', 'Priority support'] }
      },
      rating: 4.7,
      reviews: 987,
      status: 'popular',
      link: '/ai-content-generation'
    },
    // IT Services
    {
      id: 'it-infrastructure',
      name: 'IT Infrastructure',
      category: 'it',
      icon: Cloud,
      description: 'Enterprise-grade IT infrastructure with 99.9% uptime guarantee and 24/7 expert support.',
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'DevOps & CI/CD',
        '24/7 Monitoring',
        'Security Hardening',
        'Backup & Recovery',
        'Performance Optimization',
        'Compliance Management'
      ],
      pricing: {
        starter: { price: 999, period: 'month', features: ['Basic infrastructure', 'Email support', 'Standard monitoring'] },
        pro: { price: 2999, period: 'month', features: ['Advanced infrastructure', 'Priority support', 'Real-time monitoring', 'Custom configurations'] },
        enterprise: { price: 9999, period: 'month', features: ['Custom infrastructure', '24/7 support', 'Dedicated team', 'White-label options'] }
      },
      rating: 4.8,
      reviews: 1456,
      status: 'popular',
      link: '/it-infrastructure'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      category: 'it',
      icon: Lock,
      description: 'Advanced AI-powered security monitoring platform that detects threats and provides real-time protection.',
      features: [
        'Threat Detection',
        'Real-time Monitoring',
        'Incident Response',
        'Compliance Reporting',
        'Vulnerability Scanning',
        'User Behavior Analysis',
        'API Security',
        'Custom Rules'
      ],
      pricing: {
        starter: { price: 799, period: 'month', features: ['Basic monitoring', 'Email alerts', 'Standard reports'] },
        pro: { price: 1999, period: 'month', features: ['Advanced monitoring', 'SMS alerts', 'Custom reports', 'API access'] },
        enterprise: { price: 4999, period: 'month', features: ['Full monitoring', 'Custom alerts', 'White-label', 'Dedicated support'] }
      },
      rating: 4.9,
      reviews: 445,
      status: 'trending',
      link: '/cybersecurity'
    },
    {
      id: 'micro-saas',
      name: 'Micro SAAS Solutions',
      category: 'saas',
      icon: Code,
      description: 'Affordable, powerful AI-driven tools for modern businesses. 50+ ready-to-use applications.',
      features: [
        '50+ AI Tools',
        'No-code Solutions',
        'API Integration',
        'White-label Options',
        'Custom Development',
        'Analytics Dashboard',
        'Multi-tenant Architecture',
        'Scalable Infrastructure'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['Basic tools', 'Standard support', 'Email notifications'] },
        pro: { price: 79, period: 'month', features: ['All tools', 'Priority support', 'SMS notifications', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Custom tools', '24/7 support', 'White-label', 'Dedicated manager'] }
      },
      rating: 4.8,
      reviews: 2156,
      status: 'popular',
      link: '/micro-saas'
    },
    // Specialized Services
    {
      id: 'quantum-computing',
      name: 'Quantum Computing',
      category: 'specialized',
      icon: Zap,
      description: 'Next-generation quantum computing capabilities for complex problem solving and optimization.',
      features: [
        'Quantum Algorithms',
        'Optimization Problems',
        'Cryptography',
        'Simulation',
        'Research & Development',
        'Custom Solutions',
        'Performance Analysis',
        'Future Technology'
      ],
      pricing: {
        starter: { price: 5000, period: 'month', features: ['Basic quantum access', 'Standard support', 'Monthly reports'] },
        pro: { price: 15000, period: 'month', features: ['Advanced quantum access', 'Priority support', 'Weekly reports', 'Custom algorithms'] },
        enterprise: { price: 50000, period: 'month', features: ['Full quantum access', '24/7 support', 'Real-time monitoring', 'Dedicated team'] }
      },
      rating: 4.9,
      reviews: 123,
      status: 'new',
      link: '/quantum-computing'
    },
    {
      id: 'autonomous-systems',
      name: 'Autonomous Systems',
      category: 'specialized',
      icon: Settings,
      description: 'Self-managing and self-optimizing systems for enterprise operations and infrastructure.',
      features: [
        'Self-healing Systems',
        'Predictive Maintenance',
        'Autonomous Operations',
        'Machine Learning',
        'Real-time Adaptation',
        'Performance Optimization',
        'Custom Algorithms',
        'Monitoring & Control'
      ],
      pricing: {
        starter: { price: 2500, period: 'month', features: ['Basic autonomy', 'Standard monitoring', 'Email support'] },
        pro: { price: 7500, period: 'month', features: ['Advanced autonomy', 'Real-time monitoring', 'Priority support', 'Custom development'] },
        enterprise: { price: 25000, period: 'month', features: ['Full autonomy', '24/7 monitoring', 'Dedicated team', 'White-label options'] }
      },
      rating: 4.8,
      reviews: 234,
      status: 'trending',
      link: '/autonomous-systems'
    },
    {
      id: 'blockchain-web3',
      name: 'Blockchain & Web3',
      category: 'specialized',
      icon: Globe,
      description: 'Cutting-edge blockchain solutions and Web3 applications for the decentralized future.',
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Platforms',
        'DApp Development',
        'Token Economics',
        'Security Audits',
        'Integration Services',
        'Consulting'
      ],
      pricing: {
        starter: { price: 1999, period: 'month', features: ['Basic blockchain', 'Standard support', 'Monthly reports'] },
        pro: { price: 5999, period: 'month', features: ['Advanced blockchain', 'Priority support', 'Weekly reports', 'Custom development'] },
        enterprise: { price: 19999, period: 'month', features: ['Full blockchain suite', '24/7 support', 'Real-time monitoring', 'Dedicated team'] }
      },
      rating: 4.7,
      reviews: 345,
      status: 'trending',
      link: '/blockchain-web3'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI Services', icon: Brain },
    { id: 'it', name: 'IT Services', icon: Cloud },
    { id: 'saas', name: 'Micro SAAS', icon: Code },
    { id: 'specialized', name: 'Specialized', icon: Settings }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory);

  const getStatusBadge = (status: string) => {
    const badges = {
      popular: 'bg-green-100 text-green-800 border-green-200',
      trending: 'bg-blue-100 text-blue-800 border-blue-200',
      new: 'bg-purple-100 text-purple-800 border-purple-200'
    };
    return badges[status as keyof typeof badges] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid particle-bg matrix-bg data-flow-bg">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text quantum-text cyber-pulse">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium quantum-text">
              Comprehensive AI and IT solutions for modern businesses
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Discover our complete suite of AI-powered services, IT solutions, and specialized technologies 
              designed to transform your business operations and drive unprecedented growth.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto mb-12">
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300 text-xs sm:text-sm">AI-Powered Services</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Enterprise Clients</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-2">$2.5B+</div>
                <div className="text-gray-300 text-xs sm:text-sm">Cost Savings Delivered</div>
              </div>
              <div className="cyber-card hologram-card p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-xs sm:text-sm">Uptime Guarantee</div>
              </div>
            </div>

            {/* CTA Buttons */}
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
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 group">
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center group-hover:animate-pulse">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(service.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-400'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">
                          {service.rating} ({service.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusBadge(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-cyan-400">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 capitalize">{plan}:</span>
                        <span className="text-sm font-semibold text-cyan-400">
                          ${details.price.toLocaleString()}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Learn More
                  </Link>
                  <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors duration-200">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="cyber-card hologram-card p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text quantum-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our services to streamline operations, 
              boost productivity, and drive growth with cutting-edge AI and IT solutions.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
