import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Users, 
  Target, 
  Shield, 
  Brain, 
  Cloud, 
  Lock, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle
} from 'lucide-react';

const EnhancedServicesShowcase: React.FC = () => {
  const newServices = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analytics Platform",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Real-time processing, predictive modeling, and automated reporting.",
      features: ["Real-time Analytics", "Predictive Modeling", "Automated Insights"],
      pricing: "Starting at $199/month",
      category: "AI & Analytics",
      featured: true,
      link: "/services/ai-analytics-platform",
      stats: { metric: "85%", description: "faster insights" }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zero Trust Security Suite",
      description: "Comprehensive security solution implementing zero trust principles. Continuous verification, micro-segmentation, and threat detection.",
      features: ["Continuous Verification", "Micro-segmentation", "Threat Detection"],
      pricing: "Starting at $149/month",
      category: "Cybersecurity",
      featured: true,
      link: "/services/zero-trust-security",
      stats: { metric: "99.9%", description: "security uptime" }
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Edge AI Computing",
      description: "Deploy AI models at the edge for ultra-low latency processing. Perfect for IoT, real-time applications, and distributed computing.",
      features: ["Ultra-low Latency", "Edge Deployment", "Real-time Processing"],
      pricing: "Starting at $299/month",
      category: "Edge Computing",
      featured: true,
      link: "/services/edge-ai-computing",
      stats: { metric: "<50ms", description: "response time" }
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Quantum-Safe Cryptography",
      description: "Future-proof your security with quantum-resistant encryption. Protect against quantum computing threats with advanced cryptographic solutions.",
      features: ["Quantum-Resistant", "Future-Proof", "Advanced Encryption"],
      pricing: "Custom Pricing",
      category: "Quantum Security",
      featured: false,
      link: "/services/quantum-safe-cryptography",
      stats: { metric: "Post-Quantum", description: "ready" }
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Customer Experience Suite",
      description: "Enhance customer interactions with AI-powered chatbots, sentiment analysis, and personalized recommendations.",
      features: ["AI Chatbots", "Sentiment Analysis", "Personalization"],
      pricing: "Starting at $99/month",
      category: "Customer Experience",
      featured: false,
      link: "/services/ai-customer-experience",
      stats: { metric: "40%", description: "satisfaction boost" }
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "MLOps Automation Platform",
      description: "Streamline machine learning operations with automated model deployment, monitoring, and lifecycle management.",
      features: ["Auto Deployment", "Model Monitoring", "Lifecycle Management"],
      pricing: "Starting at $249/month",
      category: "MLOps",
      featured: false,
      link: "/services/mlops-automation",
      stats: { metric: "60%", description: "faster deployment" }
    }
  ];

  const featuredServices = newServices.filter(service => service.featured);
  const otherServices = newServices.filter(service => !service.featured);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 text-sm font-medium mb-6 animate-fade-in border border-green-400/30 shadow-lg">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            🚀 NEW SERVICES LAUNCHED - 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up">
            Revolutionary AI & Technology Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transform your business with our cutting-edge AI platforms, quantum-safe security, and edge computing solutions. 
            Join 500+ companies already scaling with our innovative technology stack.
          </p>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30 rounded-xl p-6 mb-12 animate-fade-in">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="w-6 h-6 text-green-400 animate-pulse" />
              <div>
                <h3 className="text-lg font-bold text-green-400">LIMITED TIME: 50% OFF First 3 Months</h3>
                <p className="text-green-300 text-sm">Plus FREE AI Strategy Consultation • Valid until March 31, 2025</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 hover:shadow-2xl border-2 border-blue-500/30 bg-blue-500/10"
              >
                <div className="bg-blue-500/20 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30 shadow-lg">
                  <div className="text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-xs uppercase tracking-wider text-blue-400 mb-2">{service.category}</div>
                  <h4 className="text-xl font-semibold text-white mb-3">{service.title}</h4>
                  <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-500/20 rounded-lg p-4 mb-6">
                  <div className="text-blue-400 font-bold text-lg">{service.stats.metric}</div>
                  <div className="text-blue-300 text-sm">{service.stats.description}</div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-green-400 font-semibold">{service.pricing}</div>
                </div>

                <Link
                  to={service.link}
                  className="btn-primary w-full text-center group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Other Services Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Additional Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {otherServices.map((service, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-700/50"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gray-700/50 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-gray-400">{service.icon}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">{service.category}</div>
                    <h5 className="font-semibold text-white mb-2 line-clamp-2">{service.title}</h5>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-2">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 text-sm font-medium">{service.pricing}</span>
                      <Link
                        to={service.link}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                      >
                        Learn more
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-400/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join hundreds of companies already using our AI and technology solutions to drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Explore All Services
              </Link>
              <Link
                to="/contact"
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesShowcase;