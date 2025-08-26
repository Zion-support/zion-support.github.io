import React from 'react';
import { SEO } from "@/components/SEO";
import { Brain, Cpu, Shield, Cloud, Zap, Target, Users, BarChart3, Globe, Rocket } from 'lucide-react';
const AISolutions = () => {
    const aiServices = [
        {
            icon: Brain,
            title: "AI Autonomous Systems",
            description: "Self-learning AI systems that operate independently and continuously improve performance",
            features: ["Machine Learning", "Neural Networks", "Predictive Analytics", "Automated Decision Making"],
            path: "/ai-autonomous-systems"
        },
        {
            icon: Cpu,
            title: "AI Research Assistant",
            description: "Intelligent research tools that accelerate discovery and analysis across all domains",
            features: ["Data Mining", "Pattern Recognition", "Literature Review", "Hypothesis Generation"],
            path: "/ai-autonomous-research-assistant"
        },
        {
            icon: Shield,
            title: "AI-Powered Cybersecurity",
            description: "Advanced threat detection and prevention using artificial intelligence",
            features: ["Threat Intelligence", "Behavioral Analysis", "Real-time Monitoring", "Automated Response"],
            path: "/ai-powered-enterprise-security"
        },
        {
            icon: Cloud,
            title: "AI Business Intelligence",
            description: "Comprehensive business analytics and insights powered by AI",
            features: ["Data Visualization", "Predictive Modeling", "Performance Metrics", "Strategic Planning"],
            path: "/ai-business-intelligence"
        },
        {
            icon: Zap,
            title: "AI Content Generation",
            description: "Automated content creation for marketing, documentation, and communication",
            features: ["Text Generation", "Image Creation", "Video Production", "Multilingual Support"],
            path: "/ai-content-generator"
        },
        {
            icon: Target,
            title: "AI Sales & Marketing",
            description: "Intelligent automation for sales processes and marketing campaigns",
            features: ["Lead Scoring", "Customer Segmentation", "Campaign Optimization", "ROI Analysis"],
            path: "/ai-agentic-sales-outreach"
        }
    ];
    const benefits = [
        {
            icon: Rocket,
            title: "Accelerated Innovation",
            description: "Speed up development cycles and bring new solutions to market faster"
        },
        {
            icon: Users,
            title: "Enhanced User Experience",
            description: "Create more intuitive and personalized user interactions"
        },
        {
            icon: BarChart3,
            title: "Data-Driven Decisions",
            description: "Make better business decisions with AI-powered insights and analytics"
        },
        {
            icon: Globe,
            title: "Global Scalability",
            description: "Scale your operations globally with AI automation and optimization"
        }
    ];
    return (<div className="min-h-screen bg-background pt-20">
      <SEO title="AI Solutions - Zion Tech Group" description="Discover cutting-edge AI solutions including autonomous systems, research assistance, cybersecurity, and business intelligence from Zion Tech Group." keywords="AI solutions, artificial intelligence, autonomous systems, AI research, cybersecurity, business intelligence" canonical="https://ziontechgroup.com/ai-solutions"/>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 border border-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-zion-purple rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">
                <Brain className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
              AI &{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to predictive analytics, we deliver AI that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get AI Consultation
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* AI Services Overview */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our AI solutions span the entire spectrum of artificial intelligence, 
              from foundational machine learning to cutting-edge deep learning applications.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (<div key={service.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white"/>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (<li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>))}
                  </ul>
                </div>
              </div>))}
          </div>
        </div>
      </section>
      {/* AI Technologies */}
      <section className="py-20 bg-zion-slate-dark">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cutting-Edge AI Technologies
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We leverage the latest advancements in artificial intelligence to deliver 
              innovative solutions that give your business a competitive edge.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (<div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white"/>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Let's discuss how artificial intelligence can transform your business operations, 
              improve efficiency, and drive growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-zion-cyan/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start AI Journey
              </motion.button>
              <button className="px-8 py-4 border border-zion-cyan text-zion-cyan rounded-xl font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">
                Download AI Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>);
};
export default AISolutions;
