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
      title: "AI Data Analytics Pro",
      description: "Advanced AI-powered data analytics platform for comprehensive business intelligence and insights",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $99/month",
      link: "/ai-data-analytics-pro",
      features: ["Real-time analytics", "Predictive modeling", "Custom dashboards", "API integration"],
      featured: true
    },
    {
      title: "AI Financial Analysis",
      description: "Intelligent financial analysis and forecasting powered by advanced machine learning algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $149/month",
      link: "/ai-financial-analysis",
      features: ["Risk assessment", "Portfolio optimization", "Market prediction", "Compliance monitoring"],
      featured: false
    },
    {
      title: "AI HR Recruitment Pro",
      description: "Streamline your hiring process with AI-powered candidate screening and talent acquisition",
      icon: <Users className="w-8 h-8" />,
      price: "From $79/month",
      link: "/ai-hr-recruitment-pro",
      features: ["Resume screening", "Skill matching", "Interview scheduling", "Candidate ranking"],
      featured: false
    },
    {
      title: "AI Image Recognition Pro",
      description: "Advanced computer vision solutions for image analysis, object detection, and visual intelligence",
      icon: <Eye className="w-8 h-8" />,
      price: "From $89/month",
      link: "/ai-image-recognition-pro",
      features: ["Object detection", "Facial recognition", "Quality analysis", "Custom models"],
      featured: false
    },
    {
      title: "AI-Powered DevOps",
      description: "Automate your development workflow with intelligent CI/CD pipelines and infrastructure management",
      icon: <Settings className="w-8 h-8" />,
      price: "From $199/month",
      link: "/ai-powered-devops",
      features: ["Auto deployment", "Performance monitoring", "Error prediction", "Resource optimization"],
      featured: false
    },
    {
      title: "AI Quantum Computing",
      description: "Harness the power of quantum computing for complex problem solving and optimization",
      icon: <Zap className="w-8 h-8" />,
      price: "From $299/month",
      link: "/ai-quantum-computing",
      features: ["Quantum algorithms", "Optimization problems", "Cryptography", "Research tools"],
      featured: false
    },
    {
      title: "AI Holographic Workspace",
      description: "Revolutionary 3D workspace powered by AI for immersive collaboration and productivity",
      icon: <Globe className="w-8 h-8" />,
      price: "From $399/month",
      link: "/ai-holographic-workspace",
      features: ["3D visualization", "Virtual meetings", "Spatial computing", "AR/VR integration"],
      featured: false
    },
    {
      title: "AI Healthcare Diagnostics",
      description: "Advanced medical AI for diagnostic assistance, treatment recommendations, and patient monitoring",
      icon: <Shield className="w-8 h-8" />,
      price: "From $499/month",
      link: "/ai-healthcare-diagnostics",
      features: ["Medical imaging", "Symptom analysis", "Treatment plans", "Patient monitoring"],
      featured: false
    },
    {
      title: "AI Customer Sentiment Tracker",
      description: "Monitor and analyze customer sentiment across all channels with real-time AI insights",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $59/month",
      link: "/ai-customer-sentiment-tracker",
      features: ["Real-time monitoring", "Multi-channel analysis", "Trend identification", "Alert system"],
      featured: false
    },
    {
      title: "AI-Powered Email Analyzer",
      description: "Intelligent email analysis for productivity, security, and communication optimization",
      icon: <Database className="w-8 h-8" />,
      price: "From $39/month",
      link: "/ai-powered-email-analyzer",
      features: ["Email classification", "Spam detection", "Priority scoring", "Response suggestions"],
      featured: false
    },
    {
      title: "AI Translation Service",
      description: "Advanced neural machine translation supporting 100+ languages with context awareness",
      icon: <Globe className="w-8 h-8" />,
      price: "From $29/month",
      link: "/ai-translation-service",
      features: ["100+ languages", "Context awareness", "Real-time translation", "API integration"],
      featured: false
    },
    {
      title: "AI Supply Chain Optimizer",
      description: "Optimize your supply chain with AI-powered demand forecasting and logistics management",
      icon: <Target className="w-8 h-8" />,
      price: "From $179/month",
      link: "/ai-supply-chain-optimizer",
      features: ["Demand forecasting", "Route optimization", "Inventory management", "Risk assessment"],
      featured: false
    },
    {
      title: "AI Automation Platform",
      description: "Comprehensive automation platform for business processes with intelligent workflow management",
      icon: <Zap className="w-8 h-8" />,
      price: "From $129/month",
      link: "/ai-automation-platform",
      features: ["Workflow automation", "Process optimization", "Integration hub", "Custom triggers"],
      featured: false
    }
  ];

  const features = [
    {
      title: "Advanced AI Models",
      description: "Powered by state-of-the-art machine learning algorithms and neural networks",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Real-time Processing",
      description: "Lightning-fast processing with sub-second response times",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Scalable Infrastructure",
      description: "Auto-scaling cloud infrastructure that grows with your business",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: "AI Models", value: "50+" },
    { label: "Languages Supported", value: "100+" },
    { label: "Enterprise Clients", value: "500+" },
    { label: "Uptime", value: "99.9%" }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including data analytics, machine learning, computer vision, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, data analytics, automation, computer vision" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From data analytics to automation, we provide comprehensive AI services 
                that drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are built with enterprise-grade technology and designed for scalability, 
                security, and performance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-blue-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to meet your specific business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard key={index} className={`relative ${service.featured ? 'ring-2 ring-blue-400' : ''}`}>
                  {service.featured && (
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </div>
                  )}
                  <div className="text-blue-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to={service.link}>
                    <FuturisticButton className="w-full">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </Link>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get started with our AI services today and experience the power of artificial intelligence 
                in driving your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/case-studies">
                  <FuturisticButton variant="outline" size="lg">
                    View Case Studies
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AIServices;