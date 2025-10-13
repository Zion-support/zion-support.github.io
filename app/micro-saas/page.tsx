import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Cloud, 
  Users, 
  Target, 
  Calendar,
  Mail,
  Smartphone,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  Clock,
  Award
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasServices = [
    {
      name: "Zion AI Video Generator Pro",
      description: "AI-powered video creation platform with advanced editing, voice synthesis, and automated content generation",
      price: "From $199/month",
      features: ["AI Video Generation", "Voice Synthesis", "Auto-Editing", "Multi-Platform Export"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/zion-ai-video-generator",
      popular: true
    },
    {
      name: "Zion AI Invoice Generator",
      description: "Intelligent invoice creation with automated data extraction, payment tracking, and financial analytics",
      price: "From $99/month",
      features: ["Auto Invoice Generation", "Payment Tracking", "Financial Analytics", "Multi-Currency Support"],
      icon: <Mail className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-ai-invoice-generator",
      popular: false
    },
    {
      name: "Zion AI Customer Insights Pro",
      description: "Advanced customer analytics platform with predictive insights, behavior analysis, and personalized recommendations",
      price: "From $299/month",
      features: ["Predictive Analytics", "Behavior Analysis", "Personalization Engine", "Real-time Insights"],
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-ai-customer-insights",
      popular: true
    },
    {
      name: "Zion AI Email Analyzer",
      description: "Smart email analysis tool with sentiment detection, priority scoring, and automated response suggestions",
      price: "From $149/month",
      features: ["Sentiment Analysis", "Priority Scoring", "Auto-Response", "Email Analytics"],
      icon: <Mail className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/zion-ai-email-analyzer",
      popular: false
    },
    {
      name: "Zion Smart Inventory Optimizer",
      description: "AI-powered inventory management with demand forecasting, automated reordering, and supply chain optimization",
      price: "From $249/month",
      features: ["Demand Forecasting", "Auto Reordering", "Supply Chain Optimization", "Cost Reduction"],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/zion-smart-inventory-optimizer",
      popular: true
    },
    {
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring across all channels with automated alerts and response recommendations",
      price: "From $179/month",
      features: ["Real-time Monitoring", "Multi-Channel Analysis", "Automated Alerts", "Response Recommendations"],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/zion-ai-customer-sentiment-tracker",
      popular: false
    },
    {
      name: "Zion Smart Expense Categorizer",
      description: "Intelligent expense management with automatic categorization, receipt processing, and financial reporting",
      price: "From $129/month",
      features: ["Auto Categorization", "Receipt Processing", "Financial Reporting", "Tax Preparation"],
      icon: <Target className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/zion-smart-expense-categorizer",
      popular: false
    },
    {
      name: "Zion AI Voice Assistant Pro",
      description: "Advanced voice assistant with natural language processing, task automation, and multi-language support",
      price: "From $199/month",
      features: ["Natural Language Processing", "Task Automation", "Multi-Language", "Voice Analytics"],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/zion-ai-voice-assistant-pro",
      popular: true
    },
    {
      name: "Zion AI Code Reviewer",
      description: "Automated code review tool with security analysis, performance optimization, and best practice recommendations",
      price: "From $159/month",
      features: ["Security Analysis", "Performance Optimization", "Best Practices", "Automated Reviews"],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-ai-code-reviewer",
      popular: false
    },
    {
      name: "Zion AI Social Media Manager",
      description: "AI-powered social media management with content generation, scheduling, and performance analytics",
      price: "From $189/month",
      features: ["Content Generation", "Auto Scheduling", "Performance Analytics", "Multi-Platform"],
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/zion-ai-social-media-manager",
      popular: true
    },
    {
      name: "Zion AI Contract Analyzer",
      description: "Intelligent contract analysis with risk assessment, compliance checking, and automated clause extraction",
      price: "From $229/month",
      features: ["Risk Assessment", "Compliance Checking", "Clause Extraction", "Contract Analytics"],
      icon: <Lock className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      link: "/zion-ai-contract-analyzer",
      popular: false
    },
    {
      name: "Zion AI Performance Optimizer",
      description: "AI-driven performance optimization for applications, databases, and infrastructure with automated tuning",
      price: "From $279/month",
      features: ["Application Optimization", "Database Tuning", "Infrastructure Optimization", "Automated Tuning"],
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/zion-ai-performance-optimizer",
      popular: true
    }
  ];

  const features = [
    {
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge artificial intelligence to automate complex business processes and workflows",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection",
      icon: <Shield className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics and reporting with real-time insights and predictive intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scalable Infrastructure",
      description: "Cloud-native architecture that scales automatically with your business growth and demands",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | AI-Powered Business Tools"
        description="Discover our comprehensive suite of micro SAAS solutions powered by AI. From video generation to customer insights, optimize your business with cutting-edge technology."
        keywords="micro saas, ai tools, business automation, video generator, customer insights, inventory management, expense tracking, voice assistant, social media manager"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">50+ AI-Powered Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your business with our comprehensive suite of AI-powered micro SAAS solutions. 
            From video generation to customer insights, we have the tools you need to succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Globe className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered micro SAAS solutions are designed to integrate seamlessly into your existing workflow, 
              providing immediate value and long-term growth potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Micro SAAS Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI-powered micro SAAS solutions designed to solve specific business challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-purple-400 font-medium">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;