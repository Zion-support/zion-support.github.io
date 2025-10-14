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
      title: "AI Content Generation",
      description: "Generate high-quality content for blogs, social media, and marketing materials with advanced AI",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $19/month",
      link: "/ai-content-generation",
      features: ["Blog posts", "Social media", "Email campaigns", "SEO optimization"]
    },
    {
      title: "AI Analytics Pro",
      description: "Advanced data analytics with AI-powered insights, predictions, and automated reporting",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $39/month",
      link: "/ai-analytics",
      features: ["Predictive analytics", "Real-time dashboards", "Automated reports", "Custom metrics"]
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection, automated response, and security monitoring",
      icon: <Shield className="w-8 h-8" />,
      price: "From $59/month",
      link: "/ai-cybersecurity",
      features: ["Threat detection", "Automated response", "24/7 monitoring", "Compliance reporting"]
    },
    {
      title: "AI Customer Support",
      description: "Intelligent chatbots and automated customer service solutions powered by advanced AI",
      icon: <Users className="w-8 h-8" />,
      price: "From $29/month",
      link: "/ai-customer-support",
      features: ["Smart chatbots", "Multi-language support", "Ticket automation", "Customer insights"]
    },
    {
      title: "AI Data Analytics",
      description: "Transform raw data into actionable insights with AI-powered analytics and visualization",
      icon: <Database className="w-8 h-8" />,
      price: "From $49/month",
      link: "/ai-data-analytics",
      features: ["Data visualization", "Predictive modeling", "Real-time analysis", "Custom dashboards"]
    },
    {
      title: "AI Document Processing",
      description: "Automate document processing, extraction, and analysis with intelligent AI systems",
      icon: <Settings className="w-8 h-8" />,
      price: "From $39/month",
      link: "/ai-document-processing",
      features: ["Document extraction", "Text analysis", "Automated workflows", "OCR technology"]
    },
    {
      title: "AI Marketing Automation",
      description: "Streamline marketing campaigns with AI-powered automation and personalization",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $34/month",
      link: "/ai-marketing-automation",
      features: ["Campaign automation", "Personalization", "A/B testing", "Performance tracking"]
    },
    {
      title: "AI Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with advanced predictive modeling",
      icon: <Target className="w-8 h-8" />,
      price: "From $44/month",
      link: "/ai-predictive-analytics",
      features: ["Trend forecasting", "Risk assessment", "Demand prediction", "Scenario planning"]
    },
    {
      title: "AI Voice Assistant",
      description: "Build intelligent voice assistants for your business with natural language processing",
      icon: <Globe className="w-8 h-8" />,
      price: "From $39/month",
      link: "/ai-voice-assistant",
      features: ["Voice recognition", "Natural language", "Multi-platform", "Custom commands"]
    },
    {
      title: "AI Workflow Automation",
      description: "Automate complex business processes with intelligent workflow management",
      icon: <Zap className="w-8 h-8" />,
      price: "From $29/month",
      link: "/ai-workflow-automation",
      features: ["Process automation", "Smart routing", "Exception handling", "Performance monitoring"]
    }
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced AI Technology",
      description: "Cutting-edge machine learning algorithms and neural networks"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Deploy anywhere with our worldwide infrastructure"
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
        <meta name="description" content="Comprehensive AI services including video generation, analytics, cybersecurity, and automation solutions for modern businesses." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, analytics, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                AI Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with cutting-edge AI solutions. From video generation to predictive analytics, 
                we provide comprehensive AI services that drive innovation and growth.
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
                Our AI solutions are built with enterprise-grade technology and designed for scalability, security, and performance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard key={index} className={`${service.featured ? 'ring-2 ring-purple-400' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400">
                      {service.icon}
                    </div>
                    {service.featured && (
                      <div className="flex items-center text-yellow-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 text-sm font-medium">Featured</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="text-2xl font-bold text-purple-400 mb-2">{service.price}</div>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <FuturisticButton
                    as={Link}
                    to={service.link}
                    className="w-full justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Get started with our AI services today and experience the power of artificial intelligence in your business operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-white text-purple-600 hover:bg-gray-100"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-purple-600"
                >
                  View Demo
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
