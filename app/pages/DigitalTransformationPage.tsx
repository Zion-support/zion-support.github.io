import React from "react";
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
          <h1 className="text-5xl font-bold text-white mb-6">
            Digital Transformation Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge digital solutions that drive efficiency, 
            innovation, and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our Digital Transformation Services?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-12 border border-white/20">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through a successful digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold">
              Start Your Transformation
            </button>
            <button className="px-8 py-4 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;
