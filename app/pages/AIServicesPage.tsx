import React from "react";
import { Helmet } from "react-helmet-async";
import { Brain, Bot, BarChart3, Shield, Zap, Target } from "lucide-react";

const AIServicesPage: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Consulting",
      description: "Develop comprehensive AI strategies tailored to your business objectives and industry requirements.",
      features: ["AI Readiness Assessment", "Technology Roadmap", "ROI Analysis", "Implementation Planning"]
    },
    {
      icon: Bot,
      title: "AI Development & Implementation",
      description: "Custom AI solutions built with cutting-edge technologies and best practices.",
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      icon: BarChart3,
      title: "AI Analytics & Insights",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Data Visualization", "Predictive Modeling", "Business Intelligence", "Performance Metrics"]
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI systems are secure, compliant, and ethically sound.",
      features: ["Security Audits", "Compliance Monitoring", "Ethical AI Guidelines", "Risk Assessment"]
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Process Automation", "Workflow Optimization", "Task Automation", "Efficiency Gains"]
    },
    {
      icon: Target,
      title: "AI Training & Support",
      description: "Comprehensive training and ongoing support for your AI initiatives.",
      features: ["Team Training", "Technical Support", "Best Practices", "Continuous Learning"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Professional AI services by Zion Tech Group." />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions
            designed to drive innovation and growth.
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="flex items-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to learn more about our AI services and how they can benefit your business.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;