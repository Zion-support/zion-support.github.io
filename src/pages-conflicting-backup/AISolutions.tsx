import React from 'react';
import { SEO } from "@/components/SEO";
import { Brain, Cpu, Shield, Cloud, Zap, Target, Users, BarChart3, Globe, Rocket } from 'lucide-react';

const AISolutions: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-background pt-20">
      <SEO 
        title="AI Solutions - Zion Tech Group" 
        description="Discover cutting-edge AI solutions including autonomous systems, research assistance, cybersecurity, and business intelligence from Zion Tech Group."
        keywords="AI solutions, artificial intelligence, autonomous systems, AI research, cybersecurity, business intelligence"
        canonical="https://ziontechgroup.com/ai-solutions"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI Solutions for the
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Future</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From autonomous systems to intelligent analytics, we deliver the future of technology today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions span across all major business domains, providing intelligent automation 
              and insights that drive growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of AI with our proven solutions and expert implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the AI revolution and stay ahead of the competition. 
            Our experts are ready to help you implement cutting-edge AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISolutions;