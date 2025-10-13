import React from 'react';
import { Brain, Zap, Shield, Globe, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const AIServicesPage = () => {
  const aiServices = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI-powered analytics platform.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      price: "From $299/month",
      link: "/ai-analytics"
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools.",
      icon: <Brain className="w-8 h-8" />,
      features: ["Blog Posts", "Social Media Content", "Product Descriptions", "Email Campaigns"],
      price: "From $199/month",
      link: "/ai-content-generation"
    },
    {
      title: "AI Customer Support",
      description: "Enhance customer experience with intelligent chatbots and automated support systems.",
      icon: <Users className="w-8 h-8" />,
      features: ["24/7 Chatbots", "Multi-language Support", "Sentiment Analysis", "Ticket Automation"],
      price: "From $149/month",
      link: "/ai-customer-support"
    },
    {
      title: "AI Cybersecurity",
      description: "Protect your business with AI-powered threat detection and automated security responses.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Threat Detection", "Automated Response", "Risk Assessment", "Compliance Monitoring"],
      price: "From $399/month",
      link: "/ai-cybersecurity"
    },
    {
      title: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and machine learning.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Machine Learning Models", "Data Mining", "Pattern Recognition", "Predictive Modeling"],
      price: "From $249/month",
      link: "/ai-data-analytics"
    },
    {
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation and workflow optimization.",
      icon: <Zap className="w-8 h-8" />,
      features: ["Process Automation", "Task Optimization", "Resource Allocation", "Performance Monitoring"],
      price: "From $179/month",
      link: "/ai-workflow-automation"
    }
  ];

  const benefits = [
    {
      title: "40% Efficiency Boost",
      description: "Our AI solutions typically increase operational efficiency by 40% within the first 3 months.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "99.9% Accuracy",
      description: "Advanced machine learning algorithms ensure high accuracy in all AI-powered processes.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "24/7 Availability",
      description: "AI systems work around the clock, providing continuous service and monitoring.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Our AI solutions grow with your business, adapting to increasing demands and complexity.",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions"
        description="Transform your business with our comprehensive AI services including analytics, content generation, customer support, cybersecurity, and workflow automation."
        keywords="AI services, artificial intelligence, machine learning, business intelligence, AI analytics, AI automation, AI cybersecurity"
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
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions. From analytics to automation, 
            we provide comprehensive AI services that drive growth and innovation.
          </p>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={service.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to deliver measurable results and drive business growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
