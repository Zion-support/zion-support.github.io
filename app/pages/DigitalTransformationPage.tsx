import React from "react";
import { Helmet } from "react-helmet-async";
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from "lucide-react";

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: "Process Automation",
      description: "Streamline and automate business processes to improve efficiency and reduce manual errors.",
      features: ["Workflow Analysis", "Process Mapping", "Automation Implementation", "Performance Monitoring"]
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your team through digital transformation with effective change management strategies.",
      features: ["Training Programs", "Stakeholder Engagement", "Communication Plans", "Resistance Management"]
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Develop comprehensive digital transformation roadmaps aligned with your business goals.",
      features: ["Technology Assessment", "Gap Analysis", "Implementation Roadmap", "Success Metrics"]
    },
    {
      icon: TrendingUp,
      title: "Data Analytics",
      description: "Leverage data-driven insights to make informed business decisions and drive growth.",
      features: ["Data Collection", "Analytics Setup", "Dashboard Creation", "Insight Generation"]
    },
    {
      icon: Lightbulb,
      title: "Innovation Consulting",
      description: "Identify and implement innovative technologies to give your business a competitive edge.",
      features: ["Technology Research", "Innovation Workshops", "Pilot Programs", "Scalability Planning"]
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Ensure the quality and reliability of your digital transformation initiatives.",
      features: ["Testing Strategies", "Quality Metrics", "Performance Monitoring", "Continuous Improvement"]
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
            Digital Transformation
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with comprehensive digital solutions that drive efficiency, 
            innovation, and growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Why Choose Our Digital Transformation Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our experts guide you through a successful digital transformation journey.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTransformationPage;