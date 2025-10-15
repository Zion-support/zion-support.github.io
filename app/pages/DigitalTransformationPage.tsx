import React from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, TrendingUp, Users, Clock, DollarSign, Target } from "lucide-react";

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: TrendingUp,
      title: "Process Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      features: ["Workflow Automation", "Document Processing", "Data Integration", "Quality Control"]
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Enhance customer interactions with digital solutions and AI-powered insights.",
      features: ["Customer Analytics", "Personalization", "Omnichannel Support", "Feedback Systems"]
    },
    {
      icon: Clock,
      title: "Operational Efficiency",
      description: "Optimize your operations with data-driven insights and smart technologies.",
      features: ["Performance Monitoring", "Resource Optimization", "Predictive Analytics", "Real-time Dashboards"]
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Reduce operational costs through intelligent automation and optimization.",
      features: ["Cost Analysis", "Resource Management", "Process Optimization", "ROI Tracking"]
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive digital transformation strategies for your business.",
      features: ["Digital Assessment", "Technology Roadmap", "Change Management", "Implementation Planning"]
    }
  ];

  const benefits = [
    "Increased operational efficiency",
    "Enhanced customer experience",
    "Reduced operational costs",
    "Improved data-driven decision making",
    "Faster time to market",
    "Better competitive advantage"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with comprehensive digital transformation solutions including process automation, customer experience, and operational efficiency." />
        <meta name="keywords" content="digital transformation, process automation, customer experience, operational efficiency, business optimization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Transformation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with comprehensive digital solutions that drive growth, 
            efficiency, and innovation across all areas of your organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg mr-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Our Digital Transformation Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-6">
              Let our digital transformation experts help you modernize your business processes and achieve your goals.
            </p>
            <button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300">
              Start Your Transformation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;