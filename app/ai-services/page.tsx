'use client';
import React from 'react';
import { Brain, Zap, BarChart, Users, Shield, Code, Target, Globe, Smartphone, TrendingUp, Settings, FileText, Search, Mail, Calendar, CheckSquare, Sparkles, Cpu, Lock, Database, Cloud, ArrowRight, Star, CheckCircle } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      category: "Core AI Solutions",
      services: [
        {
          name: "AI-Powered Business Intelligence",
          description: "Transform your data into actionable insights with advanced AI analytics, predictive modeling, and automated reporting.",
          features: ["Real-time analytics", "Predictive forecasting", "Custom dashboards", "Automated insights"],
          pricing: "Starting at $1,500/month",
          icon: BarChart,
          color: "text-cyan-400",
          popular: true
        },
        {
          name: "AI Customer Support Automation",
          description: "Revolutionary AI-powered customer service with chatbots, sentiment analysis, and intelligent ticket routing.",
          features: ["24/7 AI chatbots", "Sentiment analysis", "Auto ticket routing", "Multi-language support"],
          pricing: "Starting at $299/month",
          icon: Users,
          color: "text-green-400"
        },
        {
          name: "AI Content Generation Suite",
          description: "Complete content creation platform with AI writing, image generation, video editing, and social media automation.",
          features: ["AI writing assistant", "Image generation", "Video editing", "Social media automation"],
          pricing: "Starting at $199/month",
          icon: Code,
          color: "text-pink-400"
        },
        {
          name: "AI Sales Automation Platform",
          description: "Boost sales by 300% with intelligent lead scoring, automated outreach, CRM integration, and predictive analytics.",
          features: ["Lead scoring", "Auto outreach", "CRM integration", "Sales forecasting"],
          pricing: "Starting at $399/month",
          icon: Target,
          color: "text-blue-400"
        }
      ]
    },
    {
      category: "Industry-Specific AI",
      services: [
        {
          name: "AI Healthcare Solutions",
          description: "Cutting-edge AI for medical imaging, drug discovery, patient monitoring, and personalized medicine.",
          features: ["Medical imaging AI", "Drug discovery", "Patient monitoring", "Diagnostic assistance"],
          pricing: "Starting at $2,999/month",
          icon: Shield,
          color: "text-green-400",
          popular: true
        },
        {
          name: "AI Financial Services",
          description: "Revolutionary AI for trading, fraud detection, risk management, and algorithmic trading strategies.",
          features: ["Algorithmic trading", "Fraud detection", "Risk assessment", "Portfolio optimization"],
          pricing: "Starting at $1,999/month",
          icon: TrendingUp,
          color: "text-indigo-400"
        },
        {
          name: "AI E-commerce Platform",
          description: "Complete e-commerce AI solution with recommendation engines, price optimization, and inventory management.",
          features: ["Recommendation engine", "Price optimization", "Inventory management", "Customer behavior analysis"],
          pricing: "Starting at $799/month",
          icon: Globe,
          color: "text-purple-400"
        },
        {
          name: "AI Cybersecurity Suite",
          description: "Advanced AI security solutions with threat detection, vulnerability assessment, and automated response.",
          features: ["Threat detection", "Vulnerability scanning", "Auto response", "Security monitoring"],
          pricing: "Starting at $599/month",
          icon: Lock,
          color: "text-red-400"
        }
      ]
    },
    {
      category: "AI Development Tools",
      services: [
        {
          name: "AI Model Development",
          description: "Custom AI model development, training, and deployment with MLOps pipeline and monitoring.",
          features: ["Custom model training", "MLOps pipeline", "Model monitoring", "A/B testing"],
          pricing: "Starting at $2,499/month",
          icon: Brain,
          color: "text-cyan-400"
        },
        {
          name: "AI API Development",
          description: "Build and deploy AI APIs with comprehensive documentation, testing, and monitoring capabilities.",
          features: ["API development", "Documentation", "Testing suite", "Performance monitoring"],
          pricing: "Starting at $999/month",
          icon: Code,
          color: "text-blue-400"
        },
        {
          name: "AI Data Pipeline",
          description: "Automated data processing, cleaning, and preparation pipelines for AI model training and inference.",
          features: ["Data processing", "Data cleaning", "Feature engineering", "Pipeline automation"],
          pricing: "Starting at $699/month",
          icon: Database,
          color: "text-teal-400"
        },
        {
          name: "AI Mobile Integration",
          description: "Integrate AI capabilities into mobile applications with SDKs, APIs, and real-time processing.",
          features: ["Mobile SDKs", "Real-time processing", "Offline capabilities", "Cross-platform support"],
          pricing: "Starting at $1,299/month",
          icon: Smartphone,
          color: "text-orange-400"
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "Proven Results",
      description: "Average 300% ROI increase for our clients",
      icon: TrendingUp,
      color: "text-green-400"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert support and monitoring",
      icon: Shield,
      color: "text-blue-400"
    },
    {
      title: "Scalable Solutions",
      description: "Grows with your business needs",
      icon: Zap,
      color: "text-yellow-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance",
      icon: Lock,
      color: "text-red-400"
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Comprehensive AI services including business intelligence, customer support automation, content generation, and industry-specific AI solutions. Transform your business with cutting-edge artificial intelligence."
        keywords={['AI services', 'artificial intelligence', 'machine learning', 'AI automation', 'business intelligence', 'AI consulting', 'AI development']}
        canonicalUrl="https://ziontechgroup.com/ai-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="AI Services">
              AI Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Transform Your Business with Advanced Artificial Intelligence
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Our comprehensive AI services help businesses leverage artificial intelligence to automate processes, 
              gain insights, and achieve unprecedented growth. From custom AI development to ready-to-use solutions.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300">Average ROI Increase</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-gray-300">AI Models Deployed</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime Guarantee</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Expert Support</div>
              </div>
            </div>
          </section>

          {/* Services by Category */}
          {aiServices.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className={`quantum-card p-8 ${service.popular ? 'border-2 border-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center mb-6">
                      <service.icon className={`w-8 h-8 ${service.color} mr-4`} />
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                      <button className="cyber-button">
                        Get Started
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our AI Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className={`w-12 h-12 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a free consultation and discover how AI can revolutionize your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;