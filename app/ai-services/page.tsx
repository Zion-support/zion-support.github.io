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
      title: "AI Document Processing",
      description: "Automate document processing with AI-powered OCR, data extraction, and intelligent classification",
      icon: <Database className="w-8 h-8" />,
      price: "From $129/month",
      link: "/ai-document-processing",
      features: ["OCR processing", "Data extraction", "Smart classification", "Workflow automation"],
      featured: false
    },
    {
      title: "AI Voice Assistant",
      description: "Build custom voice assistants with natural language processing and speech recognition capabilities",
      icon: <Settings className="w-8 h-8" />,
      price: "From $179/month",
      link: "/ai-voice-assistant",
      features: ["Voice recognition", "Natural language", "Custom commands", "Multi-platform support"],
      featured: false
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and workflow optimization",
      icon: <Zap className="w-8 h-8" />,
      price: "From $159/month",
      link: "/ai-workflow-automation",
      features: ["Process automation", "Smart routing", "Exception handling", "Performance monitoring"],
      featured: false
    },
    {
      title: "AI Predictive Analytics",
      description: "Leverage predictive analytics to forecast trends, optimize operations, and make data-driven decisions",
      icon: <Eye className="w-8 h-8" />,
      price: "From $249/month",
      link: "/ai-predictive-analytics",
      features: ["Trend forecasting", "Risk assessment", "Optimization models", "Real-time predictions"],
      featured: false
    }
  ];

  const benefits = [
    {
      title: "40% Efficiency Boost",
      description: "Our AI solutions typically increase operational efficiency by 40% within the first 3 months",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "99.9% Accuracy",
      description: "Advanced machine learning models deliver exceptional accuracy in data processing and analysis",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Availability",
      description: "AI-powered systems operate continuously, providing round-the-clock support and monitoring",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Our AI platforms scale seamlessly with your business growth and changing requirements",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including machine learning, automation, and intelligent analytics solutions." />
        <meta name="keywords" content="AI services, machine learning, artificial intelligence, automation, data analytics, business intelligence" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Services",
            "description": "Comprehensive artificial intelligence services for business transformation",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "offers": {
              "@type": "Offer",
              "priceRange": "$29-$299/month",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>

      <ResponsiveContainer className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services That
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}Transform{" "}
              </span>
              Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leverage the power of artificial intelligence to automate processes, gain insights, 
              and drive innovation across your organization with our comprehensive AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                View Case Studies
              </FuturisticButton>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Featured AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.filter(service => service.featured).map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                        {service.icon}
                      </div>
                      <span className="text-sm font-semibold text-green-400 bg-green-900/20 px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-white">{service.price}</span>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
                      >
                        Learn More
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </div>

        {/* All Services */}
        <div className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Complete AI Service Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiServices.map((service, index) => (
                <FuturisticCard
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-purple-500 transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg mr-4">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{service.title}</h3>
                        <p className="text-sm text-gray-400">{service.price}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold text-sm"
                    >
                      Explore Service
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                variant="primary"
                size="lg"
                className="bg-white text-gray-900 hover:bg-gray-100"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </FuturisticButton>
              <FuturisticButton
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-gray-900"
              >
                Schedule Consultation
              </FuturisticButton>
            </div>
          </div>
        </div>
      </ResponsiveContainer>
    </>
  );
};

export default AIServices;
