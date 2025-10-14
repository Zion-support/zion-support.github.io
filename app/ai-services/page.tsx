import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  Settings
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
      title: "AI Cybersecurity Suite",
      description: "Enterprise-grade AI-powered cybersecurity with advanced threat detection and automated incident response",
      icon: <Shield className="w-8 h-8" />,
      price: "From $299/month",
      link: "/zion-ai-cybersecurity-suite-pro",
      features: ["Threat detection", "Zero-trust architecture", "Automated response", "Compliance automation"],
      featured: true
    },
    {
      title: "AI Business Intelligence",
      description: "AI-powered business intelligence platform with predictive analytics and natural language queries",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $199/month",
      link: "/zion-ai-business-intelligence-pro",
      features: ["Predictive analytics", "Real-time dashboards", "Natural language queries", "Custom AI models"],
      featured: true
    },
    {
      title: "AI Content Generation",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns using advanced AI",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $99/month",
      link: "/ai-content-generation",
      features: ["Blog posts", "Social media", "Email campaigns", "SEO optimization"],
      featured: false
    },
    {
      title: "AI Marketing Automation",
      description: "Automate your marketing campaigns with AI-powered personalization and multi-channel orchestration",
      icon: <Target className="w-8 h-8" />,
      price: "From $149/month",
      link: "/ai-marketing-automation",
      features: ["Campaign automation", "Personalization", "A/B testing", "Performance analytics"],
      featured: false
    },
    {
      title: "AI Customer Support",
      description: "Deploy intelligent chatbots and virtual assistants for 24/7 customer support and engagement",
      icon: <Users className="w-8 h-8" />,
      price: "From $79/month",
      link: "/ai-customer-support",
      features: ["Intelligent chatbots", "Multi-language support", "Sentiment analysis", "Escalation management"],
      featured: false
    },
    {
      title: "AI Data Analytics",
      description: "Advanced data analytics and insights powered by machine learning and artificial intelligence",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $199/month",
      link: "/ai-data-analytics",
      features: ["Machine learning", "Predictive modeling", "Real-time insights", "Custom dashboards"],
      featured: false
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and AI-powered decision making",
      icon: <Settings className="w-8 h-8" />,
      price: "From $129/month",
      link: "/ai-workflow-automation",
      features: ["Process automation", "Smart routing", "Decision trees", "Integration APIs"],
      featured: false
    },
    {
      title: "AI Voice Assistant",
      description: "Deploy custom voice assistants for your business with natural language processing capabilities",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $89/month",
      link: "/ai-voice-assistant",
      features: ["Voice recognition", "Natural language", "Multi-language", "Custom training"],
      featured: false
    },
    {
      title: "AI Document Processing",
      description: "Intelligent document processing and data extraction using advanced OCR and AI technologies",
      icon: <Database className="w-8 h-8" />,
      price: "From $159/month",
      link: "/ai-document-processing",
      features: ["OCR processing", "Data extraction", "Form recognition", "Batch processing"],
      featured: false
    },
    {
      title: "AI Predictive Analytics",
      description: "Forecast future trends and behaviors with advanced machine learning and statistical modeling",
      icon: <Eye className="w-8 h-8" />,
      price: "From $179/month",
      link: "/ai-predictive-analytics",
      features: ["Trend forecasting", "Risk assessment", "Pattern recognition", "Custom models"],
      featured: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Deploy AI solutions in minutes, not months"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security and compliance standards"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Deploy anywhere with our worldwide infrastructure"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Proven Results",
      description: "Trusted by 1000+ businesses worldwide"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including video generation, customer insights, cybersecurity, and business intelligence. Transform your business with cutting-edge AI solutions." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, automation, business intelligence, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                AI Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge AI solutions. From video generation to cybersecurity, 
                we provide comprehensive AI services that drive innovation and growth.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <FuturisticButton href="#services" className="bg-blue-600 hover:bg-blue-700">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton href="/contact" variant="outline">
                  Get Started
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services designed to meet your specific business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <FuturisticCard key={index} className={`${service.featured ? 'ring-2 ring-blue-500' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-blue-400">
                      {service.icon}
                    </div>
                    {service.featured && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-blue-400">{service.price}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton 
                    href={service.link} 
                    className="w-full justify-center"
                    variant={service.featured ? "default" : "outline"}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <ResponsiveContainer>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our AI services to drive growth and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <FuturisticButton href="/contact" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </FuturisticButton>
                <FuturisticButton href="/demo" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Schedule Demo
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
