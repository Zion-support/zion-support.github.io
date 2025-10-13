import React from "react";
import { ArrowRight, CheckCircle, Star, Brain, BarChart3, DollarSign, Settings, Target, TrendingUp, MessageSquare, Rocket } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function AIServices() {
  const aiServices = [
    {
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced business intelligence with AI-powered insights and real-time analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "From $299/month",
      features: ["Real-time analytics", "Predictive insights", "Custom dashboards", "API integration"],
      category: "Analytics",
      rating: 4.9,
      reviews: 127
    },
    {
      id: "ai-content-generator",
      name: "AI Content Generator",
      description: "Generate high-quality content for blogs, social media, and marketing campaigns",
      icon: <Brain className="w-8 h-8" />,
      price: "From $99/month",
      features: ["Multi-language support", "SEO optimization", "Brand voice matching", "Content templates"],
      category: "Content",
      rating: 4.8,
      reviews: 89
    },
    {
      id: "ai-customer-support",
      name: "AI Customer Support",
      description: "Intelligent chatbot and customer service automation with 24/7 availability",
      icon: <MessageSquare className="w-8 h-8" />,
      price: "From $199/month",
      features: ["Natural language processing", "Multi-channel support", "Escalation management", "Analytics"],
      category: "Customer Service",
      rating: 4.7,
      reviews: 156
    },
    {
      id: "ai-marketing-automation",
      name: "AI Marketing Automation",
      description: "Automate marketing campaigns with AI-driven personalization and optimization",
      icon: <Target className="w-8 h-8" />,
      price: "From $149/month",
      features: ["Campaign optimization", "Audience segmentation", "A/B testing", "ROI tracking"],
      category: "Marketing",
      rating: 4.6,
      reviews: 98
    },
    {
      id: "ai-data-analytics",
      name: "AI Data Analytics",
      description: "Transform raw data into actionable insights with machine learning algorithms",
      icon: <TrendingUp className="w-8 h-8" />,
      price: "From $249/month",
      features: ["Data visualization", "Predictive modeling", "Anomaly detection", "Custom reports"],
      category: "Analytics",
      rating: 4.9,
      reviews: 134
    },
    {
      id: "ai-workflow-automation",
      name: "AI Workflow Automation",
      description: "Streamline business processes with intelligent automation and workflow optimization",
      icon: <Settings className="w-8 h-8" />,
      price: "From $179/month",
      features: ["Process automation", "Task optimization", "Integration management", "Performance monitoring"],
      category: "Automation",
      rating: 4.8,
      reviews: 112
    }
  ];

  // const categories = ["All", "Analytics", "Content", "Customer Service", "Marketing", "Automation"];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <meta name="description" content="Discover our comprehensive AI services including analytics, content generation, customer support, and marketing automation. Transform your business with cutting-edge AI technology." />
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, business automation, AI analytics, content generation, customer support AI" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Helmet>
      <SEOOptimizer
        title="AI Services - Zion Tech Group"
        description="Advanced AI solutions for modern businesses"
        keywords="AI, artificial intelligence, machine learning, automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI-powered solutions designed to drive innovation, efficiency, and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <Rocket className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform inline" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Our AI <span className="text-cyan-400">Solutions</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of AI services tailored to your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                      <span className="text-gray-400 text-sm">({service.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                      {service.category}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-2">
                    <Link
                      to={`/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-gray-300 mb-8">
                Get started with our AI services today and experience the power of intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 group hover:scale-105"
                >
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform inline" />
                </Link>
                <Link
                  to="/pricing"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  View Pricing
                  <DollarSign className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform inline" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}