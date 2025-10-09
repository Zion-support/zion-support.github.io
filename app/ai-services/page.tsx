import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Target, 
  Zap, 
  Search, 
  Shield, 
  Users, 
  TrendingUp, 
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Cpu,
  Database,
  Globe,
  Smartphone,
  Monitor,
  Cloud,
  Lock,
  Clock,
  Award,
  Phone,
  Mail as MailIcon,
  MapPin,
  Bot,
  Eye,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  PieChart,
  TrendingDown,
  Activity
} from 'lucide-react';

const AIServicesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by machine learning to drive data-driven decisions',
      icon: BarChart3,
      price: '$2,500/month',
      features: [
        'Predictive analytics and forecasting',
        'Real-time data visualization',
        'Custom dashboard creation',
        'Automated report generation',
        'Anomaly detection',
        'ROI optimization insights'
      ],
      benefits: [
        'Increase revenue by 25-40%',
        'Reduce operational costs by 30%',
        'Improve decision-making speed by 300%',
        'Identify new business opportunities'
      ],
      category: 'Analytics',
      industry: 'All Industries',
      complexity: 'Advanced',
      rating: 4.9,
      clients: '150+',
      link: 'https://ziontechgroup.com/ai-business-intelligence'
    },
    {
      id: 'ai-document-processing',
      name: 'AI Document Processing',
      description: 'Intelligent document analysis, extraction, and automation for enterprise workflows',
      icon: FileText,
      price: '$1,800/month',
      features: [
        'OCR and text extraction',
        'Document classification',
        'Data validation and verification',
        'Automated workflow routing',
        'Multi-format support',
        'Compliance monitoring'
      ],
      benefits: [
        'Process documents 10x faster',
        'Reduce manual errors by 95%',
        'Save 40+ hours per week',
        'Improve compliance accuracy'
      ],
      category: 'Automation',
      industry: 'Legal, Finance, Healthcare',
      complexity: 'Intermediate',
      rating: 4.8,
      clients: '200+',
      link: 'https://ziontechgroup.com/ai-document-processing'
    },
    {
      id: 'ai-customer-experience',
      name: 'AI Customer Experience',
      description: 'Personalized customer interactions and experience optimization using AI',
      icon: MessageSquare,
      price: '$3,200/month',
      features: [
        'Personalized recommendations',
        'Sentiment analysis',
        'Customer journey mapping',
        'Predictive customer behavior',
        'Automated support routing',
        'Real-time personalization'
      ],
      benefits: [
        'Increase customer satisfaction by 45%',
        'Boost conversion rates by 35%',
        'Reduce churn by 50%',
        'Improve customer lifetime value'
      ],
      category: 'Customer Experience',
      industry: 'E-commerce, Retail, SaaS',
      complexity: 'Advanced',
      rating: 4.9,
      clients: '180+',
      link: 'https://ziontechgroup.com/ai-customer-experience'
    },
    {
      id: 'ai-marketing-automation',
      name: 'AI Marketing Automation',
      description: 'Intelligent marketing campaigns with automated personalization and optimization',
      icon: Target,
      price: '$2,200/month',
      features: [
        'Automated campaign creation',
        'Dynamic content personalization',
        'Predictive audience targeting',
        'Cross-channel optimization',
        'Performance analytics',
        'A/B testing automation'
      ],
      benefits: [
        'Increase marketing ROI by 200%',
        'Reduce campaign setup time by 80%',
        'Improve engagement rates by 150%',
        'Automate complex marketing workflows'
      ],
      category: 'Marketing',
      industry: 'All Industries',
      complexity: 'Intermediate',
      rating: 4.7,
      clients: '220+',
      link: 'https://ziontechgroup.com/ai-marketing-automation'
    },
    {
      id: 'ai-predictive-maintenance',
      name: 'AI Predictive Maintenance',
      description: 'Equipment failure prediction and maintenance optimization for industrial operations',
      icon: Wrench,
      price: '$4,500/month',
      features: [
        'Equipment health monitoring',
        'Failure prediction algorithms',
        'Maintenance scheduling optimization',
        'Cost reduction analysis',
        'IoT sensor integration',
        'Real-time alerts'
      ],
      benefits: [
        'Reduce unplanned downtime by 70%',
        'Lower maintenance costs by 40%',
        'Extend equipment lifespan by 30%',
        'Improve operational efficiency'
      ],
      category: 'Industrial AI',
      industry: 'Manufacturing, Energy, Transportation',
      complexity: 'Advanced',
      rating: 4.9,
      clients: '95+',
      link: 'https://ziontechgroup.com/ai-predictive-maintenance'
    },
    {
      id: 'ai-supply-chain',
      name: 'AI Supply Chain Optimization',
      description: 'Intelligent supply chain management with demand forecasting and optimization',
      icon: Ship,
      price: '$3,800/month',
      features: [
        'Demand forecasting',
        'Inventory optimization',
        'Supplier risk assessment',
        'Route optimization',
        'Cost optimization',
        'Sustainability tracking'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Improve delivery times by 35%',
        'Minimize supply chain disruptions',
        'Optimize supplier relationships'
      ],
      category: 'Operations',
      industry: 'Retail, Manufacturing, Logistics',
      complexity: 'Advanced',
      rating: 4.8,
      clients: '120+',
      link: 'https://ziontechgroup.com/ai-supply-chain'
    },
    {
      id: 'ai-fraud-detection',
      name: 'AI Fraud Detection',
      description: 'Advanced fraud prevention and detection using machine learning algorithms',
      icon: Shield,
      price: '$2,800/month',
      features: [
        'Real-time fraud detection',
        'Pattern recognition',
        'Risk scoring',
        'Transaction monitoring',
        'False positive reduction',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce fraud losses by 85%',
        'Decrease false positives by 60%',
        'Improve detection speed by 10x',
        'Enhance customer trust'
      ],
      category: 'Security',
      industry: 'Finance, E-commerce, Insurance',
      complexity: 'Advanced',
      rating: 4.9,
      clients: '160+',
      link: 'https://ziontechgroup.com/ai-fraud-detection'
    },
    {
      id: 'ai-content-generation',
      name: 'AI Content Generation',
      description: 'Automated content creation for marketing, documentation, and communication',
      icon: Palette,
      price: '$1,500/month',
      features: [
        'Blog post generation',
        'Social media content',
        'Email campaigns',
        'Product descriptions',
        'SEO optimization',
        'Multi-language support'
      ],
      benefits: [
        'Create content 5x faster',
        'Maintain brand consistency',
        'Scale content production',
        'Improve SEO performance'
      ],
      category: 'Content',
      industry: 'Marketing, Media, E-commerce',
      complexity: 'Beginner',
      rating: 4.6,
      clients: '300+',
      link: 'https://ziontechgroup.com/ai-content-generation'
    },
    {
      id: 'ai-hr-analytics',
      name: 'AI HR Analytics',
      description: 'Human resources optimization with AI-powered insights and automation',
      icon: Users,
      price: '$2,000/month',
      features: [
        'Employee performance analysis',
        'Predictive hiring insights',
        'Retention risk assessment',
        'Skills gap analysis',
        'Workforce planning',
        'Bias detection'
      ],
      benefits: [
        'Improve hiring success by 40%',
        'Reduce turnover by 30%',
        'Optimize workforce planning',
        'Enhance employee satisfaction'
      ],
      category: 'Human Resources',
      industry: 'All Industries',
      complexity: 'Intermediate',
      rating: 4.7,
      clients: '140+',
      link: 'https://ziontechgroup.com/ai-hr-analytics'
    },
    {
      id: 'ai-process-automation',
      name: 'AI Process Automation',
      description: 'Intelligent workflow automation with AI decision-making capabilities',
      icon: Zap,
      price: '$2,600/month',
      features: [
        'Workflow automation',
        'Decision tree optimization',
        'Exception handling',
        'Process monitoring',
        'Performance analytics',
        'Custom rule creation'
      ],
      benefits: [
        'Automate 80% of routine tasks',
        'Reduce processing time by 60%',
        'Improve accuracy by 95%',
        'Enable 24/7 operations'
      ],
      category: 'Automation',
      industry: 'All Industries',
      complexity: 'Intermediate',
      rating: 4.8,
      clients: '190+',
      link: 'https://ziontechgroup.com/ai-process-automation'
    },
    {
      id: 'ai-quality-assurance',
      name: 'AI Quality Assurance',
      description: 'Automated quality control and testing using computer vision and ML',
      icon: Eye,
      price: '$3,500/month',
      features: [
        'Visual inspection automation',
        'Defect detection',
        'Quality scoring',
        'Predictive quality analysis',
        'Real-time monitoring',
        'Compliance verification'
      ],
      benefits: [
        'Improve quality consistency by 90%',
        'Reduce inspection time by 70%',
        'Lower defect rates by 60%',
        'Enable continuous monitoring'
      ],
      category: 'Quality Control',
      industry: 'Manufacturing, Food, Pharmaceuticals',
      complexity: 'Advanced',
      rating: 4.9,
      clients: '110+',
      link: 'https://ziontechgroup.com/ai-quality-assurance'
    },
    {
      id: 'ai-energy-management',
      name: 'AI Energy Management',
      description: 'Smart energy optimization and consumption prediction for facilities',
      icon: Activity,
      price: '$2,900/month',
      features: [
        'Energy consumption prediction',
        'Optimization algorithms',
        'Peak demand management',
        'Renewable energy integration',
        'Cost optimization',
        'Sustainability reporting'
      ],
      benefits: [
        'Reduce energy costs by 35%',
        'Improve energy efficiency by 40%',
        'Optimize renewable energy usage',
        'Achieve sustainability goals'
      ],
      category: 'Sustainability',
      industry: 'Real Estate, Manufacturing, Data Centers',
      complexity: 'Advanced',
      rating: 4.8,
      clients: '85+',
      link: 'https://ziontechgroup.com/ai-energy-management'
    }
  ];

  const categories = ['All', 'Analytics', 'Automation', 'Customer Experience', 'Marketing', 'Industrial AI', 'Operations', 'Security', 'Content', 'Human Resources', 'Quality Control', 'Sustainability'];
  const industries = ['All Industries', 'Finance', 'Healthcare', 'Manufacturing', 'E-commerce', 'Retail', 'Technology', 'Energy', 'Transportation', 'Real Estate'];
  const complexities = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedComplexity, setSelectedComplexity] = useState('All Levels');

  const filteredServices = aiServices.filter(service => {
    const categoryMatch = selectedCategory === 'All' || service.category === selectedCategory;
    const industryMatch = selectedIndustry === 'All Industries' || service.industry === selectedIndustry;
    const complexityMatch = selectedComplexity === 'All Levels' || service.complexity === selectedComplexity;
    return categoryMatch && industryMatch && complexityMatch;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white">Loading AI Services...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-holographic-shift">
              AI Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From predictive analytics to automated workflows, we deliver AI that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Get AI Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {categories.map((category) => (
                  <option key={category} value={category} className="bg-slate-900">
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Industry</label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {industries.map((industry) => (
                  <option key={industry} value={industry} className="bg-slate-900">
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Complexity Filter */}
            <div>
              <label className="block text-sm font-medium text-white mb-3">Complexity</label>
              <select
                value={selectedComplexity}
                onChange={(e) => setSelectedComplexity(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                {complexities.map((complexity) => (
                  <option key={complexity} value={complexity} className="bg-slate-900">
                    {complexity}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 quantum-card"
              >
                {/* Service Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium">{service.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>

                {/* Industry and Complexity */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full">
                    {service.industry}
                  </span>
                  <span className={`px-2 py-1 rounded-full ${
                    service.complexity === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                    service.complexity === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {service.complexity}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Rating and Clients */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-gray-300">{service.rating}</span>
                  </div>
                  <div className="text-gray-400">{service.clients} clients</div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-cyan-400 font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                  >
                    <Brain className="w-4 h-4" />
                    Learn More
                  </a>
                  <a
                    href="tel:+13024640950"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold text-sm hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">AI Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage the latest AI technologies to deliver solutions that transform businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-gray-300 text-sm">Advanced algorithms for predictive analytics and pattern recognition</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Vision</h3>
              <p className="text-gray-300 text-sm">Image and video analysis for quality control and automation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Natural Language Processing</h3>
              <p className="text-gray-300 text-sm">Text analysis, sentiment detection, and language understanding</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Process Automation</h3>
              <p className="text-gray-300 text-sm">Intelligent workflow automation and decision-making systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the AI solution that fits your business needs. All plans include implementation, training, and ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Starter AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  1-2 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Basic implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Email support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Monthly reporting
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-br from-cyan-600/20 to-purple-600/20 backdrop-blur-lg rounded-xl p-8 border border-cyan-400/50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  3-5 AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Advanced implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Priority support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Weekly reporting
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise AI</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Unlimited AI services
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Custom AI development
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  24/7 dedicated support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Real-time monitoring
                </li>
              </ul>
              <a
                href="tel:+13024640950"
                className="w-full border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can accelerate your digital transformation and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call (302) 464-0950
            </a>
            <Link
              to="/contact"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MailIcon className="w-5 h-5" />
              Email kleber@ziontechgroup.com
            </Link>
          </div>
          <div className="mt-8 text-gray-400">
            <p>364 E Main St STE 1008, Middletown, DE 19709</p>
            <p>Mon-Fri 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;