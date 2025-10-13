import { ArrowRight, CheckCircle, Users, Clock, Shield, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Consultation() {
  const consultationTypes = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy Consultation",
      description: "Develop a comprehensive AI strategy tailored to your business needs",
      duration: "2-4 weeks",
      price: "Starting at $5,000",
      features: [
        "AI readiness assessment",
        "Technology roadmap development",
        "ROI analysis and projections",
        "Implementation planning"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and improvement recommendations",
      duration: "1-2 weeks",
      price: "Starting at $3,000",
      features: [
        "Security vulnerability assessment",
        "Compliance evaluation",
        "Risk analysis and mitigation",
        "Security improvement plan"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Complete digital transformation strategy and implementation plan",
      duration: "4-6 weeks",
      price: "Starting at $10,000",
      features: [
        "Current state analysis",
        "Future state vision",
        "Technology selection",
        "Change management strategy"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Discovery",
      description: "We start with a comprehensive discovery session to understand your business, challenges, and goals."
    },
    {
      step: "02",
      title: "Analysis & Assessment",
      description: "Our experts analyze your current systems, processes, and technology stack."
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "We develop a customized strategy and roadmap tailored to your specific needs."
    },
    {
      step: "04",
      title: "Implementation Plan",
      description: "We provide detailed implementation plans with timelines, resources, and milestones."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert Technology Consulting</title>
        <meta
          name="description"
          content="Get expert technology consultation from Zion Tech Group. AI strategy, cybersecurity audits, and digital transformation consulting services."
        />
        <meta
          name="keywords"
          content="technology consulting, AI strategy, cybersecurity audit, digital transformation, IT consulting, business strategy"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Users className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Expert Consultation</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our technology experts. We'll help you navigate 
              complex decisions and create a roadmap for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the consultation type that best fits your needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {consultationTypes.map((consultation, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                    {consultation.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {consultation.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {consultation.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-gray-400">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{consultation.duration}</span>
                      </div>
                      <div className="text-cyan-400 font-semibold">
                        {consultation.price}
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {consultation.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Consultation Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A structured approach to delivering maximum value
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose Our Consultation?
                </h2>
                <p className="text-xl text-gray-300">
                  We bring decades of combined experience and proven methodologies
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Expert Knowledge</h3>
                  <p className="text-gray-300">
                    Our consultants have deep expertise in AI, cloud computing, and cybersecurity.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
                  <p className="text-gray-300">
                    We've helped 200+ companies achieve their technology goals successfully.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Personalized Approach</h3>
                  <p className="text-gray-300">
                    Every consultation is tailored to your specific business needs and goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a free initial consultation to discuss your project and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}