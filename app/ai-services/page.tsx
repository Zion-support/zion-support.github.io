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
      features: ["Predictive modeling", "Anomaly detection", "Automated reporting", "Data visualization"],
      featured: false
    }
  ];

  const capabilities = [
    {
      title: "Machine Learning",
      description: "Advanced ML algorithms for predictive modeling, pattern recognition, and automated decision making",
      icon: <Brain className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Natural Language Processing",
      description: "Understand and process human language for chatbots, content analysis, and automated responses",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "50+ languages"
    },
    {
      title: "Computer Vision",
      description: "Analyze and understand visual content for image recognition, object detection, and visual insights",
      icon: <Eye className="w-6 h-6" />,
      stats: "99.2% accuracy"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast future trends and outcomes using advanced statistical models and AI algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Zion's AI services have transformed our business operations. We've increased efficiency by 60% and reduced costs by 40%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Solutions",
      role: "CTO",
      content: "The AI-powered insights help us make data-driven decisions faster than ever. Our revenue has increased by 35% in just 6 months.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Outstanding AI solutions that scale with our business. The automation capabilities have saved us thousands of hours.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: <Brain className="w-6 h-6" /> },
    { number: "10,000+", label: "Businesses Transformed", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "50%", label: "Average Cost Reduction", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our cutting-edge AI services including machine learning, natural language processing, computer vision, and predictive analytics."
        keywords="AI services, artificial intelligence, machine learning, NLP, computer vision, predictive analytics, business automation"
        canonical="https://ziontechgroup.com/ai-services"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed to drive innovation, efficiency, and growth.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-cyan-400">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
