import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Award,
  Globe,
  Code,
  Database,
  Smartphone,
  Monitor,
  Heart,
  Receipt,
  TrendingUp,
  Cpu,
  Network,
  FileText,
  Clock,
  Eye,
  MessageSquare,
  Settings,
  Target,
  PieChart,
  Mail,
  Search,
  Lock,
  Activity,
  ShoppingCart,
  BookOpen,
  Truck
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticButton from '../components/FuturisticButton';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: 'AI Analytics',
      description: 'Transform your data into actionable insights with advanced AI-powered analytics',
      icon: <BarChart3 className="w-8 h-8" />,
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Visualization', 'Custom Reports'],
      href: '/ai-analytics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Automation',
      description: 'Streamline your workflows with intelligent automation solutions',
      icon: <Settings className="w-8 h-8" />,
      features: ['Workflow Automation', 'Process Optimization', 'Task Scheduling', 'Smart Triggers'],
      href: '/ai-automation',
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'AI Business Intelligence',
      description: 'Make data-driven decisions with comprehensive business intelligence tools',
      icon: <TrendingUp className="w-8 h-8" />,
      features: ['KPI Tracking', 'Performance Metrics', 'Trend Analysis', 'Strategic Insights'],
      href: '/ai-business-intelligence',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Content Generation',
      description: 'Create engaging content at scale with AI-powered content generation',
      icon: <FileText className="w-8 h-8" />,
      features: ['Content Creation', 'Multi-format Support', 'SEO Optimization', 'Brand Consistency'],
      href: '/ai-content-generation',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI Customer Service',
      description: 'Enhance customer experience with intelligent support solutions',
      icon: <MessageSquare className="w-8 h-8" />,
      features: ['Chatbots', 'Ticket Routing', 'Sentiment Analysis', 'Response Optimization'],
      href: '/ai-customer-service',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'AI Data Analytics',
      description: 'Unlock the power of your data with advanced AI analytics',
      icon: <PieChart className="w-8 h-8" />,
      features: ['Data Mining', 'Pattern Recognition', 'Statistical Analysis', 'Insight Generation'],
      href: '/ai-data-analytics',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Email Automation',
      description: 'Optimize your email marketing with intelligent automation',
      icon: <Mail className="w-8 h-8" />,
      features: ['Email Campaigns', 'Personalization', 'A/B Testing', 'Performance Tracking'],
      href: '/ai-email-automation',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'AI Fraud Detection',
      description: 'Protect your business with advanced fraud detection systems',
      icon: <Shield className="w-8 h-8" />,
      features: ['Real-time Monitoring', 'Anomaly Detection', 'Risk Assessment', 'Alert Systems'],
      href: '/ai-fraud-detection',
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'AI Healthcare',
      description: 'Revolutionize healthcare with AI-powered diagnostic and treatment tools',
      icon: <Heart className="w-8 h-8" />,
      features: ['Medical Imaging', 'Diagnostic Support', 'Treatment Planning', 'Patient Monitoring'],
      href: '/ai-healthcare',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI Marketing',
      description: 'Maximize your marketing ROI with AI-driven strategies',
      icon: <Target className="w-8 h-8" />,
      features: ['Campaign Optimization', 'Audience Targeting', 'Content Personalization', 'ROI Tracking'],
      href: '/ai-marketing',
      color: 'from-pink-500 to-rose-500'
    },
    {
      name: 'AI Predictive Analytics',
      description: 'Forecast future trends and behaviors with predictive modeling',
      icon: <Eye className="w-8 h-8" />,
      features: ['Trend Forecasting', 'Behavior Prediction', 'Risk Modeling', 'Scenario Planning'],
      href: '/ai-predictive-analytics',
      color: 'from-violet-500 to-purple-500'
    },
    {
      name: 'AI Project Management',
      description: 'Optimize project delivery with AI-powered management tools',
      icon: <Clock className="w-8 h-8" />,
      features: ['Resource Planning', 'Timeline Optimization', 'Risk Management', 'Progress Tracking'],
      href: '/ai-project-management',
      color: 'from-amber-500 to-yellow-500'
    }
  ];

  const features = [
    {
      title: 'Advanced Machine Learning',
      description: 'Leverage cutting-edge ML algorithms for superior performance',
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: 'Real-time Processing',
      description: 'Get instant results with our high-performance AI systems',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Scalable Solutions',
      description: 'Grow from startup to enterprise with our scalable AI platform',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Custom Integration',
      description: 'Seamlessly integrate with your existing systems and workflows',
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance for your AI applications',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support from our AI experts',
      icon: <Users className="w-6 h-6" />
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'AI-powered diagnostic tools and patient care optimization',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Finance',
      description: 'Fraud detection, risk assessment, and algorithmic trading',
      icon: <Receipt className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'E-commerce',
      description: 'Personalized recommendations and demand forecasting',
      icon: <ShoppingCart className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      industry: 'Manufacturing',
      description: 'Predictive maintenance and quality control optimization',
      icon: <Cpu className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      industry: 'Education',
      description: 'Personalized learning and intelligent tutoring systems',
      icon: <BookOpen className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      industry: 'Transportation',
      description: 'Autonomous vehicles and route optimization',
      icon: <Truck className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services. From machine learning to predictive analytics, we provide cutting-edge AI solutions tailored to your needs."
        keywords="AI services, artificial intelligence, machine learning, predictive analytics, AI automation, business intelligence, AI consulting"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {' '}That Transform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize your business operations. 
              Our comprehensive AI services deliver measurable results and competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Start Your AI Journey
              </FuturisticButton>
              <FuturisticButton
                href="#services"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Explore Services
              </FuturisticButton>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our AI Service Portfolio
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to address every aspect of your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technology and designed for maximum business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Solutions Across Industries
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our AI services are trusted by leading companies across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-gray-300">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join the AI revolution and unlock new possibilities for your business. 
            Our expert team is ready to help you implement cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Schedule Demo
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
