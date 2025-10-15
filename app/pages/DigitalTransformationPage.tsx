import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowPathIcon,
  UserGroupIcon,
  CursorArrowRaysIcon,
  ChartBarIcon,
  LightBulbIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      title: "Process Automation",
      description: "Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.",
      icon: ArrowPathIcon,
      features: [
        "Workflow automation",
        "Document processing",
        "Data integration",
        "Task scheduling",
        "Error reduction",
        "Cost savings"
      ],
      price: "Starting at $2,000/month"
    },
    {
      title: "Technology Integration",
      description: "Seamlessly integrate new technologies with your existing systems for a unified digital ecosystem.",
      icon: CursorArrowRaysIcon,
      features: [
        "System integration",
        "API development",
        "Data migration",
        "Cloud migration",
        "Legacy modernization",
        "Performance optimization"
      ],
      price: "Starting at $3,500/month"
    },
    {
      title: "Change Management",
      description: "Guide your team through digital transformation with comprehensive change management strategies.",
      icon: UserGroupIcon,
      features: [
        "Training programs",
        "Change communication",
        "Resistance management",
        "Adoption strategies",
        "Performance monitoring",
        "Continuous improvement"
      ],
      price: "Starting at $1,500/month"
    },
    {
      title: "Digital Strategy",
      description: "Develop comprehensive digital strategies that align with your business goals and market opportunities.",
      icon: LightBulbIcon,
      features: [
        "Digital roadmap",
        "Technology assessment",
        "ROI analysis",
        "Risk management",
        "Implementation planning",
        "Success metrics"
      ],
      price: "Starting at $2,500/month"
    }
  ];

  const process = [
    {
      step: "Assessment",
      title: "Current State Analysis",
      description: "We analyze your current technology stack, processes, and identify areas for improvement.",
      icon: ChartBarIcon
    },
    {
      step: "Strategy",
      title: "Digital Roadmap",
      description: "We develop a comprehensive digital transformation strategy tailored to your business needs.",
      icon: LightBulbIcon
    },
    {
      step: "Implementation",
      title: "Solution Deployment",
      description: "We implement the digital solutions with minimal disruption to your ongoing operations.",
      icon: ArrowPathIcon
    },
    {
      step: "Optimization",
      title: "Continuous Improvement",
      description: "We monitor performance and continuously optimize your digital solutions for maximum ROI.",
      icon: CursorArrowRaysIcon
    }
  ];

  const benefits = [
    "Increased Efficiency",
    "Cost Reduction",
    "Better Customer Experience",
    "Data-Driven Decisions",
    "Competitive Advantage",
    "Future-Proof Technology"
  ];

  return (
    <>
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive digital transformation services. Process automation, technology integration, and change management." />
        <meta name="keywords" content="digital transformation, process automation, technology integration, change management, business transformation" />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Digital Transformation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business for the digital age with our comprehensive digital transformation services. 
              From process automation to technology integration, we help you stay competitive and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Transformation
              </Link>
              <Link 
                to="/demo" 
                className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Digital Transformation Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <div className="mb-6">
                    <p className="text-orange-400 font-semibold text-lg">{service.price}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact"
                    className="text-orange-400 hover:text-orange-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Digital Transformation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-orange-400 font-bold text-lg mb-2">Step {index + 1}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Benefits of Digital Transformation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our digital transformation services can help you stay competitive and future-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-orange-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-orange-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DigitalTransformationPage;
