import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Target, 
  Globe, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Video,
  MessageSquare,
  TrendingUp,
  Database,
  Eye,
  Settings,
  Award,
  Clock
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIServices = () => {
  const aiServices = [
    {
      title: "AI Video Generation",
      description: "Create professional videos in minutes with AI-powered script generation, voice synthesis, and smart editing",
      icon: <Video className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-video-generator",
      features: ["Script generation", "Voice synthesis", "Auto editing", "50+ languages"],
      featured: true
    },
    {
      title: "AI Customer Insights",
      description: "Transform customer data into actionable insights with AI-powered analytics and predictive behavior modeling",
      icon: <Brain className="w-8 h-8" />,
      price: "From $49/month",
      link: "/zion-ai-customer-insights",
      features: ["Sentiment analysis", "Predictive analytics", "Real-time insights", "Multi-channel integration"],
      featured: true
    },
    {
      title: "AI Invoice Generator",
      description: "Automate invoice creation with AI-powered templates, smart data extraction, and automated billing workflows",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $19/month",
      link: "/zion-ai-invoice-generator",
      features: ["Smart templates", "Auto data extraction", "Multi-currency", "Integration ready"],
      featured: true
    },
    {
      title: "AI Voice Assistant Pro",
      description: "Build intelligent voice assistants with natural language processing and multi-platform deployment",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-voice-assistant-pro",
      features: ["Natural language processing", "Multi-platform", "Custom training", "Real-time responses"],
      featured: false
    },
    {
      title: "AI Code Reviewer",
      description: "Automate code review processes with AI-powered analysis, security scanning, and performance optimization suggestions",
      icon: <Settings className="w-8 h-8" />,
      price: "From $59/month",
      link: "/zion-ai-code-reviewer",
      features: ["Security scanning", "Performance analysis", "Best practices", "Multi-language support"],
      featured: false
    },
    {
      title: "AI Contract Analyzer",
      description: "Analyze contracts with AI-powered legal document processing, risk assessment, and compliance checking",
      icon: <Shield className="w-8 h-8" />,
      price: "From $79/month",
      link: "/zion-ai-contract-analyzer",
      features: ["Risk assessment", "Compliance checking", "Legal insights", "Document comparison"],
      featured: false
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Optimize supply chain operations with AI-powered demand forecasting and logistics optimization",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $99/month",
      link: "/zion-ai-supply-chain-optimizer",
      features: ["Demand forecasting", "Route optimization", "Inventory management", "Cost reduction"],
      featured: false
    },
    {
      title: "AI Translator Pro",
      description: "Advanced translation services with AI-powered language processing and context-aware translations",
      icon: <Globe className="w-8 h-8" />,
      price: "From $29/month",
      link: "/zion-ai-translator-pro",
      features: ["100+ languages", "Context awareness", "Real-time translation", "Document processing"],
      featured: false
    },
    {
      title: "AI Data Cleaner",
      description: "Clean and prepare data with AI-powered data quality assessment and automated cleaning processes",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      link: "/zion-ai-data-cleaner",
      features: ["Data quality assessment", "Automated cleaning", "Duplicate detection", "Format standardization"],
      featured: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Process data and generate insights in real-time with our optimized AI algorithms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precision Accuracy",
      description: "Advanced machine learning models deliver 99.9% accuracy in predictions and analysis"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our team of AI experts and engineers"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "50+", label: "AI Services" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI services designed to transform your business with cutting-edge artificial intelligence solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our comprehensive suite of AI-powered solutions. 
                From automation to analytics, we provide cutting-edge artificial intelligence services.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <FuturisticButton variant="primary" size="lg">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-black/20">
          <ResponsiveContainer>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services designed to meet your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard key={index} className={`p-6 h-full ${service.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                    {service.featured && (
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-green-400 mb-2">
                      {service.price}
                    </div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with industry expertise to deliver exceptional AI solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses already using our AI services to drive growth and innovation
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <FuturisticButton variant="primary" size="lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton variant="secondary" size="lg">
                  Contact Sales
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIServices;
