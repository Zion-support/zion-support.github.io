import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, BarChart3, Shield, Zap, Users, Target, Calendar, Check } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";

const AIServicesPage = () => {
  const aiServices = [
    {
      name: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-analytics",
      features: ["Predictive Analytics", "Real-time Dashboards", "Data Visualization", "Custom Reports"],
      color: "from-blue-500 to-cyan-500",
      stats: "40% faster insights"
    },
    {
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: <Zap className="w-8 h-8" />,
      link: "/ai-automation",
      features: ["Process Automation", "Workflow Optimization", "Task Scheduling", "Error Reduction"],
      color: "from-yellow-500 to-orange-500",
      stats: "60% time savings"
    },
    {
      name: "AI Business Intelligence",
      description: "Make data-driven decisions with our comprehensive BI platform powered by AI",
      icon: <Target className="w-8 h-8" />,
      link: "/ai-business-intelligence",
      features: ["Strategic Planning", "Performance Metrics", "Trend Analysis", "ROI Tracking"],
      color: "from-purple-500 to-pink-500",
      stats: "50% better decisions"
    },
    {
      name: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools",
      icon: <Brain className="w-8 h-8" />,
      link: "/ai-content-generation",
      features: ["Content Creation", "SEO Optimization", "Multi-language Support", "Brand Consistency"],
      color: "from-green-500 to-emerald-500",
      stats: "10x content output"
    },
    {
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and support automation",
      icon: <Users className="w-8 h-8" />,
      link: "/ai-customer-service",
      features: ["24/7 Support", "Natural Language Processing", "Sentiment Analysis", "Issue Resolution"],
      color: "from-indigo-500 to-blue-500",
      stats: "90% satisfaction rate"
    },
    {
      name: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and insights",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-data-analytics",
      features: ["Data Mining", "Pattern Recognition", "Predictive Modeling", "Anomaly Detection"],
      color: "from-cyan-500 to-teal-500",
      stats: "85% accuracy"
    },
    {
      name: "AI Email Automation",
      description: "Personalize and automate your email campaigns with AI-powered marketing tools",
      icon: <Zap className="w-8 h-8" />,
      link: "/ai-email-automation",
      features: ["Personalization", "A/B Testing", "Send Time Optimization", "Engagement Tracking"],
      color: "from-pink-500 to-rose-500",
      stats: "3x open rates"
    },
    {
      name: "AI Fraud Detection",
      description: "Protect your business with advanced AI-powered fraud detection and prevention",
      icon: <Shield className="w-8 h-8" />,
      link: "/ai-fraud-detection",
      features: ["Real-time Detection", "Risk Scoring", "Pattern Analysis", "Compliance Support"],
      color: "from-red-500 to-pink-500",
      stats: "99.9% accuracy"
    },
    {
      name: "AI Healthcare",
      description: "Revolutionize healthcare with AI-powered diagnostics and patient care solutions",
      icon: <Brain className="w-8 h-8" />,
      link: "/ai-healthcare",
      features: ["Medical Imaging", "Diagnostic Support", "Treatment Planning", "Patient Monitoring"],
      color: "from-emerald-500 to-green-500",
      stats: "95% diagnostic accuracy"
    },
    {
      name: "AI Marketing",
      description: "Optimize your marketing campaigns with AI-driven insights and automation",
      icon: <Target className="w-8 h-8" />,
      link: "/ai-marketing",
      features: ["Campaign Optimization", "Audience Targeting", "Content Personalization", "ROI Analysis"],
      color: "from-orange-500 to-yellow-500",
      stats: "2x conversion rates"
    },
    {
      name: "AI Predictive Analytics",
      description: "Forecast future trends and outcomes with our advanced predictive analytics platform",
      icon: <BarChart3 className="w-8 h-8" />,
      link: "/ai-predictive-analytics",
      features: ["Trend Forecasting", "Risk Assessment", "Demand Planning", "Scenario Modeling"],
      color: "from-violet-500 to-purple-500",
      stats: "80% prediction accuracy"
    },
    {
      name: "AI Supply Chain",
      description: "Optimize your supply chain operations with AI-powered logistics and inventory management",
      icon: <Zap className="w-8 h-8" />,
      link: "/ai-supply-chain",
      features: ["Inventory Optimization", "Demand Forecasting", "Route Planning", "Cost Reduction"],
      color: "from-teal-500 to-cyan-500",
      stats: "30% cost savings"
    },
    {
      name: "AI Voice Assistant",
      description: "Integrate intelligent voice assistants into your business operations and customer interactions",
      icon: <Users className="w-8 h-8" />,
      link: "/ai-voice-assistant",
      features: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Custom Commands"],
      color: "from-blue-500 to-indigo-500",
      stats: "98% voice accuracy"
    },
    {
      name: "AI Workflow Automation",
      description: "Automate complex business workflows with intelligent process automation",
      icon: <Calendar className="w-8 h-8" />,
      link: "/ai-workflow-automation",
      features: ["Process Mapping", "Task Automation", "Approval Workflows", "Performance Monitoring"],
      color: "from-rose-500 to-pink-500",
      stats: "70% efficiency gain"
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline operations for maximum productivity",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Better Decision Making",
      description: "Leverage AI insights to make data-driven decisions that drive business growth",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation and optimization",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Enhanced Customer Experience",
      description: "Deliver personalized experiences that keep customers engaged and satisfied",
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services. From analytics to automation, we provide cutting-edge artificial intelligence solutions that drive growth and efficiency."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI consulting, business intelligence, predictive analytics, AI solutions"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              AI Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we help you harness the power of AI for competitive advantage.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="#services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Explore Services
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable results and drive business transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.stats}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <Check className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI solutions to drive growth, 
              efficiency, and innovation. Start your AI transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Started Now
              </FuturisticButton>
              <FuturisticButton
                href="/about"
                variant="outline"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
              >
                Learn More About AI
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AIServicesPage;