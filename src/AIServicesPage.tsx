import React, { useState } from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  Cloud,
  Settings,
  Rocket
} from 'lucide-react';

const AIServicesPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic AI consulting to help your organization identify opportunities and implement AI solutions.",
      category: "Consulting"
    },
    {
      icon: Zap,
      title: "AI Development",
      description: "Custom AI application development tailored to your specific business requirements.",
      category: "Development"
    },
    {
      icon: Shield,
      title: "AI Security",
      description: "Comprehensive AI security solutions to protect your data and AI systems.",
      category: "Security"
    },
    {
      icon: BarChart3,
      title: "AI Analytics",
      description: "Advanced analytics and business intelligence powered by artificial intelligence.",
      category: "Analytics"
    },
    {
      icon: Cloud,
      title: "AI Cloud Services",
      description: "Scalable AI solutions delivered through cloud infrastructure.",
      category: "Cloud"
    },
    {
      icon: Settings,
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing systems and workflows.",
      category: "Integration"
    }
  ];

  const categories = ['All', 'Consulting', 'Development', 'Security', 'Analytics', 'Cloud', 'Integration'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">AI Services</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
                AI Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive suite of AI services designed to transform your business 
              and accelerate innovation across all industries.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional AI services tailored to your business needs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category.toLowerCase())}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === category.toLowerCase()
                    ? 'bg-purple-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services
              .filter(service => activeTab === 'all' || service.category.toLowerCase() === activeTab)
              .map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors">
                  <service.icon className="w-12 h-12 text-purple-400 mb-6" />
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 text-sm font-medium">{service.category}</span>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Services?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Professional expertise and cutting-edge technology for your AI journey
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Expert Team",
                description: "Experienced AI professionals with deep industry knowledge"
              },
              {
                icon: Star,
                title: "Proven Results",
                description: "Track record of successful AI implementations and transformations"
              },
              {
                icon: Shield,
                title: "Secure & Compliant",
                description: "Enterprise-grade security and compliance with industry standards"
              },
              {
                icon: Rocket,
                title: "Fast Delivery",
                description: "Rapid deployment and implementation of AI solutions"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get started with our AI services and unlock the full potential of artificial intelligence for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 justify-center">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;