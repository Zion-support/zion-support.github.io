import React from 'react';
import { Helmet } from "react-helmet-async";
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Process Automation",
      description: "Streamline and automate business processes to improve efficiency and reduce manual errors.",
      features: [
        "Workflow Analysis",
        "Process Mapping",
        "Automation Implementation",
        "Performance Monitoring"
      ]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your team through digital transformation with effective change management strategies.",
      features: [
        "Training Programs",
        "Stakeholder Engagement",
        "Communication Plans",
        "Resistance Management"
      ]
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive digital transformation roadmaps aligned with your business goals.",
      features: [
        "Technology Assessment",
        "Gap Analysis",
        "Implementation Roadmap",
        "Success Metrics"
      ]
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Leverage data-driven insights to make informed business decisions and drive growth.",
      features: [
        "Data Collection",
        "Analytics Setup",
        "Dashboard Creation",
        "Insight Generation"
      ]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Identify and implement innovative technologies to give your business a competitive edge.",
      features: [
        "Technology Research",
        "Innovation Workshops",
        "Pilot Programs",
        "Scalability Planning"
      ]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensure the quality and reliability of your digital transformation initiatives.",
      features: [
        "Testing Strategies",
        "Quality Metrics",
        "Performance Monitoring",
        "Continuous Improvement"
      ]
    }
  ];

  const benefits = [
    "Increased operational efficiency and productivity",
    "Improved customer experience and satisfaction",
    "Reduced operational costs and manual errors",
    "Better data-driven decision making",
    "Enhanced competitive advantage",
    "Future-ready business processes"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Digital Transformation | Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services to modernize your business processes and drive growth." />
        <meta name="keywords" content="digital transformation, process automation, change management, business modernization" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with comprehensive digital solutions that drive efficiency, 
            innovation, and growth in the modern digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              Start Transformation
            </button>
            <button className="px-8 py-3 border border-green-600 text-green-400 rounded-lg hover:bg-green-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="text-green-400 mb-4">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Transformation Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Transformation Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Assessment
              </h3>
              <p className="text-gray-300">
                Analyze current processes and identify transformation opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Planning
              </h3>
              <p className="text-gray-300">
                Develop a comprehensive transformation roadmap and strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Implementation
              </h3>
              <p className="text-gray-300">
                Execute the transformation plan with expert guidance and support.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Optimization
              </h3>
              <p className="text-gray-300">
                Continuously monitor and optimize for maximum efficiency and results.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts guide you through a successful digital transformation journey.
          </p>
          <button className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Start Your Transformation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;